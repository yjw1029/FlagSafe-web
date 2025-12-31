# 数据流说明

> 版本: 1.0 | 更新日期: 2025-12-30

[← 返回文档中心](./README.md)

---

## 完整数据流程

```
┌─────────────────┐
│  1. 数据定义     │  data/research.ts
│  - 定义类型     │  types/research.ts
│  - 创建数据     │  export const projects = [...]
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  2. 组件导入     │  components/ResearchSection.tsx
│  - import data  │  import { researchProjects } from '@/data/research'
│  - 类型检查     │  TypeScript 自动验证
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  3. 页面渲染     │  app/research/page.tsx
│  - 使用组件     │  <ResearchSection />
│  - 展示数据     │  自动渲染数据
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

## 下一步

- 学习开发规范 → [开发规范](./DEV_GUIDELINES.md)
- 查看常见任务 → [常见开发任务](./COMMON_TASKS.md)
- 理解核心模块 → [核心模块详解](./CORE_MODULES.md)

[← 返回文档中心](./README.md)
