# POZITIVE AI | Launchpad

A futuristic, high-performance resource directory designed to be the ultimate starting point for developers, designers, and researchers exploring the modern AI ecosystem. 

## 🚀 Overview

POZITIVE AI acts as a unified "Launchpad" that aggregates the bleeding-edge tools from Google's ecosystem and the broader AI landscape. It organizes resources into three distinct pillars:

1.  **Google Nexus**: A hub for Google's specific AI tools, Workspace integrations, and research labs (Gemini, DeepMind, Labs).
2.  **Design Systems**: A curated gallery of Generative UI, Image FX, Video generation, and 3D tools for creatives.
3.  **Build Systems**: A dev-centric dashboard for AI Engineering, Agents, LLMOps, and Infrastructure.

## ✨ Key Features

### 🧠 Smart Search & AI Advisor
-   **Dual Mode**: Toggle between standard **Find** (Regex/Tag search) and **Research** (AI-powered advisory).
-   **Context Aware**: The AI Advisor changes its persona based on the active page (Cloud Architect for Build, Creative Technologist for Design).
-   **Fallback Mechanisms**: If the API key is missing or quota is exceeded, the search gracefully transitions to opening the query in Google Gemini external.

### ⚡ Quick Launch Dock
-   **Tabbed Organization**: Tools are grouped logically (e.g., "Dream", "Work", "Build") in a sticky, glass-morphic dock.
-   **Interactive Tooltips**: Hovering over dock items reveals rich, card-like details without cluttering the UI.
-   **Mobile Optimized**: The dock transforms into a swipeable carousel on touch devices.

### 🎨 Visual Design System
-   **Cyber-Glass Aesthetic**: Utilizes backdrop filters, noise textures, and dynamic gradients.
-   **Brand Authenticity**: Includes a custom SVG icon library for accurate representation of tools like Figma, Supabase, Gemini, etc.
-   **Responsive**: Native-app feel on mobile with bottom navigation and safe-area handling.

## 🛠 Tech Stack

-   **Frontend**: React 18, TypeScript
-   **Styling**: Tailwind CSS (with custom animations and utility extensions)
-   **Icons**: Lucide React + Custom SVG Paths
-   **AI Integration**: Google GenAI SDK (`@google/genai`)
-   **Build Tooling**: Vite-compatible structure (ES Modules)

## 📂 Project Structure

```
├── index.html          # Entry point with Tailwind & Fonts
├── index.tsx           # React Root
├── App.tsx             # Main Layout & Router
├── types.ts            # TypeScript Definitions
├── components/
│   ├── DockItem.tsx    # Quick Launch buttons with tooltips
│   ├── Icons.tsx       # Icon mapping & Custom Brand SVGs
│   ├── SmartSearch.tsx # AI Search Logic
│   └── ToolCard.tsx    # Main grid cards with holographic effects
├── data/
│   ├── tools.ts        # Google Ecosystem Data
│   ├── designTools.ts  # Design System Data
│   └── buildTools.ts   # Build System Data
└── pages/
    ├── GoogleNexus.tsx
    ├── DesignSystems.tsx
    └── BuildSystems.tsx
```

## 🚀 Getting Started

1.  **Environment**: Ensure `process.env.API_KEY` is set if you want the "Research" feature to work natively within the app.
2.  **Dependencies**: The project uses ES modules imported via `importmap` in `index.html`. No `npm install` is strictly required for the runtime if served correctly, but standard React development environments apply.

## 📱 Mobile Experience

The application features a "Wow" mobile mode:
-   **Bottom Navigation**: Thumbs-friendly navigation bar.
-   **Touch Optimizations**: Tooltips are disabled on touch to prevent sticky hover states.
-   **Snap Scrolling**: Docks use `snap-x` for smooth horizontal browsing.

---

*Built with ❤️ for the AI Community.*
