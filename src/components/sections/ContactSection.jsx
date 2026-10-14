import { Link } from 'react-router'
import { mailtoLink, site } from '../../data/site'
import ContactForm from '../ContactForm.jsx'
import Icon from '../Icon.jsx'
import Reveal from '../Reveal.jsx'
import SectionTitle from '../SectionTitle.jsx'

export default function ContactSection({ showHeader = true }) {
  return (
    <section
      className="section section--white"
      id="contact"
      aria-labelledby={showHeader ? 'contact-title' : undefined}
      aria-label={showHeader ? undefined : 'Contact form'}
    >
      <div className="container">
        {showHeader && (
          <SectionTitle
            id="contact-title"
            eyebrow="Contact"
            title="Let's Connect"
            subtitle="Questions, feedback or a project idea? Send us a message and we'll get back to you."
          />
        )}
        <div className="contact">
          <Reveal className="contact__info">
            <h3 className="contact__info-title">Get in touch</h3>
            <p>
              Whether it&apos;s about one of our apps, a partnership or a custom app idea, we&apos;d
              love to hear from you.
            </p>
            <ul className="contact__list">
              <li>
                <span className="contact__icon">
                  <Icon name="mail" size={20} />
                </span>
                <span>
                  <small>Email</small>
                  <a className="break-anywhere" href={mailtoLink()}>
                    {site.email}
                  </a>
                </span>
              </li>
              <li>
                <span className="contact__icon">
                  <Icon name="lifeBuoy" size={20} />
                </span>
                <span>
                  <small>App support</small>
                  <Link to="/support">Visit the Help Center</Link>
                </span>
              </li>
              <li>
                <span className="contact__icon">
                  <Icon name="globe" size={20} />
                </span>
                <span>
                  <small>Website</small>
                  <span>ratndevelopers.com</span>
                </span>
              </li>
            </ul>
          </Reveal>
          <Reveal className="contact__form" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
