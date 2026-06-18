import type { portfolioData } from '../data/portfolioData'

type Props = { data: typeof portfolioData }

export default function ProjectsSection({ data }: Props) {
  return (
    <section id="projects" className="py-14 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-widest text-violet-600 uppercase">Portfolio</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-1">Proyek Unggulan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.projects.map((project, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-violet-200 transition-all duration-300 group"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>

                <div className="flex items-center justify-between">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.link != '' ? (
                    <a
                      href={project.link}
                      className="flex items-center gap-1 text-xs font-semibold text-violet-600 hover:text-violet-800 transition-colors ml-2 flex-shrink-0"
                    >
                      Lihat
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
