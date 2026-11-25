# Sofonias Dawit — Full-Stack Developer Portfolio

A modern, high-performance developer portfolio showcasing full-stack client platforms, web architectures, technical skills, and professional experience.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 🚀 Live Demo

**Visit the live website:** [https://sofonias.vercel.app/](https://sofonias.vercel.app/)

---

## 🌟 Key Features

- **Spring-Physics Motion:** Fluid, tactile animations powered by `framer-motion` (staggered hero entrance, auto-fading scroll hint, spring card hover states).
- **Responsive Architecture:** Pixel-perfect layout across mobile, tablet, and widescreen displays.
- **Accessible Dark & Light Theming:** Seamless theme toggling powered by `next-themes` with custom HSL design tokens.
- **Production Project Case Studies:** Interactive carousel and modal architecture flows showcasing metrics, system dataflow, and tech stacks.
- **Type-Safe Content Architecture:** Centralized project and skill definitions in TypeScript (`src/data/projectsData.ts`) with zero runtime fetch delay.
- **SEO & Social Sharing Ready:** Semantic HTML5, dynamic Open Graph cards, Twitter metadata, and Schema.org JSON-LD structured data.
- **Hardware-Accelerated Performance:** Sub-second load times and smooth 60–120 FPS transitions without layout repaints.

---

## 🛠️ Built With

- **Core:** React 18.3, TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Animation Engine:** Framer Motion 12
- **UI Primitives:** Radix UI (`@radix-ui/react-*`), shadcn/ui
- **Icons:** Lucide React
- **Carousel Engine:** Embla Carousel (`embla-carousel-react`)
- **Theme Management:** `next-themes`
- **Build Tooling:** Vite, SWC

---

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sofonias-dawit/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port specified in your terminal).

---

## 📁 Project Structure

```
Portfolio/
├── public/                # Static assets, favicons, sitemap & robots.txt
├── src/
│   ├── assets/            # Project images and profile photography
│   ├── components/        # Feature and layout components
│   │   ├── ui/            # Accessible Radix / shadcn UI primitives
│   │   ├── About.tsx      # Engineering narrative & technical pillars
│   │   ├── Contact.tsx    # Interactive inquiry form & channels
│   │   ├── Footer.tsx     # Location, timezone indicator & copyright
│   │   ├── Hero.tsx       # Animated entrance, bio, CTA & scroll hint
│   │   ├── Navigation.tsx # Floating segmented navbar & mobile sheet
│   │   ├── Projects.tsx   # Categorized showcase, carousel & modal case studies
│   │   ├── Resume.tsx     # Career experience, education & CV link
│   │   ├── ScrollReveal.tsx # Viewport trigger wrapper with reduced-motion support
│   │   └── Skills.tsx     # Stack categorizations & tool badges
│   ├── data/
│   │   └── projectsData.ts # Single source of truth for all projects (Type-safe)
│   ├── hooks/             # Custom React hooks (use-toast, use-mobile)
│   ├── lib/               # Utility functions (cn / clsx merge)
│   ├── pages/             # Page views (Index, NotFound)
│   ├── App.tsx            # Application root
│   ├── main.tsx           # React DOM hydration
│   └── index.css          # Design system tokens & global styling
├── index.html             # HTML entry point, fonts & SEO metadata
├── tailwind.config.ts     # Tailwind theme extensions & design palette
└── vite.config.ts         # Vite build configuration & path aliases
```

---

## 🎨 Managing Projects

Projects are managed directly in **`src/data/projectsData.ts`** with full TypeScript autocomplete:

```ts
import myProjectImg from '@/assets/my-project.jpg';

export const projects: Project[] = [
  {
    title: "Project Title",
    category: "fullstack", // 'client' | 'fullstack' | 'frontend'
    categories: ["client", "fullstack"],
    badge: "E-Commerce",
    client: "Client Name",
    role: "Full-Stack Developer",
    description: "Brief summary shown on the card.",
    detailedDescription: "In-depth explanation displayed inside the case study modal.",
    metrics: [
      "100% Automated Checkout Flow",
      "Sub-200ms API Latency"
    ],
    architecture: [
      "React Client",
      "RESTful API",
      "PostgreSQL"
    ],
    highlights: [
      "Payment Gateway Integration",
      "Automated Order Notifications"
    ],
    image: myProjectImg,
    demoLink: "https://example.com",
    codeLink: "https://github.com/sofonias-dawit/example",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    featured: true
  },
  // ... more projects
];
```

*All category counts on the project filter tabs (**All Projects**, **Client Work**, **Full-Stack**, **Frontend**) update automatically based on your data.*

---

## 🚀 Production Build & Deployment

```bash
# Generate optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Hosting Options:
- **Vercel:** Auto-deploys via Git (`Build Command: npm run build`, `Output Directory: dist`).
- **Netlify:** Pre-configured with SPA routing via `public/_redirects`.

---

## 👤 Author

**Sofonias Dawit** — Full-Stack Developer (Addis Ababa, Ethiopia)

- **GitHub:** [@sofonias-dawit](https://github.com/sofonias-dawit)
- **LinkedIn:** [sofoniasdawit](https://www.linkedin.com/in/sofoniasdawit/)
- **Email:** [sofoniasdawit00@gmail.com](mailto:sofoniasdawit00@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
