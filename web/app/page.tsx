import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Sparkles, Wrench, BookOpen, ArrowRight } from "lucide-react";

function getAllPosts() {
  const postsDir = path.join(process.cwd(), "content/posts");
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir).filter((f) => f.endsWith(".md")).map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const { data } = matter(fs.readFileSync(path.join(postsDir, filename), "utf8"));
    return {
      slug,
      title: String(data.title || slug),
      date: data.date ? String(data.date).slice(0, 10) : "2026-11-15",
      description: String(data.description || ""),
      category: String(data.category || "Guides"),
    };
  });
}

export default function HomePage() {
  const posts = getAllPosts();
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white flex items-center gap-2"><Sparkles className="w-5 h-5 text-indigo-400" />Creator & Tech Hub</Link>
          <nav className="flex gap-5 text-sm text-slate-300">
            <Link href="/tools/thumbnail-previewer" className="hover:text-white">Free Tools</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-12 space-y-14">
        <section className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Free Creator Tools & Daily Digital Growth Guides</h1>
          <p className="text-slate-400 text-base md:text-lg">Browser-based utilities and practical tutorials on AI workflows, YouTube growth, freelancing, and smart productivity.</p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-white"><Wrench className="w-5 h-5 text-indigo-400" /> Free Browser Tools (Zero Sign-Up)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/tools/thumbnail-previewer" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition space-y-2">
              <span className="text-xs font-semibold text-indigo-400 uppercase">YouTube Tool</span>
              <h3 className="text-lg font-bold text-white">Thumbnail & Title Mobile Previewer</h3>
              <p className="text-sm text-slate-400">Test how your thumbnail and title look on mobile and desktop feeds before publishing.</p>
            </Link>
            <Link href="/tools/youtube-seo-analyzer" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition space-y-2"><span className="text-xs font-semibold text-emerald-400 uppercase">SEO Utility</span><h3 className="text-lg font-bold text-white">YouTube Title, Description & Tag Analyzer</h3><p className="text-sm text-slate-400">Check mobile title cutoff, 125-char description hook, and 500-char tag limits instantly.</p></Link>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-white"><BookOpen className="w-5 h-5 text-emerald-400" /> Latest Articles & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={"/blog/" + post.slug} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500 transition flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-emerald-400">{post.category} • {post.date}</span>
                  <h3 className="text-xl font-bold text-white leading-snug">{post.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-3">{post.description}</p>
                </div>
                <span className="text-sm font-medium text-indigo-400 inline-flex items-center gap-1">Read Full Guide <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-800 py-8 px-6 text-sm text-slate-400">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2026 Creator & Tech Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy & Disclaimer</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
