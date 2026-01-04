# 项目结构

> 版本: 1.1 | 更新日期: 2025-12-31

[← 返回文档中心](./README.md)

---

## 目录结构

```
flagsafe/
├── app/                    # Next.js App Router 页面
│   ├── page.tsx            # 首页
│   ├── layout.tsx          # 全局布局（包含 Navbar + Footer）
│   ├── globals.css         # 全局样式和 Tailwind 配置
│   ├── consensus/          # 安全指南页面
│   ├── research/           # 前沿探索（支持动态路由）
│   │   ├── page.tsx        # 研究总览
│   │   └── [category]/     # 动态类别路由
│   │       ├── page.tsx    # 类别页面
│   │       └── [project]/  # 动态项目路由
│   │           └── page.tsx # 项目详情（MDX 渲染）
│   ├── red-team/           # 红队演练
│   ├── blue-team/          # 蓝队防御
│   ├── white-box/          # 白盒透视
│   └── news/               # 新闻资讯
│
├── components/             # React 组件
│   ├── Navbar.tsx          # 导航栏（带下拉菜单）
│   ├── Footer.tsx          # 页脚
│   ├── HeroSection.tsx     # 首页英雄区域
│   ├── ConsensusSection.tsx # 五大红线展示
│   ├── ResearchSection.tsx  # 研究项目展示
│   ├── PlatformSection.tsx  # 平台模块
│   ├── PartnersSection.tsx  # 合作伙伴
│   ├── VulnReportCTA.tsx    # 漏洞报告 CTA
│   ├── ResearchProjectLayout.tsx # 研究项目布局
│   └── mdx/                # MDX 自定义组件
│       ├── MDXComponents.tsx    # MDX 组件映射
│       └── HighlightBox.tsx     # 研究亮点展示组件
│
├── content/                # MDX 内容文件
│   └── research/           # 研究项目详细内容
│       ├── deception-sandbox.mdx   # 欺骗诱导沙箱
│       ├── mllm-deception.mdx      # 多模态大模型欺骗
│       ├── agent-deception.mdx     # 智能体欺骗
│       └── text-deception.mdx      # 文本欺骗
│
├── data/                   # 数据层（Mock 数据）
│   ├── redlines.ts         # AI 安全五大红线
│   ├── research.ts         # 研究项目和类别
│   ├── platform.ts         # 平台模块数据
│   ├── partners.ts         # 合作伙伴信息
│   ├── news.ts             # 新闻资讯
│   └── vulnerabilities.ts  # 漏洞报告数据
│
├── types/                  # TypeScript 类型定义
│   ├── index.ts            # 主要类型定义
│   └── research.ts         # 研究项目类型
│
├── lib/                    # 工具函数
│   ├── utils.ts            # cn() 样式合并工具
│   └── mdx.ts              # MDX 文件加载和编译
│
├── public/                 # 静态资源
│   ├── baai-logo.png       # BAAI Logo
│   └── *.png, *.jpg        # 图片资源
│
├── package.json            # 项目依赖
├── tsconfig.json           # TypeScript 配置
├── next.config.ts          # Next.js 配置（含 MDX 插件）
├── postcss.config.mjs      # PostCSS 配置
└── eslint.config.mjs       # ESLint 配置
```

---

## 目录职责说明

| 目录 | 职责 | 修改频率 |
|------|------|----------|
| `app/` | 页面路由和布局 | 高 - 新增页面时修改 |
| `components/` | 可复用 UI 组件 | 中 - 新增功能模块时修改 |
| `content/` | MDX 内容文件 | 高 - 研究项目内容更新时修改 |
| `data/` | 静态数据存储 | 高 - 内容更新时修改 |
| `types/` | TypeScript 类型 | 中 - 新增数据结构时修改 |
| `lib/` | 工具函数 | 低 - 很少修改 |
| `public/` | 静态资源 | 中 - 添加图片时修改 |

---

## 路由映射表

| URL 路径 | 文件路径 | 说明 |
|----------|----------|------|
| `/` | `app/page.tsx` | 首页 |
| `/consensus` | `app/consensus/page.tsx` | 安全指南 |
| `/research` | `app/research/page.tsx` | 研究总览 |
| `/research/deception` | `app/research/[category]/page.tsx` | 动态类别页 |
| `/research/deception/project-1` | `app/research/[category]/[project]/page.tsx` | 动态项目页 |
| `/red-team` | `app/red-team/page.tsx` | 红队演练 |
| `/blue-team` | `app/blue-team/page.tsx` | 蓝队防御 |
| `/white-box` | `app/white-box/page.tsx` | 白盒透视 |
| `/news` | `app/news/page.tsx` | 新闻资讯 |

---

## 文件索引

### 关键文件快速定位

| 需要修改... | 查看文件 |
|------------|----------|
| 首页内容 | `app/page.tsx` |
| 全局布局（导航栏/页脚） | `app/layout.tsx` |
| 导航菜单 | `components/Navbar.tsx` |
| 研究项目数据 | `data/research.ts` |
| 研究项目内容 | `content/research/{项目ID}.mdx` |
| MDX 自定义组件 | `components/mdx/MDXComponents.tsx` |
| MDX 加载逻辑 | `lib/mdx.ts` |
| 五大红线内容 | `data/redlines.ts` |
| 合作伙伴 Logo | `data/partners.ts` + `public/` |
| 新闻资讯 | `data/news.ts` |
| 全局样式/主题色 | `app/globals.css` |
| TypeScript 类型 | `types/index.ts`, `types/research.ts` |
| Next.js 配置（MDX） | `next.config.ts` |
| 路径别名配置 | `tsconfig.json` (paths) |
| 依赖包管理 | `package.json` |

### 页面组件对应表

| 页面 | 主要组件 | 数据来源 |
|------|----------|----------|
| 首页 (`/`) | HeroSection, ConsensusSection, ResearchSection, PlatformSection, PartnersSection | data/redlines.ts, data/research.ts, data/platform.ts, data/partners.ts |
| 安全指南 (`/consensus`) | ConsensusSection | data/redlines.ts |
| 研究总览 (`/research`) | ResearchSection | data/research.ts |
| 研究项目详情 | ResearchProjectLayout, MDXRemote | data/research.ts (getProjectById) + content/research/{项目ID}.mdx |
| 平台模块页面 | PlatformSection | data/platform.ts |
| 新闻资讯 (`/news`) | NewsSection | data/news.ts |

---

## 下一步

- 理解核心模块设计 → [核心模块详解](./CORE_MODULES.md)
- 了解数据流转过程 → [数据流说明](./DATA_FLOW.md)
- 查看开发规范 → [开发规范](./DEV_GUIDELINES.md)

[← 返回文档中心](./README.md)
