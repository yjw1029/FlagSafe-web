import { ResearchCategory, ResearchProject } from '@/types';

// 欺骗类别下的研究项目
const deceptionProjects: ResearchProject[] = [
  {
    id: 'deception-sandbox',
    icon: 'venetian-mask',
    title: '欺骗诱导沙箱',
    titleEn: 'Deception-Induced Sandbox',
    keyword: '智能体博弈 (Agent Gaming)',
    category: 'deception',
    description: '构建多智能体博弈环境，诱导 Agent 在动态交互中暴露深层的欺骗意图与策略。',
    descriptionEn: 'Building a multi-agent gaming environment to induce agents to expose deep deceptive intentions and strategies in dynamic interactions.',
    image: '/research/deception-sandbox.jpg',
    contentPath: 'deception-sandbox',
    links: {
      paper: '#',
      code: '#',
      dataset: '#'
    }
  },
  {
    id: 'mllm-deception',
    icon: 'image',
    title: '多模态欺骗检测',
    titleEn: 'Multimodal Deception Detection',
    keyword: '跨模态鉴伪 (Multi-modal)',
    category: 'deception',
    description: '针对图文多模态大模型，研究其在复杂场景下的视觉与文本欺骗行为识别。',
    descriptionEn: 'Research on visual and textual deception detection for multimodal large models in complex scenarios.',
    image: '/research/mllm-deception.jpg',
    contentPath: 'mllm-deception',
    links: {
      paper: '#',
      code: '#',
      dataset: '#'
    }
  },
  {
    id: 'agent-deception',
    title: 'Agent欺骗检测',
    titleEn: 'Agent Deception Detection',
    category: 'deception',
    description: '针对AI Agent的欺骗行为检测，包括意图欺骗、行为欺骗等多个维度。',
    descriptionEn: 'Deception detection for AI Agents, including intent deception, behavioral deception and other dimensions.',
    image: '/research/agent-deception.jpg',
    contentPath: 'agent-deception',
    links: {
      paper: '#',
      code: '#',
      dataset: '#',
      demo: '#'
    }
  },
  {
    id: 'text-deception',
    icon: 'bar-chart-3',
    title: '纯文本欺骗检测',
    titleEn: 'Text-Only Deception Detection',
    keyword: 'Self-monitor 机制',
    category: 'deception',
    description: '建立基于自我监控机制的标准化欺骗行为评估基准，量化模型诚实度。',
    descriptionEn: 'Establishing standardized deception behavior evaluation benchmarks based on self-monitoring mechanisms to quantify model honesty.',
    image: '/research/text-deception.jpg',
    contentPath: 'text-deception',
    links: {
      paper: '#',
      code: '#',
      dataset: '#'
    }
  }
];

// 研究类别
export const researchCategories: ResearchCategory[] = [
  {
    id: 'self-replication',
    title: '自主复制或改进',
    titleEn: 'Autonomous Replication or Improvement',
    description: '研究AI系统的自主复制和自我改进能力的检测与防御技术。',
    descriptionEn: 'Research on detection and defense technologies for autonomous replication and self-improvement capabilities of AI systems.',
    projects: []
  },
  {
    id: 'power-seeking',
    title: '权力寻求',
    titleEn: 'Power Seeking',
    description: '研究AI系统寻求权力和影响力的行为模式及其防范措施。',
    descriptionEn: 'Research on behavioral patterns of AI systems seeking power and influence, and preventive measures.',
    projects: []
  },
  {
    id: 'weaponization',
    title: '协助武器制造',
    titleEn: 'Assisting Weapon Development',
    description: '研究防止AI系统被用于大规模杀伤性武器设计的技术与方法。',
    descriptionEn: 'Research on technologies and methods to prevent AI systems from being used in designing weapons of mass destruction.',
    projects: []
  },
  {
    id: 'cyberattack',
    title: '网络安全',
    titleEn: 'Cyberattacks',
    description: '研究AI系统在网络攻击中的风险评估与防御技术。',
    descriptionEn: 'Research on risk assessment and defense technologies for AI systems in cyberattacks.',
    projects: []
  },
  {
    id: 'deception',
    title: '欺骗',
    titleEn: 'Deception',
    description: '研究AI系统的欺骗行为检测、评估与防御技术。',
    descriptionEn: 'Research on detection, evaluation and defense technologies for AI system deception.',
    projects: deceptionProjects
  }
];

// 导出所有研究项目（向后兼容）
export const researchProjects: ResearchProject[] = deceptionProjects;

// 导出所有研究项目
export const allResearchProjects: ResearchProject[] = researchCategories.flatMap(
  category => category.projects
);

// 根据类别获取研究项目
export function getProjectsByCategory(categoryId: string): ResearchProject[] {
  const category = researchCategories.find(c => c.id === categoryId);
  return category?.projects || [];
}

// 根据ID获取研究项目
export function getProjectById(projectId: string): ResearchProject | undefined {
  return allResearchProjects.find(p => p.id === projectId);
}

// 根据ID获取研究类别
export function getCategoryById(categoryId: string): ResearchCategory | undefined {
  return researchCategories.find(c => c.id === categoryId);
}
