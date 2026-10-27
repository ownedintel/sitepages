import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Domains from "@/components/Domains";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import Blog from "@/components/Blog";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Domains />
      <Stats />
      <CaseStudies />
      <Blog />
      <CTASection />
    </PageLayout>
  );
}
