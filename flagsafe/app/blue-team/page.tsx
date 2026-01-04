'use client';

import { Shield, Activity, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlueTeamPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const defenseFeatures = [
    {
      icon: Activity,
      title: '网络空间风险监测',
      description: '全域风险监测（AUC 88%）与有效域坍缩预警（提前60%）',
      metrics: [
        { label: '监测准确率', value: '88%' },
        { label: '预警提前度', value: '60%' },
        { label: '覆盖场景', value: '1000+' }
      ]
    },
    {
      icon: Shield,
      title: 'Align Anything 对齐框架',
      description: '全模态安全对齐框架，注入安全约束',
      metrics: [
        { label: '对齐成功率', value: '95%' },
        { label: '支持模态', value: '8+' },
        { label: '安全提升', value: '70%' }
      ]
    },
    {
      icon: CheckCircle,
      title: '毒性与欺骗防御',
      description: '神经元级的毒性阻断与欺骗行为拦截',
      metrics: [
        { label: '拦截准确率', value: '92%' },
        { label: '误报率', value: '<2%' },
        { label: '响应时间', value: '<50ms' }
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pb-20 pt-20 lg:pt-24 border-b border-gray-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute -bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Shield className="w-4 h-4" />
            <span>安全平台</span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            蓝队防御与实时监测
          </h1>
          <p className={`text-xl md:text-2xl text-gray-500 mb-6 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            构建动态防线 · 实现实时免疫
          </p>

          <p className={`max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed mb-10 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            构建动态防线，实现实时免疫。全能对齐防线与风险监测，确保模型安全运行。
          </p>

          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5">
              <Activity className="w-4 h-4" />
              查看实时监控
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <FileText className="w-4 h-4" />
              防御策略文档
            </button>
          </div>
        </div>
      </header>

      {/* Defense Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心防御能力</h2>
            <p className="text-gray-500">多层次、全方位的安全防护体系</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {defenseFeatures.map((feature, idx) => (
              <Link
                key={idx}
                href="#"
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                {/* Metrics */}
                <div className="space-y-3">
                  {feature.metrics.map((metric, midx) => (
                    <div key={midx} className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{metric.label}</span>
                      <span className="text-sm font-bold text-blue-600">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">防御架构</h2>
            <p className="text-gray-500">分层防护，纵深防御</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { layer: '输入层', desc: '内容过滤与风险检测', color: 'blue' },
              { layer: '模型层', desc: '安全对齐与约束注入', color: 'purple' },
              { layer: '输出层', desc: '内容审核与毒性拦截', color: 'indigo' },
              { layer: '监控层', desc: '实时监测与预警响应', color: 'cyan' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-dashed border-gray-200 hover:border-blue-400 transition-colors">
                  <div className="text-2xl font-bold text-gray-900 mb-2">{item.layer}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
                {idx < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-300 w-6 h-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
