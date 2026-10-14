import { apps } from '../data/apps'
import Icon from './Icon.jsx'

export default function HeroVisual() {
  return (
    <div
      className="hero-visual"
      role="img"
      aria-label="A smartphone showing RatnDevelopers apps: ResumeCraft, StatusFlow AI and QR Scanner"
    >
      <div className="hero-visual__orb hero-visual__orb--green" />
      <div className="hero-visual__orb hero-visual__orb--navy" />

      <div className="phone">
        <div className="phone__notch" />
        <div className="phone__screen">
          <div className="phone__status">
            <span>9:41</span>
            <span className="phone__status-icons">
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className="phone__header">
            <p className="phone__hello">Hello there 👋</p>
            <p className="phone__title">Apps by RatnDevelopers</p>
          </div>
          <div className="phone__search">
            <span />
          </div>
          <ul className="phone__list">
            {apps.map((app) => (
              <li key={app.id} className="phone__item">
                <img src={app.icon} alt="" width="40" height="40" />
                <span className="phone__item-text">
                  <strong>{app.name}</strong>
                  <small>{app.tagline}</small>
                </span>
                <span className={`phone__pill${app.playStoreUrl ? '' : ' phone__pill--soon'}`}>
                  {app.playStoreUrl ? 'Get' : 'Soon'}
                </span>
              </li>
            ))}
          </ul>
          <div className="phone__tabbar">
            <span className="is-active" />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="float-card float-card--top">
        <span className="float-card__icon float-card__icon--green">
          <Icon name="code" size={18} />
        </span>
        <span>
          <strong>React Native</strong>
          <small>Cross-platform</small>
        </span>
      </div>
      <div className="float-card float-card--bottom">
        <span className="float-card__icon float-card__icon--navy">
          <Icon name="palette" size={18} />
        </span>
        <span>
          <strong>Modern UI</strong>
          <small>Clean &amp; simple</small>
        </span>
      </div>
    </div>
  )
}
