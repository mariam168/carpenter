import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "966561200937";

const FloatingWhatsapp = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("whatsapp_welcome_shown");

    if (!hasShown) {
      setShowWelcome(true);
      const timer = setTimeout(() => {
        setShowWelcome(false);
        sessionStorage.setItem("whatsapp_welcome_shown", "true");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div
      className="fixed bottom-5 right-5 z-[200]"
      aria-label="زر تواصل عبر واتساب"
    >
      <div className="relative flex flex-col items-end">
        {showWelcome && (
          <div
            className="absolute bottom-16 right-0 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg border border-green-500 min-w-[200px] max-w-[320px] text-sm leading-relaxed animate-[fadeInUp_0.4s_ease]"
            role="status"
            aria-live="polite"
          >
            👋 أهلاً بك! يسعدنا تواصلك معنا عبر واتساب.
            <div className="absolute -bottom-2 right-5 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-green-500"></div>
          </div>
        )}

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-600 hover:bg-green-700 text-white rounded-full shadow-xl w-14 h-14 flex items-center justify-center overflow-visible transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          aria-label="تواصل عبر واتساب مع نجار شمال الرياض"
        >
          <FaWhatsapp size={28} aria-hidden="true" />
          <span className="absolute inset-0 rounded-full border-2 border-green-400 opacity-40 animate-ping"></span>
        </a>
      </div>

      {/* بيانات منظمة لنتائج البحث */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          "telephone": "+966561200937",
          "contactType": "customer service",
          "areaServed": "Saudi Arabia",
          "availableLanguage": ["Arabic", "English"],
        })}
      </script>
    </div>
  );
};

export default FloatingWhatsapp;
