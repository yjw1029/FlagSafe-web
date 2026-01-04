import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  /* config options here */
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      'remark-gfm',    // GitHub Flavored Markdown
      'remark-math',   // Math support
    ],
    rehypePlugins: [
      'rehype-katex',      // KaTeX for math rendering
      'rehype-highlight',  // Code syntax highlighting
    ],
  },
});

export default withMDX(nextConfig);
