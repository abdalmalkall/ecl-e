import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Eye, 
  EyeOff, 
  LogIn, 
  BookOpen, 
  Mail, 
  Lock, 
  GraduationCap, 
  User, 
  Shield, 
  Users, 
  Building, 
  Sparkles, 
  Copy,
  Check,
  AlertCircle,
  Smartphone,
  Globe,
  Heart,
  Briefcase,
  Target,
  Award,
  Zap,
  BarChart
} from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();

  // جميع الإيميلات التجريبية لنظام BTEC
  const testEmails = [
    { email: "student@btec.edu", password: "Student123!", role: "طالب BTEC", icon: <GraduationCap className="w-4 h-4" /> },
    { email: "teacher@btec.edu", password: "Teacher123!", role: "معلم BTEC", icon: <User className="w-4 h-4" /> },
    { email: "assessor@btec.edu", password: "Assessor123!", role: "مقيّم BTEC", icon: <Target className="w-4 h-4" /> },
    { email: "coordinator@btec.edu", password: "Coordinator123!", role: "منسق البرنامج", icon: <Briefcase className="w-4 h-4" /> },
    { email: "admin@btec.edu", password: "Admin123!", role: "مدير النظام", icon: <Shield className="w-4 h-4" /> },
    { email: "quality@btec.edu", password: "Quality123!", role: "مراقب الجودة", icon: <BarChart className="w-4 h-4" /> },
    { email: "business@btec.edu", password: "Business123!", role: "تخصص إدارة الأعمال", icon: <Building className="w-4 h-4" /> },
    { email: "it@btec.edu", password: "IT123!", role: "تخصص تكنولوجيا المعلومات", icon: <Globe className="w-4 h-4" /> }
  ];

  // المستخدمون مع الصفحات
  const users = [
    { email: "student@btec.edu", password: "Student123!", redirect: "/student-dashboard", role: "طالب" },
    { email: "teacher@btec.edu", password: "Teacher123!", redirect: "/teacher-dashboard", role: "معلم" },
    { email: "assessor@btec.edu", password: "Assessor123!", redirect: "/assessor-dashboard", role: "مقيّم" },
    { email: "coordinator@btec.edu", password: "Coordinator123!", redirect: "/coordinator-dashboard", role: "منسق" },
    { email: "admin@btec.edu", password: "Admin123!", redirect: "/admin-dashboard", role: "مدير" },
    { email: "quality@btec.edu", password: "Quality123!", redirect: "/quality-dashboard", role: "جودة" },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"login" | "test">("login");

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) setCurrentUser(storedUser);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("currentUser", email);
        setCurrentUser(email);
        setLoading(false);
        navigate(foundUser.redirect);
      }, 1000);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const handleTestEmailClick = (testEmail: string, testPassword: string) => {
    setEmail(testEmail);
    setPassword(testPassword);
  };

  const handleCopyCredentials = (email: string, password: string) => {
    navigator.clipboard.writeText(`Email: ${email}\nPassword: ${password}`);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const handleQuickLogin = (testEmail: string, testPassword: string) => {
    const foundUser = users.find(user => user.email === testEmail);
    if (foundUser) {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("currentUser", testEmail);
        setCurrentUser(testEmail);
        setLoading(false);
        navigate(foundUser.redirect);
      }, 800);
    }
  };

  const handleExploreDemo = () => {
    navigate("/btec-demo");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F9FF] via-white to-[#EFF6FF] flex items-center justify-center p-4">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3B82F6]/10 to-[#1E40AF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#10B981]/10 to-[#059669]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#8B5CF6]/5 to-[#7C3AED]/5 rounded-full blur-2xl"></div>
      </div>

      {/* البطاقة الرئيسية */}
      <div className={`relative w-full max-w-5xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden transition-all duration-500 ${shake ? 'animate-shake' : ''}`}>
        {/* تصميم علوي */}
        <div className="bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#8B5CF6] p-8 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/30 via-white/50 to-white/30"></div>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full backdrop-blur-sm mb-6">
              <Award className="w-16 h-16" />
            </div>
            <h1 className="text-4xl font-black mb-3">نظام BTEC التعليمي العالمي</h1>
            <p className="text-lg opacity-90">التعلم التطبيقي المتميز - معايير بيرسون الدولية</p>
            <div className="flex justify-center gap-2 mt-4">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-sm">منصة التعليم المهني والتقني المعتمدة</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* قسم تسجيل الدخول */}
          <div className="p-10">
            {/* تبويبات */}
            <div className="flex mb-8 border-b border-[#E5E7EB]">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-3 font-bold text-lg transition-all duration-300 ${activeTab === "login" ? 'text-[#1E40AF] border-b-2 border-[#1E40AF]' : 'text-gray-500 hover:text-[#3B82F6]'}`}
              >
                <LogIn className="inline w-5 h-5 ml-2" />
                تسجيل الدخول
              </button>
              <button
                onClick={() => setActiveTab("test")}
                className={`flex-1 py-3 font-bold text-lg transition-all duration-300 ${activeTab === "test" ? 'text-[#1E40AF] border-b-2 border-[#1E40AF]' : 'text-gray-500 hover:text-[#3B82F6]'}`}
              >
                <Shield className="inline w-5 h-5 ml-2" />
                بيانات تجريبية
              </button>
            </div>

            {activeTab === "login" ? (
              <>
                <h2 className="text-2xl font-bold text-[#374151] mb-2">مرحباً بك في BTEC 👋</h2>
                <p className="text-gray-600 mb-8">أدخل بيانات الدخول للوصول إلى منصة التعليم التطبيقي</p>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      placeholder="البريد الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pr-12 pl-12 py-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="كلمة المرور"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pr-12 pl-12 py-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#1E40AF] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        جاري التحقق...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <LogIn className="ml-2 w-5 h-5" />
                        تسجيل الدخول
                      </span>
                    )}
                  </button>
                </form>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#E5E7EB]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">أو</span>
                  </div>
                </div>

                <button
                  onClick={handleExploreDemo}
                  className="w-full py-4 bg-gradient-to-r from-[#059669] to-[#10B981] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
                >
                  <BookOpen className="ml-2 w-5 h-5" />
                  استكشاف النظام التجريبي
                </button>

                {/* معلومات BTEC */}
                <div className="mt-8 p-4 bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] rounded-xl border border-[#E5E7EB]">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#1E40AF]" />
                    <span className="text-sm text-[#374151]">
                      نظام BTEC: التعليم التطبيقي الذي يربط التعليم بسوق العمل
                    </span>
                  </div>
                </div>
              </>
            ) : (
              /* قسم البيانات التجريبية */
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] p-5 rounded-2xl border border-[#E5E7EB]">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-[#1E40AF] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-[#374151] mb-2">معلومات عن بيانات الاختبار</h3>
                      <p className="text-sm text-gray-600">
                        هذه بيانات تجريبية لأنواع مختلفة من مستخدمي نظام BTEC. انقر على أي حساب لتعبئة البيانات تلقائياً، أو استخدم الدخول السريع.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2">
                  {testEmails.map((test, index) => (
                    <div
                      key={index}
                      className="group bg-white border border-[#E5E7EB] rounded-xl p-4 hover:border-[#3B82F6] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg ${index % 4 === 0 ? 'bg-gradient-to-r from-[#DBEAFE] to-[#BFDBFE]' : 
                            index % 4 === 1 ? 'bg-gradient-to-r from-[#DCFCE7] to-[#BBF7D0]' : 
                            index % 4 === 2 ? 'bg-gradient-to-r from-[#F3E8FF] to-[#E9D5FF]' : 
                            'bg-gradient-to-r from-[#FEE2E2] to-[#FECACA]'}`}>
                            {test.icon}
                          </div>
                          <span className="font-bold text-[#374151]">{test.role}</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleCopyCredentials(test.email, test.password)}
                            className="p-2 text-gray-500 hover:text-[#1E40AF] hover:bg-[#F3F4F6] rounded-lg transition-colors"
                            title="نسخ البيانات"
                          >
                            {copiedEmail === test.email ? (
                              <Check className="w-4 h-4 text-green-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            onClick={() => handleQuickLogin(test.email, test.password)}
                            className="px-3 py-1 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white text-sm rounded-lg hover:shadow-md transition-shadow"
                          >
                            دخول سريع
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div
                          onClick={() => handleTestEmailClick(test.email, test.password)}
                          className="p-3 bg-[#F9FAFB] rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">البريد الإلكتروني:</span>
                            <span className="font-mono text-[#374151] font-medium">{test.email}</span>
                          </div>
                        </div>
                        <div
                          onClick={() => handleTestEmailClick(test.email, test.password)}
                          className="p-3 bg-[#F9FAFB] rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">كلمة المرور:</span>
                            <span className="font-mono text-[#374151] font-medium">{test.password}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      const allData = testEmails.map(t => `${t.email} - ${t.password}`).join('\n');
                      navigator.clipboard.writeText(allData);
                      setCopiedEmail('all');
                      setTimeout(() => setCopiedEmail(null), 2000);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-xl hover:shadow-lg transition-all"
                  >
                    <Copy className="w-4 h-4" />
                    نسخ جميع البيانات
                    {copiedEmail === 'all' && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded ml-2 animate-pulse">
                        تم النسخ! ✓
                      </span>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* قسم الإيميلات التجريبية */}
          <div className="bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] p-10 border-r border-[#E5E7EB] lg:border-r-0 lg:border-l">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-[#3B82F6] to-[#1E40AF] rounded-xl">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#374151]">حسابات تجريبية BTEC</h2>
                <p className="text-gray-600">تجربة جميع أدوار نظام التعليم التطبيقي</p>
              </div>
            </div>

            <div className="space-y-4">
              {testEmails.map((email, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-white/40 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${index % 4 === 0 ? 'bg-gradient-to-r from-[#DBEAFE] to-[#BFDBFE]' : 
                        index % 4 === 1 ? 'bg-gradient-to-r from-[#DCFCE7] to-[#BBF7D0]' : 
                        index % 4 === 2 ? 'bg-gradient-to-r from-[#F3E8FF] to-[#E9D5FF]' : 
                        'bg-gradient-to-r from-[#FEE2E2] to-[#FECACA]'}`}>
                        {email.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#374151]">{email.role}</h4>
                        <p className="text-xs text-gray-500">نظام BTEC التعليمي التطبيقي</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleQuickLogin(email.email, email.password)}
                      className="px-4 py-2 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white text-sm rounded-lg hover:shadow-md transition-shadow transform hover:scale-105"
                    >
                      دخول مباشر
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">الإيميل:</span>
                      <span className="font-mono text-[#374151] bg-[#F9FAFB] px-3 py-1 rounded">{email.email}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">كلمة المرور:</span>
                      <span className="font-mono text-[#374151] bg-[#F9FAFB] px-3 py-1 rounded">{email.password}</span>
                    </div>
                  </div>

                  {/* خط متحرك */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              ))}
            </div>

            {/* قسم معلومات BTEC */}
            <div className="mt-8 pt-8 border-t border-[#E5E7EB]">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] rounded-lg">
                  <div className="text-sm font-bold text-[#1E40AF]">Pass/Merit/Distinction</div>
                  <div className="text-xs text-gray-600">نظام التقييم BTEC</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-[#DCFCE7] to-[#BBF7D0] rounded-lg">
                  <div className="text-sm font-bold text-[#059669]">130+ دولة</div>
                  <div className="text-xs text-gray-600">تطبق نظام BTEC</div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-[#FEF3C7] to-[#FDE68A] rounded-xl border border-[#F59E0B]/20">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-[#D97706]" />
                  <div>
                    <p className="font-bold text-[#92400E]">معلومة قيمة</p>
                    <p className="text-sm text-[#92400E]/80">
                      نظام BTEC معترف به عالمياً ويركز على المهارات العملية والتطبيقية
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* الفوتر */}
        <div className="bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9] p-6 text-center border-t border-[#E5E7EB]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#1E40AF]" />
              <span className="text-sm text-[#374151]">نظام BTEC التعليمي - معايير بيرسون العالمية</span>
            </div>
            <div className="text-sm text-[#6B7280]">
              © 2025 Pearson BTEC International Qualifications - جميع الحقوق محفوظة
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#3B82F6] animate-pulse" />
              <span className="text-sm text-[#6B7280]">التعلم التطبيقي للمستقبل</span>
            </div>
          </div>
        </div>
      </div>

      {/* تأثيرات CSS */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #F1F5F9;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: #3B82F6;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #1E40AF;
        }
      `}</style>
    </div>
  );
};

export default Auth;