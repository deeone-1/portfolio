import secure from '../assets/projects/secure.png'
import learn from '../assets/projects/ilearnit.png'
import car from '../assets/projects/car.jpg'
import solar from '../assets/projects/solar.jpg'

export type SocialKey = 'github' | 'linkedin' | 'twitter' | 'mail'

export const profile = {
  name: 'Dammy',
  role: 'Full Stack Developer',
  tagline: 'I design and engineer fast, beautiful, scalable products for the web.',
  location: 'Lagos, Nigeria',
  email: 'damilolaogunleye4555@gmail.com',
  available: true,
  resumeUrl: '/resume.pdf', // Remember to add your resume to the public folder later
  bio: [
    'I am a full stack developer with 3+ years of experience turning complex problems into clean, intuitive interfaces. I care deeply about performance, accessibility, and the small details that make a product feel premium.',
    'From pixel-perfect front-ends in React and TypeScript to robust APIs in Node and PHP, I own the full lifecycle — from the first wireframe to the deploy pipeline.',
  ],
  stats: [
    { value: '3+', label: 'Years Experience' },
    { value: '50+', label: 'Clients Worldwide' },
    { value: '70+', label: 'Projects Shipped' },
  ],
  socials: [
    { key: 'github' as SocialKey, label: 'GitHub', href: 'https://github.com/dammyventures' },
    { key: 'linkedin' as SocialKey, label: 'LinkedIn', href: 'https://linkedin.com/in/dammy-ventures-155023249' },
    { key: 'twitter' as SocialKey, label: 'X', href: 'https://x.com/dee_one_1' },
    { key: 'mail' as SocialKey, label: 'Email', href: 'mailto:damilolaogunleye4555@gmail.com' },
  ],
}


export const marqueeItems = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Three.js',
  'Tailwind CSS', 'MongoDB', 'MySQL', 'PHP', 'Python', 'Git', 'Figma',
]

export type SkillGroup = {
  title: string
  icon: 'frontend' | 'backend' | 'database'
  blurb: string
  skills: { name: string; level: number }[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    blurb: 'Interfaces that feel instant and look sharp.',
    skills: [
      { name: 'React', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
    ],
  },
  {
    title: 'Backend',
    icon: 'backend',
    blurb: 'APIs built for scale, security and clarity.',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express', level: 80 },
      { name: 'PHP', level: 64 },
      { name: 'Python', level: 30 },
    ],
  },
  {
    title: 'Data & Tooling',
    icon: 'database',
    blurb: 'The plumbing that keeps products alive.',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 74 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Vite / Webpack', level: 82 },
    ],
  },
]

export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  image?: string 
  gradient: string
  liveUrl: string
  repoUrl: string
}

export const projects: Project[] = [
  {
    title: 'iLearnIt Platform',
    category: 'Full Stack · EdTech',
    description:
      'An intelligent, adaptive learning platform designed to transform how students and educators engage with knowledge through dynamic course matching and analytics.',
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind'],
    gradient: 'bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500',
    image: learn,
    liveUrl: 'https://ilearnit.vercel.app', // Replace with real link when ready
    repoUrl: 'https://github.com/dammyventures',
  },
  {
    title: 'Secure Finder',
    category: 'Full Stack · Web App',
    description:
      'A highly secure lost and found platform featuring multi-level authentication, identity verification, and intelligent matching to reunite users with their belongings.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    gradient: 'bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600',
    image: secure,
    liveUrl: 'https://secure-finder.vercel.app/',
    repoUrl: 'https://github.com/dammyventures',
  },
  {
    title: 'Josh Autos',
    category: 'Frontend · Landing Page',
    description:
      'A modern, high-converting landing page for a futuristic automobile brand, featuring smooth animations, sleek aesthetics, and an interactive showcase.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    gradient: 'bg-gradient-to-br from-slate-600 via-blue-700 to-slate-900',
    image: car,
    liveUrl: 'https://google.com',
    repoUrl: 'https://github.com/dammyventures',
  },
  {
    title: 'Rashedsore Engineering',
    category: 'Frontend · Corporate',
    description:
      'A clean, professional website for a solar energy company, designed to drive lead generation and showcase renewable energy solutions for homes and businesses.',
    tags: ['React', 'Tailwind', 'UI/UX', 'Responsive'],
    gradient: 'bg-gradient-to-br from-orange-500 via-rose-500 to-pink-600',
    image: solar,
    liveUrl: '#',
    repoUrl: 'https://github.com/dammyventures',
  },
]

export type Service = {
  title: string
  description: string
  icon: 'design' | 'code' | 'content'
  points: string[]
}

export const services: Service[] = [
  {
    title: 'UI/UX Design',
    description:
      'Interfaces designed around real user journeys — wireframes, design systems, and pixel-perfect handoff.',
    icon: 'design',
    points: ['Design systems', 'Prototyping', 'Accessibility audits'],
  },
  {
    title: 'Web Development',
    description:
      'Production-grade front-ends and back-ends. Typed, tested, and shipped with a clean CI/CD pipeline.',
    icon: 'code',
    points: ['React / Next.js', 'REST & GraphQL APIs', 'Performance tuning'],
  },
  {
    title: 'Content & Growth',
    description:
      'Technical content, documentation, and SEO-ready landing pages that actually convert visitors.',
    icon: 'content',
    points: ['Technical writing', 'SEO foundations', 'Landing pages'],
  },
]