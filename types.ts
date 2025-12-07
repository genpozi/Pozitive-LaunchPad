import React from 'react';

export enum ToolCategory {
  ALL = 'All',
  CREATIVE_STUDIO = 'Creative Studio',
  DEV_LAB = 'Dev & Build',
  MODELS_FRAMEWORKS = 'Models & Frameworks',
  RESEARCH = 'Research & Analysis',
  WORKSPACE = 'Workspace',
  PLATFORM = 'Platform & Utils',
  // Design Specific Categories
  GENERATIVE_UI = 'Generative UI',
  IMAGE_GENERATION = 'Image Generation',
  VIDEO_FX = 'Video & FX',
  VECTOR_3D = '3D & Vector',
  DESIGN_TOOL = 'Design Tool',
  // Build Specific Categories
  IDE_AGENT = 'IDE & Agents',
  LLM_OPS = 'LLM Ops & Routing',
  BACKEND_INFRA = 'Backend & Infra',
  AI_SDK = 'AI SDKs & Frameworks'
}

export enum PricingModel {
  OPEN_SOURCE = 'Open Source',
  FREEMIUM = 'Freemium',
  PAID = 'Paid',
  FREE = 'Free'
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: ToolCategory;
  tags: string[];
  icon: string; // Key for the icon component map
  featured?: boolean;
  isNew?: boolean;
  color?: string; // Hex color for accent
  pricing?: PricingModel;
  toolbar?: boolean; // If true, appears in the Quick Access Dock
}

export type IconMap = {
  [key: string]: React.ElementType;
};

export type Page = 'GOOGLE_NEXUS' | 'DESIGN_SYSTEMS' | 'BUILD_SYSTEMS';

export interface ResearchResult {
  advice: string;
  toolIds: string[];
}