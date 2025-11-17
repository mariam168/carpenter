import { ShieldCheck, Clock, Tag, MapPin } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-700" aria-hidden="true" />,
    title: "جودة فاخرة",
    desc: "نقدم خدمات بمعايير جودة عالية باستخدام أفضل المواد والأدوات لضمان متانة وإتقان العمل.",
  },
  {
    icon: <Clock className="w-8 h-8 text-green-700" aria-hidden="true" />,
    title: "سرعة في التنفيذ",
    desc: "فريق عمل سريع ومنظم قادر على إنجاز المهام في الوقت المحدد دون التأثير على الجودة.",
  },
  {
    icon: <Tag className="w-8 h-8 text-green-700" aria-hidden="true" />,
    title: "أسعار منافسة",
    desc: "نقدم أسعارًا عادلة مع الحفاظ على الجودة، بالإضافة لخيارات دفع مرنة تناسب جميع العملاء.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-green-700" aria-hidden="true" />,
    title: "خدمة في شمال الرياض",
    desc: "نحن نجار قريب من موقعك في شمال الرياض، نقدم خدمات سريعة في جميع أحياء المنطقة.",
  },
];

const WhyChooseUsSection = () => (
  <section
    id="why-us"
    className="py-20 bg-gradient-to-b from-white via-amber-50 to-amber-100"
    dir="rtl"
  >
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
        لماذا تختار خدماتنا؟
      </h2>
      <div className="w-24 h-1 bg-green-700 mx-auto mb-14 rounded-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            itemScope
            itemType="https://schema.org/Service"
            className="bg-white rounded-2xl border border-amber-200 shadow-md p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 shadow-inner">
                {feature.icon}
              </div>
            </div>
            <h3 itemProp="name" className="text-xl font-bold text-gray-900 mb-4">
              {feature.title}
            </h3>
            <p itemProp="description" className="text-gray-700 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
