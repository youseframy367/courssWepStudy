import { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";

export default function Footer({ darkMode }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. إضافة رسالة المستخدم للشاشة فوراً
    const userMessage = { text: input, from: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      // 2. الاتصال بالسيرفر
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }), 
      });
      const data = await res.json();

      if (data.reply) {
        // 3. إضافة رد الذكاء الاصطناعي
        setMessages((prev) => [...prev, { text: data.reply, from: "ai" }]);
      } else {
        throw new Error("رد غير صالح");
      }
    } catch (error) {
      console.error("Error connecting to server:", error);
      setMessages((prev) => [
        ...prev,
        { text: "عذراً، واجهت مشكلة في الاتصال بالسيرفر.", from: "ai" },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${darkMode ? "/imgPython/moon.jpg" : "/imgPython/sun.jpg"})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "45%",
          height: "80%",
          borderRadius: "40px",
          backgroundColor: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(15px)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingRight: "10px",
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                backgroundColor:
                  msg.from === "user" ? "rgba(0,123,255,0.8)" : "rgba(255,255,255,0.3)",
                color: msg.from === "user" ? "#fff" : "#000",
                padding: "10px 15px",
                borderRadius: "20px",
                maxWidth: "70%",
                wordWrap: "break-word",
                backdropFilter: msg.from === "ai" ? "blur(5px)" : "none",
              }}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              flex: 1,
              height: "50px",
              borderRadius: "20px",
              padding: "10px",
              border: "1px solid rgba(255,255,255,0.5)",
              outline: "none",
              resize: "none",
              direction: "rtl",
              backgroundColor: "rgba(255,255,255,0.2)",
              color: darkMode ? "#fff" : "#000",
              backdropFilter: "blur(5px)",
            }}
            placeholder="اكتب هنا..."
          />
          <button
            onClick={handleSend}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "rgba(0,123,255,0.8)",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
}