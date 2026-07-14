import { CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeader, CTA } from "@/components/Sections";

export const metadata = {
  title: "Managed IT Service Plans",
  description: "Northland Computers managed IT service plans for organizations seeking priority support, documentation, monitoring, and predictable monthly coverage.",
  alternates: { canonical: "/service-plans" }
};

const plans = [
  { name: "Bronze", price: "$600/month", hours: "4 support hours", features: ["Remote or onsite support as required", "Guaranteed emergency response", "Asset tracking", "Network summary"] },
  { name: "Silver", price: "$1,200/month", hours: "8 support hours", features: ["Guaranteed emergency response", "Server log monitoring", "Firewall log security monitoring", "Asset tracking", "Network summary"] },
  { name: "Gold", price: "$2,250/month", hours: "15 support hours", featured: true, features: ["24/7 server log monitoring", "24/7 firewall log security monitoring", "Guaranteed emergency response", "Asset tracking", "Network summary"] },
  { name: "Platinum", price: "$150/hour", hours: "20-hour monthly minimum", features: ["Dedicated technician support", "Additional hours billed as used", "24/7 server and firewall monitoring", "Guaranteed emergency response", "No maximum"] }
];

export default function Page() {
  return <main>
    <PageHero eyebrow="Managed service plans" title="Predictable support with clear monthly expectations." desc="Northland service plans provide priority scheduling, responsive support, documentation, monitoring, and an ongoing relationship with a technology partner that understands your environment." />
    <section className="px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl">
      <SectionHeader title="Plans designed to grow with your organization." desc="These plans are starting points. Final coverage, travel expectations, monitoring, project work, and response requirements are confirmed in a service agreement." />
      <div className="mt-12 grid gap-5 lg:grid-cols-4">{plans.map(p=><div key={p.name} className={`rounded-3xl border p-6 shadow-sm ${p.featured?"border-electric bg-navy text-white shadow-glow":"border-slate-200 bg-white text-slate-900"}`}><p className="text-sm font-extrabold uppercase tracking-[.18em] text-electric">{p.name}</p><h2 className="mt-3 text-3xl font-black">{p.price}</h2><p className={`mt-2 text-sm ${p.featured?"text-slate-300":"text-slate-500"}`}>{p.hours}</p><ul className="mt-6 grid gap-3 text-sm">{p.features.map(f=><li key={f} className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-signal"/>{f}</li>)}</ul></div>)}</div>
      <div className="mt-10 rounded-3xl bg-slate-50 p-8"><h2 className="text-2xl font-black text-navy">Non-plan and overage rates</h2><div className="mt-5 grid gap-3 text-slate-700 sm:grid-cols-2"><p><strong>Remote service:</strong> $195/hour</p><p><strong>Onsite in Massachusetts:</strong> $195/hour plus one-way travel</p><p><strong>Out-of-state onsite:</strong> $195/hour plus expenses</p><p><strong>Emergency service:</strong> $250/hour before 8:00 AM or after 6:00 PM</p></div><p className="mt-5 text-sm text-slate-500">Onsite travel to Greater Boston and other extended service areas is available and should be factored into the service arrangement.</p></div>
    </div></section><CTA title="Find the right support relationship for your organization." />
  </main>
}
