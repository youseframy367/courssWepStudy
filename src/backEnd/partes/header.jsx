import CustomizedSwitch from "../../CustomizedSwitch";
import Book from "../../componnt/book";
import { useState } from "react";
import { getCourseData } from "./nameCourse";

export default function Header({darkMode, textColor , setDarkMode, currentCourse}) {
    const [showBook,setShowBook]=useState(false)

  const { courseData: lessons, nameCourse } = getCourseData(currentCourse);
  return(
  <>
  {showBook && (
  <Book 
    onClose={() => setShowBook(false)} 
    courseName={nameCourse}
    lessons={lessons}
  />
)}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: `1px solid ${darkMode ? "#333" : "#ddd"}`,
        }}
      >
        {/* Menu */}
        <ul
          className="menu"
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "10px",
          }}
        >
          {["Small projects", "Courses video", "Libraries", "Cheat Sheets", "Quizzes"].map(
            (item, index) => (
              <li
                key={index}
                style={{
                  padding: "10px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "0.3s",
                  color: textColor,
                }}
                onMouseEnter={(e) =>
                  (e.target.style.background = darkMode ? "#2a2a3d" : "#f1f1f1")
                }
                onMouseLeave={(e) => (e.target.style.background = "transparent")}

                onClick={()=>{
                    if (item==="Cheat Sheets"){
                        setShowBook(true)
                    }
                }}
              >
                {item}
              </li>
            )
          )}
        </ul>

        {/* Search */}
        <div style={{ position: "relative" }}>
          <input
            type="search"
            placeholder="Search..."
            style={{
              padding: "8px 35px 8px 12px",
              borderRadius: "10px",
              border: `1px solid ${darkMode ? "#555" : "#ccc"}`,
              background: darkMode ? "#1f1f2e" : "#fff",
              color: textColor,
              outline: "none",
            }}
          />
          <i
            className="fa fa-search"
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: darkMode ? "#aaa" : "#555",
              pointerEvents: "none",
            }}
          ></i>
        </div>

        {/* Switch */}
        <CustomizedSwitch
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
      </div>

    
    </>
  );
}