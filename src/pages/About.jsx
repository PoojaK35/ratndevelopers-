import PageHeader from '../components/PageHeader.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import ServicesSection from '../components/sections/ServicesSection.jsx'
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About RatnDevelopers"
        subtitle="An independent mobile app studio building simple, useful and user-friendly apps."
      />
      <AboutSection title="Simple apps, built with care" showLink={false} />
      <WhyChooseUs />
      <ServicesSection />
    </>
  )
}
