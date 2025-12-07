import { Tool, ToolCategory, PricingModel } from '../types';

export const buildToolsData: Tool[] = [
  // --- IDE & AGENTS (CODE) ---
  {
    id: 'lovable',
    name: 'Lovable',
    description: 'The GPT Engineer. It builds, debugs, and deploys real full-stack apps from conversation.',
    url: 'https://lovable.dev/',
    category: ToolCategory.IDE_AGENT,
    tags: ['Agent', 'Fullstack', 'Hot'],
    icon: 'Bot',
    featured: true,
    isNew: true,
    toolbar: true,
    pricing: PricingModel.PAID,
    color: '#3B82F6'
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    description: 'The first agentic IDE by Codeium. It flows with you, understanding deep context.',
    url: 'https://codeium.com/windsurf',
    category: ToolCategory.IDE_AGENT,
    tags: ['IDE', 'Agent', 'Flow'],
    icon: 'CursorLogo',
    featured: true,
    isNew: true,
    toolbar: true,
    pricing: PricingModel.FREEMIUM,
    color: '#00C8BC'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'The AI code editor. Built on VS Code, it uses custom models to predict your next edit.',
    url: 'https://cursor.sh/',
    category: ToolCategory.IDE_AGENT,
    tags: ['IDE', 'Editor', 'Copilot'],
    icon: 'CursorLogo',
    featured: true,
    toolbar: true,
    pricing: PricingModel.FREEMIUM,
    color: '#000000'
  },
  {
    id: 'zed',
    name: 'Zed',
    description: 'High-performance, multiplayer code editor from the creators of Atom. AI-native.',
    url: 'https://zed.dev/',
    category: ToolCategory.IDE_AGENT,
    tags: ['Performance', 'Rust', 'Editor'],
    icon: 'Zap',
    isNew: true,
    toolbar: true,
    pricing: PricingModel.OPEN_SOURCE,
    color: '#d4aa71'
  },
  {
    id: 'bolt-new',
    name: 'Bolt.new',
    description: 'Prompt, run, edit, and deploy full-stack web apps directly in the browser.',
    url: 'https://bolt.new/',
    category: ToolCategory.IDE_AGENT,
    tags: ['WebContainers', 'Fullstack', 'No-Setup'],
    icon: 'Container',
    featured: true,
    isNew: true,
    toolbar: true,
    pricing: PricingModel.FREEMIUM,
    color: '#FFFFFF'
  },
  {
    id: 'marblism',
    name: 'Marblism',
    description: 'Generate a fully functional SaaS boilerplate from a single prompt. React/Node.',
    url: 'https://marblism.com/',
    category: ToolCategory.IDE_AGENT,
    tags: ['SaaS', 'Boilerplate', 'Generator'],
    icon: 'Hammer',
    isNew: true,
    pricing: PricingModel.FREEMIUM,
    color: '#F472B6'
  },
  {
    id: 'trae',
    name: 'Trae',
    description: 'The adaptive AI IDE by ByteDance. Customize your coding workflow with smart agents.',
    url: 'https://www.trae.ai/',
    category: ToolCategory.IDE_AGENT,
    tags: ['IDE', 'Adaptive', 'New'],
    icon: 'Code2',
    isNew: true,
    pricing: PricingModel.FREE,
    color: '#4F46E5'
  },

  // --- LLM OPS & ROUTING (CONNECT) ---
  {
    id: 'openrouter',
    name: 'OpenRouter',
    description: 'A unified interface for LLMs. Access Gemini, Claude, Llama, and more with one API.',
    url: 'https://openrouter.ai/',
    category: ToolCategory.LLM_OPS,
    tags: ['API', 'Aggregator', 'Crypto'],
    icon: 'Network',
    featured: true,
    toolbar: true,
    pricing: PricingModel.PAID,
    color: '#6366f1'
  },
  {
    id: 'groq',
    name: 'Groq',
    description: 'The fastest AI inference chip. Serving open-source models at lightning speeds.',
    url: 'https://groq.com/',
    category: ToolCategory.LLM_OPS,
    tags: ['Inference', 'Hardware', 'Speed'],
    icon: 'GroqLogo',
    isNew: true,
    toolbar: true,
    pricing: PricingModel.FREEMIUM,
    color: '#f55036'
  },
  {
    id: 'ollama',
    name: 'Ollama',
    description: 'Get up and running with large language models locally. Private and fast.',
    url: 'https://ollama.com/',
    category: ToolCategory.LLM_OPS,
    tags: ['Local', 'Privacy', 'Offline'],
    icon: 'OllamaLogo',
    featured: true,
    toolbar: true,
    pricing: PricingModel.OPEN_SOURCE,
    color: '#FFFFFF'
  },
  {
    id: 'langsmith',
    name: 'LangSmith',
    description: 'Platform for debugging, testing, evaluating, and monitoring your LLM applications.',
    url: 'https://www.langchain.com/langsmith',
    category: ToolCategory.LLM_OPS,
    tags: ['Observability', 'Testing', 'Debug'],
    icon: 'Search',
    pricing: PricingModel.FREEMIUM,
    color: '#1c3c3c'
  },

  // --- BACKEND & INFRA (SHIP) ---
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'The open source Firebase alternative. Postgres database with built-in Vector support for AI.',
    url: 'https://supabase.com/',
    category: ToolCategory.BACKEND_INFRA,
    tags: ['Database', 'Vector', 'Auth'],
    icon: 'SupabaseLogo',
    featured: true,
    toolbar: true,
    pricing: PricingModel.OPEN_SOURCE,
    color: '#3ECF8E'
  },
  {
    id: 'vercel-ai',
    name: 'Vercel AI SDK',
    description: 'The TypeScript library for building AI-powered user interfaces.',
    url: 'https://sdk.vercel.ai/docs',
    category: ToolCategory.AI_SDK,
    tags: ['Library', 'Streaming', 'React'],
    icon: 'VercelLogo',
    featured: true,
    toolbar: true,
    pricing: PricingModel.OPEN_SOURCE,
    color: '#000000'
  },
  {
    id: 'pinecone',
    name: 'Pinecone',
    description: 'The managed vector database for high-performance AI applications.',
    url: 'https://www.pinecone.io/',
    category: ToolCategory.BACKEND_INFRA,
    tags: ['Vector DB', 'Search', 'RAG'],
    icon: 'Database',
    pricing: PricingModel.FREEMIUM,
    color: '#132F4C'
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Serverless Postgres. Scales to zero. Perfect for modern AI fleets.',
    url: 'https://neon.tech/',
    category: ToolCategory.BACKEND_INFRA,
    tags: ['Database', 'Serverless', 'Postgres'],
    icon: 'Database',
    isNew: true,
    pricing: PricingModel.FREEMIUM,
    color: '#00E599'
  },
  {
    id: 'docker',
    name: 'Docker',
    description: 'Securely build, share and run any application, anywhere.',
    url: 'https://www.docker.com/',
    category: ToolCategory.BACKEND_INFRA,
    tags: ['Container', 'DevOps'],
    icon: 'DockerLogo',
    toolbar: true,
    pricing: PricingModel.OPEN_SOURCE,
    color: '#2496ED'
  }
];
