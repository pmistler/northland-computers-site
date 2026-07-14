import { CheckCircle2, ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";

export function PageHero({ eyebrow, title, desc, children }: { eyebrow: string; title: string; desc: string; children?: React.ReactNode }) {
  return (
    <section className="hero-orb overflow-hidden text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:px-8 lg:py-24 xl:py-28">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[.25em] text-cyan sm:text-sm">{eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-[-.035em] sm:text-5xl lg:text-[3.75rem] xl:text-[4.2rem]">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">{desc}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact" variant="light">Schedule a Consultation</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">See Proven Results</ButtonLink>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[.09] p-5 shadow-glow backdrop-blur sm:p-7">
          {children ?? (
            <div className="rounded-2xl bg-grid bg-[size:28px_28px] p-6">
              <h2 className="text-2xl font-black">Technology decisions made with confidence.</h2>
              <div className="mt-6 grid gap-3 text-sm text-slate-200">
                {["Responsive managed support", "Complex project execution", "Documented ownership", "Cybersecurity and continuity", "Cloud, infrastructure, AI, and web"].map((x) => (
                  <div key={x} className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-signal" />{x}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, desc, align = "center" }: { eyebrow?: string; title: string; desc?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="text-xs font-black uppercase tracking-[.23em] text-electric sm:text-sm">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-.025em] text-navy sm:text-4xl lg:text-[2.8rem]">{title}</h2>
      {desc && <p className="mt-4 text-lg leading-8 text-slate-600">{desc}</p>}
    </div>
  );
}

export function CTA({ title = "Ready for technology that is managed with ownership?", desc = "Talk with Northland Computers about managed IT, cybersecurity, infrastructure, AI, websites, or an upcoming technology project." }: { title?: string; desc?: string }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-navy p-8 text-white shadow-glow sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">{desc}</p>
        </div>
        <div className="mt-7 shrink-0 lg:mt-0"><ButtonLink href="/contact" variant="light">Schedule a Consultation</ButtonLink></div>
      </div>
    </section>
  );
}

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="card-hover rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">{children}</div>;
}

export function BulletList({ items }: { items: string[] }) {
  return <div className="grid gap-3">{items.map((x) => <div key={x} className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-signal" /><span>{x}</span></div>)}</div>;
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="focus-ring inline-flex items-center gap-2 rounded-md font-extrabold text-electric transition hover:text-navy">{children}<ArrowRight className="h-4 w-4" /></a>;
}
