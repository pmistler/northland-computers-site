import Link from "next/link";
import { notFound } from "next/navigation";
import { GraduationCap, ShieldCheck, Cloud, Network, Laptop, FileCheck2, ArrowRight } from "lucide-react";
import { industries, projects } from "@/lib/data";
import { PageHero, SectionHeader, BulletList, CTA, Card } from "@/components/Sections";

export function generateStaticParams() { return industries.map((x) => ({ slug: x.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }) {
  const i = industries.find((x) => x.slug === params.slug);
  if (!i) return {};
  if (i.slug === "schools-education") {
    return {
      title: "K–12 IT, Cybersecurity & Google Workspace Services",
      description: "Northland Computers provides K–12 technology consulting, cybersecurity assessments, Google Workspace security, infrastructure modernization, device deployments, E-Rate, cloud migration, and technology leadership for school districts.",
      alternates: { canonical: "/industries/schools-education" }
    };
  }
  return { title: `IT Services for ${i.title}`, description: i.short, alternates: { canonical: `/industries/${i.slug}` } };
}

function EducationPage() {
  const educationProjects = projects.filter((project) => project.tags.includes("Education")).slice(0, 6);
  const capabilities = [
    { icon: FileCheck2, title: "Independent assessments", text: "Cybersecurity and technology reviews that evaluate controls, administrative access, cloud configuration, infrastructure, documentation, continuity, and operational risk." },
    { icon: ShieldCheck, title: "Cybersecurity & identity", text: "MFA and 2-Step Verification, privileged access, role design, incident readiness, firewall strategy, endpoint security, and practical remediation planning." },
    { icon: Cloud, title: "Google Workspace for Education", text: "Security configuration, Super Admin and delegated-role governance, Gmail and Drive administration, audit analysis, account lifecycle, GAM automation, and licensing." },
    { icon: Network, title: "District infrastructure", text: "Wireless, switching, VLANs, firewalls, DNS/DHCP, servers, virtualization, VoIP, cameras, access control, and multi-building modernization." },
    { icon: Laptop, title: "Devices & cloud modernization", text: "1:1 programs, staff deployments, Chromebook and laptop lifecycle planning, cloud storage migrations, identity, and operational standardization." },
    { icon: GraduationCap, title: "Technology leadership", text: "Roadmaps, budgets, E-Rate, grants, procurement, vendor review, policy, documentation, and leadership support grounded in long-term K–12 experience." }
  ];

  return (
    <main>
      <PageHero
        eyebrow="K–12 technology & cybersecurity"
        title="School technology experience that goes well beyond the help desk."
        desc="Northland combines long-term public-school technology leadership with hands-on cybersecurity, Google Workspace, infrastructure, cloud, automation, device, and project experience."
      >
        <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
          <p className="text-sm font-extrabold uppercase tracking-[.2em] text-cyan">Built for district realities</p>
          <div className="mt-5 grid gap-3 text-sm text-slate-200">
            {["Independent security and technology assessments", "Google Workspace security and administration", "District-wide infrastructure modernization", "E-Rate, procurement, and lifecycle planning", "Large-scale device, wireless, and cloud deployments"].map((item) => (
              <div key={item} className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-signal" />{item}</div>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="District-level capability"
            title="From independent assessment to full-scale execution."
            desc="Northland can support district leadership, complement an existing technology department, perform an independent assessment, or take ownership of a defined modernization project."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <Card key={title}>
                <Icon className="h-9 w-9 text-electric" />
                <h2 className="mt-4 text-xl font-black text-navy">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Independent perspective" title="A useful second set of eyes for school leadership." desc="A district does not need to outsource its technology department to benefit from an independent assessment." tone="dark" />
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-black">Cybersecurity & governance review</h3>
              <p className="mt-3 leading-7 text-slate-300">Review privileged access, MFA/2SV, administrative roles, cloud configuration, account lifecycle, incident readiness, backups, and documented controls.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-black">Technology operations review</h3>
              <p className="mt-3 leading-7 text-slate-300">Evaluate infrastructure, wireless, switching, firewalls, servers, cloud services, lifecycle planning, vendor ownership, documentation, and operational resilience.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/solutions/cybersecurity-assessments" className="inline-flex items-center gap-2 font-extrabold text-cyan hover:text-white">Explore cybersecurity & technology assessments <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Proven K–12 execution" title="District-scale work, delivered in production environments." desc="Representative education projects show the scale and range of Northland's hands-on experience." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {educationProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="card-hover rounded-3xl border border-slate-200 bg-white p-7">
                <p className="text-3xl font-black text-electric">{project.metric}</p>
                <h3 className="mt-3 text-xl font-black text-navy">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{project.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader align="left" eyebrow="Google Workspace for Education" title="Security, governance, automation, and administration." desc="Google Workspace can be simple for end users while remaining complex to govern well. Northland brings both day-to-day administrative experience and the scripting and audit skills needed for deeper analysis." />
            <div className="mt-7"><BulletList items={["Super Admin and delegated-role review","2-Step Verification and account-security posture","GAM-based reporting, automation, and license cleanup","Gmail, Drive, Groups, and account lifecycle administration","Audit evidence, documentation, and remediation planning"]} /></div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-extrabold uppercase tracking-[.22em] text-electric">A strong fit for</p>
            <h2 className="mt-3 text-3xl font-black text-navy">Districts that already have IT staff.</h2>
            <p className="mt-4 leading-7 text-slate-600">Northland can work alongside an internal technology director or team when a district needs independent review, specialized Google expertise, project capacity, remediation support, or an outside perspective for leadership.</p>
            <Link href="/solutions/google-workspace-security" className="mt-6 inline-flex items-center gap-2 font-extrabold text-electric hover:text-navy">Explore Google Workspace security <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <CTA title="Talk with Northland about your district's technology or cybersecurity priorities." desc="Whether you need an independent assessment, Google Workspace expertise, infrastructure modernization, or additional project capacity, Northland can work with your existing team or lead a defined engagement." />
    </main>
  );
}

export default function Page({ params }: { params: { slug: string } }) {
  const i = industries.find((x) => x.slug === params.slug);
  if (!i) notFound();
  if (i.slug === "schools-education") return <EducationPage />;
  const Icon = i.icon;
  return (
    <main>
      <PageHero eyebrow="Industry expertise" title={`Technology support for ${i.title.toLowerCase()}.`} desc={i.short} />
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <Icon className="h-12 w-12 text-electric" />
            <SectionHeader align="left" title="Where Northland helps" desc="Support is adapted to the systems, pace, vendors, security requirements, and operational realities of your environment." />
            <div className="mt-8"><BulletList items={i.details} /></div>
          </div>
          <div className="rounded-3xl bg-navy p-8 text-white">
            <h2 className="text-2xl font-black">An experienced partner, not another vendor to manage.</h2>
            <p className="mt-4 leading-7 text-slate-300">Northland can coordinate software vendors, internet providers, cloud systems, security tools, hardware suppliers, and project partners while maintaining clear documentation and ownership.</p>
          </div>
        </div>
      </section>
      <CTA title={`Discuss technology support for your ${i.title.toLowerCase()} organization.`} />
    </main>
  );
}
