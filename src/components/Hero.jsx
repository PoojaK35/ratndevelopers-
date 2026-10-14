import { Link } from 'react-router'
import { heroStats } from '../data/site'
import HeroVisual from './HeroVisual.jsx'
import Icon from './Icon.jsx'

const highlights = [
  { icon: 'smartphone', label: 'Mobile Apps' },
  { icon: 'code', label: 'React Native' },
  { icon: 'palette', label: 'Modern UI' },
  { icon: 'sparkle', label: 'Useful Products' },
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <ul className="hero__chips" aria-label="What we do">
            {highlights.map((item) => (
              <li key={item.label} className="chip">
                <Icon name={item.icon} size={14} />
                {item.label}
              </li>
            ))}
          </ul>

          <h1 id="hero-title" className="hero__title">
            Building Simple Apps That Make <span className="text-gradient">Everyday Life</span>{' '}
            Easier
          </h1>
          <p className="hero__subtitle">
            RatnDevelopers creates practical, modern and user-friendly mobile applications for
            everyday needs.
          </p>

          <div className="hero__actions">
            <Link to="/apps" className="btn btn--accent btn--lg">
              Explore Our Apps
              <Icon name="arrowRight" size={18} className="icon-arrow" />
            </Link>
            <Link to="/contact" className="btn btn--outline-light btn--lg">
              Contact Us
            </Link>
          </div>

          <dl className="hero__stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
