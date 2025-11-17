import { useState } from "react";
import { Phone, MessageSquare, MapPin, Clock, Send } from "lucide-react";

const WHATSAPP_NUMBER = "966576405991";

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-green-700" aria-hidden="true" />,
    title: "هاتف الشركة",
    value: "057 640 5991",
    href: `tel:+${WHATSAPP_NUMBER}`,
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-green-700" aria-hidden="true" />,
    title: "واتساب",
    value: "057 640 5991",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: <MapPin className="w-6 h-6 text-green-700" aria-hidden="true" />,
    title: "موقعنا",
    value: "شمال الرياض، المملكة العربية السعودية",
  },
  {
    icon: <Clock className="w-6 h-6 text-green-700" aria-hidden="true" />,
    title: "ساعات العمل",
    value: "السبت - الخميس: 8ص - 8م",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const { name, phone, service, message } = formData;

    const rawMessage = `👋 مرحبًا،
أنا: ${name}
رقم الهاتف: ${phone}
نوع الخدمة المطلوبة: ${service || "لم يتم التحديد"}
الرسالة: ${message || "لا توجد تفاصيل إضافية"}
    `;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-white"
      dir="rtl"
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* العنوان الرئيسي */}
        <div className="text-center">
          <h1
            id="contact-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
          >
            تواصل معنا لخدمة سريعة واحترافية
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
            نحن في <strong>نجار شمال الرياض</strong> جاهزون لاستقبال اتصالاتكم
            واستفساراتكم على مدار الأسبوع — عبر الهاتف أو الواتساب.
          </p>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-12 md:mb-16 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* معلومات التواصل */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              معلومات التواصل المباشر
            </h2>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100/80 shadow-inner mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 text-base md:text-lg hover:text-green-700 transition-colors duration-300"
                      aria-label={`اتصل بنا عبر ${item.title}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 text-base md:text-lg">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* نموذج التواصل */}
          <div className="bg-white rounded-2xl border border-amber-200 shadow-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              أرسل لنا رسالة مباشرة الآن
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendToWhatsApp();
              }}
              className="space-y-5"
              aria-label="نموذج إرسال رسالة عبر واتساب"
            >
              <input
                type="text"
                name="name"
                placeholder="الاسم بالكامل"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="w-full bg-amber-50/80 border border-amber-300 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
              />
              <input
                type="tel"
                name="phone"
                placeholder="رقم الهاتف"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
                className="w-full bg-amber-50/80 border border-amber-300 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full bg-amber-50/80 border border-amber-300 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 appearance-none"
              >
                <option value="" disabled>
                  -- اختر الخدمة المطلوبة --
                </option>
                <option value="تفصيل الأبواب">تفصيل الأبواب</option>
                <option value="غرف نوم وخزائن">غرف نوم وخزائن</option>
                <option value="الأثاث والديكورات">الأثاث والديكورات</option>
                <option value="صيانة الأبواب">صيانة الأبواب</option>
                <option value="تركيب أقفال ذكية">تركيب أقفال ذكية</option>
                <option value="خدمة أخرى">خدمة أخرى</option>
              </select>
              <textarea
                name="message"
                placeholder="تفاصيل الطلب (اختياري)..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-amber-50/80 border border-amber-300 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label="إرسال الرسالة عبر واتساب"
              >
                <Send className="w-5 h-5" aria-hidden="true" />
                <span>إرسال عبر واتساب</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* بيانات منظمة (Structured Data) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "نجار شمال الرياض",
            "telephone": "+966576405991",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "الرياض",
              "addressCountry": "السعودية",
            },
            "url": "https://smart-shop-khaki.vercel.app/",
          },
        })}
      </script>
    </section>
  );
};

export default ContactSection;
