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
        {/* Title and Meta */}
        <title>ورشة النجارة الحديثة | تصميم وتنفيذ أثاث مخصص</title>
        <meta
          name="description"
          content="متخصصون في تصميم وتنفيذ كافة أعمال النجارة من مطابخ وأبواب وأثاث منزلي ومكتبي بأعلى جودة وأفضل الأسعار."
        />
        <meta
          name="keywords"
          content="نجارة, ورشة نجارة, تصميم أثاث, تفصيل أثاث, مطابخ خشب, أبواب خشب, أثاث منزلي, أثاث مكتبي, نجار شمال الرياض"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="ورشة النجارة الحديثة | تصميم وتنفيذ أثاث مخصص" />
        <meta property="og:description" content="متخصصون في تصميم وتنفيذ كافة أعمال النجارة من مطابخ وأبواب وأثاث منزلي ومكتبي بأعلى جودة وأفضل الأسعار." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ورشة النجارة الحديثة | تصميم وتنفيذ أثاث مخصص" />
        <meta name="twitter:description" content="متخصصون في تصميم وتنفيذ كافة أعمال النجارة من مطابخ وأبواب وأثاث منزلي ومكتبي بأعلى جودة وأفضل الأسعار." />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Structured Data for LocalBusiness */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ورشة النجارة الحديثة",
            "image": "https://example.com/logo.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "شمال الرياض",
              "addressLocality": "الرياض",
              "addressCountry": "SA"
            },
            "telephone": "+966561200937",
            "url": "https://example.com"
          }
          `}
        </script>
      </Helmet>

      {/* Sections */}
      <HeroSection h1="نجار البيت السعودي" />
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
