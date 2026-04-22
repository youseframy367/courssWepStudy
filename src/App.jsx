import React, { useRef, useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomizedSwitch from "./CustomizedSwitch";
import courses from "./date/coursatAll";
import "./App.css";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import BagCenter from "./pagStart";
import ShowCourse from "./corsesbagLearn";
import "./pagStart.css";
import Fottor from "./backEnd/partes/fotter"
import Header from "./backEnd/partes/header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const ulRef = useRef(null);
  const coursesArray = Object.values(courses);
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(() => {
    const saved = sessionStorage.getItem("activeCourseIndex");
    return saved !== null ? parseInt(saved, 10) : null;
  });

  const backgroundColor = darkMode ? "#191924" : "#ffffff";
  const textColor = darkMode ? "#ffffff" : "#000000";

  useEffect(() => {
    if (activeIndex !== null) {
      sessionStorage.setItem("activeCourseIndex", activeIndex);
    }
  }, [activeIndex]);

  const handleClick = (course, index) => {
   // navigate("/course-details", { state: { course: course.name } });
    setActiveIndex(index);
    navigate(`/course-details/${course.name}`);
  };

  const scrollLeft = () => {
    if (ulRef.current) ulRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (ulRef.current) ulRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };


  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        minHeight: "100vh",
        transition: "all 0.5s ease",
      }}
    >

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        textColor={textColor}
        currentCourse={coursesArray[activeIndex]}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: darkMode ? "#191924" : "#282A35",
          margin: 0,
          height: "auto",
        }}
      >
        <button
          onClick={scrollLeft}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <ArrowBackIosIcon />
        </button>

        <ul
          ref={ulRef}
          style={{
            display: "flex",
            overflow: "hidden",
            listStyle: "none",
            padding: 0,
            margin: 0,
            flexWrap: "nowrap",
            scrollBehavior: "smooth",
            height: "40px",
          }}
        >
          {coursesArray.map((el, index) => (
            <li
              key={index}
              className={index === activeIndex ? "courseVctive" : "course"}
              onClick={() => handleClick(el, index)}
              style={{
                padding: "0 20px",
                whiteSpace: "nowrap",
                color: "#fff",
                height: "100%",
                display: "flex",
                alignItems: "center",
                fontSize: "15px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              {el.name}
            </li>
          ))}
        </ul>

        <button
          onClick={scrollRight}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>

      <Routes>
        <Route path="/" element={<BagCenter darkMode={darkMode} />} />
        <Route path="/course-details/:courseName" element={<ShowCourse darkMode={darkMode} />} />
      </Routes>

      <Fottor darkMode={darkMode} />
    </div>
  );
}

export default App;
