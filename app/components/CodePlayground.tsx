// Design reminder: The editor stays focused and practical: editable HTML/CSS/JavaScript with a clearly isolated browser preview.
"use client";

import { Code2, Play, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

const starterFiles = {
  html: "<main class=\"card\">\n  <p class=\"eyebrow\">Live preview</p>\n  <h1>Build something small</h1>\n  <p>Edit the code, then run it.</p>\n  <button id=\"action\">Click me</button>\n</main>",
  css: "* { box-sizing: border-box; }\nbody { margin: 0; display: grid; min-height: 100vh; place-items: center; background: #f5f7f9; font-family: Arial, sans-serif; }\n.card { width: min(430px, calc(100% - 32px)); padding: 28px; background: white; border: 1px solid #d9dde0; border-left: 5px solid #04AA6D; }\n.eyebrow { color: #087f58; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: .1em; }\nbutton { border: 0; padding: 10px 14px; background: #04AA6D; color: white; cursor: pointer; }",
  javascript: "document.querySelector('#action').addEventListener('click', () => {\n  document.querySelector('#action').textContent = 'Nice work!';\n});",
};

type EditorTab = keyof typeof starterFiles;

export default function CodePlayground({ initialCode }: { initialCode?: string }) {
  const [tab, setTab] = useState<EditorTab>("html");
  const [files, setFiles] = useState({ ...starterFiles, html: initialCode?.includes("<") ? initialCode : starterFiles.html });
  const [previewVersion, setPreviewVersion] = useState(0);
  const srcDoc = useMemo(() => `<!doctype html><html><head><meta charset="utf-8"><style>${files.css}</style></head><body>${files.html}<script>${files.javascript.replace(/<\/script/gi, "<\\/script")}<\/script></body></html>`, [files, previewVersion]);
  const reset = () => { setFiles({ ...starterFiles, html: initialCode?.includes("<") ? initialCode : starterFiles.html }); setPreviewVersion((value) => value + 1); };

  return <section className="code-playground" aria-labelledby="playground-title">
    <div className="code-playground__heading"><div><p className="eyebrow">Practice lab</p><h3 id="playground-title">Write code. Run it. Learn faster.</h3><p>Runs HTML, CSS, and JavaScript in an isolated browser preview.</p></div><Code2 size={30} aria-hidden="true" /></div>
    <div className="code-playground__workspace"><div className="code-editor"><div className="code-editor__tabs">{(Object.keys(starterFiles) as EditorTab[]).map((item) => <button type="button" key={item} onClick={() => setTab(item)} className={tab === item ? "is-active" : ""}>{item === "javascript" ? "JS" : item.toUpperCase()}</button>)}</div><textarea aria-label={`${tab} editor`} spellCheck="false" value={files[tab]} onChange={(event) => setFiles((current) => ({ ...current, [tab]: event.target.value }))} /><div className="code-editor__actions"><button type="button" onClick={reset}><RotateCcw size={15} /> Reset</button><button type="button" className="run-code" onClick={() => setPreviewVersion((value) => value + 1)}><Play size={15} /> Run code</button></div></div><div className="code-preview"><div className="code-preview__bar"><span>Preview</span><i /></div><iframe key={previewVersion} title="Live code preview" sandbox="allow-scripts" srcDoc={srcDoc} /></div></div>
  </section>;
}
