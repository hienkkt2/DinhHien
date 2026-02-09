import { useEffect } from "react"
import {
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Layers,
  Rocket,
  CheckCircle2
} from "lucide-react"

export default function App() {
  useEffect(() => {
    const handleAnchor = () => {
      const hash = window.location.hash
      if (!hash) return
      const el = document.querySelector(hash)
      if (el) {
        const yOffset = -80
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
    handleAnchor()
    window.addEventListener("hashchange", handleAnchor)
    return () => window.removeEventListener("hashchange", handleAnchor)
  }, [])

  return (
    <div className="font-sans text-slate-900 bg-white overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter mb-6">
              Digital Marketing
              <br />
              <span className="text-indigo-600">& Website</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mb-8">
              Giải pháp Marketing & Website trọn gói – tập trung hiệu quả,
              tối ưu chi phí, triển khai nhanh.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-center hover:bg-indigo-700 transition"
              >
                Liên hệ ngay
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-xl border border-slate-300 font-semibold text-center hover:bg-slate-100 transition"
              >
                Xem dịch vụ
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl md:rounded-[3.5rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=1200&auto=format&fit=crop"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12">
          Dịch vụ
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe />,
              title: "Website",
              desc: "Thiết kế & tối ưu website chuẩn SEO – tốc độ cao."
            },
            {
              icon: <Layers />,
              title: "Marketing",
              desc: "Content, Fanpage, Ads – tập trung chuyển đổi."
            },
            {
              icon: <Rocket />,
              title: "Tăng trưởng",
              desc: "Chiến lược tổng thể giúp doanh nghiệp phát triển bền vững."
            }
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[3rem] bg-slate-50 hover:shadow-xl transition"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12">
            Quy trình làm việc
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Tư vấn & phân tích",
              "Lên chiến lược",
              "Triển khai",
              "Đo lường & tối ưu"
            ].map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white shadow-sm"
              >
                <CheckCircle2 className="text-indigo-600 mb-4" />
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    import { Phone, Mail, MessageCircle, ShieldCheck } from "lucide-react";

export default function App() {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative bg-indigo-600 rounded-[2.5rem] sm:rounded-[4rem] p-6 sm:p-10 md:p-20 flex flex-col lg:flex-row gap-12 sm:gap-16 shadow-2xl overflow-hidden">

            {/* glow */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-[120px]" />

            {/* LEFT */}
            <div className="flex-1 text-white text-center lg:text-left relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight uppercase italic mb-10">
                Sẵn sàng <br /> hợp tác?
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-center gap-5 justify-center lg:justify-start">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center border border-white/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-70 font-bold">
                      Zalo / Phone
                    </p>
                    <p className="text-2xl sm:text-3xl font-black">
                      094 330 4685
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-5 justify-center lg:justify-start">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center border border-white/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="break-all">
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-70 font-bold">
                      Email
                    </p>
                    <p className="text-lg sm:text-2xl font-black italic">
                      hiendoanvan25@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1 relative z-10">
              <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 text-center shadow-xl">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-600" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black mb-4">
                  Liên hệ ngay
                </h3>

                <p className="text-slate-500 text-sm sm:text-base mb-10 max-w-xs mx-auto">
                  Nhận tư vấn miễn phí chiến lược Marketing & Website cho doanh
                  nghiệp của bạn.
                </p>

                <a
                  href="https://zalo.me/0943304685"
                  target="_blank"
                  className="block w-full py-4 sm:py-5 bg-[#0068ff] text-white font-black rounded-2xl sm:rounded-3xl text-base sm:text-lg tracking-widest uppercase shadow-lg hover:bg-[#0052cc] transition active:scale-95"
                >
                  Chat Zalo ngay
                </a>

                <div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">
                    Cam kết bảo mật & chuyên nghiệp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] uppercase tracking-[0.35em] font-bold">
          © {new Date().getFullYear()} ĐOÀN ĐÌNH HIỂN • REMOTE MARKETING & WEBSITE
        </p>
      </footer>

      {/* ================= FLOATING ZALO ================= */}
      <a
        href="https://zalo.me/0943304685"
        target="_blank"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[999] w-14 h-14 sm:w-16 sm:h-16 bg-[#0068ff] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition active:scale-90"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </a>

    </div>
  );
}
