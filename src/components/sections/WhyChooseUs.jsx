import { benefits } from '../../data/site'
import FeatureGridSection from './FeatureGridSection.jsx'

export default function WhyChooseUs() {
  return (
    <FeatureGridSection
      id="why-us"
      eyebrow="Why Choose Us"
      title="Why RatnDevelopers"
      subtitle="Every app we build follows the same simple principles."
      items={benefits}
      variant="benefit"
      tone="light"
    />
  )
}
