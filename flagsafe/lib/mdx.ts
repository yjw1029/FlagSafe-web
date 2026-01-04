import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compile } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';

const contentDirectory = path.join(process.cwd(), '..', 'content');

export interface MDXContent {
  content: string;
  frontmatter: {
    id: string;
    title?: string;
    [key: string]: any;
  };
}

/**
 * 获取研究项目的 MDX 内容
 * @param projectId 项目 ID（如 'deception-sandbox'）
 * @returns MDX 内容和 frontmatter
 */
export async function getProjectContent(projectId: string): Promise<MDXContent | null> {
  try {
    const filePath = path.join(contentDirectory, 'research', `${projectId}.mdx`);

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      console.warn(`MDX file not found: ${filePath}`);
      return null;
    }

    // 读取文件内容
    const fileContents = fs.readFileSync(filePath, 'utf8');

    // 解析 frontmatter 和内容
    const { data, content } = matter(fileContents);

    return {
      content,
      frontmatter: data as any,
    };
  } catch (error) {
    console.error(`Error loading MDX content for project ${projectId}:`, error);
    return null;
  }
}

/**
 * 编译 MDX 内容为可执行的组件代码
 * @param source MDX 源代码
 * @returns 编译后的代码字符串
 */
export async function compileMDX(source: string): Promise<string> {
  try {
    const compiled = await compile(source, {
      outputFormat: 'function-body',
      development: process.env.NODE_ENV === 'development',
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeKatex, rehypeHighlight],
    });

    return String(compiled);
  } catch (error) {
    console.error('Error compiling MDX:', error);
    throw error;
  }
}

/**
 * 获取所有研究项目的 MDX 文件列表
 * @returns 项目 ID 列表
 */
export function getAllProjectIds(): string[] {
  try {
    const researchDir = path.join(contentDirectory, 'research');

    if (!fs.existsSync(researchDir)) {
      return [];
    }

    const files = fs.readdirSync(researchDir);

    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => file.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error getting project IDs:', error);
    return [];
  }
}
