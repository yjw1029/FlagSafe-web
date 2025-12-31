'use client';

import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pb-32 pt-24 lg:pb-40 lg:pt-32 min-h-[85vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className={`absolute top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
        <div className={`absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>

        {/* Floating rings - inspired by FlagEval */}
        <div className={`absolute top-1/4 right-1/4 w-64 h-64 border-4 border-blue-200/30 rounded-full transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 rotate-0' : 'opacity-0 rotate-45'}`} style={{ animation: 'float 6s ease-in-out infinite' }}></div>
        <div className={`absolute bottom-1/3 right-1/3 w-48 h-48 border-4 border-purple-200/30 rounded-full transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}`} style={{ animation: 'float 8s ease-in-out infinite reverse' }}></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <Shield className="w-4 h-4" />
              <span>智源大语言模型安全中心</span>
            </div>

            {/* Main Title */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                FlagSafe
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-700">
                大模型安全平台
              </span>
            </h1>

            {/* Description */}
            <p className={`text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              FlagSafe 致力于建立科学、公正、开放的大模型安全体系及开放平台，旨在建立大模型安全基准、方法、工具集，协助研究人员全方位评估基础模型及训练算法的安全性，同时通过引入 AI 辅助主观评测，大幅提升评测的效率和客观性。
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Link
                href="/consensus"
                className="group inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5"
              >
                查看安全指南
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#platform"
                className="group inline-flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                探索安全平台
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="relative hidden lg:block">
            <div className={`relative transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              {/* Central shield visual */}
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'spin-slow 20s linear infinite' }}>
                  <div className="w-96 h-96 rounded-full border-2 border-dashed border-blue-300/50"></div>
                </div>

                {/* Middle ring */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'spin-slow 15s linear infinite reverse' }}>
                  <div className="w-72 h-72 rounded-full border-2 border-blue-400/30"></div>
                </div>

                {/* Center shield icon */}
                <div className="relative z-10 w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl flex items-center justify-center" style={{ animation: 'float 4s ease-in-out infinite' }}>
                  <Shield className="w-24 h-24 text-white" strokeWidth={1.5} />
                </div>

                {/* Floating badges */}
                <div className="absolute top-20 left-0" style={{ animation: 'float 5s ease-in-out infinite' }}>
                  <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
                    <div className="text-xs text-gray-500">安全红线</div>
                    <div className="text-xl font-bold text-blue-600">5+</div>
                  </div>
                </div>

                <div className="absolute bottom-20 right-0" style={{ animation: 'float 6s ease-in-out infinite delay-1s' }}>
                  <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
                    <div className="text-xs text-gray-500">评测项目</div>
                    <div className="text-xl font-bold text-purple-600">100+</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-4" style={{ animation: 'float 7s ease-in-out infinite delay-2s' }}>
                  <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
                    <div className="text-xs text-gray-500">研究合作</div>
                    <div className="text-xl font-bold text-green-600">20+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
