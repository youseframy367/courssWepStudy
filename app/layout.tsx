// Design reminder: The global shell stays faithful to the reference's dark learning identity.
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn to Code | Course Web Study",
  description: "Practical web-development courses, code tools, colors, fonts and icon references.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
