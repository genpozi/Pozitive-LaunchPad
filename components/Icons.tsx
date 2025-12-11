import React from 'react';
import { 
  Sparkles, 
  Brain, 
  Code2, 
  FileText, 
  Image as ImageIcon, 
  Music, 
  Video, 
  Database, 
  Cloud, 
  Terminal, 
  BookOpen, 
  LayoutGrid, 
  Calendar, 
  Mail, 
  HardDrive, 
  Search,
  MessageSquare,
  Cpu,
  PenTool,
  FlaskConical,
  Youtube,
  Globe,
  Briefcase,
  Layers,
  Shield,
  Box,
  Palette,
  Workflow,
  GraduationCap,
  Map,
  Zap,
  Github,
  CreditCard,
  Gem,
  MonitorPlay,
  Component,
  Wand2,
  MousePointer2,
  Lock,
  Download,
  Dna,
  Move3d,
  Smartphone,
  Glasses,
  Film,
  Server,
  Network,
  Bot,
  Container,
  Rocket,
  Type,
  Presentation,
  Hammer,
  ArrowUpRight,
  Lightbulb,
  Video as VideoIcon,
  Mic,
  Twitter,
  Linkedin,
  PlayCircle,
  Sliders,
  Disc,
  Gamepad2,
  Infinity,
  Bookmark
} from 'lucide-react';
import { IconMap } from '../types';

// --- Custom Brand Icons (Monochrome for System Consistency) ---

const GoogleG = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
  </svg>
);

const GoogleGemini = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
     <path d="M13.873 3.06c.496-1.586 2.76-1.586 3.255 0l1.248 3.996c.264.845.928 1.51 1.774 1.774l3.996 1.248c1.586.496 1.586 2.76 0 3.255l-3.996 1.248c-.845.264-1.51.928-1.774 1.774l-1.248 3.996c-.496 1.586-2.76 1.586-3.255 0l-1.248-3.996c-.264-.845-.928-1.51-1.774-1.774l-3.996-1.248c-1.586-.496-1.586-2.76 0-3.255l3.996-1.248c.845-.264 1.51-.928 1.774-1.774l1.248-3.996zM3.82 11.898c.31-1.004 1.748-1.004 2.059 0l.43 1.383c.17.545.597.973 1.142 1.142l1.383.43c1.004.31 1.004 1.748 0 2.059l-1.383.43c-.545.17-.973.597-1.142 1.142l-.43 1.383c-.31 1.004-1.748 1.004-2.059 0l-.43-1.383c-.17-.545-.597-.973-1.142-1.142l-1.383-.43c-1.004-.31-1.004-1.748 0-2.059l1.383-.43c.545-.17.973-.597 1.142-1.142l.43-1.383z"/>
  </svg>
);

const VertexAILogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M11 5.5L3 19h18L11 5.5zm0 5l4 7H7l4-7z"/>
    </svg>
);

const GoogleSlidesLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.5 13.5v-3l3.5 1.5-3.5 1.5zM14 16H9v-1h5v1zm5-11H5v14h14V5z" />
    </svg>
);

const GoogleFormsLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H8v-2h4v2zm2-4H8v-2h6v2zm0-4H8V7h6v2z" />
    </svg>
);

const GoogleSitesLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z" />
    </svg>
);

const DeepMindLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/>
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-5-9.5a5 5 0 1 1 10 0 5 5 0 0 1-10 0z"/>
    </svg>
);

const TensorFlowLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.66 2.07L12.5 1.5l.84.57 9 6 .84.56v1.12l-.84.56-9 6-.84.57-.84-.57-9-6-.84-.56V8.63l.84-.56 9-6zm.84 2.82l-5.63 3.75L12.5 12.4l5.63-3.76-5.63-3.75zm-6.47 5.56v5.3l5.63 3.75v-5.3l-5.63-3.75zm12.94 0l-5.63 3.75v5.3l5.63-3.75v-5.3z"/>
    </svg>
);

const GemmaLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l-10 5 10 5 10-5-10-5z"/>
    </svg>
);

const KaggleLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M18.82 24H24V0H0v24h18.82zM6.6 3.6h4.3v6.7l6.9-6.7h5.8l-8.6 8.3 8.8 11.1h-5.7l-6.3-8-3.1 3v5H6.6V3.6z"/>
    </svg>
);

const ColabLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 6a4.5 4.5 0 1 1-4.5 4.5 4.5 4.5 0 0 1 4.5-4.5m0-2a6.5 6.5 0 1 0 6.5 6.5A6.5 6.5 0 0 0 16.5 4zM7.5 13.5A4.5 4.5 0 1 1 12 18a4.5 4.5 0 0 1-4.5-4.5m0 6.5a6.5 6.5 0 1 0-6.5-6.5 6.5 6.5 0 0 0 6.5 6.5z"/>
    </svg>
);

const JaxLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 12l10 10 10-10L12 2zm0 18l-8-8 8-8 8 8-8 8z"/>
        <path d="M12 8l-4 4 4 4 4-4-4-4z"/>
    </svg>
);

const GoogleDrive = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 87.3 78" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6 66.85L25.3 33.35H87.3L68.7 66.85H6.6ZM30.3 24.85L19.6 42.65L0 8.35L17.4 8.35L30.3 24.85ZM55.6 24.85L36.9 57.35L29.3 43.85L47.6 11.35L55.6 24.85ZM59.9 8.35L87.3 54.35L79.3 66.85L42.6 3.35H59.9V8.35Z"/>
  </svg>
);

const GoogleDocs = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
);

const GoogleSheets = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
        <path d="M14 3v5h5M10 12h4M10 16h4"/>
    </svg>
);

const GooglePhotos = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M5 19h4v4H5c-2.21 0-4-1.79-4-4s1.79-4 4-4v4z"/>
        <path d="M19 5h-4V1h4c2.21 0 4 1.79 4 4s-1.79 4-4 4v-4z"/>
        <path d="M5 5v4h4V5c0-2.21-1.79-4-4-4S1 2.79 1 5h4z"/>
        <path d="M19 19v-4h-4v4c0 2.21 1.79 4 4 4s4-1.79 4-4h-4z"/>
    </svg>
);

const GoogleMaps = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
);

const GoogleEarthLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
);

const GoogleMeet = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
         <path d="M14 8v8l5 4V4l-5 4z"/>
         <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z"/>
    </svg>
);

const NotebookLMLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <path d="M12 8l2 2 4-4"/>
    </svg>
);

const IlluminateLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <path d="M10 8l6 4-6 4V8z" fill="black" stroke="none" />
    </svg>
);

const FirebaseLogo = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89 15.672L6.255 2.147A.428.428 0 016.92 1.96l2.91 2.684-4.807 9.176c-.237.452-.907.568-1.133 1.852z"/>
    <path d="M12.91 6.376l-2.03-3.92a.428.428 0 00-.77 0l-4.14 8.01 6.94-4.09z"/>
    <path d="M13.666 7.64l3.186-6.155a.427.427 0 01.766.015l5.353 10.026c.214.402.13.892-.192 1.22L12 22.5 13.666 7.64z"/>
  </svg>
);

const AndroidLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6 9.42l1.6-2.77c.14-.24.06-.55-.18-.69a.505.505 0 0 0-.69.18l-1.61 2.8C15.28 8.35 13.69 8 12 8c-1.69 0-3.28.35-4.72.93L5.67 6.13a.505.505 0 0 0-.69-.18c-.24.14-.32.45-.18.69l1.6 2.77A9.43 9.43 0 0 0 2 16.5h20c0-2.85-1.57-5.36-4.4-7.08zM7.5 13.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm9 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
    </svg>
);

const FlutterLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357L14.314 0zm.014 11.072L7.857 17.53l3.693 3.693 2.779-2.777 6.355 6.355h7.375L14.329 11.072z"/>
    </svg>
);

const FigmaLogo = ({ size = 24, className = "" }) => (
   <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2h8c2.21 0 4 1.79 4 4s-1.79 4-4 4H8v-8z" />
        <path d="M12 10c2.21 0 4 1.79 4 4s-1.79 4-4 4H8v-8h4z" />
        <path d="M4 6c0-2.21 1.79-4 4-4v8H8c-2.21 0-4-1.79-4-4z" />
        <path d="M4 14c0-2.21 1.79-4 4-4v8H8c-2.21 0-4-1.79-4-4z" />
        <path d="M8 22c-2.21 0-4-1.79-4-4s1.79-4 4-4v8z" />
   </svg>
);

const BlenderLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2.5a1.5 1.5 0 0 1 3 0v3.5h-3V2.5z"/>
        <path d="M3.6 8.5c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2S-0.6 15-0.6 12.7s1.9-4.2 4.2-4.2z" transform="translate(6 3)"/>
        <path d="M17.8 7.6L15.3 11a6 6 0 1 0 2.5 1.7l3.6-4.8a1 1 0 1 0-1.6-1.2l-2 2.9z"/>
    </svg>
);

const SupabaseLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.966.52a.75.75 0 0 0-.616.284L4.208 10.222a.75.75 0 0 0 .598 1.21h4.632v11.75a.75.75 0 0 0 1.272.505l8.725-11.417a.75.75 0 0 0-.594-1.205h-6.265V1.025a.75.75 0 0 0-.61-.505z" />
    </svg>
);

const VercelLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1L24 22H0L12 1Z" />
    </svg>
);

const PythonLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-2 0-3.5 1-4 2.5V5h7V3h-1v1h-2V3.5C11.5 2.5 12 2 13.5 2h3c1.5 0 2 .5 2 2v4h-5v3h5v-3c0-1.5-.5-2-2-2h-3c-1.5 0-2-.5-2-2V2c0-1.5-.5-2-2-2h-1.5zm-5 6C5.5 6 5 6.5 5 8v10c0 1.5.5 2 2 2h3c1.5 0 2-.5 2-2v-4h5v-3h-5v3c0 1.5.5 2 2 2h-3c-1.5 0-2 .5-2 2V8c0-1.5.5-2 2-2h1.5V6H7z"/>
    </svg>
);

const CursorLogo = ({ size = 24, className = "" }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 22L20 6L4 6V22Z" fillOpacity="0.5"/>
        <path d="M14 12L4 22V12H14Z" />
     </svg>
);

const AdobeLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M15.1 2H24v20L15.1 2zM8.9 2H0v20L8.9 2zM12 9.4L17.6 22h-3.8l-1.6-4h-4.3l-.7 1.7h-2L12 9.4z"/>
    </svg>
);

const MidjourneyLogo = ({ size = 24, className = "" }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 17 21 19 18C21 15 21 10 19 7C17 4 12 3 12 3C12 3 7 4 5 7C3 10 3 15 5 18C7 21 12 22 12 22ZM12 18C13.5 18 15 17 15 14C15 11 13.5 10 12 10C10.5 10 9 11 9 14C9 17 10.5 18 12 18Z" />
     </svg>
);

const OllamaLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8 9.8c-.8-.8-1.7-.8-2.5-.2-.8-.8-2.1-1.3-3.5-1.3s-2.7.5-3.5 1.3c-.8-.6-1.7-.6-2.5.2-1.9 1.9-1.9 5 0 6.9 1.9 1.9 5 1.9 6.9 0 1.9 1.9 5 1.9 6.9 0 1.9-1.9 1.9-5.1.2-6.9zm-9.3 5.4c-1.1 1.1-2.9 1.1-4 0-1.1-1.1-1.1-2.9 0-4 1.1-1.1 2.9-1.1 4 0 1.1 1.1 1.1 2.9 0 4zm9 0c-1.1 1.1-2.9 1.1-4 0-1.1-1.1-1.1-2.9 0-4 1.1-1.1 2.9-1.1 4 0 1.1 1.1 1.1 2.9 0 4z"/>
        <path d="M7.5 12.2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9-.9.4-.9.9.4.9.9.9zM16.5 12.2c.5 0 .9-.4.9-.9s-.4-.9-.9-.9-.9.4-.9.9.4.9.9.9z"/>
    </svg>
);

const GroqLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16v2H4V4zm0 6h10v2H4v-2zm0 6h16v2H4v-2z" />
    </svg>
);

const DockerLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
         <path d="M13.9 6.5h1.9v1.9h-1.9V6.5zm-2.5 0h1.9v1.9h-1.9V6.5zm-2.6 0h1.9v1.9H8.8V6.5zm-2.5 2.6h1.9v1.9H6.3V9.1zm12.6 0h1.9v1.9h-1.9V9.1zm-2.5 0h1.9v1.9h-1.9V9.1zm-2.6 0h1.9v1.9h-1.9V9.1zm-2.5 0h1.9v1.9H8.8V9.1zm-2.5 0h1.9v1.9H6.3V9.1zm15.1 2.6h1.9v1.9h-1.9v-1.9zm-2.5 0h1.9v1.9h-1.9v-1.9zm-2.5 0h1.9v1.9h-1.9v-1.9zm-2.6 0h1.9v1.9h-1.9v-1.9zm-2.5 0h1.9v1.9H8.8v-1.9zm-2.5 0h1.9v1.9H6.3v-1.9zM22.2 14c-.6 0-1.1.2-1.5.5-.3-1.8-1.9-3.2-3.8-3.2H4.8c-2.1 0-3.8 1.7-3.8 3.8v4.6h21.2v-5.7z"/>
    </svg>
);

const LumaLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 22h20L12 2zm0 4.2L18.4 20H5.6L12 6.2z"/>
    </svg>
);

const RunwayLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
         <path d="M6 2h6c3.3 0 6 2.7 6 6s-2.7 6-6 6H9v8H6V2zm3 9h3c1.7 0 3-1.3 3-3s-1.3-3-3-3H9v6z"/>
    </svg>
);

const HuggingFaceLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9h2v2H8V9zm6 0h2v2h-2V9zM6 15h12v2H6v-2z"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
);

const RecraftLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h10v4H4V4zm0 6h16v4H4v-4zm0 6h7v4H4v-4z"/>
    </svg>
);

const SplineLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" opacity="0.2"/>
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
    </svg>
);

const RiveLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2h6c3.3 0 6 2.7 6 6 0 2.3-1.3 4.3-3.2 5.3L18 22h-4.4l-4.6-8H4v8H0V2h4zm4 8h2c1.1 0 2-.9 2-2s-.9-2-2-2H4v4h4z"/>
    </svg>
);

const BoltLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2L4 14h6l-2 8 10-12h-6l2-8z"/>
    </svg>
);

const OpenRouterLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="12" cy="18" r="3" />
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const PineconeLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5l5.5 3.4-2.3 1.4-3.2-2V7.3zm-5.5 3.4L12 4.5v2.8l-3.2 2-2.3-1.4zM12 20.5l-6-3.8v-7.6l2.3 1.4 3.7 2.3 3.7-2.3 2.3-1.4v7.6l-6 3.8z"/>
    </svg>
);

const NeonLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h4v16H4V4zm12 0h4v16h-4V4zM4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2"/>
    </svg>
);

const LangChainLogo = ({ size = 24, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
         <path d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
         <path d="M14 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
         <path d="M8 8l8 8" stroke="currentColor" strokeWidth="2" />
    </svg>
);


export const Icons: IconMap = {
  Sparkles,
  Brain,
  Code2,
  FileText,
  ImageIcon,
  Music,
  Video,
  Database,
  Cloud,
  Terminal,
  BookOpen,
  LayoutGrid,
  Calendar,
  Mail,
  HardDrive,
  Search,
  MessageSquare,
  Cpu,
  PenTool,
  FlaskConical,
  Youtube,
  Globe,
  Briefcase,
  Layers,
  Shield,
  Box,
  Palette,
  Workflow,
  GraduationCap,
  Map,
  Zap,
  Github,
  CreditCard,
  Gem,
  MonitorPlay,
  Component,
  Wand2,
  MousePointer2,
  Lock,
  Download,
  Dna,
  Move3d,
  Smartphone,
  Glasses,
  Film,
  Server,
  Network,
  Bot,
  Container,
  Rocket,
  Type,
  Presentation,
  Hammer,
  ArrowUpRight,
  Lightbulb,
  VideoIcon,
  Mic,
  Twitter,
  Linkedin,
  PlayCircle,
  Sliders,
  Disc,
  Gamepad2,
  Infinity,
  Bookmark,
  // Brand Icons Mapped
  GoogleG,
  GoogleGemini,
  GoogleDrive,
  GoogleDocs,
  GoogleSheets,
  GoogleSlidesLogo,
  GoogleFormsLogo,
  GoogleSitesLogo,
  GooglePhotos,
  GoogleMaps,
  GoogleMeet,
  VertexAILogo,
  FirebaseLogo,
  AndroidLogo,
  FlutterLogo,
  FigmaLogo,
  BlenderLogo,
  SupabaseLogo,
  VercelLogo,
  PythonLogo,
  CursorLogo,
  AdobeLogo,
  MidjourneyLogo,
  OllamaLogo,
  GroqLogo,
  DockerLogo,
  LumaLogo,
  RunwayLogo,
  HuggingFaceLogo,
  TensorFlowLogo,
  KaggleLogo,
  JaxLogo,
  GemmaLogo,
  ColabLogo,
  NotebookLMLogo,
  IlluminateLogo,
  GoogleEarthLogo,
  DeepMindLogo,
  RecraftLogo,
  SplineLogo,
  RiveLogo,
  BoltLogo,
  OpenRouterLogo,
  PineconeLogo,
  NeonLogo,
  LangChainLogo
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = Icons[name] || Sparkles;
  return <IconComponent className={className} size={size} />;
};