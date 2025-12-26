import React, { useState, useEffect } from 'react';

const SmartLearnApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [userProgress, setUserProgress] = useState({
    points: 0,
    level: 1,
    badges: [],
    completedSkills: [],
    dailyStreak: 0
  });
  
  // بيانات المهارات
  const skillsData = [
    {
      id: 1,
      title: "القراءة",
      icon: "📖",
      description: "تحسين مهارات القراءة وفهم النصوص",
      difficulty: "متوسط",
      btecLevel: "Level 1",
      completed: false,
      score: null
    },
    {
      id: 2,
      title: "الكتابة",
      icon: "✏️",
      description: "تطوير مهارات التعبير الكتابي والهجاء",
      difficulty: "متوسط",
      btecLevel: "Level 1",
      completed: false,
      score: null
    },
    {
      id: 3,
      title: "الحساب",
      icon: "🧮",
      description: "تحسين المهارات الحسابية والرياضية",
      difficulty: "متوسط",
      btecLevel: "Level 1",
      completed: false,
      score: null
    },
    {
      id: 4,
      title: "التركيز",
      icon: "🎯",
      description: "تمارين لتحسين الانتباه والتركيز",
      difficulty: "سهل",
      btecLevel: "Entry Level",
      completed: false,
      score: null
    },
    {
      id: 5,
      title: "الذاكرة",
      icon: "🧠",
      description: "تدريب الذاكرة قصيرة وطويلة المدى",
      difficulty: "سهل",
      btecLevel: "Entry Level",
      completed: false,
      score: null
    },
    {
      id: 6,
      title: "التواصل",
      icon: "💬",
      description: "تطوير مهارات التعبير والتواصل الشفوي",
      difficulty: "متوسط",
      btecLevel: "Level 1",
      completed: false,
      score: null
    }
  ];

  // تحديات يومية
  const dailyChallenges = [
    {
      id: 1,
      title: "تحدي التركيز",
      description: "ابحث عن 5 اختلافات بين الصورتين",
      type: "visual",
      points: 50,
      completed: false
    },
    {
      id: 2,
      title: "تحدي الذاكرة",
      description: "تذكر تسلسل الألوان المعروض",
      type: "memory",
      points: 40,
      completed: false
    },
    {
      id: 3,
      title: "تحدي القراءة",
      description: "اقرأ النص وأجب عن سؤال الفهم",
      type: "reading",
      points: 60,
      completed: false
    }
  ];

  // تحديث التقدم
  const updateProgress = (points, badge = null, skillId = null) => {
    setUserProgress(prev => {
      const newProgress = { ...prev, points: prev.points + points };
      
      if (badge && !prev.badges.includes(badge)) {
        newProgress.badges = [...prev.badges, badge];
      }
      
      if (skillId && !prev.completedSkills.includes(skillId)) {
        newProgress.completedSkills = [...prev.completedSkills, skillId];
      }
      
      // زيادة المستوى كل 500 نقطة
      if (newProgress.points >= prev.level * 500) {
        newProgress.level = prev.level + 1;
      }
      
      return newProgress;
    });
  };

  // إكمال تحد يومي
  const completeDailyChallenge = (challengeId) => {
    const challenge = dailyChallenges.find(c => c.id === challengeId);
    if (challenge) {
      updateProgress(challenge.points);
    }
  };

  // إكمال مهارة
  const completeSkill = (skillId, grade) => {
    updateProgress(100, `skill-${skillId}`, skillId);
  };

  // أنيميشن CSS inline
  const styles = {
    fadeIn: {
      animation: 'fadeIn 0.8s ease-out'
    },
    slideInUp: {
      animation: 'slideInUp 0.5s ease-out'
    }
  };

  // CSS animations as string
  const animationsCSS = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideInUp {
      from { transform: translateY(100px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `;

  // عرض القسم النشط
  const renderActiveSection = () => {
    switch(activeSection) {
      case 'skills':
        return <SkillsCards 
          skills={skillsData} 
          onCompleteSkill={completeSkill}
        />;
      case 'projects':
        return <Projects onCompleteProject={updateProgress} />;
      case 'challenges':
        return <DailyChallenges 
          challenges={dailyChallenges}
          onCompleteChallenge={completeDailyChallenge}
        />;
      case 'ai-test':
        return <AITest onCompleteTest={updateProgress} />;
      case 'dashboard':
        return <Dashboard userProgress={userProgress} skills={skillsData} />;
      default:
        return (
          <div className="text-center py-8 px-4">
            <div style={styles.fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">أهلًا بك في SmartLearn BTEC!</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                هنا ستتعلم بطريقة عملية، وتكتشف قدراتك، وتتدرّب على صعوبات التعلم خطوة خطوة.
              </p>
              
              <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-2xl shadow-xl max-w-2xl mx-auto mb-8">
                <h3 className="text-xl md:text-2xl font-bold">"تعلّم عملي – قيّم قدراتك – تطوّر بذكاء"</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-blue-500 mb-2">{skillsData.length}</div>
                  <div className="text-gray-600">مهارة أساسية</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-blue-500 mb-2">{dailyChallenges.length}</div>
                  <div className="text-gray-600">تحدي يومي</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-4xl font-bold text-blue-500 mb-2">{userProgress.level}</div>
                  <div className="text-gray-600">مستوى</div>
                </div>
              </div>
            </div>
            
            <div className="relative h-64 md:h-80 mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="absolute w-full h-full">
                {skillsData.slice(0, 3).map((skill, idx) => (
                  <div 
                    key={skill.id}
                    className="absolute bg-white p-4 rounded-xl shadow-lg flex flex-col items-center"
                    style={{
                      top: `${20 + idx * 30}%`,
                      left: `${10 + idx * 35}%`,
                      animation: 'float 3s infinite ease-in-out',
                      animationDelay: `${idx * 0.5}s`
                    }}
                  >
                    <span className="text-3xl mb-2">{skill.icon}</span>
                    <span className="font-medium">{skill.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {/* إضافة الأنيميشن كـ style tag */}
      <style>{animationsCSS}</style>
      
      <div className="min-h-screen flex flex-col rtl font-sans bg-gray-50">
        {/* شريط التنقل */}
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 md:p-6 lg:p-8 shadow-lg sticky top-0 z-50">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right">
              <h1 className="text-2xl md:text-3xl font-bold flex items-center justify-center md:justify-start gap-2">
                SmartLearn
                <span className="bg-white text-blue-500 px-2 py-1 rounded-lg text-xl">BTEC</span>
              </h1>
              <p className="text-sm md:text-base opacity-90 mt-1">الكتاب الذكي لصعوبات التعلم</p>
            </div>
            
            <nav className="flex flex-wrap justify-center gap-2">
              {[
                { id: 'home', icon: '🏠', text: 'الرئيسية' },
                { id: 'skills', icon: '🛠️', text: 'المهارات' },
                { id: 'projects', icon: '📂', text: 'مشاريعي' },
                { id: 'challenges', icon: '⚡', text: 'التحديات' },
                { id: 'ai-test', icon: '🤖', text: 'اختبار الذكاء' },
                { id: 'dashboard', icon: '📊', text: 'لوحتي' }
              ].map((item) => (
                <button
                  key={item.id}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    activeSection === item.id 
                      ? 'bg-white text-blue-500 font-bold shadow-md' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <span>{item.icon}</span>
                  <span className="hidden sm:inline">{item.text}</span>
                </button>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-sm mb-1">المستوى {userProgress.level}</div>
                <div className="w-24 h-2 bg-white/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-400 rounded-full transition-all duration-500"
                    style={{width: `${(userProgress.points % 500) / 5}%`}}
                  ></div>
                </div>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-lg flex flex-col items-center">
                <span className="text-xl font-bold">{userProgress.points}</span>
                <span className="text-sm">نقطة</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* المحتوى الرئيسي */}
        <main className="flex-1 container mx-auto p-4 md:p-6 lg:p-8">
          {renderActiveSection()}
        </main>
        
        {/* تذييل الصفحة */}
        <footer className="bg-gray-800 text-white p-6 text-center mt-auto">
          <p className="mb-2">SmartLearn BTEC - نظام تعليمي تفاعلي لصعوبات التعلم</p>
          <div className="flex justify-center gap-4">
            <button className="hover:text-blue-300 transition-colors">المساعدة</button>
            <button className="hover:text-blue-300 transition-colors">الإعدادات</button>
            <button className="hover:text-blue-300 transition-colors">شارك التقدم</button>
          </div>
        </footer>
        
        {/* إشعار التحدي اليومي */}
        {activeSection === 'home' && (
          <div 
            className="fixed bottom-6 left-6 bg-white rounded-xl shadow-2xl z-40 max-w-md"
            style={styles.slideInUp}
          >
            <div className="p-4 flex items-center gap-3">
              <span className="text-3xl">🔔</span>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 m-0">تحدي جديد ينتظرك!</h4>
                <p className="text-gray-600 text-sm m-0">لديك {dailyChallenges.length} تحديات يومية لم تكملها</p>
              </div>
              <button 
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors"
                onClick={() => setActiveSection('challenges')}
              >
                ابدأ التحدي
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// مكون المهارات الأساسية - معدل لـ Tailwind
const SkillsCards = ({ skills, onCompleteSkill }) => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [exerciseResult, setExerciseResult] = useState(null);

  const exercises = {
    1: {
      type: "matching",
      title: "مطابقة الكلمات مع الصور",
      description: "اسحب الكلمة إلى الصورة المناسبة",
      items: [
        { word: "تفاحة", image: "🍎" },
        { word: "كتاب", image: "📚" },
        { word: "قلم", image: "✏️" },
        { word: "كرة", image: "⚽" }
      ]
    },
    2: {
      type: "fill-blanks",
      title: "أكمل الجملة",
      description: "اختر الكلمة المناسبة لإكمال الجملة",
      sentence: "الطالب _____ في دفتره",
      options: ["يكتب", "يقرأ", "يرسم", "يحسب"],
      correct: "يكتب"
    },
    3: {
      type: "drag-drop",
      title: "ترتيب الأرقام",
      description: "رتب الأرقام من الأصغر إلى الأكبر",
      numbers: [5, 2, 8, 1, 3]
    }
  };

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);
    setExerciseResult(null);
  };

  const handleExerciseComplete = (grade) => {
    setExerciseResult(grade);
    if (onCompleteSkill && activeSkill) {
      onCompleteSkill(activeSkill.id, grade);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">المهارات الأساسية</h2>
      <p className="text-gray-600 text-center mb-8">اختر مهارة للتدريب عليها</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(skill => (
          <div 
            key={skill.id} 
            className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
              skill.completed ? 'border-green-500' : 'border-transparent'
            } ${activeSkill?.id === skill.id ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => handleSkillClick(skill)}
          >
            <div className="text-5xl text-center mb-4">{skill.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{skill.title}</h3>
            <p className="text-gray-600 text-center mb-4">{skill.description}</p>
            <div className="flex justify-between items-center">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">{skill.difficulty}</span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{skill.btecLevel}</span>
            </div>
            {skill.completed && (
              <div className="mt-4 bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm text-center">
                ✔ مكتمل
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* تمرين تفاعلي */}
      {activeSkill && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
              <h3 className="text-2xl font-bold">تمرين: {activeSkill.title}</h3>
              <button 
                className="text-2xl text-gray-500 hover:text-gray-800"
                onClick={() => setActiveSkill(null)}
              >
                ✕
              </button>
            </div>
            
            {exercises[activeSkill.id] ? (
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{exercises[activeSkill.id].title}</h4>
                <p className="text-gray-600 mb-6">{exercises[activeSkill.id].description}</p>
                
                {/* عرض التمرين حسب النوع */}
                {exercises[activeSkill.id].type === "matching" && (
                  <div className="space-y-4">
                    <div className="text-center text-gray-700 mb-4">اسحب الكلمة إلى الصورة المناسبة</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exercises[activeSkill.id].items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                          <div className="bg-white px-4 py-3 rounded-lg shadow cursor-move">
                            {item.word}
                          </div>
                          <div className="text-4xl">
                            {item.image}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {exercises[activeSkill.id].type === "fill-blanks" && (
                  <div className="p-6 bg-gray-50 rounded-xl">
                    <div className="text-xl">
                      {exercises[activeSkill.id].sentence}
                      <select className="mr-2 px-3 py-2 border rounded-lg bg-white">
                        {exercises[activeSkill.id].options.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-4 mt-8">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    🎤 سجل صوتك
                  </button>
                  <button 
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
                    onClick={() => handleExerciseComplete('Merit')}
                  >
                    قدّم الإجابة
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center">
                <p className="text-gray-600">سيتم إضافة التمرين قريبًا...</p>
              </div>
            )}
            
            {/* عرض النتيجة */}
            {exerciseResult && (
              <div className={`p-6 m-6 rounded-xl ${
                exerciseResult === 'Distinction' ? 'bg-purple-50 border border-purple-200' :
                exerciseResult === 'Merit' ? 'bg-blue-50 border border-blue-200' :
                'bg-green-50 border border-green-200'
              }`}>
                <h4 className="text-xl font-bold mb-2">نتيجة التقييم: {exerciseResult}</h4>
                <p className="mb-4">مستوى BTEC: {exerciseResult}</p>
                <div className="text-3xl mb-6">
                  {exerciseResult === 'Distinction' && '⭐⭐⭐'}
                  {exerciseResult === 'Merit' && '⭐⭐'}
                  {exerciseResult === 'Pass' && '⭐'}
                </div>
                <button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors"
                  onClick={() => {
                    setActiveSkill(null);
                    setExerciseResult(null);
                  }}
                >
                  استمر إلى المهارة التالية
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// بقية المكونات معدلة بنفس الطريقة لتستخدم Tailwind inline...

// مكون المشاريع العملية
const Projects = ({ onCompleteProject }) => {
  const [projects] = useState([
    {
      id: 1,
      title: "إعداد تقرير قصير",
      description: "قم بإعداد تقرير قصير عن موضوع يومي",
      btecLevel: "Level 1",
      completed: false,
      type: "report"
    },
    {
      id: 2,
      title: "حل مشكلة حياتية",
      description: "حل مشكلة رياضية بسيطة من الحياة اليومية",
      btecLevel: "Level 1",
      completed: false,
      type: "problem"
    },
    {
      id: 3,
      title: "عرض تقديمي",
      description: "أنشئ عرضًا تقديميًا عن هوايتك المفضلة",
      btecLevel: "Level 2",
      completed: false,
      type: "presentation"
    }
  ]);

  const [activeProject, setActiveProject] = useState(null);

  const handleProjectSubmit = () => {
    if (onCompleteProject && activeProject) {
      onCompleteProject(200, `project-${activeProject.id}`);
    }
    setActiveProject(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">المشاريع العملية</h2>
      <p className="text-gray-600 text-center mb-8">طبق مهاراتك في مشاريع عملية</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
            onClick={() => setActiveProject(project)}
          >
            <div className="text-5xl text-center mb-4">
              {project.type === 'report' ? '📄' : project.type === 'problem' ? '🧩' : '📊'}
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{project.title}</h3>
            <p className="text-gray-600 text-center mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">{project.btecLevel}</span>
              {project.completed && <span className="text-2xl">🏆</span>}
            </div>
          </div>
        ))}
      </div>
      
      {/* مشروع تفاعلي - مخفف */}
      {activeProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{activeProject.title}</h3>
              <p className="text-gray-600 mb-6">{activeProject.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">اكتب تقريرك هنا:</h4>
                  <textarea 
                    className="w-full p-3 border rounded-lg h-32"
                    placeholder="اكتب تقريرك هنا..."
                  />
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">تقييم AI سيقوم بتحليل:</h4>
                  <ul className="list-disc pr-4 space-y-1 text-gray-600">
                    <li>نقاط القوة في مشروعك</li>
                    <li>نقاط التحسين</li>
                    <li>مستوى BTEC المقترح</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <button 
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition-colors"
                  onClick={() => setActiveProject(null)}
                >
                  إلغاء
                </button>
                <button 
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
                  onClick={handleProjectSubmit}
                >
                  قدّم المشروع
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// مكون التحديات اليومية
const DailyChallenges = ({ challenges, onCompleteChallenge }) => {
  const [activeChallenge, setActiveChallenge] = useState(null);

  const handleCompleteChallenge = () => {
    if (onCompleteChallenge && activeChallenge) {
      onCompleteChallenge(activeChallenge.id);
    }
    setActiveChallenge(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">التحديات اليومية</h2>
      <p className="text-gray-600 text-center mb-4">تدرب يوميًا لتحافظ على تقدمك</p>
      
      <div className="text-center mb-8">
        <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">عدد الأيام المتتالية: 3 أيام 🔥</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {challenges.map(challenge => (
          <div 
            key={challenge.id} 
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
            onClick={() => setActiveChallenge(challenge)}
          >
            <div className="text-5xl text-center mb-4">
              {challenge.type === 'visual' ? '👁️' : challenge.type === 'memory' ? '🧠' : '📖'}
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{challenge.title}</h3>
            <p className="text-gray-600 text-center mb-4">{challenge.description}</p>
            <div className="flex justify-between items-center">
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">{challenge.points} نقطة</span>
              {challenge.completed && <span className="text-green-500">✔ مكتمل</span>}
            </div>
          </div>
        ))}
      </div>
      
      {/* تحدي تفاعلي - مخفف */}
      {activeChallenge && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{activeChallenge.title}</h3>
              <p className="text-gray-600 mb-6">{activeChallenge.description}</p>
              
              <div className="p-6 bg-gray-50 rounded-lg mb-6">
                <p className="text-center mb-4">هذا مثال مبسط للتمرين</p>
                <div className="text-center text-4xl">
                  {activeChallenge.type === 'visual' && '🖼️ 🖼️'}
                  {activeChallenge.type === 'memory' && '🔴 🟢 🔵 🟡 🟣'}
                  {activeChallenge.type === 'reading' && '📚'}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button 
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-medium transition-colors"
                  onClick={() => setActiveChallenge(null)}
                >
                  إلغاء
                </button>
                <button 
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition-colors"
                  onClick={handleCompleteChallenge}
                >
                  أكمل التحدي
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// مكون اختبار الذكاء
const AITest = ({ onCompleteTest }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [testCompleted, setTestCompleted] = useState(false);
  
  const questions = [
    {
      id: 1,
      text: "ما الرقم التالي في التسلسل: 2, 4, 6, 8, ...؟",
      type: "logic",
      options: ["9", "10", "12", "14"],
      correct: 1
    },
    {
      id: 2,
      text: "إذا كان اليوم هو الإثنين، فما هو اليوم بعد غد؟",
      type: "logic",
      options: ["الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
      correct: 1
    }
  ];
  
  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTestCompleted(true);
      if (onCompleteTest) {
        const correctAnswers = newAnswers.filter((ans, idx) => ans === questions[idx].correct).length;
        const points = correctAnswers * 75;
        onCompleteTest(points, 'ai-test-completed');
      }
    }
  };
  
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">اختبار الذكاء / AI</h2>
      <p className="text-gray-600 text-center mb-8">اختبر مهاراتك وحصل على تقرير شخصي</p>
      
      {!testCompleted ? (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
          <div className="mb-8">
            <div className="flex justify-between mb-1">
              <span>التقدم</span>
              <span>سؤال {currentQuestion + 1} من {questions.length}</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{width: `${((currentQuestion + 1) / questions.length) * 100}%`}}
              ></div>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-end mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {questions[currentQuestion].type === 'logic' ? '🤔 منطقي' : '🧮 رياضي'}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-center">{questions[currentQuestion].text}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="p-4 text-right bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-xl transition-all duration-300 hover:border-blue-300 hover:shadow-md"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🎊</div>
            <h3 className="text-2xl font-bold mb-2">أكملت الاختبار!</h3>
            <p className="text-gray-600">هذه هي نتائجك:</p>
          </div>
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white">
              <div>
                <div className="text-3xl font-bold">75%</div>
                <div className="text-sm opacity-90">درجة الاختبار</div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="font-bold mb-4">تقرير AI الذكي:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 rounded-xl">
                <h5 className="font-bold text-green-700 mb-2">نقاط القوة:</h5>
                <ul className="list-disc pr-4 space-y-1 text-green-600">
                  <li>مهارات منطقية جيدة</li>
                  <li>فهم سريع للمسائل البسيطة</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-50 rounded-xl">
                <h5 className="font-bold text-yellow-700 mb-2">نقاط التحسين:</h5>
                <ul className="list-disc pr-4 space-y-1 text-yellow-600">
                  <li>التركيز على التفاصيل الدقيقة</li>
                  <li>ممارسة المزيد من المسائل الرياضية</li>
                </ul>
              </div>
            </div>
          </div>
          
          <button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-medium transition-colors"
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers([]);
              setTestCompleted(false);
            }}
          >
            أعد الاختبار
          </button>
        </div>
      )}
    </div>
  );
};

// مكون لوحة التحكم
const Dashboard = ({ userProgress, skills }) => {
  const completedSkillsCount = skills.filter(s => s.completed).length;
  const totalSkills = skills.length;
  
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">لوحة التقييم</h2>
      <p className="text-gray-600 text-center mb-8">تابع تقدمك وإنجازاتك</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* الإحصائيات */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6 text-center">إحصائياتك العامة</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-500">{userProgress.points}</div>
              <div className="text-gray-600">النقاط</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-500">{userProgress.level}</div>
              <div className="text-gray-600">المستوى</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-500">{completedSkillsCount}/{totalSkills}</div>
              <div className="text-gray-600">المهارات</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <div className="text-3xl font-bold text-blue-500">{userProgress.dailyStreak}</div>
              <div className="text-gray-600">الأيام المتتالية</div>
            </div>
          </div>
        </div>
        
        {/* المهارات */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6 text-center">تقدم المهارات</h3>
          <div className="space-y-4">
            {skills.map(skill => (
              <div key={skill.id} className="flex items-center gap-4">
                <span className="font-medium flex-1">{skill.title}</span>
                <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{width: skill.completed ? '100%' : '30%'}}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-20">
                  {skill.completed ? 'مكتمل' : 'قيد التقدم'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* مشاركة */}
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-4 text-center">شارك تقدمك</h3>
        <p className="text-gray-600 text-center mb-6">يمكنك مشاركة تقرير تقدمك مع معلمك أو ولي أمرك</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2">
            📧 أرسل بالبريد
          </button>
          <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors flex items-center gap-2">
            🖨️ طباعة التقرير
          </button>
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center gap-2">
            📱 مشاركة
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartLearnApp;