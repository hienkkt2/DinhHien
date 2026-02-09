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

    {/* Contact Section */}
      <section id="contact" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-indigo-600 rounded-[4rem] p-10 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden shadow-2xl shadow-indigo-100">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
              
              <div className="flex-1 text-center md:text-left text-white relative z-10">
                 <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic">Sẵn Sàng <br/>Hợp Tác?</h2>
                 <div className="space-y-10">
                    <div className="flex items-center gap-6 justify-center md:justify-start">
                       <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-xl"><Phone className="w-7 h-7"/></div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Zalo / Phone</p>
                          <p className="text-3xl font-black tracking-tight">094 330 4685</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 justify-center md:justify-start">
                       <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white border border-white/20 shadow-xl"><Mail className="w-7 h-7"/></div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Email</p>
                          <p className="text-2xl font-black italic">hiendoanvan25@gmail.com</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="flex-1 w-full relative z-10">
                 <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-3xl text-slate-900 text-center">
                    <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner"><MessageCircle className="w-10 h-10 text-indigo-600"/></div>
                    <h3 className="text-3xl font-black mb-4 tracking-tight">Liên hệ ngay</h3>
                    <p className="text-slate-400 text-sm mb-12 font-medium leading-relaxed max-w-xs mx-auto">Nhận tư vấn miễn phí về chiến lược Marketing & Website cho doanh nghiệp của bạn.</p>
                    <a href="https://zalo.me/0943304685" target="_blank" className="block w-full py-6 bg-[#0068ff] text-white font-black rounded-3xl hover:bg-[#0052cc] transition-all shadow-xl shadow-blue-200 text-lg uppercase tracking-widest active:scale-95">
                       CHAT QUA ZALO NGAY
                    </a>
                    <div className="mt-8 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cam kết bảo mật & chuyên nghiệp</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-100 text-center bg-white">
         <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">© {new Date().getFullYear()} ĐOÀN ĐÌNH HIỂN • REMOTE MARKETING & WEBSITE PARTNER</p>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-[999]">
        <a href="https://zalo.me/0943304685" target="_blank" className="w-16 h-16 bg-[#0068ff] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all animate-bounce-slow active:scale-90">
           <MessageCircle className="w-8 h-8" />
        </a>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.08);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
