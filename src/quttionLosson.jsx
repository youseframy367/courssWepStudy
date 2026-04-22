import { useState, useEffect } from 'react';

export default function QuestionLison({ nameCourse, numperLison }) {
    const [num, setNum] = useState(0);
    const [answer, setAnswer] = useState("");
    const [selected, setSelected] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!nameCourse || numperLison === undefined) return;

        const fetchQuestions = async () => {
            setLoading(true);
            setError(null);
            setNum(0);
            setAnswer("");
            setSelected("");
            setIsCorrect(null);
            setQuestions([]);

            try {
                const res = await fetch("https://api.anthropic.com/v1/messages", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": "YOUR_API_KEY_HERE",
                        "anthropic-version": "2023-06-01",
                        "anthropic-dangerous-direct-browser-access": "true"
                    },
                    body: JSON.stringify({
                        model: "claude-sonnet-4-20250514",
                        max_tokens: 1000,
                        messages: [{
                            role: "user",
                            content: `
Generate 5 multiple choice questions for a programming course.
Course: ${nameCourse}
Lesson number: ${numperLison + 1}

Respond ONLY with a valid JSON array, no markdown, no extra text.
Format:
[
  {
    "question": "...",
    "options": ["A", "B", "C", "D"],
    "answer": "A"
  }
]`
                        }]
                    })
                });

                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error.message);
                }

                const text = data.content[0].text.replace(/```json|```/g, "").trim();
                const parsed = JSON.parse(text);
                setQuestions(parsed);

            } catch (err) {
                console.error("API Error:", err);
                setError("فشل تحميل الأسئلة: " + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [nameCourse, numperLison]);

    function check(option) {
        if (selected) return;
        const correctAnswer = questions[num].answer;
        setSelected(option);
        setAnswer(option);

        if (option === correctAnswer) {
            setIsCorrect(true);
            setTimeout(() => {
                setNum(prev => prev + 1);
                setSelected("");
                setAnswer("");
                setIsCorrect(null);
            }, 1000);
        } else {
            setIsCorrect(false);
        }
    }

    return (
        <div style={{
            width: "80%",
            marginLeft: "10%",
            minHeight: "450px",
            background: "#2D3748",
            borderRadius: "15px",
            marginTop: "10px",
            marginBottom: "30px",
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: "center",
            color: "#fff",
            fontFamily: "'Cairo', sans-serif",
            padding: "20px"
        }}>

            {numperLison >= 0 && (
                <>
                    <p style={{ fontWeight: '400', fontSize: "30px", margin: "5px 0 20px" }}>
                        Exercise
                    </p>

                    {/* Loading */}
                    {loading && (
                        <div style={{ textAlign: "center" }}>
                            <p style={{ fontSize: "18px", color: "#a0aec0" }}>⏳ جاري تحميل الأسئلة...</p>
                        </div>
                    )}

                    {/* Error */}
                    {error && !loading && (
                        <div style={{ textAlign: "center" }}>
                            <p style={{ color: "#fc8181", fontSize: "16px" }}>{error}</p>
                            <button
                                onClick={() => {
                                    setError(null);
                                    setLoading(true);
                                }}
                                style={{
                                    marginTop: "10px",
                                    padding: "8px 20px",
                                    background: "#e53e3e",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    fontSize: "15px"
                                }}
                            >
                                حاول مرة تانية
                            </button>
                        </div>
                    )}

                    {/* Finished */}
                    {!loading && !error && questions.length > 0 && num >= questions.length && (
                        <div style={{ textAlign: "center" }}>
                            <p style={{ fontSize: "28px" }}>🎉 أجبت على كل الأسئلة!</p>
                            <button
                                onClick={() => {
                                    setNum(0);
                                    setSelected("");
                                    setAnswer("");
                                    setIsCorrect(null);
                                }}
                                style={{
                                    marginTop: "10px",
                                    padding: "8px 20px",
                                    background: "#0d7e16",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    fontSize: "15px"
                                }}
                            >
                                إعادة المحاولة
                            </button>
                        </div>
                    )}

                    {/* Questions */}
                    {!loading && !error && questions.length > 0 && num < questions.length && (
                        <div style={{ width: "100%" }}>

                            {/* Progress */}
                            <p style={{ textAlign: "center", color: "#a0aec0", fontSize: "14px", margin: "0 0 10px" }}>
                                سؤال {num + 1} من {questions.length}
                            </p>

                            {/* Question */}
                            <p style={{
                                fontWeight: 'bold',
                                fontSize: "18px",
                                marginBottom: '20px',
                                textAlign: "center",
                                lineHeight: 1.6
                            }}>
                                {questions[num].question}
                            </p>

                            {/* Options */}
                            <ul style={{ listStyle: 'none', width: '100%', padding: 0, margin: 0 }}>
                                {questions[num].options.map((option, idx) => {
                                    let bg = "#4a5568";
                                    if (selected === option) {
                                        bg = isCorrect ? "#276749" : "#9b2335";
                                    }
                                    return (
                                        <li
                                            key={idx}
                                            onClick={() => check(option)}
                                            style={{
                                                width: "90%",
                                                marginLeft: '5%',
                                                display: 'flex',
                                                alignItems: "center",
                                                gap: "10px",
                                                padding: '12px 16px',
                                                background: bg,
                                                marginBottom: '10px',
                                                borderRadius: "8px",
                                                cursor: selected ? "default" : "pointer",
                                                transition: "background 0.2s",
                                                fontSize: "15px"
                                            }}
                                        >
                                            <span style={{
                                                width: "28px",
                                                height: "28px",
                                                borderRadius: "50%",
                                                background: "#2d3748",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "13px",
                                                flexShrink: 0
                                            }}>
                                                {["A", "B", "C", "D"][idx]}
                                            </span>
                                            {option}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* Feedback */}
                            {isCorrect === true && (
                                <p style={{ textAlign: "center", color: "#68d391", fontSize: "18px", marginTop: "10px" }}>
                                    ✅ إجابة صح!
                                </p>
                            )}
                            {isCorrect === false && (
                                <div style={{ textAlign: "center", marginTop: "10px" }}>
                                    <p style={{ color: "#fc8181", fontSize: "18px" }}>❌ إجابة غلط، حاول تاني</p>
                                    <button
                                        onClick={() => {
                                            setSelected("");
                                            setAnswer("");
                                            setIsCorrect(null);
                                        }}
                                        style={{
                                            marginTop: "8px",
                                            padding: "7px 18px",
                                            background: "#e53e3e",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            fontSize: "14px"
                                        }}
                                    >
                                        حاول تاني
                                    </button>
                                </div>
                            )}

                            {/* Prev button */}
                            {num > 0 && (
                                <button
                                    onClick={() => {
                                        setNum(prev => prev - 1);
                                        setSelected("");
                                        setAnswer("");
                                        setIsCorrect(null);
                                    }}
                                    style={{
                                        display: "block",
                                        margin: "15px auto 0",
                                        padding: '8px 20px',
                                        color: "#fff",
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        background: '#4a5568',
                                        border: "none",
                                        borderRadius: "8px",
                                        cursor: "pointer"
                                    }}
                                >
                                    ← السؤال السابق
                                </button>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}