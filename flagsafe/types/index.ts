// 安全红线类型
export interface RedLine {
  id: string;
  icon: string;
  titleEn: string;
  titleZh: string;
  description: string;
}

// 研究项目类型
export interface ResearchProject {
  id: string;
  icon?: string;
  title: string;
  titleEn: string;
  keyword?: string;
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
}

// 研究类别类型
export interface ResearchCategory {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  icon?: string;
  projects: ResearchProject[];
}

// 平台模块类型
export interface PlatformModule {
  id: string;
  icon: string;
  emoji: string;
  title: string;
  slogan: string;
  description: string;
  color: 'red' | 'blue' | 'purple';
  features: string[];
  link?: string;
}

// 新闻资讯类型
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  image?: string;
  link?: string;
}

// 漏洞报告类型
export interface VulnerabilityReport {
  id: string;
  vulnId: string;
  date: string;
  model: string;
  type: string;
  reporter: {
    name: string;
    avatar: string;
  };
  status: 'fixed' | 'processing' | 'pending';
}

// 合作伙伴类型
export interface Partner {
  id: string;
  name: string;
  logo?: string;
  type: 'university' | 'tech' | 'lab' | 'institute' | 'model' | 'security';
}
