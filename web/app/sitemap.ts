import fs from "fs";
import path from "path";

export default function sitemap() {
  const baseUrl = "https://myglobalhubtools.com";
  const postsDir = path.join(process.cwd(), "content/posts");
  const postUrls = fs.existsSync(postsDir)
    ? fs.readdirSync(postsDir).filter((f) => f.endsWith(".md")).map((f) => ({
        url: baseUrl + "/blog/" + f.replace(/\.md$/, ""),
        lastModified: new Date(),
      }))
    : [];
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: baseUrl + "/tools/thumbnail-previewer", lastModified: new Date() },
    { url: baseUrl + "/tools/youtube-seo-analyzer", lastModified: new Date() },
    { url: baseUrl + "/tools/image-compressor", lastModified: new Date() },
    { url: baseUrl + "/tools/revenue-calculator", lastModified: new Date() },
    { url: baseUrl + "/about", lastModified: new Date() },
    { url: baseUrl + "/contact", lastModified: new Date() },
    { url: baseUrl + "/privacy-policy", lastModified: new Date() },
    ...postUrls,
  ];
}
