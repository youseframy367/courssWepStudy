// CustomizedSwitch.jsx
import React from "react";

export default function CustomizedSwitch({ checked, onChange }) {
  return (
    <label style={{ display: "inline-block", position: "relative", width: 50, height: 24 }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ opacity: 0, width: 0, height: 0 }}
      />
      <span
        style={{
          position: "absolute",
          cursor: "pointer",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: checked ? "#4CAF50" : "#ccc",
          transition: ".4s",
          borderRadius: 24 / 2,
        }}
      >
        <span
          style={{
            position: "absolute",
            height: 20,
            width: 20,
            left: checked ? 26 : 4,
            bottom: 2,
            backgroundColor: "white",
            transition: ".4s",
            borderRadius: "50%",
          }}
        />
      </span>
    </label>
  );
}
