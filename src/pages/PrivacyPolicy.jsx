import { Link } from 'react-router'
import LegalPage from '../components/LegalPage.jsx'
import { mailtoLink, site } from '../data/site'

const external = { target: '_blank', rel: 'noopener noreferrer' }

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>
          This Privacy Policy explains how RatnDevelopers (&quot;we&quot;, &quot;us&quot; or
          &quot;our&quot;) handles information in connection with our mobile applications (the
          &quot;Apps&quot;) and our website, ratndevelopers.com (together, the
          &quot;Services&quot;).
        </p>
        <p>
          Each App may handle information differently depending on its features. Where an App
          collects or processes information in a way not described here, the App&apos;s Google
          Play store listing (including its Data safety section) or an in-app notice will provide
          additional details. By using our Services, you agree to the practices described in this
          policy.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p>Depending on the App and how you use it, we may collect or process:</p>
        <ul>
          <li>
            <strong>Information you provide to us.</strong> For example, your name, email address
            and the content of your message when you contact us for support or feedback.
          </li>
          <li>
            <strong>Content you create or access in an App.</strong> For example, details you enter
            into a resume, or media files you choose to view or save. This content is used to
            provide the App&apos;s features. How it is stored depends on the App and is described
            in the App&apos;s Google Play listing or in the App itself.
          </li>
          <li>
            <strong>Device and usage information.</strong> Such as device model, operating system
            version, app version, language, crash reports, diagnostic data and general app
            interaction data.
          </li>
          <li>
            <strong>Identifiers.</strong> Such as the Android advertising ID or similar identifiers
            used by advertising and analytics providers.
          </li>
          <li>
            <strong>Permissions-based data.</strong> Some features may request device permissions
            (for example, camera access to scan QR codes, or storage/media access to save files).
            Data accessed through permissions is used only to provide the related feature. You can
            manage permissions at any time in your device settings.
          </li>
        </ul>
        <p>
          When you visit our website, our hosting provider may automatically process standard
          technical information such as your IP address, browser type and pages visited, for
          security and operational purposes.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Information',
    content: (
      <>
        <p>We may use information to:</p>
        <ul>
          <li>Provide, operate and maintain our Apps and website;</li>
          <li>Respond to your questions, support requests and feedback;</li>
          <li>Diagnose crashes, fix bugs and improve performance and stability;</li>
          <li>Understand how our Apps are used so we can improve features and design;</li>
          <li>Display advertising, including measuring ad performance, where an App shows ads;</li>
          <li>Detect, prevent and address fraud, abuse or security issues;</li>
          <li>Comply with applicable laws and enforce our Terms &amp; Conditions.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    content: (
      <>
        <p>
          Our Apps may use third-party services that collect, process or share information under
          their own privacy policies. Depending on the App, these may include:
        </p>
        <ul>
          <li>
            Google Play Services —{' '}
            <a href="https://policies.google.com/privacy" {...external}>
              Google Privacy Policy
            </a>
          </li>
          <li>
            Liftoff Monetize (formerly Vungle) for advertising —{' '}
            <a href="https://liftoff.io/privacy-policy/" {...external}>
              Liftoff Privacy Policy
            </a>
          </li>
          <li>Other advertising, analytics or crash-reporting providers identified in an App.</li>
        </ul>
        <p>
          We encourage you to review the privacy policies of these providers. We are not
          responsible for the privacy practices of third parties.
        </p>
      </>
    ),
  },
  {
    id: 'advertising',
    title: 'Advertising',
    content: (
      <>
        <p>
          Some of our Apps are free and supported by advertising. Advertising partners may use
          device identifiers (such as the Android advertising ID), IP address, approximate location
          derived from IP address, and app interaction data to show ads, limit how often you see
          an ad, measure ad performance and, where permitted, show personalized ads.
        </p>
        <p>You can control ad personalization on your device:</p>
        <ul>
          <li>
            On Android, open <strong>Settings → Google → Ads</strong> (or{' '}
            <strong>Settings → Privacy → Ads</strong> on some devices) to reset or delete your
            advertising ID.
          </li>
          <li>
            Where required by law (for example, in the EEA, UK or certain US states), we or our
            partners will ask for your consent or give you choices about personalized advertising
            within the App.
          </li>
        </ul>
        <p>
          If you opt out of personalized advertising, you may still see ads, but they may be less
          relevant to you.
        </p>
      </>
    ),
  },
  {
    id: 'google-play',
    title: 'Google Play',
    content: (
      <>
        <p>
          Our Apps are distributed through Google Play. When you download or purchase an App,
          Google may collect information under its own terms and privacy policy. We do not receive
          your payment card details.
        </p>
        <p>
          Each App&apos;s Google Play listing includes a <strong>Data safety</strong> section that
          describes the types of data the App collects and shares. Please review it alongside this
          policy for app-specific details.
        </p>
      </>
    ),
  },
  {
    id: 'data-retention',
    title: 'Data Retention and Deletion',
    content: (
      <>
        <p>
          We keep personal information only for as long as needed for the purposes described in
          this policy, or as required by law. Support emails are kept for as long as needed to
          resolve your request and maintain records of our communication.
        </p>
        <p>
          Content stored locally on your device by an App can be removed by deleting it within the
          App, clearing the App&apos;s data, or uninstalling the App. To request access to or
          deletion of information you have shared with us, email{' '}
          <a href={mailtoLink({ subject: 'Data Request' })}>{site.email}</a> and tell us which App
          your request relates to. Information held by third-party services is subject to their
          own retention and deletion policies.
        </p>
      </>
    ),
  },
  {
    id: 'data-security',
    title: 'Data Security',
    content: (
      <p>
        We use reasonable technical and organizational measures to protect information against
        unauthorized access, loss or misuse. However, no method of transmission over the internet
        or method of electronic storage is completely secure, and we cannot guarantee absolute
        security.
      </p>
    ),
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    content: (
      <p>
        Our Apps are not directed to children under the age of 13 (or a higher minimum age where
        required by local law), and we do not knowingly collect personal information from
        children. If you are a parent or guardian and believe your child has provided us with
        personal information, please contact us and we will take steps to delete it.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will revise the
        &quot;Last updated&quot; date at the top of this page. Significant changes may also be
        communicated within the relevant App. Your continued use of the Services after an update
        means you accept the revised policy.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    content: (
      <>
        <p>If you have questions or requests about this Privacy Policy, please contact us:</p>
        <p className="legal__contact">
          <strong>RatnDevelopers</strong>
          <br />
          Email: <a href={mailtoLink({ subject: 'Privacy Policy' })}>{site.email}</a>
          <br />
          Website: <Link to="/">ratndevelopers.com</Link>
        </p>
      </>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="October 14, 2026"
      intro={
        <p>
          Your privacy matters to us. This policy applies to all mobile applications published by
          RatnDevelopers on Google Play, including ResumeCraft, StatusFlow AI and QR Scanner, and to
          this website.
        </p>
      }
      sections={sections}
    />
  )
}
