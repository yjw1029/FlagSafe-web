'use client';

import { Newspaper, Calendar, Tag, ArrowRight } from 'lucide-react';
import { newsItems } from '@/data/news';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function NewsPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const categories = ['全部', '产品发布', '行业动态', '研究成果', '社区活动', '技术更新', '安全报告'];

  const categoryColors: { [key: string]: string } = {
    '产品发布': 'bg-blue-100 text-blue-700',
    '行业动态': 'bg-purple-100 text-purple-700',
    '研究成果': 'bg-green-100 text-green-700',
    '社区活动': 'bg-orange-100 text-orange-700',
    '技术更新': 'bg-indigo-100 text-indigo-700',
    '安全报告': 'bg-red-100 text-red-700'
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Header - 与 consensus 页面对齐 */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pb-16 pt-20 lg:pt-24 border-b border-gray-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute -bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-purple-300/20 to-blue-300/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Newspaper className="w-4 h-4" />
            <span>新闻动态</span>
          </div>

          <div className={`transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              新闻资讯
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              最新的大模型安全动态、研究成果和技术更新
            </p>
          </div>
        </div>
      </header>

      {/* Categories Filter */}
      <section className="bg-white border-b border-gray-100 py-6 sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6">
            {(selectedCategory === '全部'
              ? newsItems
              : newsItems.filter(news => news.category === selectedCategory)
            ).map((news) => (
              <Link
                key={news.id}
                href={news.link || '#'}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row"
              >
                {/* Image or Placeholder */}
                {news.image ? (
                  <div className="relative overflow-hidden bg-gray-100 w-full sm:w-80 h-48 sm:h-auto flex-shrink-0">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center w-full sm:w-80 h-48 sm:h-auto flex-shrink-0">
                    <Newspaper className="w-12 h-12 text-blue-300" />
                  </div>
                )}

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {/* Category & Date */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                          categoryColors[news.category] || 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <Tag className="w-3 h-3" />
                        {news.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        {news.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{news.summary}</p>
                  </div>

                  {/* Read More Arrow */}
                  <div className="inline-flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-800 transition-colors group-hover:gap-2 gap-1 self-start">
                    阅读更多
                    <ArrowRight className="w-4 h-4 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-300 transition-all">
              加载更多
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">订阅我们的资讯</h2>
          <p className="text-blue-100 mb-8">
            获取最新的大模型安全动态、研究成果和技术更新
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入您的邮箱"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:bg-white/20 focus:outline-none transition-all"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
              订阅
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
