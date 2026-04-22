import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import QuestionLison from "./quttionLosson";
import { getCourseData } from "./backEnd/partes/nameCourse";
import YouTubeCourse from "./componnt/vides";
import "./pagStart.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ShowCourse({ darkMode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseName } = useParams();

  const [course, setCourse] = useState(courseName || location.state?.course || localStorage.getItem("lastViewedCourse"));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (courseName) {
      setCourse(courseName);
      const savedIndex = localStorage.getItem(`activeIndex_${courseName}`);
      setActiveIndex(savedIndex !== null ? parseInt(savedIndex, 10) : 0);
    }
  }, [courseName]);

  useEffect(() => {
    if (course) {
      localStorage.setItem("lastViewedCourse", course);
      localStorage.setItem(`activeIndex_${course}`, activeIndex);
    }
  }, [course, activeIndex]);

  const courseInfo = getCourseData(course);
  if (!courseInfo || !courseInfo.courseData) return null;

  const { courseData, nameCourse, link, linkAdded } = courseInfo;
  const lineCourse = courseData.length - 1;

  const handleClickPriv = () => {
    if (activeIndex === 0) {
      navigate("/");
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleClickNext = () => {
    if (activeIndex < lineCourse) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const currentLesson = courseData[activeIndex];
  const codeLines = currentLesson ? currentLesson.explain.split('\n') : [];

  return (
    <div style={{ color: darkMode ? "#fff" : "#000", display: "flex" }}>
      
      {/* Sidebar - رجعته لأصله بالظبط */}
      <div style={{ width: "20%", overflowY: "scroll", height: "90vh", scrollbarWidth: "none" }}>
        <p style={{ textAlign: "center", fontSize: "22px", fontWeight: "200" }}>
          Tutorial {nameCourse}
        </p>
        <ul style={{ marginLeft: "-30px", listStyle: "none", height: "80vh" }}>
          {courseData.map((el, index) => (
            <li
              key={el.id || index}
              className={`titleList ${activeIndex === index ? "active" : ""}`}
              style={{ fontSize: "13px", padding: "10px", cursor: "pointer", whiteSpace: 'nowrap', overflow: "hidden" }}
              onClick={() => setActiveIndex(index)}
            >
              {nameCourse} {el.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "20px", overflowY: "auto", height: "90vh", scrollbarWidth: "none" }}>
        <p style={{ fontSize: "40px", fontWeight: "300", margin: "20px 0" }}>
          {nameCourse} {currentLesson?.title}
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 60px 10px 10px", alignItems: 'center' }}>
          <button onClick={handleClickPriv} className="btn-nav">
            <ArrowBackIosIcon /> {activeIndex === 0 ? "Home" : "Previous"}
          </button>
          <button onClick={handleClickNext} className="btn-nav">
            Next <ArrowForwardIosIcon />
          </button>
        </div>

        {currentLesson && (
          <>
            <div style={{ whiteSpace: "pre-line", lineHeight: 2.5, direction: "rtl", width: "94%", marginTop: '20px', marginLeft: "3%" }}>
              {codeLines.map((line, index) => {
                const isEnglishLine = /^[a-zA-Z0-9\s`~!@#$%^&*()_+\={}[\]|\\:;"'<>,.?/]*$/.test(line);
                const isCodeLine = line.endsWith(';');
                return (
                  <div key={index} style={{ direction: (isEnglishLine || isCodeLine) ? 'ltr' : 'rtl', textAlign: (isEnglishLine || isCodeLine) ? 'left' : 'right' }}>
                    {line}
                  </div>
                );
              })}
            </div>

           

            <p style={{ fontSize: '30px', fontWeight: "300" }}>Example</p>
            <pre style={{ background: darkMode ? "#1e1e2f" : "#f4f4f4", padding: "10px", borderRadius: "8px", overflow: "scroll", lineHeight: '30px', scrollbarWidth: "none", borderLeft: "5px solid #00796B" }}>
              {currentLesson.example}
            </pre>
    {/* عرض الـ SVG المتحرك هنا */}
            {currentLesson.visual && (
              <div 
                className="visual-container" 
                dangerouslySetInnerHTML={{ __html: currentLesson.visual }} 
              />
            )}
                        <p style={{ fontSize: '30px', fontWeight: "300" }}>Video course</p>

            <YouTubeCourse nameCourse={nameCourse} mode={darkMode} linkCourse={link} linkCourseAded={linkAdded}/>
          
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 60px 10px 10px" }}>
              <button onClick={handleClickPriv} className="btn-nav">
                <ArrowBackIosIcon /> Previous
              </button>
              <button onClick={handleClickNext} className="btn-nav">
                Next <ArrowForwardIosIcon />
              </button>
            </div>

            <QuestionLison nameCourse={course} numperLison={activeIndex} />
          </>
        )}
      </div>

      <style>{`
        .btn-nav { padding: 8px 16px; border-radius: 6px; border: none; background: #00796B; color: #fff; cursor: pointer; font-weight: 700; display: flex; align-items: center; gap: 5px; }
        
        /* تنسيق حاوية الـ SVG فقط بدون المساس بالقائمة */
        .visual-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background: ${darkMode ? "#1e1e2f" : "#f9f9f9"};
          padding: 20px;
          border-radius: 12px;
          margin: 20px 0;
          border: 1px solid ${darkMode ? "#333" : "#eee"};
        }
        .visual-container svg {
          width: 100%;
          max-width: 500px;
          height: auto;
        }
      `}</style>
    </div>
  );
}