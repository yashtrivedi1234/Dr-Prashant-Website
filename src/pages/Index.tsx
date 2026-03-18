import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TreatmentSection from "@/components/TreatmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import PatientJourney from "@/components/PatientJourney";

const Index = () => (
  <>
    <HeroCarousel />
    <AboutSection />
    {/* <ServicesSection /> */}
    <StatsSection />
    <TreatmentSection />
    <WhyChooseUs />
    <GallerySection />
    <PatientJourney />
    <TestimonialsSection />
    <BlogSection />
    <CTASection />
  </>
);

export default Index;