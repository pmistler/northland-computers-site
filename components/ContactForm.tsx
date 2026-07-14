"use client";

import { useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        setSubmitState("error");
        setErrorMessage(
          result?.error || "Something went wrong. Please try again or email website@norlc.com."
        );
        return;
      }

      setSubmitState("success");
      form.reset();
    } catch {
      setSubmitState("error");
      setErrorMessage("Unable to send your message. Please email website@norlc.com.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-navy">
          Name
          <input
            name="name"
            required
            className="rounded-xl border border-slate-300 px-4 py-3 font-normal"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-navy">
          Email
          <input
            name="email"
            type="email"
            required
            className="rounded-xl border border-slate-300 px-4 py-3 font-normal"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-navy">
          Phone
          <input
            name="phone"
            type="tel"
            className="rounded-xl border border-slate-300 px-4 py-3 font-normal"
            placeholder="(555) 555-5555"
            autoComplete="tel"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-navy">
          Service inquiry
          <select
            name="service"
            className="rounded-xl border border-slate-300 px-4 py-3 font-normal"
            defaultValue="Managed IT services"
          >
            <option>Managed IT services</option>
            <option>Cybersecurity / incident response</option>
            <option>Infrastructure or network project</option>
            <option>Technology consulting</option>
            <option>AI and automation</option>
            <option>Website management</option>
            <option>Microsoft 365 / Google Workspace</option>
            <option>Networking / firewall / Wi-Fi</option>
            <option>Emergency technology support</option>
            <option>Backup planning and review</option>
            <option>General IT support</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-bold text-navy">
          Message
          <textarea
            name="message"
            required
            className="min-h-36 rounded-xl border border-slate-300 px-4 py-3 font-normal"
            placeholder="Tell us what you need help with."
          />
        </label>

        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <button
          type="submit"
          disabled={submitState === "sending"}
          className="rounded-full bg-electric px-5 py-3 font-bold text-white transition hover:bg-navy disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitState === "sending" ? "Sending..." : "Submit Inquiry"}
        </button>

        {submitState === "success" && (
          <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
            Thank you — your inquiry has been sent. Northland Computers will follow up soon.
          </p>
        )}

        {submitState === "error" && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {errorMessage}
          </p>
        )}

        <p className="text-xs text-slate-500">
          Prefer email? Contact us directly at{" "}
          <a className="font-semibold text-electric hover:text-navy" href="mailto:website@norlc.com">
            website@norlc.com
          </a>
          .
        </p>
      </div>
    </form>
  );
}
