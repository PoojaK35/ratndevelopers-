import PageHeader from '../components/PageHeader.jsx'
import AppsSection from '../components/sections/AppsSection.jsx'
import SupportSection from '../components/sections/SupportSection.jsx'

export default function Apps() {
  return (
    <>
      <PageHeader
        eyebrow="Our Products"
        title="Our Apps"
        subtitle="Explore our collection of useful mobile applications."
      />
      <AppsSection showHeader={false} />
      <SupportSection />
    </>
  )
}
