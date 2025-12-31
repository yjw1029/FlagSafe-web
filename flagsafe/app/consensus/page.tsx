'use client';

import { redLines } from '@/data/redlines';
import { useState, useEffect } from 'react';
import { Shield, FileText } from 'lucide-react';

const signatures = [
  { name: 'Yoshua Bengio', affiliation: '蒙特利尔大学' },
  { name: 'Geoffrey Hinton', affiliation: '多伦多大学' },
  { name: '姚期智', affiliation: '清华大学' },
  { name: 'Stuart Russell', affiliation: '加州大学伯克利分校' },
  { name: '张宏江', affiliation: '' },
  { name: '张亚勤', affiliation: '清华大学' },
  { name: '傅莹', affiliation: '' },
  { name: '薛澜', affiliation: '清华大学' },
  { name: '黄铁军', affiliation: '智源研究院' },
  { name: '王仲远', affiliation: '智源研究院' },
  { name: 'Dawn Song', affiliation: '加州大学伯克利分校' },
  { name: 'Robert Trager', affiliation: '牛津大学' },
  { name: 'Toby Ord', affiliation: '牛津大学' },
  { name: 'Gillian Hadfield', affiliation: '多伦多大学' },
  { name: 'Fynn Heide', affiliation: 'Centre for the Governance of AI' },
  { name: 'Davidad Dalrymple', affiliation: '英国ARIA' },
  { name: 'Dylan Hadfield-Menell', affiliation: '麻省理工学院' },
  { name: '李航', affiliation: '' },
  { name: '曾毅', affiliation: '中国科学院自动化研究所' },
  { name: '田天', affiliation: '瑞莱智慧' },
  { name: '张鹏', affiliation: '智谱AI' },
  { name: '田溯宁', affiliation: '宽带资本' },
  { name: 'Adam Gleave', affiliation: 'FAR AI' },
  { name: '杨耀东', affiliation: '北京大学' }
];

const mediaArticles = [
  {
    title: 'CGTN｜Artificial Intelligence Safety: International dialogue on making AI safe',
    url: 'https://news.cgtn.com/news/2024-03-14/VHJhbnNjcmlwdDc3NzI1/index.html',
    image: '/01.png'
  },
  {
    title: 'FT｜Chinese and western scientists identify \'red lines\' on AI risks',
    url: 'https://archive.md/6xhD6',
    image: '/02.jpg'
  },
  {
    title: 'BRTV｜北京AI安全国际对话闭门论坛举办 《北京AI安全国际共识》发布',
    url: 'https://m.btime.com/item/261i43qvj9rqc5ocde1h9bkptap',
    image: '/03.png'
  }
];

export default function ConsensusPage() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 pb-16 pt-20 lg:pt-24 border-b border-gray-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl transition-all duration-1000 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute -bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-green-300/20 to-blue-300/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200 text-green-700 text-sm font-semibold mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <FileText className="w-4 h-4" />
            <span>国际共识</span>
          </div>

          <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {language === 'zh' ? '北京AI安全国际共识' : 'Beijing AI Safety International Consensus'}
            </h1>
            <button
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="px-6 py-2.5 text-sm font-semibold text-gray-700 hover:text-gray-900 border-2 border-gray-300 rounded-xl hover:bg-white bg-white/80 backdrop-blur-sm transition-all shadow-sm hover:shadow-md flex-shrink-0"
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {language === 'zh' ? (
          <>
            {/* 中文版本 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">人工智能风险红线</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  人工智能系统不安全的开发、部署或使用，在我们的有生之年就可能给人类带来灾难性甚至生存性风险。随着数字智能接近甚至超越人类智能，由误用和失控所带来的风险将大幅增加。
                </p>
                <p>
                  在过去冷战最激烈的时候，国际科学界与政府间的合作帮助避免了热核灾难。面对前所未有的技术，人类需要再次合作以避免其可能带来的灾难的发生。在这份共识声明中，我们提出了几条人工智能发展作为一种国际协作机制的具体红线，包括但不限于下列问题。在未来的国际对话中，面对快速发展的人工智能技术，我们将继续完善对这些问题的探讨。
                </p>
              </div>
            </section>

            {/* 红线列表 */}
            <section className="mb-12">
              <div className="grid grid-cols-1 gap-6">
                {redLines.map((line, idx) => (
                  <div key={line.id} className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                    {/* Number badge */}
                    <div className="absolute -left-4 top-8 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>

                    {/* Content with left padding for badge */}
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {line.titleZh}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {line.description}
                      </p>
                    </div>

                    {/* Hover gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* 路线 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">路线</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                确保这些红线不被僭越是可能做到的，但需要我们的共同努力：既要建立并改进治理机制，也要研发更多安全技术。
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">治理</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      我们需要全面的治理机制来确保开发或部署的系统不违反红线。我们应该立即实施针对超过特定计算或能力阈值的人工智能模型和训练行为的国家层面的注册要求。注册应确保政府能够了解其境内最先进的人工智能，并具备遏制危险模型分发和运营的手段。
                    </p>
                    <p>
                      国家监管机构应帮助采纳与全球对齐的要求以避免僭越这些红线。模型进入全球市场的权限应取决于国内法规是否基于国际审计达到国际标准，并有效防止了违反红线的系统的开发和部署。
                    </p>
                    <p>
                      我们应采取措施防止最危险技术的扩散，同时确保广泛收获人工智能技术的价值。为此，我们应建立多边机构和协议，安全且包容地治理通用人工智能（AGI）发展，并设立执行机制，以确保红线不被僭越，共同利益得到广泛分享。
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">测量与评估</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      在这些红线被僭越的实质性风险出现之前，我们应开发全面的方法和技术来使这些红线具体化、防范工作可操作化。为了确保对红线的检测技术能够跟上快速发展的人工智能，我们应该发展人类监督下的红队测试和自动化模型评估。
                    </p>
                    <p>
                      开发者有责任通过严格的实践评估、定量保证或数学证明来有力地证明人工智能系统未僭越红线。
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">技术合作</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      国际科学界必须共同合作，以应对高级人工智能系统带来的技术和社会挑战。我们鼓励建立更强大的全球技术网络，通过访问学者计划和组织深入的人工智能安全会议和研讨会，加速人工智能安全领域的研发和合作。支持这一领域的成长将需要更多资金：我们呼吁人工智能开发者和政府资助者至少将他们人工智能研发预算的三分之一投入到安全领域。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 总结 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">总结</h2>
              <p className="text-gray-700 leading-relaxed">
                避免人工智能导致的灾难性全球后果需要我们采取果断的行动。协同合作的技术研究与审慎的国际监管机制的结合可以缓解人工智能带来的大部分风险，并实现其诸多潜在价值。我们必须继续坚持并加强国际科学界和政府在安全方面的合作。
              </p>
            </section>
          </>
        ) : (
          <>
            {/* English Version */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Consensus Statement on Red Lines in Artificial Intelligence</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Unsafe development, deployment, or use of AI systems may pose catastrophic or even existential risks to humanity within our lifetimes. These risks from misuse and loss of control could increase greatly as digital intelligence approaches or even surpasses human intelligence.
                </p>
                <p>
                  In the depths of the Cold War, international scientific and governmental coordination helped avert thermonuclear catastrophe. Humanity again needs to coordinate to avert a catastrophe that could arise from unprecedented technology. In this consensus statement, we propose red lines in AI development as an international coordination mechanism, including the following non-exhaustive list. At future International Dialogues we will build on this list in response to this rapidly developing technology.
                </p>
              </div>
            </section>

            {/* Red Lines List */}
            <section className="mb-12">
              <div className="grid grid-cols-1 gap-6">
                {redLines.map((line, idx) => (
                  <div key={line.id} className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                    {/* Number badge */}
                    <div className="absolute -left-4 top-8 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>

                    {/* Content with left padding for badge */}
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {line.titleEn}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base">
                        {line.id === 'self-replication' && 'No AI system should be able to copy or improve itself without explicit human approval and assistance. This includes both exact copies of itself as well as creating new AI systems of similar or greater abilities.'}
                        {line.id === 'power-seeking' && 'No AI system should take actions to unduly increase its power and influence.'}
                        {line.id === 'weaponization' && 'No AI systems should substantially increase the ability of actors to design weapons of mass destruction, or violate the biological or chemical weapons convention.'}
                        {line.id === 'cyberattack' && 'No AI system should be able to autonomously execute cyberattacks resulting in serious financial losses or equivalent harm.'}
                        {line.id === 'deception' && 'No AI system should be able to consistently cause its designers or regulators to misunderstand its likelihood or capability to cross any of the preceding red lines.'}
                      </p>
                    </div>

                    {/* Hover gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Roadmap */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Roadmap to Red Line Enforcement</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Ensuring these red lines are not crossed is possible, but will require a concerted effort to develop both improved governance regimes and technical safety methods.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Governance</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Comprehensive governance regimes are needed to ensure red lines are not breached by developed or deployed systems. We should immediately implement domestic registration for AI models and training runs above certain compute or capability thresholds. Registrations should ensure governments have visibility into the most advanced AI in their borders and levers to stem distribution and operation of dangerous models.
                    </p>
                    <p>
                      Domestic regulators ought to adopt globally aligned requirements to prevent crossing these red lines. Access to global markets should be conditioned on domestic regulations meeting these global standards as determined by an international audit, effectively preventing development and deployment of systems that breach red lines.
                    </p>
                    <p>
                      We should take measures to prevent the proliferation of the most dangerous technologies while ensuring broad access to the benefits of AI technologies. To achieve this we should establish multilateral institutions and agreements to govern AGI development safely and inclusively with enforcement mechanisms to ensure red lines are not crossed and benefits are shared broadly.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Measurement and Evaluation</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      We should develop comprehensive methods and techniques to operationalize these red lines prior to there being a meaningful risk of them being crossed. To ensure red line testing regimes keep pace with rapid AI development, we should invest in red teaming and automating model evaluation with appropriate human oversight.
                    </p>
                    <p>
                      The onus should be on developers to convincingly demonstrate that red lines will not be crossed such as through rigorous empirical evaluations, quantitative guarantees or mathematical proofs.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Collaboration</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                      The international scientific community must work together to address the technological and social challenges posed by advanced AI systems. We encourage building a stronger global technical network to accelerate AI safety R&D and collaborations through visiting researcher programs and organizing in-depth AI safety conferences and workshops. Additional funding will be required to support the growth of this field: we call for AI developers and government funders to invest at least one third of their AI R&D budget in safety.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed">
                Decisive action is required to avoid catastrophic global outcomes from AI. The combination of concerted technical research efforts with a prudent international governance regime could mitigate most of the risks from AI, enabling the many potential benefits. International scientific and government collaboration on safety must continue and grow.
              </p>
            </section>
          </>
        )}

        {/* Signatures */}
        <section className="mb-12 border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {language === 'zh' ? '签署人' : 'Signatures'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {signatures.map((sig, idx) => (
              <div key={idx} className="text-gray-700">
                <span className="font-medium">{sig.name}</span>
                {sig.affiliation && <span className="text-gray-500">，{sig.affiliation}</span>}
              </div>
            ))}
          </div>
        </section>

        {/* Media Mentions */}
        <section className="border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">MEDIA MENTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaArticles.map((article, idx) => (
              <a
                key={idx}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
