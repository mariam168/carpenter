import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[200]">
      <div className="relative flex flex-col items-end">
        {showWelcome && (
          <div className="absolute bottom-16 right-0 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg border border-green-500 min-w-[200px] max-w-[520px] text-xs leading-relaxed animate-[fadeInUp_0.4s_ease]">
            👋 أهلاً بك! يسعدنا تواصلك معنا
            <div className="absolute -bottom-2 right-5 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-green-500"></div>
          </div>
        )}

        <a
          href="https://wa.me/0561200937"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center overflow-visible"
          aria-label="تواصل عبر واتساب"
        >
          <FaWhatsapp size={26} />
          <span className="absolute inset-0 rounded-full border-2 border-green-400 opacity-50 animate-ping"></span>
        </a>
      </div>
    </div>
  );
};

export default FloatingWhatsapp;
