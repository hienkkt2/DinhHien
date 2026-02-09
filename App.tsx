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

    {/* ================= CONTACT ================= */}
<section id="contact" className="py-20 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="bg-indigo-600 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row gap-10 text-white">

      {/* LEFT */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
          Sẵn sàng hợp tác?
        </h2>

        <div className="space-y-5">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <Phone className="w-5 h-5" />
            <span className="font-semibold">0943 30 4685</span>
          </div>

          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <Mail className="w-5 h-5" />
            <span className="italic break-all">
              hiendoanvan25@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 bg-white text-slate-900 rounded-2xl p-6 sm:p-10 text-center">
        <MessageCircle className="w-10 h-10 text-indigo-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-3">Liên hệ ngay</h3>
        <p className="text-slate-600 text-sm mb-6">
          Nhận tư vấn miễn phí Marketing & Website cho doanh nghiệp của bạn.
        </p>

        <a
          href="https://zalo.me/0943304685"
          target="_blank"
          className="block w-full py-3 bg-[#0068ff] text-white font-bold rounded-xl"
        >
          Chat Zalo ngay
        </a>
      </div>

    </div>
  </div>
</section>

