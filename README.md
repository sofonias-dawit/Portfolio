# Portfolio Website

A modern, responsive portfolio website showcasing my web development projects, skills, and professional experience. Built with React.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme** - Toggle between dark and light modes for comfortable viewing
- **Smooth Animations** - Engaging animations and transitions throughout the site
- **Dynamic Projects** - Projects loaded from JSON for easy content management
- **Interactive UI** - Modern, user-friendly interface with hover effects and transitions
- **SEO Optimized** - Semantic HTML and proper meta tags for better search visibility
- **Fast Performance** - Optimized loading and rendering with React and Vite

## 🚀 Live Demo

Visit the live site: [https://sofoniasportfolio.netlify.app/]


## 🛠️ Built With

- **Frontend Framework:** React 18.3.1
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn-ui
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Theme Management:** next-themes
- **Routing:** React Router DOM
- **State Management:** TanStack Query

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── projects.json      # Projects data file (easily editable)
│   └── robots.txt
├── src/
│   ├── assets/            # Images and static files
│   ├── components/        # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   ├── Skills.tsx
│   │   └── ui/           # Reusable UI components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles & design tokens
├── index.html
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── package.json
```

## 🎨 Customization

### Adding/Editing Projects

Projects are managed through the `public/projects.json` file. Simply edit this file to update your portfolio:

```json
{
  "title": "Your Project Name",
  "description": "Short description",
  "detailedDescription": "Detailed description of your project",
  "image": "/src/assets/your-image.jpg",
  "demoLink": "https://your-demo-link.com",
  "codeLink": "https://github.com/your-repo",
  "tags": ["React.js", "TypeScript", "API"],
  "featured": true
}
```

### Updating Personal Information

- **Hero Section:** Edit `src/components/Hero.tsx`
- **About Section:** Edit `src/components/About.tsx`
- **Skills Section:** Edit `src/components/Skills.tsx`
- **Contact Section:** Edit `src/components/Contact.tsx`

### Changing Theme Colors

Edit the CSS variables in `src/index.css` to customize your color scheme:

```css
:root {
  --primary: 189 94% 43%;      /* Main brand color */
  --secondary: 240 5% 84%;     /* Secondary color */
  /* ... other colors */
}
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Deploy to Hosting Platforms

#### Vercel
```bash
vercel --prod
```

#### Netlify
```bash
netlify deploy --prod
```

#### GitHub Pages
```bash
npm run build
# Push the dist folder to your gh-pages branch
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source.
## 👤 Author

**Sofonias Dawit**

- GitHub: [@sofonias-dawit](https://github.com/sofonias-dawit)
- Twitter: [@sofoniasdawitt](https://twitter.com/sofoniasdawitt)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- UI components from [shadcn-ui](https://ui.shadcn.com/)
- Icons from [Lucide Icons](https://lucide.dev/)

---

⭐ If you like this project, please give it a star on GitHub!
