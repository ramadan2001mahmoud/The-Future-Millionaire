// ============================================
//  قائمة الأدوات (150+ أداة)
// ============================================
let tools = [
    // نصوص
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
    
    // صور
    { name: "Midjourney", category: "صور", url: "https://www.midjourney.com", description: "أقوى أداة لتوليد صور فائقة الجودة", icon: "fa-palette", clicks: 0 },
    { name: "DALL-E 3", category: "صور", url: "https://openai.com/dall-e-3", description: "توليد صور إبداعية من وصف نصي", icon: "fa-image", clicks: 0 },
    { name: "Leonardo.ai", category: "صور", url: "https://leonardo.ai", description: "توليد صور وفيديوهات إبداعية مجاناً", icon: "fa-dragon", clicks: 0 },
    { name: "Stable Diffusion", category: "صور", url: "https://stability.ai", description: "نموذج مفتوح المصدر لتوليد الصور", icon: "fa-cube", clicks: 0 },
    { name: "Adobe Firefly", category: "صور", url: "https://firefly.adobe.com", description: "توليد وتحرير الصور بأسلوب أدوبي", icon: "fa-fire", clicks: 0 },
    { name: "Canva AI", category: "صور", url: "https://www.canva.com/ai-image-generator", description: "توليد صور داخل كانفا", icon: "fa-paintbrush", clicks: 0 },
    
    // فيديو وصوت
    { name: "Runway ML", category: "فيديو", url: "https://runwayml.com", description: "تحرير وتوليد الفيديو بالذكاء الاصطناعي", icon: "fa-video", clicks: 0 },
    { name: "HeyGen", category: "فيديو", url: "https://www.heygen.com", description: "إنشاء أفلام بصور رمزية متحركة", icon: "fa-film", clicks: 0 },
    { name: "Pika Labs", category: "فيديو", url: "https://pika.art", description: "توليد فيديوهات قصيرة من النص", icon: "fa-play-circle", clicks: 0 },
    { name: "ElevenLabs", category: "صوت", url: "https://elevenlabs.io", description: "توليد أصوات واقعية من النص", icon: "fa-microphone-alt", clicks: 0 },
    { name: "Murf", category: "صوت", url: "https://murf.ai", description: "تعليق صوتي احترافي", icon: "fa-headphones", clicks: 0 },
    
    // برمجة
    { name: "GitHub Copilot", category: "برمجة", url: "https://github.com/features/copilot", description: "مساعد برمجي ذكي", icon: "fa-code", clicks: 0 },
    { name: "Cursor", category: "برمجة", url: "https://cursor.sh", description: "محرر كود مع AI مدمج", icon: "fa-laptop-code", clicks: 0 },
    { name: "Replit AI", category: "برمجة", url: "https://replit.com", description: "بيئة تطوير سحابية مع AI", icon: "fa-cloud-upload-alt", clicks: 0 },
    { name: "Tabnine", category: "برمجة", url: "https://www.tabnine.com", description: "إكمال الكود بالذكاء الاصطناعي", icon: "fa-terminal", clicks: 0 },
    
    // ألعاب
    { name: "PUBG Mobile", category: "ألعاب", url: "https://www.pubg.com", description: "لعبة الباتل رويال الشهيرة", icon: "fa-crosshairs", clicks: 0 },
    { name: "Free Fire", category: "ألعاب", url: "https://ff.garena.com", description: "لعبة الباتل رويال السريعة", icon: "fa-fire", clicks: 0 },
    { name: "Call of Duty", category: "ألعاب", url: "https://www.callofduty.com", description: "لعبة إطلاق النار الاحترافية", icon: "fa-gun", clicks: 0 },
    { name: "Clash of Clans", category: "ألعاب", url: "https://clashofclans.com", description: "لعبة بناء القرى والحروب", icon: "fa-chess-king", clicks: 0 },
    { name: "Minecraft", category: "ألعاب", url: "https://www.minecraft.net", description: "لعبة البناء والإبداع", icon: "fa-cube", clicks: 0 },
    { name: "Roblox", category: "ألعاب", url: "https://www.roblox.com", description: "منصة ألعاب متعددة", icon: "fa-gamepad", clicks: 0 },
    { name: "Genshin Impact", category: "ألعاب", url: "https://genshin.hoyoverse.com", description: "لعبة تقمص أدوار عالم مفتوح", icon: "fa-dragon", clicks: 0 },
    { name: "Mobile Legends", category: "ألعاب", url: "https://m.mobilelegends.com", description: "لعبة MOBA الشهيرة", icon: "fa-users", clicks: 0 },
    { name: "Brawl Stars", category: "ألعاب", url: "https://brawlstars.com", description: "لعبة قتال سريعة", icon: "fa-fist-raised", clicks: 0 },
    { name: "Candy Crush", category: "ألعاب", url: "https://www.king.com/game/candycrush", description: "لعبة الألغاز الشهيرة", icon: "fa-candy-cane", clicks: 0 },
    { name: "Subway Surfers", category: "ألعاب", url: "https://www.subwaysurfers.com", description: "لعبة الجري الكلاسيكية", icon: "fa-subway", clicks: 0 },
    { name: "Temple Run", category: "ألعاب", url: "https://www.templerun.com", description: "لعبة الجري والمغامرة", icon: "fa-running", clicks: 0 },
    { name: "Asphalt 9", category: "ألعاب", url: "https://www.gameloft.com/game/asphalt-9", description: "لعبة سباقات سيارات", icon: "fa-car-side", clicks: 0 },
    
    // تطبيقات تواصل
    { name: "WhatsApp", category: "تواصل", url: "https://www.whatsapp.com", description: "تطبيق المراسلة الفورية الأشهر عالمياً", icon: "fab fa-whatsapp", clicks: 0 },
    { name: "Telegram", category: "تواصل", url: "https://telegram.org", description: "تطبيق مراسلة آمن وسريع", icon: "fab fa-telegram", clicks: 0 },
    { name: "Facebook", category: "تواصل", url: "https://www.facebook.com", description: "تطبيق التواصل الاجتماعي الأكبر", icon: "fab fa-facebook", clicks: 0 },
    { name: "Instagram", category: "تواصل", url: "https://www.instagram.com", description: "مشاركة الصور والفيديوهات", icon: "fab fa-instagram", clicks: 0 },
    { name: "Twitter", category: "تواصل", url: "https://twitter.com", description: "منصة التدوين المصغر", icon: "fab fa-twitter", clicks: 0 },
    { name: "Snapchat", category: "تواصل", url: "https://www.snapchat.com", description: "تطبيق الصور والفيديوهات المؤقتة", icon: "fab fa-snapchat", clicks: 0 },
    { name: "Discord", category: "تواصل", url: "https://discord.com", description: "منصة المحادثة للجيمرز", icon: "fab fa-discord", clicks: 0 },
    { name: "Signal", category: "تواصل", url: "https://signal.org", description: "تطبيق مراسلة آمن ومشفر", icon: "fas fa-lock", clicks: 0 },
    
    // إنتاجية وترفيه وتعليم
    { name: "Notion AI", category: "إنتاجية", url: "https://www.notion.so", description: "مساعد ذكي داخل نوتيون", icon: "fa-book", clicks: 0 },
    { name: "Zoom", category: "إنتاجية", url: "https://zoom.us", description: "تطبيق الاجتماعات والمكالمات الجماعية", icon: "fa-video", clicks: 0 },
    { name: "Netflix", category: "ترفيه", url: "https://www.netflix.com", description: "مشاهدة الأفلام والمسلسلات", icon: "fab fa-netflix", clicks: 0 },
    { name: "YouTube", category: "ترفيه", url: "https://www.youtube.com", description: "مشاهدة الفيديوهات", icon: "fab fa-youtube", clicks: 0 },
    { name: "Spotify", category: "ترفيه", url: "https://www.spotify.com", description: "بث الموسيقى والبودكاست", icon: "fab fa-spotify", clicks: 0 },
    { name: "TikTok", category: "ترفيه", url: "https://www.tiktok.com", description: "مقاطع فيديو قصيرة", icon: "fab fa-tiktok", clicks: 0 },
    { name: "Duolingo", category: "تعليم", url: "https://www.duolingo.com", description: "تعلم اللغات مجاناً", icon: "fas fa-language", clicks: 0 },
    { name: "Coursera", category: "تعليم", url: "https://www.coursera.org", description: "دورات من جامعات عالمية", icon: "fas fa-graduation-cap", clicks: 0 },
    { name: "Udemy", category: "تعليم", url: "https://www.udemy.com", description: "منصة كورسات أونلاين", icon: "fas fa-chalkboard", clicks: 0 },
    { name: "Truecaller", category: "أدوات", url: "https://www.truecaller.com", description: "معرف المتصلين", icon: "fas fa-phone-alt", clicks: 0 },
    { name: "VLC", category: "أدوات", url: "https://www.videolan.org", description: "مشغل فيديو متعدد الصيغ", icon: "fas fa-play-circle", clicks: 0 }
];

// باقي الدوال كما هي (نفس الكود القديم)
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
        if (confirm("يجب تسجيل الدخول لإضافة أدوات للمفضلة")) {
            window.location.href = "login.html";
        }
        return false;
    }
    let favorites = JSON.parse(localStorage.getItem(`favorites_${currentUser.id}`) || "[]");
    if (!favorites.includes(toolName)) {
        favorites.push(toolName);
        localStorage.setItem(`favorites_${currentUser.id}`, JSON.stringify(favorites));
        alert(`✅ تم إضافة ${toolName} إلى المفضلة`);
        return true;
    } else {
        favorites = favorites.filter(f => f !== toolName);
        localStorage.setItem(`favorites_${currentUser.id}`, JSON.stringify(favorites));
        alert(`🗑️ تم إزالة ${toolName} من المفضلة`);
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
            userGreeting.textContent = `مرحباً ${currentUser.name}`;
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
        const filtered = tools.filter(tool => 
            tool.name.toLowerCase().includes(query.toLowerCase()) || 
            tool.description.toLowerCase().includes(query.toLowerCase()) ||
            tool.category.toLowerCase().includes(query.toLowerCase()));
        displayTools(filtered);
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
            if (btn.textContent === "الكل") btn.classList.add("active");
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
            link.textContent = cat;
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
        btn.textContent = cat;
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
        container.innerHTML = `<div style="text-align:center; padding:50px; color:var(--gold);">😅 لا توجد أدوات في هذه الفئة حالياً</div>`;
        return;
    }
    toolsArray.forEach(tool => {
        const isFav = isFavorite(tool.name);
        const starClass = isFav ? "fas fa-star" : "far fa-star";
        const starColor = isFav ? "var(--gold)" : "#666";
        const card = document.createElement("div");
        card.className = "tool-card";
        card.innerHTML = `
            <div style="position: relative;">
                <div class="tool-icon"><i class="${tool.icon}"></i></div>
                <button class="favorite-btn" data-tool="${tool.name}" style="position: absolute; top: 5px; left: 5px; background: none; border: none; cursor: pointer; font-size: 1.3rem; color: ${starColor};">
                    <i class="${starClass}"></i>
                </button>
            </div>
            <h3>${tool.name}</h3>
            <div class="tool-category">${tool.category}</div>
            <p class="tool-description">${tool.description}</p>
            <a href="${tool.url}" target="_blank" class="tool-link" data-tool="${tool.name}">تجربة الآن <i class="fas fa-external-link-alt"></i></a>
            <div class="tool-clicks">👆 ${tool.clicks} نقرة</div>
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
        if (btn.textContent === category || (category === "الكل" && btn.textContent === "الكل")) {
            btn.classList.add("active");
        }
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
