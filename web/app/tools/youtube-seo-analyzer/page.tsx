"use client";
import CreatorMonetizationBox from "@/components/CreatorMonetizationBox";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, Search, Hash, FileText } from "lucide-react";

export default function YouTubeSeoAnalyzer() {
  const [title, setTitle] = useState("How to Grow a Faceless YouTube Channel in 2026 (Step-by-Step)");
  const [description, setDescription] = useState(
    "In this video, learn the exact workflow to script, edit, and optimize thumbnails for higher CTR.\n\nTimestamps:\n00:00 Intro\n01:45 Thumbnail Strategy\n04:20 SEO Description Formula"
  );
  const [tagsInput, setTagsInput] = useState("youtube growth, faceless youtube channel, youtube seo 2026, thumbnail tips, ctr optimization");
  const [copied, setCopied] = useState(false);

  const tagList = tagsInput
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const totalTagChars = tagList.join(",").length;

  const copyFormattedPack = () => {
    const text = `TITLE:\n${title}\n\nDESCRIPTION:\n${description}\n\nTAGS:\n${tagList.join(", ")}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/" className="text-sm text-indigo-400 hover:underline">← Back to Home & Tools</Link>

        <div className="text-center space-y-2">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Free YouTube SEO Tool
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">Title, Description & Tag Limit Analyzer</h1>
          <p className="text-slate-400 text-sm md:text-base">
            Check exact mobile title cutoff, above-the-fold description hook, and YouTube&apos;s 500-character tag limit before publishing.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <label className="font-medium text-slate-300 flex items-center gap-1.5">
                <Search className="w-4 h-4 text-indigo-400" /> Video Title
              </label>
              <span className={title.length > 60 ? "text-amber-400" : "text-emerald-400"}>
                {title.length} / 100 chars {title.length <= 60 ? "(Safe on Mobile)" : "(Truncates on Mobile)"}
              </span>
            </div>
            <input
              type="text"
              maxLength={100}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <label className="font-medium text-slate-300 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-400" /> Video Description
              </label>
              <span className="text-slate-400">{description.length} / 5000 chars</span>
            </div>
            <textarea
              rows={5}
              maxLength={5000}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
            <p className="text-xs text-slate-400 mt-1">
              Above-the-fold preview (first 125 chars): <span className="text-slate-200">&ldquo;{description.slice(0, 125)}&rdquo;</span>
            </p>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <label className="font-medium text-slate-300 flex items-center gap-1.5">
                <Hash className="w-4 h-4 text-red-400" /> Comma-Separated Tags ({tagList.length} tags)
              </label>
              <span className={totalTagChars > 500 ? "text-red-400 font-semibold" : "text-emerald-400"}>
                {totalTagChars} / 500 chars
              </span>
            </div>
            <textarea
              rows={3}
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button
            onClick={copyFormattedPack}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied Full Metadata Pack!" : "Copy Optimized Title, Description & Tags"}
          </button>
        </div>
              <CreatorMonetizationBox />
</div>
    </div>
  );
}
