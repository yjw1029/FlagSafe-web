import React from 'react';
import { Sparkles } from 'lucide-react';

interface HighlightBoxProps {
  children: React.ReactNode;
}

/**
 * 研究亮点展示组件
 * 用于在 MDX 中展示项目亮点列表
 */
export default function HighlightBox({ children }: HighlightBoxProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-[var(--baai-blue)] p-6 rounded-lg my-8 shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-[var(--baai-blue)]" />
        研究亮点
      </h3>
      <div className="space-y-3 text-gray-700">
        {children}
      </div>
    </div>
  );
}
