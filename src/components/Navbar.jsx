import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "الرئيسية", path: "#hero" },
  { name: "خدماتنا", path: "#services" },
  { name: "من نحن", path: "#about" },
  { name: "لماذا نحن", path: "#why-us" },
   { name: "آراء العملاء", path: "#testimonials" },
  { name: "اتصل بنا", path: "#contact" },
 
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      dir="rtl"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#111111]/90 shadow-lg"
          : "bg-transparent"
      }`}
    >
     
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)} 
          className="text-xl md:text-2xl font-extrabold tracking-wider bg-gradient-to-r from-[#ffffff] to-[#eeeada] bg-clip-text text-transparent"
        >
          نجار البيت السعودي
        </Link>
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-300 hover:text-[#d4af37] transition-colors duration-300 text-sm tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f8e5a3] text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            تواصل الآن
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#d4af37]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-8 bg-[#111111]/95 backdrop-blur-lg border-t border-[#d4af37]/20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-200 hover:text-[#d4af37] text-lg"
              onClick={handleLinkClick} 
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#f8e5a3] text-black font-semibold shadow-lg"
            onClick={handleLinkClick}
          >
            تواصل الآن
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;