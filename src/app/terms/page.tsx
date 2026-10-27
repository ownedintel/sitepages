import { Metadata } from "next";
import PageLayout from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Terms of Use | Sigmoidal",
  description: "Terms of use for sigmoidal.io.",
};

export default function TermsPage() {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="flex items-baseline gap-3 text-eyebrow font-medium uppercase text-teal-ink reveal">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[calc(0.5px-0.365em)] bg-teal" />
              Terms
            </p>
            <h1 className="font-display text-h1 text-ink mt-5 reveal reveal-delay-1">Terms of use</h1>
            <p className="mt-4 text-sm text-slate reveal reveal-delay-2">Last updated January 15, 2023</p>
          </div>

          <article className="prose-sigmoidal mt-16 max-w-3xl space-y-8 reveal reveal-delay-2">
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Welcome to https://sigmoidal.io/ (&ldquo;Site&rdquo;, &ldquo;Sites&rdquo;), hosted by Sigmoidal LLC. Sigmoidal LLC and its affiliates (&ldquo;Sigmoidal&rdquo;, &ldquo;our&rdquo; or &ldquo;we&rdquo;) provides its content on its websites that post a link to this Terms of Use subject to the following terms and conditions (the &ldquo;Terms&rdquo;). We may periodically change the Terms without prior notice, so please check back from time to time.
            </p>

            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Sigmoidal LLC<br />
              880 3rd Avenue, 5th Floor<br />
              New York, NY 10022<br />
              <a href="mailto:privacy@sigmoidal.io" className="text-teal-ink hover:text-teal">privacy@sigmoidal.io</a>
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">1. Copyrights</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              All content and functionality on the Site, including text, graphics, logos, icons, images, and videos and the selection and arrangement thereof, in addition to any concepts, know-how, tools, frameworks, software, applications or other technology, algorithms, models, processes, and industry perspectives underlying or embedded in the preceding, along with any enhancements to or derivative works thereof (the &ldquo;Site Content&rdquo;) may be a part of the exclusive property of Sigmoidal or its licensors and, to the extent applicable, is protected by international copyright laws.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">2. Trademarks</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              The trademarks, service marks, designs, and logos (collectively, the &ldquo;Trademarks&rdquo;) displayed on the Site are the registered and unregistered Trademarks of Sigmoidal and its licensors. You agree that, except as expressly permitted by us or by our licensors, you will not refer to or attribute any information to Sigmoidal or its licensors in any public medium for advertising or promotion purposes.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">3. Use of site content</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Sigmoidal hereby grants you a limited, non-exclusive, non-transferable, revocable license for the term hereof to access and download, display, and print one copy of the Site Content on any single computer solely for your internal, business use, provided that you do not modify the Site Content in any way, that you retain all copyright and other proprietary notices displayed on the Site Content, and that you otherwise comply with these Terms of use.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">4. User postings</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              You acknowledge and agree that Sigmoidal shall own and have the unrestricted right to use, publish, and otherwise exploit any and all information that you post or otherwise publish on the Site in postings, forums or message boards, questionnaire, survey responses, and otherwise.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">5. Notices of infringement</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              Sigmoidal prohibits the posting of any information that infringes or violates the copyright rights and/or other intellectual property rights of any person or entity. If you believe that your intellectual property right is infringed by any content on the Site, please write to Sigmoidal at the address shown above.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">6. Disclaimers</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              THE CONTENT AND FUNCTIONALITY ON THE SITE ARE PROVIDED WITH THE UNDERSTANDING THAT SIGMOIDAL IS NOT HEREIN ENGAGED IN RENDERING PROFESSIONAL ADVICE OR SERVICES TO YOU. ALL CONTENT AND FUNCTIONALITY ON THE SITE ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">7. Indemnification</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              You hereby indemnify, defend, and hold harmless Sigmoidal and all of its predecessors, successors, parents, subsidiaries, affiliates, officers, directors, shareholders, investors, employees, agents, representatives, and attorneys from and against any and all liability, expenses, costs, or other losses incurred in connection to any claims arising out of your use of the Site.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">8. Third-party websites &amp; Providers</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              We may provide links to third-party websites, and some of the content appearing to be on this Site is in fact supplied, supported, or provided directly or indirectly by third parties. Sigmoidal has no responsibility for these third-party websites.
            </p>

            <h2 className="font-display text-h3 text-ink pt-4">9. Governing law; jurisdiction</h2>
            <p className="text-[1.0625rem] leading-[1.7] text-ink/80">
              These Terms of use are governed by the laws of the Republic of Poland. Any matters not regulated by this Terms of use shall be regulated by the relevant provisions of the Polish law.
            </p>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}
