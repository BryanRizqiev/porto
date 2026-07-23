import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Tentang', href: '#about' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Find active section
      const sections = ['about', 'experience', 'projects', 'skills', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            {name.charAt(0)}
          </div>
          <span className="font-semibold text-gray-900 text-sm">
            {name.split(' ')[0]}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-violet-600 bg-violet-50'
                    : 'text-gray-600 hover:text-violet-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 flex flex-col gap-1">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-gray-700 hover:text-violet-600 border-b border-gray-50 last:border-0"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
