'use client';

import { Shield, AlertTriangle, PlayCircle, FileText } from 'lucide-react';
import { vulnerabilities } from '@/data/vulnerabilities';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function RedTeamPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const statusConfig = {
    fixed: {
      label: '已修复',
      color: 'bg-green-100 text-green-800',
      dotColor: 'bg-green-500'
    },
    processing: {
      label: '处理中',
      color: 'bg-yellow-100 text-yellow-800',
      dotColor: 'bg-yellow-500 animate-pulse'
    },
    pending: {
      label: '待处理',
      color: 'bg-gray-100 text-gray-800',
      dotColor: 'bg-gray-500'
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-50 pb-20 pt-20 lg:pt-24 border-b border-gray-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute -bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-orange-300/20 to-red-300/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 border border-red-200 text-red-700 text-sm font-semibold mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Shield className="w-4 h-4" />
            <span>安全平台</span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            红队演练与对抗评测
          </h1>
          <p className={`text-xl md:text-2xl text-gray-500 mb-6 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            主动发现弱点 · 模拟极端风险
          </p>

          <p className={`max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed mb-10 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            集成所有攻击性和评测性项目，主动发现弱点，模拟极端风险，致力于未知的风险发现。
          </p>

          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 hover:-translate-y-0.5">
              <PlayCircle className="w-4 h-4" />
              开始评测任务
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <FileText className="w-4 h-4" />
              查看红队方法论
            </button>
          </div>
        </div>
      </header>

      {/* Platform Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心能力模块</h2>
            <p className="text-gray-500">自动化攻击引擎 · 全场景评测 · 实时漏洞响应</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* LLM 自动红队 */}
            <Link
              href="#"
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <Icons.Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">LLM 自动红队</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                强化学习驱动的 Auto-Attack 引擎，7x24 小时持续压力测试
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <Icons.Clock className="w-3 h-3" />
                  持续运行
                </span>
              </div>
            </Link>

            {/* 漏洞响应中心 */}
            <Link
              href="#"
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                <Icons.AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">漏洞响应中心</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                众包漏洞赏金 (Bug Bounty) 与 CVE 披露管理
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <Icons.Users className="w-3 h-3" />
                  社区驱动
                </span>
              </div>
            </Link>

            {/* Eval Anything */}
            <Link
              href="#"
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <Icons.BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Eval Anything</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                全场景、全模态的综合评测流水线
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <Icons.Layers className="w-3 h-3" />
                  全模态支持
                </span>
              </div>
            </Link>

            {/* 欺骗检测平台 */}
            <Link
              href="#"
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 cursor-pointer"
            >
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                <Icons.Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">欺骗检测平台</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                基于研究成果的实时欺骗行为检测与预警
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-flex items-center gap-1">
                  <Icons.Shield className="w-3 h-3" />
                  实时监控
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Vulnerability Reporting Section */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">漏洞记录与上报</h2>
              <p className="text-gray-500">最新发现的模型越狱与安全漏洞追踪</p>
            </div>
            <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium shadow-md shadow-red-200 transition-all">
              <AlertTriangle className="w-4 h-4" />
              上报新漏洞
            </button>
          </div>

          {/* Table */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                    <th className="px-6 py-4">漏洞ID</th>
                    <th className="px-6 py-4">发现日期</th>
                    <th className="px-6 py-4">目标模型</th>
                    <th className="px-6 py-4">漏洞类型</th>
                    <th className="px-6 py-4">发现者</th>
                    <th className="px-6 py-4 text-center">状态</th>
                    <th className="px-6 py-4 text-right">操作</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {vulnerabilities.map((vuln) => {
                    const status = statusConfig[vuln.status];

                    return (
                      <tr key={vuln.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-gray-500">{vuln.vulnId}</td>
                        <td className="px-6 py-4 text-gray-700">{vuln.date}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                            {vuln.model}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{vuln.type}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 text-white flex items-center justify-center text-xs font-bold">
                              {vuln.reporter.avatar}
                            </div>
                            <span className="text-gray-600">{vuln.reporter.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span
                            className={cn(
                              'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium',
                              status.color
                            )}
                          >
                            <span className={cn('w-1.5 h-1.5 rounded-full', status.dotColor)}></span>
                            {status.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-xs">
                            查看详情
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
