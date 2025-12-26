import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Globe, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Eye,
  Building,
  Sparkles,
  ArrowLeft,
  Target,
  Award,
  Zap,
  Star,
  Lock,
  Briefcase,
  FileText,
  BarChart,
  UserCheck,
  LucideIcon
} from "lucide-react";
import { ReactElement } from "react";

// تعريف نوع بطاقة المستخدم
interface UserTypeCard {
  id: string;
  title: string;
  icon: ReactElement;
  description: string;
  gradient: string;
  features: string[];
}

const LoginSection = () => {
  const navigate = useNavigate();

  const userTypes: UserTypeCard[] = [
    { 
      id: "admin", 
      title: "إدارة النظام", 
      icon: <Globe className="w-8 h-8" />, 
      description: "الوصول الكامل لإدارة منصة BTEC والتقارير المتقدمة",
      gradient: "from-[#1E3A8A] to-[#3B82F6]",
      features: ["لوحة تحكم النظام", "تقارير الأداء", "إدارة الشهادات"]
    },
    { 
      id: "assessor", 
      title: "مقيّم BTEC", 
      icon: <UserCheck className="w-8 h-8" />, 
      description: "تقييم المشاريع والتقارير وفق معايير بيرسون",
      gradient: "from-[#059669] to-[#10B981]",
      features: ["تقييم المشاريع", "مراجعة التقارير", "إعطاء الدرجات"]
    },
    { 
      id: "student", 
      title: "طالب BTEC", 
      icon: <BookOpen className="w-8 h-8" />, 
      description: "التعلم العملي وتقديم المشاريع والتقارير",
      gradient: "from-[#7C3AED] to-[#8B5CF6]",
      features: ["المشاريع العملية", "التقارير", "المتابعة الدراسية"]
    },
    { 
      id: "teacher", 
      title: "معلم BTEC", 
      icon: <GraduationCap className="w-8 h-8" />, 
      description: "توجيه الطلاب وإدارة الوحدات التعليمية",
      gradient: "from-[#DC2626] to-[#EF4444]",
      features: ["توجيه المشاريع", "إدارة الوحدات", "متابعة التقدم"]
    },
    { 
      id: "coordinator", 
      title: "منسق البرنامج", 
      icon: <Briefcase className="w-8 h-8" />, 
      description: "تنسيق برامج BTEC والإشراف العام",
      gradient: "from-[#D97706] to-[#F59E0B]",
      features: ["تنسيق البرامج", "مراقبة الجودة", "التواصل مع بيرسون"]
    },
    { 
      id: "quality", 
      title: "مراقب الجودة", 
      icon: <BarChart className="w-8 h-8" />, 
      description: "مراقبة جودة التقييم والتطبيق",
      gradient: "from-[#475569] to-[#64748B]",
      features: ["مراقبة المعايير", "تأكيد الجودة", "التقارير الإحصائية"]
    },
  ];

  // تعريف أنواع الإحصائيات
  interface StatisticItem {
    value: string;
    label: string;
    color: string;
  }

  const statistics: StatisticItem[] = [
    { value: "130+", label: "دولة تطبق BTEC", color: "text-[#1E3A8A]" },
    { value: "2M+", label: "طالب حول العالم", color: "text-[#059669]" },
    { value: "50+", label: "تخصص مختلف", color: "text-[#7C3AED]" },
    { value: "100%", label: "تطبيقي وعملي", color: "text-[#DC2626]" }
  ];

  // تعريف أنواع الميزات
  interface FeatureItem {
    icon: ReactElement;
    title: string;
    description: string;
    color: string;
  }

  const features: FeatureItem[] = [
    { 
      icon: <FileText className="w-6 h-6" />, 
      title: "معايير التقييم", 
      description: "Pass • Merit • Distinction",
      color: "text-[#3B82F6]"
    },
    { 
      icon: <Briefcase className="w-6 h-6" />, 
      title: "المشاريع العملية", 
      description: "تعلم بالممارسة",
      color: "text-[#10B981]"
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "الشهادات", 
      description: "معترف بها عالمياً",
      color: "text-[#8B5CF6]"
    }
  ];

  // تعريف أنواع معلومات BTEC
  interface BtecInfoItem {
    icon: ReactElement;
    title: string;
    description: string;
    color: string;
  }

  const btecInfoItems: BtecInfoItem[] = [
    { 
      icon: <Briefcase className="w-6 h-6" />, 
      title: "تعليم تطبيقي", 
      description: "يركز على المهارات العملية والتطبيقية",
      color: "text-[#059669]"
    },
    { 
      icon: <Target className="w-6 h-6" />, 
      title: "معايير عالمية", 
      description: "معايير تقييم معتمدة من Pearson العالمية",
      color: "text-[#DC2626]"
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "شهادات معتمدة", 
      description: "شهادات معترف بها دولياً في سوق العمل",
      color: "text-[#D97706]"
    }
  ];

  // معالج الأحداث
  const handleLogin = (userTypeId: string) => {
    console.log(`دخول كـ ${userTypeId}`);
    navigate("/auth", { state: { userType: userTypeId } });
  };

  const handleExploreBtec = () => {
  navigate("/smart-book");
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-white to-[#EFF6FF]">
      {/* خلفيات زخرفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* دوائر زخرفية */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#3B82F6]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#10B981]/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* خطوط زخرفية */}
        <div className="absolute top-1/4 left-10 w-px h-64 bg-gradient-to-b from-transparent via-[#3B82F6]/20 to-transparent"></div>
        <div className="absolute bottom-1/4 right-10 w-px h-64 bg-gradient-to-b from-transparent via-[#8B5CF6]/20 to-transparent"></div>
        
        {/* نقاط متناثرة */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-[#3B82F6]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-[#10B981]/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] rounded-2xl mb-8 shadow-lg">
            <div className="p-4 bg-white rounded-xl shadow-inner">
              <Globe className="w-12 h-12 text-[#1E3A8A]" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              منصة BTEC التعليمية
            </span>
          </h2>
          
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#10B981]/10 to-[#3B82F6]/10 rounded-full mb-6 border border-[#3B82F6]/20">
            <span className="text-lg font-semibold text-[#1E3A8A]">
              نظام بيرسون العالمي - التعليم التطبيقي
            </span>
          </div>
          
          <p className="text-xl text-[#374151] max-w-2xl mx-auto leading-relaxed">
            نظام التعليم التطبيقي البريطاني المعتمد عالمياً من شركة Pearson
            <span className="block text-[#6B7280] mt-2">التعلم العملي • التقييم بالمشاريع • الربط مع سوق العمل</span>
          </p>
          
          {/* معلومات عن نظام BTEC */}
          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {btecInfoItems.map((item, index) => (
              <div key={index} className="p-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[#E5E7EB]">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className={item.color}>
                    {item.icon}
                  </div>
                  <span className="font-bold text-[#1E3A8A]">{item.title}</span>
                </div>
                <p className="text-sm text-[#6B7280]">{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* خط زخرفي */}
          <div className="relative w-48 h-1 mx-auto mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full blur-sm"></div>
          </div>
        </div>

        {/* بطاقات أنواع المستخدمين */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {userTypes.map((userType, index) => (
            <div
              key={userType.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="relative overflow-hidden h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group-hover:border-[#3B82F6]/30">
                {/* خلفية متدرجة */}
                <div className={`absolute inset-0 bg-gradient-to-br ${userType.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* تأثير عند التحويم */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <CardContent className="p-8 relative z-10">
                  {/* الأيقونة والدائرة الزخرفية */}
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`relative w-20 h-20 mx-auto bg-gradient-to-br ${userType.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <div className="text-white transform group-hover:scale-110 transition-transform duration-500">
                        {userType.icon}
                      </div>
                    </div>
                    
                    {/* نجمة صغيرة */}
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* العنوان والوصف */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-[#374151] group-hover:text-[#1E3A8A] transition-colors duration-300">
                      {userType.title}
                    </h3>
                    
                    <p className="text-[#6B7280] leading-relaxed min-h-[60px]">
                      {userType.description}
                    </p>

                    {/* الميزات */}
                    <div className="space-y-2 pt-4 border-t border-[#E5E7EB]">
                      {userType.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#6B7280]">
                          <Star className="w-3 h-3 text-[#8B5CF6]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* زر الدخول */}
                  <div className="mt-8 pt-6 border-t border-[#E5E7EB]">
                    <Button
                      className={`w-full py-6 bg-gradient-to-r ${userType.gradient} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 group-hover:brightness-110`}
                      onClick={() => handleLogin(userType.id)}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <ArrowLeft className="w-5 h-5" />
                        دخول الآن
                        <Zap className="w-4 h-4" />
                      </span>
                    </Button>
                    
                    {/* مؤشر نشط */}
                    <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-white to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </div>
                </CardContent>

                {/* زوايا زخرفية */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#3B82F6]/30 rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#10B981]/30 rounded-bl-xl"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* قسم المستكشف */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] border-0 shadow-2xl overflow-hidden">
            <div className="p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 bg-white/80 rounded-xl shadow-inner">
                  <Eye className="w-8 h-8 text-[#1E3A8A]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1E3A8A]">استكشف نظام BTEC</h3>
                  <p className="text-[#6B7280]">تعرف على نظام بيرسون التعليمي التطبيقي</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="p-4 bg-white/80 rounded-xl">
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                    <p className="text-sm text-[#374151] mt-2">{feature.title}</p>
                    <p className="text-xs text-[#6B7280]">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <Button
                className="px-12 py-6 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
                onClick={handleExploreBtec}
              >
                <span className="flex items-center justify-center gap-2">
                  <Globe className="w-5 h-5" />
                  تعرف أكثر على BTEC
                  <Target className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </Card>
        </div>

        {/* إحصائيات عالمية */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {statistics.map((stat, index) => (
            <div key={index} className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#E5E7EB]">
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-[#374151] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* تذييل */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10 rounded-full">
            <Globe className="w-5 h-5 text-[#1E3A8A]" />
            <span className="text-sm text-[#6B7280]">
              نظام BTEC التعليمي من شركة Pearson العالمية
            </span>
          </div>
          <p className="mt-4 text-[#6B7280] max-w-2xl mx-auto">
            BTEC هو نظام تعليمي بريطاني تطبيقي يركز على المهارات العملية والتطبيقية، 
            يتم تقييم الطلاب من خلال المشاريع والتقارير بدلاً من الامتحانات التقليدية، 
            مما يربط التعليم مباشرة بمتطلبات سوق العمل.
          </p>
        </div>
      </div>

      {/* أنيميشنات CSS */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default LoginSection;