// ============================================
//  ملف الترجمة
// ============================================

const translations = {
    ar: {
        "nav.home": "الرئيسية",
        "nav.ai-tools": "أدوات الذكاء الاصطناعي",
        "nav.blog": "المدونة",
        "nav.courses": "الكورسات",
        "nav.apps": "تطبيقات وألعاب",
        "nav.login": "تسجيل الدخول",
        "nav.dashboard": "لوحة التحكم",
        "nav.logout": "تسجيل خروج",
        "nav.search": "ابحث عن أداة...",
        "hero.title": "مستقبل الذكاء الاصطناعي",
        "hero.title.gold": "بين يديك",
        "hero.subtitle": "أكثر من 90+ أداة ذكاء اصطناعي متطورة في مكان واحد. اختر، جرب، وابدع.",
        "hero.button": "استكشف الأدوات",
        "stats.tools": "أداة ذكاء اصطناعي",
        "stats.clicks": "إجمالي النقرات",
        "stats.users": "إجمالي المستخدمين",
        "filter.all": "الكل",
        "category.text": "نصوص",
        "category.image": "صور",
        "category.video": "فيديو",
        "category.audio": "صوت",
        "category.programming": "برمجة",
        "category.analysis": "تحليل",
        "category.productivity": "إنتاجية",
        "category.marketing": "تسويق",
        "category.design": "تصميم",
        "category.games": "ألعاب",
        "tool.try": "تجربة الآن",
        "tool.click": "نقرة",
        "footer.copyright": "جميع الحقوق محفوظة",
        "footer.terms": "شروط الاستخدام",
        "footer.privacy": "سياسة الخصوصية",
        "footer.visitors": "عدد زوار الموقع",
        "msg.no-tools": "😅 لا توجد أدوات في هذه الفئة حالياً",
        "msg.login-required": "يجب تسجيل الدخول لإضافة أدوات للمفضلة. هل تريد الذهاب لتسجيل الدخول؟",
        "msg.added-favorite": "✅ تم إضافة {tool} إلى المفضلة",
        "msg.removed-favorite": "🗑️ تم إزالة {tool} من المفضلة",
        "msg.welcome": "مرحباً {name}"
    },
    en: {
        "nav.home": "Home",
        "nav.ai-tools": "AI Tools",
        "nav.blog": "Blog",
        "nav.courses": "Courses",
        "nav.apps": "Apps & Games",
        "nav.login": "Login",
        "nav.dashboard": "Dashboard",
        "nav.logout": "Logout",
        "nav.search": "Search for a tool...",
        "hero.title": "The Future of Artificial Intelligence",
        "hero.title.gold": "In Your Hands",
        "hero.subtitle": "90+ advanced AI tools in one place. Choose, try, and create.",
        "hero.button": "Explore Tools",
        "stats.tools": "AI Tools",
        "stats.clicks": "Total Clicks",
        "stats.users": "Total Users",
        "filter.all": "All",
        "category.text": "Text",
        "category.image": "Image",
        "category.video": "Video",
        "category.audio": "Audio",
        "category.programming": "Programming",
        "category.analysis": "Analysis",
        "category.productivity": "Productivity",
        "category.marketing": "Marketing",
        "category.design": "Design",
        "category.games": "Games",
        "tool.try": "Try Now",
        "tool.click": "click",
        "footer.copyright": "All Rights Reserved",
        "footer.terms": "Terms of Use",
        "footer.privacy": "Privacy Policy",
        "footer.visitors": "Website Visitors",
        "msg.no-tools": "😅 No tools in this category yet",
        "msg.login-required": "Please login to add tools to favorites. Go to login?",
        "msg.added-favorite": "✅ {tool} added to favorites",
        "msg.removed-favorite": "🗑️ {tool} removed from favorites",
        "msg.welcome": "Welcome {name}"
    }
};

function t(key, params = {}) {
    const lang = localStorage.getItem('language') || 'ar';
    let text = translations[lang][key] || key;
    for (const [paramKey, paramValue] of Object.entries(params)) {
        text = text.replace(`{${paramKey}}`, paramValue);
    }
    return text;
}

function updateUILanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key) el.placeholder = t(key);
    });
    const langToggle = document.getElementById('lang-toggle-btn');
    if (langToggle) {
        const currentLang = localStorage.getItem('language') || 'ar';
        langToggle.innerHTML = currentLang === 'ar' ? '🇺🇸 EN' : '🇪🇬 عربي';
    }
    if (typeof updateDropdownCategories === 'function') updateDropdownCategories();
    if (typeof updateFilterButtonsLanguage === 'function') updateFilterButtonsLanguage();
}

function switchLanguage() {
    const currentLang = localStorage.getItem('language') || 'ar';
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', newLang);
    updateUILanguage();
    if (typeof buildDropdowns === 'function') buildDropdowns();
    if (typeof buildFilterButtons === 'function') buildFilterButtons();
    if (typeof displayTools === 'function') displayTools(tools);
}

function initLanguage() {
    if (!localStorage.getItem('language')) localStorage.setItem('language', 'ar');
    updateUILanguage();
}
