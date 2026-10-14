export const site = {
  name: 'RatnDevelopers',
  tagline: 'Building useful mobile experiences.',
  email: 'poojayogeshkamble@gmail.com',
  url: 'https://ratndevelopers.com',
}

export function mailtoLink({ subject, body } = {}) {
  const params = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${site.email}${params.length ? `?${params.join('&')}` : ''}`
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Apps', to: '/apps' },
  { label: 'Services', to: '/#services' },
  { label: 'About', to: '/about' },
  { label: 'Support', to: '/support' },
  { label: 'Contact', to: '/contact' },
]

export const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Apps', to: '/apps' },
  { label: 'About', to: '/about' },
  { label: 'Support', to: '/support' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms' },
]

export const heroStats = [
  { value: '3+', label: 'Apps Published' },
  { value: 'React Native', label: 'Development' },
  { value: 'Android', label: 'Apps' },
  { value: 'Growing', label: 'Worldwide' },
]

export const services = [
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    description: 'React Native and Android application development.',
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    description: 'Modern and user-friendly mobile interfaces.',
  },
  {
    icon: 'rocket',
    title: 'App Publishing',
    description: 'Google Play publishing, store listing and app optimization.',
  },
  {
    icon: 'layers',
    title: 'Custom App Development',
    description: 'Custom mobile applications for startups and businesses.',
  },
]

export const benefits = [
  {
    icon: 'code',
    title: 'Modern Technology',
    description: 'Built using modern development practices.',
  },
  {
    icon: 'heart',
    title: 'User Focused',
    description: 'Simple and intuitive experiences.',
  },
  {
    icon: 'zap',
    title: 'Performance',
    description: 'Fast and lightweight applications.',
  },
  {
    icon: 'refresh',
    title: 'Continuous Improvement',
    description: 'Regular updates and improvements.',
  },
]

export const faqs = [
  {
    question: 'How do I get help with one of your apps?',
    answer:
      'Email us at poojayogeshkamble@gmail.com. Please mention the app name, your device model, your Android version and a short description of the problem so we can help you faster.',
  },
  {
    question: 'How do I report a bug or suggest a feature?',
    answer:
      'Send us an email with the app name and the steps that lead to the issue. Screenshots are very helpful. Feature ideas are always welcome and help us decide what to improve next.',
  },
  {
    question: 'Where can I download your apps?',
    answer:
      'Our published apps are available on Google Play. Visit the Apps page on this website and tap "View on Google Play" to open the official store listing.',
  },
  {
    question: 'How do I update an app to the latest version?',
    answer:
      'Open Google Play, search for the app or go to "Manage apps & device", and tap Update if an update is available. Keeping apps updated gives you the latest fixes and improvements.',
  },
  {
    question: 'Why do I see ads in some apps?',
    answer:
      'Some of our apps may show ads provided by third-party advertising partners. Ads help support ongoing development. You can learn more in our Privacy Policy.',
  },
  {
    question: 'How can I request deletion of my data?',
    answer:
      'Email us from the address you used to contact us and tell us which app your request relates to. We will review and respond to your request. Data handled by third-party services is subject to their own policies.',
  },
  {
    question: 'When will QR Scanner be available?',
    answer:
      'QR Scanner is coming soon. Once it is published, the Google Play link will appear on our Apps page.',
  },
]

export const supportChecklist = [
  'App name',
  'Device model and Android version',
  'App version (Google Play → app page → About this app)',
  'What happened and the steps to reproduce it',
  'Screenshots, if possible',
]
