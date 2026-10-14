import { Link } from 'react-router'
import { mailtoLink, site } from '../../data/site'
import Icon from '../Icon.jsx'
import Reveal from '../Reveal.jsx'

export default function SupportSection() {
  return (
    <section className="section section--light" id="support" aria-labelledby="support-title">
      <div className="container">
        <Reveal className="support-banner">
          <div className="support-banner__glow" aria-hidden="true" />
          <span className="support-banner__icon">
            <Icon name="lifeBuoy" size={28} />
          </span>
          <div className="support-banner__content">
            <p className="eyebrow eyebrow--light">App Support</p>
            <h2 id="support-title" className="support-banner__title">
              Need Help?
            </h2>
            <p className="support-banner__text">
              Have a question about one of our applications? We&apos;re here to help.
            </p>
            <a className="support-banner__email break-anywhere" href={mailtoLink()}>
              <Icon name="mail" size={18} />
              {site.email}
            </a>
          </div>
          <div className="support-banner__actions">
            <a className="btn btn--accent btn--lg" href={mailtoLink()}>
              Contact Support
              <Icon name="arrowRight" size={18} className="icon-arrow" />
            </a>
            <Link to="/support" className="btn btn--outline-light btn--lg">
              Visit Help Center
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
