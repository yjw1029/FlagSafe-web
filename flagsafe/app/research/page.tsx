'use client';

import { researchCategories } from '@/data/research';
import { ChevronRight, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ResearchPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 pb-20 pt-20 lg:pt-24 border-b border-gray-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute -bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-semibold mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Lightbulb className="w-4 h-4" />
            <span>前沿研究</span>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            前沿探索
          </h1>
          <p className={`text-xl text-gray-600 max-w-3xl leading-relaxed transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            基于北京AI安全国际共识的五大红线，FlagSafe 致力于开展前沿研究，构建全面的AI安全技术体系。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-8 rounded-r-2xl shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 relative">研究方向</h2>
            <p className="text-gray-700 leading-relaxed text-lg relative">
              我们的研究工作紧密围绕AI安全的五大红线展开：自主复制或改进、权力寻求、协助武器制造、网络安全和欺骗。
              通过系统性的技术研究和创新，为AI安全提供科学依据和技术支撑。
            </p>
          </div>
        </section>

        {/* Research Categories */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">研究类别</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/research/${category.id}`}
                className="group relative block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-600 transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative">
                  {/* Icon placeholder - could add custom icons per category */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white font-bold">{index + 1}</span>
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-sm text-gray-500 mb-4 font-medium">{category.titleEn}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Project Count */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className={`px-4 py-2 rounded-full font-semibold ${
                      category.projects.length > 0
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {category.projects.length > 0
                        ? `${category.projects.length} 个研究项目`
                        : '敬请期待'}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mt-16 border-t pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">重点研究项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchCategories
              .flatMap(cat => cat.projects)
              .slice(0, 4)
              .map((project) => (
                <Link
                  key={project.id}
                  href={`/research/deception/${project.id}`}
                  className="group border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-blue-600 transition-all"
                >
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{project.titleEn}</p>
                  {project.keyword && (
                    <p className="text-xs text-blue-600 mb-2">{project.keyword}</p>
                  )}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
