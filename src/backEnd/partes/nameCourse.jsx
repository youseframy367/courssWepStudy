// src/utils/getCourseData.js
import python from "../../date/pythion";
import django from "../../date/django";
import html from "../../date/html";
import css from "../../date/css";
import react from "../../date/react";
import mysql from "../../date/mysql";
import tillwind from "../../date/tillwind";
import javaScript from "../../date/js";
import node from "../../date/node";
//import php from "../../date/php";
import php from "../../date/php";
export function getCourseData(course) {
  let courseData = [];
  let nameCourse = "";
  let link = "";
  let linkAdded = "";
  if (!course) return { courseData, nameCourse, link, linkAdded };

  const courseStr = typeof course === "string" ? course.toLowerCase() : course?.name?.toLowerCase();

  switch (courseStr) {
    case "python":
      courseData = python;
      nameCourse = "Python";
      break;
    case "django":
      courseData = django;
      nameCourse = "Django";
      break;
    case "node.js":
      courseData = node;
      nameCourse = "Node.js";
      break;
     case "php":
       courseData = php;
      nameCourse = "PHP";
      break;
    case "html":
      courseData = html;
      nameCourse = "HTML";
      link = "https://www.youtube.com/watch?v=6QAELgirvjs&list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji";
      linkAdded = window.localStorage.getItem("linkHtml") || "";
      break;
    case "css":
      courseData = css;
      nameCourse = "CSS";
      link = "https://www.youtube.com/watch?v=X1ulCwyhCVM&list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe"
      break;
    case "tailwind css":
      courseData = tillwind;
      nameCourse = "Tailwind CSS";
      break;
    case "javascript":
      courseData = javaScript;
      nameCourse = "JavaScript";
      break;
    case "react":
      courseData = react;
      nameCourse = "React";
      break;
    case "mysql":
      courseData = mysql;
      nameCourse = "MySQL";
      link ="https://www.youtube.com/watch?v=N-WPYk417yE"
      break;
    default:
      courseData = [];
      nameCourse = "";
  }

  return { courseData, nameCourse, link, linkAdded };
}