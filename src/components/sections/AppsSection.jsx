import { apps } from '../../data/apps'
import AppCard from '../AppCard.jsx'
import Reveal from '../Reveal.jsx'
import SectionTitle from '../SectionTitle.jsx'

export default function AppsSection({ showHeader = true }) {
  return (
    <section
      className="section"
      id="apps"
      aria-labelledby={showHeader ? 'apps-title' : undefined}
      aria-label={showHeader ? undefined : 'App list'}
    >
      <div className="container">
        {showHeader && (
          <SectionTitle
            id="apps-title"
            eyebrow="Our Products"
            title="Our Apps"
            subtitle="Explore our collection of useful mobile applications."
          />
        )}
        <div className="grid grid--3">
          {apps.map((app, index) => (
            <Reveal key={app.id} delay={index * 100} className="grid__item">
              <AppCard app={app} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
