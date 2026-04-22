import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "AIzaSyCjftIHR4XlQItggugukB1WOMQvWjE_aik"; 

// استخدمنا الموديل اللي ظهر في الفحص عندك (gemini-2.0-flash)
// جرب الموديل ده، ده "ملك" الـ Free Tier ومستحيل يكون الـ Limit بتاعه 0
const GOOGLE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
app.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    
    const response = await fetch(GOOGLE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const data = await response.json();

    if (data.error) {
      console.error("❌ خطأ جوجل:", data.error.message);
      return res.status(data.error.code || 500).json({ error: data.error.message });
    }

    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      const aiReply = data.candidates[0].content.parts[0].text;
      console.log("✅ مبروك يا يوسف! Gemini 2.0 رد عليك");
      res.json({ reply: aiReply });
    } else {
      res.status(500).json({ error: "رد غير متوقع" });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("🚀 السيرفر شغال الآن بموديل Gemini 2.0 القوي!"));