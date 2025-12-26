import { 
  Menu, 
  X, 
  Bell, 
  Search, 
  User, 
  Settings,
  Home,
  BookOpen,
  GraduationCap,
  Users,
  Target,
  MessageCircle,
  HelpCircle,
  Globe,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", label: "الرئيسية", icon: <Home className="w-4 h-4" /> },
    { id: "courses", label: "الدورات", icon: <BookOpen className="w-4 h-4" /> },
    { id: "learn", label: "التعلم", icon: <GraduationCap className="w-4 h-4" /> },
    { id: "community", label: "المجتمع", icon: <Users className="w-4 h-4" /> },
    { id: "paths", label: "المسارات", icon: <Target className="w-4 h-4" /> },
    { id: "support", label: "الدعم", icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const userMenu = [
    { label: "ملفي", icon: <User className="w-4 h-4" /> },
    { label: "الإشعارات", icon: <Bell className="w-4 h-4" /> },
    { label: "الإعدادات", icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-gradient-to-r from-slate-50 via-white to-slate-50 shadow-lg border-b border-slate-200 sticky top-0 left-0 w-full z-50 backdrop-blur-md bg-white/95">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="القائمة الرئيسية"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <div className="text-white text-xl md:text-2xl font-bold">E</div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-xl blur-md"></div>
              </div>

              {/* Brand Name */}
              <div className="text-right">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  منصة التواصل التعليمية
                </h1>
                <p className="text-xs md:text-sm text-slate-600 hidden md:block">
                  تعليم ذكي لمستقبل أفضل
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "secondary" : "ghost"}
                className={`gap-2 ${activeTab === item.id ? 'bg-blue-50 text-blue-700 border-blue-200' : 'hover:bg-slate-100'}`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </Button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Search Bar - Desktop */}
            <div className="hidden md:block relative w-64">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="ابحث عن دورة أو موضوع..."
                className="pr-10 bg-slate-50 border-slate-200 focus:border-blue-300"
              />
            </div>

            {/* Language Selector */}
            <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
              <Globe className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">عربي</span>
            </div>

            {/* Notifications */}
            <button className="p-2 rounded-lg hover:bg-slate-100 relative transition-colors">
              <Bell className="w-5 h-5 text-slate-700" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Messages */}
            <button className="p-2 rounded-lg hover:bg-slate-100 relative transition-colors hidden md:block">
              <MessageCircle className="w-5 h-5 text-slate-700" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <div className="relative group">
              <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-sm font-semibold">
                  م
                </div>
                <span className="hidden md:inline text-sm font-medium text-slate-700">حسابي</span>
              </button>
              
              {/* User Dropdown */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white">
                      م
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">المستخدم</div>
                      <div className="text-xs text-slate-500">user@example.com</div>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  {userMenu.map((item, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-right text-sm text-slate-700 transition-colors"
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="p-3 border-t border-slate-100">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                    تسجيل الخروج
                  </Button>
                </div>
              </div>
            </div>

            {/* Search Button - Mobile */}
            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
              <Search className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="ابحث عن دورة أو موضوع..."
              className="pr-10 bg-slate-50 border-slate-200"
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-200 animate-in slide-in-from-top-5 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile User Actions */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-around">
                <button className="flex flex-col items-center gap-1 p-2">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Globe className="w-4 h-4 text-slate-600" />
                  </div>
                  <span className="text-xs text-slate-600">اللغة</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-2">
                  <div className="p-2 bg-slate-100 rounded-lg relative">
                    <Bell className="w-4 h-4 text-slate-600" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </div>
                  <span className="text-xs text-slate-600">الإشعارات</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-2">
                  <div className="p-2 bg-slate-100 rounded-lg relative">
                    <MessageCircle className="w-4 h-4 text-slate-600" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <span className="text-xs text-slate-600">الرسائل</span>
                </button>
                <button className="flex flex-col items-center gap-1 p-2">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Settings className="w-4 h-4 text-slate-600" />
                  </div>
                  <span className="text-xs text-slate-600">الإعدادات</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
    </header>
  );
};

export default Header;