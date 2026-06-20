import type { portfolioData } from '../data/portfolioData'

type Props = { data: typeof portfolioData }

export default function HeroSection({ data }: Props) {
  return (
    <section id="about" className="pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* LEFT: Main Profile Card */}
          <div className="lg:w-72 xl:w-80 flex-shrink-0">
            {/* Profile Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              {/* Avatar / Photo */}
              {data.photo ? (
                <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 shadow-md ring-2 ring-violet-200">
                  <img
                    src={data.photo}
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${data.avatarColor} flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-md`}>
                  {data.avatar}
                </div>
              )}
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{data.name}</h1>
              <p className="text-violet-600 font-semibold text-sm mb-3">{data.title}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                <span className="px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse inline-block" />
                  Open to work
                </span>
                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  Full-time
                </span>
                <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  Remote / Hybrid
                </span>
              </div>

              <div className="space-y-2.5 text-sm text-gray-600 border-t border-gray-100 pt-5 mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="text-gray-400">📍</span>
                  <span>{data.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-gray-400">✉️</span>
                  <a href={`mailto:${data.email}`} className="text-violet-600 hover:underline truncate">{data.email}</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-gray-400">📱</span>
                  <span>{data.phone}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2 mb-5">
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={data.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>

              {/* Download CV */}
              <a
                href="./cv.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Education Card */}
            <div className="mt-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-base">🎓</span> Pendidikan
              </h3>
              {data.education.map((edu, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl ${edu.color} flex items-center justify-center font-bold text-xs flex-shrink-0`}>
                    {edu.icon}
                  </div>
                  <div>
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-gray-900 hover:text-violet-600 hover:underline inline-flex items-center gap-1"
                      >
                        {edu.school}
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-gray-900">{edu.school}</p>
                    )}
                    <p className="text-xs text-gray-500">{edu.major}</p>
                    <p className="text-xs text-gray-400">
                      {edu.period} · IPK {edu.gpa}
                      {edu.link && (
                        <>
                          {" · "}
                          <a
                            href={edu.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-violet-600 hover:underline"
                          >
                            Transkrip
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-base">🏅</span> Sertifikasi
              </h3>
              <div className="space-y-2">
                {data.certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 bg-violet-500 rounded-full" />
                    </span>
                    <div>
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-medium text-gray-800 hover:text-violet-600 hover:underline inline-flex items-center gap-1"
                        >
                          {cert.name}
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      ) : (
                        <p className="text-xs font-medium text-gray-800">{cert.name}</p>
                      )}
                      <p className="text-xs text-gray-400">{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="flex-1 min-w-0">
            {/* Bio Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-5">
              <h2 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span>👋</span> Tentang Saya
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm text-justify">{data.bio}</p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-gray-100">
                {[
                  { label: 'Tahun Pengalaman', value: '2+' },
                  { label: 'Proyek Selesai', value: '7+' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>🛠️</span> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-50 hover:bg-violet-50 hover:text-violet-700 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 hover:border-violet-200 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
