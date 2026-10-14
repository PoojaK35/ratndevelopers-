import Icon from './Icon.jsx'

export default function ServiceCard({ icon, title, description, variant = 'service' }) {
  return (
    <article className={`feature-card feature-card--${variant}`}>
      <span className="feature-card__icon">
        <Icon name={icon} size={24} />
      </span>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__text">{description}</p>
    </article>
  )
}
