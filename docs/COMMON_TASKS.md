# 常见开发任务

> 版本: 1.0 | 更新日期: 2025-12-30

[← 返回文档中心](./README.md)

---

## 任务 1: 添加新的研究项目

### 步骤

```typescript
// 1. 在 data/research.ts 中添加项目
export const researchProjects: ResearchProject[] = [
  // ... 现有项目
  {
    id: 'new-project',
    categoryId: 'deception',  // 关联类别
    titleZh: '新研究项目',
    titleEn: 'New Research Project',
    descriptionZh: '项目描述...',
    descriptionEn: 'Project description...',
    paperUrl: 'https://arxiv.org/...',
    githubUrl: 'https://github.com/...',
    featured: true  // 是否在首页展示
  }
];
```

### 效果

- 项目会自动出现在相应的类别页面中
- 如果 `featured: true`，则也会在首页展示
- 无需修改组件代码

### 相关文件

- `data/research.ts` - 添加项目数据
- `types/research.ts` - 查看类型定义

---

## 任务 2: 修改导航菜单

### 步骤

```typescript
// components/Navbar.tsx
const navigation = [
  { nameZh: '首页', nameEn: 'Home', href: '/' },
  {
    nameZh: '新菜单',
    nameEn: 'New Menu',
    children: [  // 添加下拉菜单
      { nameZh: '子菜单1', nameEn: 'Submenu 1', href: '/submenu-1' },
      { nameZh: '子菜单2', nameEn: 'Submenu 2', href: '/submenu-2' }
    ]
  }
];
```

### 支持的菜单类型

- **简单链接**: 提供 `href` 即可
- **下拉菜单**: 提供 `children` 数组
- **多级嵌套**: `children` 中可以继续包含 `children`

### 相关文件

- `components/Navbar.tsx` - 导航栏组件

---

## 任务 3: 更新主题颜色

### 步骤

```css
/* app/globals.css */
:root {
  --baai-blue: #0056D2;       /* 主色调 */
  --baai-blue-dark: #003D99;  /* 深色变体 */
  --baai-blue-light: #EFF6FF; /* 浅色背景 */
}

/* 如果需要更新 Tailwind 颜色 */
@theme inline {
  --color-baai-blue: #0056D2;
  --color-blue-600: #0056D2;
}
```

### 使用方式

```typescript
// 在组件中使用
<div className="bg-[var(--baai-blue)] text-white">
  使用自定义颜色
</div>

// 使用 Tailwind 类名
<div className="bg-blue-600 text-white">
  使用 Tailwind 颜色
</div>
```

### 相关文件

- `app/globals.css` - 全局样式配置

---

## 任务 4: 添加新的合作伙伴

### 步骤

```typescript
// 1. 将 Logo 图片放入 public/ 目录
// 例如: public/partner-logo.png

// 2. 在 data/partners.ts 添加记录
export const partners: Partner[] = [
  // ... 现有伙伴
  {
    id: 'new-partner',
    name: '新合作伙伴',
    logo: '/partner-logo.png',  // 放在 public/ 目录
    website: 'https://partner.com'
  }
];
```

### 效果

- 自动在首页合作伙伴区域显示
- 点击 Logo 跳转到合作伙伴网站

### 相关文件

- `data/partners.ts` - 合作伙伴数据
- `public/` - 存放 Logo 图片
- `components/PartnersSection.tsx` - 合作伙伴展示组件

---

## 任务 5: 添加新闻资讯

### 步骤

```typescript
// data/news.ts
export const newsItems: NewsItem[] = [
  // ... 现有新闻
  {
    id: 'news-3',
    titleZh: '新闻标题',
    titleEn: 'News Title',
    descriptionZh: '新闻描述...',
    descriptionEn: 'News description...',
    date: '2025-12-30',
    category: 'announcement',  // announcement | research | event
    url: 'https://...'
  }
];
```

### 新闻类别

- `announcement` - 公告
- `research` - 研究成果
- `event` - 活动信息

### 相关文件

- `data/news.ts` - 新闻数据
- `types/index.ts` - NewsItem 类型定义

---

## 任务 6: 修改页面元数据（SEO）

### 步骤

```typescript
// app/your-page/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '页面标题 - FlagSafe',
  description: '页面描述，用于 SEO',
  keywords: ['关键词1', '关键词2'],
  openGraph: {
    title: '社交分享标题',
    description: '社交分享描述',
    images: ['/og-image.png']
  }
};

export default function YourPage() {
  // ...
}
```

### SEO 最佳实践

- `title`: 保持在 60 字符以内
- `description`: 保持在 160 字符以内
- `keywords`: 3-5 个关键词
- `openGraph`: 为社交媒体分享优化

---

## 任务 7: 添加新的研究类别

### 步骤

```typescript
// 1. 在 data/research.ts 添加类别
export const researchCategories: ResearchCategory[] = [
  // ... 现有类别
  {
    id: 'new-category',
    titleZh: '新类别',
    titleEn: 'New Category',
    descriptionZh: '类别描述...',
    descriptionEn: 'Category description...',
    icon: 'Shield'  // Lucide 图标名称
  }
];

// 2. 添加该类别下的项目
export const researchProjects: ResearchProject[] = [
  {
    id: 'project-in-new-category',
    categoryId: 'new-category',  // 关联到新类别
    titleZh: '项目标题',
    // ...
  }
];
```

### 效果

- 自动生成 `/research/new-category` 路由
- 在研究总览页面显示新类别
- 支持动态路由访问类别下的所有项目

### 相关文件

- `data/research.ts` - 研究类别和项目数据
- `app/research/[category]/page.tsx` - 动态类别页面

---

## 任务 8: 自定义 404 页面

### 步骤

```typescript
// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">页面未找到</h2>
      <p className="text-gray-600 mb-8">
        抱歉，您访问的页面不存在。
      </p>
      <a
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        返回首页
      </a>
    </div>
  );
}
```

### 相关文件

- `app/not-found.tsx` - 404 页面

---

## 任务 9: 添加环境变量

### 步骤

```bash
# 1. 创建 .env.local 文件
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://...
SECRET_KEY=your-secret-key
```

```typescript
// 2. 在代码中使用
// 客户端可访问（必须以 NEXT_PUBLIC_ 开头）
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// 仅服务端可访问
const dbUrl = process.env.DATABASE_URL;
```

### 注意事项

- `.env.local` 不应提交到 Git
- `NEXT_PUBLIC_` 前缀的变量会暴露给浏览器
- 敏感信息不要使用 `NEXT_PUBLIC_` 前缀

---

## 任务 10: 添加图片资源

### 步骤

```typescript
// 1. 将图片放入 public/ 目录
// 例如: public/images/banner.jpg

// 2. 在组件中使用 Next.js Image 组件
import Image from 'next/image';

export default function Component() {
  return (
    <Image
      src="/images/banner.jpg"
      alt="Banner"
      width={1200}
      height={600}
      priority  // 首屏图片使用 priority
    />
  );
}
```

### Next.js Image 优势

- 自动优化图片大小
- 懒加载（除非设置 `priority`）
- 防止布局偏移
- 支持 WebP 等现代格式

### 相关文件

- `public/` - 存放静态图片
- `next.config.ts` - 图片优化配置

---

## 下一步

- 查看开发规范 → [开发规范](./DEV_GUIDELINES.md)
- 了解数据流转 → [数据流说明](./DATA_FLOW.md)
- 查看项目结构 → [项目结构](./PROJECT_STRUCTURE.md)

[← 返回文档中心](./README.md)
