'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function VulnReportCTA() {
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
    <section ref={sectionRef} className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold text-blue-900 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          共建大模型安全防线
        </h2>
        <p className={`text-lg text-gray-700 leading-relaxed mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          智源秉持"开源开放"精神，联合开发者与安全研究员，共同挖掘模型潜在风险。
        </p>
        <p className={`text-lg text-gray-700 leading-relaxed mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          欢迎上报您发现的安全漏洞与越狱样本，协助优化大模型产业生态。
        </p>
        <Link
          href="/red-team"
          className={`inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          前往填报上报 →
        </Link>
      </div>
    </section>
  );
}
