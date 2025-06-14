"use client";
import AdShowcase from "@/components/ad-showcase";
import BrandsSection from "@/components/brands-section";
import ContentSection from "@/components/content-section";
import CTASection from "@/components/cta-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navigation from "@/components/navigation";
import ProcessSection from "@/components/process-section";
import TestimonialSection from "@/components/testimonial-section";
import Threads from "@/components/Threads";
import WorkflowSection from "@/components/workflow-section";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ContentSection />
      <AdShowcase />
      <ProcessSection />
      <WorkflowSection />
      <TestimonialSection />
      <BrandsSection />
      <FAQSection />
      <section className="h-[340px]">
        <Threads
          amplitude={5}
          distance={0.7}
          enableMouseInteraction={false}
          color={[0, 0, 0]}
        />
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
