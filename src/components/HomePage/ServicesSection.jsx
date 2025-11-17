import door from "../../assets/door.jpg";
import room from "../../assets/room.jpg";
import furn from "../../assets/furn.jpg";
import bed2 from "../../assets/bed2.jpg";
import furn2 from "../../assets/furn2.jpg";
import furn3 from "../../assets/furn3.jpg";
import smart from "../../assets/smart doors.jpg";

const services = [
  {
    _id: "1",
    title: "تفصيل الأبواب الخشبية الفاخرة",
    image: door,
    features: [
      "تفصيل أبواب خشبية بجودة عالية",
      "تصميم مودرن وكلاسيك حسب الطلب",
      "استخدام خشب طبيعي عالي الجودة (زان – أرو – موسكي)",
      "ضمان شامل على جودة التصنيع والتركيب",
    ],
  },
  {
    _id: "2",
    title: "تفصيل غرف نوم وخزائن متكاملة",
    image: room,
    features: [
      "تصميم وتنفيذ غرف نوم فاخرة",
      "تفصيل خزائن ودريسينج روم",
      "استغلال مثالي للمساحات الصغيرة",
      "تصاميم عصرية وعملية حسب ذوق العميل",
    ],
  },
  {
    _id: "3",
    title: "تفصيل الأثاث والديكورات الخشبية",
    image: furn,
    features: [
      "تصميم مكاتب خشبية حديثة",
      "ديكورات داخلية خشبية راقية",
      "تفصيل وحدات تلفزيون وأرفف",
      "أثاث مخصص حسب الطلب بمقاييس دقيقة",
    ],
  },
  {
    _id: "4",
    title: "تركيب وصيانة غرف النوم",
    image: bed2,
    features: [
      "فك وتركيب غرف النوم والدواليب",
      "إصلاح الأثاث الخشبي باحترافية",
      "تركيب مفصلات ومقابض جديدة",
      "صيانة شاملة لجميع أنواع غرف النوم",
    ],
  },
  {
    _id: "5",
    title: "خدمات تركيب أثاث إيكيا",
    image: furn2,
    features: [
      "فك وتركيب أثاث إيكيا بجميع أنواعه",
      "تركيب كبتات وطاولات ومرايات",
      "تجميع احترافي وسريع دون تلف القطع",
      "ضمان على جودة التركيب",
    ],
  },
  {
    _id: "6",
    title: "تركيب وصيانة الأبواب الخشبية",
    image: furn3,
    features: [
      "تركيب أبواب داخلية وخارجية",
      "تصليح الأبواب المكسورة أو العالقة",
      "تركيب مفصلات ومقابض وأقفال جديدة",
      "تغيير الحلق وصيانة الأبواب بالكامل",
    ],
  },
  {
    _id: "7",
    title: "تركيب الأقفال الذكية وخدمات الأمان",
    image: smart,
    features: [
      "تركيب وبرمجة الأقفال الذكية الحديثة",
      "صيانة الأقفال الإلكترونية",
      "تركيب مسكات ذكية وأبواب أوتوماتيكية",
      "ضمان أمان عالي وجودة تنفيذ احترافية",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      dir="rtl"
      aria-labelledby="services-title"
      className="py-16 md:py-20 bg-gradient-to-b from-white via-amber-50 to-amber-100"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* العنوان والوصف */}
        <div className="text-center mb-12 md:mb-16">
          <h1
            id="services-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
          >
            خدماتنا المتخصصة في النجارة
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            في <strong>نجار شمال الرياض</strong> نقدم خدمات نجارة متكاملة تشمل
            تصميم الأثاث، تفصيل الأبواب، تركيب الأقفال الذكية، وصيانة غرف
            النوم — بجودة عالية وخبرة تتجاوز <strong>10 سنوات</strong>.
          </p>
        </div>

        {/* كروت الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <article
              key={service._id}
              itemScope
              itemType="https://schema.org/Service"
              className="bg-white rounded-2xl shadow-md border border-amber-300/50 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={`خدمة ${service.title} من نجار شمال الرياض`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  itemProp="image"
                />
              </div>

              <div className="p-5 md:p-6 text-right flex-grow flex flex-col">
                <h2
                  className="text-lg md:text-xl font-bold text-gray-900 mb-4 border-r-4 border-green-600 pr-3"
                  itemProp="name"
                >
                  {service.title}
                </h2>

                <ul
                  className="space-y-2 text-gray-800 text-sm mb-8 leading-relaxed flex-grow"
                  itemProp="description"
                >
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 text-base">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="https://wa.me/0561200937"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-amber-900 hover:bg-green-700 text-white font-medium py-2.5 px-6 rounded-lg text-sm shadow-md hover:shadow-lg transition-colors duration-300"
                    aria-label={`اطلب ${service.title} الآن عبر واتساب`}
                  >
                    اطلب الخدمة الآن
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* بيانات منظمة (Structured Data) لجميع الخدمات */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "خدمات نجار شمال الرياض",
          "description":
            "خدمات نجارة احترافية تشمل تفصيل الأبواب، غرف النوم، الأثاث والديكورات، الأقفال الذكية، وصيانة الأثاث في شمال الرياض.",
          "itemListElement": services.map((s, i) => ({
            "@type": "Service",
            "position": i + 1,
            "name": s.title,
            "description": s.features.join("، "),
            "provider": {
              "@type": "LocalBusiness",
              "name": "نجار شمال الرياض",
              "areaServed": "الرياض",
              "telephone": "+966561200937",
            },
          })),
        })}
      </script>
    </section>
  );
};

export default ServicesSection;
