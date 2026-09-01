// TechSurge 2K26 — static event data (replaces the Google Sheet source).
// Update this file when event details change.

export const TECHSURGE_GUIDE_URL =
  "https://docs.google.com/document/d/1eHs814exL1mGgyM9cFJuXcMzLk7WO_j6/mobilebasic";

export const TECHSURGE_WEBSITE_URL = "https://www.techsurge.in/";

export const featuredEvent = {
  id: "techsurge-2k26",
  title: "TechSurge 2K26",
  tagline: "Where Demons Fall and Worlds Collide",
  subtitle: "Kalachakra × Chitralekha",
  presentedBy: "Department of Computer Science & Engineering",
  dateDisplay: "18th & 19th September 2026",
  startDate: "2026-09-18T09:00:00+05:30",
  endDate: "2026-09-19T15:30:00+05:30",
  countdownLabel: "Hackathon begins in",
  venue: "BVRIT Auditorium, Narsapur",
  mode: "In person · Campus",
  logo: "",
  poster: "/posters/TECHSURGE_2026.jpg",
  description:
    "TechSurge 2k26 is the ultimate platform for builders, innovators, and thinkers — a seamless blend of intense hackathons, AI challenges, and midnight fun, pushing the boundaries of what is possible in tech.",
  highlights: [
    "Over 500+ expected participants",
    "Non-stop 28-hour campus experience",
    "Networking with mentors and startups",
    "Exciting swag and prizes",
  ],
  actions: [
    { label: "Register Now", href: TECHSURGE_WEBSITE_URL, variant: "primary" },
    { label: "View Schedule", href: "#techsurge-schedule", variant: "outline" },
    { label: "TechSurge Guide", href: TECHSURGE_GUIDE_URL, variant: "ghost" },
  ],
};

// Big numbers for the overview.
export const headlineStats = [
  { label: "Participants", value: "500+", note: "expected on campus" },
  { label: "Hours", value: "28", note: "non-stop build time" },
  { label: "Prize pool", value: "₹1L", note: "up to 1 Lakh INR" },
  { label: "Flagship events", value: "2", note: "Kalachakra + Chitralekha" },
];

// Compact key / value facts.
export const quickFacts = [
  { label: "Format", value: "In person, on the BVRIT campus" },
  { label: "Team size", value: "2–4 members (single entries not allowed)" },
  { label: "Eligibility", value: "UG students · inter-college teams allowed" },
  { label: "Venue", value: "BVRIT Auditorium, Narsapur" },
  { label: "Registration fee", value: "₹100 / team (Round 1) · ₹600 / team (Round 2)" },
  { label: "Dates", value: "18th & 19th September 2026" },
];

export const subEvents = [
  {
    id: "kalachakra",
    title: "Kalachakra",
    category: "Hackathon",
    theme: "Build. Break. Innovate.",
    accent: "#ff8a4c",
    poster: "/posters/KALACHAKRA_2026.jpeg",
    dateDisplay: "18th & 19th September 2026 · 28 hours",
    venue: "BVRIT Auditorium, Narsapur",
    mode: "Offline",
    teamSize: "2–4 members (inter-college teams allowed)",
    fee: "₹100 / team (Round 1) · ₹600 / team (Round 2, if selected)",
    prizeInfo: "Prizes up to ₹1 Lakh INR",
    stages: "Srishti (ideation) → Sankalp (execution) → Samarth (final functionality & impact)",
    quickFacts: [
      { label: "Team", value: "2–4 members" },
      { label: "Round 1 fee", value: "₹100 / team" },
      { label: "Duration", value: "28-hour final" },
    ],
    description:
      "A 28-hour national-level hackathon where teams of 2–4 go head-to-head building real-world solutions across multiple tech tracks.",
    detailedDescription:
      "Kalachakra is a 28-hour national-level hackathon where teams of 2–4 go head-to-head building real-world solutions across multiple tech tracks. Starting at 9:00 AM on September 18th, teams will architect, code, and ship a working product under pressure — guided by mentors, fueled by caffeine, and judged on impact, innovation, and execution.\n\nRound 1 is a PPT-only screening round: no coding or prototype required. Top-performing Round 1 teams advance to the offline 28-hour hackathon.",
    perks: [
      "Workshops, mentor sessions & API credits",
      "Multiple domain tracks to choose from",
      "Presentations to a panel of industry judges",
      "Prizes up to ₹1 Lakh INR",
    ],
    registrationLink: "https://hackindia.org/2026/techsurge-2k26",
    problemStatementLink: "https://drive.google.com/file/d/1U53Na_3Nuf_6oluSl6hVZcJPVQlYIyT1/view",
    steps: [
      {
        title: "Register on HackIndia",
        description: "Create your account on the HackIndia platform.",
        href: "https://hackindia.org/2026/techsurge-2k26",
        linkLabel: "Open HackIndia",
      },
      {
        title: "Form your team",
        description:
          "The team leader receives a unique invite code. Share it so teammates can join and form the team on HackIndia.",
      },
      {
        title: "Check the problem statement",
        description: "Download and study the Round 1 problem statement PDF.",
        href: "https://drive.google.com/file/d/1U53Na_3Nuf_6oluSl6hVZcJPVQlYIyT1/view",
        linkLabel: "View problem statement",
      },
      {
        title: "Prepare your solution PPT",
        description:
          "No coding or prototype is required for Round 1 — prepare a PPT explaining your solution approach.",
      },
      {
        title: "Check the evaluation criteria",
        description: "Review the evaluation criteria in the problem statement before preparing your submission.",
      },
      {
        title: "Submit the Google Form",
        description: "Fill the official Round 1 submission form and complete the ₹100 / team payment (₹25 per person for a 4-member team).",
        href: "https://forms.gle/dxZBVobv4rnHnfMc7",
        linkLabel: "Open submission form",
      },
    ],
  },
  {
    id: "chitralekha",
    title: "Chitralekha",
    category: "AI Challenge",
    theme: "Prompt. Create. Impress.",
    accent: "#4cdef5",
    poster: "/posters/CHITRALEKHA_2026.jpg",
    dateDisplay: "19th September 2026 · 1 day",
    venue: "Seminar Hall, BVRIT Narsapur",
    mode: "Offline",
    teamSize: "1–2 members",
    fee: "₹100 / team",
    prizeInfo: "Part of the ₹1 Lakh TechSurge prize pool",
    quickFacts: [
      { label: "Team", value: "1–2 members" },
      { label: "Fee", value: "₹100 / team" },
      { label: "Format", value: "1-day promptathon" },
    ],
    description:
      "A fast-paced AI Tools & Prompt Engineering challenge — no deep coding required. Solve real-world creative tasks with AI tools and smart prompting under time pressure.",
    detailedDescription:
      "Chitralekha is a fast-paced AI Tools & Prompt Engineering promptathon. Participants are given real-world creative tasks and must use AI tools and smart prompting to solve them under time pressure — for example, building a landing page using AI tools in under an hour or recreating a given design with the best prompts. Submissions are judged on creativity, accuracy, and prompt efficiency.",
    perks: [
      "Build a landing page using AI tools in under 1 hour",
      "Recreate a given design using the best prompts",
      "Generate, iterate, and present your AI-assisted output",
      "Judged on creativity, accuracy & prompt efficiency",
    ],
    registrationLink: "https://forms.gle/LTLi3ETQ8BCthzVr7",
    steps: [
      {
        title: "Register on Craftora",
        description: "Find CHITRALEKHA under the Hackathon section on Craftora.",
        href: "https://craftora.tech/",
        linkLabel: "Open Craftora",
      },
      {
        title: "Fill the Chitralekha form",
        description: "Team size up to 2 members · ₹100 per team.",
        href: "https://forms.gle/LTLi3ETQ8BCthzVr7",
        linkLabel: "Open registration form",
      },
    ],
  },
];

// 28-hour schedule. `category` drives the colour accent.
export const schedule = [
  {
    day: "Day 1",
    subtitle: "Kickoff & Build Phase",
    items: [
      { time: "09:00 AM", category: "Logistics", title: "Registration Desk Opens", location: "Main Auditorium", description: "Participants check in, verify registration, and collect badges and ID cards." },
      { time: "09:30 AM", category: "Logistics", duration: "30 min", title: "Assembly", location: "Main Auditorium", description: "All participants gather for the pre-event briefing, safety instructions, and rules walkthrough." },
      { time: "10:00 AM", category: "Ceremony", duration: "60 min", title: "Inauguration & Opening Ceremony", location: "Main Auditorium", description: "Official opening — keynote address, guest introductions, and welcome from the organizers." },
      { time: "10:20 AM", category: "Milestone", title: "Problem Statements Released", location: "Main Auditorium", description: "Official track challenges are unveiled live on stage for the first time. Teams receive their problem statements." },
      { time: "10:30 AM", category: "Milestone", title: "Hacking Begins", tag: "Official Start", location: "All Hack Spaces", description: "Teams head to their designated spaces and begin building their solutions for the next 28 hours." },
      { time: "11:00 AM", category: "Milestone", duration: "90 min", title: "Round 1 — Srishti", location: "Hack Spaces", description: "Teams set up workspaces, plan their approach, and begin building initial prototypes." },
      { time: "11:00 AM", category: "Mentorship", duration: "Ongoing", title: "Mentor Office Hours Open", location: "Mentor Hub (CR-101)", description: "Mentors available for guidance on technical implementation, product direction, architecture, and strategy." },
      { time: "12:30 PM", category: "Judging", duration: "30 min", title: "Initial Progress Review", location: "Hack Spaces", description: "Judges evaluate initial progress. Teams demonstrate their approach. No shortlisting or elimination at this stage." },
      { time: "01:00 PM", category: "Break", duration: "60 min", title: "Lunch", location: "Dining Area", description: "Lunch served for all participants." },
      { time: "02:00 PM", category: "Judging", duration: "2 hrs", title: "Round 2 — Sankalp", location: "Hack Spaces", description: "Second evaluation round. Teams deepen their build, refine the solution, and demonstrate meaningful progress." },
      { time: "04:00 PM", category: "Break", duration: "15 min", title: "Break", location: "All Areas", description: "Short refreshment break for all participants." },
      { time: "04:15 PM", category: "Milestone", duration: "3 hrs 15 min", title: "Round 2 (Continued)", location: "Hack Spaces", description: "Teams continue building and polishing their Round 2 submission." },
      { time: "04:30 PM", category: "Mentorship", duration: "60 min", title: "Progress Check-In", location: "Track Zones", description: "Teams can briefly update mentors on progress and ask clarifying questions." },
      { time: "07:30 PM", category: "Break", duration: "60 min", title: "Dinner", location: "Dining Area", description: "Dinner served for all participants." },
      { time: "08:30 PM", category: "Activity", duration: "60 min", title: "Musical Night", location: "Main Auditorium", description: "Unwind with a live musical performance — the highlight midnight stretch activity." },
      { time: "09:30 PM", category: "Judging", duration: "30 min", title: "Round 2 Review", location: "Judging Areas", description: "Judges review Round 2 progress and finalize teams advancing to Round 3." },
      { time: "10:00 PM", category: "Milestone", duration: "2 hrs", title: "Round 3 — Samarth Begins", location: "Hack Spaces", description: "Final evaluation round. Teams push toward a complete, demo-ready product." },
      { time: "11:00 PM", category: "Mentorship", duration: "Ongoing", title: "Late Night Mentor Office Hours", location: "Mentor Hub", description: "Mentors remain available for late-stage technical support through the night." },
    ],
  },
  {
    day: "Day 2",
    subtitle: "Final Sprint & Showcase",
    items: [
      { time: "12:00 AM", category: "Activity", duration: "2 hrs", title: "Activities & Refreshments", location: "Hack Zones", description: "Midnight fun activities, surprise challenges, snacks, and energy drinks to keep teams going." },
      { time: "12:00 AM", category: "Break", duration: "Snack", title: "Midnight Snacks", location: "All Hack Spaces", description: "Light snacks and coffee available for teams working overnight." },
      { time: "02:00 AM", category: "Milestone", duration: "5 hrs", title: "Round 3 (Continued)", location: "Hack Spaces", description: "Teams continue the final round sprint — building, testing, and refining solutions overnight." },
      { time: "03:00 AM", category: "Logistics", duration: "Ongoing", title: "Wellbeing Check", location: "All Areas", description: "Volunteers make rounds to ensure participants are safe and comfortable through the night." },
      { time: "07:00 AM", category: "Break", duration: "2 hrs", title: "Morning Break & Breakfast", location: "Dining Area", description: "Breakfast and a short rest before the final push." },
      { time: "09:00 AM", category: "Milestone", duration: "3 hrs", title: "Final Sprint — Round 3 (Continued)", location: "Hack Spaces", description: "Last stretch — teams complete, test, and prepare their projects for final submission." },
      { time: "11:00 AM", category: "Mentorship", duration: "Ongoing", title: "Mentor Final Office Hours", location: "Mentor Hub", description: "Last mentor support window before the submission deadline." },
      { time: "12:00 PM", category: "Break", duration: "60 min", title: "Lunch", location: "Dining Area", description: "Lunch served for all participants." },
      { time: "01:00 PM", category: "Judging", duration: "2 hrs", title: "Final Review & Presentations", location: "Judging Rooms + Main Auditorium", description: "Judges evaluate all final submissions. Selected teams present their projects on stage to judges and guests." },
      { time: "03:00 PM", category: "Ceremony", duration: "15 min", title: "Winner Announcements", location: "Main Auditorium", description: "Overall winners and special award recipients are announced." },
      { time: "03:15 PM", category: "Ceremony", duration: "15 min", title: "Closing Ceremony & Vote of Thanks", location: "Main Auditorium", description: "Prize distribution, closing remarks, and vote of thanks from the organizers." },
    ],
  },
];

// Legend order for the schedule category chips.
export const scheduleCategories = [
  "Ceremony",
  "Milestone",
  "Judging",
  "Mentorship",
  "Activity",
  "Break",
  "Logistics",
];

// Extra upcoming events (rendered as EventCards). Empty for now.
export const otherEvents = [];
