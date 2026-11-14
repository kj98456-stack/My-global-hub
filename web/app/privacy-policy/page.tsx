import Link from "next/link";
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8">
      <div className="max-w-3xl mx-auto space-y-4 text-sm leading-relaxed">
        <Link href="/" className="text-indigo-400 text-sm hover:underline">← Back to Home</Link>
        <h1 className="text-3xl font-bold text-white">Privacy Policy & Disclaimer</h1>
        <p>Last Updated: November 2026</p>
        <h2 className="text-xl font-semibold text-white pt-4">1. Browser-Based Tool Privacy</h2>
        <p>
          Images and inputs used in our browser utilities (such as the Thumbnail Previewer) are processed locally inside your device browser and are never uploaded to or stored on our servers.
        </p>
        <h2 className="text-xl font-semibold text-white pt-4">2. Advertising & Cookies (Google AdSense)</h2>
        <p>
          Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to this site and/or other sites on the Internet. Users may opt out of personalized advertising by visiting Google Ads Settings.
        </p>
        <h2 className="text-xl font-semibold text-white pt-4">3. Educational Disclaimer</h2>
        <p>
          All articles, calculators, and tutorials on this website are provided for educational and informational purposes only and do not constitute financial or legal advice.
        </p>
      </div>
    </div>
  );
}
