import Link from "next/link";
import Logo from "@/components/Logo";
import { company, solutions, industries } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8 lg:py-16">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-xl leading-7 text-slate-300">Managed IT, cybersecurity, infrastructure, cloud, AI, website management, and technology consulting for organizations that need dependable execution and long-term technology leadership.</p>
          <address className="mt-5 not-italic text-sm leading-7 text-slate-300">
            {company.address}<br />
            <a className="hover:text-cyan" href={`tel:${company.phone}`}>{company.phone}</a> · <a className="hover:text-cyan" href={`mailto:${company.email}`}>{company.email}</a>
          </address>
          <p className="mt-5 text-sm font-bold text-cyan">Technology leadership since 2006.</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <Link className="text-sm font-bold text-white hover:text-cyan" href="/service-plans">Managed service plans →</Link>
            <Link className="text-sm font-bold text-white hover:text-cyan" href="/resources">Technology resources →</Link>
          </div>
        </div>
        <div><h3 className="font-extrabold">Solutions</h3><div className="mt-4 grid gap-2.5">{solutions.slice(0, 6).map((i) => <Link className="text-sm text-slate-300 hover:text-cyan" href={`/solutions/${i.slug}`} key={i.slug}>{i.title}</Link>)}</div></div>
        <div><h3 className="font-extrabold">Industries</h3><div className="mt-4 grid gap-2.5">{industries.slice(0, 6).map((i) => <Link className="text-sm text-slate-300 hover:text-cyan" href={`/industries/${i.slug}`} key={i.slug}>{i.title}</Link>)}</div></div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-400">Copyright © {new Date().getFullYear()} Northland Computers. All rights reserved.</div>
    </footer>
  );
}
