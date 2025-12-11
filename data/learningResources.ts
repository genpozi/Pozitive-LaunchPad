import { LearningHubData } from '../types';

export const learningResourcesData: Record<string, LearningHubData> = {
  // --- LOVABLE ---
  'lovable': {
    toolId: 'lovable',
    tagline: 'Idea to App in Minutes',
    overview: 'Lovable is a next-generation AI coding platform often called "GPT Engineer." It allows you to build full-stack web applications by simply chatting. Unlike standard code assistants, Lovable handles the entire project structure, dependency management, and deployment, making it possible to ship real apps without touching an IDE.',
    useCases: [
      'Building MVP SaaS platforms in hours',
      'Creating internal tools and dashboards',
      'Rapidly prototyping UI/UX concepts',
      'Fixing bugs through conversational debugging'
    ],
    tips: [
        "Mention 'Supabase' in your prompt to auto-configure a backend database + auth.",
        "Upload a screenshot of a UI you like and ask Lovable to 'clone this design'.",
        "Use the 'Deploy' button early to get a live URL for testing on mobile devices.",
        "If a feature fails, ask Lovable to 'add logging' to debug the issue."
    ],
    creators: [
      {
        name: 'Lovable Team',
        focus: 'Official Demos',
        description: 'Showcasing complex apps built with Lovable.',
        platform: 'YouTube',
        url: 'https://lovable.dev/'
      }
    ],
    videos: [
      {
        title: 'Building a SaaS with Lovable',
        channel: 'Lovable',
        description: 'From blank canvas to deployed application.',
        duration: '10:30'
      }
    ],
    articles: [
      {
        title: 'Lovable Documentation',
        source: 'Official',
        description: 'Guide to integrations and custom domains.',
        url: 'https://docs.lovable.dev/'
      }
    ],
    communities: [
      {
        title: 'Lovable Discord',
        source: 'Discord',
        description: 'Share your builds and get help from the team.',
        url: 'https://discord.gg/lovable'
      }
    ]
  },

  // --- CURSOR ---
  'cursor': {
    toolId: 'cursor',
    tagline: 'The AI-First Code Editor',
    overview: 'Cursor is a fork of VS Code designed for pair-programming with AI. It features "Tab" (auto-complete on steroids), "Composer" (multi-file editing), and a chat interface that understands your entire codebase. It is widely considered the best AI coding experience available.',
    useCases: [
      'Refactoring entire modules with natural language',
      'Fixing linting errors automatically',
      'Understanding complex legacy codebases',
      'Writing documentation based on code context'
    ],
    tips: [
        "Use 'Cmd+K' (or Ctrl+K) to generate or edit code in-place.",
        "Type '@Codebase' in chat to force Cursor to scan your entire project context.",
        "Use 'Composer' (Cmd+I) to edit multiple files simultaneously for big refactors.",
        "Add a '.cursorrules' file to your root to teach the AI your specific coding style."
    ],
    creators: [
      {
        name: 'Greg Isenberg',
        focus: 'Productivity',
        description: 'How Cursor changes the economics of coding.',
        platform: 'Social',
        url: 'https://twitter.com/gregisenberg'
      },
      {
        name: 'Sahil Lavingia',
        focus: 'Indie Dev',
        description: 'Building Gumroad features with Cursor.',
        platform: 'Social',
        url: 'https://twitter.com/shl'
      }
    ],
    videos: [
      {
        title: 'Cursor Composer: The Future of Coding',
        channel: 'Fireship',
        description: 'Deep dive into the multi-file editing capabilities.',
        duration: '08:45'
      },
      {
        title: 'How to Master Cursor AI',
        channel: 'Tech With Tim',
        description: 'Setting up custom rules and keyboard shortcuts.',
        duration: '15:20'
      }
    ],
    articles: [
      {
        title: 'Cursor Features Guide',
        source: 'Official',
        description: 'Documentation on privacy mode and codebase indexing.',
        url: 'https://cursor.sh/features'
      }
    ],
    communities: [
      {
        title: 'r/cursor',
        source: 'Reddit',
        description: 'Tips, tricks, and prompt strategies.',
        url: 'https://www.reddit.com/r/cursor/'
      }
    ]
  },

  // --- WINDSURF ---
  'windsurf': {
    toolId: 'windsurf',
    tagline: 'The First Agentic IDE',
    overview: 'Windsurf by Codeium is an "Agentic IDE" that goes beyond autocomplete. It introduces "Flows," where the AI can independently explore your codebase, reason about architecture, and perform complex multi-step refactors while keeping you in the loop.',
    useCases: [
      'Deep context-aware code generation',
      'Agentic refactoring of large systems',
      'Intelligent terminal command execution',
      'Seamless context switching between files'
    ],
    tips: [
        "Hold 'Cmd+.' to toggle 'Cascade' view for inline agent suggestions.",
        "Pin critical files to context by clicking the 'Chip' icon in the file explorer.",
        "Use the 'Terminal' tab in Cascade to let the AI run tests and fix errors autonomously.",
        "Ask Windsurf to 'Explain this flow' to generate architecture diagrams."
    ],
    creators: [
      {
        name: 'Codeium',
        focus: 'Official',
        description: 'Developers of the underlying model.',
        platform: 'YouTube',
        url: 'https://codeium.com/'
      }
    ],
    videos: [
      {
        title: 'Windsurf vs Cursor: Which is better?',
        channel: 'Builder.io',
        description: 'A fair comparison of the two leading AI editors.',
        duration: '12:15'
      }
    ],
    articles: [
      {
        title: 'Introducing Windsurf',
        source: 'Codeium Blog',
        description: 'The philosophy behind agentic coding flows.',
        url: 'https://codeium.com/blog/windsurf-launch'
      }
    ],
    communities: [
      {
        title: 'Codeium Discord',
        source: 'Discord',
        description: 'Community for Windsurf and Codeium plugin users.',
        url: 'https://discord.gg/codeium'
      }
    ]
  },

  // --- BOLT.NEW ---
  'bolt-new': {
    toolId: 'bolt-new',
    tagline: 'Full-Stack Development in the Browser',
    overview: 'Bolt.new allows you to prompt, run, edit, and deploy full-stack web applications directly in your browser. Powered by WebContainers, it requires no local environment setup, making it the fastest way to spin up a Next.js, Remix, or SvelteKit project.',
    useCases: [
      'Instant reproduction of bugs',
      'Collaborative live coding sessions',
      'Testing new frameworks without installation',
      'Deploying prototypes to Netlify/Vercel instantly'
    ],
    tips: [
        "Type 'Deploy to Netlify' to get a live URL in seconds.",
        "Paste a screenshot of a dashboard and ask Bolt to 'make it functional with mock data'.",
        "If the shell hangs, type 'Ctrl+C' in the terminal panel to kill the process.",
        "Use 'fix the lint errors' as a follow-up prompt to clean up code."
    ],
    creators: [
      {
        name: 'StackBlitz',
        focus: 'Official',
        description: 'The team behind the WebContainer technology.',
        platform: 'YouTube',
        url: 'https://stackblitz.com/'
      }
    ],
    videos: [
      {
        title: 'Bolt.new: The AI Web Developer',
        channel: 'Fireship',
        description: 'Building a full app with database in minutes.',
        duration: '05:30'
      }
    ],
    articles: [
      {
        title: 'WebContainers API',
        source: 'StackBlitz',
        description: 'How Node.js runs inside the browser.',
        url: 'https://webcontainers.io/'
      }
    ],
    communities: [
      {
        title: 'StackBlitz Discord',
        source: 'Discord',
        description: 'Discussion on Bolt and browser-based dev.',
        url: 'https://discord.gg/stackblitz'
      }
    ]
  },

  // --- SUPABASE ---
  'supabase': {
    toolId: 'supabase',
    tagline: 'The Open Source Firebase Alternative',
    overview: 'Supabase is an open source Firebase alternative. It provides all the backend features you need to build a product: a Postgres database, Authentication, instant APIs, Edge Functions, and Realtime subscriptions. It is heavily optimized for AI with pgvector.',
    useCases: [
      'Storing embeddings for RAG applications (pgvector)',
      'Handling user authentication and row-level security',
      'Listening to database changes in real-time',
      'Running AI logic on Edge Functions'
    ],
    tips: [
        "Enable Row Level Security (RLS) immediately. It is off by default on new tables.",
        "Use 'pgvector' with 'hybrid_search' to combine keyword matching (BM25) with semantic search.",
        "Generate TypeScript types automatically with 'supabase gen types typescript --project-id <id>'.",
        "Use Storage RLS policies to securely serve user-generated images."
    ],
    creators: [
      {
        name: 'Supabase Team',
        focus: 'Engineering',
        description: 'Deep dives into Postgres performance.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@Supabase'
      },
      {
        name: 'Ant Wilson',
        focus: 'DevRel',
        description: 'CTO of Supabase, sharing SQL tips.',
        platform: 'Social',
        url: 'https://twitter.com/AntWilson'
      }
    ],
    videos: [
      {
        title: 'Supabase in 100 Seconds',
        channel: 'Fireship',
        description: 'Quick overview of the platform.',
        duration: '01:50'
      },
      {
        title: 'Vector Embeddings with Supabase',
        channel: 'Supabase',
        description: 'Building a semantic search engine.',
        duration: '14:20'
      }
    ],
    articles: [
      {
        title: 'Supabase Documentation',
        source: 'Official',
        description: 'Guides on Auth, Database, and Edge Functions.',
        url: 'https://supabase.com/docs'
      }
    ],
    communities: [
      {
        title: 'r/supabase',
        source: 'Reddit',
        description: 'Help with SQL queries and architecture.',
        url: 'https://www.reddit.com/r/supabase/'
      }
    ]
  },

  // --- VERCEL AI SDK ---
  'vercel-ai': {
    toolId: 'vercel-ai',
    tagline: 'Build AI-Powered User Interfaces',
    overview: 'The Vercel AI SDK is the TypeScript library for building AI-powered user interfaces. It abstracts the complexity of streaming responses from LLMs (Gemini, OpenAI, Anthropic) to the frontend, offering hooks like `useChat` and `useCompletion` for seamless UX.',
    useCases: [
      'Building streaming chat interfaces',
      'Generative UI (rendering React components from text)',
      'Standardizing API calls across multiple LLM providers',
      'Handling tool calling and function execution on the client'
    ],
    tips: [
        "Use 'maxSteps: 5' in 'useChat' config to enable multi-step tool calls (agents).",
        "Implement 'onFinish' callbacks to save chat history to your database after the stream ends.",
        "Use 'streamObject' instead of 'streamText' to force structured JSON outputs for UI generation.",
        "Use 'experimental_toolObj' to stream tool status updates to the UI."
    ],
    creators: [
      {
        name: 'Vercel',
        focus: 'Official',
        description: 'Announcements on Next.js integration.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@VercelHQ'
      },
      {
        name: 'Jared Palmer',
        focus: 'Engineering',
        description: 'VP of AI at Vercel.',
        platform: 'Social',
        url: 'https://twitter.com/jaredpalmer'
      }
    ],
    videos: [
      {
        title: 'Building Generative UI with Vercel AI SDK',
        channel: 'Vercel',
        description: 'How to stream React components from the server.',
        duration: '22:15'
      }
    ],
    articles: [
      {
        title: 'AI SDK Documentation',
        source: 'Vercel',
        description: 'API reference for Core, React, and RSC.',
        url: 'https://sdk.vercel.ai/docs'
      }
    ],
    communities: [
      {
        title: 'Vercel Community',
        source: 'Github',
        description: 'Discussions and issue tracking.',
        url: 'https://github.com/vercel/ai/discussions'
      }
    ]
  },

  // --- DOCKER ---
  'docker': {
    toolId: 'docker',
    tagline: 'Accelerate How You Build, Share, and Run',
    overview: 'Docker helps developers build, share, and run applications anywhere — without the "it works on my machine" headache. In the AI era, Docker is essential for packaging models, managing dependencies (CUDA, Python versions), and deploying to the cloud.',
    useCases: [
      'Containerizing Python AI applications',
      'Managing complex microservices architectures',
      'Ensuring consistent environments across Dev/Prod',
      'Sharing reproducible research environments'
    ],
    tips: [
        "Use multi-stage builds to keep your final image size small (e.g. build in one stage, copy artifacts to a slim runtime).",
        "Use 'docker system prune' periodically to clear unused images and reclaim disk space.",
        "Mount volumes with '-v' to persist database data or model weights across container restarts.",
        "Use 'host' networking mode on Linux for lower latency in local AI inference."
    ],
    creators: [
      {
        name: 'Docker',
        focus: 'Official',
        description: 'Tutorials on Docker Desktop and Compose.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@Docker'
      }
    ],
    videos: [
      {
        title: 'Docker for Beginners',
        channel: 'TechWorld with Nana',
        description: 'The definitive guide to containers.',
        duration: '45:00'
      }
    ],
    articles: [
      {
        title: 'Docker GenAI Stack',
        source: 'Docker',
        description: 'Pre-configured containers for LLM development.',
        url: 'https://www.docker.com/products/ai-machine-learning/'
      }
    ],
    communities: [
      {
        title: 'r/docker',
        source: 'Reddit',
        description: 'Troubleshooting networking and volume issues.',
        url: 'https://www.reddit.com/r/docker/'
      }
    ]
  },

  // --- GROQ ---
  'groq': {
    toolId: 'groq',
    tagline: 'Inference at the Speed of Thought',
    overview: 'Groq is an AI infrastructure company that built the LPU (Language Processing Unit), a new type of processor designed specifically for LLM inference. It delivers unprecedented speed (500+ tokens/sec), enabling real-time voice and interactive AI experiences.',
    useCases: [
      'Real-time voice-to-voice agents',
      'High-speed text generation for productivity',
      'Serving open-source models (Llama 3, Mixtral) cheaply',
      'Latency-sensitive RAG applications'
    ],
    tips: [
        "Use 'llama3-70b-8192' for complex reasoning, but 'llama3-8b-8192' for raw speed.",
        "Groq is OpenAI API compatible; just change the 'baseURL' and 'apiKey' in your existing code.",
        "Keep system prompts concise; inference is so fast that network latency becomes the bottleneck.",
        "Use the JSON mode to guarantee structured output for tool calling."
    ],
    creators: [
      {
        name: 'Groq',
        focus: 'Official',
        description: 'Demos of LPU performance.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@GroqInc'
      }
    ],
    videos: [
      {
        title: 'Groq vs GPU: Why it\'s so fast',
        channel: 'Asianometry',
        description: 'Technical breakdown of the deterministic architecture.',
        duration: '14:30'
      }
    ],
    articles: [
      {
        title: 'Groq API Docs',
        source: 'Official',
        description: 'OpenAI-compatible API reference.',
        url: 'https://console.groq.com/docs/quickstart'
      }
    ],
    communities: [
      {
        title: 'Groq Discord',
        source: 'Discord',
        description: 'Chat with the engineers building the LPU.',
        url: 'https://discord.gg/groq'
      }
    ]
  },

  // --- OLLAMA ---
  'ollama': {
    toolId: 'ollama',
    tagline: 'Get Up and Running with Llama 3',
    overview: 'Ollama is the easiest way to run open-source large language models locally. It bundles model weights, configuration, and data into a single package (Modelfile), allowing you to run powerful AI on your laptop via a simple CLI or API.',
    useCases: [
      'Running Llama 3, Phi 3, Mistral offline',
      'Building private, local RAG applications',
      'Testing models without API costs',
      'Integrating local AI into desktop apps'
    ],
    tips: [
        "Run 'ollama run llama3' to chat immediately in the terminal.",
        "Create a 'Modelfile' to save custom system prompts (e.g. 'FROM llama3 SYSTEM \"You are Mario\"').",
        "Use 'ollama serve' to expose a local REST API on port 11434.",
        "Check 'ollama ps' to see which models are currently loaded in VRAM."
    ],
    creators: [
      {
        name: 'Matt Williams',
        focus: 'Tutorials',
        description: 'Deep dives into Ollama commands and Modelfiles.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@technovangelist'
      }
    ],
    videos: [
      {
        title: 'Ollama Course for Beginners',
        channel: 'NetworkChuck',
        description: 'Running AI on a Raspberry Pi or Laptop.',
        duration: '18:20'
      }
    ],
    articles: [
      {
        title: 'Ollama Library',
        source: 'Official',
        description: 'Browse available models and tags.',
        url: 'https://ollama.com/library'
      }
    ],
    communities: [
      {
        title: 'r/LocalLLaMA',
        source: 'Reddit',
        description: 'The home of local AI enthusiasts.',
        url: 'https://www.reddit.com/r/LocalLLaMA/'
      }
    ]
  },

  // --- FLUX.1 ---
  'flux-1': {
    toolId: 'flux-1',
    tagline: 'The New King of Open Source Image Gen',
    overview: 'Flux.1 is a suite of text-to-image models by Black Forest Labs that defines a new state-of-the-art in image detail, prompt adherence, and style diversity. It comes in three variants: Pro (Closed), Dev (Open Weights), and Schnell (Fast/Distilled).',
    useCases: [
      'Generating photorealistic human portraits',
      'Rendering complex text within images accurately',
      'Creating consistent character sheets',
      'High-speed generation for real-time apps (Schnell)'
    ],
    tips: [
        "Use 'guidance_scale' between 2.0 and 3.5 for best results. Flux is sensitive.",
        "For 8GB VRAM cards, use the 'Schnell' model or 'GGUF' quantized versions (Q4_K_S).",
        "Flux understands natural language. Don't use 'masterpiece, best quality' tag salad; just describe the scene.",
        "Use 'Realism' LoRAs at 0.6 strength to enhance skin texture without burning the image."
    ],
    creators: [
      {
        name: 'MattVidPro AI',
        focus: 'News & Demos',
        description: 'Comprehensive comparisons between Flux, Midjourney, and Ideogram.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@MattVidPro'
      },
      {
        name: 'Black Forest Labs',
        focus: 'Official',
        description: 'The research team behind the model.',
        platform: 'Website',
        url: 'https://blackforestlabs.ai/'
      }
    ],
    videos: [
      {
        title: 'FLUX.1 - The New King of AI Art?',
        channel: 'MattVidPro AI',
        description: 'Detailed analysis of prompt adherence and text capabilities.',
        duration: '14:20'
      },
      {
        title: 'How to Run Flux Locally (Easy Guide)',
        channel: 'Aitrepreneur',
        description: 'Step-by-step installation using Forge or ComfyUI.',
        duration: '10:15'
      }
    ],
    articles: [
      {
        title: 'Flux.1 Hugging Face Repo',
        source: 'Hugging Face',
        description: 'Download the weights and view the model card.',
        url: 'https://huggingface.co/black-forest-labs/FLUX.1-dev'
      }
    ],
    communities: [
      {
        title: 'r/StableDiffusion',
        source: 'Reddit',
        description: 'The main hub for Flux discussions and workflows.',
        url: 'https://www.reddit.com/r/StableDiffusion/'
      }
    ]
  },

  // --- MIDJOURNEY ---
  'midjourney': {
    toolId: 'midjourney',
    tagline: 'The Gold Standard of AI Aesthetics',
    overview: 'Midjourney is renowned for its artistic style and high-fidelity output. Operating primarily through Discord (and now a web alpha), it excels at abstract concepts, painting styles, and photorealism without complex prompt engineering.',
    useCases: [
      'Concept art for games and movies',
      'Editorial illustration and cover art',
      'Style exploration with --sref (Style Reference)',
      'Creating seamless textures and patterns'
    ],
    tips: [
        "Use '--sref [url]' to transfer the style of any image to your prompt.",
        "Use '--p' to apply your personalized style code (needs tuning first).",
        "Use '--tile' to generate seamless repeating patterns.",
        "Use '--cref [url]' to keep a character's face consistent across images."
    ],
    creators: [
      {
        name: 'Future Tech Pilot',
        focus: 'Updates',
        description: 'Weekly breakdowns of "Office Hours" and new features.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@FutureTechPilot'
      }
    ],
    videos: [
      {
        title: 'Midjourney v6.1 Complete Guide',
        channel: 'Tokenized AI',
        description: 'Mastering parameters like --chaos, --weird, and --stylize.',
        duration: '25:00'
      }
    ],
    articles: [
      {
        title: 'Midjourney Documentation',
        source: 'Official Docs',
        description: 'The bible of parameters and command usage.',
        url: 'https://docs.midjourney.com/'
      }
    ],
    communities: [
      {
        title: 'Midjourney Discord',
        source: 'Discord',
        description: 'The largest AI art community in the world.',
        url: 'https://discord.gg/midjourney'
      }
    ]
  },

  // --- RUNWAY ---
  'runway': {
    toolId: 'runway',
    tagline: 'Moving Creativity Forward',
    overview: 'Runway is an applied AI research company shaping the next era of art, entertainment, and human creativity. Their Gen-3 Alpha model offers unprecedented control over AI video generation, including motion brush, camera controls, and lip sync.',
    useCases: [
      'Generating B-roll for video production',
      'Animating static images with Motion Brush',
      'Creating surreal transitions and effects',
      'Storyboard visualization for film'
    ],
    tips: [
        "Use 'Motion Brush' to highlight specific areas (like water or clouds) you want to move.",
        "Chain clips together using the 'Extend' feature for consistent scenes longer than 4s.",
        "Use 'Camera Control' to force a specific pan or zoom, preventing random camera movement.",
        "Low 'Motion' values (1-3) are better for realistic dialogue; High values (7-10) for action."
    ],
    creators: [
      {
        name: 'Runway',
        focus: 'Academy',
        description: 'Official tutorials on Gen-3 Alpha controls.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@RunwayML'
      },
      {
        name: 'CuriousRefuge',
        focus: 'Filmmaking',
        description: 'Using Runway in professional post-production workflows.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@CuriousRefuge'
      }
    ],
    videos: [
      {
        title: 'Getting Started with Gen-3 Alpha',
        channel: 'Runway',
        description: 'Official guide to prompting for video.',
        duration: '05:30'
      },
      {
        title: 'Runway Gen-3: The Filmmaker\'s Guide',
        channel: 'Corridor Crew',
        description: 'Testing the limits of AI video in production.',
        duration: '18:45'
      }
    ],
    articles: [
      {
        title: 'Runway Academy',
        source: 'Runway',
        description: 'Learn to use the full suite of magic tools.',
        url: 'https://runwayml.com/academy'
      }
    ],
    communities: [
      {
        title: 'r/runwayml',
        source: 'Reddit',
        description: 'Sharing generations and motion brush techniques.',
        url: 'https://www.reddit.com/r/runwayml/'
      }
    ]
  },

  // --- COMFYUI ---
  'comfyui': {
    toolId: 'comfyui',
    tagline: 'The Modular Stable Diffusion Engine',
    overview: 'ComfyUI is a node-based graphical user interface for Stable Diffusion. It lets you design and execute advanced generative pipelines by connecting blocks, offering granular control over every step of the generation process.',
    useCases: [
      'Building complex "img2img" workflows',
      'Upscaling with ControlNet tile refinement',
      'Automating batch generation tasks',
      'Experimenting with new research papers instantly'
    ],
    tips: [
        "Double-click the background to open the node search menu instantly.",
        "Drag and drop ANY image generated by ComfyUI into the window to load its workflow.",
        "Use 'Reroute' nodes to keep your wire connections clean and readable.",
        "Install 'ComfyUI Manager' first—it automates installing missing custom nodes."
    ],
    creators: [
      {
        name: 'Scott Detweiler',
        focus: 'Deep Dives',
        description: 'The professor of ComfyUI. Explains every node in detail.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@ScottDetweiler'
      },
      {
        name: 'Olivio Sarikas',
        focus: 'Workflows',
        description: 'Practical workflows for high-end AI art.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@OlivioSarikas'
      }
    ],
    videos: [
      {
        title: 'ComfyUI Beginner\'s Guide',
        channel: 'Scott Detweiler',
        description: 'Understanding the basic flow: Checkpoint -> CLIP -> VAE.',
        duration: '22:15'
      },
      {
        title: 'Flux in ComfyUI: Setup Guide',
        channel: 'Nerdy Rodent',
        description: 'How to run the latest Flux models in Comfy.',
        duration: '12:30'
      }
    ],
    articles: [
      {
        title: 'ComfyUI Examples',
        source: 'GitHub',
        description: 'Official library of JSON workflows to drag and drop.',
        url: 'https://github.com/comfyanonymous/ComfyUI_examples'
      }
    ],
    communities: [
      {
        title: 'Comfy Workflows',
        source: 'Website',
        description: 'Repository of community-created node graphs.',
        url: 'https://comfyworkflows.com/'
      }
    ]
  },

  // --- FIGMA ---
  'figma': {
    toolId: 'figma',
    tagline: 'How You Design, Align, and Build',
    overview: 'Figma is the leading collaborative interface design tool. It brings teams together to build better products. With new AI features, you can generate text, translate content, and even generate images directly within your design files.',
    useCases: [
      'Real-time collaborative UI design',
      'Building comprehensive Design Systems',
      'Prototyping user flows and interactions',
      'Developer handoff with Dev Mode'
    ],
    tips: [
        "Use 'Cmd+/' (Quick Actions) to access plugins and commands instantly.",
        "In Dev Mode, use 'Compare Changes' to see what changed between versions.",
        "Use 'Auto Layout' (Shift+A) everywhere. It is the CSS Flexbox of Figma.",
        "Name your layers. It helps AI plugins (and developers) understand your structure."
    ],
    creators: [
      {
        name: 'Figma',
        focus: 'Official',
        description: 'Keynotes, tutorials, and feature deep dives.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@Figma'
      },
      {
        name: 'Mizko',
        focus: 'UX Mastery',
        description: 'Advanced tutorials on Auto Layout and Design Systems.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@Mizko'
      }
    ],
    videos: [
      {
        title: 'Figma for Beginners: Complete Course',
        channel: 'Envato Tuts+',
        description: 'From zero to functional prototype.',
        duration: '45:00'
      },
      {
        title: 'Figma Dev Mode Explained',
        channel: 'Figma',
        description: 'Bridging the gap between design and code.',
        duration: '06:30'
      }
    ],
    articles: [
      {
        title: 'Figma Learn',
        source: 'Official',
        description: 'Courses on everything from vector networks to variables.',
        url: 'https://help.figma.com/hc/en-us'
      }
    ],
    communities: [
      {
        title: 'Figma Community',
        source: 'Website',
        description: 'Thousands of free plugins and files.',
        url: 'https://www.figma.com/community'
      }
    ]
  },

  // --- BLENDER ---
  'blender': {
    toolId: 'blender',
    tagline: 'Free and Open Source 3D Creation',
    overview: 'Blender is the free and open source 3D creation suite. It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, video editing and 2D animation pipeline.',
    useCases: [
      '3D Modeling and Sculpting',
      'Photorealistic Rendering (Cycles)',
      'VFX and Motion Graphics',
      'Game Asset Creation'
    ],
    creators: [
      {
        name: 'Blender Guru',
        focus: 'Tutorials',
        description: 'Creator of the famous Donut tutorial series.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@BlenderGuru'
      },
      {
        name: 'CGGeek',
        focus: 'Environments',
        description: 'Creating massive nature scenes and VFX.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@CGGeek'
      }
    ],
    videos: [
      {
        title: 'Blender 4.0 Beginner Donut Tutorial',
        channel: 'Blender Guru',
        description: 'The rite of passage for every 3D artist.',
        duration: '20:00'
      }
    ],
    articles: [
      {
        title: 'Blender Manual',
        source: 'Official Docs',
        description: 'Detailed reference for all features.',
        url: 'https://docs.blender.org/'
      }
    ],
    communities: [
      {
        title: 'r/blender',
        source: 'Reddit',
        description: 'Showcasing renders and getting help.',
        url: 'https://www.reddit.com/r/blender/'
      }
    ]
  },

  // --- AI STUDIO ---
  'aistudio': {
    toolId: 'aistudio',
    tagline: 'The Prototyping Environment for Gemini',
    overview: 'Google AI Studio is the core, web-based platform for developers, prototypers, and non-coders to experiment directly with the Gemini family of models. It allows you to build sophisticated applications, master multimodal inputs (video/audio), and generate deployable code snippets instantly.',
    useCases: [
      'Rapid "Vibe Coding" & Business Tool Building',
      'Advanced Prompt Engineering (Few-Shot, Chaining)',
      'Multimodal Reasoning (Video/Audio/Code Analysis)',
      'Building Custom Chatbots & Agents'
    ],
    tips: [
        "Upload a video file to test Gemini 1.5 Pro's 2M context window.",
        "Use 'System Instructions' to define the persona and constraints globally.",
        "Click 'Get Code' to instantly export your prompt as Python or JavaScript.",
        "Use {{variable}} syntax to create template prompts for batch testing."
    ],
    creators: [
      {
        name: 'Google for Developers',
        focus: 'Core Docs',
        description: 'The definitive source for Quickstarts, API features, and new model releases.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@GoogleDevelopers'
      },
      {
        name: 'Codecademy',
        focus: 'Tutorials',
        description: 'Beginner-to-intermediate guides on interface navigation and basics.',
        platform: 'Blog',
        url: 'https://www.codecademy.com/'
      }
    ],
    videos: [
      {
        title: 'Google AI Studio Quickstart: Build a Custom Chat App',
        channel: 'Google for Developers',
        description: 'Official guide on System Instructions and Few-Shot prompting.',
        duration: '10:05'
      },
      {
        title: 'Prompt Design Strategies | Gemini API',
        channel: 'Google for Developers',
        description: 'Must-watch on prompt chaining, XML delimiters, and long context.',
        duration: '18:45'
      }
    ],
    articles: [
      {
        title: 'Google AI Studio Quickstart',
        source: 'Gemini API Docs',
        description: 'The single best resource for understanding every feature.',
        url: 'https://ai.google.dev/gemini-api/docs/ai-studio-quickstart'
      },
      {
        title: 'Advanced Prompt Design Strategies',
        source: 'Google Build',
        description: 'Deep dive into few-shot learning and agentic workflows.',
        url: 'https://ai.google.dev/docs/prompt_best_practices'
      }
    ],
    communities: [
      {
        title: 'Google for Developers Community',
        source: 'Official',
        description: 'Connect with other developers and Google engineers.',
        url: 'https://developers.google.com/community'
      }
    ]
  },

  // --- NOTEBOOKLM ---
  'notebooklm': {
    toolId: 'notebooklm',
    tagline: 'Your Personalized AI Research Assistant',
    overview: 'NotebookLM is an AI-first notebook, grounded in your own documents. It instantly becomes a subject matter expert in the sources you upload, allowing you to read, take notes, and collaborate with AI to organize your thinking.',
    useCases: [
      'Transform dense reports into audio podcasts',
      'Turn unorganized notes into structured study guides',
      'Competitive analysis & gap identification',
      'Literature reviews with grounded citations'
    ],
    tips: [
        "Upload multiple source types (PDF, Text, MP3) to create a richer Audio Overview.",
        "Ask NotebookLM to 'Critique this argument' based ONLY on the sources.",
        "Use the 'Saved Responses' feature to pin key citations.",
        "Generate a 'Briefing Doc' or 'FAQ' directly from the suggested actions."
    ],
    creators: [
      {
        name: 'Julian Goldie',
        focus: 'Content Repurposing',
        description: 'Mastering the Audio Overview feature for lead gen and consulting.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@JulianGoldieSEO'
      },
      {
        name: 'The AI News',
        focus: 'Tutorials & Updates',
        description: 'Fast updates on new features like Studio and multimodal inputs.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@TheAiNews'
      }
    ],
    videos: [
      {
        title: 'NEW NotebookLM Features 📝 Video Overview + Studio',
        channel: 'wanderloots',
        description: 'Excellent walkthrough of the Video Overview feature and the new Studio panel.',
        duration: '12:45'
      },
      {
        title: 'Ep 627: NotebookLM: New features & walkthrough',
        channel: 'Everyday AI',
        description: 'Complete guide to Drive integration and Learning Guide styles.',
        duration: '25:30'
      }
    ],
    articles: [
      {
        title: 'NotebookLM Help Center',
        source: 'Google Official',
        description: 'Step-by-step instructions on Mind Maps, Infographics, and Slide Decks.',
        url: 'https://support.google.com/notebooklm'
      }
    ],
    communities: [
      {
        title: 'r/notebooklm',
        source: 'Reddit',
        description: 'The most active community. Real-world use cases, prompts, and dev discussions.',
        url: 'https://www.reddit.com/r/notebooklm/'
      }
    ]
  },

  // --- LUMA ---
  'luma': {
      toolId: 'luma',
      tagline: 'Dream Machine',
      overview: 'High quality video generation. Luma Labs is pioneering realistic video models capable of generating physically accurate, consistent and eventful shots from text and images.',
      useCases: ['Video generation', 'VFX', 'Social Media Assets'],
      tips: [
          "Use 'Loop' mode to create seamless video backgrounds for websites.",
          "End your prompt with 'cinematic lighting, 4k, high fidelity' for better aesthetics.",
          "Upload a reference image to control the starting frame composition.",
          "Use the 'Enhance' prompt feature if your initial idea is too simple."
      ],
      creators: [
          {
              name: 'MattVidPro AI',
              focus: 'News & Demos',
              description: 'Coverage of Dream Machine capabilities and updates.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@MattVidPro'
          },
          {
              name: 'Luma Labs',
              focus: 'Official',
              description: 'Official showcase of community generations.',
              platform: 'Social',
              url: 'https://twitter.com/LumaLabsAI'
          }
      ], 
      videos: [
          {
              title: 'Luma Dream Machine Guide',
              channel: 'CuriousRefuge',
              description: 'How to prompt for consistent characters in Luma.',
              duration: '12:20'
          }
      ],
      articles: [
          {
              title: 'Dream Machine Research',
              source: 'Luma AI',
              description: 'Technical blog on the transformer architecture.',
              url: 'https://lumalabs.ai/blog'
          }
      ],
      communities: [
          {
              title: 'Luma Discord',
              source: 'Discord',
              description: 'Community sharing prompts and results.',
              url: 'https://discord.gg/lumalabs'
          }
      ]
  },

  // --- SPLINE ---
  'spline': {
      toolId: 'spline',
      tagline: '3D for Web',
      overview: 'Interactive 3D design tool built for the browser. Spline allows designers to create 3D scenes, animate them, and integrate them into React or Webflow websites with simple embed codes.',
      useCases: ['Web 3D', 'Interactivity', 'Game UI', 'Landing Pages'],
      tips: [
          "Export as 'React Component' to drop directly into your Next.js codebase.",
          "Use the 'AI Texture' generator to create unique materials from text prompts.",
          "Use 'Game Controls' to create simple walking simulators without code.",
          "Optimize your scene by using 'Cloner' objects instead of duplicating meshes."
      ],
      creators: [
          {
              name: 'DesignCourse',
              focus: 'Web Design',
              description: 'Integrating Spline 3D into modern websites.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@DesignCourse'
          },
          {
              name: 'Spline Tool',
              focus: 'Official',
              description: 'Tutorials on physics, game controls, and events.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@splinetool'
          }
      ],
      videos: [
          {
              title: 'Spline 3D Course for Beginners',
              channel: 'DesignCourse',
              description: 'Building a 3D portfolio site from scratch.',
              duration: '40:00'
          }
      ],
      articles: [
          {
              title: 'Spline Docs',
              source: 'Official',
              description: 'Guide to events, states, and export settings.',
              url: 'https://docs.spline.design/'
          }
      ],
      communities: [
          {
              title: 'Spline Community',
              source: 'Website',
              description: 'Remixable 3D scenes from the community.',
              url: 'https://community.spline.design/'
          }
      ]
  },

  // --- IMAGEFX ---
  'imagefx': {
      toolId: 'imagefx',
      tagline: 'Imagen 3 Lab',
      overview: 'Google\'s image playground powered by Imagen 3. It features "expressive chips" that let you quickly iterate on creative ideas by swapping out keywords without rewriting the whole prompt.',
      useCases: ['Image Gen', 'Ideation', 'Mockups', 'Concept Art'],
      tips: [
          "Click the 'Chips' (highlighted words) to instantly swap concepts (e.g. 'Cyberpunk' -> 'Steampunk').",
          "Use the 'SynthID' watermark check to verify outputs if you are unsure of origin.",
          "Prompts with 'photorealistic, 8k, highly detailed' work exceptionally well on Imagen 3.",
          "Use the 'Edit' mode to refine specific parts of the image (inpainting)."
      ],
      creators: [
          {
              name: 'Google Design',
              focus: 'Tips',
              description: 'Official tips on using expressive chips effectively.',
              platform: 'Social',
              url: 'https://twitter.com/GoogleDesign'
          }
      ],
      videos: [
          {
              title: 'ImageFX: A new way to create images',
              channel: 'Google',
              description: 'Official introduction to the interface and capabilities.',
              duration: '01:45'
          }
      ],
      articles: [
          {
              title: 'Imagen 3 Research Paper',
              source: 'Google DeepMind',
              description: 'Understanding the diffusion model behind the tool.',
              url: 'https://deepmind.google/technologies/imagen-3/'
          }
      ],
      communities: [
          {
              title: 'r/GoogleAI',
              source: 'Reddit',
              description: 'Sharing creations and prompts.',
              url: 'https://www.reddit.com/r/GoogleAI/'
          }
      ]
  },

  // --- PROJECT IDX ---
  'idx': {
      toolId: 'idx',
      tagline: 'Cloud IDE',
      overview: 'Project IDX is Google\'s next-gen browser-based IDE. Built on VS Code, it runs in the cloud and offers full-stack previews, built-in AI assistance, and instant emulators for Android and iOS.',
      useCases: ['Development', 'Flutter', 'Fullstack Web', 'Cloud Dev'],
      tips: [
          "Use the 'Android Emulator' preview to test mobile layouts directly in the browser.",
          "Ask the AI chat to 'Add a backend route' to generate boilerplate code for Go or Node.js.",
          "Customize your environment using the `.idx/dev.nix` file (NixOS based).",
          "Share your workspace link with teammates for instant onboarding."
      ],
      creators: [
          {
              name: 'Fireship',
              focus: 'Review',
              description: 'First impressions and feature breakdown.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@Fireship'
          },
          {
              name: 'Flutter Team',
              focus: 'Mobile',
              description: 'Building Flutter apps in the cloud.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@flutterdev'
          }
      ],
      videos: [
          {
              title: 'Google Project IDX First Look',
              channel: 'Fireship',
              description: 'Is this the VS Code killer? Overview of cloud features.',
              duration: '06:15'
          }
      ],
      articles: [
          {
              title: 'Getting Started with Project IDX',
              source: 'Google IDX',
              description: 'Official onboarding guide and template library.',
              url: 'https://idx.dev/'
          }
      ],
      communities: [
          {
              title: 'Project IDX Community',
              source: 'Discord',
              description: 'Direct feedback channel to the IDX product team.',
              url: '#'
          }
      ]
  },

  // --- VERTEX AI ---
  'vertex-ai': {
      toolId: 'vertex-ai',
      tagline: 'Enterprise AI Platform',
      overview: 'Vertex AI is Google Cloud\'s unified platform for building, deploying, and scaling ML models. It brings together AutoML, custom training, MLOps, and the Model Garden into a single environment.',
      useCases: ['Enterprise Deployment', 'MLOps', 'Model Garden', 'Fine-tuning'],
      tips: [
          "Use 'Model Garden' to deploy open-source models like Llama 3 or Mistral with one click.",
          "Enable 'Grounding with Google Search' to give your models access to real-time internet data.",
          "Use 'AutoML' for tabular data tasks if you don't have a data science team.",
          "Monitor model performance and drift using Vertex AI Monitoring."
      ],
      creators: [
          {
              name: 'Google Cloud Tech',
              focus: 'Official Training',
              description: 'Comprehensive guides on every feature of the platform.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@GoogleCloudTech'
          },
          {
              name: 'Tech with Tim',
              focus: 'Python & Cloud',
              description: 'Integrating Vertex AI into real-world Python applications.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@TechWithTim'
          }
      ],
      videos: [
          {
              title: 'Build a RAG Application with Vertex AI',
              channel: 'Google Cloud Tech',
              description: 'Step-by-step tutorial on retrieval augmented generation.',
              duration: '14:30'
          }
      ],
      articles: [
          {
              title: 'Vertex AI Documentation',
              source: 'Google Cloud',
              description: 'The definitive technical reference for all services.',
              url: 'https://cloud.google.com/vertex-ai/docs'
          }
      ],
      communities: [
          {
              title: 'Google Cloud Community',
              source: 'Forum',
              description: 'Q&A with Google engineers and cloud architects.',
              url: 'https://www.googlecloudcommunity.com/'
          }
      ]
  },

  // --- TENSORFLOW ---
  'tensorflow': {
      toolId: 'tensorflow',
      tagline: 'End-to-End ML Platform',
      overview: 'TensorFlow is the open-source machine learning platform that powers much of Google\'s AI. From research models to production deployment on edge devices with TensorFlow Lite, it is the comprehensive ecosystem for building ML applications.',
      useCases: ['ML Training', 'Deep Learning', 'Edge Deployment', 'Research'],
      tips: [
          "Use 'Keras' (tf.keras) as the high-level API; it's much easier than raw TF.",
          "Convert models to 'TFLite' to run them on Android or iOS devices.",
          "Use 'TensorBoard' to visualize your training loss and accuracy graphs in real-time.",
          "Leverage 'TF Hub' to find pre-trained models for transfer learning."
      ],
      creators: [
          {
              name: 'Sentdex',
              focus: 'Python ML',
              description: 'Legendary tutorials on Neural Networks and TensorFlow.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@sentdex'
          },
          {
              name: 'TensorFlow Official',
              focus: 'Updates',
              description: 'News on Keras integration and new APIs.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@TensorFlow'
          }
      ],
      videos: [
          {
              title: 'TensorFlow in 10 Minutes',
              channel: 'TensorFlow',
              description: 'Quick overview of the ecosystem components.',
              duration: '10:00'
          }
      ],
      articles: [
          {
              title: 'TensorFlow Documentation',
              source: 'Official',
              description: 'API references and tutorials for beginners to experts.',
              url: 'https://www.tensorflow.org/learn'
          }
      ],
      communities: [
          {
              title: 'r/tensorflow',
              source: 'Reddit',
              description: 'Technical support and project showcases.',
              url: 'https://www.reddit.com/r/tensorflow/'
          }
      ]
  },

  // --- FIREBASE ---
  'firebase': {
      toolId: 'firebase',
      tagline: 'App Development Platform',
      overview: 'Firebase is Google\'s mobile platform that helps you quickly develop high-quality apps and grow your business. Now with generative AI extensions, you can easily integrate LLM features like chatbots and vector search directly into your backend.',
      useCases: ['Mobile Dev', 'Web Apps', 'Serverless', 'Auth'],
      tips: [
          "Use 'Firebase Extensions' to add AI capabilities (like chatbot) instantly without writing code.",
          "Test security rules in the 'Firebase Emulator Suite' before deploying to production.",
          "Use 'Remote Config' to A/B test different AI prompts or model parameters.",
          "Enable 'App Check' to protect your API keys from abuse."
      ],
      creators: [
          {
              name: 'Fireship',
              focus: 'Fullstack',
              description: 'High-speed tutorials on Firebase features and integrations.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@Fireship'
          },
          {
              name: 'Firebase Official',
              focus: 'Updates',
              description: 'Deep dives into new GenAI extensions and SQL support.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@Firebase'
          }
      ],
      videos: [
          {
              title: 'Firebase in 100 Seconds',
              channel: 'Fireship',
              description: 'Rapid overview of the entire ecosystem.',
              duration: '01:40'
          },
          {
              title: 'Build an AI Chatbot with Firebase',
              channel: 'Firebase',
              description: 'Using the Vertex AI extension for Firestore.',
              duration: '12:15'
          }
      ],
      articles: [
          {
              title: 'Firebase Documentation',
              source: 'Google',
              description: 'Comprehensive guides for iOS, Android, and Web.',
              url: 'https://firebase.google.com/docs'
          }
      ],
      communities: [
          {
              title: 'r/firebase',
              source: 'Reddit',
              description: 'Help with security rules and database structuring.',
              url: 'https://www.reddit.com/r/firebase/'
          }
      ]
  },

  // --- COLAB ---
  'colab': {
      toolId: 'colab',
      tagline: 'Cloud Notebooks',
      overview: 'Google Colab is a hosted Jupyter Notebook service that requires no setup to use and provides free access to computing resources, including GPUs and TPUs. It is the de facto standard for sharing data science and machine learning projects.',
      useCases: ['Data Science', 'Education', 'ML Training', 'Prototyping'],
      tips: [
          "Change runtime type to 'T4 GPU' (free) for significantly faster model training.",
          "Mount Google Drive to persist your datasets and save model checkpoints.",
          "Use '%%time' magic command to measure cell execution duration.",
          "Use 'Colab Pro' if you need longer runtimes or access to A100 GPUs."
      ],
      creators: [
          {
              name: 'Data School',
              focus: 'Education',
              description: 'Maximizing the free tier for deep learning.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@dataschool'
          }
      ],
      videos: [
          {
              title: 'Google Colab: Zero to Hero',
              channel: 'TensorFlow',
              description: 'Complete walkthrough of features and keyboard shortcuts.',
              duration: '15:00'
          }
      ],
      articles: [
          {
              title: 'Welcome to Colaboratory',
              source: 'Google',
              description: 'The official getting started notebook.',
              url: 'https://colab.research.google.com/'
          }
      ],
      communities: [
          {
              title: 'r/GoogleColab',
              source: 'Reddit',
              description: 'Troubleshooting runtime disconnects and sharing tips.',
              url: 'https://www.reddit.com/r/GoogleColab/'
          }
      ]
  },

  // --- GEMMA ---
  'gemma': {
      toolId: 'gemma',
      tagline: 'Open Models',
      overview: 'Gemma is a family of lightweight, state-of-the-art open models built from the same research and technology used to create the Gemini models. Available in 2B and 7B sizes, they are designed for responsible AI development and can run on developer laptops or cloud instances.',
      useCases: ['Local Inference', 'Fine-tuning', 'Privacy-first Chat', 'Edge Devices'],
      tips: [
          "Use the '2B' model for mobile/edge devices; it is surprisingly capable.",
          "Fine-tune on Kaggle using free TPU quotas for domain adaptation.",
          "Use the 'Instruct' versions for chat applications; base models are for completion.",
          "Run with 'Ollama' locally to test without any cloud costs."
      ],
      creators: [
          {
              name: 'Hugging Face',
              focus: 'Implementation',
              description: 'Guides on running Gemma with Transformers library.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@HuggingFace'
          },
          {
              name: 'Sam Witteveen',
              focus: 'Fine-Tuning',
              description: 'Detailed tutorials on QLoRA fine-tuning of Gemma.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@SamWitteveenAI'
          }
      ],
      videos: [
          {
              title: 'Gemma: Google\'s Open Models Explained',
              channel: 'Google Cloud Tech',
              description: 'Overview of architecture, benchmarks, and safety.',
              duration: '09:15'
          }
      ],
      articles: [
          {
              title: 'Gemma Technical Report',
              source: 'Google DeepMind',
              description: 'Deep dive into the model architecture and training data.',
              url: 'https://storage.googleapis.com/deepmind-media/gemma/gemma-report.pdf'
          }
      ],
      communities: [
          {
              title: 'r/LocalLLaMA',
              source: 'Reddit',
              description: 'The hub for open-source model discussion and quantization.',
              url: 'https://www.reddit.com/r/LocalLLaMA/'
          }
      ]
  },

  // --- SHEETS ---
  'sheets': {
      toolId: 'sheets',
      tagline: 'Intelligent Spreadsheets',
      overview: 'Google Sheets is more than just rows and columns. With built-in intelligence like Smart Fill and Gemini integration, it allows you to analyze data, visualize insights, and collaborate in real-time.',
      useCases: ['Data Analysis', 'Finance', 'Project Tracking', 'Lightweight DB'],
      tips: [
          "Use 'Smart Fill' to automate repetitive data cleaning tasks.",
          "Connect to 'BigQuery' to analyze massive datasets without leaving Sheets.",
          "Use the '=GOOGLEFINANCE' function for real-time market data.",
          "Use 'Help me organize' to generate complex project trackers from a prompt."
      ],
      creators: [
          {
              name: 'Ben Collins',
              focus: 'Advanced Formulas',
              description: 'The definitive expert on Google Sheets scripting and formulas.',
              platform: 'Blog',
              url: 'https://www.benlcollins.com/'
          },
          {
              name: 'Google Workspace',
              focus: 'Productivity',
              description: 'Official tips on new AI features.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@GoogleWorkspace'
          }
      ],
      videos: [
          {
              title: 'Top 10 Google Sheets Tips',
              channel: 'Productivity',
              description: 'Mastering pivot tables and query functions.',
              duration: '12:00'
          }
      ],
      articles: [
          {
              title: 'Google Sheets Functions List',
              source: 'Support',
              description: 'Complete reference for every formula.',
              url: 'https://support.google.com/google-ads/answer/9004417'
          }
      ],
      communities: [
          {
              title: 'r/googlesheets',
              source: 'Reddit',
              description: 'Active community solving complex formula problems.',
              url: 'https://www.reddit.com/r/googlesheets/'
          }
      ]
  },

  // --- Default Fallback ---
  'default': {
    toolId: 'default',
    tagline: 'Master this tool',
    overview: 'Explore the capabilities of this powerful AI tool. Use the resources below to accelerate your learning journey.',
    useCases: ['Productivity', 'Creative Workflows', 'Automation'],
    creators: [],
    videos: [],
    articles: [],
    communities: []
  },

  // --- Remaining Minor Placeholders (Still maintained for type safety) ---
  'textfx': {
      toolId: 'textfx',
      tagline: 'AI for Writers',
      overview: 'Tools for rappers and writers. Break out of creative blocks.',
      useCases: ['Lyrics', 'Creative Writing', 'Wordplay'],
      tips: ["Use 'Explode' to find words that sound similar but mean different things.", "Use 'Chain' to build semantic bridges between unrelated concepts."],
      creators: [], videos: [], articles: [], communities: []
  },
  'videofx': {
      toolId: 'videofx',
      tagline: 'Veo Lab',
      overview: 'Generate video from text. Google\'s premier video model sandbox.',
      useCases: ['Video Gen', 'Storyboarding'],
      tips: ["Describe the camera movement (e.g., 'drone shot', 'pan left') explicitly.", "Keep prompts under 200 characters for better coherence."],
      creators: [], videos: [], articles: [], communities: []
  },
  'genie': {
      toolId: 'genie',
      tagline: 'World Models',
      overview: 'Playable worlds from images. Research preview.',
      useCases: ['Research', 'Game Dev'],
      creators: [], videos: [], articles: [], communities: []
  },
  'antigravity': {
      toolId: 'antigravity',
      tagline: 'Agent Platform',
      overview: 'Build autonomous agents. Google\'s agent-first ecosystem.',
      useCases: ['Automation', 'Enterprise'],
      creators: [], videos: [], articles: [], communities: []
  },
  'google-vids': {
      toolId: 'google-vids',
      tagline: 'Video for Work',
      overview: 'AI video creation for workspace. Turn docs into videos.',
      useCases: ['Internal comms', 'Training'],
      tips: ["Start with a Google Doc script to get the best structure.", "Use 'Help me create' to generate a storyboard from a single prompt."],
      creators: [], videos: [], articles: [], communities: []
  },
  'project-astra': {
      toolId: 'project-astra',
      tagline: 'Universal Assistant',
      overview: 'Multimodal realtime agent. The future of interaction.',
      useCases: ['Assistance', 'Multimodal'],
      creators: [], videos: [], articles: [], communities: []
  },
  'veo': {
      toolId: 'veo',
      tagline: 'Generative Video',
      overview: 'High def video model. Cinematic quality.',
      useCases: ['Video', 'Cinema'],
      creators: [], videos: [], articles: [], communities: []
  },
  'project-jules': {
      toolId: 'project-jules',
      tagline: 'Code Agent',
      overview: 'Experimental coding agent. Deep GitHub integration.',
      useCases: ['Coding', 'Maintenance'],
      creators: [], videos: [], articles: [], communities: []
  },
  'mixboard': {
      toolId: 'mixboard',
      tagline: 'Music Whiteboard',
      overview: 'AI music mixing. Visual tracks.',
      useCases: ['DJing', 'Remixing'],
      creators: [], videos: [], articles: [], communities: []
  },
  'music-sandbox': {
      toolId: 'music-sandbox',
      tagline: 'Music AI Tools',
      overview: 'Suite of music tools. Lyria model access.',
      useCases: ['Music', 'Audio'],
      creators: [], videos: [], articles: [], communities: []
  },
  'gemini-gems': {
      toolId: 'gemini-gems',
      tagline: 'Custom Gems',
      overview: 'Personalized AI experts. Custom instructions.',
      useCases: ['Personalization', 'Coaching'],
      tips: ["Give your Gem a specific persona (e.g., 'Grumpy Editor').", "Upload knowledge files to ground the Gem in your specific data."],
      creators: [], videos: [], articles: [], communities: []
  },
  'google-earth': {
      toolId: 'google-earth',
      tagline: 'The Globe',
      overview: 'Detailed 3D globe. Visualization tools.',
      useCases: ['Visualization', 'Storytelling'],
      creators: [], videos: [], articles: [], communities: []
  },
  'codewiki': {
      toolId: 'codewiki',
      tagline: 'Code Knowledge',
      overview: 'Engineering standards. Internal docs.',
      useCases: ['Docs', 'Standards'],
      creators: [], videos: [], articles: [], communities: []
  },
  'stitch': {
      toolId: 'stitch',
      tagline: 'UI Designer',
      overview: 'AI UI generation. Figma integration.',
      useCases: ['Prototyping', 'Design'],
      creators: [], videos: [], articles: [], communities: []
  },
  'keep': {
      toolId: 'keep',
      tagline: 'Notes & Lists',
      overview: 'AI powered notes. Quick capture.',
      useCases: ['Organization', 'Brainstorming'],
      tips: ["Use 'Help me create' to generate a grocery list from a recipe.", "Pin important notes to the top for easy access."],
      creators: [], videos: [], articles: [], communities: []
  },
  'opal': {
      toolId: 'opal',
      tagline: 'No Code AI',
      overview: 'Build apps without code. Visual builder.',
      useCases: ['App Building', 'Automation'],
      creators: [], videos: [], articles: [], communities: []
  },
  'mesop': {
      toolId: 'mesop',
      tagline: 'Python UI',
      overview: 'UI framework for Python. Internal tools.',
      useCases: ['Internal Tools', 'Demos'],
      creators: [], videos: [], articles: [], communities: []
  },
  'illuminate': {
      toolId: 'illuminate',
      tagline: 'Paper to Audio',
      overview: 'Listen to papers. AI hosts.',
      useCases: ['Learning', 'Research'],
      creators: [], videos: [], articles: [], communities: []
  },
  'kaggle': {
      toolId: 'kaggle',
      tagline: 'Data Community',
      overview: 'Datasets and competitions. Models.',
      useCases: ['Data Science', 'Models'],
      creators: [], videos: [], articles: [], communities: []
  }
};

export const getLearningData = (id: string): LearningHubData => {
  // Return specific data if found, otherwise basic fallback but preserve ID
  return learningResourcesData[id] || { ...learningResourcesData['default'], toolId: id };
};