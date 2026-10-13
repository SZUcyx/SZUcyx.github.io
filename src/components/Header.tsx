import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { site } from '../data/site'
import { scrollToId } from '../utils/scroll'
import { trackAction } from '../../analytics/tracker/tracker'

const sections = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
]

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const home = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  // 在首页直接平滑滚动；在子页面先回首页再滚动到目标区块
  const goToSection = (id: string) => {
    setMenuOpen(false)
    if (home) {
      scrollToId(id)
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container nav-inner">
        <Link className="brand" to="/" aria-label="Go to home">
          Shaw<span className="brand-dot">.</span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <div id="section-navigation" className={`nav-sections${menuOpen ? ' is-open' : ''}`}>
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className="nav-link-button"
                onClick={() => goToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
          <a href={site.github} target="_blank" rel="noreferrer" onClick={() => trackAction('github_link')}>GitHub ↗</a>
          <a className="nav-cta" href={`mailto:${site.email}`} onClick={() => trackAction('contact_email')}>Contact</a>
          <button
            className="nav-toggle"
            ref={toggleRef}
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="section-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
              {menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
