export interface ResearchProject {
  id: string;
  title: string;
  titleEn: string;
  category: 'self-replication' | 'power-seeking' | 'weaponization' | 'cyberattack' | 'deception';
  description: string;
  descriptionEn: string;
  image?: string;
  links?: {
    paper?: string;
    code?: string;
    dataset?: string;
    demo?: string;
  };
  authors?: string[];
  venue?: string;
  year?: number;
  contentPath?: string; // MDX 文件路径（如 'deception-sandbox'）
}

export interface ResearchCategory {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon?: string;
  projects: ResearchProject[];
}
