'use client';

import { redLines } from '@/data/redlines';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function ConsensusSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="consensus" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Info */}
          <div>
            <h2 className={`text-4xl font-bold text-gray-900 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              AI 安全指南
            </h2>
            <p className={`text-lg text-gray-600 mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              基于《北京 AI 安全国际共识》制定的安全红线与治理规范,为大模型开发与应用提供明确的安全指引。
            </p>

            {/* Red Lines List */}
            <div className="space-y-4 mb-10">
              {redLines.map((line, idx) => (
                <div
                  key={line.id}
                  className={`flex items-start gap-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                  style={{ transitionDelay: `${200 + idx * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-sm mt-0.5 hover:scale-110 transition-transform"></div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {line.titleZh}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {line.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/consensus"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              查看安全指南
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Pentagon Framework Visualization */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80">
              {/* Outer Circle with gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 flex items-center justify-center shadow-inner">
                {/* Pentagon Framework */}
                <svg width="280" height="280" viewBox="0 0 280 280" className="overflow-visible">
                  <defs>
                    {/* Gradient for pentagon */}
                    <linearGradient id="pentagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#EFF6FF" stopOpacity="0.9" />
                    </linearGradient>

                    {/* Gradient for center circle */}
                    <radialGradient id="centerGradient">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </radialGradient>

                    {/* Gradient for vertex points */}
                    <radialGradient id="vertexGradient">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </radialGradient>

                    {/* Glow filter */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Background Pentagon with gradient */}
                  <polygon
                    points="140,20 245,90 210,225 70,225 35,90"
                    fill="url(#pentagonGradient)"
                    stroke="#60A5FA"
                    strokeWidth="2"
                    filter="url(#glow)"
                  />

                  {/* Grid Lines - softer color */}
                  <line x1="140" y1="140" x2="140" y2="20" stroke="#93C5FD" strokeWidth="1.5" opacity="0.5" />
                  <line x1="140" y1="140" x2="245" y2="90" stroke="#93C5FD" strokeWidth="1.5" opacity="0.5" />
                  <line x1="140" y1="140" x2="210" y2="225" stroke="#93C5FD" strokeWidth="1.5" opacity="0.5" />
                  <line x1="140" y1="140" x2="70" y2="225" stroke="#93C5FD" strokeWidth="1.5" opacity="0.5" />
                  <line x1="140" y1="140" x2="35" y2="90" stroke="#93C5FD" strokeWidth="1.5" opacity="0.5" />

                  {/* Vertex Points with gradient and glow */}
                  <circle cx="140" cy="20" r="10" fill="url(#vertexGradient)" filter="url(#glow)" />
                  <circle cx="245" cy="90" r="10" fill="url(#vertexGradient)" filter="url(#glow)" />
                  <circle cx="210" cy="225" r="10" fill="url(#vertexGradient)" filter="url(#glow)" />
                  <circle cx="70" cy="225" r="10" fill="url(#vertexGradient)" filter="url(#glow)" />
                  <circle cx="35" cy="90" r="10" fill="url(#vertexGradient)" filter="url(#glow)" />

                  {/* Inner white circles for vertex points */}
                  <circle cx="140" cy="20" r="4" fill="#fff" opacity="0.9" />
                  <circle cx="245" cy="90" r="4" fill="#fff" opacity="0.9" />
                  <circle cx="210" cy="225" r="4" fill="#fff" opacity="0.9" />
                  <circle cx="70" cy="225" r="4" fill="#fff" opacity="0.9" />
                  <circle cx="35" cy="90" r="4" fill="#fff" opacity="0.9" />

                  {/* Center Point - Simple and Clean */}
                  <circle cx="140" cy="140" r="6" fill="#3B82F6" opacity="0.3" />
                  <circle cx="140" cy="140" r="3" fill="#2563EB" />

                  {/* Labels with better color */}
                  <text x="140" y="8" textAnchor="middle" fontSize="13" fill="#0F172A" fontWeight="600">
                    自主复制
                  </text>
                  <text x="265" y="95" textAnchor="start" fontSize="13" fill="#0F172A" fontWeight="600">
                    武器协助
                  </text>
                  <text x="220" y="250" textAnchor="middle" fontSize="13" fill="#0F172A" fontWeight="600">
                    网络攻击
                  </text>
                  <text x="60" y="250" textAnchor="middle" fontSize="13" fill="#0F172A" fontWeight="600">
                    欺骗
                  </text>
                  <text x="5" y="95" textAnchor="end" fontSize="13" fill="#0F172A" fontWeight="600">
                    权力寻求
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
