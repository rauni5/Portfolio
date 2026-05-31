export const projects = [
  {
    id: 'cinosphere',
    num: '01',
    featured: true,
    title: 'Cinosphere',
    tagline: 'Full-stack cinema booking platform',
    desc: 'A full-featured cinema booking platform built with Java Servlets and Spring Boot. Started as a university group project, independently continued with a focus on production-readiness, REST APIs, Docker deployment, and accessibility improvements.',
    longDesc: `Cinosphere began as a collaborative university coursework submission. After completing the group project, I forked it and continued independently — treating it as a production software project rather than a coursework artifact.

The core challenge was migrating a raw Servlet-based Java web app into a cleaner Spring Boot architecture while preserving all existing functionality. Along the way I want to refactored the booking flow into REST endpoints, and systematically improved accessibility across all pages.`,
    tags: ['Java', 'Spring Boot', 'Servlets', 'REST API', 'Maven'],
    features: [
      'Full movie booking flow with seat selection',
      'Admin panel for movie management & user accounts',
      'REST API endpoints for movies, bookings, users',
      'Docker containerisation for consistent deployment',
      'Spring Boot migration from raw Servlets',
      'Enhanced accessibility and progressive features',
    ],
    github: 'https://github.com/rauni5/Cinosphere-Production',
    year: '2026',
    type: 'Full Stack · Java',
  },
  {
    id: 'react-chat',
    num: '02',
    title: 'React Chat UI',
    tagline: 'Chatbot interface built with React + Vite',
    desc: 'A responsive chatbot interface built with React and Vite. Manages chat state across user and bot messages with clean component architecture and a custom CSS design system.',
    longDesc: `Built as a deep-dive into React fundamentals — component architecture, state management with useState, and prop drilling between components. The app manages a running list of chat messages (each with a sender and unique ID) and integrates a third-party chatbot library for responses.

The component split (App → ChatMessages → ChatMessage, ChatInput) follows the single-responsibility principle, keeping each piece focused and easy to reason about.`,
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    features: [
      'useState-driven chat message state',
      'User and bot message rendering',
      'UUID-based message IDs',
      'Component-driven architecture',
      'Custom CSS design system',
    ],
    github: 'https://github.com/rauni5/React',
    year: '2026',
    type: 'Frontend · React',
  },
  {
    id: 'info-systems',
    num: '03',
    title: 'Multi-page Web App',
    tagline: 'HTML/CSS/JS coursework website',
    desc: 'A full multi-page website for the Introduction to Information Systems coursework — home, blog, product, research and about pages with a shared CSS design system, shared nav/footer, and a functional contact form.',
    longDesc: `An end-to-end static web project built from a self-created wireframe. The key constraint was keeping a consistent design system across pages — shared background colours, nav, footer, and font families — while allowing page-specific layouts through in-file CSS.

JavaScript handles interactive product image hover/click events and shared utility functions across pages. The project also includes a functional contact form.`,
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    features: [
      'Five fully linked pages (home, blog, product, research, about)',
      'Shared Main.css design system',
      'Shared nav and footer components',
      'Functional contact form',
      'JavaScript hover/click interactions on product images',
      'Wireframe-driven layout design',
    ],
    github: 'https://github.com/rauni5/Introduction-to-information-system-course-work',
    year: '2025',
    type: 'Frontend · HTML/CSS/JS',
  },
  {
    id: 'art-gallery',
    num: '04',
    title: 'Art Gallery Visitor System',
    tagline: 'Java OOP desktop app with Swing GUI',
    desc: 'A Java OOP desktop application for managing art gallery visitors — standard and elite tiers — with a full Swing GUI, billing system, file persistence, and receipt generation.',
    longDesc: `A classically structured Java OOP project built around an inheritance hierarchy: a base Visitor class extended by StandardVisitor and EliteVisitor, each with different pricing and access rules.

The Swing GUI wraps all operations — adding visitors, viewing records, generating bills — and all visitor data is persisted to disk via file I/O. The billing system generates dated receipt files per visitor.`,
    tags: ['Java', 'Swing GUI', 'OOP', 'File I/O', 'BlueJ'],
    features: [
      'Visitor class hierarchy (Standard & Elite)',
      'Full Swing desktop GUI',
      'Visitor data persistence to .dat files',
      'Bill generation with dated receipt files',
      'OOP design with inheritance and encapsulation',
    ],
    github: 'https://github.com/rauni5/Programming-Java-course-work',
    year: '2025',
    type: 'Desktop · Java',
  },
  {
    id: 'billing-system',
    num: '05',
    title: 'Python Billing System',
    tagline: 'Modular Python CLI billing app',
    desc: 'A modular Python billing and catalogue system — split across focused modules for display, reading, writing, operations, and bill generation, with real bill records persisted to disk.',
    longDesc: `Built for the Fundamentals of Computing coursework, this project demonstrates modular Python design. The codebase is split across purpose-built modules: Main.py orchestrates the flow, while Display.py, Read.py, Write.py, Operations.py, and Generate_bill.py each own a single responsibility.

Bill records are written as text files and a product catalogue file drives the available items. The project was submitted alongside a written report.`,
    tags: ['Python', 'File I/O', 'Modular Design', 'CLI'],
    features: [
      'Modular architecture (6 focused Python files)',
      'Product catalogue system',
      'Bill generation with file persistence',
      'CLI-driven user flow',
      'Submitted with full written report',
    ],
    github: 'https://github.com/rauni5/Fundamental-of-computing-course-work',
    year: '2026',
    type: 'Backend · Python',
  },
]
