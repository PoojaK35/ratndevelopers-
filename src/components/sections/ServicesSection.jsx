import { services } from '../../data/site'
import FeatureGridSection from './FeatureGridSection.jsx'

export default function ServicesSection() {
  return (
    <FeatureGridSection
      id="services"
      eyebrow="Services"
      title="What We Build"
      subtitle="From idea to Google Play, we design, build and publish mobile apps people enjoy using."
      items={services}
      variant="service"
      tone="white"
    />
  )
}
