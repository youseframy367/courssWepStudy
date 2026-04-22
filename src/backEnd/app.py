import sqlite3
import tkinter as tk
from tkinter import messagebox, ttk

# إنشاء قاعدة البيانات
conn = sqlite3.connect("contractor.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS daily_record (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    workers INTEGER,
    wages REAL,
    materials REAL,
    other_expenses REAL,
    notes TEXT
)
""")
conn.commit()

# دوال للتعامل مع قاعدة البيانات
def add_record():
    date = entry_date.get()
    workers = entry_workers.get()
    wages = entry_wages.get()
    materials = entry_materials.get()
    other_expenses = entry_other.get()
    notes = entry_notes.get()

    if not (date and workers and wages and materials and other_expenses):
        messagebox.showerror("خطأ", "من فضلك أدخل كل البيانات")
        return

    cursor.execute("""
    INSERT INTO daily_record (date, workers, wages, materials, other_expenses, notes)
    VALUES (?, ?, ?, ?, ?, ?)
    """, (date, int(workers), float(wages), float(materials), float(other_expenses), notes))
    conn.commit()
    messagebox.showinfo("تم", "✅ تم تسجيل اليومية")
    clear_entries()
    show_records()

def show_records():
    for row in tree.get_children():
        tree.delete(row)

    cursor.execute("SELECT * FROM daily_record")
    records = cursor.fetchall()
    for r in records:
        total = r[3] + r[4] + r[5]
        tree.insert("", "end", values=(r[1], r[2], r[3], r[4], r[5], total, r[6]))

def total_expenses():
    cursor.execute("SELECT SUM(wages + materials + other_expenses) FROM daily_record")
    total = cursor.fetchone()[0]
    messagebox.showinfo("إجمالي المصاريف", f"💰 الإجمالي: {total if total else 0}")

def clear_entries():
    entry_date.delete(0, tk.END)
    entry_workers.delete(0, tk.END)
    entry_wages.delete(0, tk.END)
    entry_materials.delete(0, tk.END)
    entry_other.delete(0, tk.END)
    entry_notes.delete(0, tk.END)

# واجهة المستخدم
root = tk.Tk()
root.title("📒 يوميات المقاول")
root.geometry("800x500")

# إدخال البيانات
frame_input = tk.Frame(root, pady=10)
frame_input.pack()

tk.Label(frame_input, text="📅 التاريخ (YYYY-MM-DD):").grid(row=0, column=0)
entry_date = tk.Entry(frame_input)
entry_date.grid(row=0, column=1)

tk.Label(frame_input, text="👷 عدد العمال:").grid(row=1, column=0)
entry_workers = tk.Entry(frame_input)
entry_workers.grid(row=1, column=1)

tk.Label(frame_input, text="💵 الأجور:").grid(row=2, column=0)
entry_wages = tk.Entry(frame_input)
entry_wages.grid(row=2, column=1)

tk.Label(frame_input, text="🧱 المواد:").grid(row=3, column=0)
entry_materials = tk.Entry(frame_input)
entry_materials.grid(row=3, column=1)

tk.Label(frame_input, text="📌 مصاريف أخرى:").grid(row=4, column=0)
entry_other = tk.Entry(frame_input)
entry_other.grid(row=4, column=1)

tk.Label(frame_input, text="📝 ملاحظات:").grid(row=5, column=0)
entry_notes = tk.Entry(frame_input)
entry_notes.grid(row=5, column=1)

tk.Button(frame_input, text="➕ إضافة يومية", command=add_record).grid(row=6, column=0, pady=5)
tk.Button(frame_input, text="📊 عرض اليوميات", command=show_records).grid(row=6, column=1, pady=5)
tk.Button(frame_input, text="💰 إجمالي المصاريف", command=total_expenses).grid(row=6, column=2, pady=5)

# جدول عرض البيانات
columns = ("date", "workers", "wages", "materials", "other", "total", "notes")
tree = ttk.Treeview(root, columns=columns, show="headings")
for col in columns:
    tree.heading(col, text=col)

tree.pack(expand=True, fill="both")

root.mainloop()
