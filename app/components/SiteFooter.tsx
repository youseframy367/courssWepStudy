// Design reminder: The footer is a useful study hub: course links, a clear support path, and an unobtrusive AI tutor.
import Link from "next/link";
import { BookOpenCheck, Code2, MessageCircleQuestion, ShieldCheck } from "lucide-react";
import AiChat from "@/app/components/AiChat";

export default function SiteFooter({ courseSlug }: { courseSlug?: string }) {
  return <footer className="site-footer">
    <div className="site-footer__inner">
      <div className="site-footer__brand"><div className="site-footer__brand-mark"><Code2 size={20} /></div><div><strong>Course Web Study</strong><p>Practical web learning, built one verified step at a time.</p></div><div className="site-footer__notes"><span><ShieldCheck size={15} /> API keys stay server-side</span><span><BookOpenCheck size={15} /> Course checkpoints included</span></div></div>
      <nav className="site-footer__links" aria-label="Footer navigation"><div><h3>Learn</h3><Link href="/course/html">HTML basics</Link><Link href="/course/css">CSS layout</Link><Link href="/course/javascript">JavaScript</Link></div><div><h3>Practice</h3><a href="#featured-course">Explore courses</a><a href="#">Code playground</a><a href="#">Knowledge checks</a></div><div><h3>Help</h3><span><MessageCircleQuestion size={15} /> Ask the study assistant</span><span>Simple steps, clear feedback.</span></div></nav>
      <AiChat courseSlug={courseSlug} />
    </div>
    <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Course Web Study</span><span>Learn, test, then build.</span></div>
  </footer>;
}
