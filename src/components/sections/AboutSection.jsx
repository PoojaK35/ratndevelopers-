import { Link } from 'react-router'
import AboutVisual from '../AboutVisual.jsx'
import Icon from '../Icon.jsx'
import Reveal from '../Reveal.jsx'

const points = ['React Native & Android', 'Modern, clean UI design', 'Practical product thinking']

export default function AboutSection({ title = 'About RatnDevelopers', showLink = true }) {
  return (
    <section className="section section--white" id="about" aria-labelledby="about-title">
      <div className="container about">
        <Reveal className="about__visual">
          <AboutVisual />
        </Reveal>
        <Reveal className="about__content" delay={120}>
          <p className="eyebrow">About Us</p>
          <h2 id="about-title" className="section-title__heading">
            {title}
          </h2>
          <p className="about__lead">
            RatnDevelopers is an independent mobile app development studio focused on creating
            simple, useful and user-friendly applications.
          </p>
          <p className="about__text">
            We combine modern UI design, React Native development and practical product thinking to
            build mobile experiences that solve real-world problems.
          </p>
          <ul className="checklist">
            {points.map((point) => (
              <li key={point}>
                <span className="checklist__icon">
                  <Icon name="check" size={14} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          {showLink && (
            <Link to="/about" className="btn btn--primary">
              Learn More About Us
              <Icon name="arrowRight" size={18} className="icon-arrow" />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  )
}
