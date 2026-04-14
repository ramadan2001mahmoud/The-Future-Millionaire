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
        "tool.try": "تجربة الآن",
        "tool.click": "نقرة",
        "footer.copyright": "جميع الحقوق محفوظة",
        "footer.terms": "شروط الاستخدام",
        "footer.privacy": "سياسة الخصوصية",
        "footer.visitors": "عدد زوار الموقع",
        "msg.no-tools": "😅 لا توجد أدوات في هذه الفئة حالياً"
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
        "tool.try": "Try Now",
        "tool.click": "click",
        "footer.copyright": "All Rights Reserved",
        "footer.terms": "Terms of Use",
        "footer.privacy": "Privacy Policy",
        "footer.visitors": "Website Visitors",
        "msg.no-tools": "😅 No tools in this category yet"
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
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
        const currentLang = localStorage.getItem('language') || 'ar';
        langBtn.innerHTML = currentLang === 'ar' ? '🇺🇸 EN' : '🇪🇬 عربي';
    }
}

function switchLanguage() {
    const currentLang = localStorage.getItem('language') || 'ar';
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('language', newLang);
    location.reload();
}

function initLanguage() {
    if (!localStorage.getItem('language')) localStorage.setItem('language', 'ar');
    updateUILanguage();
}

window.t = t;
window.updateUILanguage = updateUILanguage;
window.switchLanguage = switchLanguage;
window.initLanguage = initLanguage;
