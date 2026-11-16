import Link from "next/link";
import { Sparkles, ShoppingBag, ArrowUpRight } from "lucide-react";

export default function CreatorMonetizationBox() {
  return (
    <div className="mt-10 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 md:p-8 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
            Recommended Creator Stack (2026)
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            Upgrade Your Recording & Packaging Workflow
          </h3>
        </div>
        <span className="text-xs text-slate-400">
          Curated tools & gear for solo creators
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="https://www.amazon.in/s?k=wireless+lavalier+microphone+for+youtube&tag=YOUR-TAG-21"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition flex flex-col justify-between space-y-3"
        >
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-400">
              <ShoppingBag className="w-3.5 h-3.5" /> Budget Audio Pick (India)
            </span>
            <h4 className="font-semibold text-white group-hover:text-amber-300 transition">
              Dual Wireless Collar Mic + Bi-Color LED Light Kit
            </h4>
            <p className="text-xs text-slate-400">
              Eliminate room echo and harsh shadows on smartphone recordings under ₹3,500.
            </p>
          </div>
          <span className="text-xs font-semibold text-amber-400 inline-flex items-center gap-1">
            Check Latest Price on Amazon.in <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </a>

        <Link
          href="/blog/youtube-description-template-for-seo-and-affiliates-2026"
          className="group p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition flex flex-col justify-between space-y-3"
        >
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400">
              <Sparkles className="w-3.5 h-3.5" /> Free Creator Template
            </span>
            <h4 className="font-semibold text-white group-hover:text-indigo-300 transition">
              2026 YouTube SEO Description & Affiliate Blueprint
            </h4>
            <p className="text-xs text-slate-400">
              Copy our high-converting video description structure to rank faster in search.
            </p>
          </div>
          <span className="text-xs font-semibold text-indigo-400 inline-flex items-center gap-1">
            Open Free Template <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>

      <p className="text-[11px] text-slate-500">
        Disclosure: Some gear links above may earn a small affiliate commission at zero extra cost to you, helping keep all browser utilities 100% free.
      </p>
    </div>
  );
}
