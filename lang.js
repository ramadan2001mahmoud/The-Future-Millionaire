// ============================================
//  ملف الترجمة (العربية - الإنجليزية)
// ============================================

const translations = {
    ar: {
        // القائمة العلوية
        "nav.home": "الرئيسية",
        "nav.ai-tools": "أدوات الذكاء الاصطناعي",
        "nav.blog": "المدونة",
        "nav.courses": "الكورسات",
        "nav.apps": "تطبيقات وألعاب",
        "nav.login": "تسجيل الدخول",
        "nav.dashboard": "لوحة التحكم",
        "nav.logout": "تسجيل خروج",
        "nav.search": "ابحث عن أداة...",
        
        // القسم الرئيسي
        "hero.title": "مستقبل الذكاء الاصطناعي",
        "hero.title.gold": "بين يديك",
        "hero.subtitle": "أكثر من 90+ أداة ذكاء اصطناعي متطورة في مكان واحد. اختر، جرب، وابدع.",
        "hero.button": "استكشف الأدوات",
        
        // الإحصائيات
        "stats.tools": "أداة ذكاء اصطناعي",
        "stats.clicks": "إجمالي النقرات",
        "stats.users": "إجمالي المستخدمين",
        
        // الفلاتر
        "filter.all": "الكل",
        
        // الأدوات
        "tool.try": "تجربة الآن",
        "tool.click": "نقرة",
        
        // الفوتر
        "footer.copyright": "جميع الحقوق محفوظة",
        "footer.terms": "شروط الاستخدام",
        "footer.privacy": "سياسة الخصوصية",
        "footer.visitors": "عدد زوار الموقع",
        
        // رسائل عامة
        "msg.no-tools": "😅 لا توجد أدوات في هذه الفئة حالياً",
        "msg.login-required": "يجب تسجيل الدخول لإضافة أدوات للمفضلة. هل تريد الذهاب لتسجيل الدخول؟",
        "msg.added-favorite": "✅ تم إضافة {tool} إلى المفضلة",
        "msg.removed-favorite": "🗑️ تم إزالة {tool} من المفضلة",
        "msg.welcome": "مرحباً {name}"
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.ai-tools": "AI Tools",
        "nav.blog": "Blog",
        "nav.courses": "Courses",
        "nav.apps": "Apps & Games",
        "nav.login": "Login",
        "nav.dashboard": "Dashboard",
        "nav.logout": "Logout",
        "nav.search": "Search for a tool...",
        
        // Hero section
        "hero.title": "The Future of Artificial Intelligence",
        "hero.title.gold": "In Your Hands",
        "hero.subtitle": "90+ advanced AI tools in one place. Choose, try, and create.",
        "hero.button": "Explore Tools",
        
        // Statistics
        "stats.tools": "AI Tools",
        "stats.clicks": "Total Clicks",
        "stats.users": "Total Users",
        
        // Filters
        "filter.all": "All",
        
        // Tools
        "tool.try": "Try Now",
        "tool.click": "click",
        
        // Footer
        "footer.copyright": "All Rights Reserved",
        "footer.terms": "Terms of Use",
        "footer.privacy": "Privacy Policy",
        "footer.visitors": "Website Visitors",
        
        // General messages
        "msg.no-tools": "😅 No tools in this category yet",
        "msg.login-required": "Please login to add tools to favorites. Go to login?",
        "msg.added-favorite": "✅ {tool} added to favorites",
        "msg.removed-favorite": "🗑️ {tool} removed from favorites",
        "msg.welcome": "Welcome {name}"
    }
};

// دالة للحصول على النص المترجم
function t(key, params = {}) {
    const lang = localStorage.getItem('language') || 'ar';
    let text = translations[lang][key] || key;
    
    // استبدال المتغيرات مثل {tool}
    for (const [paramKey, paramValue] of Object.entries(params)) {
        text = text.replace(`{${paramKey}}`, paramValue);
    }
    
    return text;
}

// دالة لتحديث واجهة المستخدم باللغة الجديدة
function updateUILanguage() {
    // تحديث النصوص التي لها id محدد
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
            el.textContent = t(key);
        }
    });
    
    // تحديث الـ placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key) {
            el.placeholder = t(key);
        }
    });
    
    // تحديث الـ buttons التي لها data-i18n
    document.querySelectorAll('[data-i18n-btn]').forEach(el => {
        const key = el.getAttribute('data-i18n-btn');
        if (key) {
            el.textContent = t(key);
        }
    });
    
    // تحديث زر تبديل اللغة
    const langToggle = document.getElementById('lang-toggle-btn');
    if (langToggle) {
        const currentLang = localStorage.getItem('language') || 'ar';
        langToggle.innerHTML = currentLang === 'ar' ? '🇺🇸 EN' : '🇪🇬 عربي';
    }
}

// دالة لتبديل اللغة
function switchLanguage() {
    const currentLang = localStorage.getItem('language') || 'ar';
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', newLang);
    updateUILanguage();
    
    // إعادة تحميل الأدوات لتحديث الفئات
    if (typeof buildDropdowns === 'function') {
        buildDropdowns();
    }
    if (typeof buildFilterButtons === 'function') {
        buildFilterButtons();
    }
    if (typeof displayTools === 'function') {
        displayTools(tools);
    }
}

// تهيئة اللغة عند تحميل الصفحة
function initLanguage() {
    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'ar');
    }
    updateUILanguage();
}
