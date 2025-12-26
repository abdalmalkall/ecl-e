import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar as CalendarIcon,
  Clock,
  Bell,
  ChevronRight,
  ChevronLeft,
  Users,
  BookOpen,
  GraduationCap,
  Award,
  Trophy,
  Star,
  Sparkles,
  Target,
  Zap,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Bookmark,
  Share2,
  Download
} from "lucide-react";

const CalendarSection = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [activeEvent, setActiveEvent] = useState<number | null>(0);
  
  const months = [
    "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
    "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];

  const currentYear = new Date().getFullYear();
  
  const events = [
    {
      id: 1,
      date: "1 سبتمبر",
      title: "بداية الفصل الدراسي الأول 2025",
      description: "بداية العام الدراسي الجديد مع انطلاق كافة البرامج والأنشطة",
      type: "بداية",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      day: "الأحد",
      time: "08:00 صباحاً",
      category: "عام",
      priority: "عالية",
      participants: 1200
    },
    {
      id: 2,
      date: "15 أكتوبر", 
      title: "امتحانات منتصف الفصل الدراسي",
      description: "امتحانات منتصف الفصل لجميع المراحل الدراسية والتخصصات",
      type: "امتحانات",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      day: "الثلاثاء",
      time: "09:00 صباحاً",
      category: "أكاديمي",
      priority: "عالية",
      participants: 950
    },
    {
      id: 3,
      date: "20 ديسمبر",
      title: "نهاية الفصل الدراسي الأول",
      description: "اختتام الفصل الدراسي الأول وإجازة منتصف العام",
      type: "نهاية",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      day: "الجمعة",
      time: "12:00 ظهراً",
      category: "عام",
      priority: "متوسطة",
      participants: 1300
    },
    {
      id: 4,
      date: "15 يناير",
      title: "بداية الفصل الدراسي الثاني",
      description: "انطلاق الفصل الدراسي الثاني مع برامج جديدة وأنشطة",
      type: "بداية",
      icon: <Target className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      day: "الأربعاء",
      time: "08:00 صباحاً",
      category: "عام",
      priority: "عالية",
      participants: 1250
    },
    {
      id: 5,
      date: "10 مارس",
      title: "الأسبوع الثقافي والعلمي",
      description: "أسبوع مكثف للمسابقات العلمية والأنشطة الثقافية",
      type: "فعاليات",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-red-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
      day: "السبت",
      time: "10:00 صباحاً",
      category: "ثقافي",
      priority: "متوسطة",
      participants: 800
    },
    {
      id: 6,
      date: "15 مايو",
      title: "امتحانات نهاية العام",
      description: "امتحانات الفصل الدراسي الثاني لجميع المراحل",
      type: "امتحانات",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-indigo-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-indigo-50 to-violet-50",
      day: "الخميس",
      time: "09:00 صباحاً",
      category: "أكاديمي",
      priority: "عالية",
      participants: 1000
    }
  ];

  const upcomingEvents = [
    { id: 1, title: "ورشة الذكاء الاصطناعي", date: "25 يناير", status: "قريب" },
    { id: 2, title: "يوم المهن والتخصصات", date: "5 فبراير", status: "مقبل" },
    { id: 3, title: "مسابقة الروبوتات", date: "15 فبراير", status: "مقبل" },
    { id: 4, title: "معرض الإبداع الطلابي", date: "1 مارس", status: "قريب" }
  ];

  const calendarDays = [
    "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"
  ];

  useEffect(() => {
    // Set first event as active by default
    if (events.length > 0 && activeEvent === null) {
      setActiveEvent(events[0].id);
    }
  }, []);

  const handlePrevMonth = () => {
    setCurrentMonth(prev => prev === 0 ? 11 : prev - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => prev === 11 ? 0 : prev + 1);
  };

  const getActiveEvent = () => {
    return events.find(event => event.id === activeEvent) || events[0];
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl mb-6">
            <div className="p-4 bg-white rounded-xl shadow-lg">
              <CalendarIcon className="w-12 h-12 text-emerald-600" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-600 bg-clip-text text-transparent">
              التقويم الدراسي 2025
            </span>
            <span className="block text-slate-700 mt-2 text-xl md:text-2xl">
              تتبع أهم المواعيد والفعاليات الأكاديمية
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            خطط لمستقبلك التعليمي مع التقويم الدراسي الشامل لأهم الأحداث والمواعيد
          </p>
          
          {/* Decorative line */}
          <div className="relative w-48 h-1 mx-auto mt-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full blur-sm"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {/* Left Column - Calendar Events */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="group cursor-pointer"
                  onClick={() => setActiveEvent(event.id)}
                >
                  <Card className={`h-full border border-slate-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg ${activeEvent === event.id ? 'ring-2 ring-emerald-500 ring-offset-2' : ''}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl ${event.bgColor}`}>
                          {event.icon}
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge 
                            className={`mb-2 bg-gradient-to-r ${event.color} text-white`}
                          >
                            {event.type}
                          </Badge>
                          <div className="text-xs text-slate-500">{event.category}</div>
                        </div>
                      </div>
                      
                      {/* Date Circle */}
                      <div className="relative mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} mx-auto flex items-center justify-center text-white font-bold text-xl mb-2 relative`}>
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                            <Star className="w-3 h-3 text-yellow-500" />
                          </div>
                          {event.date.split(' ')[0]}
                        </div>
                        <div className="text-center text-sm text-slate-600 font-medium">
                          {event.date.split(' ')[1]}
                        </div>
                      </div>
                      
                      <CardTitle className="text-center text-lg md:text-xl text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                        {event.title}
                      </CardTitle>
                      
                      <p className="text-center text-sm text-slate-600 line-clamp-2">
                        {event.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{event.day}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bell className="w-3 h-3" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Users className="w-3 h-3" />
                          <span>{event.participants} مشارك</span>
                        </div>
                        <Badge variant="outline" className={`text-xs ${event.priority === 'عالية' ? 'border-red-200 text-red-600' : 'border-slate-200'}`}>
                          {event.priority === 'عالية' && <AlertCircle className="w-3 h-3 ml-1" />}
                          {event.priority}
                        </Badge>
                      </div>
                      
                      {/* Active indicator */}
                      {activeEvent === event.id && (
                        <div className="mt-3 pt-3 border-t border-emerald-100">
                          <div className="flex items-center justify-center gap-2 text-xs text-emerald-600">
                            <Sparkles className="w-3 h-3 animate-pulse" />
                            <span>محدد حالياً</span>
                            <ChevronRight className="w-3 h-3" />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Calendar & Details */}
          <div className="lg:col-span-1 space-y-6">
            {/* Calendar Widget */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-full blur-2xl"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <CalendarIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">التقويم</CardTitle>
                      <p className="text-sm text-slate-300">{currentYear}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:bg-white/10"
                      onClick={handlePrevMonth}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <div className="px-3 py-1 bg-white/10 rounded-lg text-sm font-medium">
                      {months[currentMonth]}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-white hover:bg-white/10"
                      onClick={handleNextMonth}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {calendarDays.map((day) => (
                    <div key={day} className="text-center text-xs text-slate-400 font-medium py-2">
                      {day.charAt(0)}
                    </div>
                  ))}
                </div>
                
                {/* Calendar Numbers */}
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 42 }, (_, i) => {
                    const day = i - 2; // Adjust for starting day
                    const isCurrent = day === new Date().getDate() && currentMonth === new Date().getMonth();
                    const hasEvent = day > 0 && day <= 31 && [1, 15, 20].includes(day);
                    
                    return (
                      <div
                        key={i}
                        className={`text-center text-sm py-2 rounded ${day > 0 && day <= 31
                          ? `text-white hover:bg-white/10 cursor-pointer ${isCurrent ? 'bg-emerald-500 text-white' : ''} ${hasEvent ? 'relative' : ''}`
                          : 'text-slate-600'
                        }`}
                      >
                        {day > 0 && day <= 31 ? day : ''}
                        {hasEvent && (
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardHeader>
            </Card>

            {/* Event Details */}
            <Card className="border border-slate-200 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 rounded-lg">
                      <Zap className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">تفاصيل الفعالية</CardTitle>
                      <p className="text-sm text-slate-500">معلومات مفصلة عن الحدث</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Bookmark className="w-4 h-4 ml-2" />
                    حفظ
                  </Button>
                </div>
                
                {getActiveEvent() && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">التاريخ</div>
                      <div className="font-semibold">{getActiveEvent().date}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">اليوم</div>
                      <div className="font-semibold">{getActiveEvent().day}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">الوقت</div>
                      <div className="font-semibold">{getActiveEvent().time}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">النوع</div>
                      <Badge className={`bg-gradient-to-r ${getActiveEvent().color}`}>
                        {getActiveEvent().type}
                      </Badge>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-slate-700">المشاركون المتوقعون</div>
                        <div className="font-bold text-emerald-600">{getActiveEvent().participants}+</div>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-emerald-400 to-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(getActiveEvent().participants / 15, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex gap-3">
                  <Button className="flex-1" variant="outline">
                    <Share2 className="w-4 h-4 ml-2" />
                    مشاركة
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700">
                    <Download className="w-4 h-4 ml-2" />
                    تحميل
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border border-slate-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">فعاليات قادمة</CardTitle>
                    <p className="text-sm text-slate-500">أهم الأحداث المقبلة</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                          <CalendarIcon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">{event.title}</div>
                          <div className="text-xs text-slate-500">{event.date}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {event.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 p-8 bg-gradient-to-r from-emerald-50 via-green-50 to-cyan-50 rounded-2xl border border-emerald-100 shadow-lg max-w-4xl mx-auto">
            <div className="p-4 bg-white rounded-xl shadow-md">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </div>
            <div className="text-right flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">خطط لعام دراسي ناجح!</h3>
              <p className="text-slate-600 mb-4">
                حمل التقويم الدراسي الكامل وابقَ على اطلاع بجميع الفعاليات والمواعيد المهمة
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                <Button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold shadow-lg">
                  <Download className="w-4 h-4 ml-2" />
                  تحميل التقويم الكامل
                </Button>
                <Button variant="outline" className="px-6 py-3 border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                  <Bell className="w-4 h-4 ml-2" />
                  تفعيل التذكيرات
                </Button>
              </div>
            </div>
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

export default CalendarSection;