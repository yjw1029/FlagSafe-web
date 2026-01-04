'use client';

import { MDXProvider } from '@mdx-js/react';
import { getMDXComponents } from './mdx/MDXComponents';

interface MDXContentProps {
  children: React.ReactNode;
}

/**
 * MDX 内容渲染组件
 * 提供 MDX 自定义组件上下文
 */
export default function MDXContent({ children }: MDXContentProps) {
  return (
    <MDXProvider components={getMDXComponents()}>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </MDXProvider>
  );
}
