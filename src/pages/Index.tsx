import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import SocialSection from "@/components/SocialSection";

const Index = () => (
  <>
    <HeroCarousel />
    <AboutSection />
    <ServicesSection />
    <WhyChooseUs />
    {/* <StatsSection /> */}
    <TestimonialsSection />
    <GallerySection />
    <BlogSection />
    <CTASection />
    {/* <SocialSection /> */}
  </>
);

export default Index;