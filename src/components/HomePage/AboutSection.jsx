import { ArrowLeft, Target, Rocket } from "lucide-react";
import bed from "../../assets/bed.jpg";

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="relative flex justify-center items-center">
        <div
          aria-hidden="true"
          className="absolute w-full h-full bg-amber-100/60 rounded-3xl transform -rotate-3"
        />
        <div className="relative w-full max-w-md">
          <img
            src={bed}
            alt="أثاث خشبي فاخر"
            className="rounded-2xl shadow-xl w-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <span className="absolute -top-4 -right-4 bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
            خبرة +10 سنوات
          </span>
        </div>
      </div>

   
      <div className="text-center md:text-right">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-900 mb-6">
          حرفيون في النجارة، شركاء في الإبداع
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          نحن <span className="font-semibold text-amber-800">نجار شمال الرياض</span>،
          فريق من المتخصصين بخبرة طويلة في تقديم خدمات النجارة الفاخرة، من تركيب
          وصيانة الأثاث، إلى الأبواب والأقفال والشترات.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
          نلتزم دائمًا <span className="font-semibold text-gray-900">بأعلى معايير الجودة والاحترافية</span>،
          ونوفر خدمات سريعة تغطي جميع أحياء شمال الرياض بأسعار تنافسية.
        </p>

        <ul className="space-y-5 mb-10 inline-block text-right md:block">
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Target className="w-6 h-6 text-green-700 mt-1" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-amber-900">رؤيتنا</h3>
              <p className="text-gray-600">
                أن نكون الخيار الأول للنجارة الفاخرة في الرياض، ونمزج بين الحرفية
                التقليدية والتقنيات الحديثة.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Rocket className="w-6 h-6 text-green-700 mt-1" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-amber-900">رسالتنا</h3>
              <p className="text-gray-600">
                تقديم حلول متكاملة تحقق رضا العملاء وتزيد من قيمة ممتلكاتهم بأعمال
                أصيلة، متينة، وأنيقة.
              </p>
            </div>
          </li>
        </ul>

        <div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-amber-900 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-amber-800 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>تواصل معنا الآن</span>
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;