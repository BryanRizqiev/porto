import type { portfolioData } from '../data/portfolioData'

type Props = { data: typeof portfolioData }

type Level = 'Dasar' | 'Menengah' | 'Mahir' | 'Sangat Mahir'

const levelConfig: Record<Level, { dots: number; badge: string }> = {
  'Dasar': { dots: 1, badge: 'bg-gray-100 text-gray-600' },
  'Menengah': { dots: 2, badge: 'bg-blue-50 text-blue-600' },
  'Mahir': { dots: 3, badge: 'bg-violet-50 text-violet-700' },
  'Sangat Mahir': { dots: 4, badge: 'bg-green-50 text-green-700' },
}

export default function SkillsSection({ data }: Props) {
  return (
    <section id="skills" className="py-14 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-widest text-violet-600 uppercase">Kompetensi</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-1">Keahlian</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Skill Levels */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="space-y-4">
              {data.skills.map((skill) => {
                const cfg = levelConfig[skill.level as Level]
                return (
                  <div key={skill.name} className="flex items-center gap-4">
                    <span className="flex-1 text-sm font-medium text-gray-700">{skill.name}</span>
                    <div className="flex items-center gap-2 w-44 flex-shrink-0">
                      {/* 4-dot indicator */}
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((d) => (
                          <div
                            key={d}
                            className={`w-2.5 h-2.5 rounded-full border-2 transition-colors ${
                              d <= cfg.dots
                                ? 'border-violet-500 bg-violet-500'
                                : 'border-gray-200 bg-transparent'
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${cfg.badge}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Soft Skills + Benefit Info */}
          <div className="flex flex-col gap-5">
            {/* Soft Skills */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji: '🤝', label: 'Team Player', desc: 'Kolaborasi efektif' },
                  { emoji: '💡', label: 'Problem Solving', desc: 'Analitis & kreatif' },
                  { emoji: '🗣️', label: 'Komunikasi', desc: 'Jelas & efektif' },
                  { emoji: '⚡', label: 'Fast Learner', desc: 'Adaptif terhadap teknologi baru' },
                  { emoji: '🎯', label: 'Detail-oriented', desc: 'Kualitas kode tinggi' },
                  { emoji: '📅', label: 'Manajemen Waktu', desc: 'Deadline terpenuhi' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 hover:bg-violet-50 transition-colors"
                  >
                    <span className="text-lg">{item.emoji}</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What I Offer */}
            <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-6 text-white">
              <h3 className="text-sm font-semibold mb-4 opacity-90">Yang Saya Tawarkan</h3>
              <div className="space-y-3">
                {[
                  'Kode bersih, terstruktur & terdokumentasi',
                  'Desain yang responsif & aksesibel',
                  'Performa aplikasi yang optimal',
                  'Estimasi waktu yang akurat',
                  'Komunikasi proaktif & transparan',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm opacity-90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
