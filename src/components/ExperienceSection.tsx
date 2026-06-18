import type { portfolioData } from '../data/portfolioData'

type Props = { data: typeof portfolioData }

export default function ExperienceSection({ data }: Props) {
  return (
    <section id="experience" className="py-14 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-widest text-violet-600 uppercase">Karir</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-1">Pengalaman Kerja</h2>
        </div>

        <div className="space-y-4">
          {data.experience.map((exp, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-violet-200 transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                {/* Company Icon */}
                <div className={`w-12 h-12 rounded-xl ${exp.color} flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                  {exp.icon}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">{exp.role}</h3>
                      <p className="text-sm text-violet-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">{exp.period}</span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <span>⏰</span> {exp.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📍</span> {exp.mode}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{exp.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-violet-50 text-violet-700 text-xs font-medium rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
