'use client';

import { platformModules } from '@/data/platform';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export default function PlatformSection() {
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

  const colorConfig = {
    red: {
      border: 'border-t-red-600',
      bg: 'bg-red-50',
      text: 'text-red-600',
      hoverText: 'hover:text-red-800',
    },
    blue: {
      border: 'border-t-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      hoverText: 'hover:text-blue-800',
    },
    purple: {
      border: 'border-t-purple-600',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      hoverText: 'hover:text-purple-800',
    },
  };

  return (
    <section ref={sectionRef} id="platform" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className={`text-sm font-bold text-blue-600 tracking-wider uppercase mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            核心交付
          </p>
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            FlagSafe 全栈安全平台
          </h2>
          <p className={`text-lg text-gray-500 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            攻防一体 · 白盒透视
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platformModules.map((module, idx) => {
            const IconComponent = Icons[module.icon as keyof typeof Icons] || Icons.Box;
            const colors = colorConfig[module.color];

            return (
              <div
                key={module.id}
                className={cn(
                  "group bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-700",
                  "border-t-4",
                  colors.border,
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${300 + idx * 150}ms` }}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-6", colors.bg)}>
                    <span className="text-2xl">{module.emoji}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {module.title}
                  </h3>

                  {/* Slogan */}
                  <p className="text-gray-600 mb-2 font-medium">
                    {module.slogan}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-6">
                    {module.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {module.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href={module.link || '#'}
                    className={cn(
                      "inline-flex items-center text-sm font-bold transition-colors",
                      colors.text,
                      colors.hoverText
                    )}
                  >
                    探索 The {module.id === 'red-team' ? 'Spear' : module.id === 'blue-team' ? 'Shield' : 'Eye'}
                    <Icons.ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
