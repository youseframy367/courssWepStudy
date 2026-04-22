import React, { useState, useRef } from "react";
import "./book.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaArrowLeft, FaArrowRight, FaDownload, FaEdit } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import courses from "../date/coursatAll";
export default function Book({ courseName, lessons = [], onClose }) {
  // أضف هذا السطر هنا 👇
  const [page, setPage] = useState(0);
  const allCoursesArray = Object.values(courses);
  const fullBookRef = useRef();


  const handlePrint = useReactToPrint({
    contentRef: fullBookRef,
    documentTitle: `${courseName}_Workbook`,
  });

  const nextPage = () => { if (page < lessons.length) setPage(page + 1); };
  const prevPage = () => { if (page > 0) setPage(page - 1); };

  const currentLesson = lessons[page - 1];
  const coverImageUrl = "/imgPython/1.png";

  return (
    <div className="book-overlay" onClick={()=>{
      onClose()
    }}>
      <button className="download-btn" onClick={() => handlePrint()}>
        <FaDownload size={18} style={{background:"",color:'#F57F17'}} />
      </button>

      {/* --- العرض على الشاشة (بدون نوتة) --- */}
      <div className="book-container no-print"onClick={(e) => {
      e.stopPropagation(); 
    }}>
        {page === 0 && (
          <div className="cover-page" style={{
            height: "100vh", backgroundImage: `url("${coverImageUrl}")`,
            backgroundSize: "cover", backgroundPosition: "center",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
          }}>
           
            <h2 style={{
              fontFamily: 'Cairo',
              fontWeight: 'bold',
              // --- التثبيت المطلق أسفل اليمين ---
              position: "absolute",
              bottom: "22vh",  /* مسافة من أسفل الورقة (تقريباً في الثلث الأخير) */
              right: "4vw",   /* مسافة من يمين الورقة */
              color: "#EF6C00"
            }}>دوره</h2>
            {/* النص متمركز بدقة أسفل اليمين */}
            <h1
              style={{
                fontSize: "40px",
                fontFamily: 'Cairo',
                fontWeight: 'bold',
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                color: "white", /* غيرت اللون للأبيض ليظهر فوق خلفية الغلاف (أو اختر ما يناسبك) */
                textShadow: "2px 2px 10px rgba(0,0,0,0.8)", /* ظل للنص ليبرز فوق الصورة */
                whiteSpace:"nowrap",
                // --- التثبيت المطلق أسفل اليمين ---
                position: "absolute",
                bottom: "19vh",  /* مسافة من أسفل الورقة (تقريباً في الثلث الأخير) */
                left: "45%",   /* مسافة من يمين الورقة */

                margin: 0, /* إلغاء الهوامش الافتراضية */
                direction: "rtl", /* اتجاه النص من اليمين لليسار */
                maxWidth: "40%",  /* لضمان عدم خروج النص الطويل عن الإطار */
                textAlign: "right",
              }}
            >{courseName} Course</h1>
            <button className="button" onClick={() => setPage(1)}>
              <FaArrowLeft size={24} /> Start now
            </button>
          </div>
        )}

        {page > 0 && currentLesson && (
          <div className="lesson-block" style={{ direction: "rtl", fontFamily: 'Cairo' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
              <h2 className="lesson-title">{currentLesson.title}</h2>
              <div className="book-controls">
                <button onClick={prevPage} disabled={page === 1}><FaArrowLeft size={24} /></button>
                <span style={{ margin: "0 15px" }}>{page} / {lessons.length}</span>
                <button onClick={nextPage} disabled={page === lessons.length}><FaArrowRight size={24} /></button>
              </div>
            </div>
            <hr style={{ width: "150px", height: "2px", background: "#000", border: "none", marginRight: "0" }} />
            <pre className="lesson-explain" style={{ whiteSpace: "pre-wrap", marginTop: "20px" }}>
              {currentLesson.explain}
            </pre>
            <h3 className="lesson-title">Example:</h3>
            {currentLesson.example && (
              <SyntaxHighlighter language="python" style={vscDarkPlus} showLineNumbers>
                {currentLesson.example}
              </SyntaxHighlighter>
            )}
          </div>
        )}
      </div>

      {/* --- نسخة الـ PDF (تظهر فيها النوتة وتملأ الفراغ) --- */}
      <div style={{ display: "none" }}>
        <div ref={fullBookRef} className="book-container-print" style={{
          height: '100vh',
        }}>
          <div
            className="printable-cover"
            style={{
              backgroundImage: `url("${coverImageUrl}")`,
              // --- جعل حاوية الغلاف reference للنصوص المطلقة ---
              position: 'relative',

              // --- إظهار الصورة كاملة كما طلبت ---
              backgroundSize: "contain",    /* تملأ الصفحة مع إظهار الصورة كاملة */
              backgroundPosition: "center",  /* تتوسط الصفحة */
              backgroundRepeat: "no-repeat", /* عدم تكرار الصورة */

              height: "100vh", /* تأخذ طول الصفحة */
              width: "100%",   /* تأخذ عرض الصفحة */
              backgroundColor: "white", /* خلفية بيضاء للفراغات الجانبية */

              // --- نلغي flexbox هنا لأننا سنستخدم absolute positioning للنص ---
              display: "block",
            }}
          >
            <h2 style={{
              fontFamily: 'Cairo',
              fontWeight: 'bold',
              // --- التثبيت المطلق أسفل اليمين ---
              position: "absolute",
              bottom: "28vh",  /* مسافة من أسفل الورقة (تقريباً في الثلث الأخير) */
              right: "12vw",   /* مسافة من يمين الورقة */
              color: "#EF6C00"
            }}>دوره</h2>
            {/* النص متمركز بدقة أسفل اليمين */}
            <h1
              style={{
                fontSize: "40px",
                fontFamily: 'Cairo',
                fontWeight: 'bold',
                width: "40%",
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
                color: "white", /* غيرت اللون للأبيض ليظهر فوق خلفية الغلاف (أو اختر ما يناسبك) */
                textShadow: "2px 2px 10px rgba(0,0,0,0.8)", /* ظل للنص ليبرز فوق الصورة */

                // --- التثبيت المطلق أسفل اليمين ---
                position: "absolute",
                bottom: "26vh",  /* مسافة من أسفل الورقة (تقريباً في الثلث الأخير) */
                right: "20vw",   /* مسافة من يمين الورقة */

                margin: 0, /* إلغاء الهوامش الافتراضية */
                direction: "rtl", /* اتجاه النص من اليمين لليسار */
                maxWidth: "40%",  /* لضمان عدم خروج النص الطويل عن الإطار */
                textAlign: "right",
              }}
            >{courseName} Course</h1>
            <div style={{
              position: "absolute",
              bottom: "4vh",  /* مسافة من أسفل الورقة (تقريباً في الثلث الأخير) */
              left: "25%",
              width: "100%",
              padding: "0 40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: 'center',
              alignItems: "center",
              boxSizing: "border-box",
              textAlign: "center",
              direction: "rtl",
              width: "70%",
            }}>

              {/* البرجراف الصغير */}
              <p style={{
                fontFamily: "Cairo",
                fontSize: "14px",
                color: "#444",
                backgroundColor: "rgba(255,255,255,0.7)", // خلفية شفافة لضمان وضوح القراءة
                display: "inline-block",
                padding: "5px 15px",
                borderRadius: "20px",

              }}>
                تمتع بقراءة ممتعة لتعلم البرمجة مع أقوى المسارات التعليمية
              </p>

              <div
                style={{
                  // 1. تفعيل الشبكة (Grid) فقط وإلغاء الـ flex تماماً
                  display: "grid",

                  // 2. تعريف الأعمدة والصفوف (6 أعمدة × صفين)
                  // استخدمت 1fr لضمان التوزيع العادل للمساحة بدل 60px لضمان عدم الخروج عن حدود الصفحة
                  gridTemplateColumns: "repeat(6, 50px)",
                  gridTemplateRows: "repeat(2, auto)",

                  // 3. التوسيط والمسافات
                  gap: "15px", // المسافة بين الأيقونات
                  justifyItems: "center", // توسيط العناصر أفقياً داخل كل خلية
                  alignItems: "center",    // توسيط العناصر عمودياً داخل كل خلية

                  // 4. تحديد مكان الحاوية على الغلاف
                  margin: "0 auto",


                  opacity: 0.8,
                }}
              >
                {allCoursesArray.slice(0, 12).map((item, index) => (
                  <div key={index} style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "45px",
                  }}>
                    <img
                      src={item.icon}
                      alt=""
                      style={{
                        width: "25px",
                        height: "25px",
                        filter: item.name === courseName ? "none" : "grayscale(30%)" // الكورس الحالي يظهر بألوانه الكاملة
                      }}
                    />
                    <span style={{ fontSize: "8px", fontFamily: "Cairo", marginTop: "2px", color: "#333" }}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>


          {lessons.map((lesson, index) => (
            <div key={index} className="printable-lesson">
              <h2 style={{ borderBottom: "2px solid #BDBDBD", paddingBottom: "10px", fontFamily: 'Cairo', direction: 'rtl', marginRight: '15px' }}>
                {index + 1}. {lesson.title}
              </h2>
              <pre style={{ whiteSpace: "pre-wrap", fontSize: "18px", marginTop: "0px", fontFamily: 'Cairo', direction: "rtl", marginRight: '15px' }}>
                {lesson.explain}
              </pre>
              <h3 className="lesson-title" style={{
                margin: '10px',
              }}>Example</h3>

              {lesson.example && (
                <div style={{ marginTop: "0px", height: 'auto' }}>
                  <SyntaxHighlighter language="python" style={vscDarkPlus}
                    customStyle={{
                      overflow: "visible",
                      padding: "15px",
                      fontSize: "14px"
                    }}>
                    {lesson.example}
                  </SyntaxHighlighter>
                </div>
              )}

              <div className="lesson-note" style={{ flex: "1 0 auto" }}>
                <div className="note-title" style={{ fontFamily: 'Cairo', display: 'flex', alignItems: 'center', gap: '10px', direction: "rtl" }}>
                  <FaEdit /> سجل ملاحظاتك الان :
                </div>

                <div className="writing-lines" style={{ minHeight: "300px" }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}