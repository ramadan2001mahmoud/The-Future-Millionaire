// ============================================
//  قائمة الأدوات (92+ أداة ذكاء اصطناعي)
// ============================================
let tools = [
    // ========== 📝 أدوات النصوص (20 أداة) ==========
    { name: "ChatGPT", category: "نصوص", url: "https://chat.openai.com", description: "نموذج لغوي متقدم للمحادثة والكتابة والبرمجة", icon: "fa-comments", clicks: 0 },
    { name: "Claude", category: "نصوص", url: "https://claude.ai", description: "ذكاء اصطناعي أخلاقي من Anthropic للكتابة المتقدمة", icon: "fa-message", clicks: 0 },
    { name: "Perplexity AI", category: "نصوص", url: "https://www.perplexity.ai", description: "محرك بحث ذكي يجمع بين ChatGPT والبحث المباشر", icon: "fa-globe", clicks: 0 },
    { name: "Gemini", category: "نصوص", url: "https://gemini.google.com", description: "نموذج جوجل المتعدد الوسائط", icon: "fa-star-of-life", clicks: 0 },
    { name: "DeepSeek", category: "نصوص", url: "https://deepseek.com", description: "نموذج صيني قوي مجاني للبرمجة والتحليل", icon: "fa-chart-line", clicks: 0 },
    { name: "Copy.ai", category: "نصوص", url: "https://www.copy.ai", description: "كتابة محتوى تسويقي وإعلانات", icon: "fa-copy", clicks: 0 },
    { name: "Jasper", category: "نصوص", url: "https://www.jasper.ai", description: "مساعد كتابة احترافي للشركات", icon: "fa-feather-alt", clicks: 0 },
    { name: "Writesonic", category: "نصوص", url: "https://writesonic.com", description: "كتابة مقالات وسيو وإعلانات", icon: "fa-pen-fancy", clicks: 0 },
    { name: "Rytr", category: "نصوص", url: "https://rytr.me", description: "كتابة محتوى بأسعار اقتصادية", icon: "fa-pen", clicks: 0 },
    { name: "Wordtune", category: "نصوص", url: "https://www.wordtune.com", description: "إعادة صياغة وتحسين النصوص", icon: "fa-paragraph", clicks: 0 },
    { name: "QuillBot", category: "نصوص", url: "https://quillbot.com", description: "تلخيص وإعادة صياغة النصوص", icon: "fa-robot", clicks: 0 },
    { name: "Grammarly", category: "نصوص", url: "https://www.grammarly.com", description: "تصحيح الأخطاء اللغوية والنحوية", icon: "fa-spell-check", clicks: 0 },
    { name: "Kimi AI", category: "نصوص", url: "https://kimi.ai", description: "مساعد صيني ذكي للكتابة والترجمة", icon: "fa-language", clicks: 0 },
    { name: "Poe", category: "نصوص", url: "https://poe.com", description: "منصة تجمع عدة نماذج AI في مكان واحد", icon: "fa-comment-dots", clicks: 0 },
    { name: "Hugging Chat", category: "نصوص", url: "https://huggingface.co/chat", description: "نماذج مفتوحة المصدر مجانية بالكامل", icon: "fa-box", clicks: 0 },
    { name: "You.com", category: "نصوص", url: "https://you.com", description: "محرك بحث ذكي مع AI مدمج", icon: "fa-search", clicks: 0 },
    { name: "Phind", category: "نصوص", url: "https://phind.com", description: "محرك بحث للمطورين مع إجابات دقيقة", icon: "fa-code", clicks: 0 },
    { name: "Character AI", category: "نصوص", url: "https://character.ai", description: "تحدث مع شخصيات خيالية وتاريخية", icon: "fa-users", clicks: 0 },
    { name: "Pi AI", category: "نصوص", url: "https://pi.ai", description: "مساعد شخصي ذكي ودود للمحادثة", icon: "fa-smile", clicks: 0 },
    { name: "Cohere", category: "نصوص", url: "https://cohere.com", description: "منصة لتوليد النصوص للمطورين", icon: "fa-cogs", clicks: 0 },

    // ========== 🎨 أدوات الصور (20 أداة) ==========
    { name: "Midjourney", category: "صور", url: "https://www.midjourney.com", description: "أقوى أداة لتوليد صور فائقة الجودة", icon: "fa-palette", clicks: 0 },
    { name: "DALL-E 3", category: "صور", url: "https://openai.com/dall-e-3", description: "توليد صور إبداعية من وصف نصي", icon: "fa-image", clicks: 0 },
    { name: "Leonardo.ai", category: "صور", url: "https://leonardo.ai", description: "توليد صور وفيديوهات إبداعية مجاناً", icon: "fa-dragon", clicks: 0 },
    { name: "Stable Diffusion", category: "صور", url: "https://stability.ai", description: "نموذج مفتوح المصدر لتوليد الصور", icon: "fa-cube", clicks: 0 },
    { name: "Adobe Firefly", category: "صور", url: "https://firefly.adobe.com", description: "توليد وتحرير الصور بأسلوب أدوبي", icon: "fa-fire", clicks: 0 },
    { name: "Canva AI", category: "صور", url: "https://www.canva.com/ai-image-generator", description: "توليد صور داخل كانفا", icon: "fa-paintbrush", clicks: 0 },
    { name: "Playground AI", category: "صور", url: "https://playgroundai.com", description: "تحرير الصور بالذكاء الاصطناعي", icon: "fa-sliders-h", clicks: 0 },
    { name: "Ideogram", category: "صور", url: "https://ideogram.ai", description: "توليد صور مع نصوص مضمنة بدقة", icon: "fa-font", clicks: 0 },
    { name: "Pixelcut", category: "صور", url: "https://pixelcut.ai", description: "إزالة الخلفية وتحرير المنتجات", icon: "fa-eraser", clicks: 0 },
    { name: "Remove.bg", category: "صور", url: "https://www.remove.bg", description: "إزالة خلفية الصور بضغطة واحدة", icon: "fa-magic", clicks: 0 },
    { name: "Clipdrop", category: "صور", url: "https://clipdrop.co", description: "تحرير الصور وإعادة الإضاءة", icon: "fa-sun", clicks: 0 },
    { name: "Lexica", category: "صور", url: "https://lexica.art", description: "محرك بحث للصور المولدة بالـ AI", icon: "fa-search", clicks: 0 },
    { name: "Bing Image Creator", category: "صور", url: "https://www.bing.com/create", description: "توليد صور مجانية من مايكروسوفت", icon: "fa-windows", clicks: 0 },
    { name: "DreamStudio", category: "صور", url: "https://dreamstudio.ai", description: "واجهة احترافية لـ Stable Diffusion", icon: "fa-cloud-moon", clicks: 0 },
    { name: "DeepAI", category: "صور", url: "https://deepai.org", description: "توليد وتحرير الصور بسهولة", icon: "fa-brain", clicks: 0 },
    { name: "Craiyon", category: "صور", url: "https://craiyon.com", description: "توليد صور مجاني سريع", icon: "fa-paint-roller", clicks: 0 },
    { name: "NightCafe", category: "صور", url: "https://nightcafe.studio", description: "مجتمع لتوليد الفن بالذكاء الاصطناعي", icon: "fa-moon", clicks: 0 },
    { name: "Artbreeder", category: "صور", url: "https://www.artbreeder.com", description: "توليد وتعديل الصور بالذكاء الاصطناعي", icon: "fa-leaf", clicks: 0 },
    { name: "Fotor AI", category: "صور", url: "https://www.fotor.com", description: "تعديل وتوليد الصور باحترافية", icon: "fa-camera", clicks: 0 },
    { name: "Picsart AI", category: "صور", url: "https://picsart.com", description: "تصميم وتحرير الصور بالذكاء الاصطناعي", icon: "fa-pen-fancy", clicks: 0 },

    // ========== 🎥 أدوات الفيديو والصوت (16 أداة) ==========
    { name: "Runway ML", category: "فيديو", url: "https://runwayml.com", description: "تحرير وتوليد الفيديو بالذكاء الاصطناعي", icon: "fa-video", clicks: 0 },
    { name: "HeyGen", category: "فيديو", url: "https://www.heygen.com", description: "إنشاء أفلام بصور رمزية متحركة", icon: "fa-film", clicks: 0 },
    { name: "Pika Labs", category: "فيديو", url: "https://pika.art", description: "توليد فيديوهات قصيرة من النص", icon: "fa-play-circle", clicks: 0 },
    { name: "Kaiber", category: "فيديو", url: "https://kaiber.ai", description: "تحويل الصور إلى فيديوهات متحركة", icon: "fa-music", clicks: 0 },
    { name: "Sora", category: "فيديو", url: "https://openai.com/sora", description: "توليد فيديوهات واقعية من النص (قيد الإصدار)", icon: "fa-cloud", clicks: 0 },
    { name: "ElevenLabs", category: "صوت", url: "https://elevenlabs.io", description: "توليد أصوات واقعية من النص", icon: "fa-microphone-alt", clicks: 0 },
    { name: "Murf", category: "صوت", url: "https://murf.ai", description: "تعليق صوتي احترافي", icon: "fa-headphones", clicks: 0 },
    { name: "Resemble AI", category: "صوت", url: "https://www.resemble.ai", description: "نسخ صوتي احترافي", icon: "fa-voice", clicks: 0 },
    { name: "Play.ht", category: "صوت", url: "https://play.ht", description: "تحويل النص إلى صوت عالي الجودة", icon: "fa-volume-up", clicks: 0 },
    { name: "Descript", category: "صوت", url: "https://www.descript.com", description: "تحرير الصوت والفيديو بالنص", icon: "fa-edit", clicks: 0 },
    { name: "Lumen5", category: "فيديو", url: "https://lumen5.com", description: "تحويل النص إلى فيديو تلقائياً", icon: "fa-lightbulb", clicks: 0 },
    { name: "InVideo", category: "فيديو", url: "https://invideo.io", description: "صناعة فيديوهات احترافية بسهولة", icon: "fa-video-slash", clicks: 0 },
    { name: "VEED.io", category: "فيديو", url: "https://veed.io", description: "تحرير فيديو أونلاين بالذكاء الاصطناعي", icon: "fa-edit", clicks: 0 },
    { name: "Wondershare Virbo", category: "فيديو", url: "https://virbo.wondershare.com", description: "إنشاء أفلام بأفاتار رقمي", icon: "fa-user-astronaut", clicks: 0 },
    { name: "Rask.ai", category: "صوت", url: "https://rask.ai", description: "ترجمة ودبلجة الفيديوهات", icon: "fa-language", clicks: 0 },
    { name: "Voice.ai", category: "صوت", url: "https://voice.ai", description: "تغيير الصوت بتقنية AI", icon: "fa-microphone", clicks: 0 },

    // ========== 💻 أدوات البرمجة (14 أداة) ==========
    { name: "GitHub Copilot", category: "برمجة", url: "https://github.com/features/copilot", description: "مساعد برمجي ذكي", icon: "fa-code", clicks: 0 },
    { name: "Cursor", category: "برمجة", url: "https://cursor.sh", description: "محرر كود مع AI مدمج", icon: "fa-laptop-code", clicks: 0 },
    { name: "Replit AI", category: "برمجة", url: "https://replit.com", description: "بيئة تطوير سحابية مع AI", icon: "fa-cloud-upload-alt", clicks: 0 },
    { name: "Tabnine", category: "برمجة", url: "https://www.tabnine.com", description: "إكمال الكود بالذكاء الاصطناعي", icon: "fa-terminal", clicks: 0 },
    { name: "Codeium", category: "برمجة", url: "https://codeium.com", description: "مساعد برمجي مجاني", icon: "fa-code-branch", clicks: 0 },
    { name: "Amazon CodeWhisperer", category: "برمجة", url: "https://aws.amazon.com/codewhisperer", description: "مساعد برمجي من أمازون", icon: "fa-cloud", clicks: 0 },
    { name: "Mutable.ai", category: "برمجة", url: "https://mutable.ai", description: "توليد كود سريع من الوصف", icon: "fa-bolt", clicks: 0 },
    { name: "AskCodi", category: "برمجة", url: "https://www.askcodi.com", description: "مساعد برمجي متعدد اللغات", icon: "fa-question-circle", clicks: 0 },
    { name: "Blackbox AI", category: "برمجة", url: "https://www.blackbox.ai", description: "مساعد برمجي متخصص في الأكواد", icon: "fa-cube", clicks: 0 },
    { name: "CodeGPT", category: "برمجة", url: "https://codegpt.co", description: "إضافة ذكاء اصطناعي لمحرر الكود", icon: "fa-robot", clicks: 0 },
    { name: "Mintlify", category: "برمجة", url: "https://mintlify.com", description: "كتابة توثيق الكود تلقائياً", icon: "fa-book", clicks: 0 },
    { name: "AICommit", category: "برمجة", url: "https://aicommit.app", description: "كتابة رسائل Commit ذكية", icon: "fa-git-alt", clicks: 0 },
    { name: "Swimm", category: "برمجة", url: "https://swimm.io", description: "توثيق الكود بالذكاء الاصطناعي", icon: "fa-swimming-pool", clicks: 0 },
    { name: "Bloop", category: "برمجة", url: "https://bloop.ai", description: "البحث في قاعدة الكود باللغة الطبيعية", icon: "fa-search", clicks: 0 },

    // ========== 📊 أدوات التحليل والإنتاجية (14 أداة) ==========
    { name: "Tableau AI", category: "تحليل", url: "https://www.tableau.com", description: "تحليل بيانات وتصور ذكي", icon: "fa-chart-bar", clicks: 0 },
    { name: "Polymer", category: "تحليل", url: "https://www.polymersearch.com", description: "تحليل بيانات بدون كود", icon: "fa-chart-pie", clicks: 0 },
    { name: "Julius AI", category: "تحليل", url: "https://julius.ai", description: "تحليل بيانات بالمحادثة", icon: "fa-robot", clicks: 0 },
    { name: "Notion AI", category: "إنتاجية", url: "https://www.notion.so", description: "مساعد ذكي داخل نوتيون", icon: "fa-book", clicks: 0 },
    { name: "Mem AI", category: "إنتاجية", url: "https://mem.ai", description: "تدوين ذكي بالذكاء الاصطناعي", icon: "fa-brain", clicks: 0 },
    { name: "Otter.ai", category: "إنتاجية", url: "https://otter.ai", description: "تفريغ المحادثات والاجتماعات", icon: "fa-file-alt", clicks: 0 },
    { name: "Fireflies.ai", category: "إنتاجية", url: "https://fireflies.ai", description: "تسجيل وتفريغ اجتماعات الزوم", icon: "fa-video", clicks: 0 },
    { name: "Tome", category: "إنتاجية", url: "https://tome.app", description: "إنشاء عروض تقديمية بالذكاء الاصطناعي", icon: "fa-chalkboard", clicks: 0 },
    { name: "Gamma AI", category: "إنتاجية", url: "https://gamma.app", description: "إنشاء عروض تقديمية بالذكاء الاصطناعي", icon: "fa-chalkboard", clicks: 0 },
    { name: "Beautiful AI", category: "إنتاجية", url: "https://beautiful.ai", description: "تصميم عروض احترافية بذكاء", icon: "fa-chart-line", clicks: 0 },
    { name: "Reclaim AI", category: "إنتاجية", url: "https://reclaim.ai", description: "جدولة المهام بذكاء", icon: "fa-calendar-check", clicks: 0 },
    { name: "Motion", category: "إنتاجية", url: "https://www.usemotion.com", description: "تنظيم الوقت والمهام بالذكاء الاصطناعي", icon: "fa-clock", clicks: 0 },
    { name: "Mem.ai", category: "إنتاجية", url: "https://mem.ai", description: "تدوين ذكي بالذكاء الاصطناعي", icon: "fa-brain", clicks: 0 },
    { name: "Taskade", category: "إنتاجية", url: "https://www.taskade.com", description: "إدارة المهام والفريق بالذكاء الاصطناعي", icon: "fa-tasks", clicks: 0 },

    // ========== 🆕 تسويق (4 أدوات) ==========
    { name: "Jasper AI", category: "تسويق", url: "https://www.jasper.ai", description: "كتابة محتوى تسويقي احترافي", icon: "fa-chart-simple", clicks: 0 },
    { name: "Copy.ai", category: "تسويق", url: "https://www.copy.ai", description: "كتابة نصوص إعلانية وتسويقية", icon: "fa-copy", clicks: 0 },
    { name: "Rytr", category: "تسويق", url: "https://rytr.me", description: "إنشاء محتوى تسويقي بأسعار اقتصادية", icon: "fa-pen-nib", clicks: 0 },
    { name: "Writer", category: "تسويق", url: "https://writer.com", description: "منصة متكاملة لكتابة المحتوى التسويقي", icon: "fa-feather", clicks: 0 },

    // ========== 🆕 تصميم (4 أدوات) ==========
    { name: "Uizard", category: "تصميم", url: "https://uizard.io", description: "تحويل الرسومات إلى تصميمات رقمية", icon: "fa-magic", clicks: 0 },
    { name: "Figma AI", category: "تصميم", url: "https://www.figma.com", description: "توليد وتحرير التصميمات بالذكاء الاصطناعي", icon: "fa-pen-ruler", clicks: 0 },
    { name: "Adobe Sensei", category: "تصميم", url: "https://www.adobe.com/sensei.html", description: "منصة الذكاء الاصطناعي من أدوبي", icon: "fa-adobe", clicks: 0 },
    { name: "Khroma", category: "تصميم", url: "https://www.khroma.co", description: "توليد لوحات ألوان ذكية", icon: "fa-palette", clicks: 0 }
];

// باقي الكود (دوال النقرات والمفضلة والمستخدمين) كما هو بدون تغيير
// ... (أرسلتهم قبل كده)
