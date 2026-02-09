{/* Contact Section */}
<section id="contact" className="py-24 md:py-32 bg-white relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div
      className="
        bg-indigo-600
        rounded-3xl md:rounded-[4rem]
        px-6 py-12
        sm:px-10 sm:py-16
        md:px-24 md:py-24
        flex flex-col lg:flex-row
        items-center justify-between
        gap-14
        relative overflow-hidden
        shadow-2xl shadow-indigo-100
      "
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-[120px] -mr-32 -mt-32" />

      {/* LEFT */}
      <div className="flex-1 text-center lg:text-left text-white relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-10 leading-tight uppercase italic">
          Sẵn sàng <br /> hợp tác?
        </h2>

        <div className="space-y-8">
          {/* Phone */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase opacity-60 tracking-widest">
                Zalo / Phone
              </p>
              <p className="text-xl sm:text-2xl font-black">
                094 330 4685
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] uppercase opacity-60 tracking-widest">
                Email
              </p>
              <p className="text-sm sm:text-lg font-semibold break-all">
                hiendoanvan25@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 w-full max-w-xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl md:rounded-[3.5rem] p-8 sm:p-10 md:p-14 shadow-3xl text-slate-900 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-8 h-8 text-indigo-600" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black mb-4">
            Liên hệ ngay
          </h3>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-10 max-w-xs mx-auto">
            Nhận tư vấn miễn phí chiến lược Marketing & Website cho doanh nghiệp
            của bạn.
          </p>

          <a
            href="https://zalo.me/0943304685"
            target="_blank"
            className="
              block w-full
              py-4 sm:py-5
              bg-[#0068ff] text-white
              font-black
              rounded-2xl
              hover:bg-[#0052cc]
              transition-all
              shadow-xl shadow-blue-200
              text-sm sm:text-base
              uppercase tracking-widest
              active:scale-95
            "
          >
            CHAT QUA ZALO
          </a>

          <div className="mt-6 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Cam kết bảo mật & chuyên nghiệp
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
