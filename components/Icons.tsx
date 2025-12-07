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
  ArrowUpRight
} from 'lucide-react';
import { IconMap } from '../types';

// --- Custom Brand Icons ---

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

const GoogleDrive = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 87.3 78" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6 66.85L25.3 33.35H87.3L68.7 66.85H6.6ZM30.3 24.85L19.6 42.65L0 8.35L17.4 8.35L30.3 24.85ZM55.6 24.85L36.9 57.35L29.3 43.85L47.6 11.35L55.6 24.85ZM59.9 8.35L87.3 54.35L79.3 66.85L42.6 3.35H59.9V8.35Z"/>
  </svg>
);

const FirebaseLogo = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89 15.672L6.255 2.147A.428.428 0 016.92 1.96l2.91 2.684-4.807 9.176c-.237.452-.907.568-1.133 1.852z"/>
    <path d="M12.91 6.376l-2.03-3.92a.428.428 0 00-.77 0l-4.14 8.01 6.94-4.09z"/>
    <path d="M13.666 7.64l3.186-6.155a.427.427 0 01.766.015l5.353 10.026c.214.402.13.892-.192 1.22L12 22.5 13.666 7.64z"/>
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
  // Brand Icons Mapped
  GoogleG,
  GoogleGemini,
  GoogleDrive,
  FirebaseLogo,
  FigmaLogo,
  BlenderLogo,
  SupabaseLogo,
  VercelLogo,
  PythonLogo,
  CursorLogo,
  AdobeLogo,
  MidjourneyLogo
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
