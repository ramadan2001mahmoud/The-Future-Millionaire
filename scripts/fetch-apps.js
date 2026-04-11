const gplay = require('google-play-scraper');
const fs = require('fs');
const path = require('path');
const appsConfig = require('../data/apps-data.js');

async function fetchAppData(packageName) {
    try {
        const appInfo = await gplay.app({ appId: packageName });
        return {
            version: appInfo.version || "غير معروف",
            size: appInfo.size || "غير معروف",
            downloads: formatDownloads(appInfo.installs),
            developer: appInfo.developer || "غير معروف",
            description: appInfo.description ? appInfo.description.substring(0, 500) : "",
            features: extractFeatures(appInfo.description),
            score: appInfo.score || 0,
            reviews: appInfo.reviews || 0
        };
    } catch (error) {
        console.error(`خطأ في ${packageName}:`, error.message);
        return { version: "غير معروف", size: "غير معروف", downloads: "غير معروف", developer: "غير معروف", description: "", features: [], score: 0, reviews: 0 };
    }
}

function formatDownloads(installs) {
    if (!installs) return "غير معروف";
    const match = installs.match(/([\d,]+)/);
    if (match) {
        let num = parseInt(match[1].replace(/,/g, ''));
        if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    }
    return installs;
}

function extractFeatures(description) {
    if (!description) return [];
    const sentences = description.split(/[.!؟]/).filter(s => s.trim().length > 20);
    return sentences.slice(0, 4).map(s => s.trim().substring(0, 80));
}

async function updateAllApps() {
    console.log("🔄 جاري التحديث...");
    const results = [];
    for (const app of appsConfig) {
        console.log(`📱 ${app.name}...`);
        const data = await fetchAppData(app.packageName);
        results.push({ ...app, ...data });
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    const outputPath = path.join(__dirname, '../data/apps-data-complete.js');
    fs.writeFileSync(outputPath, `// آخر تحديث: ${new Date().toLocaleString('ar-EG')}\nconst appsData = ${JSON.stringify(results, null, 2)};\nif (typeof module !== 'undefined' && module.exports) { module.exports = appsData; }`);
    console.log(`✅ تم تحديث ${results.length} تطبيق`);
}

updateAllApps().catch(console.error);
