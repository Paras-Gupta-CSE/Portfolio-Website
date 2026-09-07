export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'Full-Stack' | 'AI & Systems' | 'Cloud & DevOps' | 'Mobile & Web';
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics: ProjectMetric[];
  keyFeatures: string[];
  architecture: string[];
  role: string;
  year: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  likes: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  createdAt: string;
  status: 'received' | 'in_review' | 'responded';
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  experience: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  summary: string;
  skills: SkillItem[];
}

export interface ProfileInfo {
  name: string;
  tagline: string;
  role: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  location: string;
  availability: string;
  yearsOfExperience: number;
  projectsShipped: number;
  codeReviews: number;
  uptimeCommitment: string;
  bio: string;
  highlights: string[];
}
