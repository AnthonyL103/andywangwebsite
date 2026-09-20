import drone from './assets/photos/dronedlying.jpg'
import aquasense from './assets/photos/aquasensephoto.jpg'
import vexWin from './assets/photos/vexteamwin.jpg'
import vexComp from './assets/photos/vexcompphoto.jpg'
import stemExpo from './assets/photos/stemexpo.jpg'
import band from './assets/photos/bandphoto.jpg'
import usOpen from './assets/photos/usopenchampionphoto.jpeg'
import selfie from './assets/photos/selfiemisc.jpg'
import soccer from './assets/photos/soccermisc.jpg'
import dad from './assets/photos/andyDadmisc.jpg'

export const photos = { drone, aquasense, vexWin, vexComp, stemExpo, band, usOpen, selfie, soccer, dad }

export const profile = {
  name: 'Andy Dakai Wang',
  first: 'Andy',
  location: 'Sammamish, WA',
  email: 'andydakaiwang@gmail.com',
  phone: '(425) 362-9835',
  school: 'Tesla STEM High School',
  grad: 'Class of 2027',
  gpa: '3.838',
  sat: '1550',
  tagline: 'Engineer. Builder. Athlete. Mentor.',
  blurb:
    'I design and build things that protect water, fly, and win, from lake-monitoring drones to championship robots, and I love teaching others to do the same.',
}

export const stats = [
  { value: 1550, label: 'SAT', sub: '800 Math · 750 EBRW' },
  { value: 3.838, label: 'GPA', sub: 'out of 4.0', decimals: 3 },
  { value: 30, suffix: '+', label: 'Students mentored', sub: 'VEX IQ robotics' },
  { value: 3, label: 'National / World-level titles', sub: 'incl. VEX U.S. Open' },
]

export type Project = {
  id: string
  eyebrow: string
  title: string
  role: string
  date: string
  summary: string
  bullets: string[]
  tags: string[]
  images: { src: string; alt: string; pos?: string }[]
  chip?: string
}

export const projects: Project[] = [
  {
    id: 'algae',
    eyebrow: 'Environmental Drone',
    title: 'Aerial Algae Bloom Monitoring System',
    role: 'Designer · Builder · Programmer',
    date: 'May 2026 – Present',
    summary:
      'A custom quadcopter that flies over a local lake and spots harmful algae blooms from the air.',
    bullets: [
      'Designed and built the entire drone solo, with a CAD-modeled, 3D-printed airframe with flight controller, ESCs, brushless motors and telemetry.',
      'Wrote Python + OpenCV computer vision that identifies algae blooms from 100+ aerial images with 100% accuracy.',
      'Layered on trophic state index (TSI) risk analysis and ran 20+ flight tests to refine stability and data quality.',
    ],
    tags: ['Python', 'OpenCV', 'CAD', '3D Printing', 'Flight Systems'],
    images: [{ src: photos.drone, alt: 'Custom quadcopter hovering above a field', pos: '50% 35%' }],
    chip: '100% detection accuracy',
  },
  {
    id: 'aquasense',
    eyebrow: 'Water Quality',
    title: 'AquaSense Monitoring Buoy',
    role: 'Lead Designer & Builder',
    date: 'Jan 2026 – Present',
    summary:
      'A solar-powered buoy that finds hypoxia-risk zones before they harm aquatic life, at a fraction of commercial cost.',
    bullets: [
      'Five sensors (pH, dissolved oxygen, turbidity, conductivity, temperature) feeding Arduino electronics in one compact body.',
      'Cut hardware cost to $400, a fraction of commercial competitors, and validated it at 3 locations.',
      'Iterated waterproof housings in CAD and additive manufacturing for sealing, buoyancy and stability.',
    ],
    tags: ['Arduino', 'Sensors', 'Fusion 360', 'Solar'],
    images: [{ src: photos.aquasense, alt: 'AquaSense buoy floating in water', pos: '50% 55%' }],
    chip: '$400 build cost',
  },
  {
    id: 'vex',
    eyebrow: 'Competitive Robotics',
    title: 'VEX Robotics — VRC & VIQC',
    role: 'Lead Designer, Builder & Driver',
    date: 'Sep 2022 – Mar 2026',
    summary:
      'Four seasons leading mechanical design and driving under match pressure, capped by a U.S. Open title.',
    bullets: [
      'Champion of the Washington State VEX Competition (40+ teams) and the VEX Robotics U.S. Open (100+ teams), 2023.',
      'Optimized drivetrains, intakes, arms, gear ratios and PTOs; designed the team logo and robot cosmetics.',
      'Managed build timelines and split tasks by teammates’ strengths to hit every tournament deadline.',
    ],
    tags: ['Mechanical Design', 'Rapid Prototyping', 'Strategy', 'Leadership'],
    images: [
      { src: photos.vexWin, alt: 'Team with VEX IQ trophies at the U.S. Open', pos: '50% 30%' },
      { src: photos.vexComp, alt: 'Inspecting a robot at a VEX competition', pos: '60% 50%' },
    ],
    chip: 'U.S. Open Champion',
  },
]

export const buildingNow = [
  {
    title: 'Thrust-Vector-Controlled Rocket',
    role: 'Founder / Lead Engineer',
    date: 'Sep 2026 – Present',
    icon: 'rocket' as const,
    points: [
      '1-meter airframe built from scratch with custom avionics and atmospheric sensing.',
      '3D-printed two-axis TVC gimbal, stabilised by a PID loop running on IMU data.',
      'Custom PCB merging flight computer, sensors and power management.',
    ],
    tags: ['PID Control', 'PCB Design', 'Avionics'],
  },
  {
    title: 'Climate-Resilient Floating Community',
    role: 'Lead Designer & Builder',
    date: 'Jul 2026 – Present',
    icon: 'city' as const,
    points: [
      'Modular residential design with dynamic buoyancy and telescoping mooring for storm surge.',
      'Off-grid solar-wind microgrid, rainwater harvesting and greywater filtration.',
      'Fusion 360 models and 3D-printed prototypes of modular components.',
    ],
    tags: ['Fusion 360', 'Sustainability', 'Architecture'],
  },
]

export const honors = [
  { date: 'Jul 2026', title: 'AP Scholar with Distinction', tier: 'major' },
  { date: 'Jun 2026', title: '10th Place — TSA Nationals, Engineering & Design', note: 'thousands of teams worldwide', tier: 'top' },
  { date: 'Jun 2026', title: 'Entrepreneurship Award — Tesla STEM Expo', note: 'out of 7 teams', tier: 'major' },
  { date: 'May 2026', title: 'Most Improved Player — Eastlake Boys Soccer JV', tier: 'minor' },
  { date: 'Apr 2026', title: '3rd Place — Washington TSA State, Engineering & Design', note: '50+ teams', tier: 'major' },
  { date: 'Feb 2026', title: 'Attacking Player of the Season — Crossfire Select B08 Red', tier: 'minor' },
  { date: 'Feb 2026', title: 'Finalist — Founders Cup Boys U19 Gold', note: 'out of 8 teams', tier: 'minor' },
  { date: 'Jan 2026', title: 'Champion — NPSL Boys U19, 2025–26 Season', tier: 'top' },
  { date: '2022 – 2026', title: 'Design Award (3×) & Create Award — VEX Robotics', tier: 'major' },
  { date: 'Mar 2023', title: 'Champion — VEX Robotics U.S. Open', note: '100+ teams', tier: 'top' },
  { date: 'Mar 2023', title: 'Champion — Washington State VEX Robotics', note: '40+ teams', tier: 'top' },
] as const

export const leadership = [
  {
    title: 'Sustainable Design Intern',
    org: 'SNAP Internship',
    date: 'Jan 2026 – Present',
    text: 'Helped build a Climate Action Plan and presented it to Puget Sound Energy, Lake Washington School District officials and city environmental managers.',
    tag: 'Sustainability',
  },
  {
    title: 'Founder & Instructor',
    org: 'Arduino Academy',
    date: 'Aug 2024 – Present',
    text: 'Designed the curriculum and taught embedded electronics and C++ to 6+ kids, generating $1,000+ in revenue.',
    tag: 'Entrepreneurship',
  },
  {
    title: 'Robotics Mentor',
    org: 'Evergreen Middle School Robotics Club',
    date: 'Dec 2024 – Present',
    text: 'Coached 30+ students through CAD, debugging and engineering tradeoffs on the road to Regionals, State and Worlds.',
    tag: 'Mentorship',
  },
  {
    title: 'Team Captain',
    org: 'Crossfire Select Soccer',
    date: 'Jun 2025 – Feb 2026',
    text: 'Named captain as the youngest player on the roster; led tactics in training and matches and built team culture.',
    tag: 'Athletics',
    image: photos.soccer,
  },
  {
    title: 'Alto Sax Section Leader',
    org: 'Tesla STEM Orchestra',
    date: 'Sep 2024 – Present',
    text: 'Lead rehearsals for five fellow saxophonists and coordinate preparation for concerts and school performances.',
    tag: 'Music',
    image: photos.band,
  },
  {
    title: 'Summer Camp Counselor',
    org: 'Pro Club Bellevue',
    date: 'Jun – Aug 2025',
    text: 'Led daily camps for 50+ kids ages 4–12, teaching robotics, coding and soccer fundamentals.',
    tag: 'Community',
  },
  {
    title: 'Volunteer Tutor',
    org: 'Schoolhouse',
    date: 'Sep 2026 – Present',
    text: 'Tutor 3+ high schoolers weekly in AP Calculus with original lesson plans and slide decks.',
    tag: 'Teaching',
  },
  {
    title: 'Garden Volunteer',
    org: 'Marymoor Park Garden',
    date: 'May 2013 – Present',
    text: 'A decade of growing produce donated to local food banks for low-income families.',
    tag: 'Service',
  },
  {
    title: 'Content Creator',
    org: 'TikTok · Men’s Fashion',
    date: 'Aug 2025 – Present',
    text: 'Film, edit and produce style content, with 50,000+ views and 3,250+ likes.',
    tag: 'Creative',
  },
  {
    title: 'Pre-College Researcher',
    org: 'Brown University',
    date: 'Jul 2024',
    text: 'Studied water supply and sustainable treatment under Dr. Indrek Kulaots, simulated stormwater management and built water filtration prototypes in a lab.',
    tag: 'Research',
  },
]

export const skills = [
  { group: 'Programming', items: ['Python', 'Java', 'Arduino / C++', 'OpenCV'] },
  { group: 'Engineering', items: ['CAD Design', 'Mechanical Design', 'Rapid Prototyping', '3D Printing'] },
  { group: 'Software', items: ['Fusion 360', 'Bambu Studio', 'Microsoft Office', 'Google Workspace'] },
  { group: 'Hardware', items: ['Electronics Integration', 'Sensor Systems', 'Soldering', 'Embedded Systems'] },
  { group: 'Languages', items: ['English — Native', 'Chinese — Fluent', 'Spanish — Intermediate'] },
  { group: 'Music', items: ['Alto Sax — Advanced', 'Piano — Advanced', 'Guitar — Beginner'] },
]

export const apCourses = [
  'Computer Science A',
  'Computer Science Principles',
  'Biology',
  'Environmental Science',
  'Calculus AB',
  'US History',
  'English Language',
  'Chinese Language & Culture',
]

export const nav = [
  { id: 'top', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'honors', label: 'Honors' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
