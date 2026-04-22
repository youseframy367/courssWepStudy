const API_KEY = "AIzaSyCjftIHR4XlQItggugukB1WOMQvWjE_aik";

async function listAllModels() {
    console.log("🔍 جاري فحص الموديلات المتاحة لحسابك...");
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
        const data = await response.json();
        
        if (data.models) {
            console.log("✅ الموديلات اللي تقدر تستخدمها هي:");
            data.models.forEach(m => console.log(`- ${m.name}`));
        } else {
            console.log("❌ جوجل بتقول مفيش موديلات متاحة ليك حالياً!");
            console.log("الرد الكامل من جوجل:", JSON.stringify(data, null, 2));
        }
    } catch (e) {
        console.error("❌ فشل الاتصال نهائياً:", e.message);
    }
}

listAllModels();