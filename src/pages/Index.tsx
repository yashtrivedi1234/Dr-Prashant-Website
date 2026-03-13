import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SocialSection from "@/components/SocialSection";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <HeroCarousel />
    <AboutSection />
    <ServicesSection />
    <WhyChooseUs />
    <SocialSection />
    <GallerySection />
    <BlogSection />
    <Footer />
  </div>
);

export default Index;
