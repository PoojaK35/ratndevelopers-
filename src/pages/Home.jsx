import Hero from '../components/Hero.jsx'
import AboutSection from '../components/sections/AboutSection.jsx'
import AppsSection from '../components/sections/AppsSection.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'
import ServicesSection from '../components/sections/ServicesSection.jsx'
import SupportSection from '../components/sections/SupportSection.jsx'
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <AppsSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <SupportSection />
      <ContactSection />
    </>
  )
}
