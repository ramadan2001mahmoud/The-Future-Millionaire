const appsConfig = [
    // ========== تطبيقات تواصل (8) ==========
    { 
        id: "whatsapp", packageName: "com.whatsapp", category: "تواصل", icon: "fab fa-whatsapp", name: "WhatsApp", 
        downloadLink: "https://apkpure.net/whatsapp-messenger/com.whatsapp/download",
        manualVersion: "2.24.8.85", manualSize: "45 MB", manualDownloads: "5B+", manualDeveloper: "Meta",
        manualFeatures: ["مراسلة فورية مشفرة", "مكالمات صوتية وفيديو", "مشاركة الموقع والملفات", "مكالمات جماعية", "حالة (قصص) يومية"],
        manualDescription: "تطبيق المراسلة الفورية الأشهر في العالم. يستخدمه أكثر من 2 مليار شخص حول العالم."
    },
    { 
        id: "telegram", packageName: "org.telegram.messenger", category: "تواصل", icon: "fab fa-telegram", name: "Telegram", 
        downloadLink: "https://apkpure.net/telegram/org.telegram.messenger/download",
        manualVersion: "10.9.1", manualSize: "72 MB", manualDownloads: "1B+", manualDeveloper: "Telegram FZ-LLC",
        manualFeatures: ["قنوات ومجموعات غير محدودة", "بوتات ذكية", "مشاركة ملفات حتى 2GB", "تشفير المحادثات السرية", "سحابة مجانية"],
        manualDescription: "تطبيق مراسلة آمن وسريع مع بوتات متقدمة وميزات فائقة السرعة."
    },
    { 
        id: "facebook", packageName: "com.facebook.katana", category: "تواصل", icon: "fab fa-facebook", name: "Facebook", 
        downloadLink: "https://apkpure.net/facebook/com.facebook.katana/download",
        manualVersion: "460.0.0", manualSize: "82 MB", manualDownloads: "10B+", manualDeveloper: "Meta",
        manualFeatures: ["مشاركة المنشورات", "مشاهدة الريلز", "مجموعات وصفحات", "بث مباشر", "سوق"],
        manualDescription: "تطبيق التواصل الاجتماعي الأكبر في العالم. تواصل مع الأصدقاء والعائلة."
    },
    { 
        id: "instagram", packageName: "com.instagram.android", category: "تواصل", icon: "fab fa-instagram", name: "Instagram", 
        downloadLink: "https://apkpure.net/instagram/com.instagram.android/download",
        manualVersion: "332.0.0", manualSize: "68 MB", manualDownloads: "5B+", manualDeveloper: "Meta",
        manualFeatures: ["مشاركة الصور والفيديوهات", "قصص وريلز", "رسائل مباشرة", "فلترات وعدسات", "تسوق"],
        manualDescription: "مشاركة الصور والفيديوهات مع الأصدقاء. قصص وريلز وبث مباشر."
    },
    { 
        id: "twitter", packageName: "com.twitter.android", category: "تواصل", icon: "fab fa-twitter", name: "Twitter", 
        downloadLink: "https://apkpure.net/twitter/com.twitter.android/download",
        manualVersion: "10.45.0", manualSize: "58 MB", manualDownloads: "1B+", manualDeveloper: "X Corp",
        manualFeatures: ["تغريدات ووسوم", "مقاطع فيديو", "مساحات صوتية", "قوائم مخصصة", "إشارات مرجعية"],
        manualDescription: "منصة التدوين المصغر والأخبار العاجلة. تابع الأحداث أول بأول."
    },
    { 
        id: "snapchat", packageName: "com.snapchat.android", category: "تواصل", icon: "fab fa-snapchat", name: "Snapchat", 
        downloadLink: "https://apkpure.net/snapchat/com.snapchat.android/download",
        manualVersion: "12.85.0", manualSize: "125 MB", manualDownloads: "500M+", manualDeveloper: "Snap Inc",
        manualFeatures: ["لقطات مؤقتة", "فلتر وعدسات", "خريطة سناب", "قصص", "دردشة"],
        manualDescription: "تطبيق الصور والفيديوهات المؤقتة. أضف فلاتر وعدسات ممتعة."
    },
    { 
        id: "discord", packageName: "com.discord", category: "تواصل", icon: "fab fa-discord", name: "Discord", 
        downloadLink: "https://apkpure.net/discord/com.discord/download",
        manualVersion: "242.0", manualSize: "95 MB", manualDownloads: "500M+", manualDeveloper: "Discord Inc",
        manualFeatures: ["خوادم وقنوات", "مكالمات صوتية", "بث مباشر", "بوتات", "مشاركة شاشة"],
        manualDescription: "منصة المحادثة الصوتية والنصية للجيمرز والمجتمعات."
    },
    { 
        id: "signal", packageName: "org.thoughtcrime.securesms", category: "تواصل", icon: "fas fa-lock", name: "Signal", 
        downloadLink: "https://apkpure.net/signal/org.thoughtcrime.securesms/download",
        manualVersion: "7.8.0", manualSize: "48 MB", manualDownloads: "100M+", manualDeveloper: "Signal Foundation",
        manualFeatures: ["تشفير كامل", "رسائل تختفي", "مكالمات آمنة", "مصدر مفتوح", "بدون إعلانات"],
        manualDescription: "تطبيق مراسلة آمن ومشفر بالكامل. خصوصية تامة."
    },
    
    // ========== ألعاب (20) ==========
    { 
        id: "pubg", packageName: "com.tencent.ig", category: "ألعاب", icon: "fas fa-crosshairs", name: "PUBG Mobile", 
        downloadLink: "https://apkpure.net/pubg-mobile/com.tencent.ig/download",
        manualVersion: "3.4.0", manualSize: "1.2 GB", manualDownloads: "1B+", manualDeveloper: "Tencent",
        manualFeatures: ["100 لاعب في مباراة", "رسومات واقعية", "أسلحة متعددة", "مركبات", "طور الساحة"],
        manualDescription: "لعبة الباتل رويال الشهيرة. ناجاة 100 لاعب على جزيرة."
    },
    { 
        id: "free-fire", packageName: "com.dts.freefiremax", category: "ألعاب", icon: "fas fa-fire", name: "Free Fire MAX", 
        downloadLink: "https://apkpure.net/free-fire-max/com.dts.freefiremax/download",
        manualVersion: "2.107.0", manualSize: "850 MB", manualDownloads: "1B+", manualDeveloper: "Garena",
        manualFeatures: ["50 لاعب", "مباريات سريعة", "رسومات HD", "أسلحة متنوعة", "شخصيات فريدة"],
        manualDescription: "لعبة الباتل رويال السريعة. مباريات 10 دقائق."
    },
    { 
        id: "call-of-duty", packageName: "com.activision.callofduty.shooter", category: "ألعاب", icon: "fas fa-gun", name: "Call of Duty Mobile", 
        downloadLink: "https://apkpure.net/call-of-duty-mobile/com.activision.callofduty.shooter/download",
        manualVersion: "1.9.0", manualSize: "1.5 GB", manualDownloads: "500M+", manualDeveloper: "Activision",
        manualFeatures: ["طور المعركة", "باتل رويال", "أسلحة حقيقية", "خرائط كلاسيكية", "تخصيص الأسلحة"],
        manualDescription: "لعبة إطلاق النار الاحترافية من سلسلة Call of Duty."
    },
    { 
        id: "clash-of-clans", packageName: "com.supercell.clashofclans", category: "ألعاب", icon: "fas fa-chess-king", name: "Clash of Clans", 
        downloadLink: "https://apkpure.net/clash-of-clans/com.supercell.clashofclans/download",
        manualVersion: "16.0.0", manualSize: "320 MB", manualDownloads: "500M+", manualDeveloper: "Supercell",
        manualFeatures: ["بناء القرية", "هجمات اللاعبين", "تحالفات", "أبطال", "أحداث أسبوعية"],
        manualDescription: "لعبة بناء القرى والحروب. درب جيشك وشن الهجمات."
    },
    { 
        id: "clash-royale", packageName: "com.supercell.clashroyale", category: "ألعاب", icon: "fas fa-chess", name: "Clash Royale", 
        downloadLink: "https://apkpure.net/clash-royale/com.supercell.clashroyale/download",
        manualVersion: "3.6.0", manualSize: "240 MB", manualDownloads: "100M+", manualDeveloper: "Supercell",
        manualFeatures: ["بطاقات قابلة للتطور", "معارك لحظية", "عشائر", "بطولات", "بطاقات البطل"],
        manualDescription: "لعبة بطاقات استراتيجية من عالم Clash of Clans."
    },
    { 
        id: "mobile-legends", packageName: "com.mobile.legends", category: "ألعاب", icon: "fas fa-users", name: "Mobile Legends", 
        downloadLink: "https://apkpure.net/mobile-legends/com.mobile.legends/download",
        manualVersion: "1.8.0", manualSize: "450 MB", manualDownloads: "500M+", manualDeveloper: "Moonton",
        manualFeatures: ["5v5", "أبطال متنوعون", "طور الترتيب", "عشائر", "أحداث يومية"],
        manualDescription: "لعبة MOBA الشهيرة. أبطال متنوعون ومهارات رائعة."
    },
    { 
        id: "brawl-stars", packageName: "com.supercell.brawlstars", category: "ألعاب", icon: "fas fa-fist-raised", name: "Brawl Stars", 
        downloadLink: "https://apkpure.net/brawl-stars/com.supercell.brawlstars/download",
        manualVersion: "55.0", manualSize: "350 MB", manualDownloads: "100M+", manualDeveloper: "Supercell",
        manualFeatures: ["طور المعركة", "جمع الأحجار", "السيطرة", "أبطال فريدون", "أحداث محدودة"],
        manualDescription: "لعبة قتال سريعة. معارك 3v3 مع أبطال متنوعين."
    },
    { 
        id: "candy-crush", packageName: "com.king.candycrushsaga", category: "ألعاب", icon: "fas fa-candy-cane", name: "Candy Crush Saga", 
        downloadLink: "https://apkpure.net/candy-crush-saga/com.king.candycrushsaga/download",
        manualVersion: "1.270.0", manualSize: "180 MB", manualDownloads: "500M+", manualDeveloper: "King",
        manualFeatures: ["آلاف المستويات", "عززات", "أحداث أسبوعية", "صعوبة متدرجة", "رسومات زاهية"],
        manualDescription: "لعبة الألغاز الشهيرة. آلاف المستويات وحلوى لذيذة."
    },
    { 
        id: "subway-surfers", packageName: "com.kiloo.subwaysurf", category: "ألعاب", icon: "fas fa-subway", name: "Subway Surfers", 
        downloadLink: "https://apkpure.net/subway-surfers/com.kiloo.subwaysurf/download",
        manualVersion: "3.34.0", manualSize: "150 MB", manualDownloads: "1B+", manualDeveloper: "Sybo",
        manualFeatures: ["جري لا نهائي", "لوحات تزلج", "أبطال متعددون", "أحداث محدودة", "مهمات يومية"],
        manualDescription: "لعبة الجري الكلاسيكية. اهرب من المفتش واجمع العملات."
    },
    { 
        id: "temple-run", packageName: "com.imangi.templerun2", category: "ألعاب", icon: "fas fa-running", name: "Temple Run 2", 
        downloadLink: "https://apkpure.net/temple-run-2/com.imangi.templerun2/download",
        manualVersion: "1.80.0", manualSize: "120 MB", manualDownloads: "500M+", manualDeveloper: "Imangi",
        manualFeatures: ["جري لا نهائي", "أبطال متعددون", "عززات", "مهمات", "أحداث"],
        manualDescription: "لعبة الجري والمغامرة. اهرب من القرود واجمع العملات الذهبية."
    },
    { 
        id: "asphalt-9", packageName: "com.gameloft.android.ANMP.GloftA9HM", category: "ألعاب", icon: "fas fa-car-side", name: "Asphalt 9", 
        downloadLink: "https://apkpure.net/asphalt-9/com.gameloft.android.ANMP.GloftA9HM/download",
        manualVersion: "4.3.0", manualSize: "2.5 GB", manualDownloads: "100M+", manualDeveloper: "Gameloft",
        manualFeatures: ["سيارات حقيقية", "مسارات عالمية", "طور المهنة", "سباقات متعددة", "تخصيص السيارات"],
        manualDescription: "لعبة سباقات سيارات. سيارات خيالية ومسارات حقيقية."
    },
    { 
        id: "minecraft", packageName: "com.mojang.minecraftpe", category: "ألعاب", icon: "fas fa-cube", name: "Minecraft", 
        downloadLink: "https://apkpure.net/minecraft/com.mojang.minecraftpe/download",
        manualVersion: "1.20.0", manualSize: "400 MB", manualDownloads: "100M+", manualDeveloper: "Mojang",
        manualFeatures: ["عالم مفتوح", "بناء وإبداع", "وضع البقاء", "وضع الإبداع", "متعددة اللاعبين"],
        manualDescription: "لعبة البناء والإبداع. عالم مفتوح، ابني أي شيء تريد."
    },
    { 
        id: "roblox", packageName: "com.roblox.client", category: "ألعاب", icon: "fas fa-gamepad", name: "Roblox", 
        downloadLink: "https://apkpure.net/roblox/com.roblox.client/download",
        manualVersion: "2.610.0", manualSize: "200 MB", manualDownloads: "100M+", manualDeveloper: "Roblox",
        manualFeatures: ["آلاف الألعاب", "إنشاء ألعابك الخاصة", "أفاتار قابل للتخصيص", "لعب مع الأصدقاء"],
        manualDescription: "منصة ألعاب متعددة. آلاف الألعاب داخل لعبة واحدة."
    },
    { 
        id: "among-us", packageName: "com.innersloth.spacemafia", category: "ألعاب", icon: "fas fa-user-astronaut", name: "Among Us", 
        downloadLink: "https://apkpure.net/among-us/com.innersloth.spacemafia/download",
        manualVersion: "2024.8.0", manualSize: "250 MB", manualDownloads: "500M+", manualDeveloper: "Innersloth",
        manualFeatures: ["4-15 لاعب", "مهمات", "اجتماعات طارئة", "تخصيص الشخصية", "خرائط متعددة"],
        manualDescription: "لعبة الخيانة الجماعية. اكتشف المحتال قبل فوات الأوان."
    },
    { 
        id: "genshin-impact", packageName: "com.miHoYo.GenshinImpact", category: "ألعاب", icon: "fas fa-dragon", name: "Genshin Impact", 
        downloadLink: "https://apkpure.net/genshin-impact/com.miHoYo.GenshinImpact/download",
        manualVersion: "5.0.0", manualSize: "3.5 GB", manualDownloads: "50M+", manualDeveloper: "HoYoverse",
        manualFeatures: ["عالم مفتوح", "شخصيات متعددة", "عناصر متفاعلة", "معارك تكتيكية", "تحديثات مستمرة"],
        manualDescription: "لعبة تقمص أدوار عالم مفتوح. رسومات أنمي ومعارك ممتعة."
    },
    { 
        id: "fall-guys", packageName: "com.mediatonic.fallguys", category: "ألعاب", icon: "fas fa-running", name: "Fall Guys", 
        downloadLink: "https://apkpure.net/fall-guys/com.mediatonic.fallguys/download",
        manualVersion: "1.0.0", manualSize: "1.8 GB", manualDownloads: "50M+", manualDeveloper: "Mediatonic",
        manualFeatures: ["معارك جماعية", "عوائق مضحكة", "تخصيص الشخصية", "أحداث موسمية", "لعب مع الأصدقاء"],
        manualDescription: "لعبة العوائق الجماعية. تنافس مع 60 لاعباً في تحديات مضحكة."
    },
    { 
        id: "pubg-new-state", packageName: "com.pubg.newstate", category: "ألعاب", icon: "fas fa-crosshairs", name: "PUBG New State", 
        downloadLink: "https://apkpure.net/pubg-new-state/com.pubg.newstate/download",
        manualVersion: "1.5.0", manualSize: "1.4 GB", manualDownloads: "100M+", manualDeveloper: "Krafton",
        manualFeatures: ["رسومات محسنة", "أسلحة مستقبلية", "مركبات جديدة", "طور المستقبل", "معارك 100 لاعب"],
        manualDescription: "النسخة الجديدة من PUBG مع رسومات محسنة وأسلحة مستقبلية."
    },
    { 
        id: "cod-warzone", packageName: "com.activision.warzone", category: "ألعاب", icon: "fas fa-gun", name: "COD Warzone Mobile", 
        downloadLink: "https://apkpure.net/cod-warzone/com.activision.warzone/download",
        manualVersion: "1.0.0", manualSize: "2.0 GB", manualDownloads: "50M+", manualDeveloper: "Activision",
        manualFeatures: ["باتل رويال", "رسومات واقعية", "أسلحة مخصصة", "مركبات", "طور الفريق"],
        manualDescription: "نسخة وارزون من Call of Duty للهاتف المحمول."
    },
    { 
        id: "rainbow-six", packageName: "com.ubisoft.rainbowsixm", category: "ألعاب", icon: "fas fa-shield", name: "Rainbow Six Mobile", 
        downloadLink: "https://apkpure.net/rainbow-six/com.ubisoft.rainbowsixm/download",
        manualVersion: "1.0.0", manualSize: "1.6 GB", manualDownloads: "20M+", manualDeveloper: "Ubisoft",
        manualFeatures: ["عمليات تكتيكية", "شخصيات فريدة", "أسلحة متخصصة", "خرائط متعددة", "طور الفريق"],
        manualDescription: "لعبة إطلاق نار تكتيكية من سلسلة Rainbow Six الشهيرة."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = appsConfig;
} else {
    window.appsConfig = appsConfig;
}
