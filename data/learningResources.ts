import { LearningHubData } from '../types';

export const learningResourcesData: Record<string, LearningHubData> = {
  // --- GEMINI ADVANCED ---
  'gemini-advanced': {
    toolId: 'gemini-advanced',
    tagline: 'Google\'s Most Capable AI',
    overview: 'Gemini Advanced gives you access to Google\'s most capable AI models, like Ultra 1.0 and 1.5 Pro. It excels at complex tasks such as coding, logical reasoning, following nuanced instructions, and creative collaboration.',
    useCases: [
      'Complex Problem Solving & Reasoning',
      'Advanced Coding & Debugging',
      'Creative Writing & Brainstorming',
      'Data Analysis & Visualization'
    ],
    tips: [
      "Upload documents (PDFs, CSVs) directly to Gemini for instant analysis.",
      "Use 'Pin' to keep important chats easily accessible in the sidebar.",
      "Gemini can run Python code to solve math problems or generate charts—just ask.",
      "Ask Gemini to 'Modify response' to make it shorter, longer, or more professional."
    ],
    creators: [
      {
        name: 'Google',
        focus: 'Official',
        description: 'Updates on model capabilities.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/google'
      }
    ],
    videos: [
      {
        title: 'Gemini Advanced: What can it do?',
        channel: 'Google',
        description: 'Overview of Ultra 1.0 capabilities.',
        duration: '02:00'
      }
    ],
    articles: [
      {
        title: 'Gemini Apps Help',
        source: 'Google Support',
        description: 'Official guide to features.',
        url: 'https://support.google.com/gemini'
      }
    ],
    communities: []
  },

  // --- DOCS ---
  'docs': {
    toolId: 'docs',
    tagline: 'Collaborative Writing Evolved',
    overview: 'Google Docs is the world\'s leading collaborative writing tool. With "Help me write," it uses generative AI to help you draft, refine, and summarize text instantly, making writer\'s block a thing of the past.',
    useCases: [
      'Drafting Blog Posts & Articles',
      'Summarizing Meeting Notes',
      'Changing Tone (Formal/Casual)',
      'Proofreading & Editing'
    ],
    tips: [
      "Type '@' to insert smart chips for people, files, dates, and dropdowns.",
      "Highlight text and look for the 'Help me write' pencil icon to rewrite or shorten it.",
      "Use 'Pageless' mode for documents that are meant to be viewed online, not printed.",
      "Assign action items directly in comments using '@email'."
    ],
    creators: [],
    videos: [
      {
        title: 'Help me write in Google Docs',
        channel: 'Google Workspace',
        description: 'Demonstration of generative writing features.',
        duration: '01:30'
      }
    ],
    articles: [],
    communities: []
  },

  // --- SLIDES ---
  'slides': {
    toolId: 'slides',
    tagline: 'Presentations in Seconds',
    overview: 'Google Slides helps you create beautiful presentations together. With "Help me visualize," you can generate original images for your slides from text prompts, ensuring you always have the perfect visual.',
    useCases: [
      'Creating Pitch Decks',
      'Generating Custom Stock Imagery',
      'Visualizing Concepts',
      'Collaborative Storyboarding'
    ],
    tips: [
      "Use 'Help me visualize' to create unique backgrounds or subject images for your slides.",
      "Link charts from Google Sheets to keep data auto-updated in your presentation.",
      "Use 'Presenter View' to see speaker notes and a timer while presenting.",
      "Type 'slides.new' in your browser address bar to create a new deck instantly."
    ],
    creators: [],
    videos: [
      {
        title: 'Create images in Google Slides',
        channel: 'Google Workspace',
        description: 'Generating visuals with AI.',
        duration: '01:15'
      }
    ],
    articles: [],
    communities: []
  },

  // --- GMAIL ---
  'mail': {
    toolId: 'mail',
    tagline: 'Smartest Email',
    overview: 'Gmail uses AI to help you write faster and stay organized. Features like "Help me write," Smart Compose, and Smart Reply help you draft emails, summarize long threads, and prioritize what matters.',
    useCases: [
      'Drafting Professional Replies',
      'Summarizing Long Email Threads',
      'Filtering Spam & Promotions',
      'Scheduling Emails'
    ],
    tips: [
      "Use 'Help me write' to draft a full email from a short prompt (e.g., 'Ask for a refund').",
      "Use 'Snooze' to clear an email from your inbox until you are ready to deal with it.",
      "Enable 'Offline mail' to search and read email without an internet connection.",
      "Use search chips (e.g., 'has:attachment') to find specific emails instantly."
    ],
    creators: [],
    videos: [
      {
        title: 'Help me write in Gmail',
        channel: 'Google Workspace',
        description: 'Drafting emails with AI assistance.',
        duration: '01:45'
      }
    ],
    articles: [],
    communities: []
  },

  // --- MEET ---
  'meet': {
    toolId: 'meet',
    tagline: 'Premium Video Meetings',
    overview: 'Google Meet provides secure, high-quality video meetings. It uses AI for noise cancellation, lighting adjustment, and even generating unique backgrounds to help you look and sound your best.',
    useCases: [
      'Remote Team Meetings',
      'Client Presentations',
      'Webinars & Training',
      'Screen Recording'
    ],
    tips: [
      "Use 'Generate a background' to create a custom AI environment for your call.",
      "Turn on 'Noise Cancellation' to filter out typing, dogs barking, and other distractions.",
      "Use 'Live Captions' (and translation) to follow along in real-time.",
      "Pin the main speaker or presentation to keep them in focus."
    ],
    creators: [],
    videos: [
      {
        title: 'Google Meet: AI Backgrounds',
        channel: 'Google Workspace',
        description: 'Creating custom backgrounds.',
        duration: '01:00'
      }
    ],
    articles: [],
    communities: []
  },

  // --- DRIVE ---
  'drive': {
    toolId: 'drive',
    tagline: 'AI-Powered Storage',
    overview: 'Google Drive is more than just storage; it is an intelligent file organizer. It uses AI to predict which files you need next and provides powerful search capabilities to find content inside images and PDFs.',
    useCases: [
      'Cloud File Storage',
      'Collaborative Sharing',
      'Document Scanning (Mobile)',
      'Advanced Search'
    ],
    tips: [
      "Use search chips (Type, People, Modified) to filter results quickly.",
      "Press 'P' to preview a file without opening it.",
      "Install 'Drive for Desktop' to access files directly from your OS file manager.",
      "Use OCR search to find text inside scanned PDFs and images."
    ],
    creators: [],
    videos: [],
    articles: [],
    communities: []
  },

  // --- FORMS ---
  'forms': {
    toolId: 'forms',
    tagline: 'Smart Surveys',
    overview: 'Google Forms is the easiest way to create surveys and quizzes. New AI features help you generate questions and answers from simple text prompts, speeding up form creation.',
    useCases: [
      'Customer Feedback Surveys',
      'Event Registration',
      'Quizzes & Assessments',
      'Data Collection'
    ],
    tips: [
      "Use 'Make it a quiz' settings to assign point values and auto-grading.",
      "Use 'Go to section based on answer' for conditional logic branching.",
      "Link responses to a Google Sheet for real-time data analysis.",
      "Customize the theme to match your brand colors and logo."
    ],
    creators: [],
    videos: [],
    articles: [],
    communities: []
  },

  // --- SITES ---
  'sites': {
    toolId: 'sites',
    tagline: 'Websites for Teams',
    overview: 'Google Sites allows you to create beautiful internal project hubs, team sites, and public-facing websites without writing a single line of code. It integrates seamlessly with all other Workspace apps.',
    useCases: [
      'Internal Team Wikis',
      'Project Portfolios',
      'Event Landing Pages',
      'Classroom Hubs'
    ],
    tips: [
      "Embed Drive folders directly to create a self-updating file repository.",
      "Double-click anywhere on the canvas to open the quick insert wheel.",
      "Use 'Collapsible groups' to organize dense content.",
      "Publish to a specific audience (e.g., internal domain only) for privacy."
    ],
    creators: [],
    videos: [],
    articles: [],
    communities: []
  },

  // --- CALENDAR ---
  'calendar': {
    toolId: 'calendar',
    tagline: 'Intelligent Scheduling',
    overview: 'Google Calendar helps you spend less time managing your schedule and more time enjoying it. Smart scheduling features suggest the best meeting times and help you block time for focus work.',
    useCases: [
      'Meeting Scheduling',
      'Time Blocking for Focus',
      'Team Availability Tracking',
      'Appointment Slots'
    ],
    tips: [
      "Use 'Find a Time' to overlay team calendars and find a slot that works for everyone.",
      "Enable 'Speedy meetings' to end calls 5 mins early for bio breaks.",
      "Use 'Appointment Schedules' to let external people book time with you.",
      "Color code events to analyze where your time goes (Time Insights)."
    ],
    creators: [],
    videos: [],
    articles: [],
    communities: []
  },

  // --- IDEOGRAM ---
  'ideogram': {
    toolId: 'ideogram',
    tagline: 'Typography That Actually Works',
    overview: 'Ideogram is an image generation model that solved the biggest problem in AI art: text rendering. It allows you to create logos, t-shirt designs, posters, and stickers with perfectly legible typography, integrated seamlessly into the artwork.',
    useCases: [
      'Logo and Brand Identity Design',
      'Print-on-Demand (T-Shirts, Stickers)',
      'Event Posters and Flyers',
      'Social Media Graphics with Text'
    ],
    tips: [
      "Put the text you want rendered inside quote marks, e.g., 'A neon sign that says \"OPEN LATE\"'.",
      "Use style tags like 'Typography', '3D Render', and 'Poster' for the best results.",
      "Ideogram 2.0 handles long phrases better than short words.",
      "Use the 'Remix' feature to keep the composition but change the text content."
    ],
    creators: [
      {
        name: 'Ideogram Team',
        focus: 'Official Demos',
        description: 'Showcasing the latest model capabilities.',
        platform: 'Social',
        url: 'https://twitter.com/ideogram_ai'
      }
    ],
    videos: [
      {
        title: 'Ideogram 2.0 Review: The Midjourney Killer?',
        channel: 'MattVidPro',
        description: 'Testing the limits of text rendering and coherence.',
        duration: '14:20'
      }
    ],
    articles: [],
    communities: [
      {
        title: 'Ideogram Discord',
        source: 'Discord',
        description: 'Share prompts and get feedback on typography.',
        url: 'https://discord.gg/ideogram'
      }
    ]
  },

  // --- RELUME ---
  'relume': {
    toolId: 'relume',
    tagline: 'Websites Built in Minutes',
    overview: 'Relume is an AI-powered site builder that streamlines the web design process. It allows you to generate sitemaps and wireframes instantly from a text prompt, then export them directly to Figma or Webflow using the Client-First class system.',
    useCases: [
      'Rapid Wireframing from Briefs',
      'Generating Sitemaps for Clients',
      'Converting Wireframes to Webflow',
      'Building Marketing Landing Pages'
    ],
    tips: [
      "Write a detailed company description for the best sitemap generation.",
      "Use the 'Shuffle' button on specific components to try different layouts without changing content.",
      "Install the 'Relume Library' Figma plugin to sync your wireframes instantly.",
      "Use 'Client-First' classes in Webflow to match the Relume export structure."
    ],
    creators: [
      {
        name: 'Relume',
        focus: 'Official',
        description: 'Tutorials on the Relume Library and AI features.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@Relume'
      }
    ],
    videos: [
      {
        title: 'How to Build a Website in 5 Minutes with Relume',
        channel: 'Relume',
        description: 'Full workflow: AI Sitemap -> Wireframe -> Webflow.',
        duration: '08:45'
      }
    ],
    articles: [
      {
        title: 'Relume Library Docs',
        source: 'Official',
        description: 'Guide to components and the Client-First system.',
        url: 'https://library.relume.io/documentation'
      }
    ],
    communities: [
      {
        title: 'Relume Community',
        source: 'Slack',
        description: 'Connect with other Webflow and Relume developers.',
        url: 'https://relume.io/community'
      }
    ]
  },

  // --- RIVE ---
  'rive': {
    toolId: 'rive',
    tagline: 'Interactive Animation for Every Platform',
    overview: 'Rive is a real-time interactive design tool that allows you to create animations that react to user input. Unlike video or Lottie, Rive animations are driven by state machines, meaning they can change behavior based on game logic, mouse position, or app state.',
    useCases: [
      'Interactive Game UI/HUDs',
      'Animated Icons and Buttons',
      'Character Rigging for Games',
      'State-Driven Web Animations'
    ],
    tips: [
      "Use 'State Machines' to define logic (e.g., 'Hover', 'Pressed', 'Idle') inside the editor.",
      "Use 'Bones' and 'Mesh Deformation' for fluid character movement.",
      "Export as a '.riv' file for the smallest file size and highest performance.",
      "Connect Rive inputs to React state variables to control the animation from code."
    ],
    creators: [
      {
        name: 'Rive',
        focus: 'Official',
        description: 'Deep dives into rigging and state machines.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@Rive'
      },
      {
        name: 'JcToon',
        focus: 'Character Animation',
        description: 'Mastering the art of rigging 2D characters.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@JcToon'
      }
    ],
    videos: [
      {
        title: 'Rive Crash Course',
        channel: 'DesignCourse',
        description: 'Building an interactive login form character.',
        duration: '35:00'
      }
    ],
    articles: [
      {
        title: 'Rive Handbook',
        source: 'Official',
        description: 'Documentation for the editor and runtimes.',
        url: 'https://help.rive.app/'
      }
    ],
    communities: [
      {
        title: 'Rive Community',
        source: 'Discord',
        description: 'Share your interactive creations.',
        url: 'https://discord.gg/rive'
      }
    ]
  },

  // --- MAGNIFIC ---
  'magnific': {
    toolId: 'magnific',
    tagline: 'Upscale & Reimage',
    overview: 'Magnific AI is not just an upscaler; it is a "re-imaginer." It uses hallucination technology to add incredible amounts of detail to low-resolution images. It can turn a blurry sketch into a 4K masterpiece by dreaming up new textures and details.',
    useCases: [
      'Upscaling Low-Res Midjourney Generations',
      'Restoring Old Photographs',
      'Adding Skin Texture to Portraits',
      'Enhancing Game Textures'
    ],
    tips: [
      "Use 'Creativity' slider with caution. Low (0-2) keeps fidelity; High (5+) changes the image completely.",
      "Use 'HDR' slider to fix lighting imbalances in the original image.",
      "Describe the details you WANT to see in the prompt box (e.g., 'intricate pores, fabric texture').",
      "Magnific works best on images that already have good composition but lack resolution."
    ],
    creators: [
      {
        name: 'Magnific AI',
        focus: 'Official',
        description: 'Before and after showcases.',
        platform: 'Social',
        url: 'https://twitter.com/magnific_ai'
      }
    ],
    videos: [
      {
        title: 'Magnific AI: The Magic Upscaler',
        channel: 'MattVidPro',
        description: 'Testing the limits of hallucination upscaling.',
        duration: '10:30'
      }
    ],
    articles: [],
    communities: []
  },

  // --- PINECONE ---
  'pinecone': {
    toolId: 'pinecone',
    tagline: 'Long-Term Memory for AI',
    overview: 'Pinecone is a managed vector database designed for high-performance AI applications. It allows you to store and search through massive amounts of vector embeddings, enabling RAG (Retrieval Augmented Generation) for chatbots and semantic search.',
    useCases: [
      'Building RAG Chatbots',
      'Semantic Search Engines',
      'Recommendation Systems',
      'Image Similarity Search'
    ],
    tips: [
      "Use 'Serverless' indexes to scale to zero and save costs during development.",
      "Namespace your vectors (e.g., by user ID) to ensure data isolation in multi-tenant apps.",
      "Combine vector search with metadata filtering for more accurate retrieval.",
      "Use 'hybrid search' (sparse + dense vectors) for better keyword matching."
    ],
    creators: [
      {
        name: 'Pinecone',
        focus: 'Official',
        description: 'Tutorials on RAG and vector search.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@pinecone-io'
      }
    ],
    videos: [
      {
        title: 'RAG from Scratch with Pinecone',
        channel: 'FreeCodeCamp',
        description: 'Building a chatbot that knows your data.',
        duration: '45:00'
      }
    ],
    articles: [
      {
        title: 'Pinecone Learning Center',
        source: 'Official',
        description: 'Everything you need to know about vector databases.',
        url: 'https://www.pinecone.io/learn/'
      }
    ],
    communities: [
      {
        title: 'Pinecone Community',
        source: 'Forum',
        description: 'Support for vector search implementation.',
        url: 'https://community.pinecone.io/'
      }
    ]
  },

  // --- NEON ---
  'neon': {
    toolId: 'neon',
    tagline: 'Serverless Postgres',
    overview: 'Neon is a modern, serverless implementation of PostgreSQL built for the cloud. It separates storage from compute, allowing for features like autoscaling to zero, instant branching (like Git for your database), and bottomless storage.',
    useCases: [
      'AI Applications needing scalable storage',
      'Dev/Test environments via Branching',
      'SaaS Platforms with variable load',
      'Edge computing backends'
    ],
    tips: [
      "Use 'Branching' to create instant copies of your production DB for testing without duplicating data.",
      "Configure 'Autosuspend' to save money when your app is idle.",
      "Use the 'pooling' connection string for serverless functions (Next.js/Vercel) to manage connections.",
      "Neon is 100% Postgres compatible, so all your SQL queries just work."
    ],
    creators: [
      {
        name: 'Neon',
        focus: 'Official',
        description: 'Deep dives into Postgres architecture.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@neondatabase'
      }
    ],
    videos: [
      {
        title: 'Neon: Serverless Postgres Explained',
        channel: 'Fireship',
        description: 'Why separating storage and compute changes everything.',
        duration: '03:45'
      }
    ],
    articles: [
      {
        title: 'Neon Documentation',
        source: 'Official',
        description: 'Guides on branching and scaling.',
        url: 'https://neon.tech/docs/introduction'
      }
    ],
    communities: [
      {
        title: 'Neon Discord',
        source: 'Discord',
        description: 'Chat with the engineers building the database.',
        url: 'https://discord.gg/neondb'
      }
    ]
  },

  // --- ZED ---
  'zed': {
    toolId: 'zed',
    tagline: 'High-Performance Multiplayer Code Editor',
    overview: 'Zed is a next-generation code editor from the creators of Atom. Built in Rust and GPU-accelerated, it is incredibly fast. It features built-in collaboration (like Google Docs for code) and deep AI integration via Zed AI.',
    useCases: [
      'Pair Programming',
      'High-Performance Rust/Go/C++ Dev',
      'AI-Assisted Coding',
      'Large Codebase Navigation'
    ],
    tips: [
      "Use 'Cmd+Enter' in the assistant panel to run AI commands on your code.",
      "Invite a teammate via a link to edit the same file simultaneously with zero latency.",
      "Configure your keymap to match VS Code if you are switching over.",
      "Use the built-in terminal which is also GPU accelerated."
    ],
    creators: [
      {
        name: 'Zed Industries',
        focus: 'Official',
        description: 'Updates on the editor development.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@zed-industries'
      }
    ],
    videos: [
      {
        title: 'Zed Editor: Is it worth the hype?',
        channel: 'ThePrimeagen',
        description: 'A brutally honest review of performance.',
        duration: '18:20'
      }
    ],
    articles: [
      {
        title: 'Zed Docs',
        source: 'Official',
        description: 'Configuration and keybindings.',
        url: 'https://zed.dev/docs'
      }
    ],
    communities: []
  },

  // --- LANGSMITH ---
  'langsmith': {
    toolId: 'langsmith',
    tagline: 'Debug & Monitor LLM Apps',
    overview: 'LangSmith is a platform by LangChain for debugging, testing, evaluating, and monitoring LLM applications. It helps you move from prototype to production by providing visibility into exactly what your chains and agents are doing.',
    useCases: [
      'Tracing Agent Execution Paths',
      'Evaluating RAG Retrieval Quality',
      'Monitoring Token Usage and Cost',
      'A/B Testing Prompts'
    ],
    tips: [
      "Log all runs to LangSmith to build a dataset of 'good' and 'bad' examples.",
      "Use 'Annotation Queues' to manually review and correct AI outputs.",
      "Set up 'Evaluators' to automatically check if the AI response matches the ground truth.",
      "Filter traces by latency to find bottlenecks in your chain."
    ],
    creators: [
      {
        name: 'LangChain',
        focus: 'Official',
        description: 'Tutorials on using LangSmith effectively.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@LangChain'
      }
    ],
    videos: [
      {
        title: 'LangSmith Walkthrough',
        channel: 'LangChain',
        description: 'How to trace and debug your LLM apps.',
        duration: '12:30'
      }
    ],
    articles: [
      {
        title: 'LangSmith Docs',
        source: 'Official',
        description: 'Getting started and API reference.',
        url: 'https://docs.smith.langchain.com/'
      }
    ],
    communities: [
      {
        title: 'LangChain Discord',
        source: 'Discord',
        description: 'Dedicated LangSmith channels.',
        url: 'https://discord.gg/langchain'
      }
    ]
  },

  // --- CHECKS ---
  'checks': {
    toolId: 'checks',
    tagline: 'AI Compliance Platform',
    overview: 'Checks is an AI-powered platform by Google that simplifies privacy and compliance for mobile app developers. It analyzes your app\'s code and data practices to identify potential compliance issues with regulations like GDPR and CCPA.',
    useCases: [
      'Automated Privacy Policy Generation',
      'GDPR/CCPA Compliance Audits',
      'Data Safety Form Assistance (Play Store)',
      'Identifying SDK Data Leaks'
    ],
    tips: [
      "Connect your Google Play Console account to get automated insights.",
      "Use Checks to scan your app binary before every major release.",
      "Leverage the 'Data Safety' report to auto-fill your Play Store declaration.",
      "Monitor third-party SDKs to ensure they aren't collecting data you didn't authorize."
    ],
    creators: [
      {
        name: 'Google for Developers',
        focus: 'Official',
        description: 'Announcements about Checks.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@GoogleDevelopers'
      }
    ],
    videos: [
      {
        title: 'Simplify App Compliance with Checks',
        channel: 'Google',
        description: 'Introduction to the platform.',
        duration: '02:15'
      }
    ],
    articles: [
      {
        title: 'Checks Documentation',
        source: 'Google',
        description: 'Getting started guide.',
        url: 'https://checks.google.com/docs'
      }
    ],
    communities: []
  },

  // --- KREA (Previously populated, ensuring it stays) ---
  'krea': {
    toolId: 'krea',
    tagline: 'Real-Time Creative Intelligence',
    overview: 'Krea.ai is a generative art tool that specializes in real-time image generation and high-end upscaling. Its "Realtime" canvas allows you to paint with shapes and see the AI render photorealistic results instantly, while its Upscaler adds hallucinatory detail to low-res images.',
    useCases: [
      'Instant visualization of rough sketches',
      'Upscaling low-res MJ/Flux generations to 4K',
      'Creating logo illusions with Patterns tool',
      'Real-time webcam to AI generation'
    ],
    tips: [
      "Use the 'Enhance' slider in the Upscaler carefully; too high (0.6+) changes the face identity.",
      "In Realtime, use simple colored shapes; the AI cares more about composition than detail.",
      "Connect your iPad as a webcam to draw on your tablet and see Krea render it on desktop.",
      "Use 'Pattern' mode to hide text or logos inside landscapes (subliminal advertising)."
    ],
    creators: [
      {
        name: 'Krea Team',
        focus: 'Demos',
        description: 'Official showcases of real-time capabilities.',
        platform: 'Social',
        url: 'https://twitter.com/krea_ai'
      }
    ],
    videos: [
      {
        title: 'Krea AI Realtime Generation Guide',
        channel: 'MattVidPro',
        description: 'How to use the instant canvas effectively.',
        duration: '12:00'
      }
    ],
    articles: [
      {
        title: 'Krea Upscaler Guide',
        source: 'Krea Blog',
        description: 'Understanding the AI hallucination strength settings.',
        url: 'https://www.krea.ai/blog'
      }
    ],
    communities: [
      {
        title: 'Krea Discord',
        source: 'Discord',
        description: 'Share real-time generations and get support.',
        url: 'https://discord.gg/krea'
      }
    ]
  },

  // --- HAILUO (MINIMAX) ---
  'hailuo': {
    toolId: 'hailuo',
    tagline: 'Video 01 by MiniMax',
    overview: 'Hailuo AI (Video 01) by MiniMax is a leading video generation model known for its exceptional motion coherence and adherence to physics. It excels at generating realistic human movement and complex interactions that other models often struggle with.',
    useCases: [
      'Realistic human action shots',
      'Complex physics simulations (water, cloth)',
      'Consistent character movement',
      'High-fidelity 6-second clips'
    ],
    tips: [
      "Hailuo responds very well to detailed descriptions of lighting (e.g., 'volumetric lighting, cinematic, 4k').",
      "If the motion is too fast, add 'slow motion' or 'smooth movement' to the prompt.",
      "Use the 'Image-to-Video' feature for better character consistency than Text-to-Video.",
      "The model prefers natural language prompts over tag-salad."
    ],
    creators: [
      {
        name: 'MiniMax',
        focus: 'Official',
        description: 'Creators of the Video-01 model.',
        platform: 'Website',
        url: 'https://hailuoai.video/'
      }
    ],
    videos: [
      {
        title: 'Hailuo AI vs Gen-3 vs Luma',
        channel: 'The AI Advantage',
        description: 'Comparison of motion quality and realism.',
        duration: '15:30'
      }
    ],
    articles: [],
    communities: [
      {
        title: 'MiniMax Community',
        source: 'Discord',
        description: 'Discussions on prompting Video-01.',
        url: 'https://discord.gg/minimax'
      }
    ]
  },

  // --- RECRAFT ---
  'recraft': {
    toolId: 'recraft',
    tagline: 'Infinite Vector Canvas',
    overview: 'Recraft is the first generative AI design tool that allows you to create and edit vector art, icons, and 3D illustrations in a unified style. It generates SVG files that are infinitely scalable, making it perfect for brand design and web assets.',
    useCases: [
      'Generating consistent icon sets',
      'Creating scalable logo concepts',
      'Vector illustration for web design',
      'Style transfer across different assets'
    ],
    tips: [
      "Upload your brand palette to force Recraft to use ONLY your colors.",
      "Use the 'Lasso' tool to fix specific parts of a vector generation.",
      "Export as 'Lottie' JSON if you need simple animations.",
      "Save your favorite generation as a 'Style' to reuse it later."
    ],
    creators: [
      {
        name: 'Recraft',
        focus: 'Tutorials',
        description: 'Official guides on vector generation.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@recraft_ai'
      }
    ],
    videos: [
      {
        title: 'Recraft V3: The Flux of Vector Art?',
        channel: 'Pixel & Bracket',
        description: 'Review of the new text rendering capabilities.',
        duration: '10:15'
      }
    ],
    articles: [
      {
        title: 'Recraft Help Center',
        source: 'Official',
        description: 'Guide to style creation and export formats.',
        url: 'https://help.recraft.ai/'
      }
    ],
    communities: [
      {
        title: 'Recraft Community',
        source: 'Discord',
        description: 'Share vector prompts and styles.',
        url: 'https://discord.gg/recraft'
      }
    ]
  },

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

  // --- GALILEO ---
  'galileo': {
      toolId: 'galileo',
      tagline: 'Text-to-UI Interface Design',
      overview: 'Galileo AI uses large language models to generate high-fidelity UI designs from simple text descriptions. It empowers product teams to explore design directions rapidly by generating multi-screen flows that can be exported directly to Figma.',
      useCases: ['Prototyping', 'Design Exploration', 'Mobile UI', 'Wireframing'],
      tips: [
          "Describe the user flow step-by-step for better multi-screen generation.",
          "Specify 'Dark Mode' or 'Light Mode' explicitly in your prompt.",
          "Use the 'Mobile' vs 'Desktop' toggle before generating to set the correct viewport."
      ],
      creators: [
          {
              name: 'Galileo Team',
              focus: 'Updates',
              description: 'Official announcements and feature demos.',
              platform: 'Social',
              url: 'https://twitter.com/galileo_ai'
          }
      ],
      videos: [
          {
              title: 'Galileo AI Review: The Future of UI Design?',
              channel: 'DesignCourse',
              description: 'Testing the capabilities of text-to-UI generation.',
              duration: '12:45'
          }
      ],
      articles: [], 
      communities: []
  },

  // --- MUSHO ---
  'musho': {
      toolId: 'musho',
      tagline: 'AI Assistant for Figma',
      overview: 'Musho is a Figma plugin that turns prompts into professional, layered designs. It acts as a junior designer, handling layout, asset placement, and copy generation automatically within your Figma canvas.',
      useCases: ['Social Media Assets', 'Landing Pages', 'Figma Automation', 'Copywriting'],
      tips: [
          "Select a frame before prompting to constrain the generation to that specific area.",
          "Use 'Remix' to iterate on specific sections without regenerating the whole design.",
          "Ask Musho to 'Write copy for this section' to replace lorem ipsum with relevant text."
      ],
      creators: [
          {
              name: 'Musho',
              focus: 'Official',
              description: 'Tips on using the Figma plugin.',
              platform: 'Social',
              url: 'https://twitter.com/musho_ai'
          }
      ],
      videos: [],
      articles: [], 
      communities: []
  },

  // --- SCENARIO ---
  'scenario': {
      toolId: 'scenario',
      tagline: 'GenAI for Game Assets',
      overview: 'Scenario allows game developers to train custom AI models (LoRAs) on their own art style, ensuring generated assets match the game\'s aesthetic perfectly. It is the engine for consistent, style-aligned game assets.',
      useCases: ['Game Assets', 'Concept Art', 'Consistent Style', 'Isometric Props'],
      tips: [
          "Upload 15-20 high-quality images with a consistent style for the best training results.",
          "Use the 'Pixel Art' mode for retro game assets; it handles grid alignment well.",
          "Remove background automatically within the tool before exporting to Unity/Unreal."
      ],
      creators: [],
      videos: [
          {
              title: 'Creating Game Assets with Scenario AI',
              channel: 'GameDevGuide',
              description: 'Training a model on a specific art style.',
              duration: '15:20'
          }
      ],
      articles: [
          {
              title: 'Scenario Documentation',
              source: 'Official',
              description: 'Guide to training, prompting, and API usage.',
              url: 'https://docs.scenario.com/'
          }
      ],
      communities: [
          {
              title: 'Scenario Discord',
              source: 'Discord',
              description: 'Community for game developers using GenAI.',
              url: 'https://discord.gg/scenario'
          }
      ]
  },

  // --- WEBFLOW ---
  'webflow': {
      toolId: 'webflow',
      tagline: 'Visual Web Development',
      overview: 'Webflow empowers designers to build professional, custom websites in a visual canvas with no code. Its new AI capabilities allow for instant localization, automated styling classes, and conversational page building.',
      useCases: ['Web Design', 'CMS', 'Hosting', 'Localization'],
      tips: [
          "Use 'Cmd+E' (Quick Find) to add elements faster than dragging from the panel.",
          "Structure your classes using the 'Client-First' system for cleaner, scalable code.",
          "Use the 'Localization' feature to translate your site into multiple languages instantly."
      ],
      creators: [
          {
              name: 'Webflow',
              focus: 'University',
              description: 'The gold standard for web design education.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/webflow'
          },
          {
              name: 'Timothy Ricks',
              focus: 'Advanced',
              description: 'Mastering interactions and Client-First system.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@TimothyRicks'
          }
      ],
      videos: [
          {
              title: 'Webflow 101 Crash Course',
              channel: 'Webflow',
              description: 'The basics of the box model and layout.',
              duration: '2 hours'
          }
      ],
      articles: [
          {
              title: 'Webflow University',
              source: 'Official',
              description: 'Comprehensive courses on every aspect of the platform.',
              url: 'https://university.webflow.com/'
          }
      ],
      communities: [
          {
              title: 'Webflow Forum',
              source: 'Website',
              description: 'Help with custom code and layout bugs.',
              url: 'https://forum.webflow.com/'
          }
      ]
  },

  // --- PROCREATE ---
  'procreate': {
      toolId: 'procreate',
      tagline: 'Sketch, Paint, Create',
      overview: 'The complete art studio on iPad. Procreate is the industry standard for digital illustration, offering an intuitive interface, a powerful brush engine, and seamless performance on Apple Silicon.',
      useCases: ['Illustration', 'Sketching', 'Animation', 'Lettering'],
      tips: [
          "Two-finger tap to Undo; Three-finger tap to Redo.",
          "Drag a color from the top right onto an area to fill it (ColorDrop).",
          "Use 'Clipping Masks' to paint non-destructively on top of a shape.",
          "Hold the pencil at the end of a stroke to snap it to a perfect shape (QuickShape)."
      ],
      creators: [
          {
              name: 'Procreate',
              focus: 'Official',
              description: 'Short, effective tutorials on features.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@Procreate'
          },
          {
              name: 'Art with Flo',
              focus: 'Tutorials',
              description: 'Beginner friendly step-by-step drawing guides.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@ArtwithFlo'
          }
      ],
      videos: [
          {
              title: 'Procreate for Beginners',
              channel: 'Brad Colbow',
              description: 'Complete walkthrough of the interface and gestures.',
              duration: '20:45'
          }
      ],
      articles: [
          {
              title: 'Procreate Handbook',
              source: 'Official',
              description: 'The manual for every tool and gesture.',
              url: 'https://procreate.com/handbook'
          }
      ],
      communities: [
          {
              title: 'r/ProCreate',
              source: 'Reddit',
              description: 'Sharing artwork and custom brushes.',
              url: 'https://www.reddit.com/r/ProCreate/'
          }
      ]
  },

  // --- LINEARITY ---
  'linearity': {
      toolId: 'linearity',
      tagline: 'Vector Design Evolved',
      overview: 'Formerly Vectornator, Linearity Curve is a powerful vector design tool reimagined with AI. Key features include Auto Trace (converting images to vectors), background removal, and a modern interface for marketing design.',
      useCases: ['Vector Art', 'Marketing Assets', 'Logos', 'Social Media'],
      tips: [
          "Use 'Auto Trace' to convert sketches or photos into editable vector paths instantly.",
          "Use 'Gesture Controls' to switch tools without looking at the menu.",
          "Export as SVG for web use or PDF for print quality.",
          "Use the 'Background Removal' tool to isolate subjects in one tap."
      ],
      creators: [
          {
              name: 'Linearity',
              focus: 'Academy',
              description: 'Official tutorials on vector design workflows.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@LinearityCurve'
          }
      ],
      videos: [
          {
              title: 'Linearity Curve for Beginners',
              channel: 'Satori Graphics',
              description: 'Introduction to vector tools on iPad and Mac.',
              duration: '14:30'
          }
      ],
      articles: [
          {
              title: 'Linearity Academy',
              source: 'Official',
              description: 'Learn graphic design principles and tool mastery.',
              url: 'https://www.linearity.io/academy/'
          }
      ],
      communities: []
  },

  // --- REPLIT ---
  'replit': {
      toolId: 'replit',
      tagline: 'The AI-Powered Software Platform',
      overview: 'Replit is a collaborative, cloud-based IDE that allows you to code in the browser without setup. Its new "Replit Agent" can plan, write, and deploy complex full-stack applications from a single natural language prompt.',
      useCases: ['Rapid Prototyping', 'Agentic Coding', 'Education', 'Hosting'],
      tips: [
          "Use 'Replit Agent' to scaffold entire projects, including database schema and frontend UI.",
          "Enable 'Autoscale' deployments to handle traffic spikes without managing servers.",
          "Import any GitHub repository to instantly get a cloud dev environment.",
          "Use 'Ghostwriter' for context-aware code completion and explanation."
      ],
      creators: [
          {
              name: 'Replit',
              focus: 'Official',
              description: 'Demos of Replit Agent and core features.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@replit'
          }
      ],
      videos: [
          {
              title: 'Replit Agent: Zero to App',
              channel: 'Replit',
              description: 'Building a complex application in minutes with AI.',
              duration: '08:45'
          }
      ],
      articles: [
          {
              title: 'Replit Documentation',
              source: 'Official',
              description: 'Guides on deployments, databases, and teams.',
              url: 'https://docs.replit.com/'
          }
      ],
      communities: [
          {
              title: 'Replit Community',
              source: 'Website',
              description: 'Share your repls and get help from other builders.',
              url: 'https://replit.com/community'
          }
      ]
  },

  // --- WARP ---
  'warp': {
      toolId: 'warp',
      tagline: 'The Terminal for the 21st Century',
      overview: 'Warp is a Rust-based terminal reimagined for modern workflows. It features an IDE-like input area, collaborative shared commands ("Warp Drive"), and deep AI integration that can explain errors or suggest commands.',
      useCases: ['DevOps', 'CLI Efficiency', 'Team Collaboration', 'Debugging'],
      tips: [
          "Press 'Ctrl-R' to search your command history with AI-powered fuzzy matching.",
          "Use 'Warp Drive' to save and share parameterized workflows with your team.",
          "Right-click any error output and select 'Ask Warp' to get an AI fix explanation.",
          "Use 'Blocks' to navigate through previous command outputs like a document."
      ],
      creators: [
          {
              name: 'Warp',
              focus: 'Official',
              description: 'Tips and tricks for power users.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@warpdotdev'
          }
      ],
      videos: [
          {
              title: 'Warp Terminal: 10x Your Workflow',
              channel: 'NetworkChuck',
              description: 'Why you should switch from your default terminal.',
              duration: '12:20'
          }
      ],
      articles: [
          {
              title: 'Warp Documentation',
              source: 'Official',
              description: 'Keyboard shortcuts and configuration guide.',
              url: 'https://docs.warp.dev/'
          }
      ],
      communities: [
          {
              title: 'Warp Discord',
              source: 'Discord',
              description: 'Feature requests and support.',
              url: 'https://discord.gg/warpdotdev'
          }
      ]
  },

  // --- LANGFLOW ---
  'langflow': {
      toolId: 'langflow',
      tagline: 'Visual Builder for AI Apps',
      overview: 'Langflow is a visual UI for LangChain, allowing you to build, test, and deploy complex LLM applications using a drag-and-drop interface. It abstracts away the boilerplate code, making it easy to experiment with different models, vector stores, and prompt chains.',
      useCases: ['RAG Pipelines', 'Chatbot Prototyping', 'No-Code AI', 'Educational'],
      tips: [
          "Drag and drop components to connect OpenAI to a Pinecone vector store instantly.",
          "Use the 'Playground' tab to test your flow in real-time without deploying.",
          "Export your flow as a JSON file or Python code to integrate into production apps.",
          "Combine multiple LLMs in a single chain to leverage different model strengths."
      ],
      creators: [],
      videos: [
          {
              title: 'Building RAG with Langflow',
              channel: 'Langflow',
              description: 'Zero-code setup for chatting with your documents.',
              duration: '10:15'
          }
      ],
      articles: [
          {
              title: 'Langflow Docs',
              source: 'Official',
              description: 'Component reference and deployment guides.',
              url: 'https://docs.langflow.org/'
          }
      ],
      communities: [
          {
              title: 'LangChain Discord',
              source: 'Discord',
              description: 'Discuss Langflow in the dedicated channels.',
              url: 'https://discord.gg/langchain'
          }
      ]
  },

  // --- V0 ---
  'v0': {
      toolId: 'v0',
      tagline: 'Generative UI by Vercel',
      overview: 'v0 uses AI to generate copy-paste friendly React components based on Shadcn UI and Tailwind CSS. It streamlines the frontend development process by turning text descriptions into accessible, production-ready code.',
      useCases: ['React Components', 'Tailwind', 'Rapid Prototyping', 'Design Systems'],
      tips: [
          "Iterate on your design by selecting specific parts of the preview and prompting changes.",
          "Copy the code directly into your Next.js project; it handles imports automatically.",
          "Use 'v0 blocks' to discover community-generated components.",
          "Be specific about layout requirements (e.g., 'mobile-first responsive grid')."
      ],
      creators: [
          {
              name: 'Vercel',
              focus: 'Official',
              description: 'Announcements and integration demos.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@VercelHQ'
          }
      ],
      videos: [
          {
              title: 'Building a Dashboard with v0',
              channel: 'Vercel',
              description: 'From prompt to deployed dashboard in minutes.',
              duration: '06:30'
          }
      ],
      articles: [
          {
              title: 'v0 Documentation',
              source: 'Vercel',
              description: 'Best practices for prompting UI generation.',
              url: 'https://v0.dev/docs'
          }
      ],
      communities: []
  },

  // --- CONTINUE ---
  'continue': {
      toolId: 'continue',
      tagline: 'Open Source AI Assistant',
      overview: 'Continue is the leading open-source autopilot for VS Code and JetBrains. It allows you to use any LLM (local or cloud) for code completion and chat, giving you full control over your data privacy and model choices.',
      useCases: ['Code Completion', 'Privacy-Focused Dev', 'Local Models', 'Refactoring'],
      tips: [
          "Connect to 'Ollama' to run models like Llama 3 or DeepSeek Coder locally.",
          "Use 'Cmd+I' to edit code in place without leaving your file.",
          "Add custom documentation to the context by using '@docs' in chat.",
          "Configure 'config.json' to switch between different model providers instantly."
      ],
      creators: [],
      videos: [
          {
              title: 'Continue vs Copilot',
              channel: 'Tech With Tim',
              description: 'Why open source matters for coding assistants.',
              duration: '14:20'
          }
      ],
      articles: [
          {
              title: 'Continue Docs',
              source: 'Official',
              description: 'Setup guides for Ollama, LM Studio, and API providers.',
              url: 'https://docs.continue.dev/'
          }
      ],
      communities: [
          {
              title: 'Continue Discord',
              source: 'Discord',
              description: 'Get help configuring local models.',
              url: 'https://discord.gg/continue'
          }
      ]
  },

  // --- POSTMAN ---
  'postman': {
      toolId: 'postman',
      tagline: 'AI-Powered API Platform',
      overview: 'Postman is the world\'s leading API platform. With the new "Postbot" AI assistant, you can auto-generate tests, visualize responses, and write documentation instantly, speeding up the API development lifecycle significantly.',
      useCases: ['API Testing', 'Documentation', 'Development', 'Debugging'],
      tips: [
          "Ask Postbot to 'Write a test that checks for 200 OK and valid JSON'.",
          "Use the 'Visualize' tab to turn JSON responses into charts or tables with AI.",
          "Generate documentation for your collection automatically based on request data.",
          "Use 'Mock Servers' to simulate API endpoints before the backend is built."
      ],
      creators: [
          {
              name: 'Postman',
              focus: 'Official',
              description: 'Tutorials on Postbot and new features.',
              platform: 'YouTube',
              url: 'https://www.youtube.com/@Postman'
          }
      ],
      videos: [
          {
              title: 'Postbot: Your AI Assistant for APIs',
              channel: 'Postman',
              description: 'Overview of AI capabilities in Postman.',
              duration: '04:15'
          }
      ],
      articles: [
          {
              title: 'Postman Learning Center',
              source: 'Official',
              description: 'Comprehensive guides for API testing and automation.',
              url: 'https://learning.postman.com/'
          }
      ],
      communities: [
          {
              title: 'Postman Community',
              source: 'Forum',
              description: 'Q&A for API developers.',
              url: 'https://community.postman.com/'
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

  // --- TEXTFX ---
  'textfx': {
      toolId: 'textfx',
      tagline: 'AI for Wordsmiths',
      overview: 'TextFX is an experiment by Google and Lupe Fiasco. It provides a suite of tools designed to help rappers, writers, and poets break out of creative blocks by exploring language in new ways.',
      useCases: ['Lyrics', 'Creative Writing', 'Wordplay', 'Ideation'],
      tips: [
          "Use 'Explode' to break a word down into phrases that sound similar.",
          "Use 'Chain' to build a sequence of semantically related words.",
          "Try 'Unfold' to find words that contain the letters of your input word.",
          "Combine tools: Explode a word, then Chain the result."
      ],
      creators: [],
      videos: [
          {
              title: 'Lupe Fiasco demonstrates TextFX',
              channel: 'Google',
              description: 'The rapper explains how he uses AI to assist his writing process.',
              duration: '03:45'
          }
      ],
      articles: [],
      communities: []
  },

  // --- VIDEOFX ---
  'videofx': {
      toolId: 'videofx',
      tagline: 'Veo Lab',
      overview: 'VideoFX is Google\'s experimental playground for generative video, powered by the Veo model. It allows creators to turn text prompts into high-definition 1080p video clips with cinematic quality.',
      useCases: ['Video Gen', 'Storyboarding', 'Social Media', 'Concept Art'],
      tips: [
          "Describe camera movement explicitly: 'drone shot', 'pan left', 'zoom in'.",
          "Keep prompts under 200 characters for better coherence.",
          "Use 'Story mode' (if available) to generate sequential clips.",
          "Specify lighting conditions like 'golden hour' or 'neon noir' for mood."
      ],
      creators: [],
      videos: [],
      articles: [],
      communities: []
  },

  // --- MUSICFX ---
  'musicfx': {
      toolId: 'musicfx',
      tagline: 'Infinite Music Loop',
      overview: 'MusicFX allows you to generate original, high-quality musical loops and tracks using Google\'s MusicLM model. It\'s a tool for producers, DJs, and creators looking for unique samples.',
      useCases: ['Background Music', 'Sampling', 'Idea Generation', 'Loop Creation'],
      tips: [
          "Combine genres in your prompt: 'Jazz mixed with 8-bit chiptune'.",
          "Specify the 'vibe' clearly: 'upbeat', 'melancholic', 'driving'.",
          "Set the duration to 'Loop' mode to create seamless background audio.",
          "Download generated tracks as MP3s to import into your DAW."
      ],
      creators: [],
      videos: [],
      articles: [],
      communities: []
  },

  // --- GENIE ---
  'genie': {
      toolId: 'genie',
      tagline: 'Generative Interactive Environments',
      overview: 'Genie is a foundation world model trained on internet videos that can generate an endless variety of playable (action-controllable) worlds from image prompts.',
      useCases: ['Game Research', 'World Building', 'Simulation'],
      creators: [],
      videos: [],
      articles: [
          {
              title: 'Genie Research Paper',
              source: 'Google DeepMind',
              description: '11B parameter foundation world model.',
              url: 'https://deepmind.google/technologies/genie/'
          }
      ],
      communities: []
  },

  // --- ANTIGRAVITY ---
  'antigravity': {
      toolId: 'antigravity',
      tagline: 'Built for Agents',
      overview: 'Google Antigravity is a platform designed for building and deploying autonomous AI agents. It provides the infrastructure for agents to plan, execute, and verify tasks in the real world.',
      useCases: ['Automation', 'Enterprise', 'Complex Workflows'],
      creators: [],
      videos: [],
      articles: [],
      communities: []
  },

  // --- GOOGLE VIDS ---
  'google-vids': {
      toolId: 'google-vids',
      tagline: 'Video for Work',
      overview: 'Google Vids is an AI-powered video creation app for Workspace. It sits alongside Docs, Sheets, and Slides, helping teams create videos for training, updates, and pitches as easily as making a slide deck.',
      useCases: ['Internal Comms', 'Training', 'Project Updates', 'Sales Pitches'],
      tips: [
          "Start with a Google Doc script to get the best structure automatically.",
          "Use 'Help me create' to generate a full storyboard from a single prompt.",
          "Choose a preset 'Style' to ensure consistent branding across the video.",
          "Use the AI voiceover feature if you don't want to record your own audio."
      ],
      creators: [],
      videos: [
          {
              title: 'Introducing Google Vids',
              channel: 'Google Workspace',
              description: 'The new AI-powered video creation app for work.',
              duration: '01:50'
          }
      ],
      articles: [],
      communities: []
  },

  // --- PROJECT ASTRA ---
  'project-astra': {
      toolId: 'project-astra',
      tagline: 'The Universal Assistant',
      overview: 'Project Astra is Google\'s vision for the future of AI assistants. It is a multimodal, real-time agent that can see, hear, and understand the world through your phone\'s camera or smart glasses, responding with near-instant latency.',
      useCases: ['Assistance', 'Multimodal Interaction', 'Accessibility'],
      creators: [],
      videos: [
          {
              title: 'Project Astra Demo',
              channel: 'Google DeepMind',
              description: 'Real-time multimodal AI assistant prototype.',
              duration: '02:30'
          }
      ],
      articles: [],
      communities: []
  },

  // --- VEO ---
  'veo': {
      toolId: 'veo',
      tagline: 'Generative Video Model',
      overview: 'Veo is Google\'s most capable generative video model to date. It creates high-quality, 1080p video clips that can go beyond a minute, understanding cinematic terms like "timelapse" or "aerial shot".',
      useCases: ['Filmmaking', 'Advertising', 'Social Content'],
      creators: [],
      videos: [],
      articles: [
          {
              title: 'Veo Technology Overview',
              source: 'Google DeepMind',
              description: 'Details on the latent diffusion transformer architecture.',
              url: 'https://deepmind.google/technologies/veo/'
          }
      ],
      communities: []
  },

  // --- PROJECT JULES ---
  'project-jules': {
      toolId: 'project-jules',
      tagline: 'Experimental Code Agent',
      overview: 'Project Jules is an experimental AI code agent designed to help developers write, debug, and understand code more effectively. It integrates deeply with version control systems to provide context-aware assistance.',
      useCases: ['Coding', 'Refactoring', 'Documentation'],
      creators: [],
      videos: [],
      articles: [],
      communities: []
  },

  // --- MIXBOARD ---
  'mixboard': {
      toolId: 'mixboard',
      tagline: 'AI Music Whiteboard',
      overview: 'Mixboard is an AI-powered music interface that allows users to mix and mash up tracks on a 2D canvas. It helps users understand song structure and create seamless transitions automatically.',
      useCases: ['DJing', 'Remixing', 'Music Education'],
      creators: [],
      videos: [],
      articles: [
          {
              title: 'Mixboard Blog Post',
              source: 'Google Research',
              description: 'Helping robots and humans mix music.',
              url: 'https://research.google/blog/mixboard-helping-robots-and-humans-mix-music/'
          }
      ],
      communities: []
  },

  // --- MUSIC SANDBOX ---
  'music-sandbox': {
      toolId: 'music-sandbox',
      tagline: 'Lyria Model Playground',
      overview: 'The Music AI Sandbox is a suite of experimental tools designed in collaboration with musicians. It features the Lyria model, allowing users to generate, transform, and accompany musical ideas.',
      useCases: ['Composition', 'Sound Design', 'Collaboration'],
      creators: [],
      videos: [
          {
              title: 'Music AI Sandbox Demo with Wyclef Jean',
              channel: 'Google',
              description: 'Artists testing the new Lyria model tools.',
              duration: '02:15'
          }
      ],
      articles: [],
      communities: []
  },

  // --- GEMINI GEMS ---
  'gemini-gems': {
      toolId: 'gemini-gems',
      tagline: 'Custom AI Experts',
      overview: 'Gems allow you to create custom versions of Gemini that are experts in specific topics or tailored to your unique goals. You can give them instructions, a persona, and specific knowledge files.',
      useCases: ['Personalization', 'Coaching', 'Coding Assistant', 'Creative Writing'],
      tips: [
          "Give your Gem a specific persona (e.g., 'Grumpy Editor' or 'Patient Tutor').",
          "Upload knowledge files (PDFs, Docs) to ground the Gem in your specific data.",
          "Share your Gems with your team to standardize workflows.",
          "Use Gems for repetitive tasks like 'Weekly Report Formatter'."
      ],
      creators: [],
      videos: [],
      articles: [
          {
              title: 'Introducing Gemini Gems',
              source: 'Google Blog',
              description: 'Customize Gemini to fit your needs.',
              url: 'https://blog.google/products/gemini/gemini-gems/'
          }
      ],
      communities: []
  },

  // --- GOOGLE EARTH ---
  'google-earth': {
      toolId: 'google-earth',
      tagline: 'The World\'s Most Detailed Globe',
      overview: 'Google Earth is the world\'s most detailed digital globe. With new creation tools and Studio integration, it allows creators to build immersive stories, flyovers, and visualizations using satellite imagery.',
      useCases: ['Visualization', 'Storytelling', 'Education', 'Location Scouting'],
      creators: [],
      videos: [],
      articles: [],
      communities: []
  },

  // --- CODEWIKI ---
  'codewiki': {
      toolId: 'codewiki',
      tagline: 'Engineering Knowledge Base',
      overview: 'Code Wiki is the definitive internal knowledge base for engineering patterns and AI coding standards within the Google ecosystem. (Note: This is a representative entry for internal tool documentation patterns).',
      useCases: ['Documentation', 'Standards', 'Onboarding'],
      creators: [],
      videos: [],
      articles: [],
      communities: []
  },

  // --- STITCH ---
  'stitch': {
      toolId: 'stitch',
      tagline: 'AI UI Designer',
      overview: 'Stitch is an AI-powered prototyping tool that helps designers convert sketches and text descriptions into editable high-fidelity UI designs, often exporting directly to Figma or code.',
      useCases: ['Prototyping', 'Design Conversion', 'Wireframing'],
      creators: [],
      videos: [],
      articles: [],
      communities: []
  },

  // --- KEEP ---
  'keep': {
      toolId: 'keep',
      tagline: 'Capture Ideas Instantly',
      overview: 'Google Keep is a note-taking service that uses AI to help you capture, organize, and find your ideas. New generative features can help you create lists, brainstorm, and pin important context.',
      useCases: ['Organization', 'Brainstorming', 'Quick Capture'],
      tips: [
          "Use 'Help me create' to generate a grocery list from a recipe description.",
          "Pin important notes to the top for easy access on mobile.",
          "Color code your notes to visually categorize projects.",
          "Set location-based reminders to get alerted when you arrive at a place."
      ],
      creators: [],
      videos: [],
      articles: [],
      communities: []
  },

  // --- OPAL ---
  'opal': {
      toolId: 'opal',
      tagline: 'No-Code AI Builder',
      overview: 'Opal is a visual tool for building AI-powered applications without writing code. It allows users to chain together prompts, models, and tools into powerful workflows.',
      useCases: ['App Building', 'Automation', 'Workflow Design'],
      creators: [],
      videos: [],
      articles: [],
      communities: []
  },

  // --- MESOP ---
  'mesop': {
      toolId: 'mesop',
      tagline: 'Build UI in Python',
      overview: 'Mesop is a Python UI framework that allows you to build beautiful, responsive web applications in pure Python. It is designed for rapidly prototyping internal AI tools and demos.',
      useCases: ['Internal Tools', 'Demos', 'Chat UIs', 'Dashboards'],
      tips: [
          "Use `mesop.text_to_text` component for instant chat interfaces.",
          "Deploy directly to Google Cloud Run for scalability.",
          "Hot reload is enabled by default for fast iteration.",
          "State management is handled automatically via data classes."
      ],
      creators: [],
      videos: [],
      articles: [
          {
              title: 'Mesop GitHub Repo',
              source: 'GitHub',
              description: 'Official repository and examples.',
              url: 'https://github.com/google/mesop'
          }
      ],
      communities: []
  },

  // --- ILLUMINATE ---
  'illuminate': {
      toolId: 'illuminate',
      tagline: 'Learn from Papers',
      overview: 'Illuminate uses AI to transform dense academic papers into engaging audio conversations. It features AI hosts that discuss the content, making complex research more accessible.',
      useCases: ['Learning', 'Research', 'Accessibility'],
      creators: [],
      videos: [],
      articles: [],
      communities: []
  },

  // --- KAGGLE ---
  'kaggle': {
      toolId: 'kaggle',
      tagline: 'Your Home for Data Science',
      overview: 'Kaggle is the world\'s largest data science community. It offers free access to datasets, a powerful notebook environment with free GPUs/TPUs, and competitions to test your modeling skills.',
      useCases: ['Data Science', 'Model Training', 'Datasets', 'Education'],
      tips: [
          "Use the 'Models' tab to find pre-trained weights for Gemma, Llama 3, etc.",
          "Turn on the 'TPU VM v3-8' accelerator for faster training of large models.",
          "Fork existing high-scoring notebooks to learn winning techniques.",
          "Join 'Getting Started' competitions if you are new to ML."
      ],
      creators: [],
      videos: [],
      articles: [],
      communities: []
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
  }
};

export const getLearningData = (id: string): LearningHubData => {
  // Return specific data if found, otherwise basic fallback but preserve ID
  return learningResourcesData[id] || { ...learningResourcesData['default'], toolId: id };
};