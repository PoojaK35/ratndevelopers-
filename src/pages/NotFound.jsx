import { Link } from 'react-router'
import Icon from '../components/Icon.jsx'

const suggestions = [
  { to: '/apps', icon: 'grid', label: 'Our Apps' },
  { to: '/support', icon: 'lifeBuoy', label: 'App Support' },
  { to: '/contact', icon: 'mail', label: 'Contact Us' },
]

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__glow" aria-hidden="true" />
      <div className="container not-found__inner">
        <p className="not-found__code" aria-hidden="true">
          4<span className="not-found__gem">0</span>4
        </p>
        <h1 id="not-found-title" className="not-found__title">
          This page took a wrong turn
        </h1>
        <p className="not-found__text">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get
          you back on track.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--accent btn--lg">
            <Icon name="home" size={18} />
            Back to Home
          </Link>
          <Link to="/apps" className="btn btn--outline-light btn--lg">
            View Apps
          </Link>
        </div>
        <ul className="not-found__links">
          {suggestions.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>
                <Icon name={item.icon} size={18} />
                {item.label}
                <Icon name="arrowRight" size={16} className="icon-arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
