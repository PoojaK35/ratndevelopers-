import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { canonicalFor, notFoundMeta, routeMeta } from './src/data/seo.js'

function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function applyMeta(html, { title, description, url, noindex }) {
  const t = escapeAttr(title)
  const d = escapeAttr(description)
  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${d}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${t}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${d}$2`)

  if (url) {
    out = out
      .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
  } else {
    out = out
      .replace(/\s*<link rel="canonical" href="[^"]*" \/>/, '')
      .replace(/\s*<meta property="og:url" content="[^"]*" \/>/, '')
  }

  if (noindex) {
    out = out.replace(
      /(<meta name="robots" content=")[^"]*(")/,
      '$1noindex, follow$2',
    )
  }
  return out
}

// Writes one HTML file per route (e.g. dist/about.html) with route-specific
// SEO tags. GitHub Pages, Netlify, Cloudflare Pages and Vercel (cleanUrls)
// serve these at clean URLs like /about with a 200 status. 404.html is
// served for unknown URLs and renders the React NotFound page.
function staticRoutePages() {
  let outDir = 'dist'
  return {
    name: 'static-route-pages',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    async writeBundle() {
      const template = await readFile(resolve(outDir, 'index.html'), 'utf8')
      const pages = [
        ...Object.entries(routeMeta).map(([path, meta]) => ({
          ...meta,
          url: canonicalFor(path),
        })),
        notFoundMeta,
      ]
      await Promise.all(
        pages.map((page) =>
          writeFile(resolve(outDir, page.file), applyMeta(template, page)),
        ),
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), staticRoutePages()],
  base: '/',
})
