import React, { useRef, useState, useMemo } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import courses from "./date/coursatAll"; // البيانات
 import * as LucideIcons from "lucide-react";
import "./pagStart.css"
const fonts = [
  // 🔹 Arabic Fonts
  { name: "Cairo", link: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap", type: "ar" },
  { name: "Amiri", link: "https://fonts.googleapis.com/css2?family=Amiri&display=swap", type: "ar" },
  { name: "El Messiri", link: "https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;700&display=swap", type: "ar" },
  { name: "Tajawal", link: "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap", type: "ar" },
  { name: "Changa", link: "https://fonts.googleapis.com/css2?family=Changa:wght@400;700&display=swap", type: "ar" },
  { name: "Reem Kufi", link: "https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap", type: "ar" },
  { name: "Lalezar", link: "https://fonts.googleapis.com/css2?family=Lalezar&display=swap", type: "ar" },
  { name: "Harmattan", link: "https://fonts.googleapis.com/css2?family=Harmattan&display=swap", type: "ar" },
  { name: "Mada", link: "https://fonts.googleapis.com/css2?family=Mada:wght@400;700&display=swap", type: "ar" },
  { name: "Markazi Text", link: "https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;700&display=swap", type: "ar" },
  { name: "Lateef", link: "https://fonts.googleapis.com/css2?family=Lateef&display=swap", type: "ar" },
  { name: "Scheherazade New", link: "https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap", type: "ar" },

  // 🔹 English Fonts
  { name: "Roboto", link: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap", type: "en" },
  { name: "Poppins", link: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap", type: "en" },
  { name: "Open Sans", link: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap", type: "en" },
  { name: "Lato", link: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap", type: "en" },
  { name: "Montserrat", link: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap", type: "en" },
  { name: "Raleway", link: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap", type: "en" },
  { name: "Merriweather", link: "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap", type: "en" },
  { name: "Playfair Display", link: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap", type: "en" },
  { name: "Nunito", link: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap", type: "en" },
  { name: "Oswald", link: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap", type: "en" },
  { name: "Ubuntu", link: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap", type: "en" },
  { name: "Muli", link: "https://fonts.googleapis.com/css2?family=Muli:wght@400;700&display=swap", type: "en" },
  { name: "Inconsolata", link: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap", type: "en" },
  { name: "Fira Sans", link: "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap", type: "en" },
];


// درجات أكتر (فاتح → غامق) + درجات Accent قوية
const colors = {
  Red: [
    "#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373",
    "#EF5350", "#F44336", "#E53935", "#D32F2F",
    "#C62828", "#B71C1C",
    "#FF8A80", "#D50000"
  ],
  Blue: [
    "#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6",
    "#42A5F5", "#2196F3", "#1E88E5", "#1976D2",
    "#1565C0", "#0D47A1",
    "#82B1FF", "#2962FF"
  ],
  Green: [
    "#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784",
    "#66BB6A", "#4CAF50", "#43A047", "#388E3C",
    "#2E7D32", "#1B5E20",
    "#B9F6CA", "#00C853"
  ],
  Purple: [
    "#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8",
    "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2",
    "#6A1B9A", "#4A148C",
    "#EA80FC", "#AA00FF"
  ],
  Orange: [
    "#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D",
    "#FFA726", "#FF9800", "#FB8C00", "#F57C00",
    "#EF6C00", "#E65100",
    "#FFD180", "#FF6D00"
  ],
  Yellow: [
    "#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176",
    "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D",
    "#F9A825", "#F57F17",
    "#FFFF8D", "#FFD600"
  ],
  Cyan: [
    "#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1",
    "#26C6DA", "#00BCD4", "#00ACC1", "#0097A7",
    "#00838F", "#006064",
    "#84FFFF", "#00B8D4"
  ],
  Teal: [
    "#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC",
    "#26A69A", "#009688", "#00897B", "#00796B",
    "#00695C", "#004D40",
    "#A7FFEB", "#00BFA5"
  ],
  Gray: [
    "#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0",
    "#BDBDBD", "#9E9E9E", "#757575", "#616161",
    "#424242", "#212121"
  ],
  Pink: [
    "#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292",
    "#EC407A", "#E91E63", "#D81B60", "#C2185B",
    "#AD1457", "#880E4F",
    "#FF80AB", "#C51162"
  ]
};

const selectRevios = ["button", "background", "heading", "paragraph"];


export default function BagCenter({ darkMode }) {
   // --- states (أسماء جديدة)
  const [searchText, setSearchText] = useState("");
  const [copiedIcon, setCopiedIcon] = useState("");
  const [copyMode, setCopyMode] = useState("jsx"); // "jsx" | "import" | "svg" | "itag"

 const NAMES = useMemo(
    () => [
      "Home","Search","User","Settings","Bell","Heart","Star","Camera","Check","X",
      "Plus","Minus","ArrowLeft","ArrowRight","ArrowUp","ArrowDown",
      "ChevronLeft","ChevronRight","ChevronUp","ChevronDown","Menu","MoreVertical","MoreHorizontal",
      "Trash2","Edit","Download","Upload","Mail","Phone","MapPin","Calendar","Clock",
      "Lock","Unlock","Share2","Copy","Globe","MessageSquare","MessageCircle","Send","Inbox",
      "Folder","File","FileText","Image","Video","Music","Mic","Play","Pause","Stop",
      "SkipForward","SkipBack","Volume2","VolumeX","Headphones","Monitor","Tablet","Smartphone",
      "Laptop","Server","Cpu","Database","Code","Terminal","Bug","Activity","BarChart","PieChart",
      "LineChart","TrendingUp","TrendingDown","Sun","Moon","Cloud","CloudRain","CloudSnow",
      "CloudLightning","Wind","Umbrella","Wifi","Bluetooth","Battery","BatteryCharging",
      "Compass","Map","Flag","Anchor","ShoppingCart","ShoppingBag","CreditCard","Wallet","Gift",
      "Package","Truck","Coffee","Pizza","Beer","Apple","Carrot","Leaf","Tree","Flower","Shield",
      "Key","AlertCircle","AlertTriangle","Info","HelpCircle","Smile","Frown","ThumbsUp","ThumbsDown"
    ],
    []
  );
  // --- تجهيز الأيقونات من المكتبة
  const ICONS = useMemo(() => {
    if (!LucideIcons || typeof LucideIcons !== "object") return [];
    return NAMES.map((name) => {
      const Icon = LucideIcons[name];
      return Icon ? { name, Icon } : null;
    }).filter(Boolean);
  }, [NAMES]);

  // --- التصفية
  const filtered = useMemo(() => {
    const q = (searchText || "").trim().toLowerCase();
    if (!q) return ICONS;
    return ICONS.filter((i) => i.name.toLowerCase().includes(q));
  }, [searchText, ICONS]);

  // --- النص حسب الوضع
  const codeFor = (name) => {
    if (copyMode === "jsx") return `<${name} />`;
    if (copyMode === "import") return `import { ${name} } from "lucide-react";`;
    if (copyMode === "svg") {
      return `<svg aria-hidden="true" width="24" height="24"><!-- ${name} --></svg>`;
    }
    if (copyMode === "itag") return `<i class="${name.toLowerCase()}"></i>`;
    return "";
  };

  // --- نسخ للنص
  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      return navigator.clipboard.writeText(text);
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  };

  const handleCopyIcon = (name) => {
    const code = codeFor(name);
    copyText(code).then(() => {
      setCopiedIcon(name);
      setTimeout(() => setCopiedIcon(""), 1200);
    });
  };


  //نسخ الكود
    const [copiedcode, setCopiedCode] = useState(false);
  // ⬇️ توليد الكود حسب العنصر
  const generateCode = () => {
    if (applyTo === "background") {
      return `background-color: ${selectedColor};\nopacity: ${blur / 100};`;
    }
    if (applyTo === "button") {
      return `background-color: ${selectedColor};\nbox-shadow: ${x}px ${y}px ${blur}px ${color};`;
    }
    if (applyTo === "heading") {
      return `color: ${selectedColor};\ntext-shadow: ${x}px ${y}px ${blur}px ${color};`;
    }
    if (applyTo === "paragraph") {
      return `color: ${selectedColor};\ntext-shadow: ${x}px ${y}px ${blur}px ${color};`;
    }
    return "";
  };

  // ⬇️ نسخ الكود
 const handleCopyCode = () => {
  navigator.clipboard.writeText(generateCode()).then(() => {
    setCopiedCode(true); // نغير حالة النسخ

    setTimeout(() => setCopiedCode(false), 1500); // بعد 1.5 ثانية يرجع تاني
  });
};

   

  const [x, setX] = useState(10);     // X offset
  const [y, setY] = useState(10);     // Y offset
  const [blur, setBlur] = useState(20); // Blur radius
  const [color, setColor] = useState("#000000"); // Shadow color


    const [search, setSearch] = useState("");

 // refs لكل فونت
  const fontRefs = useRef({});

  const handleSearch = (value) => {
    setSearch(value);

    // دور على أول فونت مطابق
    const foundFont = fonts.find((font) =>
      font.name.toLowerCase().includes(value.toLowerCase())
    );

    // لو لقى → يعمل scroll
    if (foundFont && fontRefs.current[foundFont.name]) {
      fontRefs.current[foundFont.name].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  



  const coursesArray = Object.values(courses);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCourse = () => {
    setCurrentIndex((prev) =>
      prev === coursesArray.length - 1 ? 0 : prev + 1
    );
  };

  const prevCourse = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? coursesArray.length - 1 : prev - 1
    );
  };

  const el = coursesArray[currentIndex];
  //----------------color-----------------

  const handleClick = (hex) => {
    setSelectedColor(hex);
    navigator.clipboard.writeText(hex); // ينسخ الكود مباشرة
   
  };



    const [selectedColor, setSelectedColor] = useState("#EF6C00");
  const [applyTo, setApplyTo] = useState("button");



  const [copied, setCopied] = useState("");

  const handleCopy = (fontName) => {
    navigator.clipboard.writeText(`font-family: '${fontName}', sans-serif;`);
    setCopied(fontName);
    setTimeout(() => setCopied(""), 2000);
  };




  return (
    <div>
     

      {/* البوكس بالموجة */}
      <div
        style={{
          position: "relative",
          background: "#282A35",
          height: "500px",
          borderRadius: "0 0 20px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#fff",
            lineHeight: "1.3",
          }}
        >
          <h1 style={{ fontSize: "70px", margin: "4px" }}>Learn to Code</h1>
          <p
            style={{
              fontSize: "20px ",
              color: "#c4c001ff",
              fontWeight: "700",
            }}
          >
            Learn the web with us simply
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              width: "600px",
            }}
          >
            <input
              type="search"
              placeholder="Search our tutorials, e.g. HTML"
              style={{
                padding: "15px 100px 15px 15px",
                borderRadius: "30px",
                border: "none",
                outline: "none",
                backgroundColor: "#fff",
                width: "800px",
                fontSize: "16px",
              }}
            />
            <button
              className="btn"
              style={{
                position: "absolute",
                right: "0px",
                top: "50%",
                transform: "translateY(-50%)",
                border: "none",
                background: "#0da045",
                color: "#fff",
                height: "100%",
                width: "80px",
                padding: "10px",
                borderRadius: "0px 30px 30px 0px",
                margin: "0px",
                cursor: "pointer",
              }}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>

        <svg
          viewBox="0 0 200 150"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: "-60px",
            left: 0,
            width: "100%",
            height: "100px",
            transform: "rotate(180deg)",
          }}
        >
          <path
            d="M0,50 
              C 50,0 100,100 150,50 
              C 200,0 250,100 300,50 
              C 350,0 400,100 450,50 
              L500,150 L0,150 Z"
            fill="#282A35"
          />
        </svg>
      </div>

      {/* كارت الكورس */}
     {/* كارت الكورس */}
<div 
  className={`course-card ${darkMode ? "dark" : "light"}`}
  style={{
    display: 'flex',
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "100px",
    marginBottom:'60px',
    height: "400px",
    width: '80%',
    marginLeft: "10%",
    background: darkMode ? "#1e1e1e" : "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: darkMode 
      ? "0 4px 12px rgba(0,0,0,0.8)" 
      : "0 4px 8px rgba(0,0,0,0.1)",
    transition: "0.3s ease-in-out",
    position:"relative"   // مهم عشان نثبت الأزرار جوه
  }}
>
  {/* زر يسار */}
  <button
    onClick={prevCourse}
    style={{
      position: "absolute",
      left: "-50px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "#07ad39",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
      height:"60px",
      width:'60px',
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <ArrowBackIosIcon style={{ fontSize: "30px" }} />
  </button>

  {/* محتوى الكارت */}
  <div style={{
    display:'flex',
    flexDirection:"row",
    justifyContent:"center",
    alignItems:'center',
    gap:"20px"
  }}>
    {/* صورة الكورس */}
    <div style={{
      width:"300px",
      height:'300px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <img
        src={el.icon}
        alt={el.name}
        style={{ width: "200px", height: "200px" }}
      />
    </div>

    {/* تفاصيل الكورس */}
    <div style={{
      display:'flex',
      flexDirection:"column",
      justifyContent:"center",
      alignItems:'center',
      width:"400px",
      height:'300px'
    }}>
      <h1 style={{color: darkMode ? "#fff" : "#000"}}>{el.name}</h1>
      <p style={{ fontSize: "14px", color: darkMode ? "#bbb" : "#555" }}>
        {el.title || "Course description here"}
      </p>

      {/* أزرار الأكشن */}
      <div style={{ 
        marginTop: "15px", 
        display:"flex", 
        flexDirection:"column",
        gap:"10px"
      }}>
        <button
          style={{
            padding: "12px 20px",
            background: "linear-gradient(45deg, #a8e063, #56ab2f)",
            color: "#fff",
            width: "260px",
            border:"none",
            borderRadius: "30px",
            fontWeight: "600",
            fontSize: "16px",
            cursor:"pointer"
          }}
        >
          Learn {el.name}
        </button>

        <a
          href={el.linkVideo}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 20px",
            background: "linear-gradient(45deg, #2193b0, #6dd5ed)",
            color: "#fff",
            width: "220px",
            textDecoration: "none",
            borderRadius: "30px",
            fontWeight: "600",
            fontSize: "16px",
            textAlign: "center"
          }}
        >
          Show Course
        </a>

        <a
          href={el.summary}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 20px",
            background: "linear-gradient(45deg, #ff7e5f, #feb47b)",
            color: "#fff",
            width: "220px",
            textDecoration: "none",
            borderRadius: "30px",
            fontWeight: "600",
            fontSize: "16px",
            textAlign: "center"
          }}
        >
          Show Summary
        </a>
      </div>
    </div>
  </div>

  {/* زر يمين */}
  <button
    onClick={nextCourse}
    style={{
      position: "absolute",
      right: "-50px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "#07ad39",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
      height:"60px",
      width:'60px',
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <ArrowForwardIosIcon style={{ fontSize: "30px" }} />
  </button>
</div>





 {//------------------------------------------------------------------------------------------
}




   <h1 style={{ marginBottom: "40px", textAlign: "center" }}>🎨 Explore Colors</h1>

<div style={{ display: "flex",direction:"rtl"}}>
  {/* لوحة الألوان */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", flex: 1,margin:'20px' }}>
    {Object.entries(colors).map(([name, shades]) => (
      <div
        key={name}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "150px",
         
        }}
      >
        {/* اسم اللون */}
        

        {/* الدرجات */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", justifyContent: "center", }}>
          {shades.map((hex, i) => (
            <div
              key={i}
              onClick={() => handleClick(hex)}
              style={{
                backgroundColor: hex,
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    ))}
  </div>

 {/* Preview */}
        <div
          style={{
            flex: "0 0 40%",
            padding: "10px 20px",
            background: "#f5f5f5",
            borderRadius: "10px",
            marginLeft: "20px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            background:'#221c1cff'
          }}
        >
          <div style={{ display:"flex",direction:"ltr",margin:'0px'}}>

    <button 
            onClick={handleCopyCode}
    style={{position:"relative",top:"10px",right:"0px",  
              marginTop: "10px",
              padding: "6px 12px",
              border: "none",
              borderRadius: "6px",
              background: "#1de224ff",
              color: "#000000ff",
              cursor: "pointer",
              fontWeight:'400'
           }}>  {copiedcode ? "Copied ✅" : "Copy"}</button>
    </div>
          <h2 style={{ marginBottom: "20px",color:  "#fff" 
 }}>Preview</h2>

          {/* اختيار المكان اللي يطبق عليه اللون */}
        
           <div style={{ marginBottom: "20px", display: "flex", gap: "10px", justifyContent: "center",alignItems:"center", flexWrap: "wrap",backgroundColor:"#fff" }}>


</div>

  {selectedColor ? (
  <div
    style={{
      marginBottom: "20px",
      padding: "0px",
      width: "100%",
      height: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      background:"#fff",
      transition: "0.3s",
    }}
  >
          {applyTo === "background" && (
           <div
  style={{
    width: "100%",
    height: "200px",
    borderRadius: "12px",
    backgroundColor: selectedColor,
    opacity: blur / 100, // يقسم القيمة عشان يخليها بين 0 و 1
  }}
></div>

          )}

          {applyTo === "button" && (
            <button
              style={{
                backgroundColor: selectedColor,
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: `${x}px ${y}px ${blur}px ${color}`
              }}
            >
              Click Me
            </button>
          )}

          {applyTo === "heading" && (
            <h1 style={{ color: selectedColor ,textShadow: `${x}px ${y}px ${blur}px ${color} ` }}>This is a Heading</h1>
          )}

          {applyTo === "paragraph" && (
            <p style={{ color: selectedColor,  textShadow: `${x}px ${y}px ${blur}px ${color}`}}>
              This is a sample paragraph with the selected color.
            </p>
          )}


        </div>
      ) : (
        <p>👆 اختر لون من الباليت</p>
      )}

      {/* الأزرار تحت المعاينة */}
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "20px",
    flexWrap: "wrap"
  }}
>
  {["background", "button", "heading", "paragraph"].map((opt, i) => (
    <button
      key={i}
      onClick={() => setApplyTo(opt)}
      style={{
        padding: "10px 20px",
        borderRadius: "25px",
        border: applyTo === opt ? "2px solid #04AA6D" : "2px solid #ccc",
        backgroundColor: applyTo === opt ? "#04AA6D" : "#fff",
        color: applyTo === opt ? "#fff" : "#333",
        fontWeight: "600",
        fontSize: "14px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow:
          applyTo === opt
            ? "0 4px 12px rgba(0,0,0,0.2)"
            : "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      {opt.charAt(0).toUpperCase() + opt.slice(1)}
    </button>
  ))}
</div>


 <div style={{width:"100%",gap:"10px",color:'#26C6DA',display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:'10px'}}>
  <div style={{display:"flex",justifyContent:'space-between',width:"90%"}}>
        <label className="block font-medium">X Offset: {x}px</label>
        <input
          type="range"
          min="-50"
          max="50"
          value={x}
          onChange={(e) => setX(e.target.value)}
          className="w-full"
        />
      </div>

  <div style={{display:"flex",justifyContent:'space-between',width:"90%"}}>
        <label className="block font-medium">Y Offset: {y}px</label>
        <input
          type="range"
          min="-50"
          max="50"
          value={y}
          onChange={(e) => setY(e.target.value)}
        
        />
      </div>

  <div style={{display:"flex",justifyContent:'space-between',width:"90%"}}>
        <label className="block font-medium">Blur / opacity: {blur}px</label>
        <input
          type="range"
          min="0"
          max="100"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
       
        />
      </div>
  <div style={{display:"flex",justifyContent:'space-between',width:"90%"}}>
        <label className="block font-medium">Shadow Color</label>
        <input

        class="color-input" 
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        
        />
      </div>


</div>
</div>
</div>





{//-------------------------------------------fonts-------------------------------------------
}
<div style={{ padding: "20px", }}>
  <div style={{display:"flex",justifyContent:'space-between',alignItems:'center',padding:"10px 50px 10px 10px"}}>
      <h2 style={{ marginBottom: "20px",width:'200px' }}>📌 Google Fonts</h2>

        {/* Search */}
        <div style={{ position: "relative",width:'200px' }}>
          <input
            type="search"
            placeholder="Search..."
                       value={search}
          onChange={(e) => handleSearch(e.target.value)}
            style={{
              padding: "8px 35px 8px 12px",
              borderRadius: "10px",
              border: `1px solid ${darkMode ? "#555" : "#ccc"}`,
              background: darkMode ? "#1f1f2e" : "#fff",
              color: "black",
              outline: "none",
              transition: "0.3s",
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
 

      </div>
      <div className="scroll-container" style={{height:"400px",overflow:'hidden',overflowY:'scroll'}}>
      {fonts.map((font, idx) => (
        <div
          key={idx}
            ref={(el) => (fontRefs.current[font.name] = el)}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            background: "#f9f9f9",
            color:"black"
          }}
        >
          {/* إضافة رابط الخط */}
          <link rel="stylesheet" href={font.link} />

          {/* اسم الخط */}
          <h3 style={{ marginBottom: "10px" }}>{font.name}</h3>

          {/* معاينة */}

  <div key={idx}>

    {/* لو الخط عربي */}
    {font.type === "ar" && (
      <p style={{ fontFamily: font.name, fontSize: "20px" }}>
        النص العربي يكتب هنا للتجربة
      </p>
    )}

    {/* لو الخط إنجليزي */}
    {font.type === "en" && (
      <p style={{ fontFamily: font.name, fontSize: "20px" }}>
        The quick brown fox jumps over the lazy dog
      </p>
    )}
  </div>


          {/* زر نسخ */}
          <button
            onClick={() => handleCopy(font.name)}
            style={{
              marginTop: "10px",
              padding: "6px 12px",
              border: "none",
              borderRadius: "6px",
              background: "#4caf50",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {copied === font.name ? "Copied!" : "Copy CSS"}
          </button>
        </div>
       
      ))}

 </div>
</div>



   <div className="scroll-container"style={{ padding: 16, maxHeight:"90vh" ,width:"90%",margin:'3%',overflow:"hidden",overflowY:"scroll"}}>
      <div style={{ display: "flex", gap: 8, marginBottom: 12 ,position:"fxed",top:"0px",}}>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="ابحث عن أيقونة..."
          style={{ flex: 1, padding: 8, borderRadius: 8, border: "1px solid #ddd" }}
        />
        <select value={copyMode} onChange={(e) => setCopyMode(e.target.value)} style={{ padding: 8 }}>
          <option value="jsx">JSX</option>
          <option value="import">import</option>
          <option value="svg">SVG</option>
          <option value="itag">&lt;i&gt;</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px,1fr))", gap: 10 }}>
        {filtered.length > 0 ? (
          filtered.map(({ name, Icon }) => (
            <button
              key={name}
              onClick={() => handleCopyIcon(name)}
              style={{
                border: "1px solid ",
                borderRadius: 10,
                padding: 10,
          background: darkMode ? "#1f2937" : "#ffffff", // خلفية                background: darkMode ? "#ffffffff" : "#000000ff",
          color: darkMode ? "#f9fafb" : "#111827", // لون الخط                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
              boxShadow: darkMode
            ? "0 1px 3px rgba(0,0,0,0.6)"
            : "0 1px 3px rgba(0,0,0,0.1)", // شادو حسب المود
        }}
      >
              <Icon size={24} />
              <div style={{ fontSize: 12 }}>{copiedIcon === name ? "Copied ✅" : name}</div>
              <div style={{ fontSize: 11,              color: darkMode ? "#d1d5db" : "#374151", }}>{codeFor(name)}</div>
            </button>
          ))
        ) : (
          <div style={{ gridColumn: "1/-1", color: "#6b7280", padding: 20, textAlign: "center" }}>
            لا توجد نتائج
          </div>
        )}
      </div>
    </div>

</div>
    )}






 