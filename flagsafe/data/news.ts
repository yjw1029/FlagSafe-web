import { NewsItem } from '@/types';

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'FlagSafe 正式发布：构建 AGI 时代的数字免疫系统',
    summary: '智源研究院正式发布 FlagSafe 大模型安全平台，提供从攻击评测到防御监测的全栈解决方案。',
    date: '2024-05-20',
    category: '产品发布',
    image: '/news/flagsafe-launch.jpg',
    link: '#'
  },
  {
    id: '2',
    title: '北京 AI 安全国际共识正式发布',
    summary: '在北京召开的国际AI安全峰会上，多国专家共同发布了AI安全五大红线共识，为全球AI治理提供指引。',
    date: '2024-05-15',
    category: '行业动态',
    image: '/news/beijing-consensus.jpg',
    link: '#'
  },
  {
    id: '3',
    title: 'DeceptionBench：首个大模型欺骗行为评估基准',
    summary: '北京大学与智源研究院联合发布 DeceptionBench，建立了标准化的大模型欺骗行为评估体系。',
    date: '2024-05-10',
    category: '研究成果',
    image: '/news/deception-bench.jpg',
    link: '#'
  },
  {
    id: '4',
    title: 'FlagSafe 红队计划启动，邀请全球安全研究员参与',
    summary: '智源研究院启动 FlagSafe 红队计划，面向全球安全研究员开放漏洞赏金项目，共建大模型安全生态。',
    date: '2024-05-05',
    category: '社区活动',
    link: '#'
  },
  {
    id: '5',
    title: 'Align Anything 框架更新：支持多模态安全对齐',
    summary: '最新版本的 Align Anything 框架现已支持图像、音频、视频等多模态内容的安全对齐。',
    date: '2024-04-28',
    category: '技术更新',
    link: '#'
  },
  {
    id: '6',
    title: '智源安全中心成功拦截 10 万+恶意攻击',
    summary: '智源大模型安全监测系统在过去一个月内成功拦截超过 10 万次恶意攻击尝试，保护模型安全运行。',
    date: '2024-04-20',
    category: '安全报告',
    image: '/news/security-report.jpg',
    link: '#'
  }
];
