'use client';

import { use, useEffect, useState } from 'react';
import { researchCategories } from '@/data/research';
import { ChevronRight, Folder } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryId } = use(params);
  const category = researchCategories.find(c => c.id === categoryId);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!category) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 pb-12 pt-20 lg:pt-24">
        {/* Subtle Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-300/15 to-purple-300/15 rounded-full blur-3xl transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className={`text-sm text-gray-500 mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Link href="/" className="hover:text-blue-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/research" className="hover:text-blue-600 transition-colors">前沿探索</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{category.title}</span>
          </nav>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Folder className="w-4 h-4" />
            <span>研究分类</span>
          </div>

          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {category.title}
          </h1>
          <p className={`text-xl text-gray-500 mb-6 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {category.titleEn}
          </p>
          <p className={`text-lg text-gray-700 leading-relaxed max-w-3xl transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {category.description}
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {category.projects.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              研究项目 ({category.projects.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/research/${categoryId}/${project.id}`}
                  className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {project.image && (
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{project.titleEn}</p>
                    {project.keyword && (
                      <p className="text-sm text-blue-600 mb-3">{project.keyword}</p>
                    )}
                    <p className="text-gray-700 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Links Preview */}
                    {project.links && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.links.paper && (
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                            论文
                          </span>
                        )}
                        {project.links.code && (
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                            代码
                          </span>
                        )}
                        {project.links.dataset && (
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                            数据集
                          </span>
                        )}
                        {project.links.demo && (
                          <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                            演示
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <ChevronRight className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">敬请期待</h3>
            <p className="text-gray-600">
              该研究方向的项目正在筹备中，敬请期待
            </p>
          </div>
        )}

        {/* Back to Research */}
        <div className="mt-12 pt-8 border-t">
          <Link
            href="/research"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ChevronRight className="w-5 h-5 rotate-180 mr-1" />
            返回前沿探索
          </Link>
        </div>
      </div>
    </main>
  );
}
