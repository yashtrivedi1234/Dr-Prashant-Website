import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SocialSection from "@/components/SocialSection";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => (
  <>
    <HeroCarousel />
    <AboutSection />
    <ServicesSection />
    {/* <StatsSection /> */}
    <WhyChooseUs />
    {/* <SocialSection /> */}
     <TestimonialsSection />
    <GallerySection />
    <BlogSection />
    <CTASection />
  </>
);

export default Index;
