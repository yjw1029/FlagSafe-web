import type { MDXComponents } from 'mdx/types';
import HighlightBox from './HighlightBox';

/**
 * MDX 自定义组件映射
 * 定义在 MDX 内容中可用的自定义组件和覆盖默认 HTML 标签
 */
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    // 自定义组件
    HighlightBox,

    // 覆盖默认 HTML 标签以添加样式
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-10 mb-5">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-gray-700">{children}</li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[var(--baai-blue)] hover:text-[var(--baai-blue-dark)] underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt}
        className="rounded-lg shadow-lg my-8 w-full md:w-4/5 lg:w-3/4 mx-auto"
        loading="lazy"
      />
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--baai-blue)] pl-4 italic text-gray-700 my-6 bg-gray-50 py-2">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-6">
        {children}
      </pre>
    ),

    // 合并用户自定义组件
    ...components,
  };
}
