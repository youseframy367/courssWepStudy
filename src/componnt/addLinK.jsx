import React, { useState } from "react";
import axios from "axios";

export default function AddLink({ isOpen, onClose, courseName, onSuccess }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyAs55k4isTS6OfLe6U4oc-m5L2oib_kkJw"; 

  if (!isOpen) return null;

  const handleSave = async () => {
    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      alert("يرجى إدخال رابط يوتيوب صحيح");
      return;
    }

    setLoading(true);
    
    // استخراج الـ ID سواء كان قائمة تشغيل أو فيديو مفرد
    const playlistId = url.match(/[&?]list=([^&]+)/)?.[1];
    const videoId = url.match(/(?:youtu\.be\/|v=)([^?&]+)/)?.[1];

    try {
      const checkId = playlistId || videoId;
      const type = playlistId ? "playlists" : "videos";
      
      // 1. جلب البيانات من اليوتيوب لجلب اسم القناة الحقيقي
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/${type}`, {
        params: { 
          part: 'snippet', 
          id: checkId, 
          key: API_KEY 
        }
      });

      if (!res.data.items || res.data.items.length === 0) {
        throw new Error("الرابط غير صحيح أو لا يحتوي على بيانات");
      }

      // 2. استخراج اسم القناة (هنا تم فك التعليق وتصحيح المسار)
      const channelTitle = res.data.items[0]?.snippet?.channelTitle || "قناة غير معروفة";

      const storageKey = `links_${courseName.toLowerCase()}`;
      const existing = JSON.parse(localStorage.getItem(storageKey)) || [];
      
      if (!existing.find(item => item.url === url)) {
        // 3. تخزين الكائن بالبيانات الجديدة (تم تصحيح أسماء المتغيرات هنا)
        const newEntry = { 
          url: url, 
          name: channelTitle // حفظ الاسم الحقيقي اللي جبناه من الـ API
        };
        
        const updatedData = [...existing, newEntry]; 
        localStorage.setItem(storageKey, JSON.stringify(updatedData));
        
        if (onSuccess) onSuccess(); 
        onClose();
        setUrl("");
      } else {
        alert("هذا الرابط مضاف بالفعل لهذه المادة");
      }
    } catch (err) {
      alert("تعذر جلب بيانات الرابط. تأكد من جودته أو أنه ليس (Private)");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={overlayStyle} onClick={onClose}>
      {/*stopPropagation لمنع إغلاق النافذة عند الضغط داخل المربع الأبيض */}
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h3 style={titleStyle}>إضافة رابط كورس {courseName}</h3>
        <p style={subtitleStyle}>انسخ رابط قائمة تشغيل يوتيوب وضعه هنا</p>

        <input
          type="text"
          placeholder="https://youtube.com/playlist?list=..."
          style={inputStyle}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <div style={buttonGroupStyle}>
          <button style={cancelButtonStyle} onClick={onClose}>
            إلغاء
          </button>
          <button style={saveButtonStyle} onClick={handleSave}>
            حفظ الرابط
          </button>
        </div>
      </div>
    </div>
  );
}

// --- التنسيقات (Styles) ---

const overlayStyle = {
  position: "fixed",
    fontFamily: `"Cairo", sans-serif`,

  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)", // خلفية شبه شفافة
  backdropFilter: "blur(5px)", // تأثير الغباش الاحترافي
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  width: "400px",
  backgroundColor: "#fff",
  borderRadius: "15px",
  padding: "30px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  textAlign: "center",
  animation: "fadeIn 0.3s ease",
};

const titleStyle = {
  margin: "0 0 10px 0",
  fontSize: "20px",
  color: "#333",
      fontFamily: `"Cairo", sans-serif`,

};

const subtitleStyle = {
  fontSize: "14px",
  color: "#777",
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  marginBottom: "20px",
  outline: "none",
  fontSize: "14px",
  boxSizing: "border-box",
};

const buttonGroupStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
      fontFamily: `"Cairo", sans-serif`,

};

const saveButtonStyle = {
  flex: 1,
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#00796B",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
      fontFamily: `"Cairo", sans-serif`,

};

const cancelButtonStyle = {
  flex: 1,
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  backgroundColor: "#f5f5f5",
  color: "#333",
  cursor: "pointer",
      fontFamily: `"Cairo", sans-serif`,

};