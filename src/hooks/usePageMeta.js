import { useEffect } from 'react'
import { canonicalFor, notFoundMeta, routeMeta } from '../data/seo'

function setContent(selector, value) {
  document.head.querySelector(selector)?.setAttribute('content', value)
}

function upsertHeadTag(tag, selector, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(tag)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value))
}

export default function usePageMeta(pathname) {
  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
    const known = routeMeta[path]
    const meta = known ?? notFoundMeta

    document.title = meta.title
    setContent('meta[name="description"]', meta.description)
    setContent('meta[property="og:title"]', meta.title)
    setContent('meta[property="og:description"]', meta.description)
    setContent('meta[name="twitter:title"]', meta.title)
    setContent('meta[name="twitter:description"]', meta.description)
    setContent('meta[name="robots"]', known ? 'index, follow' : 'noindex, follow')

    if (known) {
      const url = canonicalFor(path)
      upsertHeadTag('link', 'link[rel="canonical"]', { rel: 'canonical', href: url })
      upsertHeadTag('meta', 'meta[property="og:url"]', { property: 'og:url', content: url })
    } else {
      document.head.querySelector('link[rel="canonical"]')?.remove()
      document.head.querySelector('meta[property="og:url"]')?.remove()
    }
  }, [pathname])
}
