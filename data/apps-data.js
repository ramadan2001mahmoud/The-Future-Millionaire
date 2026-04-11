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
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = appsConfig;
} else {
    window.appsConfig = appsConfig;
}
