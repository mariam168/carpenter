import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "ما هي أنواع الخشب التي تستخدمونها؟",
    a: "نستخدم مجموعة واسعة من الأخشاب عالية الجودة مثل الزان، الأرو، والموسكي، بالإضافة إلى الأخشاب الصناعية مثل MDF وكونتر حسب طلب العميل وميزانيته.",
  },
  {
    q: "كم من الوقت يستغرق تنفيذ الطلب؟",
    a: "تعتمد المدة على حجم وتعقيد المشروع. بشكل عام، تتراوح مدة تنفيذ المطبخ بين ٣ إلى ٥ أسابيع. سنعطيك جدولًا زمنيًا دقيقًا عند التعاقد لضمان الشفافية.",
  },
  {
    q: "هل تقدمون خدمة التركيب؟",
    a: "نعم، نقدم خدمة التوصيل والتركيب الاحترافي مجانًا ضمن الأسعار، لضمان أفضل نتيجة نهائية وجودة عالية في التنفيذ.",
  },
  {
    q: "هل يوجد ضمان على أعمالكم؟",
    a: "نعم، نقدم ضمانًا حقيقيًا على جميع أعمالنا ضد عيوب الصناعة، لأن رضاؤكم وثقتكم هما أولويتنا الأولى.",
  },
];

const FaqItem = ({ faq, isOpen, onClick, index }) => {
  const answerId = `faq-answer-${index}`;
  const questionId = `faq-question-${index}`;

  return (
    <div
      className={`rounded-2xl mb-4 border border-amber-200 bg-white transition-all duration-300 ease-in-out ${
        isOpen ? "shadow-xl border-r-4 border-r-green-600" : "shadow-md hover:shadow-lg"
      }`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={questionId}
        className="w-full flex justify-between items-center text-right p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-lg"
      >
        <span itemProp="name" className="text-lg font-bold text-gray-900">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-green-700 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div className="px-6 pb-6 text-right text-gray-700 text-sm leading-relaxed" itemProp="text">
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
    <section
      id="faq"
      className="py-20 bg-gradient-to-b from-white via-amber-50 to-amber-100"
      dir="rtl"
      aria-labelledby="faq-title"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1
          id="faq-title"
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          الأسئلة الشائعة
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
          إليك أهم الأسئلة التي يطرحها عملاؤنا عن خدماتنا في{" "}
          <strong>نجار شمال الرياض</strong>. هدفنا هو الوضوح الكامل قبل البدء
          في أي مشروع.
        </p>
        <div className="w-24 h-1 bg-green-700 mx-auto mb-14 rounded-full"></div>

        <div className="max-w-3xl mx-auto text-right">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* بيانات منظمة لنتائج البحث (FAQ Schema) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.a,
            },
          })),
        })}
      </script>
    </section>
  );
};

export default FaqSection;
