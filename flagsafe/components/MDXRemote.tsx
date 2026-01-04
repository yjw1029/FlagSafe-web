'use client';

import { MDXProvider } from '@mdx-js/react';
import { getMDXComponents } from './mdx/MDXComponents';
import { useMemo } from 'react';
import * as runtime from 'react/jsx-runtime';

interface MDXRemoteProps {
  compiledSource: string;
}

/**
 * 客户端 MDX 渲染组件
 * 接收服务端编译好的 MDX 代码并在客户端执行渲染
 */
export default function MDXRemote({ compiledSource }: MDXRemoteProps) {
  const Content = useMemo(() => {
    try {
      // 执行编译后的 MDX 代码 (function-body 格式)
      const MDXContent = new Function(
        '_jsx',
        '_jsxs',
        '_Fragment',
        ...Object.keys(getMDXComponents()),
        compiledSource
      )(
        runtime.jsx,
        runtime.jsxs,
        runtime.Fragment,
        ...Object.values(getMDXComponents())
      );

      return () => MDXContent;
    } catch (error) {
      console.error('Error rendering MDX:', error);
      return () => (
        <div className="text-red-600 p-4 bg-red-50 rounded">
          渲染 MDX 内容时出错: {error instanceof Error ? error.message : String(error)}
        </div>
      );
    }
  }, [compiledSource]);

  return (
    <MDXProvider components={getMDXComponents()}>
      <div className="prose prose-lg max-w-none">
        <Content />
      </div>
    </MDXProvider>
  );
}
