import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Calendar, 
  Award, 
  Users, 
  Megaphone,
  AlertCircle,
  ChevronLeft,
  Clock,
  ExternalLink,
  Sparkles,
  TrendingUp,
  FileText
} from "lucide-react";

const AnnouncementsSection = () => {
  const [activeAnnouncement, setActiveAnnouncement] = useState<number | null>(null);
  
  const announcements = [
    {
      id: 1,
      title: "بدء التسجيل للفصل الدراسي الجديد 2025",
      description: "يبدأ التسجيل للفصل الدراسي الجديد اعتباراً من الأحد القادم. يرجى استكمال الإجراءات عبر المنصة الإلكترونية.",
      icon: <Calendar className="w-8 h-8" />,
      type: "جديد",
      urgent: true,
      date: "15 يناير 2025",
      time: "10:00 صباحاً",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      link: "#register"
    },
    {
      id: 2,
      title: "نتائج الفصل الدراسي السابق متاحة الآن",
      description: "تم رفع نتائج الفصل الدراسي الأول على المنصة. يمكن للطلاب وأولياء الأمور الاطلاع عليها.",
      icon: <Award className="w-8 h-8" />,
      type: "نتائج",
      urgent: false,
      date: "12 يناير 2025",
      time: "03:00 مساءً",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      link: "#results"
    },
    {
      id: 3,
      title: "اجتماع أولياء الأمور الخميس المقبل",
      description: "اجتماع أولياء الأمور سيعقد يوم الخميس القادم في القاعة الرئيسية. الحضور إلزامي.",
      icon: <Users className="w-8 h-8" />,
      type: "اجتماع",
      urgent: true,
      date: "16 يناير 2025",
      time: "11:00 صباحاً",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      link: "#meeting"
    },
    {
      id: 4,
      title: "ورشة عمل في مهارات القرن 21",
      description: "ورشة مجانية للطلاب حول مهارات المستقبل والتكنولوجيا الحديثة.",
      icon: <TrendingUp className="w-8 h-8" />,
      type: "ورشة",
      urgent: false,
      date: "20 يناير 2025",
      time: "09:00 صباحاً",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      link: "#workshop"
    },
    {
      id: 5,
      title: "إطلاق المكتبة الرقمية الجديدة",
      description: "المكتبة الرقمية متاحة الآن مع أكثر من 1000 كتاب ومرجع تعليمي.",
      icon: <FileText className="w-8 h-8" />,
      type: "مكتبة",
      urgent: false,
      date: "18 يناير 2025",
      time: "08:00 صباحاً",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      link: "#library"
    },
    {
      id: 6,
      title: "نظام الدوام الإلكتروني المحدث",
      description: "تم تحديث نظام تسجيل الحضور والانصراف الإلكتروني بمميزات جديدة.",
      icon: <Clock className="w-8 h-8" />,
      type: "تحديث",
      urgent: false,
      date: "14 يناير 2025",
      time: "02:00 مساءً",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
      link: "#attendance"
    }
  ];

  const stats = [
    { label: "إعلان نشط", value: "12", icon: <Bell className="w-5 h-5" /> },
    { label: "قيد التنفيذ", value: "8", icon: <Clock className="w-5 h-5" /> },
    { label: "مكتملة", value: "24", icon: <Award className="w-5 h-5" /> },
    { label: "قادمة", value: "6", icon: <Calendar className="w-5 h-5" /> }
  ];

  useEffect(() => {
    // Set first announcement as active by default
    if (announcements.length > 0 && activeAnnouncement === null) {
      setActiveAnnouncement(1);
    }
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl mb-6">
            <div className="p-4 bg-white rounded-xl shadow-lg">
              <Megaphone className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              الإعلانات والملاحظات
            </span>
            <span className="block text-slate-700 mt-2 text-xl md:text-2xl">آخر التحديثات والمستجدات المهمة</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            ابقَ على اطلاع دائم بآخر الإعلانات والتحديثات والأنشطة في منصتنا التعليمية
          </p>
          
          {/* Decorative line */}
          <div className="relative w-48 h-1 mx-auto mt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 md:mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</div>
              </div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {/* Left Column - Announcements List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="group cursor-pointer"
                  onClick={() => setActiveAnnouncement(announcement.id)}
                >
                  <Card className={`h-full border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg ${activeAnnouncement === announcement.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl ${announcement.bgColor}`}>
                          {announcement.icon}
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge 
                            className={`mb-2 ${announcement.urgent ? 'bg-gradient-to-r from-red-500 to-rose-600' : 'bg-gradient-to-r from-slate-500 to-slate-600'}`}
                          >
                            {announcement.urgent && (
                              <AlertCircle className="w-3 h-3 ml-1" />
                            )}
                            {announcement.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span>{announcement.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <CardTitle className="text-right text-lg md:text-xl text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {announcement.title}
                      </CardTitle>
                      
                      <p className="text-right text-sm text-slate-600 line-clamp-2">
                        {announcement.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-slate-500">
                          {announcement.time}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <span className="flex items-center gap-1">
                            اقرأ المزيد
                            <ChevronLeft className="w-4 h-4" />
                          </span>
                        </Button>
                      </div>
                      
                      {/* Active indicator */}
                      {activeAnnouncement === announcement.id && (
                        <div className="mt-3 pt-3 border-t border-blue-100">
                          <div className="flex items-center gap-2 text-xs text-blue-600">
                            <Sparkles className="w-3 h-3 animate-pulse" />
                            <span>الإعلان الحالي النشط</span>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Active Announcement Details */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6 border-0 shadow-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
              {/* Background effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">تفاصيل الإعلان</CardTitle>
                    <p className="text-sm text-slate-300 mt-1">معلومات مفصلة عن الإعلان المحدد</p>
                  </div>
                </div>
                
                {activeAnnouncement ? (
                  (() => {
                    const active = announcements.find(a => a.id === activeAnnouncement);
                    if (!active) return null;
                    
                    return (
                      <>
                        <div className={`p-4 rounded-xl ${active.bgColor} mb-6`}>
                          <div className="flex items-center justify-between mb-4">
                            <Badge className={`${active.urgent ? 'bg-red-500' : 'bg-slate-600'}`}>
                              {active.type}
                            </Badge>
                            <div className="text-slate-900 font-semibold">
                              {active.icon}
                            </div>
                          </div>
                          
                          <h3 className="text-lg font-bold text-slate-900 mb-2 text-right">
                            {active.title}
                          </h3>
                          
                          <p className="text-sm text-slate-700 text-right">
                            {active.description}
                          </p>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-slate-300">التاريخ</span>
                            <span className="font-semibold">{active.date}</span>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-slate-300">الوقت</span>
                            <span className="font-semibold">{active.time}</span>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span className="text-slate-300">الأهمية</span>
                            <span className={`font-semibold ${active.urgent ? 'text-red-400' : 'text-green-400'}`}>
                              {active.urgent ? 'عاجل' : 'عادي'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <Button
                            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-lg"
                            onClick={() => window.open(active.link, '_blank')}
                          >
                            <span className="flex items-center justify-center gap-2">
                              الانتقال إلى التفاصيل
                              <ExternalLink className="w-4 h-4" />
                            </span>
                          </Button>
                        </div>
                      </>
                    );
                  })()
                ) : (
                  <div className="text-center py-8">
                    <div className="p-4 bg-white/10 rounded-full inline-flex mb-4">
                      <Bell className="w-8 h-8 text-slate-400" />
                    </div>
                    <p className="text-slate-400">اختر إعلاناً لعرض التفاصيل</p>
                  </div>
                )}
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <div className="p-3 bg-white rounded-xl shadow-sm">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <h3 className="text-xl font-bold text-slate-900 mb-1">لا تفوت أي تحديث!</h3>
              <p className="text-slate-600">اشترك في نشرتنا البريدية لتصلك آخر الإعلانات</p>
            </div>
            <Button
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('#subscribe', '_blank')}
            >
              اشترك الآن
            </Button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AnnouncementsSection;