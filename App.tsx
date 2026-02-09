import React from "react";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 overflow-x-hidden">
      
      {/* ===== HERO ===== */}
      <section className="py-16 sm:py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-tight
              tracking-tight
            "
          >
            Digital Marketing & Website
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Giải pháp Marketing & Website giúp doanh nghiệp tăng trưởng bền vững.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-base sm:text-lg"
            >
              Liên hệ ngay
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-xl border border-gray-300 font-semibold text-base sm:text-lg"
            >
              Xem Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
            Dịch vụ
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {["Website", "Digital Marketing", "SEO & Content"].map((item) => (
              <div
                key={item}
                className="
                  bg-white
                  p-5 sm:p-6 md:p-10
                  rounded-2xl md:rounded-3xl
                  shadow-sm
                "
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {item}
                </h3>
                <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
                  Giải pháp tối ưu phù hợp với doanh nghiệp vừa và nhỏ.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
              bg-indigo-600
              text-white
              p-6 sm:p-8 md:p-24
              rounded-3xl md:rounded-[4rem]
              flex flex-col lg:flex-row
              gap-10 md:gap-16
            "
          >
            {/* LEFT */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
                Sẵn sàng hợp tác?
              </h2>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs uppercase opacity-70">Zalo / Phone</p>
                  <p className="text-xl sm:text-2xl font-bold">
                    0943 304 685
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase opacity-70">Email</p>
                  <p className="text-base sm:text-lg md:text-2xl break-all font-semibold">
                    hiendoanvan25@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                flex-1
                bg-white
                text-gray-900
                p-6 sm:p-8 md:p-12
                rounded-2xl md:rounded-3xl
                flex flex-col
                justify-center
              "
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Liên hệ ngay
              </h3>
              <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
                Nhận tư vấn miễn phí chiến lược Marketing & Website cho doanh
                nghiệp của bạn.
              </p>

              <a
                href="tel:0943304685"
                className="mt-6 inline-block text-center px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold"
              >
                Gọi ngay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FLOATING ZALO ===== */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[999]">
        <a
          href="tel:0943304685"
          className="
            w-14 h-14 md:w-16 md:h-16
            rounded-full
            bg-indigo-600
            flex items-center justify-center
            text-white text-xl
            shadow-lg
          "
        >
          💬
        </a>
      </div>
    </div>
  );
}
