const MapSection = () => {
  return (
    <section
      id="map"
      className="bg-white py-12"
      aria-labelledby="map-title"
      aria-describedby="map-description"
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          id="map-title"
          className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4"
        >
          موقعنا على الخريطة
        </h2>

        <p
          id="map-description"
          className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          يمكنك زيارة ورشة{" "}
          <strong>نجار شمال الرياض</strong> في موقعنا الموضح أدناه.
          نحن متواجدون لخدمتك طوال أيام الأسبوع في شمال الرياض.
        </p>

        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="موقع نجار شمال الرياض على الخريطة"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14490.600400120571!2d46.68821938579521!3d24.77318329777727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd9848cf69b7%3A0xdf01deccf9e9e32f!2z2K7Yr9mF2KfYqiDYp9mE2YbYrNin2LHYqSDYp9mE2YHYp9iu2LHYqSBMQ1M!5e0!3m2!1sar!2ssa!4v1759871777353!5m2!1sar!2ssa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* بيانات منظمة لتحسين الظهور في نتائج البحث */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "نجار شمال الرياض",
          "description":
            "نجار شمال الرياض متخصص في تصميم الأثاث، تركيب الأبواب والأقفال الذكية، والنجارة الفاخرة بخبرة تزيد عن 10 سنوات.",
          "image": "https://smart-shop-khaki.vercel.app/assets/hero2.jpg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "شمال الرياض",
            "addressLocality": "الرياض",
            "addressCountry": "السعودية",
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 24.7731833,
            "longitude": 46.6882193,
          },
          "hasMap":
            "https://www.google.com/maps?cid=0xdf01deccf9e9e32f",
          "telephone": "+966561200937",
          "url": "https://smart-shop-khaki.vercel.app/",
        })}
      </script>
    </section>
  );
};

export default MapSection;
