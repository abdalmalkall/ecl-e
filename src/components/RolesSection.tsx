import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  UserCheck, 
  BookOpen, 
  Users, 
  Briefcase,
  BarChart,
  Target,
  Award,
  CheckCircle,
  Lock,
  FileText,
  Globe
} from "lucide-react";
import { ReactElement } from "react";

// تعريف نوع الدور
interface RoleCard {
  icon: ReactElement;
  title: string;
  description: string;
  permissions: string[];
  gradient: string;
  borderColor: string;
}

const RolesSection = () => {
  const roles: RoleCard[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "مدير النظام",
      description: "إدارة كاملة لمنصة BTEC والتقارير الإحصائية والصلاحيات",
      permissions: [
        "إدارة النظام بالكامل",
        "التقارير الإحصائية المتقدمة",
        "إدارة الشهادات والمؤهلات"
      ],
      gradient: "from-[#1E3A8A] to-[#3B82F6]",
      borderColor: "border-[#3B82F6]/20"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "مقيّم BTEC", 
      description: "تقييم المشاريع والتقارير وفق معايير بيرسون العالمية",
      permissions: [
        "تقييم المشاريع العملية",
        "مراجعة التقارير والتقييمات",
        "إعطاء درجات Pass/Merit/Distinction"
      ],
      gradient: "from-[#059669] to-[#10B981]",
      borderColor: "border-[#10B981]/20"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "طالب BTEC",
      description: "التعلم العملي وتقديم المشاريع والتقارير والمتابعة الدراسية",
      permissions: [
        "تقديم المشاريع العملية",
        "تحميل التقارير والمهام",
        "متابعة التقييمات والدرجات"
      ],
      gradient: "from-[#7C3AED] to-[#8B5CF6]",
      borderColor: "border-[#8B5CF6]/20"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "معلم BTEC",
      description: "توجيه الطلاب وإدارة الوحدات التعليمية وتطوير المحتوى",
      permissions: [
        "توجيه المشاريع العملية",
        "إدارة الوحدات التعليمية",
        "تطوير المحتوى التطبيقي"
      ],
      gradient: "from-[#DC2626] to-[#EF4444]",
      borderColor: "border-[#EF4444]/20"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "منسق البرنامج",
      description: "تنسيق برامج BTEC وضمان الجودة والتواصل مع بيرسون",
      permissions: [
        "تنسيق البرامج والتخصصات",
        "مراقبة جودة التطبيق",
        "التواصل مع بيرسون العالمية"
      ],
      gradient: "from-[#D97706] to-[#F59E0B]",
      borderColor: "border-[#F59E0B]/20"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "مراقب الجودة",
      description: "مراقبة جودة التقييم وضمان تطبيق المعايير العالمية",
      permissions: [
        "مراقبة معايير التقييم",
        "ضمان الجودة والاتساق",
        "التقارير الإحصائية للجودة"
      ],
      gradient: "from-[#475569] to-[#64748B]",
      borderColor: "border-[#64748B]/20"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "مسؤول الأمن",
      description: "إدارة أمن البيانات وحماية المعلومات والصلاحيات",
      permissions: [
        "حماية بيانات النظام",
        "إدارة صلاحيات الوصول",
        "مراقبة الأمان والخصوصية"
      ],
      gradient: "from-[#7C2D12] to-[#9A3412]",
      borderColor: "border-[#9A3412]/20"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "مشرف الشهادات",
      description: "إصدار الشهادات وإدارتها والتحقق منها",
      permissions: [
        "إصدار شهادات BTEC",
        "إدارة قاعدة بيانات الشهادات",
        "التحقق من صحة الشهادات"
      ],
      gradient: "from-[#5B21B6] to-[#7C3AED]",
      borderColor: "border-[#7C3AED]/20"
    }
  ];

  // تعريف معايير تقييم BTEC
  const btecCriteria = [
    { level: "Pass", description: "يحقق المتطلبات الأساسية للمعايير", color: "text-[#059669]" },
    { level: "Merit", description: "يتجاوز المتطلبات بشكل ملحوظ", color: "text-[#2563EB]" },
    { level: "Distinction", description: "أداء استثنائي ومتميز", color: "text-[#7C3AED]" }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]">
      <div className="container-custom">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] rounded-2xl mb-6 shadow-lg">
            <Lock className="w-12 h-12 text-[#1E3A8A]" />
          </div>
          
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent">
            نظام الصلاحيات المتكامل
          </h2>
          
          <h3 className="text-3xl font-semibold text-[#374151] mb-6">
            إدارة الوصول حسب الدور في نظام BTEC
          </h3>
          
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            صلاحيات محددة لكل مستخدم لضمان كفاءة العملية التعليمية التطبيقية والحفاظ على معايير بيرسون العالمية
          </p>
          
          {/* معلومات عن معايير التقييم */}
          <div className="mt-10 inline-flex flex-wrap justify-center gap-4">
            {btecCriteria.map((criterion, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-[#E5E7EB]">
                <CheckCircle className={`w-5 h-5 ${criterion.color}`} />
                <span className="font-bold text-[#374151]">{criterion.level}</span>
                <span className="text-sm text-[#6B7280]">: {criterion.description}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* بطاقات الأدوار */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border-2 ${role.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group`}
            >
              {/* خلفية متدرجة */}
              <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className={`p-4 bg-gradient-to-br ${role.gradient} rounded-2xl text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {role.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-[#1E3A8A] text-center">
                  {role.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <p className="text-sm text-[#6B7280] text-center leading-relaxed">
                  {role.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#374151]">
                    <FileText className="w-4 h-4 text-[#8B5CF6]" />
                    <span>الصلاحيات الممنوحة:</span>
                  </div>
                  
                  <div className="space-y-2">
                    {role.permissions.map((permission, permIndex) => (
                      <div key={permIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]"></div>
                        <span className="text-sm text-[#6B7280] text-right flex-1">
                          {permission}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* خط زخرفي */}
                <div className="pt-4 border-t border-[#E5E7EB]">
                  <div className="text-xs text-[#8B5CF6] font-medium text-center">
                    نظام BTEC - معايير بيرسون العالمية
                  </div>
                </div>
              </CardContent>
              
              {/* زوايا زخرفية */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#3B82F6]/30 rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#10B981]/30 rounded-bl-xl"></div>
            </Card>
          ))}
        </div>
        
        {/* ملاحظة مهمة */}
        <div className="mt-16 p-6 bg-gradient-to-r from-[#FEF3C7] to-[#FDE68A] rounded-2xl border border-[#F59E0B]/30">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-[#D97706] flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-[#92400E] mb-2">معلومات أمنية هامة:</h4>
              <p className="text-[#92400E]/80 text-sm leading-relaxed">
                نظام BTEC يتبع معايير أمنية صارمة لحماية البيانات التعليمية والتقييمات. 
                جميع الصلاحيات تخضع لمراجعة دورية لضمان الامتثال لمعايير بيرسون العالمية.
                يتم تسجيل جميع الأنشطة لأغراض التدقيق وتحسين الجودة.
              </p>
            </div>
          </div>
        </div>
        
        {/* إحصائيات */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-[#E5E7EB]">
            <div className="text-3xl font-bold text-[#1E3A8A] mb-2">8+</div>
            <div className="text-[#374151] font-medium">أدوار مختلفة</div>
            <div className="text-sm text-[#6B7280] mt-1">تغطي جميع جوانب النظام</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-[#E5E7EB]">
            <div className="text-3xl font-bold text-[#059669] mb-2">256-bit</div>
            <div className="text-[#374151] font-medium">تشفير البيانات</div>
            <div className="text-sm text-[#6B7280] mt-1">حماية كاملة للمعلومات</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-[#E5E7EB]">
            <div className="text-3xl font-bold text-[#7C3AED] mb-2">24/7</div>
            <div className="text-[#374151] font-medium">مراقبة النظام</div>
            <div className="text-sm text-[#6B7280] mt-1">لضمان الاستمرارية</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;