import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "ما هي أنواع الخشب التي تستخدمونها؟",
    a: "نستخدم مجموعة واسعة من الأخشاب عالية الجودة مثل الزان، الأرو، والموسكي، بالإضافة إلى الأخشاب الصناعية مثل MDF وكونتر حسب طلب العميل وميزانيته.",
  },
  {
    q: "كم من الوقت يستغرق تنفيذ الطلب؟",
    a: "تعتمد المدة على حجم وتعقيد المشروع. بشكل عام، تتراوح مدة تنفيذ المطبخ بين ٣ إلى ٥ أسابيع. سنعطيك جدول زمني دقيق عند التعاقد.",
  },
  {
    q: "هل تقدمون خدمة التركيب؟",
    a: "بالتأكيد. جميع أسعارنا تشمل خدمة التوصيل والتركيب الاحترافي لضمان أفضل نتيجة نهائية.",
  },
  {
    q: "هل يوجد ضمان على أعمالكم؟",
    a: "نعم، نقدم ضمانًا على جميع أعمالنا ضد عيوب الصناعة. رضاؤكم هو أولويتنا.",
  },
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    <div
      className={`rounded-2xl mb-4 border border-amber-200 bg-white transition-all duration-300 ease-in-out ${
        isOpen ? "shadow-xl border-r-4 border-r-green-600" : "shadow-md hover:shadow-lg"
      }`}
    >
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center text-right p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-lg"
      >
        <span className="text-lg font-bold text-gray-900">{faq.q}</span>
        <ChevronDown
          className={`w-6 h-6 text-green-700 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 text-right text-gray-700 text-sm leading-relaxed">
          {faq.a}
        </div>
      </div>
    </div>
  );
};


const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white via-amber-50 to-amber-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          الأسئلة الشائعة
        </h2>
        <div className="w-24 h-1 bg-green-700 mx-auto mb-14 rounded-full"></div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index} 
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;