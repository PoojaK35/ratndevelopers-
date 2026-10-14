import Reveal from '../Reveal.jsx'
import SectionTitle from '../SectionTitle.jsx'
import ServiceCard from '../ServiceCard.jsx'

export default function FeatureGridSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  variant = 'service',
  tone = 'white',
}) {
  const titleId = `${id}-title`
  return (
    <section className={`section section--${tone}`} id={id} aria-labelledby={titleId}>
      <div className="container">
        <SectionTitle id={titleId} eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <div className="grid grid--4">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="grid__item">
              <ServiceCard {...item} variant={variant} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
