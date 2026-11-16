"use client";

import { useState } from "react";
import Link from "next/link";
import { Upload, Download, Image as ImageIcon } from "lucide-react";

export default function ImageCompressor() {
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);
  const [origSize, setOrigSize] = useState<number>(0);
  const [compSize, setCompSize] = useState<number>(0);
  const [quality, setQuality] = useState<number>(0.75);
  const [fileName, setFileName] = useState<string>("thumbnail-compressed.jpg");

  const compressImage = (file: File, q: number) => {
    setOrigSize(file.size);
    setFileName(file.name.replace(/\.[^/.]+$/, "") + "-compressed.jpg");
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target?.result as string;
      setOriginalUrl(src);
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
        const out = canvas.toDataURL("image/jpeg", q);
        setCompressedUrl(out);
        const byteLen = Math.round((out.length - "data:image/jpeg;base64,".length) * 0.75);
        setCompSize(byteLen);
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) compressImage(file, quality);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/" className="text-sm text-indigo-400 hover:underline">← Back to Home & Tools</Link>
        <div className="text-center space-y-2">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            100% Private Local Processing
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">Thumbnail & Image Compressor (Under 2MB)</h1>
          <p className="text-slate-400 text-sm md:text-base">
            Shrink high-res PNG/JPG thumbnails to meet YouTube&apos;s 2MB upload limit instantly inside your browser.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-xl p-8 cursor-pointer transition">
            <Upload className="w-8 h-8 text-indigo-400 mb-2" />
            <span className="text-sm font-medium">Tap to select PNG, JPG, or WebP image</span>
            <span className="text-xs text-slate-400 mt-1">Never uploaded to any server</span>
            <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
          </label>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300">Compression Quality: {Math.round(quality * 100)}%</span>
              {origSize > 0 && (
                <span className="text-emerald-400 font-medium">
                  {(origSize / 1024).toFixed(0)} KB → {(compSize / 1024).toFixed(0)} KB
                </span>
              )}
            </div>
            <input
              type="range"
              min="0.2"
              max="0.95"
              step="0.05"
              value={quality}
              onChange={(e) => setQuality(parseFloat(e.target.value))}
              className="w-full accent-indigo-500"
            />
          </div>

          {compressedUrl && (
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 p-3">
                <img src={compressedUrl} alt="Compressed preview" className="max-h-72 mx-auto rounded-lg" />
              </div>
              <a
                href={compressedUrl}
                download={fileName}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition"
              >
                <Download className="w-4 h-4" /> Download Compressed Thumbnail ({(compSize / 1024).toFixed(0)} KB)
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
