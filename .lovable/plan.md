

# Caio Vasconcelos — Modern Portfolio Rebuild

## Overview
Rebuild your portfolio as a sleek, **dark & techy** single-page React app with smooth scroll navigation, subtle animations, and a **data-driven architecture** so adding new projects, certifications, or sections is as easy as editing a simple data file.

> **Note on Node.js:** Lovable runs on React + Vite + Tailwind, which gives you a modern dev toolchain. Since your portfolio is purely a static/frontend site, there's no need for a Node.js backend — everything will be fast, modern, and deployable to GitHub Pages or Lovable's hosting.

---

## Design Direction
- **Dark background** with subtle gradient accents (deep navy/charcoal tones)
- **Neon/gradient accent colors** (cyan, purple, or green highlights)
- Smooth **scroll animations** as sections come into view
- Monospace or modern sans-serif typography for that developer feel
- **Glassmorphism** cards for projects and certifications

---

## Sections (in scroll order)

### 1. 🚀 Hero Section
- Your name "Caio Vasconcelos" with an animated typing effect or subtle particle background
- Short tagline: "AI Engineer | Data Scientist | LLM Specialist"
- Social links (GitHub, LinkedIn) as sleek icon buttons
- Scroll-down indicator

### 2. 👤 About Me
- Brief bio (migrated from your current site) about your background in Electrical Engineering, AI post-grad, and current work with LLMs
- Clean two-column layout: text on one side, a visual element (tech illustration or avatar) on the other

### 3. 🛠️ Skills & Tech Stack
- Visual grid or icon-based display of your technologies (Python, SQL, Tableau, PowerBI, Docker, LLMs, etc.)
- Grouped by category (Languages, Data Tools, AI/ML, Cloud/DevOps)
- Subtle hover animations on each skill badge

### 4. 💼 Projects
- **Card grid** layout that automatically wraps and stays responsive as you add more projects
- Each card shows: project image/thumbnail, title, short description, tech tags, and a GitHub link button
- All project data stored in a **simple data array** — to add a new project, you just add an object to the array
- Your existing ~11 projects migrated in

### 5. 📜 Timeline / Experience
- Vertical timeline showing your education and career milestones
- Entries for: Electrical Engineering degree (UNIT), AI Post-grad (Mackenzie), current work with LLMs/GenAI

### 6. 🎓 Courses & Certifications
- Card grid similar to projects
- DataCamp, Udacity, Coursera, MIT certificates with logos and verification links
- Also driven by a simple data array for easy additions

### 7. 📬 Contact / Footer
- Contact info (email, phone, location)
- Social links repeated
- Clean footer with copyright

---

## Easy Maintenance Architecture
- **All content (projects, skills, certifications, timeline) will be defined in simple data files** (TypeScript arrays/objects). To add a new project, you just add an entry like:
  ```
  { title: "My New Project", description: "...", image: "...", github: "..." }
  ```
- The layout automatically adapts — responsive grid that flows naturally with any number of items
- No need to touch layout code when adding content

---

## Responsive Design
- Fully responsive from mobile to desktop
- Cards stack vertically on mobile, grid on desktop
- Navigation becomes a hamburger menu on mobile
- All sections adapt gracefully to any screen size

## Navigation
- Sticky top navbar with smooth-scroll links to each section
- Hamburger menu on mobile
- Active section highlighting as you scroll

