"use client";

import { useState } from "react";
import Link from "next/link";
import { Upload, Smartphone, Monitor, Moon, Sun, Eye } from "lucide-react";

export default function ThumbnailPreviewer() {
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState("I Tested 5 Free AI Workflow Tools for 30 Days (Results!)");
  const [channelName, setChannelName] = useState("Creator & Tech Hub");
  const [darkMode, setDarkMode] = useState(true);
  const [viewMode, setViewMode] = useState<"mobile" | "desktop">("mobile");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/" className="text-sm text-indigo-400 hover:underline">← Back to Home</Link>
        <div className="text-center space-y-2">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
            100% Free Browser Tool
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">YouTube Thumbnail & Title Previewer</h1>
          <p className="text-slate-400 text-sm md:text-base">
            Check if your text is readable on mobile screens and see if your title gets cut off before publishing.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-300">1. Upload Thumbnail (1280x720)</label>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-700 hover:border-red-500 rounded-xl p-6 cursor-pointer transition bg-slate-950">
              <Upload className="w-6 h-6 text-slate-400 mb-2" />
              <span className="text-sm text-slate-300">Click to select image</span>
              <span className="text-xs text-slate-500 mt-1">Processed locally in your browser</span>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </label>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                2. Video Title ({title.length}/100 characters)
              </label>
              <input
                type="text"
                maxLength={100}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-sm text-white focus:outline-none focus:border-red-500"
              />
              {title.length > 60 && (
                <p className="text-xs text-amber-400 mt-1">
                  Warning: Titles over 60 characters often get cut off on mobile feeds.
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">3. Channel Name</label>
              <input
                type="text"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 p-3 text-sm text-white focus:outline-none focus:border-red-500"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
            <Eye className="w-4 h-4 text-red-400" /> Live Feed Simulation
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("mobile")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                viewMode === "mobile" ? "bg-red-600 text-white" : "bg-slate-800 text-slate-400"
              }`}
            >
              <Smartphone className="w-4 h-4" /> Mobile Feed
            </button>
            <button
              onClick={() => setViewMode("desktop")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                viewMode === "desktop" ? "bg-red-600 text-white" : "bg-slate-800 text-slate-400"
              }`}
            >
              <Monitor className="w-4 h-4" /> Desktop Feed
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>

        <div className={`rounded-2xl p-8 flex justify-center transition ${darkMode ? "bg-[#0f0f0f] text-white" : "bg-white text-black"}`}>
          <div className={viewMode === "mobile" ? "w-[340px]" : "w-[380px]"}>
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center">
              {image ? (
                <img src={image} alt="Thumbnail preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-xs text-slate-400">Upload a thumbnail to preview</span>
              )}
              <span className="absolute bottom-2 right-2 bg-black/85 text-white text-[11px] font-semibold px-1.5 py-0.5 rounded">
                12:48
              </span>
            </div>
            <div className="flex gap-3 mt-3">
              <div className="w-9 h-9 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                {channelName.charAt(0).toUpperCase()}
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-sm leading-snug line-clamp-2">{title}</h3>
                <p className={`text-xs ${darkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                  {channelName} • 48K views • 2 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
