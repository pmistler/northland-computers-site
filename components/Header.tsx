"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { nav, company } from "@/lib/data";
import ButtonLink from "@/components/ButtonLink";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu if the browser is resized into desktop mode.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_1px_12px_rgba(15,23,42,.04)] backdrop-blur">
      <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-3 lg:flex xl:gap-5"
          aria-label="Primary navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-2 text-[14px] font-extrabold text-slate-700 transition hover:text-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric xl:text-[15px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <a
            href={`tel:${company.phone}`}
            className="hidden text-[15px] font-black text-navy hover:text-electric 2xl:block"
          >
            {company.phone}
          </a>

          <ButtonLink href="/contact">
            Schedule a Consultation
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="focus-ring rounded-xl border border-slate-200 p-2.5 text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[82px] h-[calc(100vh-82px)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-5 shadow-xl lg:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-2xl"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3.5 text-lg font-extrabold text-slate-800 hover:bg-slate-50 hover:text-electric"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-5 grid gap-3 border-t border-slate-200 pt-5">
              <a
                href={`tel:${company.phone}`}
                className="px-4 text-lg font-black text-navy"
              >
                {company.phone}
              </a>

              <ButtonLink href="/contact">
                Schedule a Consultation
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
