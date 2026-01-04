'use client';

import { ResearchProject } from '@/types';
import { ExternalLink, FileText, Code, Database, Play, Layers } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ResearchProjectLayoutProps {
  project: ResearchProject;
  children?: React.ReactNode;
}

export default function ResearchProjectLayout({ project, children }: ResearchProjectLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-slate-50 via-purple-50/20 to-slate-50 pb-16 pt-20 lg:pt-24">
        {/* Subtle Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute -bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-blue-300/20 to-purple-300/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className={`text-sm text-gray-500 mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Link href="/" className="hover:text-blue-600 transition-colors">首页</Link>
            <span className="mx-2">/</span>
            <Link href="/research" className="hover:text-blue-600 transition-colors">前沿探索</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{project.title}</span>
          </nav>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-semibold mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Layers className="w-4 h-4" />
            <span>研究项目</span>
          </div>

          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {project.title}
          </h1>

          {/* 链接按钮 */}
          {project.links && (
            <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {project.links.paper && (
                <a
                  href={project.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-semibold"
                >
                  <FileText className="w-4 h-4" />
                  论文
                </a>
              )}
              {project.links.code && (
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 bg-white rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm hover:shadow-md font-semibold"
                >
                  <Code className="w-4 h-4" />
                  代码
                </a>
              )}
              {project.links.dataset && (
                <a
                  href={project.links.dataset}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 bg-white rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm hover:shadow-md font-semibold"
                >
                  <Database className="w-4 h-4" />
                  数据集
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 bg-white rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm hover:shadow-md font-semibold"
                >
                  <Play className="w-4 h-4" />
                  演示
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Image */}
        {/* {project.image && (
          <div className="mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )} */}

        {/* Description */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">项目简介</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {project.description}
          </p>
        </section> */}

        {/* Custom Content */}
        {children}

        {/* Metadata */}
        {(project.authors || project.venue || project.year) && (
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">项目信息</h2>
            <div className="space-y-2 text-gray-700">
              {project.authors && project.authors.length > 0 && (
                <div>
                  <span className="font-medium">作者：</span>
                  {project.authors.join(', ')}
                </div>
              )}
              {project.venue && (
                <div>
                  <span className="font-medium">发表于：</span>
                  {project.venue}
                </div>
              )}
              {project.year && (
                <div>
                  <span className="font-medium">年份：</span>
                  {project.year}
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
