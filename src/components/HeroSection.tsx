import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  School, 
  Users, 
  Award, 
  BookOpen, 
  Target,
  GraduationCap,
  Sparkles,
  ChevronLeft,
  Trophy,
  Star,
  Crown,
  Lightbulb,
  Zap,
  Globe,
  Shield,
  MapPin,
  Heart,
  Clock,
  Target as TargetIcon,
  CheckCircle,
  Briefcase,
  FileText,
  Presentation,
  Users2,
  Layers,
  BookMarked,
  Award as Certificate,
  TrendingUp,
  Globe as Earth,
  CheckSquare,
  BarChart
} from "lucide-react";

const HeroSection = () => {
  // ألوان نظام بيرسون BTEC (أزرق، أبيض، أحمر - ألوان بيرسون)
  const colors = {
    primary: "#0066CC",      // أزرق بيرسون
    secondary: "#ED1C24",    // أحمر بيرسون
    accent: "#00A651",       // أخضر للنجاح
    light: "#FFFFFF",        // أبيض
    dark: "#003366",         // أزرق داكن
    success: "#00A651",      // أخضر للتميز
    warning: "#FFC72C",      // ذهبي للتميز
    textLight: "#FFFFFF",
    textDark: "#333333",
  };

  const stats = [
    { 
      number: "50+", 
      label: "دولة حول العالم", 
      subLabel: "يستخدمون BTEC", 
      icon: Earth, 
      color: colors.primary,
      description: "نظام معترف به دولياً في أكثر من 50 دولة"
    },
    { 
      number: "80%", 
      label: "تعليم عملي", 
      subLabel: "مشاريع وتطبيقات", 
      icon: Briefcase, 
      color: colors.secondary,
      description: "نسبة التعليم العملي والتطبيقي في المناهج"
    },
    { 
      number: "95%", 
      label: "توظيف الخريجين", 
      subLabel: "في سوق العمل", 
      icon: TrendingUp, 
      color: colors.success,
      description: "نسبة الخريجين الذين يجدون فرص عمل"
    },
    { 
      number: "3", 
      label: "مستويات تقييم", 
      subLabel: "Pass, Merit, Distinction", 
      icon: Certificate, 
      color: colors.warning,
      description: "نظام التقييم المعتمد في BTEC"
    },
  ];

  const btecLevels = [
    { 
      level: "Level 1-2", 
      title: "الدبلوم التأسيسي", 
      description: "مهارات أساسية للعمل",
      icon: <BookMarked className="w-5 h-5" color={colors.primary} />
    },
    { 
      level: "Level 3", 
      title: "الدبلوم المتقدم", 
      description: "معادل للمرحلة الثانوية",
      icon: <GraduationCap className="w-5 h-5" color={colors.secondary} />
    },
    { 
      level: "Level 4-7", 
      title: "المستوى الجامعي", 
      description: "معادل للبكالوريوس والماجستير",
      icon: <Award className="w-5 h-5" color={colors.success} />
    },
  ];

  const features = [
    { text: "تعليم تطبيقي عملي", icon: <Briefcase className="w-4 h-4" color={colors.secondary} /> },
    { text: "تقييم بالمشاريع", icon: <FileText className="w-4 h-4" color={colors.secondary} /> },
    { text: "معايير دولية", icon: <Globe className="w-4 h-4" color={colors.secondary} /> },
    { text: "ربط بسوق العمل", icon: <Target className="w-4 h-4" color={colors.secondary} /> },
  ];

  const specialties = [
    { name: "تكنولوجيا المعلومات", icon: <Layers className="w-4 h-4" /> },
    { name: "إدارة الأعمال", icon: <Briefcase className="w-4 h-4" /> },
    { name: "الهندسة", icon: <Target className="w-4 h-4" /> },
    { name: "الفنون والإعلام", icon: <Presentation className="w-4 h-4" /> },
    { name: "الصحة والرعاية", icon: <Heart className="w-4 h-4" /> },
    { name: "السياحة والفنادق", icon: <Globe className="w-4 h-4" /> },
  ];

  const assessmentCriteria = [
    { grade: "Pass", color: "#00A651", description: "اجتياز المتطلبات الأساسية" },
    { grade: "Merit", color: "#FFC72C", description: "أداء متميز فوق المتوقع" },
    { grade: "Distinction", color: "#0066CC", description: "تميز وإبداع استثنائي" },
  ];

  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-gray-100"
      role="banner"
      aria-label="نظام بيرسون BTEC التعليمي التطبيقي"
    >
      {/* خلفيات متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        {/* خلفية متدرجة */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-gray-100/95" />
        
        {/* تأثيرات زخرفية بألوان بيرسون */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-red-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-green-500/10 to-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        
        {/* خطوط زخرفية */}
        <div className="absolute top-20 left-20 w-px h-40 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-red-400/20 to-transparent"></div>
        
        {/* نقاط متحركة */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        
        {/* شعار بيرسون زخرفي */}
        <div className="absolute top-1/4 right-1/4 opacity-5">
          <div className="text-6xl font-black" style={{ color: colors.primary }}>BTEC</div>
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* النصوص والبطاقات */}
          <div className="space-y-10 animate-fade-in">
            {/* الشارة العلوية */}
            <div className="inline-flex items-center gap-3">
              <Badge
                variant="secondary"
                className="px-6 py-3 border-2 border-blue-500 bg-white hover:bg-blue-50 transition-all duration-300 shadow-lg group"
                style={{ borderColor: colors.primary, color: colors.primary }}
              >
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" style={{ color: colors.primary }} />
                  <span className="font-bold text-sm md:text-base">
                    نظام تعليمي معترف به عالمياً
                  </span>
                  <Sparkles className="h-4 w-4" style={{ color: colors.secondary }} />
                </div>
              </Badge>
              
              {/* مستويات BTEC */}
              <div className="hidden md:flex items-center gap-2">
                {btecLevels.slice(0, 2).map((level, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-1 px-3 py-1.5 bg-white backdrop-blur-sm rounded-full border border-gray-200 hover:border-blue-300 transition-colors"
                  >
                    {level.icon}
                    <span className="text-xs" style={{ color: colors.dark }}>{level.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* العنوان الرئيسي */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span style={{ color: colors.dark }}>نظام</span>
                <span className="block mt-2 relative">
                  <span 
                    className="animate-text-glow"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.success} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    بيرسون BTEC
                  </span>
                  <Sparkles 
                    className="absolute -top-4 -right-4 w-8 h-8 animate-spin-slow" 
                    style={{ color: colors.secondary }} 
                  />
                </span>
                <span className="block text-2xl md:text-3xl mt-4" style={{ color: colors.textDark }}>
                  التعليم التطبيقي للعصر الحديث
                </span>
              </h1>

              {/* الميزات السريعة */}
              <div className="flex flex-wrap gap-3">
                {features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    style={{ color: colors.textDark }}
                  >
                    {feature.icon}
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* وصف النظام */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <Lightbulb className="h-6 w-6 flex-shrink-0" style={{ color: colors.primary }} />
                <div>
                  <h3 className="text-lg font-bold" style={{ color: colors.dark }}>
                    نظام تعليمي بريطاني تطبيقي
                  </h3>
                  <p className="text-gray-600 mt-1">
                    يشرف عليه شركة Pearson العالمية، ويعتمد على التعليم العملي أكثر من الامتحانات التقليدية
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <Target className="h-6 w-6 flex-shrink-0" style={{ color: colors.secondary }} />
                <div>
                  <h3 className="text-lg font-bold" style={{ color: colors.dark }}>
                    ربط التعليم بسوق العمل
                  </h3>
                  <p className="text-gray-600 mt-1">
                    يهدف إلى تنمية المهارات العملية، التفكير العملي، والعمل الجماعي
                  </p>
                </div>
              </div>
            </div>

            {/* بطاقة التخصصات */}
            <Card className="relative overflow-hidden rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold" style={{ color: colors.dark }}>
                  التخصصات المتاحة
                </h3>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${colors.primary}10` }}>
                  <Layers className="h-5 w-5" style={{ color: colors.primary }} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {specialties.map((specialty, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {specialty.icon}
                    <span className="text-sm text-gray-700">{specialty.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* أزرار إضافية */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="px-8 py-6 font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 100%)`,
                  color: 'white'
                }}
              >
                <BookOpen className="ml-2 h-5 w-5" />
                اكتشف التخصصات
              </Button>
              
              <Button 
                variant="outline" 
                className="px-8 py-6 rounded-xl hover:scale-105 transition-all duration-300 border-2"
                style={{ 
                  borderColor: colors.primary,
                  color: colors.primary,
                  backgroundColor: 'white'
                }}
              >
                <FileText className="ml-2 h-5 w-5" />
                دليل النظام التعليمي
              </Button>
            </div>
          </div>

          {/* الإحصائيات والبطاقات */}
          <div className="relative">
            {/* خلفية البطاقات */}
            <div 
              className="absolute -inset-4 rounded-3xl blur-xl opacity-20"
              style={{ 
                background: `radial-gradient(circle at center, ${colors.primary}20 0%, transparent 70%)`
              }}
            ></div>
            
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {stats.map((stat, i) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={i}
                    className="animate-fade-in-up group"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <Card className="relative overflow-hidden p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-200">
                      <div className="flex flex-col items-center text-center space-y-4">
                        {/* الأيقونة */}
                        <div 
                          className="p-3 rounded-xl group-hover:scale-110 transition-transform duration-300"
                          style={{ 
                            backgroundColor: `${stat.color}15`,
                            border: `1px solid ${stat.color}30`
                          }}
                        >
                          <IconComponent 
                            className="h-8 w-8" 
                            style={{ color: stat.color }} 
                          />
                        </div>
                        
                        {/* الرقم */}
                        <div className="space-y-2">
                          <div
                            className="text-2xl md:text-3xl font-black"
                            style={{ color: stat.color }}
                          >
                            {stat.number}
                          </div>
                          
                          {/* النصوص */}
                          <div className="space-y-1">
                            <div className="text-base font-bold" style={{ color: colors.dark }}>
                              {stat.label}
                            </div>
                            <div className="text-sm font-medium text-gray-600">
                              {stat.subLabel}
                            </div>
                          </div>
                        </div>
                        
                        {/* الوصف */}
                        <div className="pt-4 w-full border-t border-gray-100">
                          <p className="text-xs leading-relaxed text-gray-500">
                            {stat.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* معايير التقييم */}
            <div className="mt-10">
              <Card className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold mb-4 text-center" style={{ color: colors.dark }}>
                  معايير التقييم في BTEC
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {assessmentCriteria.map((criterion, i) => (
                    <div 
                      key={i} 
                      className="text-center p-3 rounded-lg"
                      style={{ backgroundColor: `${criterion.color}10` }}
                    >
                      <div 
                        className="text-lg font-bold mb-1"
                        style={{ color: criterion.color }}
                      >
                        {criterion.grade}
                      </div>
                      <p className="text-xs text-gray-600">
                        {criterion.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* مستويات BTEC */}
            <div className="mt-6">
              <Card className="p-6 bg-white rounded-2xl border border-gray-200">
                <h3 className="text-lg font-bold mb-4" style={{ color: colors.dark }}>
                  المستويات التعليمية
                </h3>
                <div className="space-y-3">
                  {btecLevels.map((level, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      {level.icon}
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-800">{level.title}</span>
                          <Badge variant="outline" className="text-xs">
                            {level.level}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{level.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* زر التمرير */}
            <div className="mt-8 text-center">
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="inline-flex flex-col items-center gap-2 transition-colors duration-300 hover:scale-110"
                style={{ color: colors.primary }}
              >
                <span className="text-sm font-medium">اكتشف المزيد عن النظام</span>
                <div className="animate-bounce">
                  <ChevronLeft className="h-6 w-6 rotate-90" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* أنيميشنات CSS */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes text-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 5px ${colors.primary}40);
          }
          50% { 
            filter: drop-shadow(0 0 15px ${colors.primary}60) brightness(1.1);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; opacity: 0; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        
        /* تحسينات للجوال */
        @media (max-width: 640px) {
          .container { padding-left: 1rem; padding-right: 1rem; }
          h1 { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;