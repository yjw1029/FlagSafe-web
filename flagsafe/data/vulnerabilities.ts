import { VulnerabilityReport } from '@/types';

export const vulnerabilities: VulnerabilityReport[] = [
  {
    id: '1',
    vulnId: 'VUL-2024-082',
    date: '2024-05-21',
    model: 'Llama-3-70B',
    type: '角色扮演诱导 (Roleplay Jailbreak)',
    reporter: {
      name: 'Alex_Sec',
      avatar: 'A'
    },
    status: 'fixed'
  },
  {
    id: '2',
    vulnId: 'VUL-2024-081',
    date: '2024-05-19',
    model: 'GPT-4o',
    type: '多模态注入 (Image Injection)',
    reporter: {
      name: 'RedTeamer_01',
      avatar: 'R'
    },
    status: 'processing'
  },
  {
    id: '3',
    vulnId: 'VUL-2024-080',
    date: '2024-05-18',
    model: 'Claude-3-Opus',
    type: '提示词泄露 (Prompt Leakage)',
    reporter: {
      name: 'Security_Pro',
      avatar: 'S'
    },
    status: 'fixed'
  },
  {
    id: '4',
    vulnId: 'VUL-2024-079',
    date: '2024-05-15',
    model: 'Gemini-Pro',
    type: '越狱攻击 (Jailbreak Attack)',
    reporter: {
      name: 'WhiteHat_99',
      avatar: 'W'
    },
    status: 'pending'
  }
];
