import { useState } from "react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Heart,
  Shield,
  Award,
  GraduationCap,
  BookOpen,
  Users,
  Home,
  Info,
  Target,
  Contact,
  Sparkles,
  ArrowUp,
  Globe,
  MessageCircle,
  Calendar,
  Linkedin,
  MessageSquare,
  Download,
  FileText,
  HelpCircle,
  Star,
  Zap,
  School,
  Bookmark,
  Map,
  Send,
  Brain,
  Rocket,
  TrendingUp,
  Cpu,
  Smartphone,
  Cloud,
  ShieldCheck,
  Globe as GlobeIcon,
  Users2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const quickLinks = [
    { icon: <Home className="w-5 h-5" />, label: "الصفحة الرئيسية", href: "/", color: "from-blue-500 to-cyan-500" },
    { icon: <Info className="w-5 h-5" />, label: "من نحن", href: "/about", color: "from-emerald-500 to-green-500" },
    { icon: <BookOpen className="w-5 h-5" />, label: "الدورات", href: "/courses", color: "from-purple-500 to-pink-500" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "التعلم", href: "/learn", color: "from-amber-500 to-orange-500" },
    { icon: <Target className="w-5 h-5" />, label: "المسارات", href: "/paths", color: "from-red-500 to-rose-500" },
    { icon: <Users className="w-5 h-5" />, label: "المجتمع", href: "/community", color: "from-indigo-500 to-violet-500" },
    { icon: <Contact className="w-5 h-5" />, label: "الدعم", href: "/support", color: "from-teal-500 to-emerald-500" },
  ];

  const resources = [
    { icon: <Download className="w-5 h-5" />, label: "التطبيقات", href: "/apps" },
    { icon: <FileText className="w-5 h-5" />, label: "المستندات", href: "/docs" },
    { icon: <Bookmark className="w-5 h-5" />, label: "المكتبة", href: "/library" },
    { icon: <HelpCircle className="w-5 h-5" />, label: "المساعدة", href: "/help" },
    { icon: <Map className="w-5 h-5" />, label: "خريطة الموقع", href: "/sitemap" },
    { icon: <Calendar className="w-5 h-5" />, label: "التقويم", href: "/calendar" },
  ];

  const contactInfo = [
    { 
      icon: <GlobeIcon className="w-5 h-5" />, 
      text: "متاح حول العالم",
      details: "تعلم من أي مكان وفي أي وقت"
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      text: "الدعم الفني: 24/7",
      link: "tel:+12345678900"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      text: "support@edplatform.com",
      link: "mailto:support@edplatform.com"
    },
    { 
      icon: <Clock className="w-5 h-5" />, 
      text: "متاح دائماً",
      details: "منصة مفتوحة على مدار الساعة"
    },
  ];

  const socialMedia = [
    { 
      icon: <Facebook className="w-6 h-6" />, 
      label: "فيسبوك", 
      href: "#",
      color: "hover:bg-blue-500"
    },
    { 
      icon: <Instagram className="w-6 h-6" />, 
      label: "إنستجرام", 
      href: "#",
      color: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600"
    },
    { 
      icon: <Twitter className="w-6 h-6" />, 
      label: "تويتر", 
      href: "#",
      color: "hover:bg-cyan-500"
    },
    { 
      icon: <Youtube className="w-6 h-6" />, 
      label: "يوتيوب", 
      href: "#",
      color: "hover:bg-red-600"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      label: "لينكدإن", 
      href: "#",
      color: "hover:bg-blue-700"
    },
    { 
      icon: <MessageSquare className="w-6 h-6" />, 
      label: "ديسكورد", 
      href: "#",
      color: "hover:bg-purple-500"
    },
  ];

  const platformFeatures = [
    { icon: <Brain className="w-4 h-4" />, title: "تعلم ذكي", desc: "باستخدام الذكاء الاصطناعي" },
    { icon: <Rocket className="w-4 h-4" />, title: "مسار سريع", desc: "لتحقيق أهدافك بسرعة" },
    { icon: <ShieldCheck className="w-4 h-4" />, title: "آمنة", desc: "بيئة تعلم موثوقة" },
  ];

  const stats = [
    { value: "100K+", label: "متعلم نشط", icon: <Users2 className="w-4 h-4" /> },
    { value: "500+", label: "دورة متاحة", icon: <BookOpen className="w-4 h-4" /> },
    { value: "24/7", label: "دعم فني", icon: <Smartphone className="w-4 h-4" /> },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-slate-300 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Decorative Lines */}
        <div className="absolute top-20 left-20 w-px h-40 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-purple-400/10 to-transparent"></div>
        
        {/* Animated Dots */}
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 left-1/3 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Back to Top Button */}
      <div className="relative z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
          aria-label="العودة إلى الأعلى"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* Platform Information */}
          <div className="text-center lg:text-right lg:col-span-2">
            <div className="relative inline-block mb-6 md:mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-30"></div>
              
              {/* Logo/Icon with Gradient */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto lg:mx-0 rounded-2xl shadow-2xl border-4 border-white/10 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center floating-animation">
                <div className="text-white text-4xl md:text-5xl font-bold">
                  E
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-blue-400 animate-pulse" />
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                منصة التواصل التعليمية
              </span>
            </h3>
            
            <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
              منصة رقمية متكاملة تقدم تجربة تعليمية استثنائية، تجمع بين أحدث التقنيات وأفضل الممارسات التعليمية.
            </p>
            
            {/* Platform Features */}
            <div className="space-y-3 mb-6">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-end gap-2">
                  <div className="p-1.5 bg-blue-500/20 rounded-lg">
                    {feature.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-white">{feature.title}</div>
                    <div className="text-xs text-slate-400">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-center gap-1 mb-1">
                    {stat.icon}
                    <span className="text-lg font-bold text-white">{stat.value}</span>
                  </div>
                  <span className="text-xs text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-6 md:mb-8">
              <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white">الروابط الرئيسية</h4>
            </div>
            
            <div className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center justify-center lg:justify-end gap-3 text-sm md:text-base p-2 md:p-3 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-1"
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className={`text-slate-300 group-hover:text-blue-300 transition-colors duration-300 ${hoveredLink === index ? 'font-semibold' : ''}`}>
                    {link.label}
                  </span>
                  <div className={`p-1.5 md:p-2 rounded transition-all duration-300 ${hoveredLink === index ? `bg-gradient-to-r ${link.color}` : 'bg-white/5 group-hover:bg-blue-500/20'}`}>
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Resources */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-6 md:mb-8">
              <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white">المصادر</h4>
            </div>
            
            <div className="space-y-2 md:space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="group flex items-center justify-center lg:justify-end gap-3 text-sm md:text-base p-2 md:p-3 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-slate-300 group-hover:text-purple-300 transition-colors duration-300">
                    {resource.label}
                  </span>
                  <div className="p-1.5 md:p-2 bg-white/5 rounded group-hover:bg-purple-500/20 transition-colors duration-300">
                    {resource.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Newsletter & Social Media */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-6 md:mb-8">
              <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white">ابقَ على اتصال</h4>
            </div>
            
            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="mb-6 md:mb-8">
              <div className="relative mb-4">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني"
                  className="w-full pr-10 pl-4 py-2.5 md:py-3 text-sm md:text-base bg-white/10 backdrop-blur-sm rounded-lg border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder-slate-500"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full py-2.5 md:py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-[1.02] text-sm md:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubscribed ? (
                    <>
                      <Zap className="w-4 h-4 animate-pulse" />
                      تم الاشتراك! ✓
                    </>
                  ) : (
                    <>
                      اشترك في النشرة
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </span>
              </Button>
              {isSubscribed && (
                <p className="text-xs text-green-400 mt-2 animate-pulse">
                  شكراً للاشتراك! ستصل آخر التحديثات إلى بريدك
                </p>
              )}
            </form>
            
            {/* Contact Information */}
            <div className="mb-6 md:mb-8">
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-center lg:justify-end gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                      {info.text}
                      {info.details && (
                        <span className="block text-xs text-slate-500 mt-1">{info.details}</span>
                      )}
                    </span>
                    <a 
                      href={info.link || '#'} 
                      className="p-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded transition-colors hover:from-blue-500/20 hover:to-purple-500/20"
                      target={info.link ? "_blank" : undefined}
                      rel={info.link ? "noopener noreferrer" : undefined}
                    >
                      {info.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <p className="text-slate-400 text-sm mb-3 md:mb-4">تابعنا على:</p>
              <div className="flex flex-wrap justify-center lg:justify-end gap-2 md:gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-2.5 md:p-3 bg-white/5 hover:bg-gradient-to-r ${social.color} rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-md`}
                    aria-label={social.label}
                  >
                    <div className="relative text-slate-300 group-hover:text-white transition-colors">
                      {social.icon}
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-slate-700 pt-8 md:pt-12 mt-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between">
            {/* Copyright Info */}
            <div className="text-center md:text-right order-2 md:order-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-5">
                <p className="text-slate-400 text-sm md:text-base">
                  جميع الحقوق محفوظة © 
                  <span className="font-semibold text-blue-300 mx-1 md:mx-2">
                    منصة التواصل التعليمية
                  </span>
                  {new Date().getFullYear()}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  تعليم ذكي لمستقبل أفضل
                </p>
              </div>
            </div>
            
            {/* Icons */}
            <div className="flex justify-center items-center gap-4 md:gap-6 order-1 md:order-2">
              <div className="p-2 md:p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg">
                <Cpu className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <div className="p-2 md:p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg">
                <Cloud className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
              </div>
              <div className="p-2 md:p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
            </div>
            
            {/* Additional Links */}
            <div className="text-center md:text-left order-3">
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                <a 
                  href="/privacy" 
                  className="text-slate-400 hover:text-blue-300 transition-colors text-xs md:text-sm flex items-center gap-1"
                >
                  <Shield className="w-3 h-3" />
                  سياسة الخصوصية
                </a>
                <span className="text-slate-600 hidden md:inline">•</span>
                <a 
                  href="/terms" 
                  className="text-slate-400 hover:text-blue-300 transition-colors text-xs md:text-sm flex items-center gap-1"
                >
                  <FileText className="w-3 h-3" />
                  شروط الاستخدام
                </a>
                <span className="text-slate-600 hidden md:inline">•</span>
                <a 
                  href="/sitemap" 
                  className="text-slate-400 hover:text-blue-300 transition-colors text-xs md:text-sm flex items-center gap-1"
                >
                  <Map className="w-3 h-3" />
                  خريطة الموقع
                </a>
                <span className="text-slate-600 hidden md:inline">•</span>
                <a 
                  href="/accessibility" 
                  className="text-slate-400 hover:text-blue-300 transition-colors text-xs md:text-sm flex items-center gap-1"
                >
                  <Heart className="w-3 h-3" />
                  إمكانية الوصول
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .floating-animation {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;