# 核心模块详解

> 版本: 1.1 | 更新日期: 2025-12-31

[← 返回文档中心](./README.md)

---

## 1. 数据层 (`data/`)

### 数据结构示例

所有数据使用 TypeScript 定义，提供完整的类型安全：

```typescript
// data/research.ts
import { ResearchProject, ResearchCategory } from '@/types/research';

export const researchCategories: ResearchCategory[] = [
  {
    id: 'deception',
    titleZh: '欺骗',
    titleEn: 'Deception',
    descriptionZh: '研究大模型的欺骗行为...',
    icon: 'AlertCircle'
  }
];

export const researchProjects: ResearchProject[] = [
  {
    id: 'deception-sandbox',
    categoryId: 'deception',
    titleZh: '欺骗诱导沙箱',
    titleEn: 'Deception-Induced Sandbox',
    contentPath: 'deception-sandbox',  // MDX 文件名
    // ... 更多字段
  }
];

// 辅助查询函数
export function getProjectsByCategory(categoryId: string) {
  return researchProjects.filter(p => p.categoryId === categoryId);
}

export function getProjectById(projectId: string) {
  return researchProjects.find(p => p.id === projectId);
}
```

### 数据文件清单

| 文件 | 数据类型 | 主要用途 |
|------|----------|----------|
| `redlines.ts` | `RedLine[]` | 五大红线定义 |
| `research.ts` | `ResearchCategory[]`, `ResearchProject[]` | 研究项目 |
| `platform.ts` | `PlatformModule[]` | 三大平台模块 |
| `partners.ts` | `Partner[]` | 合作伙伴列表 |
| `news.ts` | `NewsItem[]` | 新闻资讯 |
| `vulnerabilities.ts` | `VulnerabilityReport[]` | 漏洞报告 |

---

## 2. 类型系统 (`types/`)

### 核心类型定义

```typescript
// types/index.ts
export interface RedLine {
  id: string;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  descriptionEn: string;
  icon: string;
  color: string;
}

// types/research.ts
export interface ResearchProject {
  id: string;
  categoryId: string;
  titleZh: string;
  titleEn: string;
  descriptionZh: string;
  paperUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
```

### 类型定义原则

- 所有数据实体都有对应的 TypeScript 接口
- 可选字段使用 `?` 标记
- 支持中英文字段（`*Zh` / `*En`）

---

## 3. 内容层 (`content/` + `lib/mdx.ts`)

### MDX 文件结构

研究项目的详细内容使用 MDX 文件管理，存储在 `/content/research/` 目录：

```mdx
---
id: deception-sandbox
title: 欺骗诱导沙箱
titleEn: Deception-Induced Sandbox
---

## 研究亮点

<HighlightBox>

- 创新性的多智能体博弈环境设计
- 动态交互中的欺骗行为识别机制
- 深层欺骗意图分析技术

</HighlightBox>

## 项目概述

通过构建欺骗诱导沙箱，我们提供了一个安全的测试环境...

## 技术特点

### 核心算法

$$
P(deception) = \frac{1}{1 + e^{-\theta^T x}}
$$

### 代码示例

\`\`\`python
def detect_deception(agent_behavior):
    # 欺骗检测算法
    features = extract_features(agent_behavior)
    return model.predict(features)
\`\`\`
```

### MDX 加载工具 (lib/mdx.ts)

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
 */
export async function getProjectContent(projectId: string): Promise<MDXContent | null> {
  try {
    const filePath = path.join(contentDirectory, 'research', `${projectId}.mdx`);

    if (!fs.existsSync(filePath)) {
      console.warn(`MDX file not found: ${filePath}`);
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
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
```

### 自定义 MDX 组件

```typescript
// components/mdx/HighlightBox.tsx
export default function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3">研究亮点</h3>
      <div className="space-y-2 text-gray-700">
        {children}
      </div>
    </div>
  );
}
```

```typescript
// components/mdx/MDXComponents.tsx
import HighlightBox from './HighlightBox';

export function getMDXComponents() {
  return {
    // 自定义组件
    HighlightBox,
    // HTML 标签重写
    h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
    code: (props: any) => <code className="bg-gray-100 px-1 rounded" {...props} />,
    // ... 更多组件映射
  };
}
```

---

## 4. 组件层 (`components/`)

### 组件分类

#### 布局组件 (Layout Components)

- `Navbar.tsx` - 响应式导航栏，支持多级下拉菜单
- `Footer.tsx` - 站点底部信息

#### 功能组件 (Feature Components)

- `HeroSection.tsx` - 首页英雄区域（带动画）
- `ConsensusSection.tsx` - 五大红线可视化（SVG 五边形）
- `ResearchSection.tsx` - 研究项目卡片展示
- `PlatformSection.tsx` - 平台能力模块
- `PartnersSection.tsx` - 合作伙伴 Logo 展示
- `VulnReportCTA.tsx` - 漏洞报告 CTA 按钮
- `ResearchProjectLayout.tsx` - 研究项目详情页布局

#### MDX 组件 (MDX Components)

- `components/mdx/MDXComponents.tsx` - MDX 组件映射和 HTML 标签重写
- `components/mdx/HighlightBox.tsx` - 研究亮点展示组件

### 组件示例

```typescript
// components/ResearchSection.tsx
'use client'; // 标记为客户端组件

import { researchProjects } from '@/data/research';

export default function ResearchSection() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {researchProjects.filter(p => p.featured).map((project) => (
          <div key={project.id} className="bg-white rounded-lg p-6">
            <h3>{project.titleZh}</h3>
            {/* ... */}
          </div>
        ))}
      </div>
    </section>
  );
}
```

### 组件开发规范

- 所有交互式组件必须标记 `'use client'`
- 使用 `@/` 路径别名导入模块
- Props 必须定义 TypeScript 接口

---

## 5. 路由层 (`app/`)

### 动态路由示例（含 MDX 渲染）

```typescript
// app/research/[category]/[project]/page.tsx
import { getProjectById } from '@/data/research';
import { notFound } from 'next/navigation';
import ResearchProjectLayout from '@/components/ResearchProjectLayout';
import { getProjectContent } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMDXComponents } from '@/components/mdx/MDXComponents';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';

export default async function ProjectPage({
  params
}: {
  params: Promise<{ category: string; project: string }>
}) {
  const { project: projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  // 加载 MDX 内容
  const mdxContent = project.contentPath
    ? await getProjectContent(project.contentPath)
    : null;

  return (
    <ResearchProjectLayout project={project}>
      <section className="mb-12">
        {mdxContent ? (
          <div className="prose prose-lg max-w-none">
            <MDXRemote
              source={mdxContent.content}
              components={getMDXComponents()}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkMath],
                  rehypePlugins: [rehypeKatex, rehypeHighlight],
                },
              }}
            />
          </div>
        ) : (
          <div className="text-gray-500 text-center py-8">暂无详细内容</div>
        )}
      </section>
    </ResearchProjectLayout>
  );
}
```

### 路由规则

- 使用 `[folder]` 创建动态路由段
- `page.tsx` 定义路由页面
- `layout.tsx` 定义共享布局
- 通过 `params` 获取动态参数

---

## 下一步

- 了解数据流转过程 → [数据流说明](./DATA_FLOW.md)
- 查看开发规范 → [开发规范](./DEV_GUIDELINES.md)
- 学习常见任务 → [常见开发任务](./COMMON_TASKS.md)

[← 返回文档中心](./README.md)
