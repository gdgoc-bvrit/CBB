/**
 * Fetches events from Google Sheets
 * @returns {Promise<Array>} Array of event objects
 */
export async function fetchEventsFromSheet() {
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/1r9n0_CEiEWHzUi4D4Q8SL5nJLbxgYkFbaht7DIuBod4/gviz/tq?tqx=out:json&sheet=events";
  
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    // Google Sheets returns data wrapped in a callback, we need to extract JSON
    const jsonMatch = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
    if (!jsonMatch) {
      throw new Error("Invalid response format from Google Sheets");
    }
    
    const data = JSON.parse(jsonMatch[1]);
    
    console.log("📊 Raw Google Sheets data:", data);
    
    if (!data.table || !data.table.rows) {
      console.warn("No table or rows in response");
      return [];
    }
    
    console.log("📋 Total rows:", data.table.rows.length);
    console.log("📋 Total cols:", data.table.cols.length);
    
    // Extract column headers from data.table.cols (not from first row!)
    if (!data.table.cols || data.table.cols.length === 0) {
      console.warn("No columns in response");
      return [];
    }
    
    const headers = data.table.cols.map((col, index) => {
      const label = col.label || "";
      const value = String(label).toLowerCase().trim();
      console.log(`Header ${index}:`, value);
      return value;
    });
    
    console.log("📝 Headers:", headers);
    
    // Map all rows to objects (no need to skip first row since headers come from cols)
    const events = data.table.rows
      .map((row, rowIndex) => {
        if (!row || !row.c) {
          console.warn(`Row ${rowIndex + 2} has no cells`);
          return null;
        }
        
        const event = {};
        row.c.forEach((cell, cellIndex) => {
          const header = headers[cellIndex];
          if (header && cell && cell.v !== null && cell.v !== undefined) {
            // Handle empty strings - don't skip them, just set to empty
            event[header] = cell.v;
          }
        });
        
        console.log(`📦 Raw event data (row ${rowIndex + 2}):`, event);
        
        // Normalize field names (Google Sheets may have different casing)
        const normalizedEvent = {
          id: event.id || event.Id || event.ID || "",
          title: event.title || event.Title || "",
          category: event.category || event.Category || "",
          status: event.status || event.Status || "",
          startDate: event.startdate || event.startDate || event.StartDate || "",
          endDate: event.enddate || event.endDate || event.EndDate || "",
          venue: event.venue || event.Venue || "",
          mode: event.mode || event.Mode || "",
          description: event.description || event.Description || "",
          registrationLink: event.registrationlink || event.registrationLink || event.RegistrationLink || "",
          priority: event.priority || event.Priority || "",
          poster: event.poster || event.Poster || "",
          logo: event.logo || event.Logo || "",
          brochureLink: event.brochurelink || event.brochureLink || event.BrochureLink || "",
          parentEventId: event.parenteventid || event.parentEventId || event.ParentEventId || "",
          theme: event.theme || event.Theme || "",
          detailedDescription: event.detaileddescription || event.detailedDescription || event.DetailedDescription || "",
          prizeInfo: event.prizeinfo || event.prizeInfo || event.PrizeInfo || "",
          problemStatementLink: event.problemstatementlink || event.problemStatementLink || event.ProblemStatementLink || "",
          stages: event.stages || event.Stages || "",
        };
        
        console.log(`✅ Normalized event (row ${rowIndex + 2}):`, normalizedEvent);
        
        // Only return events with required fields
        if (normalizedEvent.id && normalizedEvent.title && normalizedEvent.startDate) {
          return normalizedEvent;
        } else {
          console.warn(`❌ Event missing required fields (row ${rowIndex + 2}):`, {
            hasId: !!normalizedEvent.id,
            hasTitle: !!normalizedEvent.title,
            hasStartDate: !!normalizedEvent.startDate
          });
        }
        return null;
      })
      .filter(event => event !== null);
    
    console.log("🎯 Final events array:", events);
    return events;
  } catch (error) {
    console.error("Error fetching events from Google Sheets:", error);
    throw error;
  }
}

/**
 * Classifies events into featured, other upcoming, ongoing, and past
 * @param {Array} events - Array of event objects
 * @returns {Object} Object with featured, otherUpcoming, ongoing, and past arrays
 */
export function classifyEvents(events) {
  const now = new Date();
  const ongoing = [];
  const upcoming = [];
  const past = [];
  
  events.forEach(event => {
    try {
      // Ensure startDate and endDate are strings before parsing
      const startDateStr = String(event.startDate || "").trim();
      const endDateStr = String(event.endDate || "").trim();
      
      if (!startDateStr || !endDateStr) {
        console.warn("Missing date for event:", event.id);
        return;
      }
      
      const startDate = new Date(startDateStr);
      const endDate = new Date(endDateStr);
      
      // Skip if dates are invalid
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        console.warn("Invalid date for event:", event.id, "startDate:", startDateStr, "endDate:", endDateStr);
        return;
      }
      
      // Normalize status to lowercase for comparison
      const status = String(event.status || "").toLowerCase().trim();
      
      // Ongoing: now >= startDate && now <= endDate
      if (now >= startDate && now <= endDate) {
        ongoing.push(event);
      }
      // Upcoming: status === "upcoming" && startDate > now
      else if (status === "upcoming" && startDate > now) {
        // Only include events within 7 days (1 week)
        const daysUntilEvent = (startDate - now) / (1000 * 60 * 60 * 24);
        if (daysUntilEvent <= 7) {
          upcoming.push(event);
          console.log(`✅ Upcoming event within 7 days: ${event.title}, Days until: ${daysUntilEvent.toFixed(2)}`);
        } else {
          console.log(`⏭️ Event filtered out (beyond 7 days): ${event.title}, Days until: ${daysUntilEvent.toFixed(2)}`);
        }
      }
      // Past: endDate < now
      else if (endDate < now) {
        past.push(event);
      }
    } catch (error) {
      console.error("Error processing event:", event.id, error);
    }
  });
  
  // Sort ongoing by endDate (earliest first)
  ongoing.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
  
  // Sort upcoming by priority (ascending), then startDate (ascending)
  upcoming.sort((a, b) => {
    const priorityA = parseInt(a.priority) || 999;
    const priorityB = parseInt(b.priority) || 999;
    if (priorityA !== priorityB) {
      return priorityA - priorityB;
    }
    return new Date(a.startDate) - new Date(b.startDate);
  });
  
  // Sort past by endDate (most recent first)
  past.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));
  
  // Featured event: If there's an ongoing event, show it. Otherwise, show the first upcoming event
  const featuredEvent = ongoing.length > 0 ? ongoing[0] : (upcoming.length > 0 ? upcoming[0] : null);
  
  // Other upcoming events: All upcoming events except the featured one (if featured is from upcoming)
  const otherUpcoming = ongoing.length > 0 
    ? upcoming // If ongoing exists, all upcoming are "other"
    : upcoming.slice(1); // Otherwise, skip the first one (featured)
  
  return {
    featured: featuredEvent,
    otherUpcoming,
    past,
  };
}

/**
 * Get sub-events for a parent event
 * @param {Array} allEvents - All events from the sheet
 * @param {string} parentEventId - ID of the parent event
 * @returns {Array} Array of sub-events
 */
export function getSubEvents(allEvents, parentEventId) {
  if (!allEvents || !parentEventId) return [];
  
  return allEvents.filter(event => {
    const eventParentId = String(event.parentEventId || "").trim().toLowerCase();
    const targetParentId = String(parentEventId).trim().toLowerCase();
    return eventParentId === targetParentId;
  });
}

