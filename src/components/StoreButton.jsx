import Icon, { GooglePlayIcon } from './Icon.jsx'

export default function StoreButton({ app, block = false }) {
  const blockClass = block ? ' btn--block' : ''

  if (!app.playStoreUrl) {
    return (
      <span className={`btn btn--disabled${blockClass}`} aria-disabled="true">
        <Icon name="clock" size={18} />
        Coming Soon
      </span>
    )
  }

  return (
    <a
      className={`btn btn--play${blockClass}`}
      href={app.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${app.name} on Google Play (opens in a new tab)`}
    >
      <GooglePlayIcon size={18} />
      View on Google Play
    </a>
  )
}
