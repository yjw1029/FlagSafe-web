'use client';

import { useEffect, useRef, useState } from 'react';
import { partners } from '@/data/partners';
import { Building2 } from 'lucide-react';

export default function PartnersSection() {
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
    <section ref={sectionRef} className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className={`text-3xl font-bold text-gray-900 text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          合作团队
        </h2>

        {/* Scrolling Partners Container */}
        <div className={`relative overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* First Row - Scroll Left */}
          <div className="mb-8 overflow-hidden">
            <div className="flex gap-6 animate-scroll-left">
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={`${partner.id}-${idx}`}
                  className="flex-shrink-0 w-64 h-32 bg-white rounded-lg border-2 border-gray-200 flex flex-col items-center justify-center hover:border-blue-300 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Placeholder Image Area */}
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="h-16 object-contain" />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <Building2 className="w-12 h-12 text-gray-300 mb-2 group-hover:text-blue-400 transition-colors" />
                      <div className="text-xs text-gray-400 font-medium mb-1">[ LOGO ]</div>
                      <div className="text-sm text-gray-600 font-medium text-center px-4 group-hover:text-blue-600 transition-colors">
                        {partner.name}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Scroll Right */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-right">
              {[...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, idx) => (
                <div
                  key={`${partner.id}-rev-${idx}`}
                  className="flex-shrink-0 w-64 h-32 bg-white rounded-lg border-2 border-gray-200 flex flex-col items-center justify-center hover:border-blue-300 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Placeholder Image Area */}
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="h-16 object-contain" />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <Building2 className="w-12 h-12 text-gray-300 mb-2 group-hover:text-blue-400 transition-colors" />
                      <div className="text-xs text-gray-400 font-medium mb-1">[ LOGO ]</div>
                      <div className="text-sm text-gray-600 font-medium text-center px-4 group-hover:text-blue-600 transition-colors">
                        {partner.name}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-gray-600">合作机构</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">研究项目</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600">安全专家</div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
