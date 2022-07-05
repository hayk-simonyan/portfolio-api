export interface Project {
  id: string;
  title: string;
  description: string[];
  techStack: string[];
  url?: string;
  sourceCode?: string;
  dates: string[];
  imageUrl?: string;
}
