import HeroCarousel from "@/components/HeroCarousel";
import QuickContactStrip from "@/components/QuickContactStrip";
import UrgentCareBanner from "@/components/UrgentCareBanner";
import AboutSection from "@/components/AboutSection";
import ClinicInfoSection from "@/components/ClinicInfoSection";
import SymptomsSection from "@/components/SymptomsSection";
import TreatmentSection from "@/components/TreatmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import FacilitiesSection from "@/components/FacilitiesSection";
import StatsSection from "@/components/StatsSection";
import PatientJourney from "@/components/PatientJourney";
import FAQSection from "@/components/FAQSection";
import CredentialsStrip from "@/components/CredentialsStrip";
import LocalSeoSection from "@/components/LocalSeoSection";

const Index = () => (
  <>
    <HeroCarousel />
    <AboutSection />
     <StatsSection />
      <TreatmentSection />
        <UrgentCareBanner />
    {/* <QuickContactStrip /> */}
  
    
   
    <SymptomsSection />
   
    {/* <WhyChooseUs /> */}
    {/* <CredentialsStrip /> */}
    {/* <ClinicInfoSection /> */}
    <FacilitiesSection />
    <PatientJourney />
    <TestimonialsSection />
    <FAQSection />
    <GallerySection />
    {/* <LocalSeoSection /> */}
    <BlogSection />
    <CTASection />
  </>
);

export default Index;
