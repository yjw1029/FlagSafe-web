# 开发规范

> 版本: 1.1 | 更新日期: 2025-12-31

[← 返回文档中心](./README.md)

---

## 1. 添加新页面

### 步骤

```bash
# 1. 在 app/ 下创建页面目录
app/new-feature/page.tsx

# 2. 创建页面组件
# app/new-feature/page.tsx
export default function NewFeaturePage() {
  return <div>新功能页面</div>;
}

# 3. 更新导航菜单
# components/Navbar.tsx
# 在 navigation 数组中添加新链接
```

### 规范

- 页面文件必须命名为 `page.tsx`
- 添加 `export const metadata` 定义 SEO 信息
- 使用现有组件保持视觉一致性

### 示例

```typescript
// app/new-feature/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '新功能 - FlagSafe',
  description: '新功能描述'
};

export default function NewFeaturePage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">新功能</h1>
      <p className="text-gray-600">功能描述...</p>
    </main>
  );
}
```

---

## 2. 添加新数据类型

### 步骤

```typescript
// 1. 定义类型 (types/index.ts)
export interface NewDataType {
  id: string;
  titleZh: string;
  titleEn: string;
}

// 2. 创建数据文件 (data/new-data.ts)
import { NewDataType } from '@/types';

export const newData: NewDataType[] = [
  { id: '1', titleZh: '标题', titleEn: 'Title' }
];

// 3. 在组件中使用
import { newData } from '@/data/new-data';
```

---

## 3. 样式和动画规范

### Tailwind CSS 使用

```typescript
// ✅ 推荐: 使用 Tailwind 原子类
<div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">

// ❌ 避免: 内联样式
<div style={{ backgroundColor: 'white', padding: '24px' }}>
```

### 动画实现

#### 方式 1: Tailwind 过渡动画

```typescript
<div className="transition-all duration-700 hover:scale-105">
  内容
</div>
```

#### 方式 2: CSS Keyframes

```typescript
// globals.css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

// 组件中使用
<div className="animate-[fadeIn_0.6s_ease-out]">
  内容
</div>
```

#### 方式 3: Styled JSX

```typescript
<div className="floating">
  <style jsx>{`
    .floating {
      animation: float 3s ease-in-out infinite;
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
  `}</style>
</div>
```

---

## 4. TypeScript 类型规范

### 必须定义类型的场景

```typescript
// ✅ Props 必须定义接口
interface ProjectCardProps {
  project: ResearchProject;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  // ...
}

// ✅ 函数参数和返回值
function getProjectById(id: string): ResearchProject | undefined {
  return projects.find(p => p.id === id);
}

// ✅ 状态变量显式声明
const [isOpen, setIsOpen] = useState<boolean>(false);
```

### 避免使用 `any`

```typescript
// ❌ 避免
const data: any = fetchData();

// ✅ 使用具体类型
const data: ResearchProject[] = fetchData();

// ✅ 如果类型不确定，使用 unknown
const data: unknown = fetchData();
if (Array.isArray(data)) {
  // 类型缩窄后使用
}
```

---

## 5. 客户端组件使用规范

### 何时使用 `'use client'`

- 使用 React Hooks (useState, useEffect, useRef)
- 使用浏览器 API (IntersectionObserver, localStorage)
- 处理用户交互事件 (onClick, onSubmit)

### 示例

```typescript
'use client';  // 必须在文件顶部

import { useState } from 'react';

export default function InteractiveComponent() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      点击次数: {count}
    </button>
  );
}
```

### 服务端组件（默认）

```typescript
// 不需要 'use client' 标记
import { researchProjects } from '@/data/research';

export default function StaticComponent() {
  return (
    <div>
      {researchProjects.map(project => (
        <div key={project.id}>{project.titleZh}</div>
      ))}
    </div>
  );
}
```

---

## 6. 组件组织规范

### 文件命名

- 组件文件使用 PascalCase: `ResearchSection.tsx`
- 工具文件使用 camelCase: `utils.ts`
- 数据文件使用 camelCase: `research.ts`

### 组件结构

```typescript
'use client'; // 如果需要

import { useState } from 'react'; // React imports
import Link from 'next/link'; // Next.js imports
import { Search } from 'lucide-react'; // 第三方库 imports
import { researchProjects } from '@/data/research'; // 本地数据 imports
import { ResearchProject } from '@/types/research'; // 本地类型 imports

// Props 接口定义
interface ComponentProps {
  data: ResearchProject[];
}

// 组件定义
export default function Component({ data }: ComponentProps) {
  // Hooks
  const [state, setState] = useState(false);

  // 事件处理函数
  const handleClick = () => {
    setState(!state);
  };

  // 渲染
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

---

## 7. 代码质量检查

### ESLint

```bash
# 运行 ESLint 检查
npm run lint

# 自动修复可修复的问题
npm run lint -- --fix
```

### TypeScript 检查

```bash
# 检查类型错误
npx tsc --noEmit
```

---

## 8. MDX 内容编写规范

### Frontmatter 格式

每个 MDX 文件必须在开头包含 frontmatter：

```mdx
---
id: project-id         # 必填：项目 ID，需与 data/research.ts 中的 contentPath 匹配
title: 项目标题        # 可选：中文标题
titleEn: Project Title # 可选：英文标题
---

正文内容...
```

### 支持的 Markdown 语法

#### 基础语法

```markdown
# 一级标题
## 二级标题
### 三级标题

**粗体文本** *斜体文本*

- 无序列表项 1
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2

[链接文本](https://example.com)
![图片](图片路径)

> 引用文本

\`行内代码\`
```

#### GitHub Flavored Markdown (GFM)

```markdown
| 表头1 | 表头2 |
|-------|-------|
| 单元格1 | 单元格2 |

- [ ] 待完成任务
- [x] 已完成任务
```

#### 代码块（语法高亮）

````markdown
\`\`\`python
def hello_world():
    print("Hello, World!")
\`\`\`

\`\`\`javascript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`
````

#### 数学公式（LaTeX）

```markdown
行内公式：$E = mc^2$

块级公式：
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### 自定义组件使用

#### HighlightBox 组件

用于展示研究亮点：

```mdx
<HighlightBox>

- 亮点 1：创新性的架构设计
- 亮点 2：高效的算法实现
- 亮点 3：完善的实验验证

</HighlightBox>
```

**注意事项：**
- `<HighlightBox>` 标签前后必须有空行
- 内容使用标准 Markdown 列表语法
- 支持嵌套 Markdown 格式（粗体、链接等）

### MDX 文件组织规范

```
content/
└── research/
    ├── deception-sandbox.mdx    # 欺骗诱导沙箱
    ├── mllm-deception.mdx        # 多模态大模型欺骗
    └── new-project.mdx           # 新项目（文件名 = contentPath）
```

- 文件名使用 kebab-case（小写字母 + 连字符）
- 文件名必须与 `data/research.ts` 中的 `contentPath` 字段一致
- 每个研究项目一个独立的 MDX 文件

### 添加新的 MDX 自定义组件

如需添加新的自定义组件：

```typescript
// 1. 创建组件 (components/mdx/NewComponent.tsx)
export default function NewComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="custom-styling">
      {children}
    </div>
  );
}

// 2. 注册组件 (components/mdx/MDXComponents.tsx)
import NewComponent from './NewComponent';

export function getMDXComponents() {
  return {
    HighlightBox,
    NewComponent,  // 添加新组件
    // ...
  };
}

// 3. 在 MDX 文件中使用
<NewComponent>
内容...
</NewComponent>
```

### MDX 编写最佳实践

- **空行隔离**：自定义组件（如 `<HighlightBox>`）前后保留空行
- **代码块语言**：始终指定代码块的语言类型以启用语法高亮
- **公式转义**：LaTeX 公式中的特殊字符（如 `_`）无需转义
- **图片路径**：使用相对于 `public/` 目录的绝对路径（如 `/images/diagram.png`）
- **一致性**：保持同类项目的结构一致（标题层级、章节顺序）

---

## 下一步

- 查看常见开发任务 → [常见开发任务](./COMMON_TASKS.md)
- 了解数据流转 → [数据流说明](./DATA_FLOW.md)
- 查看项目结构 → [项目结构](./PROJECT_STRUCTURE.md)

[← 返回文档中心](./README.md)
