import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Strive CRM. Learn how we handle and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-[1440px] px-8 md:px-16 py-12 text-left font-sans antialiased bg-black">
      {/* Header section */}
      <div className="space-y-4 border-b border-border pb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <div className="text-sm text-slate-400 space-y-1">
          <p className="font-bold text-white">STRIVE AUTOMATIONS — PRIVACY POLICY</p>
          <p>Effective Date: July 1, 2025 | Last Updated: July 1, 2025 | Version: 1.0</p>
          <p>Governing Law: India | Platform: strivecrm.vercel.app</p>
          <p>Email: striveautomations.ai@gmail.com | Location: Tirupur, Tamil Nadu, India — 641 601</p>
        </div>
      </div>

      {/* Main content sections */}
      <div className="mt-8 space-y-8 text-slate-400 leading-relaxed text-[17px]">
        <p>
          This Privacy Policy explains how Strive Automations ("we," "our," or "us") collects, uses, discloses, and safeguards your information when you use our platform, services, or engage with us for WhatsApp automation and business process automation solutions.
        </p>
        <p>
          Please read this policy carefully. If you disagree with its terms, please discontinue use of our services immediately.
        </p>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">1. WHAT INFORMATION DO WE COLLECT?</h2>
          
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">1.1 Personal Information You Provide to Us</h3>
            <p>The personal information we collect may include:</p>
            <div className="space-y-1 text-slate-400">
              <div>- Full name and business name</div>
              <div>- Phone numbers (personal and business WhatsApp numbers)</div>
              <div>- Email addresses</div>
              <div>- Job title and role within your organization</div>
              <div>- Usernames and passwords for platform access</div>
              <div>- Business mailing and billing addresses</div>
              <div>- GSTIN (Goods and Services Tax Identification Number)</div>
              <div>- WhatsApp Business Account ID (WABA ID)</div>
              <div>- WhatsApp Phone Number ID</div>
              <div>- Meta Business Manager ID</div>
            </div>
            <p className="mt-4 border-l-2 border-primary/40 pl-3 italic text-slate-350">
              <strong>SENSITIVE INFORMATION:</strong> We do not knowingly collect or process sensitive personal information such as financial account numbers, health data, biometric data, or government identification numbers beyond GSTIN for billing purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">1.2 Payment Data</h3>
            <p>
              We may collect data necessary to process your payments including invoice details, payment method references, and transaction identifiers.
            </p>
            <p>
              All payment data is processed by our authorized payment processors:
            </p>
            <div className="space-y-1 text-slate-400">
              <div>- Razorpay (razorpay.com/privacy)</div>
            </div>
            <p>
              We do not store your full card numbers, UPI PINs, or banking credentials on our servers. All payment processing is handled entirely by RBI-authorized payment aggregators.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">1.3 WhatsApp Business Data</h3>
            <p>
              As a Meta WhatsApp Tech Provider, we collect and process the following WhatsApp-related data on behalf of our business clients:
            </p>
            <div className="space-y-1 text-slate-400">
              <div>- WhatsApp Business Account (WABA) credentials obtained via Meta's Embedded Signup</div>
              <div>- WhatsApp Phone Number IDs connected to our platform</div>
              <div>- Inbound and outbound WhatsApp message content processed through automation workflows</div>
              <div>- Customer contact numbers that interact with your WhatsApp Business number</div>
              <div>- Message delivery status, read receipts, and conversation metadata</div>
              <div>- Media files (images, documents, audio) shared in WhatsApp conversations</div>
              <div>- WhatsApp message template content and approval status</div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">1.4 Information Automatically Collected</h3>
            <p>We automatically collect certain technical information including:</p>
            <div className="space-y-1 text-slate-400">
              <div>- <strong>Log and Usage Data:</strong> IP addresses, browser type, device information, pages viewed, features used, timestamps, and system activity logs</div>
              <div>- <strong>Device Data:</strong> Computer or mobile device identifiers, operating system, browser settings, and hardware configuration information</div>
              <div>- <strong>Workflow Execution Data:</strong> n8n automation execution logs, webhook payloads, and API call records for debugging and performance monitoring</div>
              <div>- <strong>Session Data:</strong> Login timestamps, session duration, and platform activity patterns</div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">1.5 Information from Third-Party Sources</h3>
            <p>We may receive information about your business from:</p>
            <div className="space-y-1 text-slate-400">
              <div>- <strong>Meta Platforms:</strong> Business verification status, WhatsApp Business Account information, and messaging analytics via the WhatsApp Business API</div>
              <div>- <strong>Payment processors:</strong> Transaction status and payment confirmation data</div>
              <div>- <strong>Public business registries:</strong> For business verification purposes during onboarding</div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <p>We process your personal information for the following specific purposes:</p>
          
          <div className="space-y-4">
            <div className="mb-4">
              <span className="font-bold text-white">2.1 Platform Operation:</span>
              <span className="text-slate-400 ml-2">To create and manage your Strive Automations account, authenticate your login, and maintain platform functionality including the Strive CRM inbox, contacts, pipelines, and broadcasts.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">2.2 WhatsApp Automation Services:</span>
              <span className="text-slate-400 ml-2">To send and receive WhatsApp messages on behalf of your business using the Meta WhatsApp Cloud API, process automation workflows, and route messages through n8n-based systems.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">2.3 Client Onboarding:</span>
              <span className="text-slate-400 ml-2">To facilitate WhatsApp Business Account connection through Meta's Embedded Signup flow and configure your automation environment.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">2.4 Template Management:</span>
              <span className="text-slate-400 ml-2">To create, submit, and manage WhatsApp message templates on your behalf for Meta's approval process.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">2.5 Payment Processing:</span>
              <span className="text-slate-400 ml-2">To generate GST invoices, process subscription payments, and maintain billing records as required by Indian tax regulations.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">2.6 Technical Support:</span>
              <span className="text-slate-400 ml-2">To diagnose platform issues, debug automation workflows, respond to support requests, and optimize system performance.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">2.7 Security and Fraud Prevention:</span>
              <span className="text-slate-400 ml-2">To monitor for unauthorized access, detect suspicious activity, and protect the integrity of our platform and your business data.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">2.8 Legal Compliance:</span>
              <span className="text-slate-400 ml-2">To comply with applicable Indian laws, Meta's WhatsApp Business Platform Terms, RBI payment regulations, and GST filing requirements.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">2.9 Platform Improvement:</span>
              <span className="text-slate-400 ml-2">To analyze usage patterns, improve existing features, and develop new automation capabilities based on aggregated and anonymized usage data.</span>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">3. WHAT LEGAL BASIS DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
          
          <div className="space-y-4">
            <div className="mb-4">
              <span className="font-bold text-white">3.1 Contractual Necessity:</span>
              <span className="text-slate-400 ml-2">Processing required to fulfill the service agreement between you and Strive Automations, including operating the platform, processing payments, and delivering automation services.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">3.2 Legitimate Business Interests:</span>
              <span className="text-slate-400 ml-2">Processing necessary for our legitimate business interests including platform security, fraud prevention, system monitoring, and service improvement — where these do not override your privacy rights.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">3.3 Legal Obligation:</span>
              <span className="text-slate-400 ml-2">Processing required to comply with applicable Indian laws including GST regulations, the Information Technology Act, 2000, and any court orders or regulatory requirements.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">3.4 Consent:</span>
              <span className="text-slate-400 ml-2">Where we rely on your consent to process specific information, you have the right to withdraw that consent at any time by contacting us at services@striveautomations.in. Withdrawal of consent does not affect the lawfulness of processing conducted prior to withdrawal.</span>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">4. WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?</h2>
          
          <div className="space-y-4">
            <div className="mb-4">
              <span className="font-bold text-white">4.1 Meta Platforms Inc.:</span>
              <span className="text-slate-400 ml-2">We share necessary WhatsApp Business Account data with Meta to enable WhatsApp Business API functionality as required by their platform terms. This includes WABA IDs, Phone Number IDs, message content, and webhook data processed through Meta's Cloud API infrastructure.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">4.2 Infrastructure Service Providers:</span>
              <span className="text-slate-400 ml-2">The following providers process data on our behalf under data processing agreements:</span>
              <div className="space-y-2 mt-2 text-slate-400">
                <div>- <strong>Hostinger International Ltd (India region VPS):</strong> Purpose of hosting n8n automation workflows and webhook processing infrastructure (Location: India, Lithuania).</div>
                <div>- <strong>Vercel Inc (United States):</strong> Purpose of hosting the Strive CRM web application (Location: United States, Singapore).</div>
                <div>- <strong>Supabase Inc (United States):</strong> Purpose of PostgreSQL database for storing client business data, sessions, and orders (Location: United States, Singapore).</div>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">4.3 Payment Processors:</span>
              <span className="text-slate-400 ml-2">Billing and payment data is shared with authorized payment aggregators (Razorpay) solely for processing transactions. All are RBI-authorized Category A Payment Aggregators.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">4.4 Legal and Regulatory Authorities:</span>
              <span className="text-slate-400 ml-2">We may disclose information to Indian government authorities, courts, or regulatory bodies when required by applicable law, court order, or lawful government request. We review all such requests for legal validity before compliance.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">4.5 Business Transfers:</span>
              <span className="text-slate-400 ml-2">In the event of a merger, acquisition, or sale of business assets, your information may be transferred as part of the transaction. We will notify you via your registered email address before any such transfer occurs.</span>
            </div>
          </div>
          <div className="mt-4 border-t border-border pt-4">
            <div className="font-bold text-white mb-2">WE DO NOT:</div>
            <div className="space-y-1 text-slate-400">
              <div>- Sell your personal information to third parties</div>
              <div>- Share your data with advertising networks</div>
              <div>- Use WhatsApp message content for marketing purposes</div>
              <div>- Share your business data with competitors</div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">5. DO WE USE COOKIES AND TRACKING TECHNOLOGIES?</h2>
          
          <div className="space-y-4">
            <div className="mb-4">
              <span className="font-bold text-white">5.1 Essential Cookies:</span>
              <span className="text-slate-400 ml-2">Required for authentication, session management, and keeping you logged into the Strive platform.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">5.2 Preference Cookies:</span>
              <span className="text-slate-400 ml-2">Store your platform settings such as dark/light theme, language, and display preferences.</span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-white">5.3 Analytics:</span>
              <span className="text-slate-400 ml-2">We collect anonymous, aggregated usage statistics to improve platform performance and identify technical issues. This data cannot be used to identify individual users.</span>
            </div>
          </div>
          <div className="mt-4 border-t border-border pt-4">
            <div className="font-bold text-white mb-2">What We Do NOT Use:</div>
            <div className="space-y-1 text-slate-400">
              <div>- Third-party advertising cookies</div>
              <div>- Behavioral tracking pixels</div>
              <div>- Social media tracking tags</div>
              <div>- Cross-site tracking technologies</div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">6. HOW LONG DO WE RETAIN YOUR INFORMATION?</h2>
          <div className="space-y-1 text-slate-400">
            <div>- <strong>Account Data:</strong> Duration of active subscription plus 12 months after termination</div>
            <div>- <strong>WhatsApp Message Content:</strong> 90 days by default.</div>
            <div>- <strong>Billing Records:</strong> 7 years as required by Indian GST regulations (Section 36 of the CGST Act, 2017)</div>
            <div>- <strong>System Logs:</strong> 30 days for security and debugging purposes</div>
            <div>- <strong>Workflow Data:</strong> Duration of active subscription plus 30 days post-termination</div>
            <div>- <strong>Inactive Accounts:</strong> Data deleted or anonymized after 36 months of inactivity</div>
          </div>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
          
          <div className="space-y-4">
            <div className="mb-4">
              <div className="font-bold text-white mb-2">7.1 Technical Security Measures</div>
              <div className="space-y-1 text-slate-400">
                <div>- All data transmission encrypted via TLS 1.2+ (HTTPS) — no unencrypted HTTP connections</div>
                <div>- WhatsApp access tokens stored with AES-256 encryption — never stored in plaintext</div>
                <div>- Row-level security (RLS) policies enforced at the database level via Supabase</div>
                <div>- API authentication via secure token-based systems</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white mb-2">7.2 Organizational Security Measures</div>
              <div className="space-y-1 text-slate-400">
                <div>- Access to client data restricted to authorized personnel on a strict need-to-know basis</div>
                <div>- Regular security reviews of platform infrastructure</div>
                <div>- Automated daily backups of all critical data</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white mb-2">7.3 Honest Limitation</div>
              <p>
                Despite our best efforts, no method of transmission over the internet or electronic storage technology can be guaranteed to be 100% secure. We cannot promise or guarantee that unauthorized third parties will never be able to defeat our security measures. Use our services within a secure network environment.
              </p>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white mb-2">7.4 Security Breach Notification</div>
              <p>
                In the event of a data breach affecting your personal information, we will notify you at your registered email address within 72 hours of becoming aware of the breach, in accordance with applicable Indian data protection regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <p>
            Our Services are intended for business clients and their authorized representatives who are at least 18 years old. We do not knowingly solicit, collect, or process data from individuals under 18 years of age.
          </p>
          <p>
            If we learn that personal information from a user under 18 years of age has been collected, we will immediately deactivate the account and take reasonable measures to delete such data from our records.
          </p>
          <p>
            If you believe we have inadvertently collected information from a minor, please contact us immediately at striveautomations.ai@gmail.com.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          
          <div className="space-y-4">
            <div className="mb-4">
              <div className="font-bold text-white">9.1 Right to Access:</div>
              <p className="text-slate-400">You may request a copy of the personal information we hold about you and how it is being used.</p>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white">9.2 Right to Correction:</div>
              <p className="text-slate-400">You may request correction of any inaccurate or incomplete personal information we hold about you.</p>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white">9.3 Right to Deletion:</div>
              <p className="text-slate-400">You may request deletion of your personal data. We will honor such requests subject to legal retention requirements (e.g., GST records).</p>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white">9.4 Right to Data Portability:</div>
              <p className="text-slate-400">You may request your data in a structured, machine-readable format (JSON or CSV) for transfer to another service provider.</p>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white">9.5 Right to Restrict Processing:</div>
              <p className="text-slate-400">You may request that we restrict processing of your personal data in certain circumstances.</p>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white">9.6 Right to Object:</div>
              <p className="text-slate-400">You may object to processing of your personal data for specific purposes where we rely on legitimate interests as our legal basis.</p>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white">9.7 Right to Withdraw Consent:</div>
              <p className="text-slate-400">Where processing is based on your consent, you may withdraw that consent at any time without affecting the lawfulness of prior processing.</p>
            </div>
          </div>
          <div className="mt-4 border-l-2 border-primary/40 pl-3">
            <p className="font-bold text-white">TO EXERCISE ANY OF THESE RIGHTS:</p>
            <p>Email: <a href="mailto:striveautomations.ai@gmail.com" className="text-primary hover:underline">striveautomations.ai@gmail.com</a></p>
            <p>Subject: "Privacy Rights Request — [Your Name]"</p>
            <p className="mt-2 text-sm text-slate-400">We will respond to all verified privacy rights requests within 30 days of receipt.</p>
          </div>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">10. WHATSAPP DATA SPECIFIC RIGHTS</h2>
          <p>
            As a business client using our WhatsApp automation services, you have the following specific rights regarding WhatsApp data:
          </p>
          
          <div className="space-y-4">
            <div className="mb-4">
              <div className="font-bold text-white">10.1 Message Data Access:</div>
              <p className="text-slate-400">You may request an export of all WhatsApp conversation data associated with your business account within the retention period.</p>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white">10.2 WABA Disconnection:</div>
              <p className="text-slate-400">You may disconnect your WhatsApp Business Account from our platform at any time through Meta's Business Manager. This does not affect your ownership of the WABA or phone number.</p>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white">10.3 Template Ownership:</div>
              <p className="text-slate-400">All WhatsApp message templates created under your WABA ID remain your property. Upon termination, templates remain active in your Meta account.</p>
            </div>
            <div className="mb-4">
              <div className="font-bold text-white">10.4 Customer Data Responsibility:</div>
              <p className="text-slate-400">As the WhatsApp Business Account holder, you are the data controller for all customer data collected through your WhatsApp number. Strive Automations acts as a data processor on your behalf for WhatsApp message processing.</p>
            </div>
          </div>
        </section>

        {/* Section 11 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p>
            Our platform does not currently respond to Do-Not-Track (DNT) browser signals as no uniform technical standard for implementing DNT has been finalized. If a standard is adopted that we are required to follow, we will update this policy accordingly.
          </p>
        </section>

        {/* Section 12 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">12. DATA TRANSFERS</h2>
          <p>
            Your information may be processed in countries outside India, specifically:
          </p>
          <div className="space-y-1 text-slate-400">
            <div>- United States (Vercel, Supabase infrastructure)</div>
            <div>- Singapore (Vercel edge, Supabase region)</div>
            <div>- Lithuania (Hostinger headquarters)</div>
          </div>
          <p>
            These transfers are conducted under appropriate data processing agreements with our service providers. By using our Services from India, you consent to the processing of your information in these locations as described in this policy.
          </p>
        </section>

        {/* Section 13 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">13. THIRD-PARTY SERVICES & LINKS</h2>
          <p>
            Our platform integrates with the following third-party services whose own privacy policies govern their data practices:
          </p>
          <div className="space-y-1 text-slate-400">
            <div>- Meta Platforms Inc.: meta.com/privacy</div>
            <div>- Razorpay: razorpay.com/privacy</div>
            <div>- Hostinger: hostinger.in/privacy</div>
            <div>- Vercel: vercel.com/legal/privacy</div>
            <div>- Supabase: supabase.com/privacy</div>
          </div>
          <p>
            We are not responsible for the privacy practices of these third-party services. We encourage you to review their respective privacy policies.
          </p>
        </section>

        {/* Section 14 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">14. UPDATES TO THIS PRIVACY POLICY</h2>
          <p>
            We may update this Privacy Policy periodically. When we do, we will:
          </p>
          <div className="space-y-1 text-slate-400">
            <div>- Update the "Last Updated" date at the top of this document</div>
            <div>- Notify you via email at your registered address for material changes</div>
            <div>- Post a prominent notice on our platform dashboard</div>
          </div>
          <p>
            We encourage you to review this Privacy Policy periodically. Continued use of our services after any update constitutes acceptance of the revised policy.
          </p>
        </section>

        {/* Section 15 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">15. HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
          <p>
            For any questions, concerns, or requests related to this Privacy Policy or your personal data, please contact us:
          </p>
          <div className="space-y-1 text-slate-400">
            <div><strong>Business:</strong> Strive Automations</div>
            <div><strong>Address:</strong> Tirupur, Tamil Nadu, India — 641 601</div>
            <div><strong>Email:</strong> <a href="mailto:striveautomations.ai@gmail.com" className="text-primary hover:underline">striveautomations.ai@gmail.com</a></div>
            <div><strong>Website:</strong> strivecrm.vercel.app</div>
            <div><strong>Hours:</strong> Monday to Saturday, 9 AM to 6 PM IST</div>
          </div>
          <p className="mt-4">
            For privacy-specific requests, use subject line: "Privacy Request — [Your Name/Business Name]"
          </p>
          <p>
            We aim to respond to all privacy-related queries and requests within 5 business days.
          </p>
        </section>

        {/* Section 16 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-white mt-8">16. HOW CAN YOU REVIEW, UPDATE, OR DELETE YOUR DATA?</h2>
          <p>
            Based on applicable Indian data protection laws, you have the right to request access to, correction of, or deletion of your personal information.
          </p>
          <p>
            To submit a data request:
          </p>
          <div className="space-y-1 text-slate-450 mb-4">
            <div><strong>Step 1:</strong> Email striveautomations.ai@gmail.com</div>
            <div><strong>Step 2:</strong> Use subject: "Data Request — [Request Type]"</div>
            <div><strong>Step 3:</strong> Include your registered email, business name, and specific request details</div>
            <div><strong>Step 4:</strong> We will verify your identity and respond within 30 days</div>
          </div>
          
          <div className="mt-4">
            <p className="font-bold text-white mb-2">Request Types Accepted:</p>
            <div className="space-y-1 text-slate-400">
              <div>- <strong>Access Request:</strong> Receive a copy of your data</div>
              <div>- <strong>Correction Request:</strong> Fix inaccurate information</div>
              <div>- <strong>Deletion Request:</strong> Delete your personal data</div>
              <div>- <strong>Portability Request:</strong> Export your data in JSON/CSV</div>
              <div>- <strong>Restriction Request:</strong> Limit how we use your data</div>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-border text-sm text-slate-500">
          <p className="font-bold text-slate-400">END OF PRIVACY POLICY</p>
          <p>© 2025 Strive Automations. All Rights Reserved.</p>
        </div>
      </div>
    </article>
  );
}
