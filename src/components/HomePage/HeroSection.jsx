import React, { useEffect, useState } from "react";
import carpenter from "../../assets/hero2.jpg";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      dir="rtl"
      className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-[#38322a]"
      aria-labelledby="hero-title"
      aria-describedby="hero-description"
    >
      {/* خلفية الصورة */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 will-change-transform"
        style={{
          backgroundImage: `url(${carpenter})`,
          transform: `translateY(${offsetY * 0.25}px) scale(1.1)`,
          filter: "brightness(0.55) contrast(1.05)",
        }}
        role="presentation"
      />

      {/* طبقات الإضاءة */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute top-16 right-12 w-28 h-28 bg-[#f5c08a]/20 rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-20 left-16 w-36 h-36 bg-[#25D366]/15 rounded-full blur-3xl"
      />

      {/* المحتوى */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1
          id="hero-title"
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#f5c08a] to-white bg-clip-text text-transparent drop-shadow-lg mb-6 leading-normal py-2"
        >
          نجار شمال الرياض – نجار البيت السعودي
        </h1>

        <p
          id="hero-description"
          className="text-base md:text-lg text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto"
        >
          نقدم خدمات <strong>النجارة الفاخرة</strong> في شمال الرياض: تصميم وصيانة
          الأثاث، تركيب الأبواب، الأثاث المنزلي، أعمال <strong>الديكور الخشبي</strong>،
          وتركيب الأقفال الذكية بخبرة تتجاوز <strong>10 سنوات</strong>.
        </p>

        <a
          href="https://wa.me/0561200937"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="تواصل مع نجار شمال الرياض عبر واتساب"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f8e5a3] hover:from-[#c8a430] hover:to-[#e0c38a] text-[#4a2c0f] font-bold py-3 px-8 rounded-full shadow-lg shadow-yellow-600/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-offset-2"
        >
          <FaWhatsapp className="w-7 h-7" aria-hidden="true" />
          <span>تواصل عبر واتساب</span>
        </a>
      </div>

      {/* بيانات منظمة لنتائج البحث */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "نجار شمال الرياض - نجار البيت السعودي",
          "description":
            "نجار شمال الرياض متخصص في تصميم وصيانة الأثاث، تركيب الأبواب والأقفال الذكية، وأعمال النجارة الفاخرة بخبرة تزيد عن 10 سنوات.",
          "image": "https://smart-shop-khaki.vercel.app/assets/hero2.jpg",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "الرياض",
            "addressCountry": "السعودية",
          },
          "telephone": "+966561200937",
          "areaServed": "شمال الرياض",
          "url": "https://smart-shop-khaki.vercel.app/",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+966561200937",
            "contactType": "customer service",
          },
        })}
      </script>
    </section>
  );
}
