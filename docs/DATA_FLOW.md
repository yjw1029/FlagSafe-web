# 数据流说明

> 版本: 1.1 | 更新日期: 2025-12-31

[← 返回文档中心](./README.md)

---

## 完整数据流程

```
┌─────────────────┐
│  1. 数据定义     │  data/research.ts
│  - 定义类型     │  types/research.ts
│  - 创建数据     │  export const projects = [...]
│  - 指定 contentPath │ contentPath: 'project-id'
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  2. 内容文件     │  content/research/project-id.mdx
│  - Frontmatter  │  ---\nid: project-id\ntitle: ...\n---
│  - MDX 内容     │  ## 标题\n内容...\n<Component />
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  3. 组件导入     │  components/ResearchSection.tsx
│  - import data  │  import { researchProjects } from '@/data/research'
│  - 类型检查     │  TypeScript 自动验证
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  4. 页面渲染     │  app/research/page.tsx
│  - 使用组件     │  <ResearchSection />
│  - 展示数据     │  自动渲染项目列表
└─────────────────┘

【研究项目详情页流程】
┌─────────────────┐
│  5. 详情页请求   │  /research/deception/project-id
│  - 解析 params  │  await params
│  - 查询项目     │  getProjectById(projectId)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  6. MDX 加载     │  lib/mdx.ts
│  - 读取文件     │  fs.readFileSync(filePath)
│  - 解析 Frontmatter │ gray-matter(fileContents)
│  - 返回内容     │  { content, frontmatter }
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  7. MDX 渲染     │  next-mdx-remote/rsc
│  - 编译 MDX     │  MDXRemote component
│  - 应用插件     │  remarkGfm, remarkMath, rehypeKatex
│  - 组件映射     │  getMDXComponents()
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  8. 最终输出     │  HTML with React components
│  - Prose 样式   │  Tailwind Typography
│  - 自定义组件   │  <HighlightBox />
│  - 代码高亮     │  highlight.js
│  - 数学公式     │  KaTeX
└─────────────────┘
```

---

## 数据流关键点

### 1. 数据定义阶段

在 `types/` 中定义 TypeScript 接口，在 `data/` 中创建符合接口的数据。

```typescript
// Step 1: 定义类型
// types/research.ts
export interface ResearchProject {
  id: string;
  titleZh: string;
  titleEn: string;
  featured: boolean;
}

// Step 2: 创建数据
// data/research.ts
import { ResearchProject } from '@/types/research';

export const researchProjects: ResearchProject[] = [
  {
    id: 'project-1',
    titleZh: '项目标题',
    titleEn: 'Project Title',
    featured: true
  }
];
```

### 2. 组件消费阶段

组件通过 `import` 直接获取数据，TypeScript 自动进行类型检查，无需状态管理库。

```typescript
// components/ResearchSection.tsx
import { researchProjects } from '@/data/research';

export default function ResearchSection() {
  // 直接使用数据，自动类型检查
  const featured = researchProjects.filter(p => p.featured);

  return (
    <div>
      {featured.map(project => (
        <div key={project.id}>
          <h3>{project.titleZh}</h3>
        </div>
      ))}
    </div>
  );
}
```

### 3. 页面展示阶段

页面组合各个功能组件，服务端渲染（默认）或客户端渲染。

```typescript
// app/research/page.tsx
import ResearchSection from '@/components/ResearchSection';

export default function ResearchPage() {
  return (
    <main>
      <ResearchSection />
    </main>
  );
}
```

---

## 未来 API 迁移

当需要对接后端 API 时，只需修改数据层：

### 当前实现（静态数据）

```typescript
// data/research.ts
export const researchProjects: ResearchProject[] = [
  { id: '1', titleZh: '项目1', titleEn: 'Project 1', featured: true },
  { id: '2', titleZh: '项目2', titleEn: 'Project 2', featured: false }
];

export function getProjectById(id: string) {
  return researchProjects.find(p => p.id === id);
}
```

### 迁移后（API 调用）

```typescript
// data/research.ts
export async function getResearchProjects() {
  const res = await fetch('/api/research');
  return res.json() as ResearchProject[];
}

export async function getProjectById(id: string) {
  const res = await fetch(`/api/research/${id}`);
  return res.json() as ResearchProject;
}
```

### 组件层无需修改

```typescript
// components/ResearchSection.tsx
// 只需将同步调用改为异步调用，组件逻辑保持不变
import { getResearchProjects } from '@/data/research';

export default async function ResearchSection() {
  const projects = await getResearchProjects();
  const featured = projects.filter(p => p.featured);

  return (
    <div>
      {featured.map(project => (
        <div key={project.id}>
          <h3>{project.titleZh}</h3>
        </div>
      ))}
    </div>
  );
}
```

**关键优势**: 类型定义保持不变，组件层只需改为异步组件，业务逻辑无需修改。

---

## 数据更新流程

### 添加新数据

```typescript
// 1. 在 types/ 定义类型（如需要）
export interface NewsItem {
  id: string;
  title: string;
  date: string;
}

// 2. 在 data/ 创建数据
export const newsItems: NewsItem[] = [
  { id: '1', title: '新闻标题', date: '2025-12-30' }
];

// 3. 组件自动获取
import { newsItems } from '@/data/news';
```

### 修改现有数据

直接编辑 `data/` 目录下的对应文件即可，类型系统会自动验证。

---

## 研究项目详情页数据流

### 完整流程图

```
用户访问 /research/deception/deception-sandbox
         ↓
app/research/[category]/[project]/page.tsx
         ↓
await params → { category: 'deception', project: 'deception-sandbox' }
         ↓
getProjectById('deception-sandbox')
         ↓
从 data/research.ts 获取项目元数据 { id, title, contentPath, ... }
         ↓
project.contentPath = 'deception-sandbox'
         ↓
getProjectContent('deception-sandbox')
         ↓
lib/mdx.ts: 读取 content/research/deception-sandbox.mdx
         ↓
gray-matter 解析 Frontmatter 和 Markdown 内容
         ↓
返回 { content: "## 标题...", frontmatter: { id, title } }
         ↓
<MDXRemote source={content} components={getMDXComponents()} />
         ↓
next-mdx-remote/rsc 编译 MDX
         ↓
应用 remark/rehype 插件:
  - remarkGfm (表格、任务列表)
  - remarkMath (数学公式解析)
  - rehypeKatex (LaTeX 渲染)
  - rehypeHighlight (代码高亮)
         ↓
组件映射:
  - <HighlightBox> → components/mdx/HighlightBox.tsx
  - h1, h2, code → 自定义样式组件
         ↓
最终渲染输出 (HTML + React Components)
```

### 关键代码示例

```typescript
// 1. 项目元数据 (data/research.ts)
{
  id: 'deception-sandbox',
  categoryId: 'deception',
  titleZh: '欺骗诱导沙箱',
  contentPath: 'deception-sandbox',  // 关联 MDX 文件
  featured: true
}

// 2. MDX 文件 (content/research/deception-sandbox.mdx)
---
id: deception-sandbox
title: 欺骗诱导沙箱
---

## 研究亮点

<HighlightBox>
- 亮点 1
</HighlightBox>

// 3. 页面组件 (app/research/[category]/[project]/page.tsx)
const mdxContent = await getProjectContent(project.contentPath);

<MDXRemote
  source={mdxContent.content}
  components={getMDXComponents()}
  options={{ mdxOptions: { remarkPlugins, rehypePlugins } }}
/>
```

---

## 下一步

- 学习开发规范 → [开发规范](./DEV_GUIDELINES.md)
- 查看常见任务 → [常见开发任务](./COMMON_TASKS.md)
- 理解核心模块 → [核心模块详解](./CORE_MODULES.md)

[← 返回文档中心](./README.md)
