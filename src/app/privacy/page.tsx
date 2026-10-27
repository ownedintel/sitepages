import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Sigmoidal",
  description: "How Sigmoidal handles and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink reveal">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Privacy
            </p>
            <h1 className="font-display text-h1 text-ink mt-5 reveal reveal-delay-1">Privacy Policy</h1>
          </div>

          <article className="prose-sigmoidal mt-16 max-w-3xl space-y-8 reveal reveal-delay-2">
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Welcome to https://sigmoidal.io/ (&ldquo;Site&rdquo;, &ldquo;Sites&rdquo;), hosted by Sigmoidal LLC (&ldquo;Sigmoidal&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; and/or &ldquo;our&rdquo;). Sigmoidal provides enterprise-dedicated AI Consulting, AI Software Development, and next-generation AI Knowledge Assistant (&ldquo;Services&rdquo;). This Privacy Policy describes how we handle and protect your personal data in connection with Sigmoidal&apos;s business activities, like conferences and events, client services, and on websites, applications, and communications that post a link to this Privacy Policy (collectively, &ldquo;Services&rdquo;), in our capacity as data controllers.
            </p>

            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Throughout this Privacy Policy, &ldquo;personal information&rdquo; or &ldquo;personal data&rdquo; refers to any information that is unique to an individual, such as name, address, email address, phone number, IP address, and other information that can reasonably identify an individual.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">Contact us</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Sigmoidal is a Delaware corporation with the following contact information:<br />
              Sigmoidal LLC<br />
              880 3rd Avenue, 5th Floor<br />
              New York, NY 10022<br />
              <a href="mailto:privacy@sigmoidal.io" className="text-teal-ink hover:text-teal">privacy@sigmoidal.io</a>
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">Information we collect</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Sigmoidal collects personal data in the course of its business activities, including in connection with some services. We also collect personal data on certain areas of the Sites when you register for or apply for jobs through the Sigmoidal Careers Page, register for Sigmoidal newsletters and alerts, sign up for meetings, conferences, and events, and/or participate in public user posting areas (such as bulletin boards, discussion forums, and surveys).
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">Use of information</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Sigmoidal uses your personal data to fulfill your requests for information, process your requests to participate in conferences and events, personalize content that you view or receive on the Sites, evaluate and improve our services, distribute newsletters and alerts to you, recruit and evaluate job applicants, analyze the Sites&apos; performance and functioning, prevent fraud, enforce our terms of use, comply with all applicable laws, and accomplish other purposes you may initiate or request.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">Disclosure of personal data</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Sigmoidal will not intentionally disclose or transfer your personal data to third-parties without your consent or as otherwise permitted by law. We may provide access to your personal data to third-party service providers engaged by Sigmoidal to provide services related to the Sites as well as related to Sigmoidal&apos;s business activities.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">Security</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Sigmoidal has implemented generally accepted standards of technology and operational security to protect personal data from loss, misuse, alteration, or destruction. Only authorized Sigmoidal personnel and third party service providers are provided access to personal data.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">Data retention</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Sigmoidal retains personal data, as necessary, for the duration of the relevant business relationship. We may also retain personal data for longer than the duration of the business relationship should we need to keep it to protect ourselves against legal claims, use it for analysis or historical record-keeping.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">Your rights</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Where granted by applicable law, you may have the right to request access to the personal data that we have collected about you for the purposes of reviewing, modifying, or requesting deletion of the data. If you would like to make a request, please contact us at <a href="mailto:privacy@sigmoidal.io" className="text-teal-ink hover:text-teal">privacy@sigmoidal.io</a>.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">Your California privacy rights</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              As required by the California Consumer Privacy Act (CCPA), this Privacy Policy describes the categories of personal data collected, processed, and disclosed by Sigmoidal, the categories of sources for that data, and the business or commercial purposes for which that data is collected, processed, and disclosed.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">Changes to Privacy Policy</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              By visiting and using the Sites, you consent to the collection, use, and storage of your personal data by us in the manner described in this Privacy Policy and elsewhere on the Site. We reserve the right to make changes to this Privacy Policy from time to time.
            </p>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}
