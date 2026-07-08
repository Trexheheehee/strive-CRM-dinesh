import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions of service for Strive Automations.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-[1440px] px-8 md:px-16 py-12 text-left font-sans antialiased bg-black">
      {/* Header section */}
      <div className="mb-12 border-b border-slate-800 pb-8">
        <h1 className="text-4xl font-extrabold text-white">Terms & Conditions</h1>
        <p className="mt-4 text-slate-500 font-medium">Strive CRM — Last Updated: July 1, 2025</p>
      </div>

      {/* Main content sections */}
      <div className="space-y-10 text-slate-400 leading-relaxed text-[17px]">
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">1. INTRODUCTION & ACCEPTANCE</h2>
          <p>
            Welcome to Strive Automations. These Terms & Conditions ("Terms") govern your access to and use of our WhatsApp automation platform, CRM tools, workflow automation services, and all associated products (collectively, "Services").
          </p>
          <p>
            By registering an account, accessing our platform, or engaging our automation services, you confirm that you have read, understood, and agree to be legally bound by these Terms. If you are acting on behalf of a business entity, you represent that you have the authority to bind that entity to these Terms.
          </p>
          <p className="text-white font-semibold leading-relaxed border-l-2 border-white pl-4 italic">
            IMPORTANT: If you do not agree to these Terms, you must immediately discontinue use of our platform and services. Continued use constitutes full acceptance of these Terms.
          </p>
          <p>
            Strive Automations reserves the right to update these Terms at any time. Material changes will be communicated via your registered email address. Continued use after the effective date of changes constitutes acceptance of the revised Terms.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">2. DESCRIPTION OF SERVICES</h2>
          <p>
            Strive Automations provides the following automation and communication services to business clients:
          </p>
          
          <div className="space-y-4">
            <div className="mb-4">
              <span className="text-white font-bold">2.1 WhatsApp Business API Integration:</span>
              <span className="text-slate-400 ml-2">Connecting client WhatsApp Business numbers to our platform via Meta's Cloud API and Embedded Signup flow.</span>
            </div>
            <div className="mb-4">
              <span className="text-white font-bold">2.2 Workflow Automation:</span>
              <span className="text-slate-400 ml-2">Custom n8n-based automation workflows for order management, appointment booking, lead generation, and customer support.</span>
            </div>
            <div className="mb-4">
              <span className="text-white font-bold">2.3 Strive CRM Platform:</span>
              <span className="text-slate-400 ml-2">Multi-agent inbox, contact management, sales pipelines, broadcasts, and conversation management dashboard.</span>
            </div>
            <div className="mb-4">
              <span className="text-white font-bold">2.4 WhatsApp Template Management:</span>
              <span className="text-slate-400 ml-2">Creation, submission, and management of Meta-approved WhatsApp message templates.</span>
            </div>
            <div className="mb-4">
              <span className="text-white font-bold">2.5 WhatsApp Coexistence:</span>
              <span className="text-slate-400 ml-2">Simultaneous use of WhatsApp Business App and Cloud API on the same business phone number.</span>
            </div>
            <div className="mb-4">
              <span className="text-white font-bold">2.6 Embedded Signup Onboarding:</span>
              <span className="text-slate-400 ml-2">Seamless client onboarding through Meta's official WhatsApp Business Account connection flow.</span>
            </div>
            <div className="mb-4">
              <span className="text-white font-bold">2.7 Payment Integration:</span>
              <span className="text-slate-400 ml-2">Integration of payment gateways (Razorpay, PhonePe PG, Cashfree) into WhatsApp ordering and sales workflows.</span>
            </div>
            <div className="mb-4">
              <span className="text-white font-bold">2.8 Technical Support & Maintenance:</span>
              <span className="text-slate-400 ml-2">Ongoing support, debugging, and optimization of automation workflows and platform configuration.</span>
            </div>
          </div>

          <p className="mt-4 border-l-2 border-primary/45 pl-4 italic text-sm">
            NOTE: All WhatsApp-related services are subject to Meta's WhatsApp Business Platform Terms of Service. Changes to Meta's policies may affect service availability without prior notice from Strive Automations.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">3. ELIGIBILITY</h2>
          <p>
            To use our Services, you must meet the following requirements: be at least 18 years of age; be capable of forming a legally binding contract under applicable Indian law; have a valid WhatsApp Business Account; have a registered business entity in India; comply with Meta's eligibility requirements; and not operate in a restricted industry.
          </p>
          <p>
            Strive Automations reserves the right to reject any application or terminate any account that does not meet these eligibility requirements, at our sole discretion.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">4. ACCOUNT REGISTRATION & SECURITY</h2>
          <p>
            To access our platform, you must register an account with accurate business information. You are responsible for providing accurate details, maintaining credential confidentiality, and notifying us of any security breaches.
          </p>
          <p className="text-white font-semibold leading-relaxed border-l-2 border-white pl-4 italic">
            SECURITY NOTICE: Strive Automations will never ask for your Meta App credentials or passwords via email. Report any such requests as phishing attempts.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">5. FEES & PAYMENT TERMS</h2>
          <p>
            Our services include a setup fee, monthly retainer, and passed-through Meta API usage charges. Payments are due within 7 days of invoice. Late payments incur a 1.5% monthly penalty, and services may be suspended after 14 days of non-payment.
          </p>
          <p>
            All fees are subject to applicable GST. Ensure your GSTIN is registered for proper invoice generation.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">6. FREE TRIAL</h2>
          <p>
            Strive Automations may offer a 7 to 14-day free trial. Trials are for evaluation only and may have restricted features. We reserve the right to terminate trials that violate these Terms. Data is retained for 30 days post-trial.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">7. PROHIBITED ACTIVITIES</h2>
          <p>
            Strictly prohibited activities include: sending spam or unsolicited messages, impersonation, transmitting malicious code, operating in restricted business categories, hacking, unauthorized reselling, and using automation to harass or harm individuals.
          </p>
          <p className="text-white font-semibold leading-relaxed border-l-2 border-white pl-4 italic">
            ENFORCEMENT: Violations may result in immediate account termination without prior notice and reporting to relevant authorities.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">8. WHATSAPP AUTOMATION POLICY</h2>
          <p>
            Clients must ensure explicit opt-in for all automated messages, use Meta-approved templates, respect the 24-hour service window, and honor opt-out requests within 24 hours. Maintaining number quality is the client's sole responsibility.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">9. INTELLECTUAL PROPERTY</h2>
          <div className="space-y-4">
            <div className="mb-4">
              <span className="text-white font-bold">9.1 Platform Ownership:</span>
              <span className="text-slate-400 ml-2">The platform, workflows, and branding remain the exclusive property of Strive Automations.</span>
            </div>
            <div className="mb-4">
              <span className="text-white font-bold">9.2 Client Data Ownership:</span>
              <span className="text-slate-400 ml-2">All business data, contacts, and conversation history generated by your operations remain your property.</span>
            </div>
          </div>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">10. SERVICE AVAILABILITY & SLA</h2>
          <p>
            We target 99% monthly availability for the CRM platform. Technical queries are responded to within 24 business hours. We are not liable for disruptions caused by Meta's API outages or third-party infrastructure failures.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">11. DISCLAIMER & LIMITATION OF LIABILITY</h2>
          <p>
            Services are provided "as-is". Our total liability is limited to the fees paid by you in the 3 months preceding a claim. We are not liable for losses arising from Meta's policy changes or account restrictions.
          </p>
          <p className="text-white font-semibold leading-relaxed border-l-2 border-white pl-4 italic">
            INDEMNIFICATION: You agree to hold harmless Strive Automations from claims arising from your use of services or violation of Meta's policies.
          </p>
        </section>

        {/* Section 12 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">12. TERMINATION OF SERVICES</h2>
          <p>
            You may terminate with 30 days' notice. We may terminate immediately for policy violations or non-payment. Data is available for export for 7 days post-termination and deleted after 30 days. No refunds are provided upon termination.
          </p>
        </section>

        {/* Section 13 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">13. REFUND POLICY</h2>
          <p>
            Setup fees and retainers are generally non-refundable. Meta conversation charges are non-refundable. Discretionary credits may be issued for verified technical failures lasting over 72 hours. Refunds are processed within 7-10 business days.
          </p>
        </section>

        {/* Section 14 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">14. PRIVACY POLICY</h2>
          <p>
            Your use of Services is also governed by our Privacy Policy available at strivecrm.vercel.app/privacy.
          </p>
        </section>

        {/* Section 15 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">15. GOVERNING LAW & DISPUTE RESOLUTION</h2>
          <p>
            These Terms are governed by Indian law. Disputes must first be attempted to be resolved via good-faith negotiation, followed by mediation and finally the courts of Coimbatore, Tamil Nadu.
          </p>
        </section>

        {/* Section 16 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">16. GENERAL PROVISIONS</h2>
          <p>
            These Terms constitute the entire agreement. If any provision is found unenforceable, the remainder stays in effect. We reserve the right to amend Terms with 14 days' notice.
          </p>
        </section>

        {/* Section 17 */}
        <section className="pt-12 border-t border-slate-800">
          <div className="bg-slate-900/50 p-8 rounded-lg border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4">17. CONTACT INFORMATION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400">
              <p><span className="text-white font-semibold">Business:</span> Strive Automations</p>
              <p><span className="text-white font-semibold">Email:</span> striveautomations.ai@gmail.com</p>
              <p><span className="text-white font-semibold">Location:</span> Tirupur, Tamil Nadu — 641 601</p>
              <p><span className="text-white font-semibold">Website:</span> strivecrm.vercel.app</p>
              <p><span className="text-white font-semibold">Hours:</span> Mon-Sat, 9 AM to 6 PM IST</p>
            </div>
          </div>
          <p className="mt-8 text-center text-slate-600 text-sm">
            END OF TERMS & CONDITIONS <br/>
            © 2025 Strive Automations. All Rights Reserved.
          </p>
        </section>
      </div>
    </article>
  );
}
