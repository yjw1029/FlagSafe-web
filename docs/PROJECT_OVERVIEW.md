# 项目概述与技术栈

> 版本: 1.0 | 更新日期: 2025-12-30

[← 返回文档中心](./README.md)

---

## 项目概述

**FlagSafe** 是由北京智源人工智能研究院（BAAI）开发的大模型安全共识平台，旨在构建 AGI 时代的数字免疫系统。

### 核心功能模块

- **安全指南** (`/consensus`) - AI 安全五大红线展示
- **前沿探索** (`/research`) - 安全研究项目和论文
- **红队演练** (`/red-team`) - 攻击测试平台
- **蓝队防御** (`/blue-team`) - 防御体系展示
- **白盒透视** (`/white-box`) - 模型可解释性分析
- **新闻资讯** (`/news`) - 行业动态

### 项目特点

- ✅ 使用 Next.js 16 App Router 架构
- ✅ 完全 TypeScript 类型安全
- ✅ Tailwind CSS 4 原子化样式
- ✅ 静态数据驱动，易于迁移到 API
- ✅ 响应式设计，支持移动端

---

## 技术栈

### 核心框架

| 技术 | 版本 | 用途 |
|------|------|------|
| **Next.js** | 16.0.7 | React 全栈框架，使用 App Router |
| **React** | 19.2.0 | UI 组件库 |
| **TypeScript** | 5.x | 类型系统 |
| **Tailwind CSS** | 4.x | 样式框架 |

### 关键依赖

```json
{
  "lucide-react": "0.555.0",     // 图标库
  "clsx": "^2.1.1",              // 样式条件合并
  "tailwind-merge": "^2.6.0"     // Tailwind 类名合并
}
```

### 字体方案

- **中文**: Noto Sans SC (300, 400, 500, 700)
- **英文**: Inter (400, 600, 700)
- 使用 `next/font/google` 自动优化

### 开发工具

- ESLint 9 + eslint-config-next
- PostCSS + @tailwindcss/postcss

---

## 架构特点

### 静态数据驱动

当前使用静态数据存储在 `data/` 目录，结构已为 API 对接做好准备。迁移到 API 时，只需修改数据层，组件层无需改动。

```typescript
// 当前: 静态数据
export const researchProjects = [...];

// 迁移后: API 调用
export async function getResearchProjects() {
  const res = await fetch('/api/research');
  return res.json() as ResearchProject[];
}
```

### 类型安全

所有数据实体都有对应的 TypeScript 接口，确保编译时类型检查：

```typescript
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

### 组件化设计

采用 React 组件化开发，所有交互式组件使用 `'use client'` 标记：

```typescript
'use client';

import { useState } from 'react';

export default function InteractiveComponent() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

## 下一步

- 了解项目目录结构 → [项目结构](./PROJECT_STRUCTURE.md)
- 理解核心模块设计 → [核心模块详解](./CORE_MODULES.md)
- 学习开发规范 → [开发规范](./DEV_GUIDELINES.md)
- 查看常见开发任务 → [常见开发任务](./COMMON_TASKS.md)

[← 返回文档中心](./README.md)
