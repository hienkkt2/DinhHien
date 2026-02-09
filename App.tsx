
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  CheckCircle2, 
  Layout, 
  TrendingUp, 
  Search, 
  Facebook, 
  ArrowRight,
  Menu,
  X,
  MessageCircle,
  BarChart4,
  ChevronRight,
  Zap,
  Monitor,
  Star,
  ArrowUpRight,
  ShieldCheck,
  MousePointerClick,
  Video,
  Globe
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hàm cuộn mượt mà đến các section với offset bù cho navbar
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Giới thiệu', id: 'intro' },
    { label: 'Dịch vụ', id: 'services' },
    { label: 'Dự án', id: 'portfolio' },
    { label: 'Quy trình', id: 'process' },
    { label: 'Liên hệ', id: 'contact' },
  ];

  const services = [
    {
      id: "srv-fanpage",
      title: "Quản trị Fanpage & Content",
      price: "3.000.000 - 5.000.000 VNĐ / tháng",
      features: [
        "Tối ưu Fanpage (Avatar, Banner, Mô tả)",
        "Lên kế hoạch 12-20 bài/tháng",
        "Viết content chuẩn CTA bán hàng",
        "Sản xuất Video AI phục vụ marketing",
        "Báo cáo kết quả hàng tháng"
      ],
      icon: <Facebook className="w-6 h-6 text-blue-600" />
    },
    {
      id: "srv-web-design",
      title: "Thiết kế Web & Landing Page",
      price: "2.500.000 - 6.000.000 VNĐ",
      features: [
        "Gói Cơ bản & Gói Doanh nghiệp",
        "Cài đặt WordPress chuẩn SEO",
        "Setup Form liên hệ & Zalo chat",
        "Tối ưu hiển thị Mobile & Tốc độ",
        "Hướng dẫn quản trị website 1-1"
      ],
      icon: <Layout className="w-6 h-6 text-indigo-600" />
    },
    {
      id: "srv-web-admin",
      title: "Quản trị & Tối ưu Website",
      price: "3.500.000 VNĐ / tháng",
      features: [
        "Cập nhật bài viết & sản phẩm",
        "Tối ưu SEO Onpage hàng tháng",
        "Fix lỗi hiển thị, Link gãy",
        "Backup & Bảo mật hệ thống",
        "Theo dõi Google Analytics"
      ],
      icon: <Monitor className="w-6 h-6 text-emerald-600" />
    },
    {
      id: "srv-seo",
      title: "SEO Website Tổng Thể",
      price: "Từ 3.000.000 VNĐ / tháng",
      features: [
        "SEO 20-30 từ khóa (Gói Cơ bản)",
        "SEO 100+ từ khóa (Gói Chuyên sâu)",
        "Phân tích từ khóa & đối thủ",
        "Xây dựng backlink an toàn",
        "Báo cáo thứ hạng & Traffic"
      ],
      icon: <Search className="w-6 h-6 text-orange-600" />
    },
    {
      id: "srv-ads",
      title: "Facebook Ads (Setup & Tối ưu)",
      price: "1.500.000 VNĐ / tháng",
      features: [
        "Viết nội dung quảng cáo thu hút",
        "Setup chiến dịch & nhóm quảng cáo",
        "Theo dõi & tối ưu hiệu quả hàng ngày",
        "Loại bỏ tệp rác, tập trung khách thật",
        "Báo cáo ngân sách hàng tuần"
      ],
      icon: <MousePointerClick className="w-6 h-6 text-cyan-600" />
    },
    {
      id: "srv-combo",
      title: "Combo Marketing + Website",
      price: "6.000.000 - 12.000.000 VNĐ / tháng",
      features: [
        "Trọn gói Fanpage & Website",
        "Ads cơ bản hoặc SEO tổng thể",
        "Phù hợp doanh nghiệp mới bắt đầu",
        "Hệ thống vận hành tự động",
        "Tư vấn chiến lược lâu dài"
      ],
      isPopular: true,
      icon: <Zap className="w-6 h-6 text-amber-500" />
    }
  ];

  const caseStudies = [
    {
      title: "Case 1: Fanpage Bán Hàng",
      problem: "Fanpage ít tương tác, nội dung rời rạc, không có inbox khách hàng.",
      solution: "Tối ưu bộ nhận diện, xây dựng kế hoạch content chuẩn CTA, đăng bài đều đặn.",
      result: "Lượng tương tác tự nhiên tăng 150%, có inbox khách hàng ổn định hàng ngày.",
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Case 2: Website & Thu Khách",
      problem: "Doanh nghiệp chưa có web, hoặc web cũ không chuẩn mobile, khó quản trị.",
      solution: "Thiết kế Website WordPress chuyên nghiệp, tích hợp Zalo, Form thu lead.",
      result: "Kênh bán hàng 24/7 ổn định, giao diện hiện đại, tối ưu 100% trên di động.",
      img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Case 3: SEO Website Tổng Thể",
      problem: "Website không có traffic tự nhiên, chi phí chạy ads ngày càng đắt đỏ.",
      solution: "Phân tích bộ từ khóa ngành, viết SEO content, tối ưu Technical & Backlink.",
      result: "Hơn 30 từ khóa lọt Top 10 Google sau 4 tháng, traffic tăng trưởng bền vững.",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHNeIerBpYkaAfDLMIFpprD7YiX_j1COpIXxiNXg3oypb0MD_P3F4LVsa6jF3MojgRXngsFSQ8iAm6ks2W_cxuw60rnIFyxsCQBQTYvckN94RtcxnDwxggD-mczMpFj7YOj4ZNMmz1ZWuWCWXmSdB_i92vtxALMEdlN2RPPNCTdrUro41tAKEUWALhFcdP/s2000/615428720_122196431942497724_2189783525187936915_n.jpg"
    },
    {
      title: "Case 4: Facebook Ads Chuyển Đổi",
      problem: "Chạy quảng cáo tốn kém nhưng không ra đơn, tỷ lệ tin nhắn rác cao.",
      solution: "Nghiên cứu lại tệp khách hàng, thiết kế mẫu ads mới, tối ưu Landing Page.",
      result: "Giảm 35% chi phí/lead, tăng tỷ lệ chuyển đổi đơn hàng lên đáng kể.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4 border-b border-slate-100' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#intro" onClick={(e) => scrollToSection(e, 'intro')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-indigo-200 group-hover:rotate-6 transition-transform">D</div>
            <span className="text-xl font-black tracking-tighter uppercase text-slate-900">Đình Hiển</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-all px-4 py-2 rounded-full hover:bg-slate-100/50"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="ml-6 px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-200 active:scale-95"
            >
              Liên hệ hợp tác
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900 bg-white shadow-sm rounded-lg border border-slate-100">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="p-6 space-y-1">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="block py-4 text-xl font-bold border-b border-slate-100 flex justify-between items-center text-slate-900"
              >
                {item.label}
                <ChevronRight className="w-5 h-5 opacity-30" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ================Hero Section===================== */}
      <section id="intro" className="pt-40 pb-20 md:pt-60 md:pb-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-[1.2] z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8 animate-bounce-slow">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
                <span className="text-[10px] font-black tracking-widest text-indigo-700 uppercase">Digital Marketing & Website Specialist</span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10">
                Marketing <br/> 
                <span className="gradient-text">Tạo Khách Thật.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium mx-auto md:mx-0">
                Tôi là <span className="text-slate-900 font-bold">Đoàn Đình Hiển</span>. Chuyên triển khai hệ thống Online tổng thể cho doanh nghiệp SME theo hình thức <span className="text-indigo-600 font-bold">Remote / Online full-time</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                <a 
                  href="#services" 
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="group px-10 py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-slate-900 transition-all shadow-2xl shadow-indigo-100 flex items-center justify-center gap-3 active:scale-95"
                >
                  DỊCH VỤ & BÁO GIÁ <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://zalo.me/0943304685" 
                  target="_blank" 
                  className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl border-2 border-slate-100 hover:border-indigo-600 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-sm"
                >
                  CHAT QUA ZALO <MessageCircle className="w-5 h-5 text-blue-500" />
                </a>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg md:max-w-none relative">
              <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-3xl border-[12px] border-white ring-1 ring-slate-100 rotate-2 hover:rotate-0 transition-all duration-700 group">
                <img 
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4_3yvCQyZlTmLV99XuBwJssd2YKXbUY5H3kh6_YNwqg1ABF2FvShJYZ7MwSJG7z6Y1hcLKM5Mqp8AOuRExAtKmF4R8Uqu9YvWudwnBhJTPDc494LuAQgDQij4CP3pLk9-AUDIDeXN41WXJ4nEDTlziT-NbU1hPqaR9IcLKPZYLaNMDktrAGnFLl34dE_o/s1500/A999.jpg" 
                  alt="Đoàn Đình Hiển" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                   <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white"><Star className="fill-current w-5 h-5"/></div>
                         <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Vị trí</p>
                            <p className="text-sm font-black text-slate-900 tracking-tight">Digital Nomad / Remote</p>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================Services Section =======================*/}
      <section id="services" className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center md:text-left mb-20">
             <span className="text-indigo-600 font-black text-xs uppercase tracking-[0.3em] block mb-4">Danh mục dịch vụ</span>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">Giải Pháp Marketing <br/>Chuyên Nghiệp.</h2>
             <p className="text-slate-400 font-medium text-lg max-w-2xl">Mọi dịch vụ đều đi kèm báo giá minh bạch, quy trình rõ ràng và cam kết hiệu quả thực tế cho khách hàng SME.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} id={service.id} className={`bento-card group relative p-10 rounded-[3.5rem] border transition-all flex flex-col h-full ${
                service.isPopular 
                ? 'bg-slate-900 text-white border-slate-800 shadow-2xl scale-105 z-10' 
                : 'bg-white text-slate-900 border-slate-100 hover:border-indigo-100'
              }`}>
                {service.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">
                    COMBO TỐI ƯU CHI PHÍ
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${service.isPopular ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-50 text-indigo-600'}`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-black mb-2 leading-tight">{service.title}</h3>
                <div className={`text-lg font-bold mb-8 ${service.isPopular ? 'text-indigo-400' : 'text-indigo-600'}`}>{service.price}</div>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm font-medium opacity-90">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${service.isPopular ? 'text-indigo-400' : 'text-indigo-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://zalo.me/0943304685" 
                  target="_blank" 
                  className={`w-full py-4 rounded-2xl font-black text-sm text-center transition-all flex items-center justify-center gap-2 ${
                    service.isPopular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-slate-900 text-white hover:bg-indigo-600'
                  }`}
                >
                  NHẬN BÁO GIÁ CHI TIẾT <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================Portfolio Section======================= */}
      <section id="portfolio" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center md:text-left mb-20">
             <span className="text-indigo-600 font-black text-xs uppercase tracking-[0.3em] block mb-4">Case Study tiêu biểu</span>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Những Gì Tôi Đã Làm.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map((caseItem, idx) => (
              <div key={idx} className="group bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="aspect-[16/9] overflow-hidden relative">
                   <img src={caseItem.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={caseItem.title} />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                      <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600 shadow-xl border border-white">Dự án thành công</span>
                   </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                   <h3 className="text-2xl font-black mb-6 tracking-tight text-slate-900">{caseItem.title}</h3>
                   <div className="space-y-6 flex-1">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Vấn đề & Giải pháp</p>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed italic">"{caseItem.problem} - {caseItem.solution}"</p>
                      </div>
                      <div className="p-6 bg-white rounded-2xl border border-indigo-50 shadow-sm mt-4">
                        <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-2">Kết quả thực tế</p>
                        <p className="text-sm font-bold text-slate-900 leading-relaxed">{caseItem.result}</p>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================Process Section====================== */}
      <section id="process" className="py-32 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">Quy Trình Làm Việc</h2>
             <p className="text-slate-400 font-medium text-lg">Chặt chẽ - Minh bạch - Hiệu quả.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Phân tích', desc: 'Nghiên cứu nhu cầu & ngành nghề.' },
              { num: '02', title: 'Đề xuất', desc: 'Giải pháp & báo giá chi tiết.' },
              { num: '03', title: 'Triển khai', desc: 'Thanh toán cọc & thực hiện.' },
              { num: '04', title: 'Tối ưu', desc: 'Theo dõi chỉ số & điều chỉnh.' },
              { num: '05', title: 'Bàn giao', desc: 'Nghiệm thu & vận hành.' }
            ].map((step, idx) => (
              <div key={idx} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="text-4xl font-black text-white/10 mb-6 group-hover:text-indigo-500 transition-all italic tracking-tighter">{step.num}</div>
                <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      import { Phone, Mail, MessageCircle, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  return (
    <>
      {/* ================== Contact Section ===================== */}
      <section id="contact" className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className="bg-indigo-600 rounded-3xl md:rounded-[4rem]
            p-6 sm:p-10 md:p-24
            flex flex-col lg:flex-row
            items-center justify-between gap-12
            relative overflow-hidden
            shadow-2xl shadow-indigo-100"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-white/10 rounded-full blur-[100px] -mr-32 -mt-32" />

            {/* LEFT */}
            <div className="flex-1 text-center lg:text-left text-white relative z-10">
              <h2
                className="text-3xl sm:text-4xl md:text-7xl
                font-black mb-8 md:mb-10
                leading-tight md:leading-[0.9]
                tracking-tighter uppercase italic"
              >
                Sẵn Sàng <br /> Hợp Tác?
              </h2>

              <div className="space-y-8 md:space-y-10">
                {/* Phone */}
                <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                    <Phone className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">
                      Zalo / Phone
                    </p>
                    <p className="text-xl md:text-3xl font-black tracking-tight">
                      094 330 4685
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 md:gap-6 justify-center lg:justify-start">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                    <Mail className="w-5 h-5 md:w-7 md:h-7" />
                  </div>
                  <div className="max-w-[260px]">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">
                      Email
                    </p>
                    <p className="text-base md:text-2xl font-black italic break-all">
                      hiendoanvan25@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex-1 w-full relative z-10">
              <div
                className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[3.5rem]
                p-6 sm:p-10 md:p-14
                shadow-3xl text-slate-900 text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-8 md:mb-10 shadow-inner">
                  <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-indigo-600" />
                </div>

                <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 tracking-tight">
                  Liên hệ ngay
                </h3>

                <p className="text-slate-400 text-sm mb-8 md:mb-12 font-medium leading-relaxed max-w-xs mx-auto">
                  Nhận tư vấn miễn phí về chiến lược Marketing & Website cho doanh nghiệp của bạn.
                </p>

                <a
                  href="https://zalo.me/0943304685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 md:py-6 bg-[#0068ff] text-white font-black
                  rounded-2xl md:rounded-3xl
                  hover:bg-[#0052cc] transition-all
                  shadow-xl shadow-blue-200
                  text-sm md:text-lg uppercase tracking-widest
                  active:scale-95"
                >
                  CHAT QUA ZALO NGAY
                </a>

                <div className="mt-6 md:mt-8 flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Cam kết bảo mật & chuyên nghiệp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== Footer ===================== */}
      <footer className="py-16 border-t border-slate-100 text-center bg-white">
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} ĐOÀN ĐÌNH HIỂN • REMOTE MARKETING & WEBSITE PARTNER
        </p>
      </footer>

      {/* ================== Floating Zalo Button ================== */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[999]">
        <a
          href="https://zalo.me/0943304685"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 bg-[#0068ff] text-white rounded-full
          flex items-center justify-center shadow-2xl
          hover:scale-110 transition-all animate-bounce-slow active:scale-90"
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>

      {/* ================== Custom Styles ================== */}
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
    </>
  );
}
