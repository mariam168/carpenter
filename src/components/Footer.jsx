import { Phone, MessageSquare, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-stone-800 text-stone-300 pt-12 md:pt-16 pb-6 md:pb-8"
      dir="rtl"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4 lg:col-span-1">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-200 to-stone-300 bg-clip-text text-transparent" itemProp="name">
            نجار شمال الرياض
          </h2>
          <p className="leading-relaxed text-stone-400" itemProp="description">
            متخصصون في تقديم أرقى خدمات النجارة. نجمع بين الحرفية التقليدية والتصاميم العصرية لنقدم لكم جودة لا تضاهى.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">روابط سريعة</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-orange-300 transition-colors">خدماتنا</a></li>
            <li><a href="#about" className="hover:text-orange-300 transition-colors">من نحن</a></li>
            <li><a href="#portfolio" className="hover:text-orange-300 transition-colors">أعمالنا</a></li>
            <li><a href="#contact" className="hover:text-orange-300 transition-colors">اتصل بنا</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">أبرز الخدمات</h3>
          <ul className="space-y-2 text-stone-300">
            <li className="flex items-center gap-2"><span className="text-orange-300">&bull;</span> تركيب أثاث ايكيا</li>
            <li className="flex items-center gap-2"><span className="text-orange-300">&bull;</span> تصليح وصيانة الأبواب</li>
            <li className="flex items-center gap-2"><span className="text-orange-300">&bull;</span> تفصيل غرف نوم وخزائن</li>
            <li className="flex items-center gap-2"><span className="text-orange-300">&bull;</span> تركيب الأقفال الذكية</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">تواصل معنا</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-300 flex-shrink-0" aria-hidden="true"/>
              <a href="tel:+0561200937" aria-label="اتصل بالهاتف" className="hover:text-orange-300 transition-colors">057 640 5991</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-orange-300 flex-shrink-0" aria-hidden="true"/>
              <a href="https://wa.me/0561200937" target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب" className="hover:text-orange-300 transition-colors">
                واتساب مباشر
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-300 mt-1 flex-shrink-0" aria-hidden="true"/>
              <span itemProp="address">شمال الرياض، المملكة العربية السعودية</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-700/50 mt-10 md:mt-12 pt-6 text-center text-stone-400 text-sm">
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} | نجار شمال الرياض</p>
      </div>
    </footer>
  );
};

export default Footer;
