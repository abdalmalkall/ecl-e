import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Globe, 
  ArrowRight, 
  Award, 
  Users, 
  Target, 
  Building,
  ChevronRight,
  Star,
  Shield,
  BookOpen,
  Lightbulb,
  Briefcase,
  BarChart,
  FileText,
  CheckCircle,
  Zap,
  GraduationCap
} from "lucide-react";

const AboutSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
    
    // إضافة تأثيرات الظهور التدريجي
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => el.classList.add('visible'));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // تعريف أنواع البيانات
  interface Specialization {
    name: string;
    icon: React.ReactNode;
    gradient: string;
    description: string;
    careers: string[];
  }

  interface Achievement {
    number: string;
    label: string;
    icon: React.ReactNode;
    color: string;
  }

  const specializations: Specialization[] = [
    { 
      name: "إدارة الأعمال", 
      icon: <Briefcase className="w-8 h-8" />, 
      gradient: "from-[#3B82F6] to-[#1E40AF]", 
      description: "تعلم مبادئ الإدارة والتسويق والتمويل / Business management and entrepreneurship",
      careers: ["مدير مشروع", "محلل أعمال", "رائد أعمال"]
    },
    { 
      name: "تكنولوجيا المعلومات", 
      icon: <Zap className="w-8 h-8" />, 
      gradient: "from-[#8B5CF6] to-[#7C3AED]", 
      description: "البرمجة والشبكات والأمن السيبراني / Software development and cybersecurity",
      careers: ["مبرمج", "مدير شبكات", "محلل أمن سيبراني"]
    },
    { 
      name: "الهندسة", 
      icon: <BarChart className="w-8 h-8" />, 
      gradient: "from-[#10B981] to-[#059669]", 
      description: "التصميم الهندسي والابتكار التقني / Engineering design and innovation",
      careers: ["فني هندسي", "مصمم CAD", "مشرف مشاريع"]
    },
    { 
      name: "الفنون والإعلام", 
      icon: <FileText className="w-8 h-8" />, 
      gradient: "from-[#F59E0B] to-[#D97706]", 
      description: "الإنتاج الإعلامي والتصميم الجرافيكي / Media production and creative arts",
      careers: ["مصمم جرافيك", "منتج وسائط", "مخرج فني"]
    },
    { 
      name: "السياحة والضيافة", 
      icon: <Users className="w-8 h-8" />, 
      gradient: "from-[#EF4444] to-[#DC2626]", 
      description: "إدارة الفنادق والسياحة والخدمات / Hospitality and tourism management",
      careers: ["مدير فندق", "منظم رحلات", "مدير خدمات"]
    }
  ];

  const achievements: Achievement[] = [
    { number: "35+", label: "عاماً من التميز في التعليم التطبيقي", icon: <Award className="w-6 h-6" />, color: "text-[#3B82F6]" },
    { number: "2M+", label: "خريج حول العالم", icon: <Users className="w-6 h-6" />, color: "text-[#10B981]" },
    { number: "130+", label: "دولة تطبق نظام BTEC", icon: <Globe className="w-6 h-6" />, color: "text-[#8B5CF6]" },
    { number: "98%", label: "رضا أرباب العمل عن الخريجين", icon: <Star className="w-6 h-6" />, color: "text-[#F59E0B]" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#F0F9FF] via-white to-[#EFF6FF] text-gray-800 py-12 px-4 relative overflow-hidden">
      {/* خلفيات زخرفية متطورة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* دوائر متحركة متعددة */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3B82F6]/10 to-[#1E40AF]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#10B981]/10 to-[#059669]/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-[#8B5CF6]/5 to-[#7C3AED]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* خطوط زخرفية */}
        <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-[#3B82F6]/20 to-transparent"></div>
        <div className="absolute bottom-20 right-10 w-px h-40 bg-gradient-to-b from-transparent via-[#10B981]/20 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* شريط التنقل المميز */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sticky top-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/40 z-20 transform transition-all duration-300 hover:shadow-3xl">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            <ArrowRight className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">العودة للصفحة الرئيسية</span>
          </button>
          
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0 justify-center">
            {[
              { id: 'about-us', label: 'عن BTEC', icon: <Globe className="w-4 h-4" /> },
              { id: 'specializations', label: 'التخصصات', icon: <BookOpen className="w-4 h-4" /> },
              { id: 'vision', label: 'الرؤية', icon: <Target className="w-4 h-4" /> },
              { id: 'achievements', label: 'الإنجازات', icon: <Award className="w-4 h-4" /> },
              { id: 'assessment', label: 'نظام التقييم', icon: <BarChart className="w-4 h-4" /> }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex items-center gap-2 px-4 py-2.5 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-gradient-to-r hover:from-[#DBEAFE] hover:to-[#E0E7FF] transition-all duration-300 hover:scale-105 border border-[#E5E7EB] text-sm font-medium text-[#374151] hover:text-[#1E40AF]"
              >
                {item.icon}
                {item.label}
                <ChevronRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        {/* قسم عن BTEC */}
        <div id="about-us" className="text-center mb-24 fade-in">
          {/* أيقونة فخمة مع تأثيرات */}
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#10B981] rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-white to-[#F0F9FF] p-4 rounded-3xl shadow-2xl border border-white/50">
              <div className="bg-gradient-to-br from-[#DBEAFE] to-[#E0E7FF] p-6 rounded-2xl">
                <Globe className="w-20 h-20 text-[#1E40AF] animate-float" />
              </div>
            </div>
            {/* نجمة زخرفية */}
            <Star className="absolute -top-2 -right-2 w-8 h-8 text-[#8B5CF6] animate-spin-slow" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              نظام BTEC التعليمي
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-[#6B7280] mt-2 block">Pearson BTEC International Qualifications</span>
          </h2>
          
          {/* خط زخرفي */}
          <div className="relative w-64 h-1 mx-auto mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full blur-sm"></div>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* بطاقة رئيسية */}
            <div className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/40 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DBEAFE]/0 via-[#E0E7FF]/0 to-[#3B82F6]/0 group-hover:from-[#DBEAFE]/10 group-hover:via-[#E0E7FF]/10 group-hover:to-[#3B82F6]/10 transition-all duration-700"></div>
              
              <p className="text-xl md:text-2xl leading-relaxed text-[#374151] font-medium relative z-10">
                نظام <span className="font-bold text-[#1E40AF] bg-gradient-to-r from-[#DBEAFE] to-transparent px-2 py-1 rounded-lg">BTEC (Business and Technology Education Council)</span> هو مؤهلات تعليمية تطبيقية بريطانية معتمدة عالمياً من شركة <span className="font-bold text-[#10B981]">Pearson</span>، يركز على المهارات العملية والتطبيقية بدلاً من الامتحانات التقليدية.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#6B7280] mt-6 font-medium relative z-10">
                <span className="text-[#3B82F6] font-semibold">BTEC qualifications</span> are internationally recognized applied learning programs that prepare students for the world of work through practical, skills-based assessment rather than traditional exams.
              </p>
            </div>
            
            {/* بطاقة ثانوية */}
            <div className="group relative bg-gradient-to-r from-[#DBEAFE]/40 to-[#E0E7FF]/40 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 transform transition-all duration-500 hover:scale-[1.01] overflow-hidden">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-2xl"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-[#1E40AF] mb-3">مميزات نظام BTEC</h4>
                  <ul className="space-y-2 text-right">
                    {[
                      "التعلم بالممارسة والتطبيق العملي",
                      "التقييم بالمشاريع والتقارير",
                      "المرونة في المسار التعليمي",
                      "معترف به عالمياً في سوق العمل"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-[#374151]">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1E40AF] mb-3">BTEC Key Features</h4>
                  <ul className="space-y-2">
                    {[
                      "Practical, hands-on learning approach",
                      "Assessment through projects and assignments",
                      "Flexible learning pathways",
                      "Globally recognized by employers"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-[#374151]">
                        <CheckCircle className="w-4 h-4 text-[#10B981]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* قسم نظام التقييم */}
        <div id="assessment" className="text-center mb-24 fade-in">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-white to-[#F0F9FF] p-3 rounded-3xl shadow-2xl">
              <div className="relative bg-gradient-to-br from-[#10B981] via-[#34D399] to-[#059669] p-6 rounded-2xl group">
                <BarChart className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399] bg-clip-text text-transparent">
              نظام التقييم BTEC
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-[#6B7280] mt-2 block">Assessment System</span>
          </h2>
          
          <div className="w-48 h-1 bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#059669] mx-auto mb-12 rounded-full shadow-lg"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                level: "PASS",
                color: "from-[#10B981] to-[#059669]",
                description: "تحقيق المتطلبات الأساسية للمعايير المحددة",
                english: "Meets all specified criteria requirements"
              },
              {
                level: "MERIT",
                color: "from-[#3B82F6] to-[#1E40AF]",
                description: "تجاوز المتطلبات بشكل ملحوظ ومتميز",
                english: "Exceeds requirements with notable distinction"
              },
              {
                level: "DISTINCTION",
                color: "from-[#8B5CF6] to-[#7C3AED]",
                description: "أداء استثنائي ومتميز يتجاوز التوقعات",
                english: "Exceptional performance exceeding expectations"
              }
            ].map((grade, index) => (
              <div key={index} className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${grade.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className={`relative w-20 h-20 mx-auto mb-5 bg-gradient-to-br ${grade.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <Award className="w-10 h-10" />
                </div>
                
                <div className="text-3xl font-black mb-3 bg-gradient-to-br bg-clip-text text-transparent bg-gradient-to-br">
                  <span className={grade.color.replace('from-', 'text-').replace(' to-', '')}>
                    {grade.level}
                  </span>
                </div>
                
                <p className="text-sm text-[#374151] mb-3">{grade.description}</p>
                <p className="text-xs text-[#6B7280] italic">{grade.english}</p>
              </div>
            ))}
          </div>
        </div>

        {/* التخصصات */}
        <div id="specializations" className="text-center mb-24 fade-in">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full blur-xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-white to-[#F0F9FF] p-4 rounded-3xl shadow-2xl">
              <div className="bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] p-6 rounded-2xl">
                <BookOpen className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
              التخصصات المتاحة
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-[#6B7280] mt-2 block">Available Specializations</span>
          </h2>
          
          <div className="w-48 h-1 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#10B981] mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {specializations.map((spec, index) => (
              <div 
                key={index} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${spec.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className={`relative w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${spec.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {spec.icon}
                </div>
                
                <h3 className="text-lg font-bold text-[#374151] mb-3 group-hover:text-[#1E40AF] transition-colors duration-300">
                  {spec.name}
                </h3>
                
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                  {spec.description}
                </p>
                
                <div className="pt-3 border-t border-[#E5E7EB]">
                  <p className="text-xs font-medium text-[#374151] mb-2">المهن المستقبلية:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {spec.careers.map((career, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-[#F3F4F6] text-[#6B7280] rounded-full">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* إنجازات BTEC */}
        <div id="achievements" className="text-center mb-24 fade-in">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] rounded-full blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-white to-[#F0F9FF] p-4 rounded-3xl shadow-2xl">
              <div className="bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] p-6 rounded-2xl">
                <Award className="w-20 h-20 text-white animate-bounce-slow" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
              إنجازات عالمية
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-[#6B7280] mt-2 block">Global Achievements</span>
          </h2>
          
          <div className="w-48 h-1 bg-gradient-to-r from-[#8B5CF6] via-[#3B82F6] to-[#10B981] mx-auto mb-12 rounded-full shadow-lg"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-[#F0F9FF] rounded-2xl p-6 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] rounded-xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <div className={achievement.color}>
                    {achievement.icon}
                  </div>
                </div>
                
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                
                <div className="text-sm text-[#374151] font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* الفريق والشركاء */}
        <div id="team" className="text-center mb-20 fade-in">
          <div className="relative mb-10">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-r from-[#3B82F6]/10 to-[#10B981]/10 rounded-full blur-2xl"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black relative z-10">
              <span className="bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#10B981] bg-clip-text text-transparent">
                الشركاء والداعمون
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-[#6B7280] mt-2 block">Partners & Supporters</span>
            </h2>
          </div>
          
          <div className="w-48 h-1 bg-gradient-to-r from-[#3B82F6] via-[#10B981] to-[#8B5CF6] mx-auto mb-12 rounded-full"></div>
          
          <div className="relative max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/40 transform transition-all duration-500 hover:shadow-3xl overflow-hidden">
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* بيرسون */}
                <div className="group relative bg-gradient-to-br from-[#DBEAFE] to-white rounded-2xl p-6 shadow-lg border border-[#E5E7EB] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] rounded-xl shadow-inner">
                      <Globe className="w-8 h-8 text-[#1E40AF]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1E40AF] text-right">الشريك العالمي</p>
                      <p className="text-sm text-[#6B7280] text-right">Global Education Partner</p>
                    </div>
                  </div>
                  <p className="text-xl text-[#1E40AF] font-semibold text-center">
                    Pearson Education
                  </p>
                  <p className="text-sm text-[#6B7280] text-center mt-2">المنظمة العالمية للتعليم والاختبارات</p>
                </div>
                
                {/* الجامعات */}
                <div className="group relative bg-gradient-to-br from-[#F0F9FF] to-white rounded-2xl p-6 shadow-lg border border-[#E5E7EB] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-[#DCFCE7] to-[#BBF7D0] rounded-xl shadow-inner">
                      <GraduationCap className="w-8 h-8 text-[#059669]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#059669] text-right">شركاء أكاديميون</p>
                      <p className="text-sm text-[#6B7280] text-right">Academic Partners</p>
                    </div>
                  </div>
                  <p className="text-xl text-[#059669] font-semibold text-center">
                    200+ جامعة عالمية
                  </p>
                  <p className="text-sm text-[#6B7280] text-center mt-2">تقر بدرجات BTEC للالتحاق بالجامعة</p>
                </div>
              </div>
              
              {/* أرباب العمل */}
              <div className="group relative bg-gradient-to-br from-[#1E40AF] via-[#3B82F6] to-[#8B5CF6] rounded-2xl p-6 shadow-lg border border-white/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-right">شركاء صناعيون</p>
                    <p className="text-sm text-white/80 text-right">Industry Partners</p>
                  </div>
                </div>
                <p className="text-xl text-white font-semibold text-center">
                  5000+ شركة عالمية
                </p>
                <p className="text-sm text-white/90 text-center mt-2">
                  توظف خريجي BTEC في مختلف القطاعات الصناعية والتجارية
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* الفوتر */}
        <footer className="text-center py-10 border-t border-[#E5E7EB] mt-16 fade-in">
          <div className="relative">
            <div className="absolute inset-0 flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-r from-[#3B82F6]/5 to-[#10B981]/5 rounded-full blur-xl"></div>
            </div>
            
            <p className="text-base text-[#374151] font-medium relative z-10">
              جميع الحقوق محفوظة © Pearson BTEC International Qualifications 2025
              <br />
              <span className="text-[#6B7280] text-sm mt-2 block">
                BTEC is a registered trademark of Pearson Education Limited
              </span>
            </p>
            
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-2 h-2 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </footer>
      </div>

      {/* تأثيرات CSS مخصصة */}
      <style>
        {`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (max-width: 768px) {
          .sticky {
            position: relative;
            top: 0;
          }
        }
        `}
      </style>
    </section>
  );
};

export default AboutSection;