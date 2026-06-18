import { useState } from 'react'
import type { portfolioData } from '../data/portfolioData'

type Props = { data: typeof portfolioData }

export default function ContactSection({ data }: Props) {
  const [form, setForm] = useState({ name: '', message: '' })
  const [sent, setSent] = useState(false)

  // Format WhatsApp phone number (replace leading 0 with 62, remove non-digits)
  const cleanPhone = data.phone.replace(/[^0-9]/g, '')
  const waPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone
  const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(`Halo ${data.name}, saya tertarik dengan portofolio Anda dan ingin berkolaborasi.`)}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Pesan dari ${form.name} via Portofolio`)
    const body = encodeURIComponent(
      `Halo ${data.name},\n\n` +
      `Saya ${form.name} ingin menyampaikan pesan berikut:\n\n` +
      `${form.message}\n\n` +
      `---\n` +
      `Pesan ini dikirim melalui form kontak di portofolio Anda.`
    )

    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`

    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-14 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-widest text-violet-600 uppercase">Kontak</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-1">Hubungi Saya</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Tertarik untuk berkolaborasi atau punya pertanyaan? Saya terbuka untuk kesempatan kerja, proyek freelance, dan diskusi teknis.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-violet-50 hover:border-violet-200 border border-transparent transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="text-sm font-medium text-gray-800">{data.email}</p>
                  </div>
                </a>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-violet-50 hover:border-violet-200 border border-transparent transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Phone / WhatsApp</p>
                    <p className="text-sm font-medium text-gray-800">{data.phone}</p>
                  </div>
                </a>

                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-violet-50 hover:border-violet-200 border border-transparent transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">LinkedIn</p>
                    <p className="text-sm font-medium text-gray-800">Lihat Profil →</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nama</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                  placeholder="Nama lengkap"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Pesan</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all resize-none"
                  placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                />
              </div>

              {sent && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Aplikasi email Anda akan terbuka dengan pesan yang sudah terisi. Pastikan untuk menekan Kirim di aplikasi email Anda!
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Kirim via Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
