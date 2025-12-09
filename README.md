# POZITIVE AI | Launchpad

A futuristic, high-performance resource directory designed to be the ultimate starting point for developers, designers, and researchers exploring the modern AI ecosystem.

## 🚀 Overview

POZITIVE AI acts as a unified "Launchpad" that aggregates the bleeding-edge tools from Google's ecosystem and the broader AI landscape. It organizes resources into three distinct pillars:

1.  **Google Tools**: A hub for Google's specific AI tools, Workspace integrations, and research labs (Gemini, DeepMind, Labs).
2.  **Design Systems**: A curated gallery of Generative UI, Image FX, Video generation, and 3D tools for creatives.
3.  **Build Systems**: A dev-centric dashboard for AI Engineering, Agents, LLMOps, and Infrastructure.

## ✨ Key Features

### 🧠 Smart Search & Strategic Research
-   **Dual Mode**: Toggle between standard **Find** (Regex/Tag search) and **Research** (AI-powered advisory).
-   **3-Tier Strategy**: The AI Advisor doesn't just list tools; it provides three distinct plans:
    -   **One-Shot**: The single best tool for the job.
    -   **Bespoke**: A custom workflow combining 2-3 tools.
    -   **Full Stack**: A scalable architecture recommendation.
-   **Fallback Mechanisms**: If the API key is missing or quota is exceeded, the search gracefully transitions to opening the query in Google Gemini external.

### ⚡ Quick Launch Dock
-   **Tabbed Organization**: Tools are grouped logically (e.g., "Dream", "Work", "Build") in a sticky, glass-morphic dock.
-   **Interactive Tooltips**: Hovering over dock items reveals rich, card-like details without cluttering the UI.
-   **Mobile Optimized**: The dock transforms into a swipeable carousel on touch devices.

### 🎓 Learn App Dashboard
-   **Deep Dives**: Major tools (like NotebookLM, AI Studio, Opal) feature a dedicated "Learn App" page.
-   **Curated Content**: Includes top creators to follow, essential video tutorials, and direct links to community hubs.
-   **Split Actions**: Tool cards feature a split-interaction model—click "Launch" to go to the tool, or "Learn" to access the dashboard.

### 🧭 Adaptive Navigation
-   **Floating Drawer**: A sleek, slide-out navigation panel accessed via a floating trigger button, keeping the main interface clean.
-   **State Driven**: The navigation state persists and animates smoothly, providing a native-app feel on the web.

## 🛠 Tech Stack

-   **Frontend**: React 18, TypeScript
-   **Styling**: Tailwind CSS (with custom animations and utility extensions)
-   **Icons**: Lucide React + Custom SVG Paths (Brand Authentic)
-   **AI Integration**: Google GenAI SDK (`@google/genai`)
-   **Build Tooling**: Vite-compatible structure (ES Modules)

## 📂 Project Structure

```
├── index.html          # Entry point with Tailwind & Fonts
├── index.tsx           # React Root
├── App.tsx             # Main Layout, Router & Floating Navigation
├── types.ts            # TypeScript Definitions & Data Models
├── components/
│   ├── DockItem.tsx    # Quick Launch buttons with tooltips
│   ├── Icons.tsx       # Icon mapping & Custom Brand SVGs
│   ├── SmartSearch.tsx # AI Search & Strategic Research Logic
│   └── ToolCard.tsx    # Main grid cards with holographic effects
├── data/
│   ├── tools.ts        # Google Tools Data
│   ├── designTools.ts  # Design System Data
│   ├── buildTools.ts   # Build System Data
│   └── learningResources.ts # Curated educational content
└── pages/
    ├── GoogleSystems.tsx # Main Google Tools Dashboard
    ├── DesignSystems.tsx # Design Dashboard
    ├── BuildSystems.tsx  # Engineering Dashboard
    └── LearnApp.tsx      # Educational Detail View
```

## 🚀 Getting Started

1.  **Environment**: Ensure `process.env.API_KEY` is set if you want the "Research" feature to work natively within the app.
2.  **Dependencies**: The project uses ES modules imported via `importmap` in `index.html`. No `npm install` is strictly required for the runtime if served correctly, but standard React development environments apply.

## 📱 Mobile Experience

The application features a "Wow" mobile mode:
-   **Touch Optimizations**: Tooltips are disabled on touch to prevent sticky hover states.
-   **Snap Scrolling**: Docks use `snap-x` for smooth horizontal browsing.
-   **Viewport Locking**: Meta tags prevent accidental zooming for a native app feel.

---

*Built with ❤️ for the AI Community.*