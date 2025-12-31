'use client';

import { use } from 'react';
import { getProjectById } from '@/data/research';
import { notFound } from 'next/navigation';
import ResearchProjectLayout from '@/components/ResearchProjectLayout';

export default function ProjectPage({
  params
}: {
  params: Promise<{ category: string; project: string }>
}) {
  const { project: projectId } = use(params);
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <ResearchProjectLayout project={project}>
      {/* 这里可以添加项目特定的内容 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">研究内容</h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="leading-relaxed mb-4">
            {project.descriptionEn}
          </p>

          {/* 根据不同项目可以添加更多自定义内容 */}
          {project.id === 'deception-sandbox' && (
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">研究亮点</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 创新性的多智能体博弈环境设计</li>
                <li>• 动态交互中的欺骗行为识别机制</li>
                <li>• 深层欺骗意图分析技术</li>
              </ul>
            </div>
          )}

          {project.id === 'mllm-deception' && (
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">研究亮点</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 跨模态欺骗行为检测算法</li>
                <li>• 图文一致性分析技术</li>
                <li>• 复杂场景下的鲁棒性评估</li>
              </ul>
            </div>
          )}

          {project.id === 'agent-deception' && (
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">研究亮点</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Agent意图识别与分析</li>
                <li>• 多维度欺骗行为评估框架</li>
                <li>• 实时监控与预警系统</li>
              </ul>
            </div>
          )}

          {project.id === 'text-deception' && (
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">研究亮点</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• DeceptionBench 标准评测基准</li>
                <li>• 自我监控机制的创新应用</li>
                <li>• 模型诚实度量化指标体系</li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </ResearchProjectLayout>
  );
}
