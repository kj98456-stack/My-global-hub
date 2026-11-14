import Link from "next/link";
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link href="/" className="text-indigo-400 text-sm hover:underline">← Back to Home</Link>
        <h1 className="text-3xl font-bold text-white">Contact Us</h1>
        <p>
          Have a question about our free tools, want to suggest a new guide topic, or interested in freelance web development services? Reach out anytime!
        </p>
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
          <p><strong>Email:</strong> support@creatorandtechhub.com</p>
          <p><strong>Response Time:</strong> Within 24–48 business hours</p>
        </div>
      </div>
    </div>
  );
}
