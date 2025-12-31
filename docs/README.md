# FlagSafe 文档中心

> 版本: 1.0 | 更新日期: 2025-12-30

欢迎查阅 FlagSafe 项目文档。本文档中心包含项目的完整技术文档，帮助开发者快速理解项目结构和开发规范。

---

## 📚 文档索引

### 快速入门

- **[项目概述与技术栈](./PROJECT_OVERVIEW.md)** - 了解 FlagSafe 的核心功能、技术选型和依赖关系
- **[常见开发任务](./COMMON_TASKS.md)** - 快速查找常见操作的步骤和代码示例

### 架构与设计

- **[项目结构](./PROJECT_STRUCTURE.md)** - 完整的目录结构说明和文件索引
- **[核心模块详解](./CORE_MODULES.md)** - 深入理解数据层、类型系统、组件层和路由层
- **[数据流说明](./DATA_FLOW.md)** - 了解数据在项目中的流转过程

### 开发规范

- **[开发规范](./DEV_GUIDELINES.md)** - 页面、组件、样式和 TypeScript 的开发规范

---

## 🎯 快速导航

### 我想...

| 目标 | 查看文档 |
|------|----------|
| 了解项目整体情况 | [项目概述](./PROJECT_OVERVIEW.md) |
| 查找特定文件位置 | [项目结构 - 文件索引](./PROJECT_STRUCTURE.md#文件索引) |
| 添加新的研究项目 | [常见任务 - 添加研究项目](./COMMON_TASKS.md#任务-1-添加新的研究项目) |
| 修改导航菜单 | [常见任务 - 修改导航菜单](./COMMON_TASKS.md#任务-2-修改导航菜单) |
| 添加新页面 | [开发规范 - 添加新页面](./DEV_GUIDELINES.md#1-添加新页面) |
| 了解数据如何流转 | [数据流说明](./DATA_FLOW.md) |
| 理解组件架构 | [核心模块 - 组件层](./CORE_MODULES.md#3-组件层-components) |
| 更新主题颜色 | [常见任务 - 更新主题颜色](./COMMON_TASKS.md#任务-3-更新主题颜色) |

---

## 🔧 开发工作流

### 第一次接触项目

1. 阅读 [项目概述](./PROJECT_OVERVIEW.md) 了解项目背景
2. 查看 [项目结构](./PROJECT_STRUCTURE.md) 熟悉目录组织
3. 学习 [开发规范](./DEV_GUIDELINES.md) 了解编码标准

### 日常开发

1. 参考 [常见开发任务](./COMMON_TASKS.md) 查找具体操作步骤
2. 查阅 [核心模块详解](./CORE_MODULES.md) 理解代码组织
3. 遵循 [开发规范](./DEV_GUIDELINES.md) 保持代码一致性

### 架构理解

1. 阅读 [核心模块详解](./CORE_MODULES.md) 理解各层职责
2. 查看 [数据流说明](./DATA_FLOW.md) 了解数据流转
3. 参考 [项目结构](./PROJECT_STRUCTURE.md) 查找具体文件

---

## 📖 文档维护

- **更新频率**: 当项目结构发生重大变化时更新
- **维护者**: BAAI Team
- **反馈渠道**: 如发现文档错误或需要补充，请联系项目维护者

---

## 🚀 快速命令

```bash
# 开发服务器
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# 查看项目结构
tree -L 3 -I 'node_modules|.git|.next'
```

---

## 📧 相关链接

- **项目网站**: https://www.baai.ac.cn
- **GitHub**: https://github.com/BAAI
- **Next.js 文档**: https://nextjs.org/docs
- **Tailwind CSS 文档**: https://tailwindcss.com/docs
- **TypeScript 文档**: https://www.typescriptlang.org/docs
