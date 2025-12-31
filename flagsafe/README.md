# FlagSafe - AI Safety Consensus Platform

> Building the Digital Immune System for the AGI Era

Official website for BAAI's AI Safety Platform, built with Next.js 16 + React 19 + TypeScript + Tailwind CSS 4.

## 📚 Documentation Navigation

- 📖 **[Documentation Center](../docs/README.md)** - Complete documentation index and quick navigation
- 🏗️ **[Project Overview](../docs/PROJECT_OVERVIEW.md)** - Project background and tech stack
- 📁 **[Project Structure](../docs/PROJECT_STRUCTURE.md)** - Directory structure and file index
- 🔧 **[Development Guidelines](../docs/DEV_GUIDELINES.md)** - Coding standards and best practices
- ✅ **[Common Tasks](../docs/COMMON_TASKS.md)** - Quick reference for development tasks

---

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Code Linting

```bash
npm run lint
```

---

## 📁 Project Structure

```
flagsafe/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Global layout (Navbar + Footer)
│   ├── globals.css         # Global styles & theme configuration
│   ├── consensus/          # Safety guidelines page
│   ├── research/           # Research hub (with dynamic routes)
│   │   ├── page.tsx        # Research overview
│   │   └── [category]/     # Dynamic category routes
│   │       └── [project]/  # Dynamic project routes
│   ├── red-team/           # Red team exercises
│   ├── blue-team/          # Blue team defense
│   ├── white-box/          # White-box analysis
│   └── news/               # News & updates
│
├── components/             # React components
│   ├── Navbar.tsx          # Navigation bar (multi-level dropdown)
│   ├── Footer.tsx          # Footer
│   ├── HeroSection.tsx     # Homepage hero section
│   ├── ConsensusSection.tsx     # Five redlines visualization
│   ├── ResearchSection.tsx      # Research projects showcase
│   ├── PlatformSection.tsx      # Platform modules
│   ├── PartnersSection.tsx      # Partners showcase
│   ├── VulnReportCTA.tsx        # Vulnerability report CTA
│   └── ResearchProjectLayout.tsx # Project detail layout
│
├── data/                   # Data layer (Mock data)
│   ├── redlines.ts         # AI safety five redlines
│   ├── research.ts         # Research projects & categories
│   ├── platform.ts         # Platform module data
│   ├── partners.ts         # Partners information
│   ├── news.ts             # News & updates
│   └── vulnerabilities.ts  # Vulnerability reports
│
├── types/                  # TypeScript type definitions
│   ├── index.ts            # Core types
│   └── research.ts         # Research project types
│
├── lib/                    # Utility functions
│   └── utils.ts            # cn() style merging utility
│
└── public/                 # Static assets
    ├── baai-logo.png       # BAAI Logo
    └── *.png, *.jpg        # Images
```

---

## 🛠 Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| **Next.js** | 16.0.7 | React full-stack framework (App Router) |
| **React** | 19.2.0 | UI component library |
| **TypeScript** | 5.x | Type system |
| **Tailwind CSS** | 4.x | Atomic CSS framework |
| **Lucide React** | 0.555.0 | Icon library |
| **Noto Sans SC** | - | Chinese font (weights: 300, 400, 500, 700) |
| **Inter** | - | English font (weights: 400, 600, 700) |

---

## 📄 Route Mapping

| Path | Description | Key Features |
|------|-------------|--------------|
| `/` | Homepage | Hero, five redlines, research, platform modules, partners |
| `/consensus` | Safety Guidelines | AI safety five redlines in detail |
| `/research` | Research Hub | Research overview & category showcase |
| `/research/[category]` | Category Page | Projects in specific category (dynamic route) |
| `/research/[category]/[project]` | Project Details | Complete research project info (nested dynamic route) |
| `/red-team` | Red Team | Attack testing platform introduction |
| `/blue-team` | Blue Team | Defense system showcase |
| `/white-box` | White-box | Model interpretability analysis |
| `/news` | News | Industry updates and announcements |

---

## 🎨 Theme Configuration

The project uses BAAI's official blue as the primary color, configured in `app/globals.css`:

```css
:root {
  --baai-blue: #0056D2;       /* Primary color */
  --baai-blue-dark: #003D99;  /* Dark variant */
  --baai-blue-light: #EFF6FF; /* Light background */
}
```

---

## 📝 Development Guidelines

### Adding New Pages

1. Create directory and `page.tsx` in `app/`
2. Define `metadata` for SEO
3. Update navigation menu in `components/Navbar.tsx`

### Adding New Data

1. Define TypeScript interface in `types/`
2. Create data file in `data/` and export data
3. Import and use in components

### Styling Guidelines

- ✅ Prefer Tailwind CSS atomic classes
- ✅ Use `sm:`, `md:`, `lg:` prefixes for responsive design
- ✅ Use Tailwind transitions or CSS Keyframes for animations
- ❌ Avoid inline styles and `any` type

### Component Guidelines

- Mark all interactive components with `'use client'`
- Use `@/` path alias for imports
- Props must have TypeScript interface definitions

**See [Architecture Documentation](../docs/ARCHITECTURE.md#开发规范) for detailed guidelines**

---

## 🔧 Common Tasks

### Add New Research Project

```typescript
// data/research.ts
export const researchProjects: ResearchProject[] = [
  {
    id: 'new-project',
    categoryId: 'deception',
    titleZh: 'New Research Project',
    titleEn: 'New Research Project',
    descriptionZh: 'Project description...',
    featured: true  // Show on homepage
  }
];
```

### Modify Navigation Menu

Edit the `navigation` array in `components/Navbar.tsx`.

### Add New Partner

1. Place logo in `public/` directory
2. Add entry to `data/partners.ts`

**See [Architecture Documentation - Common Tasks](../docs/ARCHITECTURE.md#常见开发任务) for more**

---

## 📊 Data Flow

```
Data Definition (data/*.ts)
    ↓
Type Validation (types/*.ts)
    ↓
Component Import (components/*.tsx)
    ↓
Page Rendering (app/*/page.tsx)
```

Currently uses static data. Structure is API-ready. When migrating to APIs, only modify the `data/` layer - component layer needs no changes.

---

## 🎯 Features

- ✅ Next.js 16 App Router architecture
- ✅ Full TypeScript type safety
- ✅ Tailwind CSS 4 atomic styling
- ✅ Responsive design (mobile-friendly)
- ✅ Dynamic routing support
- ✅ SEO optimized (Metadata API)
- ✅ Font optimization (next/font)
- ✅ Code linting (ESLint + TypeScript)
- ✅ Rich interactive animations
- ⏳ i18n support (in preparation)

---

## 🎯 Roadmap

- [x] Complete all core pages
- [x] Add dynamic routing support
- [x] Create architecture documentation
- [ ] Add consensus detail page
- [ ] Integrate with real APIs
- [ ] Complete internationalization (English version)
- [ ] Performance optimization (lazy loading, code splitting)
- [ ] Deep SEO optimization

---

## 📚 Documentation

- **[Architecture Documentation](../docs/ARCHITECTURE.md)** - Complete project architecture guide
- **[Next.js Documentation](https://nextjs.org/docs)** - Next.js official docs
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)** - Tailwind CSS official docs
- **[TypeScript Documentation](https://www.typescriptlang.org/docs)** - TypeScript official docs

---

## 📧 Contact

- Website: https://www.baai.ac.cn
- GitHub: https://github.com/BAAI

---

**License**: MIT | **Maintained by**: BAAI Team
