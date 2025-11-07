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
    title: "تفصيل الأبواب الخشب",
    image: door,
    features: [
      "تفصيل أبواب خشبية بجودة عالية",
      "تصميم أبواب مودرن وكلاسيك",
      "خشب طبيعي عالي الجودة",
      "ضمان على جودة التصنيع",
    ],
  },
  {
    _id: "2",
    title: "تفصيل غرف نوم وخزائن متكاملة",
    image: room,
    features: [
      "تفصيل غرف نوم كاملة",
      "تصميم أَسِرَّة فاخرة",
      "رف ملابس (دريسينج روم)",
      "خزائن تناسب المساحات",
      "تصميم عصري وعملي",
    ],
  },
  {
    _id: "3",
    title: "تفصيل الأثاث والديكورات",
    image: furn,
    features: [
      "تفصيل مكاتب خشبية",
      "ديكورات داخلية مميزة",
      "تصميم وحدات تلفزيون",
      "رفوف وأرفف ديكورية",
      "أثاث مخصص حسب الطلب",
      "تصاميم عصرية وفاخرة",
    ],
  },
  {
    _id: "4",
    title: "تركيب وصيانة غرف نوم",
    image: bed2,
    features: [
      "فك وتركيب الأثاث",
      "تركيب غرف النوم",
      "فك وتركيب الدواليب",
      "فك وتركيب الغرف كاملة",
      "تصليح دواليب غرف النوم",
    ],
  },
  {
    _id: "5",
    title: "خدمات أثاث إيكيا المتخصصة",
    image: furn2,
    features: [
      "فك وتركيب أثاث إيكيا",
      "تركيب أغراض إيكيا",
      "تركيب كبتات إيكيا",
      "تركيب دواليب إيكيا",
      "تركيب مرايات إيكيا",
      "تركيب طاولات إيكيا",
    ],
  },
  {
    _id: "6",
    title: "تركيب وصيانة الأبواب الخشب",
    image: furn3, 
    features: [
      "تركيب أبواب خشب",
      "تصليح الأبواب",
      "تركيب المفصلات",
      "تركيب المقابض والأقفال",
      "تصليح باب مكسور",
      "تغيير حلق الباب",
      "صيانة الأبواب الخشبية",
    ],
  },
  {
    _id: "7",
    title: "خدمات الأقفال والأمان",
    image: smart,
    features: [
      "تركيب الأقفال الذكية",
      "تركيب مسكات الكترونية",
      "صيانة الأقفال",
      "تغيير الأقفال",
      "إصلاح الأقفال المعطلة",
      "برمجة اقفال ذكية",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-gradient-to-b from-white via-amber-50 to-amber-100"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            خدماتنا المتخصصة
          </h2>
          <div className="w-20 md:w-24 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            نقدم حلولًا متكاملة في عالم النجارة بخبرة طويلة وجودة عالية.
            <br />
            هدفنا توفير أفضل تجربة لعملائنا من حيث التصميم، التنفيذ، والمتابعة.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-white rounded-2xl shadow-md border border-amber-300/50 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6 text-right flex-grow flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 border-r-4 border-green-600 pr-3">
                  {service.title}
                </h3>

                <ul className="space-y-2 text-gray-800 text-sm mb-8 leading-relaxed flex-grow">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-gray-800"
                    >
                      <span className="text-green-600 text-lg">✔</span>
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
                  >
                    اطلب الخدمة الآن
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;