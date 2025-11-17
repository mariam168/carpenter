import React, { useState } from "react";
import { Wrench, Armchair, DoorOpen, KeyRound } from "lucide-react";

const services = [
  {
    icon: <Wrench className="w-7 h-7 text-green-700" />,
    title: "نجار شمال الرياض المتخصص",
    desc: "إذا كنت تبحث عن نجار شمال الرياض محترف وموثوق، نقدم خدمات نجارة متكاملة لكل الأحياء. تركيب الأثاث وصيانة الأبواب والشترات مع خبرة طويلة واحترافية عالية.",
  },
  {
    icon: <Armchair className="w-7 h-7 text-green-700" />,
    title: "تركيب أثاث ايكيا المحترف",
    desc: "نحن متخصصون في تركيب أثاث ايكيا بجميع أنواعه. تركيب غرف نوم، مطابخ أو أي قطعة أخرى بدقة واحترافية مع الالتزام بالمواعيد المحددة مسبقًا.",
  },
  {
    icon: <DoorOpen className="w-7 h-7 text-green-700" />,
    title: "تصليح أبواب الخشب المتكامل",
    desc: "خدمات تصليح أبواب خشب لجميع الأنواع. إصلاح الكسر، المفصلات أو القفل مع استخدام أحدث المواد لضمان متانة طويلة.",
  },
  {
    icon: <KeyRound className="w-7 h-7 text-green-700" />,
    title: "تركيب الأقفال الذكية المتطور",
    desc: "تركيب وصيانة أقفال ذكية بأحدث أنظمة الأمان. خدمات منزلية ومكتبية مع تركيب احترافي وبرمجة دقيقة للأقفال لضمان حماية كاملة.",
  },
];

const SpecializedServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const TRUNCATE_LENGTH = 90;

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-white via-amber-50 to-amber-100"
      dir="rtl"
      aria-labelledby="specialized-services-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            id="specialized-services-title"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            خدماتنا المتخصصة
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-14 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            const isLongText = service.desc.length > TRUNCATE_LENGTH;

            return (
              <article
                key={index}
                itemScope
                itemType="https://schema.org/Service"
                className="bg-white rounded-2xl border border-amber-200 shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center"
              >
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 shadow-inner">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">
                  {service.title}
                </h3>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-96" : "max-h-20"
                  }`}
                >
                  <p
                    id={`service-desc-${index}`}
                    className="text-gray-700 text-sm leading-relaxed mb-5"
                    itemProp="description"
                  >
                    {isLongText && !isExpanded
                      ? service.desc.slice(0, TRUNCATE_LENGTH) + "..."
                      : service.desc}
                  </p>
                </div>

                {isLongText && (
                  <div className="mt-auto pt-2">
                    <button
                      onClick={() => toggleReadMore(index)}
                      aria-expanded={isExpanded}
                      aria-controls={`service-desc-${index}`}
                      className="px-5 py-2 text-sm bg-green-700 text-white font-semibold rounded-lg shadow hover:bg-green-800 transition-colors"
                    >
                      {isExpanded ? "عرض أقل" : "اقرأ المزيد"}
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecializedServicesSection;
