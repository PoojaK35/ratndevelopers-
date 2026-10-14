import PageHeader from '../components/PageHeader.jsx'
import ContactSection from '../components/sections/ContactSection.jsx'

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="Questions, feedback or a project idea? Send us a message and we'll get back to you."
      />
      <ContactSection showHeader={false} />
    </>
  )
}
