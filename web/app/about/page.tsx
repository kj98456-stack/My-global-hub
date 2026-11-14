import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/" className="text-indigo-400 text-sm hover:underline">← Back to Home</Link>
        <h1 className="text-3xl font-bold text-white">About Creator & Tech Hub</h1>
        <p>
          Creator & Tech Hub was built by digital creators and tech enthusiasts with over 5 years of hands-on experience testing YouTube workflows, mobile productivity setups, AI tools, and online freelancing.
        </p>
        <p>
          Our mission is simple: provide fast, privacy-friendly browser tools that require zero sign-ups, alongside practical, experience-backed tutorials that help creators and freelancers worldwide grow online.
        </p>
      </div>
    </div>
  );
}
