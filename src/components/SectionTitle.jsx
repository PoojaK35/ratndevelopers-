import Reveal from './Reveal.jsx'

export default function SectionTitle({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  as: Heading = 'h2',
}) {
  const classes = ['section-title', `section-title--${align}`, light && 'section-title--light']
    .filter(Boolean)
    .join(' ')
  return (
    <Reveal className={classes}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading id={id} className="section-title__heading">
        {title}
      </Heading>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </Reveal>
  )
}
