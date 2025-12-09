import { LearningHubData } from '../types';

export const learningResourcesData: Record<string, LearningHubData> = {
  // --- IMAGEFX ---
  'imagefx': {
    toolId: 'imagefx',
    tagline: 'Photorealistic Creation with Imagen 3',
    overview: 'ImageFX allows you to generate high-quality images with simple text prompts. Powered by Imagen 3, it introduces "expressive chips" that let you quickly iterate on creative ideas by swapping out keywords without rewriting the whole prompt.',
    useCases: [
      'Rapid concept art generation',
      'Creating photorealistic marketing assets',
      'Exploring visual styles with expressive chips',
      'High-fidelity texture generation for 3D'
    ],
    creators: [
      {
        name: 'Google Design',
        focus: 'Tips',
        description: 'Official tips on using expressive chips effectively.',
        platform: 'Social',
        url: 'https://twitter.com/GoogleDesign'
      },
      {
        name: 'AI Art Community',
        focus: 'Prompting',
        description: 'Deep dives into the specific keywords Imagen 3 responds to.',
        platform: 'Social',
        url: '#'
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

  // --- TEXTFX ---
  'textfx': {
    toolId: 'textfx',
    tagline: 'AI Tools for Rappers & Writers',
    overview: 'TextFX is an AI experiment designed with Lupe Fiasco. It uses large language models to help writers explore creative possibilities with tools like Simile, Explode, Unexpect, and Chain, breaking through writer\'s block.',
    useCases: [
      'Generating complex rhyme schemes',
      'Breaking down words into phonetic components',
      'Creating unexpected metaphors and similes',
      'Brainstorming conceptual associations'
    ],
    creators: [
      {
        name: 'Lupe Fiasco',
        focus: 'Creative Process',
        description: 'Demonstrating how he uses the tool for lyricism.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/watch?v=EqLdZtF1A34'
      }
    ],
    videos: [
      {
        title: 'Lupe Fiasco & Google: TextFX',
        channel: 'Google',
        description: 'The philosophy behind AI as a tool for rap.',
        duration: '04:20'
      }
    ],
    articles: [
      {
        title: 'TextFX: AI for Wordplay',
        source: 'Google Blog',
        description: 'How the 10 tools were designed for lyricists.',
        url: 'https://blog.google/technology/ai/textfx-lupe-fiasco-google-lab-sessions/'
      }
    ],
    communities: [
      {
        title: 'HipHopHeads',
        source: 'Reddit',
        description: 'Discussions on AI\'s role in lyric writing.',
        url: 'https://www.reddit.com/r/hiphopheads/'
      }
    ]
  },

  // --- MUSICFX ---
  'musicfx': {
    toolId: 'musicfx',
    tagline: 'Turn Text into Music',
    overview: 'MusicFX allows you to generate original musical loops and tracks using the MusicLM model. It\'s designed for creators who want to experiment with sound, generate backing tracks, or explore new genres by combining disparate descriptions.',
    useCases: [
      'Generating royalty-free backing tracks',
      'Brainstorming melodies from abstract emotions',
      'Creating seamless loops for video content',
      'Exploring genre fusion (e.g., "Jazz-Trap")'
    ],
    creators: [
      {
        name: 'Google Arts & Culture',
        focus: 'Experiments',
        description: 'Artists pushing the boundaries of AI music.',
        platform: 'YouTube',
        url: 'https://artsandculture.google.com/'
      }
    ],
    videos: [
      {
        title: 'MusicFX: Create music with AI',
        channel: 'Google',
        description: 'Overview of the DJ mode and text-to-music features.',
        duration: '01:30'
      }
    ],
    articles: [
      {
        title: 'MusicLM: Generating Music From Text',
        source: 'Google Research',
        description: 'The research behind high-fidelity music generation.',
        url: 'https://google-research.github.io/seanet/musiclm/examples/'
      }
    ],
    communities: [
      {
        title: 'r/MusicProduction',
        source: 'Reddit',
        description: 'Debating the use of AI tools in production workflows.',
        url: 'https://www.reddit.com/r/musicproduction/'
      }
    ]
  },

  // --- VIDEOFX ---
  'videofx': {
    toolId: 'videofx',
    tagline: 'Dream it. Stream it.',
    overview: 'VideoFX is the playground for Google\'s Veo model. It allows users to generate 1080p video clips from text prompts, offering a glimpse into the future of generative filmmaking with controls for cinematic style and camera movement.',
    useCases: [
      'Storyboarding complex scenes rapidly',
      'Generating abstract motion graphics',
      'Testing cinematic lighting setups',
      'Creating social media video assets'
    ],
    creators: [
      {
        name: 'CuriousRefuge',
        focus: 'AI Filmmaking',
        description: 'Tutorials on using generative video for storytelling.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@CuriousRefuge'
      }
    ],
    videos: [
      {
        title: 'VideoFX powered by Veo',
        channel: 'Google Labs',
        description: 'Demo of the interface and prompt adherence.',
        duration: '02:00'
      }
    ],
    articles: [
      {
        title: 'Veo: Generative Video Model',
        source: 'DeepMind',
        description: 'Technical details on the model powering VideoFX.',
        url: 'https://deepmind.google/technologies/veo/'
      }
    ],
    communities: [
      {
        title: 'r/aivideo',
        source: 'Reddit',
        description: 'Sharing generations and prompting tips.',
        url: 'https://www.reddit.com/r/aivideo/'
      }
    ]
  },

  // --- GENIE ---
  'genie': {
    toolId: 'genie',
    tagline: 'Generative Interactive Environments',
    overview: 'Genie is a foundation model from Google DeepMind that can generate an endless variety of playable (action-controllable) worlds from image prompts or even sketches. It learns to control characters without any labels, effectively dreaming up games.',
    useCases: [
      'Prototyping 2D platformer levels instantly',
      'Training generalist AI agents in diverse worlds',
      'Converting sketches into playable interactive demos',
      'Research into unsupervised learning of dynamics'
    ],
    creators: [
      {
        name: 'Tim Rocktäschel',
        focus: 'Research Lead',
        description: 'Explaining the path from video to playable world.',
        platform: 'Social',
        url: 'https://twitter.com/_rockt'
      },
      {
        name: 'Two Minute Papers',
        focus: 'Analysis',
        description: 'Breaking down the "Genie" paper for the public.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@TwoMinutePapers'
      }
    ],
    videos: [
      {
        title: 'Genie: Generative Interactive Environments',
        channel: 'Google DeepMind',
        description: 'The official research reveal video.',
        duration: '02:50'
      },
      {
        title: 'Google\'s Genie AI Explained',
        channel: 'AI Explained',
        description: 'Deep dive into the implications for game dev.',
        duration: '12:15'
      }
    ],
    articles: [
      {
        title: 'Genie Research Blog',
        source: 'Google DeepMind',
        description: 'Full technical breakdown of the 11B parameter model.',
        url: 'https://deepmind.google/discover/blog/genie-generative-interactive-environments/'
      }
    ],
    communities: [
      {
        title: 'r/MachineLearning',
        source: 'Reddit',
        description: 'Technical discussion on the ST-Transformer architecture.',
        url: 'https://www.reddit.com/r/MachineLearning/'
      }
    ]
  },

  // --- ANTIGRAVITY ---
  'antigravity': {
    toolId: 'antigravity',
    tagline: 'The Agent-First Development Platform',
    overview: 'Google Antigravity is an experimental, agent-first development platform where you define the goal, and AI agents autonomously plan, execute, and verify the work. It moves beyond chat to execution, handling complex multi-step workflows with built-in reasoning loops.',
    useCases: [
      'Building autonomous research & data agents',
      'Automating complex, multi-step business logic',
      'Visual agent orchestration without code',
      'Self-verifying code generation & execution'
    ],
    creators: [
      {
        name: 'Romin Irani',
        focus: 'Quickstarts',
        description: 'Detailed guides on the Agent-First Interface and verification loops.',
        platform: 'Medium',
        url: 'https://medium.com/'
      },
      {
        name: 'Thomas Chong',
        focus: 'Visual Builder',
        description: 'Tutorials on designing complex flows with the Visual Agent Builder.',
        platform: 'Medium',
        url: '#'
      },
      {
        name: 'Execute Automation',
        focus: 'Business Logic',
        description: 'Real-world examples of automating support tickets and scheduling.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/'
      },
      {
        name: 'Google Developers',
        focus: 'Official',
        description: 'Core concepts: Planning, Execution, Verification.',
        platform: 'Blog',
        url: 'https://developers.googleblog.com/'
      },
      {
        name: 'The AI Strategist',
        focus: 'Debugging',
        description: 'Advanced strategies for ensuring agent reliability.',
        platform: 'Blog',
        url: '#'
      }
    ],
    videos: [
      {
        title: 'Tutorial: Getting Started with Antigravity',
        channel: 'Romin Irani',
        description: 'Step-by-step: Creating your first agent and defining goals.',
        duration: '12:15'
      },
      {
        title: 'The AI Platform That Codes Itself',
        channel: 'Automation Tech',
        description: 'Building an autonomous social media research agent.',
        duration: '14:40'
      },
      {
        title: 'Antigravity vs. Project Astra',
        channel: 'Deep Dive',
        description: 'When to use the Dev Platform vs. the Assistant.',
        duration: '09:30'
      },
      {
        title: 'Antigravity and Gemini: Autonomous Workflows',
        channel: 'Google Developers',
        description: 'Technical deep dive into the reasoning engine.',
        duration: '22:10'
      },
      {
        title: 'Visual Agent Builder Walkthrough',
        channel: 'Thomas Chong',
        description: 'Designing non-linear flows visually.',
        duration: '11:05'
      }
    ],
    articles: [
      {
        title: 'Antigravity Landing Page',
        source: 'Official',
        description: 'Access the preview environment and core docs.',
        url: 'https://antigravity.google/'
      },
      {
        title: 'New Agent-First Interface',
        source: 'Google Blog',
        description: 'Understanding the shift from prompt-based to goal-based AI.',
        url: '#'
      },
      {
        title: 'Debugging Failed Agent Runs',
        source: 'Dev Forum',
        description: 'How to analyze verification logs for robust agents.',
        url: '#'
      },
      {
        title: 'Gemini API Agentic Sections',
        source: 'Docs',
        description: 'Underlying framework for tools and function calling.',
        url: 'https://ai.google.dev/'
      }
    ],
    communities: [
      {
        title: 'Google Cloud Community',
        source: 'Official Forum',
        description: 'Active discussions on Antigravity and Vertex AI Agents.',
        url: 'https://www.googlecloudcommunity.com/'
      }
    ]
  },

  // --- GOOGLE VIDS ---
  'google-vids': {
    toolId: 'google-vids',
    tagline: 'AI-Powered Video Creation for Work',
    overview: 'Google Vids is an AI-powered video creation app for work. It sits alongside Docs, Sheets, and Slides, allowing you to generate professional video drafts—scripts, voiceovers, and stock media—from simple prompts or existing Drive documents.',
    useCases: [
      'Turning meeting notes into executive video recaps',
      'Creating scalable employee training & onboarding',
      'Generating sales pitches from product briefs',
      'Rapid internal communication updates'
    ],
    creators: [
      {
        name: 'TeacherCast',
        focus: 'Education',
        description: 'Creating PD content and welcome messages for schools.',
        platform: 'YouTube',
        url: 'https://www.teachercast.net/'
      },
      {
        name: 'Workspace Learning',
        focus: 'Official',
        description: 'Step-by-step guides on templates and script editing.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/'
      },
      {
        name: 'Horst Web Design',
        focus: 'Editing',
        description: 'Detailed tutorials on the timeline and object animation.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/'
      },
      {
        name: 'New Creator Economy',
        focus: 'Business',
        description: 'Repurposing Docs and Slides into dynamic video assets.',
        platform: 'Blog',
        url: '#'
      }
    ],
    videos: [
      {
        title: 'How to Use Google Vids: Step-by-Step',
        channel: 'Horst Web Design',
        description: 'From script generation to exporting MP4s with Veo 3.',
        duration: '15:20'
      },
      {
        title: 'Google Vids for Teachers',
        channel: 'TeacherCast',
        description: 'Scaling instructional coaching with AI video.',
        duration: '12:45'
      },
      {
        title: 'Create your first video in Google Vids',
        channel: 'Workspace Learning',
        description: 'Official guide on "Help me create" and media replacement.',
        duration: '08:30'
      },
      {
        title: 'Executive Recap: Notes to Video in 5 Min',
        channel: 'Workflow Demo',
        description: 'Real-time demo of converting a Doc to a video summary.',
        duration: '05:55'
      },
      {
        title: 'Generating Clips with Veo inside Vids',
        channel: 'Official Demo',
        description: 'Using the generative video features within the timeline.',
        duration: '04:20'
      }
    ],
    articles: [
      {
        title: 'Google Vids Help Center',
        source: 'Google Workspace',
        description: 'The central hub for features and troubleshooting.',
        url: 'https://support.google.com/'
      },
      {
        title: 'Using Templates for Brand Consistency',
        source: 'Tutorial',
        description: 'Applying corporate themes and colors automatically.',
        url: '#'
      },
      {
        title: 'Collaboration in Vids',
        source: 'Guide',
        description: 'How to comment, share, and edit together in real-time.',
        url: '#'
      }
    ],
    communities: [
      {
        title: 'Google Workspace Community',
        source: 'Forum',
        description: 'Discussions on enterprise adoption and custom templates.',
        url: 'https://www.googlecloudcommunity.com/'
      }
    ]
  },

  // --- PROJECT ASTRA ---
  'project-astra': {
    toolId: 'project-astra',
    tagline: 'The Future of Universal Assistants',
    overview: 'Project Astra is Google DeepMind\'s vision for a universal AI agent. It processes multimodal inputs (video, audio, text) in real-time with ultra-low latency, capable of "seeing" your world, remembering context, and taking proactive action.',
    useCases: [
      'Real-time visual assistance (identifying objects)',
      'Context-aware memory (finding misplaced items)',
      'Hands-free complex task guidance (coding, repair)',
      'Accessibility aid for blind/low-vision users'
    ],
    creators: [
      {
        name: 'Logan Kilpatrick',
        focus: 'Hands-On Demos',
        description: 'Real-world tests like brewing espresso or identifying parts.',
        platform: 'Social',
        url: 'https://twitter.com/'
      },
      {
        name: 'Google DeepMind',
        focus: 'Research',
        description: 'The science behind multimodal memory and latency.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@GoogleDeepMind'
      },
      {
        name: 'Kanerika',
        focus: 'Business Apps',
        description: 'Breakdowns of Action Intelligence in healthcare and enterprise.',
        platform: 'Blog',
        url: '#'
      },
      {
        name: 'Android Police',
        focus: 'Tech Analysis',
        description: 'Deep dives into how the memory encoding works.',
        platform: 'Blog',
        url: 'https://www.androidpolice.com/'
      },
      {
        name: 'Conor Grennan',
        focus: 'Impressions',
        description: 'First-hand accounts of the fluidity and speed.',
        platform: 'Social',
        url: 'https://www.linkedin.com/'
      }
    ],
    videos: [
      {
        title: 'Astra: Real-Time Visual Assistance Demo',
        channel: 'Google I/O',
        description: 'The famous demo: drawing code, finding glasses, identifying speakers.',
        duration: '03:45'
      },
      {
        title: 'Project Astra: Exploring a Universal Assistant',
        channel: 'DeepMind',
        description: 'Discussion on memory, latency, and future vision.',
        duration: '18:20'
      },
      {
        title: 'Using Astra to Brew Espresso',
        channel: 'Logan Kilpatrick',
        description: 'Step-by-step visual guidance and error correction.',
        duration: '02:15'
      },
      {
        title: '8 Exciting Abilities of Project Astra',
        channel: 'FavTutor',
        description: 'List of high-value use cases like first aid and coding help.',
        duration: '10:00'
      },
      {
        title: 'Taking Astra for a Spin',
        channel: 'Dave Demo',
        description: 'Continuous conversation about physics and environment.',
        duration: '05:30'
      }
    ],
    articles: [
      {
        title: 'Project Astra Official Page',
        source: 'DeepMind',
        description: 'The primary source for the vision and waitlist.',
        url: 'https://deepmind.google/technologies/project-astra/'
      },
      {
        title: 'The AI Assistant Revolution',
        source: 'Impetus',
        description: 'Analysis of visual guidance and multi-method interaction.',
        url: '#'
      },
      {
        title: 'Google AI Updates',
        source: 'Blog',
        description: 'News on Astra features coming to Gemini Live.',
        url: 'https://blog.google/technology/ai/'
      }
    ],
    communities: [
      {
        title: 'r/GoogleGemini',
        source: 'Reddit',
        description: 'Speculation and discussion on Astra\'s public release.',
        url: 'https://www.reddit.com/r/GoogleGemini/'
      }
    ]
  },

  // --- VEO ---
  'veo': {
    toolId: 'veo',
    tagline: 'Generative Video for the Future of Cinema',
    overview: 'Veo is Google\'s most capable generative video model, designed to capture the nuance of cinematic language. It generates high-quality, 1080p+ video with consistent physics, understanding commands like "timelapse" or "aerial shot".',
    useCases: [
      'High-fidelity storyboard visualization',
      'Generating stock footage replacements',
      'Creative filmmaking & music video production',
      'Consistent character animation experimentation'
    ],
    creators: [
      {
        name: 'Runway/Pika Experts',
        focus: 'Comparison',
        description: 'Creators comparing Veo against SOTA models like Gen-3 Alpha.',
        platform: 'YouTube',
        url: '#'
      },
      {
        name: 'DeepMind Researchers',
        focus: 'Technical',
        description: 'The team behind the latent diffusion architecture.',
        platform: 'Blog',
        url: 'https://deepmind.google/technologies/veo/'
      }
    ],
    videos: [
      {
        title: 'Introducing Veo',
        channel: 'Google DeepMind',
        description: 'Official launch video showcasing cinematic capabilities.',
        duration: '02:30'
      },
      {
        title: 'Veo vs. Sora: The Battle for AI Video',
        channel: 'AI Explained',
        description: 'Deep dive comparison of physics and prompt adherence.',
        duration: '15:00'
      }
    ],
    articles: [
      {
        title: 'Veo Research Paper',
        source: 'DeepMind',
        description: 'Technical details on the generative video architecture.',
        url: 'https://deepmind.google/technologies/veo/'
      }
    ],
    communities: [
      {
        title: 'r/StableDiffusion',
        source: 'Reddit',
        description: 'Discussions on generative video tech and open alternatives.',
        url: 'https://www.reddit.com/r/StableDiffusion/'
      }
    ]
  },

  // --- PROJECT JULES ---
  'project-jules': {
    toolId: 'project-jules',
    tagline: 'Your AI Coding Companion',
    overview: 'Project Jules is an experimental AI code agent designed to collaborate with you on complex software projects. It integrates deeply with your repository to understand context, suggest refactors, and even write PR descriptions.',
    useCases: [
      'Automated code reviews & refactoring',
      'Understanding legacy codebases instantly',
      'Generating unit tests based on implementation',
      'Context-aware pair programming'
    ],
    creators: [
      {
        name: 'Google Labs',
        focus: 'Official Demos',
        description: 'Showcases of Jules operating within VS Code and GitHub.',
        platform: 'YouTube',
        url: 'https://labs.google/'
      }
    ],
    videos: [
      {
        title: 'Project Jules: The Future of Coding',
        channel: 'Google Labs',
        description: 'Demo of the agent handling a multi-file refactor.',
        duration: '04:15'
      }
    ],
    articles: [
      {
        title: 'Join the Jules Waitlist',
        source: 'Google Labs',
        description: 'Sign up for early access to the experimental agent.',
        url: 'https://labs.google/'
      }
    ],
    communities: [
      {
        title: 'Google Developers',
        source: 'Discord',
        description: 'Channels dedicated to experimental AI coding tools.',
        url: '#'
      }
    ]
  },

  // --- MIXBOARD ---
  'mixboard': {
    toolId: 'mixboard',
    tagline: 'The AI Music Whiteboard',
    overview: 'Mixboard is a research prototype that reimagines the music mixing interface. It allows you to drag, drop, and "mash up" tracks on a 2D canvas, with AI handling the beat-matching, key shifting, and seamless transitions.',
    useCases: [
      'Rapid prototyping of DJ sets',
      'Creative mashups of disparate genres',
      'Visualizing music structure and arrangement',
      'Educational tool for understanding mixing'
    ],
    creators: [
      {
        name: 'Google Research',
        focus: 'Innovation',
        description: 'The researchers bridging HCI and Music Information Retrieval.',
        platform: 'Blog',
        url: 'https://research.google/'
      }
    ],
    videos: [
      {
        title: 'Mixboard: Helping Robots and Humans Mix Music',
        channel: 'Google Research',
        description: 'Demonstration of the infinite canvas interface.',
        duration: '03:50'
      }
    ],
    articles: [
      {
        title: 'Mixboard Blog Post',
        source: 'Google Research',
        description: 'Deep dive into the underlying tempo-matching algorithms.',
        url: 'https://research.google/blog/mixboard-helping-robots-and-humans-mix-music/'
      }
    ],
    communities: [
      {
        title: 'r/DJs',
        source: 'Reddit',
        description: 'Discussions on the future of AI in live performance.',
        url: 'https://www.reddit.com/r/DJs/'
      }
    ]
  },

  // --- MUSIC AI SANDBOX ---
  'music-sandbox': {
    toolId: 'music-sandbox',
    tagline: 'Experimental Music Creation with Lyria',
    overview: 'The Music AI Sandbox is a suite of tools built on Google\'s most advanced music model, Lyria. It allows artists to generate high-fidelity instrumental loops, transform audio styles, and compose new ideas from simple hums or text.',
    useCases: [
      'Generating royalty-free samples for production',
      'Style transfer: Turning a hum into a saxophone',
      'Exploring new genres and soundscapes',
      'Collaborative AI jamming'
    ],
    creators: [
      {
        name: 'Marc Rebillet',
        focus: 'Demo',
        description: 'Renowned loop artist testing the limits of the Sandbox.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@MarcRebillet'
      },
      {
        name: 'Google Arts & Culture',
        focus: 'Experiments',
        description: 'Showcasing artist collaborations with Lyria.',
        platform: 'Blog',
        url: 'https://artsandculture.google.com/'
      }
    ],
    videos: [
      {
        title: 'Music AI Sandbox with Marc Rebillet',
        channel: 'Google',
        description: 'Watch Marc build a track live using AI-generated stems.',
        duration: '02:45'
      }
    ],
    articles: [
      {
        title: 'Transforming the Future of Music Creation',
        source: 'Google Blog',
        description: 'Announcement of the Lyria model and YouTube Shorts integration.',
        url: 'https://blog.google/technology/ai/google-deepmind-lyria-model-youtube-shorts/'
      }
    ],
    communities: [
      {
        title: 'r/MusicProduction',
        source: 'Reddit',
        description: 'Debates on the role of generative AI in music.',
        url: 'https://www.reddit.com/r/musicproduction/'
      }
    ]
  },

  // --- GEMINI GEMS ---
  'gemini-gems': {
    toolId: 'gemini-gems',
    tagline: 'Custom AI Experts for Any Task',
    overview: 'Gemini Gems allow you to customize Gemini into your own personal experts on any topic. By providing specific instructions, you can create a "Coding Partner", "Creative Writing Coach", or "Fitness Trainer" that remembers your preferences.',
    useCases: [
      'Creating a specialized coding debugger',
      'Building a consistent brand voice editor',
      'Personalized learning tutors for specific subjects',
      'Role-playing scenarios for interview prep'
    ],
    creators: [
      {
        name: 'The AI Advantage',
        focus: 'Prompt Engineering',
        description: 'Tutorials on structuring system instructions for Gems.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@TheAIAdvantage'
      },
      {
        name: 'Google Workspace',
        focus: 'Productivity',
        description: 'Official examples of Gems for project management.',
        platform: 'Blog',
        url: 'https://workspace.google.com/blog'
      }
    ],
    videos: [
      {
        title: 'How to Create Custom Gemini Gems',
        channel: 'Google',
        description: 'Step-by-step guide to building and saving your own Gem.',
        duration: '04:20'
      }
    ],
    articles: [
      {
        title: 'Introducing Gemini Gems',
        source: 'Google Blog',
        description: 'Overview of the feature and starter templates.',
        url: 'https://blog.google/products/gemini/gemini-gems/'
      }
    ],
    communities: [
      {
        title: 'r/Bard',
        source: 'Reddit',
        description: 'Sharing custom Gem prompts and use cases.',
        url: 'https://www.reddit.com/r/Bard/'
      }
    ]
  },

  // --- GOOGLE EARTH ---
  'google-earth': {
    toolId: 'google-earth',
    tagline: 'The World\'s Most Detailed Globe',
    overview: 'Google Earth has evolved into a powerful storytelling and visualization platform. With new creation tools, 3D tiles, and timelapse features, it is an essential tool for researchers, educators, and journalists to visualize geospatial data.',
    useCases: [
      'Creating guided tours of historical sites',
      'Visualizing climate change with Timelapse',
      'Planning travel or logistics with 3D terrain',
      'Educational storytelling in the classroom'
    ],
    creators: [
      {
        name: 'Google Earth Outreach',
        focus: 'Storytelling',
        description: 'Helping non-profits and storytellers use Earth tools.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@GoogleEarth'
      },
      {
        name: 'Get Lost in the World',
        focus: 'Exploration',
        description: 'Discovering hidden gems and anomalies on the globe.',
        platform: 'YouTube',
        url: '#'
      }
    ],
    videos: [
      {
        title: 'Google Earth Timelapse: A perspective of time',
        channel: 'Google Earth',
        description: 'Showcasing 40 years of planetary change.',
        duration: '02:15'
      },
      {
        title: 'How to create a project in Google Earth',
        channel: 'Google Earth',
        description: 'Tutorial on building your own guided tours.',
        duration: '06:40'
      }
    ],
    articles: [
      {
        title: 'Google Earth Help',
        source: 'Support',
        description: 'Guide to keyboard shortcuts and creation tools.',
        url: 'https://support.google.com/earth'
      }
    ],
    communities: [
      {
        title: 'Google Earth Community',
        source: 'Forum',
        description: 'Sharing KMZ files and discoveries.',
        url: 'https://productforums.google.com/forum/#!forum/gec'
      }
    ]
  },

  // --- TENSORFLOW ---
  'tensorflow': {
    toolId: 'tensorflow',
    tagline: 'End-to-End Machine Learning Platform',
    overview: 'TensorFlow is the open-source machine learning platform that powers much of Google\'s AI. From research models to production deployment on edge devices with TensorFlow Lite, it is the comprehensive ecosystem for building ML applications.',
    useCases: [
      'Training deep learning models from scratch',
      'Deploying models to mobile (iOS/Android)',
      'Running ML in the browser with TensorFlow.js',
      'Production MLOps with TFX'
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
      },
      {
        name: 'Jason Brownlee',
        focus: 'Mastery',
        description: 'Machine Learning Mastery blog for deep technical guides.',
        platform: 'Blog',
        url: 'https://machinelearningmastery.com/'
      }
    ],
    videos: [
      {
        title: 'TensorFlow in 10 Minutes',
        channel: 'TensorFlow',
        description: 'Quick overview of the ecosystem components.',
        duration: '10:00'
      },
      {
        title: 'Deep Learning with Python and TensorFlow',
        channel: 'Sentdex',
        description: 'The definitive getting started series.',
        duration: '25:00'
      }
    ],
    articles: [
      {
        title: 'TensorFlow Documentation',
        source: 'Official',
        description: 'API references and tutorials for beginners to experts.',
        url: 'https://www.tensorflow.org/learn'
      },
      {
        title: 'Keras: The Python Deep Learning API',
        source: 'Keras',
        description: 'Guide to the high-level API used within TensorFlow.',
        url: 'https://keras.io/'
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

  // --- CODE WIKI ---
  'codewiki': {
    toolId: 'codewiki',
    tagline: 'The Engineering Knowledge Base',
    overview: 'Code Wiki acts as the central nervous system for engineering standards. It consolidates design patterns, API style guides, and AI coding best practices into a single, searchable source of truth for high-performance development.',
    useCases: [
      'Standardizing API design across teams',
      'Learning Google-scale engineering patterns',
      'Accessing AI-assisted coding guidelines',
      'Onboarding new engineers to the stack'
    ],
    creators: [
      {
        name: 'Google Engineering',
        focus: 'Standards',
        description: 'Authors of the "Software Engineering at Google" book.',
        platform: 'Book',
        url: 'https://abseil.io/resources/swe-book'
      }
    ],
    videos: [
      {
        title: 'Software Engineering at Google',
        channel: 'Google TechTalks',
        description: 'Talks on the culture of documentation and code quality.',
        duration: '45:00'
      }
    ],
    articles: [
      {
        title: 'Google Style Guides',
        source: 'GitHub',
        description: 'Public version of the legendary internal style guides.',
        url: 'https://google.github.io/styleguide/'
      }
    ],
    communities: [
      {
        title: 'Hacker News',
        source: 'YCombinator',
        description: 'Discussions on engineering culture and practices.',
        url: 'https://news.ycombinator.com/'
      }
    ]
  },

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
    creators: [
      {
        name: 'Jen Lehner',
        focus: 'Business & Marketing',
        description: 'Deep dives on competitive analysis and creating compelling case studies.',
        platform: 'Social',
        url: 'https://www.socialmediaexaminer.com/'
      },
      {
        name: 'Mihailo Zoin',
        focus: 'Structured Learning',
        description: 'Strategies for turning chaotic content into systematic knowledge systems.',
        platform: 'Medium',
        url: 'https://medium.com/'
      },
      {
        name: 'Julian Goldie',
        focus: 'Content Repurposing',
        description: 'Mastering the Audio Overview feature for lead gen and consulting.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@JulianGoldieSEO'
      },
      {
        name: 'BlazingZebra',
        focus: 'Real-World Workflows',
        description: 'Specific tips for integrating NotebookLM into daily productivity.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/'
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
      },
      {
        title: 'NotebookLM: A Guide With Practical Examples',
        channel: 'DataCamp',
        description: 'Academic focus: Consolidating info and generating structured notes.',
        duration: '15:10'
      },
      {
        title: 'The Secret Tool Creating $10K Content for Free',
        channel: 'Julian Goldie',
        description: 'Structuring source material for high-value analytical content.',
        duration: '08:55'
      },
      {
        title: '5 Strategies That 99% of Users Don\'t Know',
        channel: 'Mihailo Zoin',
        description: 'Advanced prompts to move from summarization to asset creation.',
        duration: '18:20'
      }
    ],
    articles: [
      {
        title: 'NotebookLM Help Center',
        source: 'Google Official',
        description: 'Step-by-step instructions on Mind Maps, Infographics, and Slide Decks.',
        url: 'https://support.google.com/notebooklm'
      },
      {
        title: 'The Complete Guide for Business',
        source: 'Devoteam',
        description: '8-step roadmap for enterprise adoption and knowledge retention.',
        url: '#'
      },
      {
        title: 'How to Use NotebookLM: Study Notes',
        source: 'Codecademy',
        description: 'Tutorial on uploading sources and creating structured presentations.',
        url: '#'
      },
      {
        title: 'The Ultimate Guide to Google NotebookLM',
        source: 'Deimos Cloud',
        description: 'IT use cases: Multi-cloud strategy and technical documentation.',
        url: '#'
      }
    ],
    communities: [
      {
        title: 'r/notebooklm',
        source: 'Reddit',
        description: 'The most active community. Real-world use cases, prompts, and dev discussions.',
        url: 'https://www.reddit.com/r/notebooklm/'
      },
      {
        title: 'Google DeepMind',
        source: 'X (Twitter)',
        description: 'Official updates on underlying models and feature rollouts.',
        url: 'https://twitter.com/GoogleDeepMind'
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
    creators: [
      {
        name: 'Julian Goldie',
        focus: 'Business Automation',
        description: 'Actionable guides on using "Vibe Coding" to build profitable business tools.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@JulianGoldieSEO'
      },
      {
        name: 'Richard Seroter',
        focus: 'Official Strategy',
        description: 'Chief Evangelist sharing best practices and integration strategies.',
        platform: 'Blog',
        url: 'https://cloud.google.com/blog'
      },
      {
        name: 'Ahmed Bahaa Eldin',
        focus: 'Entrepreneurship',
        description: 'Cost-effective, time-saving use cases for marketers and founders.',
        platform: 'Medium',
        url: 'https://medium.com/'
      },
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
        title: 'You\'re Missing Google\'s Most Powerful Free AI Tool',
        channel: 'Workflow Focus',
        description: 'Practical use cases for real-time document analysis and visuals.',
        duration: '12:30'
      },
      {
        title: 'The Ultimate Tool to Automate Everything',
        channel: 'Julian Goldie',
        description: 'Using the Build feature to rapidly prototype complex tasks.',
        duration: '14:20'
      },
      {
        title: 'Prompt Design Strategies | Gemini API',
        channel: 'Google for Developers',
        description: 'Must-watch on prompt chaining, XML delimiters, and long context.',
        duration: '18:45'
      },
      {
        title: 'How to Use Google AI Studio to Analyze YouTube',
        channel: 'Tutorial',
        description: 'Using the video input feature to summarize and extract key info.',
        duration: '08:15'
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
        title: 'Prompting Essentials Course',
        source: 'Coursera',
        description: 'Free structured course by Google experts on the 5-step framework.',
        url: 'https://www.coursera.org/'
      },
      {
        title: 'Advanced Prompt Design Strategies',
        source: 'Google Build',
        description: 'Deep dive into few-shot learning and agentic workflows.',
        url: 'https://ai.google.dev/docs/prompt_best_practices'
      },
      {
        title: 'Explore Capabilities',
        source: 'Official Docs',
        description: 'Details on Long Context, Structured Outputs (JSON), and Function Calling.',
        url: 'https://ai.google.dev/gemini-api/docs'
      }
    ],
    communities: [
      {
        title: 'Google for Developers Community',
        source: 'Official',
        description: 'Connect with other developers and Google engineers.',
        url: 'https://developers.google.com/community'
      },
      {
        title: 'r/AIAgentsInAction',
        source: 'Reddit',
        description: 'Real-world applications and agent prototyping discussions.',
        url: 'https://www.reddit.com/r/AIAgentsInAction/'
      }
    ]
  },

  // --- STITCH ---
  'stitch': {
    toolId: 'stitch',
    tagline: 'AI-Powered UI/UX & Code Gen',
    overview: 'Google Stitch is an AI-powered UI/UX design and code generation tool highly valuable for rapid prototyping. It focuses on effective prompt engineering, workflow integration with Figma, and converting sketches to production-ready UI code (React/Tailwind).',
    useCases: [
      'Rapid Prototyping (Wireframe > Code)',
      'Sketch-to-UI Conversion',
      'Generating React/HTML/Tailwind Components',
      'Multi-Screen App Flow Design'
    ],
    creators: [
      {
        name: 'KunalxArora',
        focus: 'Prompt Strategy',
        description: 'Highly structured guides on "speaking Stitch\'s language" and iterative prompting.',
        platform: 'Medium',
        url: 'https://medium.com/'
      },
      {
        name: 'UX Pilot',
        focus: 'Design Flow',
        description: 'Strategies for choosing between Standard Mode and Experimental Mode.',
        platform: 'Blog',
        url: 'https://uxpilot.ai/'
      },
      {
        name: 'Execute Automation',
        focus: 'Developer Handoff',
        description: 'Generating production-ready code for internal tools and dashboards.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/'
      },
      {
        name: 'The AI Fire',
        focus: 'Workflow',
        description: 'Privacy shields and managing consistency across multi-screen apps.',
        platform: 'Blog',
        url: '#'
      },
      {
        name: 'Codecademy',
        focus: 'Practical Prototyping',
        description: 'Step-by-step guides on building specific UIs (e.g., crypto dashboards).',
        platform: 'Social',
        url: 'https://www.codecademy.com/'
      }
    ],
    videos: [
      {
        title: 'Google Stitch Tutorial for Beginners',
        channel: 'YouTube',
        description: 'Designing a full app flow and comparing Standard vs. Experimental modes.',
        duration: '14:20'
      },
      {
        title: 'Easy Way to Make Amazing App Designs Fast',
        channel: 'YouTube',
        description: 'Building a professional investment portfolio tracker with Stitch.',
        duration: '10:15'
      },
      {
        title: 'Google Stitch: Free UI Designer',
        channel: 'YouTube',
        description: 'Effective prompting for early design exploration and Figma export.',
        duration: '08:45'
      },
      {
        title: 'Google Stitch 3.0: FULLY FREE Coding Agent',
        channel: 'World of AI',
        description: 'Automating repetitive coding tasks and generating complex flows.',
        duration: '12:30'
      },
      {
        title: 'Google Stitch: AI Reshaping Martech',
        channel: 'Metromax',
        description: 'Enterprise use cases for marketing campaigns and widget generation.',
        duration: '16:00'
      }
    ],
    articles: [
      {
        title: 'Stitch Prompt Guide',
        source: 'Google Developers',
        description: 'Official guide on prompt construction: Vibe, Device, Layout, Color.',
        url: 'https://developers.google.com/stitch'
      },
      {
        title: 'How to get the absolute best out of Stitch',
        source: 'Medium',
        description: 'Definitive guide on Sketch-to-UI and intentional prompting.',
        url: '#'
      },
      {
        title: 'Google Stitch AI Walkthrough',
        source: 'UX Pilot',
        description: 'Usage limits, privacy settings, and feature comparisons.',
        url: '#'
      },
      {
        title: 'Design Mobile App UI with Google Stitch',
        source: 'Codecademy',
        description: 'Practical exercise on designing a Crypto Dashboard UI.',
        url: '#'
      }
    ],
    communities: [
      {
        title: 'Google AI Developers Forum',
        source: 'Official Forum',
        description: 'Official answers and community-driven prompt examples.',
        url: '#'
      },
      {
        title: 'r/UI_Design',
        source: 'Reddit',
        description: 'Discussions on integrating AI-generated code into professional systems.',
        url: 'https://www.reddit.com/r/UI_Design/'
      }
    ]
  },

  // --- GOOGLE KEEP ---
  'keep': {
    toolId: 'keep',
    tagline: 'Capture Ideas, Powered by AI',
    overview: 'Google Keep is evolving from a simple note-taking app to an AI-powered idea capture system. With features like "Help me create", automatic list generation, and intelligent OCR, it serves as the second brain for the Google ecosystem.',
    useCases: [
      'Quick-capture of fleeting ideas',
      'AI-generated shopping and to-do lists',
      'Extracting text from images (OCR)',
      'Organizing research with labels and colors'
    ],
    creators: [
      {
        name: 'Simpletivity',
        focus: 'Productivity',
        description: 'Mastering Google Workspace tools for maximum efficiency.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@Simpletivity'
      },
      {
        name: 'Keep Product Team',
        focus: 'Updates',
        description: 'Official announcements on the Google Workspace blog.',
        platform: 'Blog',
        url: 'https://workspace.google.com/blog'
      }
    ],
    videos: [
      {
        title: '7 Google Keep Tips You Need to Know',
        channel: 'Simpletivity',
        description: 'Advanced organization techniques using labels and colors.',
        duration: '11:20'
      },
      {
        title: 'How to use "Help me create" in Keep',
        channel: 'Google Workspace',
        description: 'Short feature highlight on the new GenAI integration.',
        duration: '01:30'
      }
    ],
    articles: [
      {
        title: 'The Guide to "Help me create"',
        source: 'Google Support',
        description: 'Official documentation on using generative AI within notes.',
        url: 'https://support.google.com/keep'
      }
    ],
    communities: [
      {
        title: 'r/gsuite',
        source: 'Reddit',
        description: 'Discussion for all things Google Workspace, including Keep.',
        url: 'https://www.reddit.com/r/gsuite/'
      }
    ]
  },

  // --- OPAL ---
  'opal': {
    toolId: 'opal',
    tagline: 'Build Powerful AI Apps Without Code',
    overview: 'Opal is an experimental, no-code AI app builder that lets users create powerful, multi-step workflows (mini-apps) using natural language. It abstracts away the complexity of chaining prompts, models (like Gemini and Imagen), and tools into simple, shareable applications.',
    useCases: [
      'Building custom content writers & SEO tools',
      'Creating YouTube summarizers & quiz generators',
      'Automating repetitive productivity tasks',
      'Chaining multiple AI models (Gemini, Veo) visually'
    ],
    creators: [
      {
        name: 'Julian Goldie',
        focus: 'Business & Automation',
        description: 'Shows how to build profitable SEO and lead-gen tools using Opal.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/@JulianGoldieSEO'
      },
      {
        name: 'BlazingZebra',
        focus: 'Productivity',
        description: 'Hands-on tutorials for everyday time-saving automations.',
        platform: 'YouTube',
        url: 'https://www.youtube.com/'
      },
      {
        name: 'KDnuggets',
        focus: 'Technical Deep Dive',
        description: 'Structured articles on node logic and multi-step workflow design.',
        platform: 'Blog',
        url: 'https://www.kdnuggets.com/'
      },
      {
        name: 'The AI Fire',
        focus: 'No-Code Prototyping',
        description: 'Beginner-friendly guides on generating apps from plain English.',
        platform: 'Blog',
        url: '#'
      },
      {
        name: 'Google Developers',
        focus: 'Official Guides',
        description: 'The source for understanding model integration and gallery templates.',
        platform: 'Blog',
        url: 'https://developers.googleblog.com/'
      }
    ],
    videos: [
      {
        title: 'Google Opal Tutorial: Beginner\'s Guide',
        channel: 'DataCamp',
        description: 'Comprehensive guide on natural language editing and visual workflows.',
        duration: '15:45'
      },
      {
        title: 'I Built 5 Profitable Apps in 10 Minutes',
        channel: 'Julian Goldie',
        description: 'Building Blog Empires, Lead Magnets, and Proposal Writers.',
        duration: '12:20'
      },
      {
        title: '3 Automations That Save Me HOURS',
        channel: 'BlazingZebra',
        description: 'Practical examples of automating repetitive daily tasks.',
        duration: '09:15'
      },
      {
        title: 'Google Opal: The best FREE AI Super Agent!',
        channel: 'AI Automation',
        description: 'Deep dive into building a workflow from scratch with Voice-mode.',
        duration: '18:30'
      },
      {
        title: 'How to Use Google Opal AI (Tutorial)',
        channel: 'Tech Guide',
        description: 'Step-by-step on connecting steps and setting outputs to Docs/Slides.',
        duration: '10:10'
      }
    ],
    articles: [
      {
        title: 'Quickstart | Opal',
        source: 'Google Developers',
        description: 'Official structured walkthrough of the editor and tool integration.',
        url: 'https://opal.google/landing'
      },
      {
        title: 'Comprehensive AI Intelligence Hub',
        source: 'Opal Guide',
        description: 'Overview of key features, limitations, and productivity use cases.',
        url: '#'
      },
      {
        title: 'Building AI Automations with Google Opal',
        source: 'KDnuggets',
        description: 'Technical breakdown of Input, Generate, and Output nodes.',
        url: 'https://www.kdnuggets.com/'
      },
      {
        title: 'The Ultimate Guide to Google Opal AI',
        source: 'MarketingBox',
        description: 'From Vibe to App: A clear process for Marketers and Writers.',
        url: '#'
      }
    ],
    communities: [
      {
        title: 'Opal Gallery',
        source: 'Official',
        description: 'Remixable templates built by Google and the community.',
        url: 'https://opal.google/landing'
      },
      {
        title: 'r/AISEOInsider',
        source: 'Reddit',
        description: 'Advanced business use cases for Opal automation.',
        url: 'https://www.reddit.com/r/AISEOInsider/'
      }
    ]
  },

  // Default fallback data for other tools to prevent empty pages
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
  return learningResourcesData[id] || { ...learningResourcesData['default'], toolId: id };
};