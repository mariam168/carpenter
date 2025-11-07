import { useState } from "react";
import { Phone, MessageSquare, MapPin, Clock, Send } from "lucide-react";
const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-green-700" />,
    title: "هاتف الشركة",
    value: "0576405991",
    href: "tel:+0561200937",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-green-700" />,
    title: "واتساب",
    value: "0576405991",
    href: "https://wa.me/0561200937",
  },
  {
    icon: <MapPin className="w-6 h-6 text-green-700" />,
    title: "موقعنا",
    value: "شمال الرياض، المملكة العربية السعودية",
  },
  {
    icon: <Clock className="w-6 h-6 text-green-700" />,
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
    const text = `👋 مرحبًا، أنا ${name}%0A📞 رقم الهاتف: ${phone}%0A🪚 نوع الخدمة: ${service}%0A💬 الرسالة: ${message}`;
    const whatsappUrl = `https://wa.me/0561200937?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            تواصل معنا لخدمة سريعة
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-14 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">معلومات التواصل المباشر</h3>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 shadow-inner mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                  {item.href ? (
                     <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-700 transition-colors duration-300">
                        {item.value}
                     </a>
                  ) : (
                    <p className="text-gray-700">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-amber-200 shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              أو أرسل لنا رسالة مباشرة
            </h3>
            <form onSubmit={(e) => { e.preventDefault(); sendToWhatsApp(); }} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="الاسم بالكامل"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-amber-50 border border-amber-300 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="رقم الهاتف"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-amber-50 border border-amber-300 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-amber-50 border border-amber-300 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300 appearance-none"
              >
                <option value="">-- اختر الخدمة المطلوبة --</option>
                <option value="تفصيل الأبواب">تفصيل الأبواب</option>
                <option value="غرف نوم وخزائن">غرف نوم وخزائن</option>
                <option value="الأثاث والديكورات">الأثاث والديكورات</option>
                <option value="صيانة الأبواب">صيانة الأبواب</option>
                <option value="تركيب أقفال ذكية">تركيب أقفال ذكية</option>
              </select>
              <textarea
                name="message"
                placeholder="تفاصيل الطلب..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-amber-50 border border-amber-300 text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                <span>إرسال عبر واتساب</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;