import { PlatformModule } from '@/types';

export const platformModules: PlatformModule[] = [
  {
    id: 'red-team',
    icon: 'sword',
    emoji: '⚔️',
    title: '红队演练',
    slogan: '主动发现弱点，模拟极端风险',
    description: '集成全能评测场与欺骗沙箱',
    color: 'red',
    features: [
      'LLM 自动红队：强化学习驱动的 Auto-Attack 引擎，7x24 小时持续压力测试',
      '漏洞响应中心：众包漏洞赏金 (Bug Bounty) 与 CVE 披露',
      'Eval Anything：全场景、全模态的综合评测流水线',
      '欺骗检测平台：深度追踪模型欺骗行为'
    ],
    link: '/red-team'
  },
  {
    id: 'blue-team',
    icon: 'shield',
    emoji: '🛡️',
    title: '蓝队防御',
    slogan: '构建动态防线，实现实时免疫',
    description: '全能对齐防线与风险监测',
    color: 'blue',
    features: [
      '网络空间风险监测：全域风险监测（AUC 88%）与有效域坍缩预警（提前60%）',
      'Align Anything：全模态安全对齐框架，注入安全约束',
      '毒性与欺骗防御：神经元级的毒性阻断与欺骗行为拦截',
      '实时防护：动态安全策略更新与自适应防御'
    ],
    link: '/blue-team'
  },
  {
    id: 'white-box',
    icon: 'microscope',
    emoji: '🔬',
    title: '白盒透视',
    slogan: '穿透黑盒迷雾，掌控决策逻辑',
    description: '支持机理分析与因果干预',
    color: 'purple',
    features: [
      '可视化调试：交互式展示 Token Embedding 流动与神经元激活拓扑',
      '归因分析：深度追踪"失陷通路"，定位错误与幻觉根源',
      '主动干预：支持中间层"激活修补" (Activation Patching)，验证因果假设',
      '机理理解：揭示模型内部决策机制'
    ],
    link: '/white-box'
  }
];
