import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import usePageMeta from '../hooks/usePageMeta'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

function useScrollOnNavigate({ pathname, hash, key }) {
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash, key])
}

export default function Layout() {
  const location = useLocation()
  usePageMeta(location.pathname)
  useScrollOnNavigate(location)

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
