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
      dir="rtl"
      className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-[#38322a]"
      id="hero"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{
          backgroundImage: `url(${carpenter})`,
          transform: `translateY(${offsetY * 0.25}px) scale(1.1)`,
          filter: "brightness(0.55) contrast(1.05)",
        }}
      />
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

      <div className="relative z-10 text-center px-6 max-w-3xl">
    
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#f5c08a] to-white bg-clip-text text-transparent drop-shadow-lg mb-6 leading-normal py-2">
          نجار البيت السعودي
        </h1>

        <p className="text-base md:text-lg text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
          نجارة راقية تشمل: تصميم وصيانة الأثاث، تركيب أبواب خشبية، أثاث ايكيا،
          وأقفال ذكية.
          <br /> جودة عالية ولمسة فنية فاخرة.
        </p>

        <a
          href="https://wa.me/0561200937"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#f8e5a3] hover:from-[#c8a430] hover:to-[#e0c38a] text-[#4a2c0f] font-bold py-3 px-8 rounded-full shadow-lg shadow-yellow-600/30 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 text-lg"
        >
          <FaWhatsapp className="w-7 h-7" />
          <span>تواصل عبر واتساب</span>
        </a>
      </div>
    </section>
  );
}