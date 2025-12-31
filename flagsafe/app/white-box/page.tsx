'use client';

import { Microscope, Eye, GitBranch, Zap, FileText, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function WhiteBoxPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: Eye,
      title: '可视化调试',
      description: '交互式展示 Token Embedding 流动与神经元激活拓扑',
      capabilities: [
        '实时神经元激活状态监控',
        'Token 层级可视化分析',
        '注意力机制热力图展示',
        '模型内部状态追踪'
      ]
    },
    {
      icon: GitBranch,
      title: '归因分析',
      description: '深度追踪"失陷通路"，定位错误与幻觉根源',
      capabilities: [
        '错误决策路径回溯',
        '幻觉生成源头定位',
        '影响因子权重分析',
        '多层级归因追踪'
      ]
    },
    {
      icon: Zap,
      title: '主动干预',
      description: '支持中间层"激活修补"，验证因果假设',
      capabilities: [
        '神经元激活值修改',
        '因果关系验证实验',
        '模型行为调控测试',
        '安全约束注入验证'
      ]
    }
  ];

  const useCases = [
    {
      title: '幻觉检测与定位',
      desc: '追踪模型生成幻觉内容的神经通路，精准定位问题根源',
      metrics: { accuracy: '94%', speed: '< 100ms' }
    },
    {
      title: '偏见分析',
      desc: '识别模型决策中的隐性偏见，可视化偏见形成机制',
      metrics: { coverage: '15+类型', detection: '91%' }
    },
    {
      title: '安全机理研究',
      desc: '理解安全对齐的内部工作机制，优化安全策略',
      metrics: { depth: '32层', resolution: '神经元级' }
    },
    {
      title: '可解释性增强',
      desc: '为模型决策提供清晰的解释路径，提升透明度',
      metrics: { interpretability: '85%', clarity: '高' }
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 pb-20 pt-20 lg:pt-24 border-b border-gray-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute -bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-pink-300/20 to-purple-300/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-semibold mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Microscope className="w-4 h-4" />
            <span>安全平台</span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            白盒透视与机理分析
          </h1>
          <p className={`text-xl md:text-2xl text-gray-500 mb-6 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            穿透黑盒迷雾，掌控决策逻辑
          </p>

          <p className={`max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed mb-10 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            通过神经元级别的可视化分析，深入理解模型内部机制。支持机理分析与因果干预，让 AI 决策过程透明可控。
          </p>

          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="inline-flex items-center justify-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 hover:-translate-y-0.5">
              <Eye className="w-4 h-4" />
              启动可视化调试
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <FileText className="w-4 h-4" />
              技术文档
            </button>
          </div>
        </div>
      </header>

      {/* Core Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心能力</h2>
            <p className="text-gray-500">三大维度全面透视模型内部机制</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                {/* Capabilities List */}
                <ul className="space-y-2">
                  {feature.capabilities.map((cap, cidx) => (
                    <li key={cidx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">应用场景</h2>
            <p className="text-gray-500">深入理解模型，解决实际问题</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 border-2 border-purple-100 hover:border-purple-300 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.desc}</p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-4">
                  {Object.entries(useCase.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white px-4 py-2 rounded-lg border border-purple-100">
                      <div className="text-xs text-gray-500 mb-1">
                        {key === 'accuracy' && '准确率'}
                        {key === 'speed' && '响应速度'}
                        {key === 'coverage' && '覆盖范围'}
                        {key === 'detection' && '检测率'}
                        {key === 'depth' && '分析深度'}
                        {key === 'resolution' && '分析粒度'}
                        {key === 'interpretability' && '可解释性'}
                        {key === 'clarity' && '清晰度'}
                      </div>
                      <div className="text-sm font-bold text-purple-600">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">技术架构</h2>
            <p className="text-gray-500">先进的机理分析技术栈</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: '神经元追踪', desc: '实时监控神经元激活状态' },
              { name: '注意力可视化', desc: '多头注意力机制热力图' },
              { name: '激活修补', desc: '支持中间层干预实验' },
              { name: '因果推理', desc: '验证模型决策因果关系' }
            ].map((tech, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center border-2 border-dashed border-gray-200 hover:border-purple-400 transition-colors"
              >
                <div className="text-lg font-bold text-gray-900 mb-2">{tech.name}</div>
                <div className="text-sm text-gray-600">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">探索模型内部世界</h2>
          <p className="text-purple-100 mb-8 text-lg">
            使用白盒透视技术，深入理解您的大模型，优化性能，提升安全性。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              预约演示
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              下载技术白皮书
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
