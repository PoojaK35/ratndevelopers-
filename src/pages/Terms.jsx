import { Link } from 'react-router'
import LegalPage from '../components/LegalPage.jsx'
import { mailtoLink, site } from '../data/site'

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: (
      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the mobile applications
        published by RatnDevelopers (the &quot;Apps&quot;) and the website ratndevelopers.com
        (together, the &quot;Services&quot;). By downloading, installing, accessing or using any of
        our Services, you agree to be bound by these Terms. If you do not agree, please do not use
        the Services.
      </p>
    ),
  },
  {
    id: 'use-of-applications',
    title: 'Use of Applications',
    content: (
      <>
        <p>
          We grant you a personal, limited, non-exclusive, non-transferable and revocable licence
          to use our Apps on devices you own or control, in accordance with these Terms and the
          Google Play Terms of Service.
        </p>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Apps for any unlawful purpose or in violation of any applicable law;</li>
          <li>
            Use the Apps to save, share or distribute content you do not have the right to use,
            including content that infringes the rights of others;
          </li>
          <li>Copy, modify, reverse engineer, decompile or create derivative works of the Apps, except as permitted by law;</li>
          <li>Interfere with or disrupt the Apps, their servers or networks;</li>
          <li>Attempt to gain unauthorized access to any part of the Services.</li>
        </ul>
        <p>
          You are responsible for the content you create, save or share using our Apps, and for
          ensuring that its use complies with applicable laws and the terms of any third-party
          platform it comes from.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: (
      <p>
        The Apps and website, including their design, code, text, graphics, logos and names, are
        owned by RatnDevelopers or its licensors and are protected by intellectual property laws.
        These Terms do not grant you any rights to our trademarks or other intellectual property
        except the limited licence described above. Third-party names and trademarks referenced in
        our Services belong to their respective owners.
      </p>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third Party Services',
    content: (
      <p>
        Our Services may contain links to, or integrations with, third-party websites and services
        (for example, Google Play and advertising providers). We do not control and are not
        responsible for the content, policies or practices of third parties. Your use of
        third-party services is governed by their own terms and privacy policies.
      </p>
    ),
  },
  {
    id: 'advertisements',
    title: 'Advertisements',
    content: (
      <p>
        Some Apps may display advertisements provided by third-party ad networks. We are not
        responsible for the content of third-party ads or for any products or services they
        promote. Any interaction you have with an advertiser is solely between you and that
        advertiser. See our <Link to="/privacy-policy">Privacy Policy</Link> for information about
        how advertising partners may use data.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    content: (
      <p>
        The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis
        without warranties of any kind, whether express or implied, including implied warranties
        of merchantability, fitness for a particular purpose and non-infringement. We do not
        warrant that the Services will be uninterrupted, error-free, secure or that any content
        created with the Apps will meet your requirements or be accepted by any third party (for
        example, a resume submitted to an employer).
      </p>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    content: (
      <p>
        To the maximum extent permitted by law, RatnDevelopers shall not be liable for any
        indirect, incidental, special, consequential or punitive damages, or for any loss of data,
        profits, revenue or goodwill, arising out of or related to your use of, or inability to
        use, the Services. Nothing in these Terms limits any liability that cannot be limited under
        applicable law.
      </p>
    ),
  },
  {
    id: 'changes-to-terms',
    title: 'Changes to Terms',
    content: (
      <p>
        We may update these Terms from time to time. When we do, we will revise the &quot;Last
        updated&quot; date at the top of this page. Your continued use of the Services after
        changes are posted means you accept the updated Terms. We may also modify, suspend or
        discontinue any App or feature at any time.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <>
        <p>If you have any questions about these Terms, please contact us:</p>
        <p className="legal__contact">
          <strong>RatnDevelopers</strong>
          <br />
          Email: <a href={mailtoLink({ subject: 'Terms & Conditions' })}>{site.email}</a>
          <br />
          Website: <Link to="/">ratndevelopers.com</Link>
        </p>
      </>
    ),
  },
]

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="October 14, 2026"
      intro={
        <p>
          Please read these Terms carefully before using any RatnDevelopers app or this website.
        </p>
      }
      sections={sections}
    />
  )
}
