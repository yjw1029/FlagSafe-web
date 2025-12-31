# CLAUDE.md

## 项目概览
本项目是一个基于 Next.js 的大模型安全共识平台，集成了北京智源人工智能研究院的大模型安全研究中心的相关工作。

## 技术规范与文档索引

### 📚 核心文档
- **文档中心**: @./docs/README.md - 文档总览和快速导航
- **项目概述**: @./docs/PROJECT_OVERVIEW.md - 项目背景、技术栈、架构特点
- **项目结构**: @./docs/PROJECT_STRUCTURE.md - 目录结构、路由映射、文件索引
- **核心模块**: @./docs/CORE_MODULES.md - 数据层、类型系统、组件层、路由层详解
- **数据流说明**: @./docs/DATA_FLOW.md - 数据流转过程、API 迁移指南
- **开发规范**: @./docs/DEV_GUIDELINES.md - 页面、组件、样式、TypeScript 规范
- **常见任务**: @./docs/COMMON_TASKS.md - 常见开发操作的步骤和代码示例

### 📖 快速查阅指南

**根据任务类型选择文档：**

| 任务类型 | 查看文档 |
|---------|----------|
| 第一次了解项目 | @./docs/README.md → @./docs/PROJECT_OVERVIEW.md |
| 查找特定文件位置 | @./docs/PROJECT_STRUCTURE.md |
| 添加新功能/页面 | @./docs/DEV_GUIDELINES.md → @./docs/COMMON_TASKS.md |
| 理解代码组织方式 | @./docs/CORE_MODULES.md |
| 了解数据如何流转 | @./docs/DATA_FLOW.md |
| 添加研究项目/新闻 | @./docs/COMMON_TASKS.md |
| 修改导航/样式 | @./docs/COMMON_TASKS.md |

## 最佳实践与维护策略

### 代码修改流程
1. **理解需求** - 询问用户具体需求和期望效果
2. **查阅文档** - 根据上表选择合适的文档进行查阅，理解相关模块
3. **定位代码** - 使用 @./docs/PROJECT_STRUCTURE.md 中的文件索引快速定位
4. **执行修改** - 遵循 @./docs/DEV_GUIDELINES.md 中的开发规范
5. **更新文档** - 如有架构变化，同步更新相关文档

### 文档维护规则
- **修改代码后**：如果涉及架构变化，及时更新 `docs/` 目录下的相关文档
- **修改功能模块后**：更新 `docs/CORE_MODULES.md` 和 `docs/PROJECT_STRUCTURE.md`
- **添加新页面后**：更新 `docs/PROJECT_STRUCTURE.md` 中的路由映射表
- **修改数据流后**：更新 `docs/DATA_FLOW.md`
- **新增常见任务**：补充到 `docs/COMMON_TASKS.md`
- **用户文档同步**：重大变更需同步更新 `flagsafe/README.md` 和 `flagsafe/README_CN.md`

### 注意事项
- ⚠️ **不要直接搜索代码**：先查阅文档理解结构，再精准定位
- ✅ **优先使用文档索引**：使用 PROJECT_STRUCTURE.md 的文件索引表快速查找
- ✅ **遵循现有规范**：查看 DEV_GUIDELINES.md 保持代码一致性
- ✅ **参考常见任务**：类似操作参考 COMMON_TASKS.md 中的示例