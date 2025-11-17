import { ArrowLeft, Target, Rocket } from "lucide-react";
import bed from "../../assets/bed.jpg";

const AboutSection = () => (
  <section
    id="about"
    className="py-16 md:py-24 bg-white overflow-hidden"
    aria-labelledby="about-title"
  >
    <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* صورة تعريفية */}
      <div className="relative flex justify-center items-center">
        <div
          aria-hidden="true"
          className="absolute w-full h-full bg-amber-100/60 rounded-3xl transform -rotate-3"
        />
        <div className="relative w-full max-w-md">
          <img
            src={bed}
            alt="صورة سرير خشبي فاخر ضمن أعمال نجار شمال الرياض"
            className="rounded-2xl shadow-xl w-full object-cover transform transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <span className="absolute -top-4 -right-4 bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
            خبرة +10 سنوات
          </span>
        </div>
      </div>

      {/* النص التعريفي */}
      <div className="text-center md:text-right">
        <h1
          id="about-title"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-900 mb-6"
        >
          حرفيون في النجارة، شركاء في الإبداع
        </h1>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          نحن <strong className="font-semibold text-amber-800">نجار شمال الرياض</strong>،
          فريق من الحرفيين المتخصصين بخبرة طويلة في تقديم خدمات{" "}
          <strong>النجارة الفاخرة</strong>، من تركيب وصيانة الأثاث، إلى الأبواب
          والأقفال والشترات بجودة عالية.
        </p>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
          نلتزم دائمًا{" "}
          <strong className="font-semibold text-gray-900">
            بأعلى معايير الجودة والاحترافية
          </strong>{" "}
          ونوفر خدمات سريعة تغطي جميع أحياء شمال الرياض بأسعار تنافسية.
        </p>

        <ul className="space-y-5 mb-10 inline-block text-right md:block">
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Target className="w-6 h-6 text-green-700 mt-1" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-semibold text-lg text-amber-900">رؤيتنا</h2>
              <p className="text-gray-600">
                أن نكون الخيار الأول في مجال النجارة الفاخرة بالرياض، ونمزج بين
                الحرفية التقليدية والتقنيات الحديثة لابتكار تصاميم استثنائية.
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Rocket className="w-6 h-6 text-green-700 mt-1" aria-hidden="true" />
            </div>
            <div>
              <h2 className="font-semibold text-lg text-amber-900">رسالتنا</h2>
              <p className="text-gray-600">
                تقديم حلول نجارة متكاملة تحقق رضا العملاء وتزيد من قيمة منازلهم
                بأعمال أصيلة، متينة، وأنيقة.
              </p>
            </div>
          </li>
        </ul>

        <div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-amber-900 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-amber-800 transform hover:-translate-y-1 transition-all duration-300"
            aria-label="انتقل إلى صفحة التواصل معنا"
          >
            <span>تواصل معنا الآن</span>
            <ArrowLeft
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>

    {/* بيانات منظمة لنتائج Google */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "نجار شمال الرياض",
        "image": "https://smart-shop-khaki.vercel.app/assets/bed.jpg",
        "description":
          "نجار شمال الرياض يقدم خدمات نجارة فاخرة، تركيب وصيانة الأثاث والأبواب والشترات بخبرة تتجاوز 10 سنوات.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "الرياض",
          "addressRegion": "الرياض",
          "addressCountry": "السعودية",
        },
        "areaServed": "شمال الرياض",
        "telephone": "+966500000000",
        "url": "https://smart-shop-khaki.vercel.app/",
      })}
    </script>
  </section>
);

export default AboutSection;
