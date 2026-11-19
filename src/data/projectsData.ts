import project1Image from '@/assets/project1.jpg';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project3.jpg';
import project4Image from '@/assets/project4.jpg';
import project5Image from '@/assets/project5.jpg';
import project6Image from '@/assets/project6.jpg';

export interface Project {
  title: string;
  category: 'client' | 'fullstack' | 'frontend';
  categories?: ('client' | 'fullstack' | 'frontend')[];
  badge: string;
  client?: string;
  role?: string;
  description: string;
  detailedDescription: string;
  metrics?: string[];
  architecture?: string[];
  highlights?: string[];
  image: string;
  demoLink: string;
  codeLink: string;
  tags: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Habesha Espresso - E-commerce Platform",
    category: "client",
    categories: ["client", "fullstack"],
    badge: "E-Commerce",
    client: "Habesha Espresso Company",
    role: "Full-Stack Web Developer",
    description: "A production e-commerce platform for a coffee business, supporting retail customers, wholesale orders, and export inquiries.",
    detailedDescription: "A full-stack e-commerce web platform developed for Habesha Espresso Company. It features product catalog browsing, a persistent shopping cart, online payment checkout, and order notifications. The platform also includes dedicated inquiry workflows for local wholesale distribution and overseas export.",
    metrics: [
      "100% Automated Online Checkout Flow",
      "Streamlined International Wholesale & Export Pipelines",
      "Sub-Second Page Generation & Optimized Mobile UX"
    ],
    architecture: [
      "Next.js Client Storefront",
      "Cart State Management",
      "Chapa Payment Gateway API",
      "Drizzle ORM & Database",
      "Automated Order Notifications"
    ],
    highlights: [
      "Secure Payment Gateway Integration",
      "International Export & Wholesale Inquiry Pipeline",
      "Persistent Shopping Cart & Inventory Browsing",
      "Automated Order Notifications & Processing"
    ],
    image: project6Image,
    demoLink: "https://habeshaespresso.com/",
    codeLink: "https://github.com/sofonias-dawit/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Drizzle ORM", "Payment API", "REST API"],
    featured: true
  },
  {
    title: "ASB Platform - Hospitality Booking System",
    category: "client",
    categories: ["client", "fullstack"],
    badge: "Booking Platform",
    client: "ASB Hospitality Group",
    role: "Lead Full-Stack Developer",
    description: "A digital booking platform for hotels and lodges, replacing manual paper ledgers with automated reservation tracking.",
    detailedDescription: "A centralized digital solution for hospitality businesses to replace manual paper records with an automated system. Features a decoupled architecture with a Laravel RESTful API, a React management dashboard, and mobile access, allowing staff to manage room reservations, check real-time availability, and process online deposits.",
    metrics: [
      "Replaced 100% of Manual Paper Ledger Booking",
      "Real-Time Multi-Room Inventory Tracking",
      "Sub-200ms RESTful API Endpoint Latency"
    ],
    architecture: [
      "React Management Dashboard",
      "Laravel RESTful API Layer",
      "MySQL Relational Schema",
      "Payment Webhook Flow",
      "Real-Time Reservation Engine"
    ],
    highlights: [
      "Decoupled Laravel RESTful API Architecture",
      "React Administrative Management Dashboard",
      "Automated Payment Integration for Online Deposits",
      "Real-Time Room Availability & Reservation Engine"
    ],
    image: project5Image,
    demoLink: "https://asbplatform.onrender.com/",
    codeLink: "https://github.com/sofonias-dawit/",
    tags: ["React", "Laravel API", "React Native", "Tailwind CSS", "REST API"],
    featured: true
  },
  {
    title: "Architecture & Interior Design Portfolio",
    category: "client",
    categories: ["client", "frontend"],
    badge: "Architecture Studio",
    client: "Private Design Client",
    role: "Frontend & UI/UX Developer",
    description: "A modern portfolio website created for an architecture and interior design studio, featuring clean galleries and fluid transitions.",
    detailedDescription: "Designed and developed with an editorial, image-first approach to showcase architectural projects. Features responsive layouts, lightboxes, and smooth animations while maintaining fast load times across mobile and desktop devices.",
    metrics: [
      "95+ Lighthouse Mobile Performance Score",
      "Zero Cumulative Layout Shift (CLS)",
      "Adaptive Multi-Device Breakpoint Scaling"
    ],
    architecture: [
      "React Single-Page Application",
      "Tailwind Responsive Design Grid",
      "Fluid Animation Engine",
      "Vercel Cloud Deployment"
    ],
    highlights: [
      "Fluid Layout Physics & Micro-Interactions",
      "High-Resolution Visual Showcase & Image Lightboxes",
      "100% Responsive Design Across All Breakpoints"
    ],
    image: project4Image,
    demoLink: "https://filenbar.netlify.app/",
    codeLink: "https://github.com/sofonias-dawit/Architecture-Interior-Design-Portfolio",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "UI/UX", "Smooth Animations"],
    featured: true
  },
  {
    title: "Patient Management System",
    category: "fullstack",
    categories: ["fullstack"],
    badge: "HMS",
    client: "Healthcare Clinical Operations",
    role: "Full-Stack Developer",
    description: "A clinical web application designed to streamline hospital patient records, doctor scheduling, and appointment booking.",
    detailedDescription: "Built with PHP and MySQL to help healthcare clinics manage day-to-day operations. Includes role-based access for administrators, doctors, and patients, automated doctor schedule slotting, and organized medical records.",
    metrics: [
      "Role-Based Access for 3 User Tiers",
      "Automated Doctor Schedule Slotting",
      "Normalized Relational Patient Records"
    ],
    architecture: [
      "PHP Server Application",
      "Session Authentication & RBAC",
      "MySQL Relational Database",
      "Clinical Staff Dashboard"
    ],
    highlights: [
      "Role-Based Access Control (Admins, Doctors, Patients)",
      "Doctor Appointment Scheduling & Time Slot Allocation",
      "Relational MySQL Database Architecture"
    ],
    image: project2Image,
    demoLink: "https://amuhospital.42web.io/",
    codeLink: "https://github.com/sofonias-dawit/Hospital-Patient-Management-System",
    tags: ["PHP", "MySQL", "Authentication", "Hospital Management"],
    featured: false
  },
  {
    title: "Personal Developer Portfolio",
    category: "frontend",
    categories: ["frontend"],
    badge: "Developer Portfolio",
    client: "Personal Project",
    role: "Full-Stack Developer",
    description: "My personal developer portfolio built with React 18, TypeScript, and Tailwind CSS to showcase my projects and background.",
    detailedDescription: "Designed and engineered as a clean, responsive portfolio featuring dark/light mode, an interactive project showcase, and a direct inquiry form. Built with modern component architecture and focused on fast performance.",
    metrics: [
      "Sub-200ms Initial Viewport Render",
      "100% Accessible Dark / Light Theming",
      "Zero-Error Strict TypeScript Linter"
    ],
    architecture: [
      "Vite 5 React Bundler",
      "Tailwind Design System Tokens",
      "Radix UI Primitives",
      "Vercel CI/CD Deployment"
    ],
    highlights: [
      "React 18 & TypeScript Single-Page Application",
      "Tailwind & shadcn/ui Minimalist Design System",
      "Accessible Dark / Light Mode with Instant Theme Switching"
    ],
    image: project1Image,
    demoLink: "https://sofoniasportfolio.netlify.app/",
    codeLink: "https://github.com/sofonias-dawit/My-portfolio",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    featured: false
  },
  {
    title: "Green Grid Renewable Energy Website",
    category: "frontend",
    categories: ["frontend"],
    badge: "CleanTech Corporate Platform",
    client: "Clean Energy Initiative",
    role: "Frontend Developer",
    description: "A responsive corporate website promoting sustainable clean energy solutions, solar infrastructure, and green power services.",
    detailedDescription: "Designed and built with semantic HTML, modern CSS, and JavaScript to present renewable energy solutions. Features clean navigation, informative service overviews, and consultation inquiry forms.",
    metrics: [
      "Zero Framework Overhead (Pure HTML/CSS/JS)",
      "Optimized Asset Payload Under 200KB",
      "Universal Cross-Browser Compatibility"
    ],
    architecture: [
      "Semantic HTML5 Markup",
      "Modern CSS Grid & Flexbox",
      "Vanilla JS Interaction Modules",
      "Global CDN Delivery"
    ],
    highlights: [
      "Modern Semantic Layout & Accessible Navigation",
      "Interactive Energy Information & Inquiry Forms",
      "Cross-Browser Performance & Fast Load Times"
    ],
    image: project3Image,
    demoLink: "https://greengridpower.netlify.app/",
    codeLink: "https://github.com/sofonias-dawit/Green-Grid-Power",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    featured: false
  }
];

export const defaultProjects = projects;
