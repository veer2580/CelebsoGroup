import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import heroImage from "@/assets/hero/contact.png";

export default function Privacy() {
  return (
    <Layout>
      <Hero
        title="Privacy Policy"
        subtitle="How Celebso Group collects, uses, and protects your information."
        image={heroImage}
        heightClassName="min-h-screen"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h2 className="text-4xl font-serif font-bold text-secondary mb-6">
                Privacy Policy
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At Celebso Group, we value your privacy and are committed to
                protecting your personal information. This Privacy Policy
                outlines how we collect, use, and safeguard your data across our
                platforms, including Celebso Social Network, TechCelebso,
                Celebso Startup School, Celebso Production, Celebso Startup
                Valley, Celebso AI Labs, and PersonaSeek.ai.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-4">
                1. Information We Collect
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-slate-600">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, profile details, and other information you
                  provide while registering or using our services.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you
                  interact with our platform, including pages visited, time
                  spent, and activity logs.
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type,
                  operating system, and device identifiers.
                </li>
                <li>
                  <strong>Content Data:</strong> Any content, messages, or media
                  you upload or share on our platforms.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-4">
                2. How We Use Your Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-slate-600">
                <li>Provide, operate, and improve our platforms and services</li>
                <li>Personalize user experience and content</li>
                <li>Enable networking, matchmaking, and collaboration features</li>
                <li>Communicate updates, notifications, and promotional content</li>
                <li>Ensure security, prevent fraud, and comply with legal
                  obligations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-4">
                3. Sharing of Information
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                We do not sell your personal data. However, we may share
                information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-slate-600">
                <li>Service Providers: For hosting, analytics, and technical
                  support</li>
                <li>Partners & Investors: Only in relevant networking or
                  pitch-related contexts (with consent where required)</li>
                <li>Legal Authorities: When required by law or to protect our
                  rights</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-4">
                4. Data Security
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your data from unauthorized access, misuse, or
                disclosure.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-4">
                5. Your Rights
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-slate-600">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-4">
                6. Cookies &amp; Tracking
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We use cookies and similar technologies to enhance user
                experience, analyze traffic, and improve our services.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-4">
                7. Third-Party Links
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our platforms may contain links to third-party websites. We are
                not responsible for their privacy practices.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-4">
                8. Children&rsquo;s Privacy
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect data from minors.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-4">
                9. Updates to This Policy
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated date.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-4">
                10. Contact Us
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                For any questions or concerns regarding this Privacy Policy,
                please contact us at:
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Email: [your email]
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Website: www.celebso.com
              </p>
            </div>

            <div>
              <p className="text-lg text-slate-600 leading-relaxed">
                By using our platforms, you agree to the terms outlined in this
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
