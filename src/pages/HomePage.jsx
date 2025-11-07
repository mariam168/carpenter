import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HomePage/HeroSection';
import ServicesSection from '../components/HomePage/ServicesSection';
import AboutSection from '../components/HomePage/AboutSection';
import WhyChooseUsSection from '../components/HomePage/WhyChooseUsSection';
import SpecializedServicesSection from '../components/HomePage/SpecializedServicesSection';
import TestimonialsSection from '../components/HomePage/TestimonialsSection';
import FaqSection from '../components/HomePage/FaqSection';
import FloatingButtons from '../components/HomePage/FloatingButtons';
import ContactSection from '../components/HomePage/ContactSection';
import MapSection from '../components/HomePage/MapSection';



const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>ورشة النجارة الحديثة | تصميم وتنفيذ أثاث مخصص</title>
        <meta name="description" content="متخصصون في تصميم وتنفيذ كافة أعمال النجارة من مطابخ وأبواب وأثاث منزلي ومكتبي بأعلى جودة وأفضل الأسعار." />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUsSection />
      <SpecializedServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <FloatingButtons />
      <MapSection />
      
    </>
  );
};

export default HomePage;