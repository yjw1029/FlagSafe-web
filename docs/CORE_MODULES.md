# 核心模块详解

> 版本: 1.0 | 更新日期: 2025-12-30

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

## 3. 组件层 (`components/`)

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

## 4. 路由层 (`app/`)

### 动态路由示例

```typescript
// app/research/[category]/[project]/page.tsx
import { getProjectById } from '@/data/research';
import ResearchProjectLayout from '@/components/ResearchProjectLayout';

export default function ProjectPage({
  params
}: {
  params: { category: string; project: string }
}) {
  const project = getProjectById(params.project);

  if (!project) {
    return <div>项目未找到</div>;
  }

  return <ResearchProjectLayout project={project} />;
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
