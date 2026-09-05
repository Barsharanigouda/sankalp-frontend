export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Clubs', href: '#clubs' },
  { label: 'Partners', href: '#partners' },
  { label: 'Register', href: '#register' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
]

export const stats = [
  { label: 'Footfall', value: '8,400+' },
  { label: 'Colleges represented', value: '62' },
  { label: 'Prize pool disbursed', value: '₹3,80,000' },
  { label: 'Hackathon submissions', value: '96' },
]

export const events = [
  {
    id: 'TRK_01',
    name: 'Hack the Sankalp',
    tag: '36-hour hackathon',
    description:
      'Thirty-six hours, four problem statements from our industry partners, and a hard demo cutoff. Teams of up to four. Hardware track runs alongside software.',
    prize: '₹1,50,000',
    capacity: '120 teams',
    expanded: true,
  },
  { id: 'TRK_02', name: 'Robowars', tag: 'Combat robotics' },
  { id: 'TRK_03', name: 'Boardroom', tag: 'Case study competition' },
  { id: 'TRK_04', name: 'LAN Arena', tag: 'Esports' },
  { id: 'TRK_05', name: 'Amphitheatre Nights', tag: 'Three nights of live music' },
  { id: 'TRK_06', name: 'Footwork', tag: 'Dance battle' },
]

export const clubZone = {
  timing: 'Daily, 12:00 PM – 4:00 PM · both days · walk in any time, play as many booths as you like',
  clubs: [
    { name: 'Club Excel', game: 'Spreadsheet speed-run — build a formula-driven dashboard against the clock' },
    { name: 'Club Innova', game: 'Rapid prototyping challenge — build a working mini-solution from junk parts in 2 hours' },
    { name: 'NMS — NIST Musical Society', game: 'Music mafia / musical chairs with live instruments' },
    { name: 'NIST Dance Club', game: 'Freestyle dance battle, open floor' },
    { name: 'NIST Robotics Club', game: 'Line-follower bot race' },
    { name: 'Electronic Hobby Club', game: 'Circuit-building relay — assemble a working circuit from a kit, fastest wins' },
    { name: 'Club Eureka', game: 'Campus-wide treasure hunt with science riddles' },
    { name: 'Media Movers', game: '60-second reel-making contest, shot and edited on the spot' },
    { name: 'NCC Club', game: 'Obstacle course + drill demo' },
    { name: 'Club NSS', game: 'Awareness booth games — blood donation pledge quiz, eco-quiz' },
    { name: 'Club Multi Media', game: 'Live photography scavenger hunt' },
    { name: 'AD Club', game: 'On-the-spot poster / ad design challenge' },
    { name: 'Club REC', game: 'Board game & card game tournament — chess, UNO, carrom' },
    { name: 'Astronomy Club', game: 'Stargazing session + space trivia' },
  ],
}

export const schedule = [
  {
    day: 'Day 01',
    date: 'NOV (date TBA)',
    items: [
      { time: '09:00', title: 'Registration & kit pickup', place: 'Main Gate Plaza' },
      { time: '11:00', title: 'Inauguration', place: 'Central Auditorium' },
      { time: '13:00', title: 'Hack the Sankalp — problem drop', place: 'CS Block, Lab 4' },
      { time: '15:00', title: 'Boardroom prelims', place: 'MBA Block' },
      { time: '17:00', title: 'Robowars round of 32', place: 'Mech Arena' },
      { time: '19:30', title: 'Campus bands night', place: 'Amphitheatre' },
    ],
  },
  {
    day: 'Day 02',
    date: 'NOV (date TBA)',
    items: [
      { time: '01:00', title: 'Hackathon demo cutoff', place: 'CS Block, Lab 4' },
      { time: '10:30', title: 'Robowars finals', place: 'Mech Arena' },
      { time: '13:00', title: 'Boardroom finals & defence', place: 'Central Auditorium' },
      { time: '16:00', title: 'Footwork crew showdown', place: 'Open Air Theatre' },
      { time: '18:00', title: 'Prize distribution', place: 'Central Auditorium' },
      { time: '20:00', title: 'Closing headliner', place: 'Amphitheatre' },
    ],
  },
]

export const partners = {
  title: [
    { name: 'Odisha Digital Works' },
    { name: 'Kalinga Motors' },
  ],
  gold: [
    { name: 'Devfolio' },
    { name: 'Polygon' },
    { name: 'Ather Energy' },
    { name: 'Zoho' },
  ],
  marquee: ['Zoho', 'Unstop', 'Red Bull', 'Bhubaneswar FM', 'BookMyShow', 'Devfolio', 'Polygon', 'Ather Energy'],
}

export const registrationTracks = [
  'Hack the Sankalp',
  'Robowars',
  'Boardroom',
  'LAN Arena',
  'Amphitheatre Nights',
  'Footwork',
  'Labs',
  'Open Mic & Lit',
]

export const team = [
  { role: 'Fest Convenor', name: 'Ananya Mohapatra', dept: 'CSE, 4th year' },
  { role: 'Technical Head', name: 'Rohit Panigrahi', dept: 'ECE, 4th year' },
  { role: 'Cultural Head', name: 'Sneha Das', dept: 'CSE, 3rd year' },
  { role: 'Sponsorship Lead', name: 'Aditya Sahu', dept: 'MBA, 2nd year' },
  { role: 'Design & Brand', name: 'Ishita Rath', dept: 'CSE, 3rd year' },
  { role: 'Logistics', name: 'Kunal Behera', dept: 'Mechanical, 4th year' },
  { role: 'Hospitality', name: 'Priyanka Nayak', dept: 'EEE, 3rd year' },
  { role: 'Media & PR', name: 'Sarthak Mishra', dept: 'CSE, 2nd year' },
]

export const faq = [
  {
    q: 'Who can register for Sankalp?',
    a: 'Any student with a valid college ID from any institution in India. A few tracks — Labs and the open mic — are also open to NIST alumni.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'General fest access is free. Competitive tracks carry a per-team fee you pay after your team is confirmed.',
  },
  {
    q: 'Is accommodation provided for outstation participants?',
    a: 'Yes — outstation participants can request hostel accommodation in the same email thread as their registration confirmation.',
  },
  {
    q: 'Can I register for more than one track?',
    a: 'Yes, one form covers every track. Just select all the tracks you want to take part in.',
  },
  {
    q: 'What is the deadline?',
    a: 'Entries close shortly before the fest — exact date to be announced closer to November. Late entries are only accepted for general fest access, not competitive tracks.',
  },
]
