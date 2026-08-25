// Design reminder: The color utility retains the reference site's dense, hands-on palette exploration pattern.
"use client";

import { Check, Copy, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const colorGroups = {
  Red: ["#FFEBEE", "#EF9A9A", "#EF5350", "#E53935", "#B71C1C", "#D50000"],
  Blue: ["#E3F2FD", "#90CAF9", "#42A5F5", "#1E88E5", "#0D47A1", "#2962FF"],
  Green: ["#E8F5E9", "#A5D6A7", "#66BB6A", "#43A047", "#1B5E20", "#00C853"],
  Purple: ["#F3E5F5", "#CE93D8", "#AB47BC", "#8E24AA", "#4A148C", "#AA00FF"],
  Orange: ["#FFF3E0", "#FFCC80", "#FFA726", "#FB8C00", "#E65100", "#FF6D00"],
  Yellow: ["#FFFDE7", "#FFF59D", "#FFEE58", "#FDD835", "#F57F17", "#FFD600"],
  Cyan: ["#E0F7FA", "#80DEEA", "#26C6DA", "#00ACC1", "#006064", "#00B8D4"],
  Teal: ["#E0F2F1", "#80CBC4", "#26A69A", "#00897B", "#004D40", "#00BFA5"],
  Pink: ["#FCE4EC", "#F48FB1", "#EC407A", "#D81B60", "#880E4F", "#C51162"],
};

const copy = async (value: string) => {
  try { await navigator.clipboard.writeText(value); } catch { /* Clipboard unavailable: UI remains usable. */ }
};

export default function ColorExplorer() {
  const [selectedColor, setSelectedColor] = useState("#EF6C00");
  const [shadow, setShadow] = useState({ x: 10, y: 10, blur: 20 });
  const [copied, setCopied] = useState(false);
  const code = `background-color: ${selectedColor};\nbox-shadow: ${shadow.x}px ${shadow.y}px ${shadow.blur}px rgba(0,0,0,.35);`;

  const chooseColor = (hex: string) => {
    setSelectedColor(hex);
    void copy(hex);
  };
  const copyCode = () => {
    void copy(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section id="colors" className="tool-section" aria-labelledby="colors-title">
      <div className="section-heading">
        <span className="section-heading__icon"><SlidersHorizontal size={20} /></span>
        <div><p className="eyebrow">Toolbox</p><h2 id="colors-title">Explore Colors</h2></div>
      </div>
      <div className="color-tool">
        <div className="palette-board">
          {Object.entries(colorGroups).map(([name, colors]) => (
            <div className="palette-group" key={name}>
              <p>{name}</p>
              <div>{colors.map((hex) => <button key={hex} type="button" aria-label={`Use ${hex}`} title={`${name} · ${hex}`} className={selectedColor === hex ? "color-swatch is-selected" : "color-swatch"} style={{ backgroundColor: hex }} onClick={() => chooseColor(hex)} />)}</div>
            </div>
          ))}
        </div>
        <aside className="color-preview" aria-label="Color style preview">
          <div className="color-preview__head"><div><p className="eyebrow">Live preview</p><h3>CSS style</h3></div><button type="button" onClick={copyCode}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Copied" : "Copy"}</button></div>
          <div className="preview-stage"><button type="button" style={{ backgroundColor: selectedColor, boxShadow: `${shadow.x}px ${shadow.y}px ${shadow.blur}px rgba(0,0,0,.35)` }}>Sample button</button></div>
          <pre><code>{code}</code></pre>
          <div className="slider-grid">
            {(["x", "y", "blur"] as const).map((key) => <label key={key}>{key.toUpperCase()} offset <output>{shadow[key]}px</output><input type="range" min="0" max={key === "blur" ? 50 : 25} value={shadow[key]} onChange={(event) => setShadow((current) => ({ ...current, [key]: Number(event.target.value) }))} /></label>)}
          </div>
        </aside>
      </div>
    </section>
  );
}
