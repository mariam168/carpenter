const MapSection = () => {
  return (
    <section id="map" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          موقعنا على الخريطة
        </h2>
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="موقع ورشة النجارة الحديثة"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14490.600400120571!2d46.68821938579521!3d24.77318329777727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd9848cf69b7%3A0xdf01deccf9e9e32f!2z2K7Yr9mF2KfYqiDYp9mE2YbYrNin2LHYqSDYp9mE2YHYp9iu2LHYqSBMQ1M!5e0!3m2!1sen!2seg!4v1759871777353!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
