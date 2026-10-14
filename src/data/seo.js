// Plain JS (no JSX or asset imports) so vite.config.js can also import it.

export const SITE_URL = 'https://ratndevelopers.com'
export const SITE_NAME = 'RatnDevelopers'
export const DEFAULT_TITLE = 'RatnDevelopers – Mobile Apps & Software Development'
export const DEFAULT_DESCRIPTION =
  'RatnDevelopers creates modern, useful and user-friendly mobile applications.'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

export const routeMeta = {
  '/': {
    file: 'index.html',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  '/apps': {
    file: 'apps.html',
    title: 'Our Apps – ResumeCraft, StatusFlow AI & QR Scanner | RatnDevelopers',
    description:
      'Explore mobile apps by RatnDevelopers, including ResumeCraft – CV & Resume Maker and StatusFlow AI – Status Saver on Google Play.',
  },
  '/about': {
    file: 'about.html',
    title: 'About RatnDevelopers – Independent Mobile App Studio',
    description:
      'RatnDevelopers is an independent mobile app development studio building simple, useful and user-friendly Android and React Native apps.',
  },
  '/support': {
    file: 'support.html',
    title: 'App Support & FAQ | RatnDevelopers',
    description:
      'Get help with RatnDevelopers apps. Read frequently asked questions or contact our support team by email.',
  },
  '/contact': {
    file: 'contact.html',
    title: 'Contact RatnDevelopers',
    description:
      'Get in touch with RatnDevelopers about our apps, partnerships or custom mobile app development.',
  },
  '/privacy-policy': {
    file: 'privacy-policy.html',
    title: 'Privacy Policy | RatnDevelopers',
    description:
      'Read the RatnDevelopers privacy policy to learn how our mobile applications and website handle information.',
  },
  '/terms': {
    file: 'terms.html',
    title: 'Terms & Conditions | RatnDevelopers',
    description:
      'Read the terms and conditions that apply to RatnDevelopers mobile applications and website.',
  },
}

export const notFoundMeta = {
  file: '404.html',
  title: 'Page Not Found | RatnDevelopers',
  description: 'The page you are looking for could not be found.',
  noindex: true,
}

export function canonicalFor(path) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}
