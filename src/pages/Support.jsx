import { Link } from 'react-router'
import AppCard from '../components/AppCard.jsx'
import FaqList from '../components/FaqList.jsx'
import Icon from '../components/Icon.jsx'
import PageHeader from '../components/PageHeader.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { apps } from '../data/apps'
import { faqs, mailtoLink, site, supportChecklist } from '../data/site'

export default function Support() {
  return (
    <>
      <PageHeader
        eyebrow="Help Center"
        title="App Support"
        subtitle="Get help with RatnDevelopers apps. Find answers to common questions or contact us directly."
      >
        <div className="page-header__actions">
          <a className="btn btn--accent btn--lg" href={mailtoLink({ subject: 'App Support' })}>
            <Icon name="mail" size={18} />
            Email Support
          </a>
          <a className="btn btn--outline-light btn--lg" href="#faq">
            Read FAQs
          </a>
        </div>
      </PageHeader>

      <section className="section" id="app-support" aria-labelledby="app-support-title">
        <div className="container">
          <SectionTitle
            id="app-support-title"
            eyebrow="App Support"
            title="Choose your app"
            subtitle="Pick the app you need help with. Mentioning the app name in your email helps us reply faster."
          />
          <div className="grid grid--3">
            {apps.map((app, index) => (
              <Reveal key={app.id} delay={index * 100} className="grid__item">
                <AppCard app={app} variant="support" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" id="faq" aria-labelledby="faq-title">
        <div className="container container--narrow">
          <SectionTitle id="faq-title" eyebrow="FAQ" title="Frequently Asked Questions" />
          <FaqList items={faqs} />
          <p className="faq__more">
            Looking for privacy details? Read our <Link to="/privacy-policy">Privacy Policy</Link>{' '}
            and <Link to="/terms">Terms &amp; Conditions</Link>.
          </p>
        </div>
      </section>

      <section className="section" id="contact-support" aria-labelledby="contact-support-title">
        <div className="container">
          <SectionTitle
            id="contact-support-title"
            eyebrow="Email Support"
            title="Contact Support"
            subtitle="Didn't find your answer? Email us and we'll help you as soon as we can."
          />
          <div className="support-grid">
            <Reveal className="support-card support-card--dark">
              <span className="support-card__icon">
                <Icon name="mail" size={24} />
              </span>
              <h3>Email support</h3>
              <p>Send your question to our support inbox:</p>
              <a className="support-card__email break-anywhere" href={mailtoLink()}>
                {site.email}
              </a>
              <a className="btn btn--accent btn--lg" href={mailtoLink({ subject: 'App Support' })}>
                Contact Support
                <Icon name="arrowRight" size={18} className="icon-arrow" />
              </a>
            </Reveal>
            <Reveal className="support-card" delay={120}>
              <span className="support-card__icon">
                <Icon name="fileText" size={24} />
              </span>
              <h3>Help us help you faster</h3>
              <p>Please include these details in your email:</p>
              <ul className="checklist">
                {supportChecklist.map((item) => (
                  <li key={item}>
                    <span className="checklist__icon">
                      <Icon name="check" size={14} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
