'use client';

import { researchProjects } from '@/data/research';
import * as Icons from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function ResearchSection() {
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
    <section ref={sectionRef} id="research" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            前沿探索 · 红线专项研究
          </h2>
          <p className={`text-lg text-gray-500 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            深入挖掘 AI 安全边界，建立标准化评估基准
          </p>
        </div>

        {/* Research Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchProjects.map((project, idx) => {
            // Dynamically get icon component
            const IconComponent = Icons[project.icon as keyof typeof Icons] || Icons.Box;

            return (
              <div
                key={project.id}
                className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-700 border border-gray-100 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + idx * 150}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <IconComponent className="w-7 h-7 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>

                {/* Keyword */}
                <p className="text-sm text-blue-600 font-medium mb-4">
                  {project.keyword}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8 min-h-[48px]">
                  {project.description}
                </p>

                {/* Link */}
                <Link
                  href={project.link || '#'}
                  className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group-hover:gap-2 gap-1"
                >
                  查看详情
                  <Icons.ArrowRight className="w-4 h-4 transition-all" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
