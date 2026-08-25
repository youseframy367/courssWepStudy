// Design reminder: Keep error states clear, friendly, and inside the educational brand language.
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#282A35] p-6 text-center text-white">
      <div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#c4c001]">Course Web Study</p>
        <h1 className="text-5xl font-bold">Page not found</h1>
        <p className="mt-4 text-white/70">The course or lesson you asked for is not available.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[#04AA6D] px-6 py-3 font-bold text-white transition hover:bg-[#078658]">
          Back to courses
        </Link>
      </div>
    </main>
  );
}
