// قائمة الأدوات (أضف أي أداة جديدة هنا بسهولة)
const tools = [
    { name: "ChatGPT", category: "نصوص", url: "https://chat.openai.com", description: "نموذج لغوي متقدم للمحادثة والكتابة", icon: "fa-comments" },
    { name: "Midjourney", category: "صور", url: "https://www.midjourney.com", description: "توليد صور فائقة الجودة من النصوص", icon: "fa-palette" },
    { name: "DALL-E 3", category: "صور", url: "https://openai.com/dall-e-3", description: "توليد صور إبداعية من وصف نصي", icon: "fa-image" },
    { name: "Runway ML", category: "فيديو", url: "https://runwayml.com", description: "تحرير وتوليد الفيديو بالذكاء الاصطناعي", icon: "fa-video" },
    { name: "ElevenLabs", category: "صوت", url: "https://elevenlabs.io", description: "توليد أصوات واقعية من النص", icon: "fa-microphone-alt" },
    { name: "GitHub Copilot", category: "برمجة", url: "https://github.com/features/copilot", description: "مساعد برمجي ذكي", icon: "fa-code" },
    { name: "Perplexity AI", category: "نصوص", url: "https://www.perplexity.ai", description: "محرك بحث ذكي بالإجابات", icon: "fa-globe" },
    { name: "Leonardo.ai", category: "صور", url: "https://leonardo.ai", description: "توليد صور وفيديوهات إبداعية", icon: "fa-dragon" },
    { name: "HeyGen", category: "فيديو", url: "https://www.heygen.com", description: "إنشاء أفلام بالذكاء الاصطناعي", icon: "fa-film" },
    { name: "Cursor", category: "برمجة", url: "https://cursor.sh", description: "محرر كود مع AI مدمج", icon: "fa-laptop-code" }
];

// بناء القوائم المنسدلة ديناميكيًا
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

// بناء أزرار التصفية
function buildFilterButtons() {
    const categories = ["الكل", ...new Set(tools.map(t => t.category))];
    const filterSection = document.querySelector(".filter-section");
    filterSection.innerHTML = "";
    
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        if (cat === "الكل") btn.classList.add("active");
        btn.textContent = cat;
        btn.setAttribute("data-category", cat === "الكل" ? "all" : cat);
        
        btn.addEventListener("click", () => {
            // إزالة الكلاس active من جميع الأزرار
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            // تصفية الأدوات
            if (cat === "الكل") {
                displayTools(tools);
            } else {
                const filtered = tools.filter(t => t.category === cat);
                displayTools(filtered);
            }
        });
        
        filterSection.appendChild(btn);
    });
}

// عرض الأدوات
function displayTools(toolsArray) {
    const container = document.getElementById("toolsContainer");
    container.innerHTML = "";
    if (toolsArray.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:50px; color:#D4AF37;">😅 لا توجد أدوات في هذه الفئة حالياً</div>`;
        return;
    }
    toolsArray.forEach(tool => {
        const card = document.createElement("div");
        card.className = "tool-card";
        card.innerHTML = `
            <div class="tool-icon"><i class="fas ${tool.icon}"></i></div>
            <h3>${tool.name}</h3>
            <div class="tool-category">${tool.category}</div>
            <p class="tool-description">${tool.description}</p>
            <a href="${tool.url}" target="_blank" class="tool-link">تجربة الآن <i class="fas fa-external-link-alt"></i></a>
        `;
        container.appendChild(card);
    });
}

// البحث
function setupSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = tools.filter(tool => 
            tool.name.toLowerCase().includes(query) || 
            tool.description.toLowerCase().includes(query) ||
            tool.category.toLowerCase().includes(query)
        );
        displayTools(filtered);
        
        // إعادة تعيين الأزرار النشطة
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
            if (btn.textContent === "الكل") btn.classList.add("active");
        });
    });
}

// القائمة للموبايل
function setupMobileMenu() {
    const toggle = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");
    if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
}

// زر استكشف
function setupExploreBtn() {
    const btn = document.getElementById("exploreBtn");
    if (btn) {
        btn.addEventListener("click", () => {
            document.querySelector(".tools-container").scrollIntoView({ behavior: "smooth" });
        });
    }
}

// تصفية حسب الفئة (للقوائم المنسدلة)
function filterToolsByCategory(category) {
    // تحديث الأزرار لتظهر الفعال
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.textContent === category) {
            btn.classList.add("active");
        }
        if (category === "الكل" && btn.textContent === "الكل") {
            btn.classList.add("active");
        }
    });
    
    // عرض الأدوات
    if (category === "الكل") {
        displayTools(tools);
    } else {
        const filtered = tools.filter(t => t.category === category);
        displayTools(filtered);
    }
}

// تهيئة كل شيء
function init() {
    buildDropdowns();
    buildFilterButtons();
    displayTools(tools);
    setupSearch();
    setupMobileMenu();
    setupExploreBtn();
}

// تشغيل التهيئة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", init);
