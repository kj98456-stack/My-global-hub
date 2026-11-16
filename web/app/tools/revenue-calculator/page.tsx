"use client";

import { useState } from "react";
import Link from "next/link";
import { DollarSign, TrendingUp } from "lucide-react";

export default function RevenueCalculator() {
  const [monthlyViews, setMonthlyViews] = useState(100000);
  const [rpmUsd, setRpmUsd] = useState(2.5);

  const monthlyAdsenseUsd = (monthlyViews / 1000) * rpmUsd;
  const monthlyAdsenseInr = Math.round(monthlyAdsenseUsd * 84);
  const sponsorshipEstimateUsd = Math.round((monthlyViews / 1000) * 18);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/" className="text-sm text-indigo-400 hover:underline">← Back to Home & Tools</Link>
        <div className="text-center space-y-2">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Creator Monetization Calculator
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">YouTube AdSense & Sponsorship Rate Calculator</h1>
          <p className="text-slate-400 text-sm md:text-base">
            Estimate monthly AdSense payouts (USD & INR) and fair brand sponsorship pricing based on your monthly views.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300 font-medium">Monthly Long-Form Views</span>
              <span className="text-indigo-400 font-bold">{monthlyViews.toLocaleString()} views</span>
            </div>
            <input
              type="range"
              min="5000"
              max="2000000"
              step="5000"
              value={monthlyViews}
              onChange={(e) => setMonthlyViews(Number(e.target.value))}
              className="w-full accent-indigo-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300 font-medium">Niche RPM (Revenue per 1,000 views)</span>
              <span className="text-emerald-400 font-bold">${rpmUsd.toFixed(2)} USD</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="15"
              step="0.25"
              value={rpmUsd}
              onChange={(e) => setRpmUsd(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <p className="text-xs text-slate-400 flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Est. Monthly AdSense</p>
              <p className="text-2xl font-bold text-white mt-1">${monthlyAdsenseUsd.toFixed(0)} / mo</p>
              <p className="text-xs text-emerald-400 mt-1">≈ ₹{monthlyAdsenseInr.toLocaleString()} INR</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <p className="text-xs text-slate-400 flex items-center gap-1"><TrendingUp className="w-3.5 h-3.5 text-indigo-400" /> Yearly AdSense Run-Rate</p>
              <p className="text-2xl font-bold text-white mt-1">${(monthlyAdsenseUsd * 12).toFixed(0)} / yr</p>
              <p className="text-xs text-indigo-400 mt-1">≈ ₹{(monthlyAdsenseInr * 12).toLocaleString()} INR</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <p className="text-xs text-slate-400">Brand Deal / Integration Rate</p>
              <p className="text-2xl font-bold text-amber-400 mt-1">${sponsorshipEstimateUsd.toLocaleString()}</p>
              <p className="text-xs text-slate-400 mt-1">Per dedicated shoutout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
