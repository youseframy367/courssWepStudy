// Design reminder: This route presents the reference site's course discovery and utility tools.
import { Suspense } from "react";
import HomeClient from "@/app/components/HomeClient";

export default function HomePage() {
  return <Suspense fallback={<main className="page-loading" aria-live="polite">جارٍ تجهيز مساحة التعلّم...</main>}><HomeClient /></Suspense>;
}
