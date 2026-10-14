import { Link } from 'react-router'
import { apps } from '../data/apps'
import { footerLinks, mailtoLink, site } from '../data/site'
import Icon, { GooglePlayIcon } from './Icon.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p className="footer__tagline">{site.tagline}</p>
          <p className="footer__note">
            Independent mobile app studio building Android and React Native apps.
          </p>
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h2 className="footer__heading">Quick Links</h2>
          <ul className="footer__list">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Our Apps</h2>
          <ul className="footer__list">
            {apps.map((app) => (
              <li key={app.id}>
                {app.playStoreUrl ? (
                  <a
                    className="footer__play-link"
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${app.name} on Google Play (opens in a new tab)`}
                  >
                    <GooglePlayIcon size={16} />
                    {app.name}
                  </a>
                ) : (
                  <span className="footer__muted">{app.name} · Coming soon</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">Contact</h2>
          <ul className="footer__list">
            <li>
              <a className="footer__contact break-anywhere" href={mailtoLink()}>
                <Icon name="mail" size={16} />
                {site.email}
              </a>
            </li>
            <li>
              <Link className="footer__contact" to="/support">
                <Icon name="lifeBuoy" size={16} />
                App Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <p>© {year} RatnDevelopers. All rights reserved.</p>
          <p className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
