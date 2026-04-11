const appsConfig = [
    // ========== تطبيقات تواصل (15) ==========
    { 
        id: "whatsapp", packageName: "com.whatsapp", category: "تواصل", icon: "fab fa-whatsapp", name: "WhatsApp", 
        downloadLink: "https://apkpure.net/whatsapp-messenger/com.whatsapp/download",
        manualVersion: "2.24.8.85", manualSize: "45 MB", manualDownloads: "5B+", manualDeveloper: "Meta",
        manualFeatures: ["مراسلة فورية مشفرة", "مكالمات صوتية وفيديو عالية الجودة", "مشاركة الموقع والملفات", "مكالمات جماعية تصل إلى 32 شخص", "حالة (قصص) وصور يومية", "إشعارات ذكية"],
        manualDescription: "تطبيق المراسلة الفورية الأشهر في العالم. يستخدمه أكثر من 2 مليار شخص حول العالم. يتيح إرسال الرسائل النصية والصور والفيديوهات وإجراء المكالمات الصوتية والمرئية بشكل آمن ومشفر."
    },
    { 
        id: "telegram", packageName: "org.telegram.messenger", category: "تواصل", icon: "fab fa-telegram", name: "Telegram", 
        downloadLink: "https://apkpure.net/telegram/org.telegram.messenger/download",
        manualVersion: "10.9.1", manualSize: "72 MB", manualDownloads: "1B+", manualDeveloper: "Telegram FZ-LLC",
        manualFeatures: ["قنوات ومجموعات غير محدودة الأعضاء", "بوتات ذكية قابلة للبرمجة", "مشاركة ملفات حتى 2GB", "تشفير المحادثات السرية", "تطبيق سريع وخفيف", "سحابة مجانية غير محدودة"],
        manualDescription: "تطبيق مراسلة آمن وسريع مع بوتات متقدمة وميزات فائقة السرعة. يدعم القنوات والمجموعات الكبيرة التي تضم آلاف الأعضاء."
    },
    { 
        id: "facebook", packageName: "com.facebook.katana", category: "تواصل", icon: "fab fa-facebook", name: "Facebook", 
        downloadLink: "https://apkpure.net/facebook/com.facebook.katana/download",
        manualVersion: "460.0.0", manualSize: "82 MB", manualDownloads: "10B+", manualDeveloper: "Meta",
        manualFeatures: ["مشاركة المنشورات والصور والفيديوهات", "مشاهدة الريلز والمقاطع القصيرة", "مجموعات وصفحات ومتجر", "بث مباشر للفعاليات", "سوق لبيع وشراء المنتجات", "تواصل مع الأصدقاء والعائلة"],
        manualDescription: "تطبيق التواصل الاجتماعي الأكبر في العالم. تواصل مع الأصدقاء والعائلة، تابع الأخبار والفيديوهات، واكتشف المحتوى الذي يهمك."
    },
    { 
        id: "instagram", packageName: "com.instagram.android", category: "تواصل", icon: "fab fa-instagram", name: "Instagram", 
        downloadLink: "https://apkpure.net/instagram/com.instagram.android/download",
        manualVersion: "332.0.0", manualSize: "68 MB", manualDownloads: "5B+", manualDeveloper: "Meta",
        manualFeatures: ["مشاركة الصور والفيديوهات", "قصص وريلز وبث مباشر", "رسائل مباشرة (DM)", "فلترات وعدسات تفاعلية", "تسوق من داخل التطبيق", "اكتشاف المحتوى المناسب لك"],
        manualDescription: "مشاركة الصور والفيديوهات مع الأصدقاء. قصص وريلز وبث مباشر. اكتشف المحتوى المفضل لديك من خلال خاصية الاستكشاف."
    },
    { 
        id: "twitter", packageName: "com.twitter.android", category: "تواصل", icon: "fab fa-twitter", name: "Twitter", 
        downloadLink: "https://apkpure.net/twitter/com.twitter.android/download",
        manualVersion: "10.45.0", manualSize: "58 MB", manualDownloads: "1B+", manualDeveloper: "X Corp",
        manualFeatures: ["تغريدات ووسوم", "مقاطع فيديو وصور", "مساحات صوتية (Spaces)", "قوائم مخصصة", "إشارات مرجعية", "متابعة الأخبار العاجلة"],
        manualDescription: "منصة التدوين المصغر والأخبار العاجلة. تابع الأحداث أول بأول. شارك رأيك في 280 حرف."
    },
    { 
        id: "snapchat", packageName: "com.snapchat.android", category: "تواصل", icon: "fab fa-snapchat", name: "Snapchat", 
        downloadLink: "https://apkpure.net/snapchat/com.snapchat.android/download",
        manualVersion: "12.85.0", manualSize: "125 MB", manualDownloads: "500M+", manualDeveloper: "Snap Inc",
        manualFeatures: ["لقطات مؤقتة تختفي بعد المشاهدة", "فلتر وعدسات متجددة يومياً", "خريطة سناب (Snap Map)", "قصص عامة وخاصة", "دردشة نصية وصوتية", "ألعاب داخل التطبيق"],
        manualDescription: "تطبيق الصور والفيديوهات المؤقتة. أضف فلاتر وعدسات ممتعة. تواصل مع الأصدقاء بطريقة جديدة ومبتكرة."
    },
    { 
        id: "discord", packageName: "com.discord", category: "تواصل", icon: "fab fa-discord", name: "Discord", 
        downloadLink: "https://apkpure.net/discord/com.discord/download",
        manualVersion: "242.0", manualSize: "95 MB", manualDownloads: "500M+", manualDeveloper: "Discord Inc",
        manualFeatures: ["خوادم وقنوات صوتية ونصية", "مكالمات صوتية عالية الجودة", "بث مباشر للألعاب", "بوتات قابلة للتخصيص", "مشاركة الشاشة", "مجتمعات للجيمرز والمطورين"],
        manualDescription: "منصة المحادثة الصوتية والنصية للجيمرز والمجتمعات. أنشئ خادمك الخاص وادعُ أصدقائك."
    },
    { 
        id: "signal", packageName: "org.thoughtcrime.securesms", category: "تواصل", icon: "fas fa-lock", name: "Signal", 
        downloadLink: "https://apkpure.net/signal/org.thoughtcrime.securesms/download",
        manualVersion: "7.8.0", manualSize: "48 MB", manualDownloads: "100M+", manualDeveloper: "Signal Foundation",
        manualFeatures: ["تشفير كامل من طرف إلى طرف", "رسائل تختفي بعد فترة زمنية", "مكالمات فيديو آمنة", "تطبيق مفتوح المصدر", "بدون إعلانات أو تتبع", "خصوصية تامة"],
        manualDescription: "تطبيق مراسلة آمن ومشفر بالكامل. خصوصية تامة. لا يخزن أي بيانات عنك. موصى به من قبل خبراء الأمن السيبراني."
    },
    { 
        id: "imo", packageName: "imo.im.service", category: "تواصل", icon: "fas fa-video", name: "IMO", 
        downloadLink: "https://apkpure.net/imo/imo.im.service/download",
        manualVersion: "2024.3.0", manualSize: "38 MB", manualDownloads: "500M+", manualDeveloper: "IMO.IM",
        manualFeatures: ["مكالمات فيديو عالية الجودة", "مشاركة الملفات والصور", "دردشة نصية جماعية", "مكالمات صوتية دولية مجانية", "واجهة بسيطة وسريعة"],
        manualDescription: "تطبيق مكالمات فيديو وصوت عالية الجودة. مجاني وسهل الاستخدام."
    },
    { 
        id: "viber", packageName: "com.viber.voip", category: "تواصل", icon: "fas fa-phone", name: "Viber", 
        downloadLink: "https://apkpure.net/viber/com.viber.voip/download",
        manualVersion: "22.0.0", manualSize: "85 MB", manualDownloads: "500M+", manualDeveloper: "Rakuten Viber",
        manualFeatures: ["مكالمات صوتية وفيديو", "رسائل وملصقات", "مجموعات ومجتمعات", "مشاركة الموقع", "مكالمات دولية بتكلفة منخفضة"],
        manualDescription: "تطبيق مكالمات ورسائل مجاني. استمتع بالمكالمات الصوتية والمرئية عالية الجودة."
    },
    { 
        id: "line", packageName: "line.naver.jp", category: "تواصل", icon: "fab fa-line", name: "Line", 
        downloadLink: "https://apkpure.net/line/line.naver.jp/download",
        manualVersion: "14.0.0", manualSize: "95 MB", manualDownloads: "500M+", manualDeveloper: "LY Corporation",
        manualFeatures: ["رسائل وملصقات", "مكالمات صوتية وفيديو", "قنوات ومجموعات", "ألعاب داخل التطبيق", "محفظة رقمية"],
        manualDescription: "تطبيق تواصل شعبي في آسيا مع ملصقات كيوت وميزات متعددة."
    },
    { 
        id: "wechat", packageName: "com.tencent.mm", category: "تواصل", icon: "fab fa-weixin", name: "WeChat", 
        downloadLink: "https://apkpure.net/wechat/com.tencent.mm/download",
        manualVersion: "8.0.0", manualSize: "220 MB", manualDownloads: "1B+", manualDeveloper: "Tencent",
        manualFeatures: ["مراسلة نصية وصوتية", "مشاركة الصور والفيديوهات", "مدفوعات رقمية", "خدمات حكومية", "ألعاب وتطبيقات مصغرة"],
        manualDescription: "تطبيق التواصل الصيني الشامل. مراسلة، مدفوعات، خدمات حكومية، وألعاب في تطبيق واحد."
    },
    { 
        id: "kakaotalk", packageName: "com.kakao.talk", category: "تواصل", icon: "fas fa-comment", name: "KakaoTalk", 
        downloadLink: "https://apkpure.net/kakaotalk/com.kakao.talk/download",
        manualVersion: "10.0.0", manualSize: "65 MB", manualDownloads: "100M+", manualDeveloper: "Kakao Corp",
        manualFeatures: ["رسائل وملصقات", "مكالمات صوتية وفيديو", "قنوات ومجموعات", "مشاركة الملفات", "تخزين سحابي"],
        manualDescription: "تطبيق التواصل الكوري الشهير. مراسلة ومكالمات وملصقات ممتعة."
    },
    { 
        id: "messenger", packageName: "com.facebook.orca", category: "تواصل", icon: "fab fa-facebook-messenger", name: "Messenger", 
        downloadLink: "https://apkpure.net/messenger/com.facebook.orca/download",
        manualVersion: "460.0.0", manualSize: "62 MB", manualDownloads: "5B+", manualDeveloper: "Meta",
        manualFeatures: ["رسائل فورية", "مكالمات صوتية وفيديو", "غرف جماعية", "ألعاب داخل التطبيق", "ردود فعل وملصقات"],
        manualDescription: "تطبيق المراسلة من فيسبوك. تواصل مع أصدقائك بسهولة وسرعة."
    },
    { 
        id: "skype", packageName: "com.skype.raider", category: "تواصل", icon: "fab fa-skype", name: "Skype", 
        downloadLink: "https://apkpure.net/skype/com.skype.raider/download",
        manualVersion: "8.110.0", manualSize: "55 MB", manualDownloads: "1B+", manualDeveloper: "Microsoft",
        manualFeatures: ["مكالمات فيديو جماعية", "مشاركة الشاشة", "رسائل فورية", "ترجمة فورية", "مكالمات دولية بتكلفة منخفضة"],
        manualDescription: "تطبيق المكالمات والمؤتمرات من مايكروسوفت. مثالي للاجتماعات والتواصل مع الفريق."
    },

    // ========== ألعاب (40) ==========
    { 
        id: "pubg", packageName: "com.tencent.ig", category: "ألعاب", icon: "fas fa-crosshairs", name: "PUBG Mobile", 
        downloadLink: "https://apkpure.net/pubg-mobile/com.tencent.ig/download",
        manualVersion: "3.4.0", manualSize: "1.2 GB", manualDownloads: "1B+", manualDeveloper: "Tencent",
        manualFeatures: ["100 لاعب في مباراة واحدة", "رسومات واقعية بدقة HD", "أسلحة متنوعة وقابلة للتخصيص", "مركبات للتنقل السريع", "طور الساحة (Arena)", "خرائط متعددة ومتنوعة"],
        manualDescription: "لعبة الباتل رويال الشهيرة. ناجاة 100 لاعب على جزيرة. آخر لاعب يبقى هو الفائز. استخدم التكتيك والأسلحة المناسبة للفوز."
    },
    { 
        id: "free-fire", packageName: "com.dts.freefiremax", category: "ألعاب", icon: "fas fa-fire", name: "Free Fire MAX", 
        downloadLink: "https://apkpure.net/free-fire-max/com.dts.freefiremax/download",
        manualVersion: "2.107.0", manualSize: "850 MB", manualDownloads: "1B+", manualDeveloper: "Garena",
        manualFeatures: ["50 لاعب في 10 دقائق", "رسومات محسنة (HD)", "أسلحة متنوعة", "شخصيات فريدة بقدرات خاصة", "أحداث يومية وجوائز", "طور كلاش سكواد"],
        manualDescription: "لعبة الباتل رويال السريعة. مباريات مدتها 10 دقائق فقط. رسومات محسنة وجودة عالية."
    },
    { 
        id: "call-of-duty", packageName: "com.activision.callofduty.shooter", category: "ألعاب", icon: "fas fa-gun", name: "Call of Duty Mobile", 
        downloadLink: "https://apkpure.net/call-of-duty-mobile/com.activision.callofduty.shooter/download",
        manualVersion: "1.9.0", manualSize: "1.5 GB", manualDownloads: "500M+", manualDeveloper: "Activision",
        manualFeatures: ["طور المعركة المتعددة (Multiplayer)", "طور الباتل رويال", "أسلحة حقيقية من سلسلة COD", "خرائط كلاسيكية من اللعبة الأصلية", "تخصيص الأسلحة والمعدات", "مشاهد قتالية سينمائية"],
        manualDescription: "لعبة إطلاق النار الاحترافية من سلسلة Call of Duty. استمتع بطور المعركة متعددة اللاعبين وطور الباتل رويال."
    },
    { 
        id: "clash-of-clans", packageName: "com.supercell.clashofclans", category: "ألعاب", icon: "fas fa-chess-king", name: "Clash of Clans", 
        downloadLink: "https://apkpure.net/clash-of-clans/com.supercell.clashofclans/download",
        manualVersion: "16.0.0", manualSize: "320 MB", manualDownloads: "500M+", manualDeveloper: "Supercell",
        manualFeatures: ["بناء القرية وتطويرها", "هجمات اللاعبين للحصول على الموارد", "تحالفات مع لاعبين آخرين", "أبطال بقدرات خاصة", "أحداث أسبوعية وجوائز", "حروب التحالفات"],
        manualDescription: "لعبة بناء القرى والحروب. اقرية، درب جيشك، وشن الهجمات على لاعبين آخرين. انضم إلى تحالف وشارك في الحروب."
    },
    { 
        id: "clash-royale", packageName: "com.supercell.clashroyale", category: "ألعاب", icon: "fas fa-chess", name: "Clash Royale", 
        downloadLink: "https://apkpure.net/clash-royale/com.supercell.clashroyale/download",
        manualVersion: "3.6.0", manualSize: "240 MB", manualDownloads: "100M+", manualDeveloper: "Supercell",
        manualFeatures: ["بطاقات قابلة للتطور", "معارك لحظية في الوقت الفعلي", "عشائر للتعاون والمنافسة", "بطولات أسبوعية", "بطاقات البطل النادرة", "أبراج دفاعية قابلة للترقية"],
        manualDescription: "لعبة بطاقات استراتيجية من عالم Clash of Clans. اجمع البطاقات، كوّن برجك، ودمر أبراج الخصم."
    },
    { 
        id: "mobile-legends", packageName: "com.mobile.legends", category: "ألعاب", icon: "fas fa-users", name: "Mobile Legends", 
        downloadLink: "https://apkpure.net/mobile-legends/com.mobile.legends/download",
        manualVersion: "1.8.0", manualSize: "450 MB", manualDownloads: "500M+", manualDeveloper: "Moonton",
        manualFeatures: ["5v5 معارك سريعة", "أبطال متنوعون بقدرات فريدة", "طور الترتيب (Ranked)", "عشائر للعب مع الأصدقاء", "أحداث يومية وجوائز", "رسومات وجودة عالية"],
        manualDescription: "لعبة MOBA الشهيرة. أبطال متنوعون ومهارات رائعة. العب مع أصدقائك واستمتع بمعارك 5v5 المثيرة."
    },
    { 
        id: "brawl-stars", packageName: "com.supercell.brawlstars", category: "ألعاب", icon: "fas fa-fist-raised", name: "Brawl Stars", 
        downloadLink: "https://apkpure.net/brawl-stars/com.supercell.brawlstars/download",
        manualVersion: "55.0", manualSize: "350 MB", manualDownloads: "100M+", manualDeveloper: "Supercell",
        manualFeatures: ["طور المعركة (Gem Grab)", "جمع الأحجار (Bounty)", "السيطرة على المنطقة (Hot Zone)", "أبطال فريدون بقدرات خاصة", "أحداث محدودة أسبوعياً", "معارك 3v3 سريعة"],
        manualDescription: "لعبة قتال سريعة. معارك 3v3 مع أبطال متنوعين. استمتع بأحداث محدودة وطور قدراتك."
    },
    { 
        id: "candy-crush", packageName: "com.king.candycrushsaga", category: "ألعاب", icon: "fas fa-candy-cane", name: "Candy Crush Saga", 
        downloadLink: "https://apkpure.net/candy-crush-saga/com.king.candycrushsaga/download",
        manualVersion: "1.270.0", manualSize: "180 MB", manualDownloads: "500M+", manualDeveloper: "King",
        manualFeatures: ["آلاف المستويات المتنوعة", "عززات قوية للمساعدة", "أحداث أسبوعية وجوائز", "صعوبة متدرجة تناسب الجميع", "رسومات زاهية وممتعة", "تحديات يومية"],
        manualDescription: "لعبة الألغاز الشهيرة. آلاف المستويات وحلوى لذيذة. استمتع بتحدي حل الألغاز وتجميع الحلوى."
    },
    { 
        id: "subway-surfers", packageName: "com.kiloo.subwaysurf", category: "ألعاب", icon: "fas fa-subway", name: "Subway Surfers", 
        downloadLink: "https://apkpure.net/subway-surfers/com.kiloo.subwaysurf/download",
        manualVersion: "3.34.0", manualSize: "150 MB", manualDownloads: "1B+", manualDeveloper: "Sybo",
        manualFeatures: ["جري لا نهائي وممتع", "لوحات تزلج قابلة للتطوير", "أبطال متعددون للاختيار", "أحداث محدودة كل شهر", "مهمات يومية وجوائز", "رسومات كرتونية جميلة"],
        manualDescription: "لعبة الجري الكلاسيكية. اهرب من المفتش واجمع العملات. استمتع بالجري عبر مسارات القطار المختلفة."
    },
    { 
        id: "temple-run", packageName: "com.imangi.templerun2", category: "ألعاب", icon: "fas fa-running", name: "Temple Run 2", 
        downloadLink: "https://apkpure.net/temple-run-2/com.imangi.templerun2/download",
        manualVersion: "1.80.0", manualSize: "120 MB", manualDownloads: "500M+", manualDeveloper: "Imangi",
        manualFeatures: ["جري لا نهائي ومغامرة", "أبطال متعددون بقدرات مختلفة", "عززات للمساعدة في الجري", "مهمات يومية متنوعة", "أحداث موسمية محدودة", "رسومات ثلاثية الأبعاد"],
        manualDescription: "لعبة الجري والمغامرة. اهرب من القرود واجمع العملات الذهبية. استمتع بالمغامرة في المعابد القديمة."
    },
    { 
        id: "asphalt-9", packageName: "com.gameloft.android.ANMP.GloftA9HM", category: "ألعاب", icon: "fas fa-car-side", name: "Asphalt 9", 
        downloadLink: "https://apkpure.net/asphalt-9/com.gameloft.android.ANMP.GloftA9HM/download",
        manualVersion: "4.3.0", manualSize: "2.5 GB", manualDownloads: "100M+", manualDeveloper: "Gameloft",
        manualFeatures: ["سيارات حقيقية من علامات تجارية عالمية", "مسارات عالمية في مواقع حقيقية", "طور المهنة (Career Mode)", "سباقات متعددة اللاعبين (Multiplayer)", "تخصيص السيارات بالألوان والملصقات", "رسومات خيالية"],
        manualDescription: "لعبة سباقات سيارات. سيارات خيالية ومسارات حقيقية. استمتع بسباقات مثيرة مع سيارات فاخرة."
    },
    { 
        id: "minecraft", packageName: "com.mojang.minecraftpe", category: "ألعاب", icon: "fas fa-cube", name: "Minecraft", 
        downloadLink: "https://apkpure.net/minecraft/com.mojang.minecraftpe/download",
        manualVersion: "1.20.0", manualSize: "400 MB", manualDownloads: "100M+", manualDeveloper: "Mojang",
        manualFeatures: ["عالم مفتوح لا نهائي", "بناء وإبداع بدون حدود", "وضع البقاء (Survival Mode)", "وضع الإبداع (Creative Mode)", "لعب متعدد اللاعبين عبر الخوادم", "تحديثات مستمرة بمحتوى جديد"],
        manualDescription: "لعبة البناء والإبداع. عالم مفتوح، ابني أي شيء تريد. استمتع بالمغامرة والإبداع في عالم المكعبات."
    },
    { 
        id: "roblox", packageName: "com.roblox.client", category: "ألعاب", icon: "fas fa-gamepad", name: "Roblox", 
        downloadLink: "https://apkpure.net/roblox/com.roblox.client/download",
        manualVersion: "2.610.0", manualSize: "200 MB", manualDownloads: "100M+", manualDeveloper: "Roblox",
        manualFeatures: ["آلاف الألعاب داخل منصة واحدة", "إنشاء ألعابك الخاصة وتصميمها", "أفاتار قابل للتخصيص بالكامل", "لعب مع الأصدقاء في أي وقت", "أحداث يومية وموسمية", "مجتمعات ضخمة حول العالم"],
        manualDescription: "منصة ألعاب متعددة. آلاف الألعاب داخل لعبة واحدة. يمكنك اللعب وإنشاء الألعاب الخاصة بك."
    },
    { 
        id: "among-us", packageName: "com.innersloth.spacemafia", category: "ألعاب", icon: "fas fa-user-astronaut", name: "Among Us", 
        downloadLink: "https://apkpure.net/among-us/com.innersloth.spacemafia/download",
        manualVersion: "2024.8.0", manualSize: "250 MB", manualDownloads: "500M+", manualDeveloper: "Innersloth",
        manualFeatures: ["4-15 لاعب في المباراة", "مهمات للحفاظ على السفينة", "اجتماعات طارئة لمناقشة المحتال", "تخصيص الشخصية بالألوان والملابس", "خرائط متعددة متنوعة", "دردشة صوتية ونصية"],
        manualDescription: "لعبة الخيانة الجماعية. اكتشف المحتال قبل فوات الأوان. استمتع بالمهمات وحاول اكتشاف المحتال."
    },
    { 
        id: "genshin-impact", packageName: "com.miHoYo.GenshinImpact", category: "ألعاب", icon: "fas fa-dragon", name: "Genshin Impact", 
        downloadLink: "https://apkpure.net/genshin-impact/com.miHoYo.GenshinImpact/download",
        manualVersion: "5.0.0", manualSize: "3.5 GB", manualDownloads: "50M+", manualDeveloper: "HoYoverse",
        manualFeatures: ["عالم مفتوح ضخم للاستكشاف", "شخصيات متعددة بقدرات فريدة", "عناصر متفاعلة في القتال", "معارك تكتيكية ممتعة", "تحديثات مستمرة بمناطق وشخصيات جديدة", "رسومات أنمي مذهلة"],
        manualDescription: "لعبة تقمص أدوار عالم مفتوح. رسومات أنمي ومعارك ممتعة. استكشف عالم Teyvat الساحر."
    },
    { 
        id: "fall-guys", packageName: "com.mediatonic.fallguys", category: "ألعاب", icon: "fas fa-running", name: "Fall Guys", 
        downloadLink: "https://apkpure.net/fall-guys/com.mediatonic.fallguys/download",
        manualVersion: "1.0.0", manualSize: "1.8 GB", manualDownloads: "50M+", manualDeveloper: "Mediatonic",
        manualFeatures: ["معارك جماعية مع 60 لاعباً", "عوائق مضحكة ومتنوعة", "تخصيص الشخصية بالأزياء", "أحداث موسمية جديدة", "لعب مع الأصدقاء في فرق", "رسومات كرتونية مرحة"],
        manualDescription: "لعبة العوائق الجماعية. تنافس مع 60 لاعباً في تحديات مضحكة. كن آخر لاعب يقف للفوز."
    },
    { 
        id: "pubg-new-state", packageName: "com.pubg.newstate", category: "ألعاب", icon: "fas fa-crosshairs", name: "PUBG New State", 
        downloadLink: "https://apkpure.net/pubg-new-state/com.pubg.newstate/download",
        manualVersion: "1.5.0", manualSize: "1.4 GB", manualDownloads: "100M+", manualDeveloper: "Krafton",
        manualFeatures: ["رسومات محسنة بشكل كبير", "أسلحة مستقبلية متطورة", "مركبات جديدة قابلة للتخصيص", "طور المستقبل (Future Mode)", "معارك 100 لاعب على خريطة جديدة", "فيزياء واقعية"],
        manualDescription: "النسخة الجديدة من PUBG مع رسومات محسنة وأسلحة مستقبلية. استمتع بتجربة باتل رويال متطورة."
    },
    { 
        id: "cod-warzone", packageName: "com.activision.warzone", category: "ألعاب", icon: "fas fa-gun", name: "COD Warzone Mobile", 
        downloadLink: "https://apkpure.net/cod-warzone/com.activision.warzone/download",
        manualVersion: "1.0.0", manualSize: "2.0 GB", manualDownloads: "50M+", manualDeveloper: "Activision",
        manualFeatures: ["باتل رويال بنظام القتال الكلاسيكي", "رسومات واقعية وجودة عالية", "أسلحة مخصصة وقابلة للتطوير", "مركبات متنوعة للتنقل", "طور الفريق (Team Mode)", "خريطة Verdansk الشهيرة"],
        manualDescription: "نسخة وارزون من Call of Duty للهاتف المحمول. استمتع بمعارك الباتل رويال المثيرة."
    },
    { 
        id: "rainbow-six", packageName: "com.ubisoft.rainbowsixm", category: "ألعاب", icon: "fas fa-shield", name: "Rainbow Six Mobile", 
        downloadLink: "https://apkpure.net/rainbow-six/com.ubisoft.rainbowsixm/download",
        manualVersion: "1.0.0", manualSize: "1.6 GB", manualDownloads: "20M+", manualDeveloper: "Ubisoft",
        manualFeatures: ["عمليات تكتيكية دقيقة", "شخصيات فريقة (Operators) بقدرات خاصة", "أسلحة متخصصة لكل شخصية", "خرائط متعددة قابلة للتدمير", "طور الفريق (5v5)", "تخطيط استراتيجي قبل كل جولة"],
        manualDescription: "لعبة إطلاق نار تكتيكية من سلسلة Rainbow Six الشهيرة. استخدم التكتيك والتخطيط للفوز."
    },
    { 
        id: "apex-legends", packageName: "com.ea.apexlegendsmobilefps", category: "ألعاب", icon: "fas fa-trophy", name: "Apex Legends Mobile", 
        downloadLink: "https://apkpure.net/apex-legends-mobile/com.ea.apexlegendsmobilefps/download",
        manualVersion: "1.8.0", manualSize: "1.7 GB", manualDownloads: "50M+", manualDeveloper: "EA",
        manualFeatures: ["أبطال (Legends) بقدرات فريدة", "معارك 3v3 سريعة", "رسومات عالية الجودة", "مركبات وأسلحة متنوعة", "تحديثات مستمرة بأبطال جدد", "نظام بينغ للتواصل"],
        manualDescription: "لعبة الباتل رويال من إلكترونيك آرتس. اختر بطلك واستخدم قدراته للفوز."
    },
    { 
        id: "modern-combat", packageName: "com.gameloft.android.ANMP.GloftM5HM", category: "ألعاب", icon: "fas fa-bomb", name: "Modern Combat 5", 
        downloadLink: "https://apkpure.net/modern-combat-5/com.gameloft.android.ANMP.GloftM5HM/download",
        manualVersion: "2.8.0", manualSize: "1.2 GB", manualDownloads: "50M+", manualDeveloper: "Gameloft",
        manualFeatures: ["قصة مثيرة في طور اللاعب الواحد", "معارك متعددة اللاعبين (Multiplayer)", "أسلحة قابلة للتطوير", "فئات مختلفة للجنود (Classes)", "رسومات سينمائية", "خرائط متنوعة"],
        manualDescription: "لعبة إطلاق نار ممتازة من سلسلة Modern Combat. استمتع بالقصة الشيقة والمعارك المتعددة."
    },

    // ========== تطبيقات إنتاجية (15) ==========
    { id: "google-docs", packageName: "com.google.android.apps.docs.editors.docs", category: "إنتاجية", icon: "fas fa-file-alt", name: "Google Docs", downloadLink: "https://apkpure.net/google-docs/com.google.android.apps.docs.editors.docs/download", manualVersion: "2024.01", manualSize: "45 MB", manualDownloads: "1B+", manualDeveloper: "Google", manualFeatures: ["تحرير المستندات أونلاين", "مشاركة الملفات", "حفظ تلقائي", "عمل دون اتصال", "قوالب جاهزة"], manualDescription: "تطبيق تحرير المستندات من جوجل. يمكنك إنشاء وتعديل المستندات أونلاين ومشاركتها مع الآخرين." },
    { id: "google-sheets", packageName: "com.google.android.apps.docs.editors.sheets", category: "إنتاجية", icon: "fas fa-table", name: "Google Sheets", downloadLink: "https://apkpure.net/google-sheets/com.google.android.apps.docs.editors.sheets/download", manualVersion: "2024.01", manualSize: "42 MB", manualDownloads: "1B+", manualDeveloper: "Google", manualFeatures: ["جداول بيانات", "مشاركة", "رسوم بيانية", "حسابات معقدة", "عمل دون اتصال"], manualDescription: "تطبيق جداول البيانات من جوجل. أنشئ حسابات معقدة ورسوم بيانية بسهولة." },
    { id: "google-slides", packageName: "com.google.android.apps.docs.editors.slides", category: "إنتاجية", icon: "fas fa-chalkboard", name: "Google Slides", downloadLink: "https://apkpure.net/google-slides/com.google.android.apps.docs.editors.slides/download", manualVersion: "2024.01", manualSize: "40 MB", manualDownloads: "1B+", manualDeveloper: "Google", manualFeatures: ["عروض تقديمية", "قوالب جاهزة", "مشاركة", "رسوم متحركة", "عمل دون اتصال"], manualDescription: "تطبيق العروض التقديمية من جوجل. قدم أفكارك بشكل احترافي." },
    { id: "notion", packageName: "notion.id", category: "إنتاجية", icon: "fas fa-book", name: "Notion", downloadLink: "https://apkpure.net/notion/notion.id/download", manualVersion: "0.6.0", manualSize: "55 MB", manualDownloads: "10M+", manualDeveloper: "Notion Labs", manualFeatures: ["تدوين ملاحظات", "قواعد بيانات", "تقويم", "مشاريع", "تعاون جماعي"], manualDescription: "منصة متكاملة للتدوين والمشاريع. نظم حياتك وعملك في مكان واحد." },
    { id: "asana", packageName: "com.asana.app", category: "إنتاجية", icon: "fas fa-tasks", name: "Asana", downloadLink: "https://apkpure.net/asana/com.asana.app/download", manualVersion: "8.0.0", manualSize: "48 MB", manualDownloads: "5M+", manualDeveloper: "Asana", manualFeatures: ["إدارة المشاريع", "مهام يومية", "تقويم", "فريق", "تقارير"], manualDescription: "إدارة المشاريع والفرق. نظم مهامك وتابع تقدم فريقك." },
    { id: "clickup", packageName: "clickup.app/android", category: "إنتاجية", icon: "fas fa-check-circle", name: "ClickUp", downloadLink: "https://apkpure.net/clickup/clickup.app/android/download", manualVersion: "3.0.0", manualSize: "52 MB", manualDownloads: "5M+", manualDeveloper: "ClickUp", manualFeatures: ["إدارة المهام", "مستندات", "أهداف", "تقويم", "تذكيرات"], manualDescription: "إدارة المهام والمشاريع المتكاملة. منصة واحدة لكل احتياجاتك." },
    { id: "monday", packageName: "com.monday.dash", category: "إنتاجية", icon: "fas fa-calendar-week", name: "Monday", downloadLink: "https://apkpure.net/monday/com.monday.dash/download", manualVersion: "7.0.0", manualSize: "50 MB", manualDownloads: "5M+", manualDeveloper: "Monday", manualFeatures: ["لوحات تحكم", "مهام", "أتمتة", "تقارير", "فريق"], manualDescription: "منصة إدارة العمل. نظم فرقك ومشاريعك بسهولة." },
    { id: "wps-office", packageName: "cn.wps.moffice_eng", category: "إنتاجية", icon: "fas fa-file-word", name: "WPS Office", downloadLink: "https://apkpure.net/wps-office/cn.wps.moffice_eng/download", manualVersion: "18.0.0", manualSize: "60 MB", manualDownloads: "500M+", manualDeveloper: "Kingsoft", manualFeatures: ["معالج نصوص", "جداول بيانات", "عروض تقديمية", "PDF", "سحابي"], manualDescription: "حزمة أوفيس خفيفة وسريعة. متوافقة مع مايكروسوفت أوفيس." },
    { id: "polaris-office", packageName: "com.infraware.polarisoffice5", category: "إنتاجية", icon: "fas fa-file-excel", name: "Polaris Office", downloadLink: "https://apkpure.net/polaris-office/com.infraware.polarisoffice5/download", manualVersion: "9.0.0", manualSize: "55 MB", manualDownloads: "100M+", manualDeveloper: "Infraware", manualFeatures: ["مستندات", "جداول", "عروض", "PDF", "سحابي"], manualDescription: "بديل ممتاز لمايكروسوفت أوفيس. خفيف وسريع." },
    { id: "dropbox", packageName: "com.dropbox.android", category: "إنتاجية", icon: "fab fa-dropbox", name: "Dropbox", downloadLink: "https://apkpure.net/dropbox/com.dropbox.android/download", manualVersion: "350.0", manualSize: "48 MB", manualDownloads: "500M+", manualDeveloper: "Dropbox", manualFeatures: ["تخزين سحابي", "مشاركة ملفات", "نسخ احتياطي", "مزامنة", "تعاون"], manualDescription: "تخزين سحابي ومشاركة ملفات. وصول لملفاتك من أي مكان." },
    { id: "onedrive", packageName: "com.microsoft.skydrive", category: "إنتاجية", icon: "fab fa-microsoft", name: "OneDrive", downloadLink: "https://apkpure.net/onedrive/com.microsoft.skydrive/download", manualVersion: "6.0.0", manualSize: "45 MB", manualDownloads: "500M+", manualDeveloper: "Microsoft", manualFeatures: ["تخزين سحابي", "نسخ احتياطي للصور", "مزامنة", "مشاركة", "تعاون"], manualDescription: "تخزين سحابي من مايكروسوفت. متكامل مع ويندوز وأوفيس." },
    { id: "box", packageName: "com.box.android", category: "إنتاجية", icon: "fas fa-box", name: "Box", downloadLink: "https://apkpure.net/box/com.box.android/download", manualVersion: "4.0.0", manualSize: "42 MB", manualDownloads: "10M+", manualDeveloper: "Box", manualFeatures: ["تخزين سحابي", "مشاركة", "تعاون", "أمان عالي", "تكامل"], manualDescription: "تخزين سحابي للشركات. أمان عالي وتعاون فعال." },
    { id: "todoist", packageName: "com.todoist", category: "إنتاجية", icon: "fas fa-check-square", name: "Todoist", downloadLink: "https://apkpure.net/todoist/com.todoist/download", manualVersion: "22.0.0", manualSize: "25 MB", manualDownloads: "10M+", manualDeveloper: "Doist", manualFeatures: ["قائمة مهام", "تذكيرات", "مشاريع", "ملصقات", "إحصائيات"], manualDescription: "تطبيق إدارة المهام الشهير. نظم مهامك اليومية بسهولة." },
    { id: "anydo", packageName: "com.anydo", category: "إنتاجية", icon: "fas fa-list-check", name: "Any.do", downloadLink: "https://apkpure.net/anydo/com.anydo/download", manualVersion: "5.0.0", manualSize: "28 MB", manualDownloads: "10M+", manualDeveloper: "Any.do", manualFeatures: ["مهام", "تقويم", "تذكيرات", "قوائم", "مشاركة"], manualDescription: "تطبيق مهام وتقويم. نظم يومك وزد إنتاجيتك." },
    { id: "habitica", packageName: "com.habitrpg.android.habitica", category: "إنتاجية", icon: "fas fa-gamepad", name: "Habitica", downloadLink: "https://apkpure.net/habitica/com.habitrpg.android.habitica/download", manualVersion: "4.0.0", manualSize: "30 MB", manualDownloads: "1M+", manualDeveloper: "Habitica", manualFeatures: ["عادات يومية", "مهام", "تحديات", "مكافآت", "تطوير شخصية"], manualDescription: "حول مهامك اليومية إلى لعبة. طور شخصيتك وأنت تنجز مهامك." },

    // ========== تطبيقات تعليم (10) ==========
    { id: "duolingo", packageName: "com.duolingo", category: "تعليم", icon: "fas fa-language", name: "Duolingo", downloadLink: "https://apkpure.net/duolingo/com.duolingo/download", manualVersion: "5.0.0", manualSize: "35 MB", manualDownloads: "100M+", manualDeveloper: "Duolingo", manualFeatures: ["تعلم اللغات مجاناً", "دروس تفاعلية", "تمارين يومية", "مستويات متعددة", "تتبع التقدم"], manualDescription: "تعلم اللغات مجاناً وبطريقة ممتعة. دروس قصيرة وتفاعلية." },
    { id: "coursera", packageName: "org.coursera.android", category: "تعليم", icon: "fas fa-graduation-cap", name: "Coursera", downloadLink: "https://apkpure.net/coursera/org.coursera.android/download", manualVersion: "5.0.0", manualSize: "40 MB", manualDownloads: "10M+", manualDeveloper: "Coursera", manualFeatures: ["دورات من جامعات عالمية", "شهادات معتمدة", "محتوى فيديو", "تمارين تفاعلية", "تعلم بمرونة"], manualDescription: "دورات تعليمية من أفضل جامعات العالم. تعلم مهارات جديدة واحصل على شهادات معتمدة." },
    { id: "udemy", packageName: "com.udemy.android", category: "تعليم", icon: "fas fa-chalkboard", name: "Udemy", downloadLink: "https://apkpure.net/udemy/com.udemy.android/download", manualVersion: "9.0.0", manualSize: "38 MB", manualDownloads: "10M+", manualDeveloper: "Udemy", manualFeatures: ["آلاف الكورسات", "تعلم حسب احتياجك", "محتوى فيديو عالي الجودة", "شهادات إتمام", "عروض مستمرة"], manualDescription: "منصة كورسات أونلاين في كل المجالات. تعلم من خبراء في مجالك." },
    { id: "khan-academy", packageName: "org.khanacademy.android", category: "تعليم", icon: "fas fa-school", name: "Khan Academy", downloadLink: "https://apkpure.net/khan-academy/org.khanacademy.android/download", manualVersion: "7.0.0", manualSize: "30 MB", manualDownloads: "10M+", manualDeveloper: "Khan Academy", manualFeatures: ["دروس مجانية بالكامل", "رياضيات وعلوم", "تمارين تفاعلية", "فيديوهات تعليمية", "تتبع التقدم"], manualDescription: "دروس مجانية في كل المجالات. تعلم الرياضيات والعلوم والبرمجة والمزيد." },
    { id: "sololearn", packageName: "com.sololearn", category: "تعليم", icon: "fas fa-code", name: "Sololearn", downloadLink: "https://apkpure.net/sololearn/com.sololearn/download", manualVersion: "4.0.0", manualSize: "25 MB", manualDownloads: "5M+", manualDeveloper: "Sololearn", manualFeatures: ["تعلم البرمجة", "دروس تفاعلية", "تمارين عملية", "مجتمع للمبرمجين", "شهادات"], manualDescription: "تعلم البرمجة من الصفر. دورس تفاعلية وتمارين عملية." },
    { id: "mimo", packageName: "com.getmimo.android", category: "تعليم", icon: "fas fa-mobile-alt", name: "Mimo", downloadLink: "https://apkpure.net/mimo/com.getmimo.android/download", manualVersion: "4.0.0", manualSize: "28 MB", manualDownloads: "1M+", manualDeveloper: "Mimo", manualFeatures: ["تعلم البرمجة على الهاتف", "دروس قصيرة", "تمارين يومية", "مشاريع عملية", "تتبع التقدم"], manualDescription: "تعلم البرمجة على هاتفك المحمول. دروس قصيرة وتمارين يومية." },
    { id: "photomath", packageName: "com.microblink.photomath", category: "تعليم", icon: "fas fa-calculator", name: "Photomath", downloadLink: "https://apkpure.net/photomath/com.microblink.photomath/download", manualVersion: "8.0.0", manualSize: "22 MB", manualDownloads: "100M+", manualDeveloper: "Photomath", manualFeatures: ["حل مسائل الرياضيات بالكاميرا", "خطوات الحل مفصلة", "رسوم بيانية", "دعم اللغات المتعددة", "آلة حاسبة ذكية"], manualDescription: "حل مسائل الرياضيات بالكاميرا فقط. اشرح المسألة واحصل على خطوات الحل." },
    { id: "quizlet", packageName: "com.quizlet.quizletandroid", category: "تعليم", icon: "fas fa-question-circle", name: "Quizlet", downloadLink: "https://apkpure.net/quizlet/com.quizlet.quizletandroid/download", manualVersion: "8.0.0", manualSize: "20 MB", manualDownloads: "10M+", manualDeveloper: "Quizlet", manualFeatures: ["بطاقات تعليمية", "ألعاب تعليمية", "اختبارات", "مشاركة مع الأصدقاء", "مكتبة ضخمة"], manualDescription: "بطاقات تعليمية وألعاب. تعلم أي موضوع بسهولة." },
    { id: "memrise", packageName: "com.memrise.android.memrisecompanion", category: "تعليم", icon: "fas fa-brain", name: "Memrise", downloadLink: "https://apkpure.net/memrise/com.memrise.android.memrisecompanion/download", manualVersion: "2024.0", manualSize: "32 MB", manualDownloads: "10M+", manualDeveloper: "Memrise", manualFeatures: ["تعلم اللغات", "فيديوهات لمتحدثين أصليين", "تمارين تفاعلية", "مراجعات ذكية", "مستويات متعددة"], manualDescription: "تعلم اللغات بطرق مبتكرة مع فيديوهات لمتحدثين أصليين." },
    { id: "edx", packageName: "org.edx.mobile", category: "تعليم", icon: "fas fa-university", name: "EdX", downloadLink: "https://apkpure.net/edx/org.edx.mobile/download", manualVersion: "3.0.0", manualSize: "35 MB", manualDownloads: "5M+", manualDeveloper: "EdX", manualFeatures: ["دورات من جامعات عالمية", "برامج معتمدة", "محتوى فيديو", "تمارين تفاعلية", "تعلم مجاني"], manualDescription: "دورات من جامعات عالمية مثل هارفارد وMIT. تعلم مجاناً." },

    // ========== تطبيقات ترفيه (10) ==========
    { id: "netflix", packageName: "com.netflix.mediaclient", category: "ترفيه", icon: "fab fa-netflix", name: "Netflix", downloadLink: "https://apkpure.net/netflix/com.netflix.mediaclient/download", manualVersion: "8.0.0", manualSize: "65 MB", manualDownloads: "1B+", manualDeveloper: "Netflix", manualFeatures: ["أفلام ومسلسلات", "محتوى حصري", "تحميل للمشاهدة دون اتصال", "مشاهدة على عدة شاشات", "توصيات ذكية"], manualDescription: "مشاهدة الأفلام والمسلسلات الحصرية. محتوى متنوع يناسب جميع الأذواق." },
    { id: "youtube", packageName: "com.google.android.youtube", category: "ترفيه", icon: "fab fa-youtube", name: "YouTube", downloadLink: "https://apkpure.net/youtube/com.google.android.youtube/download", manualVersion: "19.0.0", manualSize: "55 MB", manualDownloads: "10B+", manualDeveloper: "Google", manualFeatures: ["مشاهدة الفيديوهات", "قنوات ومشاهير", "بث مباشر", "تحميل للمشاهدة دون اتصال (بريميوم)", "توصيات ذكية"], manualDescription: "مشاهدة الفيديوهات. تابع قنواتك المفضلة واكتشف محتوى جديد." },
    { id: "spotify", packageName: "com.spotify.music", category: "ترفيه", icon: "fab fa-spotify", name: "Spotify", downloadLink: "https://apkpure.net/spotify/com.spotify.music/download", manualVersion: "8.0.0", manualSize: "48 MB", manualDownloads: "1B+", manualDeveloper: "Spotify", manualFeatures: ["بث الموسيقى والبودكاست", "قوائم تشغيل مخصصة", "تحميل للاستماع دون اتصال (بريميوم)", "ملايين الأغاني", "اكتشاف موسيقى جديدة"], manualDescription: "بث الموسيقى والبودكاست. استمع لملايين الأغاني مجاناً." },
    { id: "anghami", packageName: "com.anghami.download", category: "ترفيه", icon: "fas fa-music", name: "Anghami", downloadLink: "https://apkpure.net/anghami/com.anghami.download/download", manualVersion: "7.0.0", manualSize: "42 MB", manualDownloads: "50M+", manualDeveloper: "Anghami", manualFeatures: ["بث الموسيقى العربية", "أغاني حصرية", "بودكاست عربي", "تحميل للاستماع دون اتصال", "قوائم تشغيل مخصصة"], manualDescription: "تطبيق الموسيقى العربي الأول. استمع لأحدث الأغاني العربية." },
    { id: "tiktok", packageName: "com.zhiliaoapp.musically", category: "ترفيه", icon: "fab fa-tiktok", name: "TikTok", downloadLink: "https://apkpure.net/tiktok/com.zhiliaoapp.musically/download", manualVersion: "33.0.0", manualSize: "150 MB", manualDownloads: "2B+", manualDeveloper: "ByteDance", manualFeatures: ["مقاطع فيديو قصيرة", "موسيقى ومؤثرات", "بث مباشر", "تفاعل مع المجتمع", "تحديات يومية"], manualDescription: "مقاطع فيديو قصيرة وممتعة. اكتشف المحتوى الإبداعي." },
    { id: "twitch", packageName: "tv.twitch.android.app", category: "ترفيه", icon: "fab fa-twitch", name: "Twitch", downloadLink: "https://apkpure.net/twitch/tv.twitch.android.app/download", manualVersion: "15.0.0", manualSize: "60 MB", manualDownloads: "100M+", manualDeveloper: "Twitch", manualFeatures: ["بث الألعاب المباشر", "دردشة مع المجتمع", "متابعة المفضلين", "فيديوهات مسجلة", "إعلانات محدودة"], manualDescription: "بث الألعاب المباشر. تابع أشهر اللاعبين واستمتع بالتفاعل." },
    { id: "shahid", packageName: "net.mbc.shahid.download", category: "ترفيه", icon: "fas fa-tv", name: "Shahid", downloadLink: "https://apkpure.net/shahid/net.mbc.shahid.download/download", manualVersion: "8.0.0", manualSize: "50 MB", manualDownloads: "50M+", manualDeveloper: "MBC", manualFeatures: ["محتوى عربي حصري", "مسلسلات وبرامج", "أفلام عربية وعالمية", "بث مباشر للقنوات", "تحميل للمشاهدة دون اتصال"], manualDescription: "منصة المحتوى العربي من MBC. شاهد أحدث المسلسلات والبرامج." },
    { id: "osn", packageName: "com.osn.streaming", category: "ترفيه", icon: "fas fa-play", name: "OSN", downloadLink: "https://apkpure.net/osn/com.osn.streaming/download", manualVersion: "2.0.0", manualSize: "45 MB", manualDownloads: "5M+", manualDeveloper: "OSN", manualFeatures: ["أفلام ومسلسلات حصرية", "محتوى أمريكي وعالمي", "بث مباشر", "تحميل للمشاهدة دون اتصال", "جودة عالية"], manualDescription: "منصة أفلام ومسلسلات حصرية. استمتع بأحدث المحتوى الأمريكي والعالمي." },
    { id: "vimeo", packageName: "com.vimeo.android.videoapp", category: "ترفيه", icon: "fab fa-vimeo", name: "Vimeo", downloadLink: "https://apkpure.net/vimeo/com.vimeo.android.videoapp/download", manualVersion: "12.0.0", manualSize: "40 MB", manualDownloads: "10M+", manualDeveloper: "Vimeo", manualFeatures: ["فيديوهات احترافية", "محتوى فني وثقافي", "تحميل للمشاهدة دون اتصال", "بدون إعلانات", "جودة عالية"], manualDescription: "مشاهدة فيديوهات احترافية. محتوى فني وثقافي بجودة عالية." },
    { id: "dailymotion", packageName: "com.dailymotion.dailymotion", category: "ترفيه", icon: "fab fa-dailymotion", name: "Dailymotion", downloadLink: "https://apkpure.net/dailymotion/com.dailymotion.dailymotion/download", manualVersion: "3.0.0", manualSize: "35 MB", manualDownloads: "50M+", manualDeveloper: "Dailymotion", manualFeatures: ["مشاهدة الفيديوهات", "محتوى متنوع", "بث مباشر", "توصيات ذكية", "تحميل للمشاهدة دون اتصال"], manualDescription: "منصة فيديوهات بديلة لليوتيوب. اكتشف محتوى جديد ومتنوع." },

    // ========== أدوات إضافية (10) ==========
    { id: "truecaller", packageName: "com.truecaller", category: "أدوات", icon: "fas fa-phone-alt", name: "Truecaller", downloadLink: "https://apkpure.net/truecaller/com.truecaller/download", manualVersion: "13.0.0", manualSize: "40 MB", manualDownloads: "500M+", manualDeveloper: "Truecaller", manualFeatures: ["معرف المتصلين", "حظر المكالمات المزعجة", "البحث عن الأرقام", "تسجيل المكالمات", "المراسلة الذكية"], manualDescription: "معرف المتصلين وحظر المكالمات المزعجة. تعرف على من يتصل بك قبل الرد." },
    { id: "gboard", packageName: "com.google.android.inputmethod.latin", category: "أدوات", icon: "fas fa-keyboard", name: "Gboard", downloadLink: "https://apkpure.net/gboard/com.google.android.inputmethod.latin/download", manualVersion: "13.0.0", manualSize: "45 MB", manualDownloads: "1B+", manualDeveloper: "Google", manualFeatures: ["لوحة مفاتيح سريعة", "بحث مدمج من جوجل", "ترجمة فورية", "إيموجي وملصقات", "كتابة بالصوت"], manualDescription: "لوحة مفاتيح جوجل مع بحث مدمج وترجمة فورية." },
    { id: "swiftkey", packageName: "com.touchtype.swiftkey", category: "أدوات", icon: "fas fa-keyboard", name: "SwiftKey", downloadLink: "https://apkpure.net/swiftkey/com.touchtype.swiftkey/download", manualVersion: "9.0.0", manualSize: "38 MB", manualDownloads: "500M+", manualDeveloper: "Microsoft", manualFeatures: ["توقع الكلمات الذكي", "تصحيح تلقائي", "تخصيص المظهر", "كتابة بالصوت", "ترجمة مدمجة"], manualDescription: "لوحة مفاتيح ذكية تتعلم أسلوب كتابتك." },
    { id: "nova-launcher", packageName: "com.teslacoilsw.launcher", category: "أدوات", icon: "fas fa-home", name: "Nova Launcher", downloadLink: "https://apkpure.net/nova-launcher/com.teslacoilsw.launcher/download", manualVersion: "8.0.0", manualSize: "12 MB", manualDownloads: "10M+", manualDeveloper: "TeslaCoil", manualFeatures: ["تخصيص سطح المكتب", "أيقونات مخصصة", "رسوم متحركة", "دعم الإيماءات", "خلفيات متحركة"], manualDescription: "مشغل سطح المكتب الأكثر تخصيصاً. غير شكل هاتفك بالكامل." },
    { id: "zarchiver", packageName: "ru.zdevs.zarchiver", category: "أدوات", icon: "fas fa-file-archive", name: "ZArchiver", downloadLink: "https://apkpure.net/zarchiver/ru.zdevs.zarchiver/download", manualVersion: "1.0.0", manualSize: "8 MB", manualDownloads: "50M+", manualDeveloper: "Zdevs", manualFeatures: ["فك ضغط الملفات", "ضغط الملفات", "دعم صيغ متعددة (ZIP, RAR, 7z)", "إدارة الملفات", "واجهة بسيطة"], manualDescription: "ضغط وفك ضغط الملفات بسهولة. يدعم جميع الصيغ المعروفة." },
    { id: "xender", packageName: "com.xender.main", category: "أدوات", icon: "fas fa-wifi", name: "Xender", downloadLink: "https://apkpure.net/xender/com.xender.main/download", manualVersion: "7.0.0", manualSize: "25 MB", manualDownloads: "100M+", manualDeveloper: "Xender", manualFeatures: ["مشاركة الملفات بدون إنترنت", "سرعة عالية", "مشاركة التطبيقات", "مشاركة الفيديوهات", "مشاركة الموسيقى"], manualDescription: "مشاركة الملفات بسرعة عالية بدون الحاجة إلى إنترنت." },
    { id: "ccleaner", packageName: "com.piriform.ccleaner", category: "أدوات", icon: "fas fa-broom", name: "CCleaner", downloadLink: "https://apkpure.net/ccleaner/com.piriform.ccleaner/download", manualVersion: "24.0.0", manualSize: "15 MB", manualDownloads: "50M+", manualDeveloper: "Piriform", manualFeatures: ["تنظيف الملفات المؤقتة", "إدارة التطبيقات", "مراقبة أداء الجهاز", "تحسين البطارية", "حذف الملفات الكبيرة"], manualDescription: "تنظيف الجهاز وتحسين الأداء. احصل على مساحة تخزين أكبر وأداء أسرع." },
    { id: "avg-antivirus", packageName: "com.avg.antivirus", category: "أدوات", icon: "fas fa-shield-virus", name: "AVG Antivirus", downloadLink: "https://apkpure.net/avg-antivirus/com.avg.antivirus/download", manualVersion: "24.0.0", manualSize: "35 MB", manualDownloads: "100M+", manualDeveloper: "AVG", manualFeatures: ["حماية من الفيروسات", "فحص التطبيقات", "حماية الخصوصية", "تنظيف الملفات", "قفل التطبيقات"], manualDescription: "حماية جهازك من الفيروسات والبرامج الضارة." },
    { id: "kaspersky", packageName: "com.kms.free", category: "أدوات", icon: "fas fa-shield", name: "Kaspersky", downloadLink: "https://apkpure.net/kaspersky/com.kms.free/download", manualVersion: "11.0.0", manualSize: "30 MB", manualDownloads: "50M+", manualDeveloper: "Kaspersky", manualFeatures: ["حماية من الفيروسات", "مكافحة البرامج الضارة", "حماية الخصوصية", "قفل التطبيقات", "الحماية من السرقة"], manualDescription: "حماية متقدمة من الفيروسات والتهديدات الإلكترونية." },
    { id: "bitdefender", packageName: "com.bitdefender.security", category: "أدوات", icon: "fas fa-lock", name: "Bitdefender", downloadLink: "https://apkpure.net/bitdefender/com.bitdefender.security/download", manualVersion: "3.0.0", manualSize: "28 MB", manualDownloads: "10M+", manualDeveloper: "Bitdefender", manualFeatures: ["مكافحة الفيروسات", "حماية الخصوصية", "حماية التصفح", "قفل التطبيقات", "تنظيف الملفات"], manualDescription: "مكافحة الفيروسات وحماية الخصوصية." }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = appsConfig;
} else {
    window.appsConfig = appsConfig;
}
