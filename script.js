// ============================================
//  قاموس المرادفات للبحث (Synonyms Dictionary)
// ============================================
const synonyms = {
    "ببجي": "pubg", "pubg": "pubg", "ببجى": "pubg", "بب جي": "pubg",
    "فري فاير": "free fire", "فريفاير": "free fire",
    "كول أوف ديوتي": "call of duty", "كول اوف ديوتي": "call of duty", "كود": "call of duty",
    "كلاش اوف كلانس": "clash of clans", "كوك": "clash of clans",
    "كلاش رويال": "clash royale",
    "موبايل ليجندز": "mobile legends",
    "براول ستارز": "brawl stars", "برول ستارز": "brawl stars",
    "جينشين": "genshin impact", "جينشين إمباكت": "genshin impact",
    "ماين كرافت": "minecraft",
    "روبلوكس": "roblox", "روبلكس": "roblox",
    "كاندي كراش": "candy crush",
    "ساب واي": "subway surfers", "ساب واي سيرفرز": "subway surfers",
    "تمبل رن": "temple run",
    "اسفلت": "asphalt",
    "شات جي بي تي": "chatgpt", "تشات جي بي تي": "chatgpt", "chat gpt": "chatgpt",
    "ميدجورني": "midjourney", "ميد جورني": "midjourney",
    "دالي": "dalle", "دال اي": "dalle", "دال إي": "dalle",
    "رن واي": "runway",
    "إيفين لابس": "elevenlabs", "ايفين لابس": "elevenlabs",
    "كلود": "claude",
    "جيميني": "gemini",
    "ديب سيك": "deepseek",
    "بيربلكستي": "perplexity",
    "كوبي": "copy.ai",
    "جاسبر": "jasper",
    "رايت سونيك": "writesonic",
    "رايتير": "rytr"
};

function expandSearchQuery(query) {
    let expanded = [query.toLowerCase().trim()];
    for (const [key, value] of Object.entries(synonyms)) {
        if (query.toLowerCase().includes(key)) {
            expanded.push(value);
            expanded.push(key);
        }
        if (value.includes(query.toLowerCase()) || query.toLowerCase().includes(value)) {
            expanded.push(key);
            expanded.push(value);
        }
    }
    return [...new Set(expanded)];
}

function normalizeText(text) {
    if (!text) return '';
    let normalized = text.toLowerCase().trim();
    normalized = normalized.normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "");
    normalized = normalized.replace(/[^\w\s\u0600-\u06FF]/g, ' ');
    normalized = normalized.replace(/\s+/g, ' ').trim();
    return normalized;
}

function enhancedFuzzySearch(query, targetText) {
    if (!query) return true;
    const targetLower = targetText.toLowerCase();
    const expandedQueries = expandSearchQuery(query);
    for (const expQuery of expandedQueries) {
        if (targetLower.includes(expQuery)) return true;
    }
    const normalizedQuery = normalizeText(query);
    const normalizedTarget = normalizeText(targetText);
    if (normalizedTarget.includes(normalizedQuery)) return true;
    const queryWords = normalizedQuery.split(/\s+/);
    let matchCount = 0;
    for (const word of queryWords) {
        if (word.length < 2) continue;
        if (normalizedTarget.includes(word)) matchCount++;
    }
    if (matchCount >= queryWords.length * 0.5 && matchCount > 0) return true;
    return false;
}

// ============================================
//  قائمة الأدوات
// ============================================
let tools = [
    { name: "ChatGPT (شات جي بي تي)", category: "نصوص", url: "https://chat.openai.com", description: "نموذج لغوي متقدم للمحادثة والكتابة والبرمجة", icon: "fa-comments", clicks: 0 },
    { name: "Claude (كلود)", category: "نصوص", url: "https://claude.ai", description: "ذكاء اصطناعي أخلاقي من Anthropic للكتابة المتقدمة", icon: "fa-message", clicks: 0 },
    { name: "Perplexity AI (بيربلكستي)", category: "نصوص", url: "https://www.perplexity.ai", description: "محرك بحث ذكي يجمع بين ChatGPT والبحث المباشر", icon: "fa-globe", clicks: 0 },
    { name: "Gemini (جيميني)", category: "نصوص", url: "https://gemini.google.com", description: "نموذج جوجل المتعدد الوسائط", icon: "fa-star-of-life", clicks: 0 },
    { name: "DeepSeek (ديب سيك)", category: "نصوص", url: "https://deepseek.com", description: "نموذج صيني قوي مجاني للبرمجة والتحليل", icon: "fa-chart-line", clicks: 0 },
    { name: "Copy.ai (كوبي ايه آي)", category: "نصوص", url: "https://www.copy.ai", description: "كتابة محتوى تسويقي وإعلانات", icon: "fa-copy", clicks: 0 },
    { name: "Jasper (جاسبر)", category: "نصوص", url: "https://www.jasper.ai", description: "مساعد كتابة احترافي للشركات", icon: "fa-feather-alt", clicks: 0 },
    { name: "Writesonic (رايت سونيك)", category: "نصوص", url: "https://writesonic.com", description: "كتابة مقالات وسيو وإعلانات", icon: "fa-pen-fancy", clicks: 0 },
    { name: "Rytr (رايتير)", category: "نصوص", url: "https://rytr.me", description: "كتابة محتوى بأسعار اقتصادية", icon: "fa-pen", clicks: 0 },
    { name: "Wordtune (وورد تيون)", category: "نصوص", url: "https://www.wordtune.com", description: "إعادة صياغة وتحسين النصوص", icon: "fa-paragraph", clicks: 0 },
    { name: "QuillBot (كويل بوت)", category: "نصوص", url: "https://quillbot.com", description: "تلخيص وإعادة صياغة النصوص", icon: "fa-robot", clicks: 0 },
    { name: "Grammarly (جرامرلي)", category: "نصوص", url: "https://www.grammarly.com", description: "تصحيح الأخطاء اللغوية والنحوية", icon: "fa-spell-check", clicks: 0 },
    { name: "Kimi AI (كيمي)", category: "نصوص", url: "https://kimi.ai", description: "مساعد صيني ذكي للكتابة والترجمة", icon: "fa-language", clicks: 0 },
    { name: "Poe (بو)", category: "نصوص", url: "https://poe.com", description: "منصة تجمع عدة نماذج AI في مكان واحد", icon: "fa-comment-dots", clicks: 0 },
    { name: "Hugging Chat (هاجينج شات)", category: "نصوص", url: "https://huggingface.co/chat", description: "نماذج مفتوحة المصدر مجانية بالكامل", icon: "fa-box", clicks: 0 },
    { name: "You.com (يو دوت كوم)", category: "نصوص", url: "https://you.com", description: "محرك بحث ذكي مع AI مدمج", icon: "fa-search", clicks: 0 },
    { name: "Phind (فايند)", category: "نصوص", url: "https://phind.com", description: "محرك بحث للمطورين مع إجابات دقيقة", icon: "fa-code", clicks: 0 },
    { name: "Character AI (كاراكتر)", category: "نصوص", url: "https://character.ai", description: "تحدث مع شخصيات خيالية وتاريخية", icon: "fa-users", clicks: 0 },
    { name: "Pi AI (باي)", category: "نصوص", url: "https://pi.ai", description: "مساعد شخصي ذكي ودود للمحادثة", icon: "fa-smile", clicks: 0 },
    { name: "Cohere (كو هير)", category: "نصوص", url: "https://cohere.com", description: "منصة لتوليد النصوص للمطورين", icon: "fa-cogs", clicks: 0 },
    { name: "Midjourney (ميدجورني)", category: "صور", url: "https://www.midjourney.com", description: "أقوى أداة لتوليد صور فائقة الجودة", icon: "fa-palette", clicks: 0 },
    { name: "DALL-E 3 (دالي)", category: "صور", url: "https://openai.com/dall-e-3", description: "توليد صور إبداعية من وصف نصي", icon: "fa-image", clicks: 0 },
    { name: "Leonardo.ai (ليوناردو)", category: "صور", url: "https://leonardo.ai", description: "توليد صور وفيديوهات إبداعية مجاناً", icon: "fa-dragon", clicks: 0 },
    { name: "Stable Diffusion (ستيبل ديفيوجن)", category: "صور", url: "https://stability.ai", description: "نموذج مفتوح المصدر لتوليد الصور", icon: "fa-cube", clicks: 0 },
    { name: "Adobe Firefly (فايرفلاي)", category: "صور", url: "https://firefly.adobe.com", description: "توليد وتحرير الصور بأسلوب أدوبي", icon: "fa-fire", clicks: 0 },
    { name: "Canva AI (كانفا)", category: "صور", url: "https://www.canva.com/ai-image-generator", description: "توليد صور داخل كانفا", icon: "fa-paintbrush", clicks: 0 },
    { name: "Playground AI (بلاي جراوند)", category: "صور", url: "https://playgroundai.com", description: "تحرير الصور بالذكاء الاصطناعي", icon: "fa-sliders-h", clicks: 0 },
    { name: "Ideogram (ايدوجرام)", category: "صور", url: "https://ideogram.ai", description: "توليد صور مع نصوص مضمنة بدقة", icon: "fa-font", clicks: 0 },
    { name: "Pixelcut (بيكسل كات)", category: "صور", url: "https://pixelcut.ai", description: "إزالة الخلفية وتحرير المنتجات", icon: "fa-eraser", clicks: 0 },
    { name: "Remove.bg (ريموف بي جي)", category: "صور", url: "https://www.remove.bg", description: "إزالة خلفية الصور بضغطة واحدة", icon: "fa-magic", clicks: 0 },
    { name: "Clipdrop (كليب دروب)", category: "صور", url: "https://clipdrop.co", description: "تحرير الصور وإعادة الإضاءة", icon: "fa-sun", clicks: 0 },
    { name: "Lexica (ليكسيكا)", category: "صور", url: "https://lexica.art", description: "محرك بحث للصور المولدة بالـ AI", icon: "fa-search", clicks: 0 },
    { name: "Bing Image Creator (بينج)", category: "صور", url: "https://www.bing.com/create", description: "توليد صور مجانية من مايكروسوفت", icon: "fa-windows", clicks: 0 },
    { name: "DreamStudio (دريم ستوديو)", category: "صور", url: "https://dreamstudio.ai", description: "واجهة احترافية لـ Stable Diffusion", icon: "fa-cloud-moon", clicks: 0 },
    { name: "DeepAI (ديب ايه آي)", category: "صور", url: "https://deepai.org", description: "توليد وتحرير الصور بسهولة", icon: "fa-brain", clicks: 0 },
    { name: "Craiyon (كرايون)", category: "صور", url: "https://craiyon.com", description: "توليد صور مجاني سريع", icon: "fa-paint-roller", clicks: 0 },
    { name: "NightCafe (نايت كافيه)", category: "صور", url: "https://nightcafe.studio", description: "مجتمع لتوليد الفن بالذكاء الاصطناعي", icon: "fa-moon", clicks: 0 },
    { name: "Artbreeder (آرت بريدر)", category: "صور", url: "https://www.artbreeder.com", description: "توليد وتعديل الصور بالذكاء الاصطناعي", icon: "fa-leaf", clicks: 0 },
    { name: "Fotor AI (فوتور)", category: "صور", url: "https://www.fotor.com", description: "تعديل وتوليد الصور باحترافية", icon: "fa-camera", clicks: 0 },
    { name: "Picsart AI (بيكس آرت)", category: "صور", url: "https://picsart.com", description: "تصميم وتحرير الصور بالذكاء الاصطناعي", icon: "fa-pen-fancy", clicks: 0 },
    { name: "Runway ML (رن واي)", category: "فيديو", url: "https://runwayml.com", description: "تحرير وتوليد الفيديو بالذكاء الاصطناعي", icon: "fa-video", clicks: 0 },
    { name: "HeyGen (هي جين)", category: "فيديو", url: "https://www.heygen.com", description: "إنشاء أفلام بصور رمزية متحركة", icon: "fa-film", clicks: 0 },
    { name: "Pika Labs (بيكا لابس)", category: "فيديو", url: "https://pika.art", description: "توليد فيديوهات قصيرة من النص", icon: "fa-play-circle", clicks: 0 },
    { name: "Kaiber (كايبر)", category: "فيديو", url: "https://kaiber.ai", description: "تحويل الصور إلى فيديوهات متحركة", icon: "fa-music", clicks: 0 },
    { name: "Sora (سورا)", category: "فيديو", url: "https://openai.com/sora", description: "توليد فيديوهات واقعية من النص (قيد الإصدار)", icon: "fa-cloud", clicks: 0 },
    { name: "ElevenLabs (إيفين لابس)", category: "صوت", url: "https://elevenlabs.io", description: "توليد أصوات واقعية من النص", icon: "fa-microphone-alt", clicks: 0 },
    { name: "Murf (مورف)", category: "صوت", url: "https://murf.ai", description: "تعليق صوتي احترافي", icon: "fa-headphones", clicks: 0 },
    { name: "Resemble AI (ريسمبل)", category: "صوت", url: "https://www.resemble.ai", description: "نسخ صوتي احترافي", icon: "fa-voice", clicks: 0 },
    { name: "Play.ht (بلاي دوت إتش تي)", category: "صوت", url: "https://play.ht", description: "تحويل النص إلى صوت عالي الجودة", icon: "fa-volume-up", clicks: 0 },
    { name: "Descript (ديسكربت)", category: "صوت", url: "https://www.descript.com", description: "تحرير الصوت والفيديو بالنص", icon: "fa-edit", clicks: 0 },
    { name: "Lumen5 (لومين)", category: "فيديو", url: "https://lumen5.com", description: "تحويل النص إلى فيديو تلقائياً", icon: "fa-lightbulb", clicks: 0 },
    { name: "InVideo (إن فيديو)", category: "فيديو", url: "https://invideo.io", description: "صناعة فيديوهات احترافية بسهولة", icon: "fa-video-slash", clicks: 0 },
    { name: "VEED.io (فيد دوت أي او)", category: "فيديو", url: "https://veed.io", description: "تحرير فيديو أونلاين بالذكاء الاصطناعي", icon: "fa-edit", clicks: 0 },
    { name: "Wondershare Virbo (فيربو)", category: "فيديو", url: "https://virbo.wondershare.com", description: "إنشاء أفلام بأفاتار رقمي", icon: "fa-user-astronaut", clicks: 0 },
    { name: "Rask.ai (راسك)", category: "صوت", url: "https://rask.ai", description: "ترجمة ودبلجة الفيديوهات", icon: "fa-language", clicks: 0 },
    { name: "Voice.ai (فويس)", category: "صوت", url: "https://voice.ai", description: "تغيير الصوت بتقنية AI", icon: "fa-microphone", clicks: 0 },
    { name: "GitHub Copilot (كوبايلوت)", category: "برمجة", url: "https://github.com/features/copilot", description: "مساعد برمجي ذكي", icon: "fa-code", clicks: 0 },
    { name: "Cursor (كرسر)", category: "برمجة", url: "https://cursor.sh", description: "محرر كود مع AI مدمج", icon: "fa-laptop-code", clicks: 0 },
    { name: "Replit AI (ريبلت)", category: "برمجة", url: "https://replit.com", description: "بيئة تطوير سحابية مع AI", icon: "fa-cloud-upload-alt", clicks: 0 },
    { name: "Tabnine (تاب ناين)", category: "برمجة", url: "https://www.tabnine.com", description: "إكمال الكود بالذكاء الاصطناعي", icon: "fa-terminal", clicks: 0 },
    { name: "Codeium (كوديوم)", category: "برمجة", url: "https://codeium.com", description: "مساعد برمجي مجاني", icon: "fa-code-branch", clicks: 0 },
    { name: "Amazon CodeWhisperer (كود ويسبيرر)", category: "برمجة", url: "https://aws.amazon.com/codewhisperer", description: "مساعد برمجي من أمازون", icon: "fa-cloud", clicks: 0 },
    { name: "Mutable.ai (ميوتيبل)", category: "برمجة", url: "https://mutable.ai", description: "توليد كود سريع من الوصف", icon: "fa-bolt", clicks: 0 },
    { name: "AskCodi (اسك كودي)", category: "برمجة", url: "https://www.askcodi.com", description: "مساعد برمجي متعدد اللغات", icon: "fa-question-circle", clicks: 0 },
    { name: "Blackbox AI (بلاك بوكس)", category: "برمجة", url: "https://www.blackbox.ai", description: "مساعد برمجي متخصص في الأكواد", icon: "fa-cube", clicks: 0 },
    { name: "CodeGPT (كود جي بي تي)", category: "برمجة", url: "https://codegpt.co", description: "إضافة ذكاء اصطناعي لمحرر الكود", icon: "fa-robot", clicks: 0 },
    { name: "Mintlify (مينتليفاي)", category: "برمجة", url: "https://mintlify.com", description: "كتابة توثيق الكود تلقائياً", icon: "fa-book", clicks: 0 },
    { name: "AICommit (ايه آي كوميت)", category: "برمجة", url: "https://aicommit.app", description: "كتابة رسائل Commit ذكية", icon: "fa-git-alt", clicks: 0 },
    { name: "Swimm (سويم)", category: "برمجة", url: "https://swimm.io", description: "توثيق الكود بالذكاء الاصطناعي", icon: "fa-swimming-pool", clicks: 0 },
    { name: "Bloop (بلوب)", category: "برمجة", url: "https://bloop.ai", description: "البحث في قاعدة الكود باللغة الطبيعية", icon: "fa-search", clicks: 0 },
    { name: "Tableau AI (تابلو)", category: "تحليل", url: "https://www.tableau.com", description: "تحليل بيانات وتصور ذكي", icon: "fa-chart-bar", clicks: 0 },
    { name: "Polymer (بوليمر)", category: "تحليل", url: "https://www.polymersearch.com", description: "تحليل بيانات بدون كود", icon: "fa-chart-pie", clicks: 0 },
    { name: "Julius AI (جوليوس)", category: "تحليل", url: "https://julius.ai", description: "تحليل بيانات بالمحادثة", icon: "fa-robot", clicks: 0 },
    { name: "Notion AI (نوشن)", category: "إنتاجية", url: "https://www.notion.so", description: "مساعد ذكي داخل نوتيون", icon: "fa-book", clicks: 0 },
    { name: "Mem AI (ميم)", category: "إنتاجية", url: "https://mem.ai", description: "تدوين ذكي بالذكاء الاصطناعي", icon: "fa-brain", clicks: 0 },
    { name: "Otter.ai (أوتر)", category: "إنتاجية", url: "https://otter.ai", description: "تفريغ المحادثات والاجتماعات", icon: "fa-file-alt", clicks: 0 },
    { name: "Fireflies.ai (فايرفلايز)", category: "إنتاجية", url: "https://fireflies.ai", description: "تسجيل وتفريغ اجتماعات الزوم", icon: "fa-video", clicks: 0 },
    { name: "Tome (توم)", category: "إنتاجية", url: "https://tome.app", description: "إنشاء عروض تقديمية بالذكاء الاصطناعي", icon: "fa-chalkboard", clicks: 0 },
    { name: "Gamma AI (جاما)", category: "إنتاجية", url: "https://gamma.app", description: "إنشاء عروض تقديمية بالذكاء الاصطناعي", icon: "fa-chalkboard", clicks: 0 },
    { name: "Beautiful AI (بيوتيفول)", category: "إنتاجية", url: "https://beautiful.ai", description: "تصميم عروض احترافية بذكاء", icon: "fa-chart-line", clicks: 0 },
    { name: "Reclaim AI (ريكليم)", category: "إنتاجية", url: "https://reclaim.ai", description: "جدولة المهام بذكاء", icon: "fa-calendar-check", clicks: 0 },
    { name: "Motion (موشن)", category: "إنتاجية", url: "https://www.usemotion.com", description: "تنظيم الوقت والمهام بالذكاء الاصطناعي", icon: "fa-clock", clicks: 0 },
    { name: "Taskade (تاسكيد)", category: "إنتاجية", url: "https://www.taskade.com", description: "إدارة المهام والفريق بالذكاء الاصطناعي", icon: "fa-tasks", clicks: 0 },
    { name: "PUBG Mobile (ببجي)", category: "ألعاب", url: "https://www.pubg.com", description: "لعبة الباتل رويال الشهيرة - Battlegrounds", icon: "fa-crosshairs", clicks: 0 },
    { name: "Free Fire (فري فاير)", category: "ألعاب", url: "https://ff.garena.com", description: "لعبة الباتل رويال السريعة", icon: "fa-fire", clicks: 0 },
    { name: "Call of Duty (كول أوف ديوتي)", category: "ألعاب", url: "https://www.callofduty.com", description: "لعبة إطلاق النار الاحترافية", icon: "fa-gun", clicks: 0 },
    { name: "Clash of Clans (كلاش أوف كلانس)", category: "ألعاب", url: "https://clashofclans.com", description: "لعبة بناء القرى والحروب", icon: "fa-chess-king", clicks: 0 },
    { name: "Among Us (أمونج أس)", category: "ألعاب", url: "https://www.innersloth.com/games/among-us", description: "لعبة الخيانة الجماعية", icon: "fa-user-astronaut", clicks: 0 },
    { name: "Minecraft (ماين كرافت)", category: "ألعاب", url: "https://www.minecraft.net", description: "لعبة البناء والإبداع", icon: "fa-cube", clicks: 0 },
    { name: "Roblox (روبلكس)", category: "ألعاب", url: "https://www.roblox.com", description: "منصة ألعاب متعددة", icon: "fa-gamepad", clicks: 0 },
    { name: "Genshin Impact (جينشين إمباكت)", category: "ألعاب", url: "https://genshin.hoyoverse.com", description: "لعبة تقمص أدوار عالم مفتوح", icon: "fa-dragon", clicks: 0 },
    { name: "Mobile Legends (موبايل ليجندز)", category: "ألعاب", url: "https://m.mobilelegends.com", description: "لعبة MOBA الشهيرة", icon: "fa-users", clicks: 0 },
    { name: "Brawl Stars (برول ستارز)", category: "ألعاب", url: "https://brawlstars.com", description: "لعبة قتال سريعة", icon: "fa-fist-raised", clicks: 0 },
    { name: "Candy Crush (كاندي كراش)", category: "ألعاب", url: "https://www.king.com/game/candycrush", description: "لعبة الألغاز الشهيرة", icon: "fa-candy-cane", clicks: 0 },
    { name: "Subway Surfers (ساب واي سيرفرز)", category: "ألعاب", url: "https://www.subwaysurfers.com", description: "لعبة الجري الكلاسيكية", icon: "fa-subway", clicks: 0 },
    { name: "Temple Run (تمبل رن)", category: "ألعاب", url: "https://www.templerun.com", description: "لعبة الجري والمغامرة", icon: "fa-running", clicks: 0 },
    { name: "Asphalt 9 (اسفلت 9)", category: "ألعاب", url: "https://www.gameloft.com/game/asphalt-9", description: "لعبة سباقات سيارات", icon: "fa-car-side", clicks: 0 },
    { name: "Jasper AI (جاسبر)", category: "تسويق", url: "https://www.jasper.ai", description: "كتابة محتوى تسويقي احترافي", icon: "fa-chart-simple", clicks: 0 },
    { name: "Copy.ai (كوبي)", category: "تسويق", url: "https://www.copy.ai", description: "كتابة نصوص إعلانية وتسويقية", icon: "fa-copy", clicks: 0 },
    { name: "Rytr (رايت)", category: "تسويق", url: "https://rytr.me", description: "إنشاء محتوى تسويقي بأسعار اقتصادية", icon: "fa-pen-nib", clicks: 0 },
    { name: "Writer (رايتير)", category: "تسويق", url: "https://writer.com", description: "منصة متكاملة لكتابة المحتوى التسويقي", icon: "fa-feather", clicks: 0 },
    { name: "Uizard (ويزارد)", category: "تصميم", url: "https://uizard.io", description: "تحويل الرسومات إلى تصميمات رقمية", icon: "fa-magic", clicks: 0 },
    { name: "Figma AI (فيجما)", category: "تصميم", url: "https://www.figma.com", description: "توليد وتحرير التصميمات بالذكاء الاصطناعي", icon: "fa-pen-ruler", clicks: 0 },
    { name: "Adobe Sensei (سينسي)", category: "تصميم", url: "https://www.adobe.com/sensei.html", description: "منصة الذكاء الاصطناعي من أدوبي", icon: "fa-adobe", clicks: 0 },
    { name: "Khroma (كرومة)", category: "تصميم", url: "https://www.khroma.co", description: "توليد لوحات ألوان ذكية", icon: "fa-palette", clicks: 0 }
];

// ============================================
//  باقي الدوال (كما هي)
// ============================================

function loadClicksFromStorage() {
    const savedClicks = localStorage.getItem("toolsClicks");
    if (savedClicks) {
        const clicksData = JSON.parse(savedClicks);
        tools = tools.map(tool => ({ ...tool, clicks: clicksData[tool.name] || 0 }));
    }
}

function saveClicksToStorage() {
    const clicksData = {};
    tools.forEach(tool => { clicksData[tool.name] = tool.clicks; });
    localStorage.setItem("toolsClicks", JSON.stringify(clicksData));
}

function updateStatsDisplay() {
    const totalToolsSpan = document.getElementById("totalTools");
    if (totalToolsSpan) totalToolsSpan.textContent = tools.length;
}

function addToFavorites(toolName) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
        if (confirm(t("msg.login-required"))) window.location.href = "login.html";
        return false;
    }
    let favorites = JSON.parse(localStorage.getItem(`favorites_${currentUser.id}`) || "[]");
    if (!favorites.includes(toolName)) {
        favorites.push(toolName);
        localStorage.setItem(`favorites_${currentUser.id}`, JSON.stringify(favorites));
        alert(t("msg.added-favorite", { tool: toolName }));
        return true;
    } else {
        favorites = favorites.filter(f => f !== toolName);
        localStorage.setItem(`favorites_${currentUser.id}`, JSON.stringify(favorites));
        alert(t("msg.removed-favorite", { tool: toolName }));
        return false;
    }
}

function isFavorite(toolName) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return false;
    const favorites = JSON.parse(localStorage.getItem(`favorites_${currentUser.id}`) || "[]");
    return favorites.includes(toolName);
}

function getUserStats() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return { clicks: 0, favorites: 0 };
    const userClicks = JSON.parse(localStorage.getItem(`userClicks_${currentUser.id}`) || "{}");
    const totalClicks = Object.values(userClicks).reduce((a, b) => a + b, 0);
    const favorites = JSON.parse(localStorage.getItem(`favorites_${currentUser.id}`) || "[]");
    return { clicks: totalClicks, favorites: favorites.length };
}

function updateNavbarStats() {
    const stats = getUserStats();
    const statsSpan = document.getElementById("userStats");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (statsSpan) {
        if (currentUser) {
            statsSpan.style.display = "inline";
            statsSpan.innerHTML = `<i class="fas fa-heart"></i> ${stats.favorites} | <i class="fas fa-mouse-pointer"></i> ${stats.clicks}`;
        } else {
            let tempClicks = localStorage.getItem("tempClicks") || "0";
            statsSpan.style.display = "inline";
            statsSpan.innerHTML = `<i class="fas fa-heart"></i> 0 | <i class="fas fa-mouse-pointer"></i> ${tempClicks}`;
        }
    }
}

const GAS_URL = "https://script.google.com/macros/s/AKfycbyGri-e8pequyYJ-DkwCyHsk17NsozvxLtbahssbXqVnTyfXjiHETSNHtlWDq2vaDXV4w/exec";

async function updateGlobalCounter(type, shouldIncrement = true) {
    try {
        let url = `${GAS_URL}?type=${type}`;
        if (shouldIncrement) {
            const postResponse = await fetch(url, { method: "POST" });
            const newData = await postResponse.json();
            return newData.count;
        } else {
            const getResponse = await fetch(url);
            const currentData = await getResponse.json();
            return currentData.count;
        }
    } catch (error) {
        console.error(`Error updating ${type}:`, error);
        return null;
    }
}

async function recordGlobalClick(toolName) {
    const tool = tools.find(t => t.name === toolName);
    if (tool) { tool.clicks++; saveClicksToStorage(); }
    updateGlobalCounter("click", true).then(totalClicks => {
        const totalClicksSpan = document.getElementById("totalClicks");
        if (totalClicksSpan && totalClicks) totalClicksSpan.textContent = totalClicks;
    });
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        let userClicks = JSON.parse(localStorage.getItem(`userClicks_${currentUser.id}`) || "{}");
        userClicks[toolName] = (userClicks[toolName] || 0) + 1;
        localStorage.setItem(`userClicks_${currentUser.id}`, JSON.stringify(userClicks));
        updateNavbarStats();
    } else {
        let tempClicks = parseInt(localStorage.getItem("tempClicks") || "0");
        tempClicks++;
        localStorage.setItem("tempClicks", tempClicks.toString());
        updateNavbarStats();
    }
}

async function recordNewUser() {
    const totalUsers = await updateGlobalCounter("user", true);
    const totalUsersSpan = document.getElementById("totalUsers");
    if (totalUsersSpan && totalUsers) totalUsersSpan.textContent = totalUsers;
}

function updateVisitorCounter() {
    const lastVisit = localStorage.getItem("lastVisitorUpdate");
    const now = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    if (!lastVisit || (now - parseInt(lastVisit)) > oneDay) {
        updateGlobalCounter("visitor", true).then(visitorCount => {
            const visitorSpan = document.getElementById("visitorCount");
            if (visitorSpan && visitorCount) visitorSpan.textContent = visitorCount;
        });
        localStorage.setItem("lastVisitorUpdate", now.toString());
    } else {
        updateGlobalCounter("visitor", false).then(visitorCount => {
            const visitorSpan = document.getElementById("visitorCount");
            if (visitorSpan && visitorCount) visitorSpan.textContent = visitorCount;
        });
    }
}

function updateAuthUI() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const authLink = document.getElementById("authLink");
    const userGreeting = document.getElementById("userGreeting");
    const logoutBtn = document.getElementById("logoutBtn");
    const dashboardLink = document.getElementById("dashboardLink");
    const userStatsSpan = document.getElementById("userStats");
    if (currentUser) {
        if (authLink) authLink.style.display = "none";
        if (userGreeting) {
            userGreeting.style.display = "inline";
            userGreeting.textContent = t("msg.welcome", { name: currentUser.name });
        }
        if (logoutBtn) logoutBtn.style.display = "inline";
        if (dashboardLink) dashboardLink.style.display = "inline";
        if (userStatsSpan) {
            userStatsSpan.style.display = "inline";
            const stats = getUserStats();
            userStatsSpan.innerHTML = `<i class="fas fa-heart"></i> ${stats.favorites} | <i class="fas fa-mouse-pointer"></i> ${stats.clicks}`;
        }
    } else {
        if (authLink) authLink.style.display = "inline";
        if (userGreeting) userGreeting.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "none";
        if (dashboardLink) dashboardLink.style.display = "none";
        if (userStatsSpan) {
            userStatsSpan.style.display = "inline";
            let tempClicks = localStorage.getItem("tempClicks") || "0";
            userStatsSpan.innerHTML = `<i class="fas fa-heart"></i> 0 | <i class="fas fa-mouse-pointer"></i> ${tempClicks}`;
        }
    }
}

function setupLogout() {
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("currentUser");
            updateAuthUI();
            window.location.reload();
        });
    }
}

function setupSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    if (!searchInput) return;
    function performSearch() {
        const query = searchInput.value;
        const filtered = tools.filter(tool => enhancedFuzzySearch(query, tool.name) || enhancedFuzzySearch(query, tool.description) || enhancedFuzzySearch(query, tool.category));
        displayTools(filtered);
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
            if (btn.textContent === t("filter.all")) btn.classList.add("active");
        });
    }
    searchInput.addEventListener("input", performSearch);
    searchInput.addEventListener("keypress", (e) => { if (e.key === "Enter") performSearch(); });
    if (searchBtn) searchBtn.addEventListener("click", performSearch);
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.checked = (theme === 'dark');
}

function setupThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    toggle.addEventListener('change', (e) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

function buildDropdowns() {
    const categories = [...new Set(tools.map(t => t.category))];
    const dropdownContainer = document.getElementById("mainDropdown");
    if (dropdownContainer) {
        dropdownContainer.innerHTML = "";
        categories.forEach(cat => {
            const link = document.createElement("a");
            link.href = "#";
            const categoryTranslation = {
                "نصوص": t("category.text"), "صور": t("category.image"), "فيديو": t("category.video"),
                "صوت": t("category.audio"), "برمجة": t("category.programming"), "تحليل": t("category.analysis"),
                "إنتاجية": t("category.productivity"), "تسويق": t("category.marketing"), "تصميم": t("category.design"),
                "ألعاب": t("category.games")
            };
            link.textContent = categoryTranslation[cat] || cat;
            link.addEventListener("click", (e) => {
                e.preventDefault();
                filterToolsByCategory(cat);
            });
            dropdownContainer.appendChild(link);
        });
    }
}

function buildFilterButtons() {
    const categories = ["الكل", ...new Set(tools.map(t => t.category))];
    const filterSection = document.querySelector(".filter-section");
    if (!filterSection) return;
    filterSection.innerHTML = "";
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        if (cat === "الكل") btn.classList.add("active");
        const categoryTranslation = {
            "الكل": t("filter.all"), "نصوص": t("category.text"), "صور": t("category.image"), "فيديو": t("category.video"),
            "صوت": t("category.audio"), "برمجة": t("category.programming"), "تحليل": t("category.analysis"),
            "إنتاجية": t("category.productivity"), "تسويق": t("category.marketing"), "تصميم": t("category.design"),
            "ألعاب": t("category.games")
        };
        btn.textContent = categoryTranslation[cat] || cat;
        btn.setAttribute("data-category", cat === "الكل" ? "all" : cat);
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            if (cat === "الكل") displayTools(tools);
            else displayTools(tools.filter(t => t.category === cat));
        });
        filterSection.appendChild(btn);
    });
}

function displayTools(toolsArray) {
    const container = document.getElementById("toolsContainer");
    if (!container) return;
    container.innerHTML = "";
    if (toolsArray.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:50px; color:var(--gold);">${t("msg.no-tools")}</div>`;
        return;
    }
    toolsArray.forEach(tool => {
        const isFav = isFavorite(tool.name.split(' (')[0]);
        const starClass = isFav ? "fas fa-star" : "far fa-star";
        const starColor = isFav ? "var(--gold)" : "#666";
        const displayName = tool.name.split(' (')[0];
        const card = document.createElement("div");
        card.className = "tool-card";
        card.innerHTML = `
            <div style="position: relative;">
                <div class="tool-icon"><i class="fas ${tool.icon}"></i></div>
                <button class="favorite-btn" data-tool="${displayName}" style="position: absolute; top: 5px; left: 5px; background: none; border: none; cursor: pointer; font-size: 1.3rem; color: ${starColor};">
                    <i class="${starClass}"></i>
                </button>
            </div>
            <h3>${displayName}</h3>
            <div class="tool-category">${tool.category === "نصوص" ? t("category.text") : tool.category === "صور" ? t("category.image") : tool.category === "فيديو" ? t("category.video") : tool.category === "صوت" ? t("category.audio") : tool.category === "برمجة" ? t("category.programming") : tool.category === "تحليل" ? t("category.analysis") : tool.category === "إنتاجية" ? t("category.productivity") : tool.category === "تسويق" ? t("category.marketing") : tool.category === "تصميم" ? t("category.design") : tool.category === "ألعاب" ? t("category.games") : tool.category}</div>
            <p class="tool-description">${tool.description}</p>
            <a href="${tool.url}" target="_blank" class="tool-link" data-tool="${displayName}">${t("tool.try")} <i class="fas fa-external-link-alt"></i></a>
            <div class="tool-clicks">👆 ${tool.clicks} ${t("tool.click")}</div>
        `;
        container.appendChild(card);
    });
    document.querySelectorAll(".tool-link").forEach(link => {
        link.addEventListener("click", (e) => {
            const toolName = link.getAttribute("data-tool");
            recordGlobalClick(toolName);
        });
    });
    document.querySelectorAll(".favorite-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const toolName = btn.getAttribute("data-tool");
            addToFavorites(toolName);
            const isNowFav = isFavorite(toolName);
            const icon = btn.querySelector("i");
            if (isNowFav) {
                icon.className = "fas fa-star";
                btn.style.color = "var(--gold)";
            } else {
                icon.className = "far fa-star";
                btn.style.color = "#666";
            }
            updateNavbarStats();
        });
    });
}

function filterToolsByCategory(category) {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
        const categoryTranslation = {
            "نصوص": t("category.text"), "صور": t("category.image"), "فيديو": t("category.video"), "صوت": t("category.audio"),
            "برمجة": t("category.programming"), "تحليل": t("category.analysis"), "إنتاجية": t("category.productivity"),
            "تسويق": t("category.marketing"), "تصميم": t("category.design"), "ألعاب": t("category.games")
        };
        if (btn.textContent === (category === "الكل" ? t("filter.all") : categoryTranslation[category] || category)) btn.classList.add("active");
    });
    if (category === "الكل") displayTools(tools);
    else displayTools(tools.filter(t => t.category === category));
}

function setupMobileMenu() {
    const toggle = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");
    if (toggle && navLinks) toggle.addEventListener("click", () => navLinks.classList.toggle("active"));
}

function setupExploreBtn() {
    const btn = document.getElementById("exploreBtn");
    if (btn) btn.addEventListener("click", () => document.querySelector(".tools-container").scrollIntoView({ behavior: "smooth" }));
}

function updateDropdownCategories() {
    buildDropdowns();
}

function updateFilterButtonsLanguage() {
    buildFilterButtons();
}

function init() {
    loadClicksFromStorage();
    updateVisitorCounter();
    updateAuthUI();
    setupLogout();
    buildDropdowns();
    buildFilterButtons();
    displayTools(tools);
    setupSearch();
    setupMobileMenu();
    setupExploreBtn();
    updateStatsDisplay();
    initTheme();
    setupThemeToggle();
    initLanguage();
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) langBtn.addEventListener('click', switchLanguage);
    updateGlobalCounter("click", false).then(count => {
        const span = document.getElementById("totalClicks");
        if (span && count !== null) span.textContent = count;
    });
    updateGlobalCounter("user", false).then(count => {
        const span = document.getElementById("totalUsers");
        if (span && count !== null) span.textContent = count;
    });
}

document.addEventListener("DOMContentLoaded", init);
