import { getProjectById } from '@/data/research';
import { notFound } from 'next/navigation';
import ResearchProjectLayout from '@/components/ResearchProjectLayout';
import { getProjectContent } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMDXComponents } from '@/components/mdx/MDXComponents';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';

export default async function ProjectPage({
  params
}: {
  params: Promise<{ category: string; project: string }>
}) {
  const { project: projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  const mdxContent = project.contentPath ? await getProjectContent(project.contentPath) : null;

  return (
    <ResearchProjectLayout project={project}>
      <section className="mb-12">
        {mdxContent ? (
          <div className="prose prose-lg max-w-none">
            <MDXRemote
              source={mdxContent.content}
              components={getMDXComponents()}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkMath],
                  rehypePlugins: [rehypeKatex, rehypeHighlight],
                },
              }}
            />
          </div>
        ) : (
          <div className="text-gray-500 text-center py-8">暂无详细内容</div>
        )}
      </section>
    </ResearchProjectLayout>
  );
}
