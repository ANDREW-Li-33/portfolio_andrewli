export type Tab = 'home' | 'projects' | 'experience' | 'research' | 'resume' | 'about' | 'contact';

export type Theme = 'dark' | 'light';

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  tags?: string[];
  inProgress?: boolean;
}
