const safe = (value, fn) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? String(value ?? '') : fn(date);
};

/** e.g. "Monday, October 14, 2025" */
export const formatLongDate = (value) =>
  safe(value, (d) =>
    d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  );

/** e.g. "October 14, 2025" */
export const formatDate = (value) =>
  safe(value, (d) => d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }));

/** e.g. "09:30 AM" */
export const formatTime = (value) =>
  safe(value, (d) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));

/** e.g. "09:30 AM - 05:00 PM" */
export const formatTimeRange = (start, end) => {
  const s = formatTime(start);
  const e = formatTime(end);
  return s && e ? `${s} - ${e}` : '';
};
