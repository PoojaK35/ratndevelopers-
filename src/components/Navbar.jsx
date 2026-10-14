import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { navLinks } from '../data/site'
import Icon from './Icon.jsx'
import Logo from './Logo.jsx'

function isLinkActive(to, { pathname, hash }) {
  if (to.includes('#')) {
    const [path, linkHash] = to.split('#')
    return pathname === (path || '/') && hash === `#${linkHash}`
  }
  if (to === '/') return pathname === '/' && !hash
  return pathname === to || pathname.startsWith(`${to}/`)
}

function NavItems({ location, onNavigate, className }) {
  return (
    <ul className={className}>
      {navLinks.map((link) => {
        const active = isLinkActive(link.to, location)
        return (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`nav-link${active ? ' is-active' : ''}`}
              aria-current={active ? 'page' : undefined}
              onClick={onNavigate}
            >
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)
  const closeRef = useRef(null)

  const closeMenu = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const toggle = toggleRef.current
    document.body.classList.add('no-scroll')
    // The drawer is not focusable until its visibility change has been applied.
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 50)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 960) setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.clearTimeout(focusTimer)
      document.body.classList.remove('no-scroll')
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
      toggle?.focus({ preventScroll: true })
    }
  }, [open])

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="container navbar__inner" aria-label="Main navigation">
        <Logo onClick={closeMenu} />

        <NavItems location={location} className="navbar__links" />

        <div className="navbar__actions">
          <Link to="/apps" className="btn btn--primary btn--sm navbar__cta">
            View Apps
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="navbar__toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" size={24} />
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu__backdrop${open ? ' is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        className={`mobile-menu${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu__header">
          <Logo onClick={closeMenu} />
          <button
            ref={closeRef}
            type="button"
            className="navbar__toggle navbar__toggle--close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <Icon name="x" size={24} />
          </button>
        </div>
        <NavItems location={location} onNavigate={closeMenu} className="mobile-menu__links" />
        <div className="mobile-menu__footer">
          <Link to="/apps" className="btn btn--primary btn--block" onClick={closeMenu}>
            View Apps
            <Icon name="arrowRight" size={18} />
          </Link>
          <Link to="/contact" className="btn btn--ghost btn--block" onClick={closeMenu}>
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}
