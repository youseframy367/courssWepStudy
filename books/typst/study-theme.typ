// Course Web Study PDF theme: Arabic-led prose, English code, print-safe hierarchy.
#let ink = rgb("#282A35")
#let paper = rgb("#FFFDF8")
#let muted = rgb("#676A70")

#let study-book(title, subtitle, domain, accent, body) = {
  set document(title: title, author: "Course Web Study")
  set page(
    paper: "a4",
    margin: (top: 2.4cm, bottom: 2.2cm, x: 2.2cm),
    numbering: "1",
    header: context [
      #set text(font: "Noto Sans", size: 8pt, fill: muted)
      #grid(columns: (1fr, 1fr), align(left)[Course Web Study], align(right)[#domain])
      #v(-.4em)
      #line(length: 100%, stroke: .45pt + luma(190))
    ],
  )
  set text(font: ("Noto Naskh Arabic", "Noto Sans"), size: 11.5pt, lang: "ar", fill: ink)
  set par(justify: true, leading: .91em, spacing: .78em, first-line-indent: 0pt)
  set heading(numbering: "1.1")
  show heading: set text(font: ("Noto Sans Arabic", "Noto Sans"), fill: accent, weight: 700)
  show heading.where(level: 1): set text(size: 23pt)
  show heading.where(level: 1): set block(above: 1.9em, below: .8em, sticky: true, breakable: false)
  show heading.where(level: 2): set text(size: 16pt)
  show heading.where(level: 2): set block(above: 1.35em, below: .65em, sticky: true, breakable: false)
  show raw.where(block: true): it => block(
    fill: ink,
    inset: 12pt,
    radius: 2pt,
    width: 100%,
    text(font: "Noto Sans Mono", size: 8.6pt, fill: rgb("#EAF7EF"), it),
  )

  page(numbering: none, header: none, margin: 1.8cm)[
    #rect(width: 100%, height: 24.1cm, fill: ink, radius: 5pt)[
      #set text(fill: paper)
      #align(center + horizon)[
        #v(2.8cm)
        #text(font: "Noto Sans", size: 11pt, fill: accent, weight: 700)[COURSE WEB STUDY]
        #v(1.2cm)
        #text(font: "Noto Sans Arabic", size: 37pt, weight: 700)[#title]
        #v(.5cm)
        #text(size: 16pt, fill: luma(205))[#subtitle]
        #v(3.3cm)
        #box(fill: accent, inset: (x: 17pt, y: 8pt), radius: 99pt)[
          #text(font: "Noto Sans", size: 10pt, fill: ink, weight: 700)[#domain]
        ]
        #v(3.2cm)
        #line(length: 49%, stroke: 1pt + accent)
        #v(0.7cm)
        #text(size: 11pt, fill: luma(182))[شرح عربي · أمثلة إنجليزية · تمارين عملية]
      ]
    ]
  ]
  pagebreak()
  align(right)[
    #text(font: "Noto Sans Arabic", size: 24pt, weight: 700, fill: accent)[فهرس الكتاب]
    #v(.8em)
    #outline(title: none, indent: 1.4em)
  ]
  pagebreak()
  body
}

#let intro(title, copy, accent) = block(fill: rgb("#F6F5F0"), inset: 18pt, radius: 3pt)[
  #text(font: "Noto Sans Arabic", size: 17pt, weight: 700, fill: accent)[كيف تستخدم هذا الدليل؟]
  #v(.35em)
  #copy
]

#let outcomes(items, accent) = block(
  fill: rgb("#F5FAF7"),
  inset: 16pt,
  radius: 3pt,
  stroke: (left: 4pt + accent),
)[
  #text(font: "Noto Sans Arabic", weight: 700, fill: accent)[نتائج التعلّم]
  #v(.3em)
  #list(..items.map(item => [#item]))
]

#let exercise(title, prompt, accent) = block(
  fill: rgb("#FFF8E9"),
  inset: 16pt,
  radius: 3pt,
  stroke: .6pt + rgb("#E8D8AB"),
)[
  #text(font: "Noto Sans Arabic", weight: 700, fill: accent)[تمرين: #title]
  #v(.35em)
  #prompt
]

#let concept(label, value, accent) = block(
  fill: rgb("#F5F5F2"),
  inset: (x: 13pt, y: 10pt),
  radius: 2pt,
)[
  #text(font: "Noto Sans", size: 8pt, fill: accent, weight: 700)[#label]
  #v(.15em)
  #text(font: "Noto Sans Arabic", size: 10pt)[#value]
]
