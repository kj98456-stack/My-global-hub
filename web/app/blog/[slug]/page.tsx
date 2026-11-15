import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import type { Metadata } from "next";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function generateStaticParams() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(/\.md$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: `${data.title || slug} | Creator & Tech Hub`,
    description: data.description || "",
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <article className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/" className="text-sm text-indigo-400 hover:underline">
          ← Back to Home & Tools
        </Link>

        <header className="space-y-3 border-b border-slate-800 pb-6">
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">
            {data.category || "Guides"} • {data.date ? String(data.date).slice(0, 10) : "2026-11-15"}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">
            {data.title || slug}
          </h1>
          <p className="text-slate-400 text-lg">{data.description || ""}</p>
        </header>

        <div
          className="space-y-4 text-slate-300 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:pt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_p]:text-base"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="mt-10 p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-white text-lg">
              Try Our Free Creator Tools
            </h3>
            <p className="text-sm text-slate-300">
              Preview YouTube thumbnails on mobile & desktop screens in seconds.
            </p>
          </div>
          <Link
            href="/tools/thumbnail-previewer"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold whitespace-nowrap"
          >
            Open Tool →
          </Link>
        </div>
      </div>
    </article>
  );
}
