// Central content + config. Editing copy/data here updates the whole site.
export const site = {
  name: 'Alinag Systems',
  tagline: 'Innovative Software Solutions for Modern Businesses.',
  description:
    'Alinag Systems designs, builds, and scales custom software, cloud platforms, and intelligent systems for modern businesses. Your engineering partner for what comes next.',
  url: 'https://alinagsystems.com',
  email: 'hello@alinagsystems.com',
  phone: '+91 90000 00000',
  location: 'Anantapur, India · Remote worldwide',
  social: {
    linkedin: 'https://linkedin.com/company/alinag-systems',
    github: 'https://github.com/alinag-systems',
    twitter: 'https://twitter.com/alinagsystems',
  },
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  {
    icon: 'Code2',
    title: 'Custom Software Development',
    summary: 'Bespoke platforms and internal tools engineered to fit how your business actually works.',
    points: ['Enterprise web platforms', 'Workflow & internal tools', 'API & systems integration'],
  },
  {
    icon: 'MonitorSmartphone',
    title: 'Web & Mobile Applications',
    summary: 'Fast, accessible, cross-platform products your customers and teams genuinely enjoy using.',
    points: ['React & Next.js web apps', 'iOS & Android', 'Progressive web apps'],
  },
  {
    icon: 'Cloud',
    title: 'Cloud & DevOps',
    summary: 'Resilient infrastructure, automated delivery, and deep observability across every major cloud.',
    points: ['AWS · Azure · GCP', 'CI/CD & automation', 'Monitoring & SRE'],
  },
  {
    icon: 'BrainCircuit',
    title: 'AI & Data Engineering',
    summary: 'Turn raw data into decisions with machine learning, analytics, and intelligent automation.',
    points: ['ML & LLM integration', 'Data pipelines & warehouses', 'Dashboards & insights'],
  },
  {
    icon: 'PenTool',
    title: 'UI/UX & Product Design',
    summary: 'Research-driven design systems that are a pleasure to use — and built to convert and scale.',
    points: ['Product & UX design', 'Design systems', 'Usability & accessibility'],
  },
  {
    icon: 'Compass',
    title: 'IT Consulting & Modernization',
    summary: 'Strategy, technical audits, and legacy modernization from senior engineers who have shipped.',
    points: ['Architecture & audits', 'Legacy modernization', 'Fractional tech leadership'],
  },
];

export const capabilities = [
  { icon: 'ShieldCheck', title: 'Enterprise-grade security', body: 'Secure-by-default architecture, code review, and compliance-minded delivery on every engagement.' },
  { icon: 'GaugeCircle', title: 'Built for performance', body: 'Sub-second experiences, efficient infrastructure, and measurable outcomes you can point to.' },
  { icon: 'Users', title: 'Senior engineers only', body: 'You work directly with experienced engineers and designers — no hand-offs to junior teams.' },
  { icon: 'GitBranch', title: 'Transparent delivery', body: 'Clear milestones, real demos, and shared roadmaps. You always know exactly where things stand.' },
];

export const processSteps = [
  { n: '01', title: 'Discover', body: 'We map your goals, constraints, and users, then define a plan with clear scope and success metrics.' },
  { n: '02', title: 'Design', body: 'Architecture and interface design in parallel — validated early with prototypes, not guesswork.' },
  { n: '03', title: 'Build', body: 'Senior engineers ship in tight iterations with automated testing and continuous integration.' },
  { n: '04', title: 'Launch', body: 'Hardened releases, observability, and zero-drama deployments to your cloud of choice.' },
  { n: '05', title: 'Scale', body: 'We monitor, optimize, and evolve the system as your business and traffic grow.' },
];

export const stats = [
  { value: '120+', label: 'Projects delivered' },
  { value: '40+', label: 'Enterprise clients' },
  { value: '99.9%', label: 'Uptime we maintain' },
  { value: '15+', label: 'Countries served' },
];

export const testimonials = [
  { quote: 'Alinag rebuilt our platform in four months and cut our infrastructure costs by a third. They operate like an in-house team that happens to be world-class.', name: 'Priya Nair', role: 'VP Engineering', company: 'Northwind Logistics' },
  { quote: 'The most transparent engineering partner we have worked with. Every sprint ended with something real we could ship. No surprises, only progress.', name: 'Daniel Osei', role: 'CTO', company: 'Meridian Health' },
  { quote: 'From strategy to production in record time. Their design and engineering are genuinely on par with the best teams in the industry.', name: 'Sofia Alvarez', role: 'Founder & CEO', company: 'Cadence Retail' },
];

export const clients = ['Northwind', 'Meridian', 'Cadence', 'Vertex Labs', 'Helio', 'Orbit Finance', 'Lumen', 'Stratos'];
