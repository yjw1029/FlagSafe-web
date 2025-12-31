export interface Partner {
  id: string;
  name: string;
  logo?: string; // 后续添加实际logo路径
  website?: string;
}

export const partners: Partner[] = [
  // 高校
  { id: 'pku', name: '北京大学' },
  { id: 'tsinghua', name: '清华大学' },
  { id: 'cas', name: '中国科学院' },
  { id: 'fudan', name: '复旦大学' },
  { id: 'sjtu', name: '上海交通大学' },
  { id: 'zju', name: '浙江大学' },
  { id: 'nju', name: '南京大学' },
  { id: 'cuc', name: '中国传媒大学' },
  { id: 'bnu', name: '北京师范大学' },
  { id: 'bupt', name: '北京邮电大学' },
  { id: 'buaa', name: '北京航空航天大学' },

  // 研究机构
  { id: 'casia', name: '中国科学院自动化所' },
  { id: 'caict', name: '中国信通院' },
  { id: 'mju', name: '闽江学院' },

  // 科技企业
  { id: 'baidu', name: '百度' },
  { id: 'alibaba', name: '阿里巴巴' },
  { id: 'tencent', name: '腾讯' },
  { id: 'huawei', name: '华为' },
  { id: 'bytedance', name: '字节跳动' },
  { id: 'sensetime', name: '商汤科技' },
  { id: 'megvii', name: '旷视科技' },
  { id: 'iflytek', name: '科大讯飞' },

  // 国际机构
  { id: 'msra', name: '微软亚洲研究院' },
  { id: 'openai', name: 'OpenAI' },
  { id: 'anthropic', name: 'Anthropic' },
];
