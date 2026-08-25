import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CareerWorkspace from "@/app/components/CareerWorkspace";

export default function CareerPage() {
  return <div className="career-shell"><header className="career-nav"><Link href="/"><ArrowLeft size={16} /> العودة لمساحة المذاكرة</Link><strong>Course Web Study <span>Career Lab</span></strong></header><CareerWorkspace /></div>;
}
