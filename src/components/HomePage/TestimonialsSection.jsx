import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import bed from "../../assets/bed.jpg";

const testimonials = [
  {
    name: "أحمد علي",
    comment: "شغل احترافي ودقة في المواعيد. المطبخ طلع أحسن من اللي تخيلته. شكرًا جزيلًا!",
    city: "القاهرة",
    rating: 5
  },
  {
    name: "فاطمة محمد",
    comment: "تعامل راقي وجودة خشب ممتازة. الأبواب غيرت شكل الشقة بالكامل. أنصح بهم بشدة.",
    city: "الجيزة",
    rating: 5
  },
  {
    name: "خالد محمود",
    comment: "أفضل ورشة نجارة تعاملت معها. قاموا بتنفيذ تصميم مكتبة بمنتهى الحرفية والإتقان.",
    city: "الإسكندرية",
    rating: 5
  },
  {
    name: "محمود عبد الله",
    comment: "تصاميم رائعة وجودة تنفيذ ممتازة جدًا. شكراً للفريق الجميل على مجهودهم.",
    city: "طنطا",
    rating: 5
  },
];

const TestimonialsSlider = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${bed})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-10">آراء عملائنا</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          aria-label="شهادات العملاء"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <article
                itemScope
                itemType="https://schema.org/Review"
                className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-lg h-full flex flex-col justify-between transition hover:scale-105"
              >
                <div className="flex justify-center mb-4 text-yellow-400" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="w-5 h-5" />
                  ))}
                  <meta itemProp="ratingValue" content={t.rating} />
                </div>
                <p className="italic text-gray-200 mb-6" itemProp="reviewBody">
                  “{t.comment}”
                </p>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <h3 className="font-bold text-lg text-yellow-400">{t.name}</h3>
                  <p className="text-sm text-gray-300">{t.city}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
