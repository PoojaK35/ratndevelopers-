import { mailtoLink } from '../data/site'
import Icon from './Icon.jsx'
import StoreButton from './StoreButton.jsx'

export default function AppCard({ app, variant = 'default' }) {
  const isSupport = variant === 'support'
  const comingSoon = !app.playStoreUrl

  return (
    <article className={`app-card${isSupport ? ' app-card--support' : ''}`}>
      <div className="app-card__top">
        <img
          className="app-card__icon"
          src={app.icon}
          alt={`${app.name} app icon`}
          width="72"
          height="72"
          loading="lazy"
          decoding="async"
        />
        <div className="app-card__badges">
          <span className="badge">{app.category}</span>
          {comingSoon && <span className="badge badge--soon">Coming Soon</span>}
        </div>
      </div>

      <h3 className="app-card__name">{app.name}</h3>
      <p className="app-card__tagline">{app.tagline}</p>

      {isSupport ? (
        <>
          <p className="app-card__description">
            Questions, bug reports or feedback about {app.name}? Email us and mention the app name
            so we can help faster.
          </p>
          <div className="app-card__actions">
            <a
              className="btn btn--primary btn--block"
              href={mailtoLink({ subject: `Support: ${app.name}` })}
            >
              <Icon name="mail" size={18} />
              Get Help with {app.name}
            </a>
            {!comingSoon && (
              <a
                className="text-link"
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${app.name} on Google Play (opens in a new tab)`}
              >
                View on Google Play
                <Icon name="externalLink" size={14} />
              </a>
            )}
          </div>
        </>
      ) : (
        <>
          <p className="app-card__description">{app.description}</p>
          <div className="app-card__actions">
            <StoreButton app={app} block />
          </div>
        </>
      )}
    </article>
  )
}
