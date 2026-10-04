"use client";

import { useState } from "react";
import { site, whatsappUrl } from "@/lib/content";

export default function BookForm() {
  const [form, setForm] = useState({ name: "", phone: "", dates: "", guests: 2, message: "" });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      `Hi, I'd like to enquire about staying at ${site.name}.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
    ];
    if (form.dates) lines.push(`Preferred dates: ${form.dates}`);
    if (form.guests) lines.push(`Guests: ${form.guests}`);
    if (form.message) lines.push(`Message: ${form.message}`);
    window.open(whatsappUrl(lines.join("\n")), "_blank");
  }

  // text-base (16px) on mobile prevents iOS Safari's auto-zoom-on-focus;
  // we only size down on sm: and up where that's not an issue.
  const inputClass =
    "w-full py-3 px-1 border-0 border-b border-line bg-transparent text-charcoal text-base sm:text-[0.96rem] focus:outline-none focus:border-terracotta";
  const labelClass = "block text-[0.74rem] sm:text-[0.76rem] font-medium mb-1.5 text-stone uppercase tracking-wide";

  return (
    <section id="book" className="relative bg-paper border-t border-line overflow-hidden">
      <span className="section-num" aria-hidden="true">07</span>
      <div className="relative z-[1] max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-28 grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16">
        <div className="reveal">
          <div className="font-mono text-[0.7rem] sm:text-[0.72rem] tracking-[0.16em] uppercase text-terracotta mb-4 sm:mb-5">
            Plan Your Stay
          </div>
          <h2 className="font-serif text-[clamp(1.7rem,5.5vw,2.6rem)] leading-[1.15]">Send an enquiry</h2>
          <p className="text-charcoal2 text-[0.94rem] sm:text-[0.96rem] mt-4 max-w-[34ch] leading-relaxed">
            The hosts reply directly, usually within the day. For anything
            urgent, WhatsApp or call is fastest.
          </p>
          <div className="mt-7 flex flex-col gap-2.5">
            <a href={`tel:+${site.phoneE164}`} className="text-terracotta border-b border-terracotta pb-px w-fit">
              Call {site.phoneDisplay}
            </a>
            <a
              href={whatsappUrl(`Hi, I'd like to enquire about staying at ${site.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta border-b border-terracotta pb-px w-fit"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        <div className="reveal">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass} htmlFor="name">Full name</label>
              <input id="name" required className={inputClass} value={form.name} onChange={update("name")} />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">Phone number</label>
              <input id="phone" type="tel" required className={inputClass} value={form.phone} onChange={update("phone")} />
            </div>
            <div>
              <label className={labelClass} htmlFor="dates">Preferred dates</label>
              <input id="dates" placeholder="e.g. 12–14 Dec" className={inputClass} value={form.dates} onChange={update("dates")} />
            </div>
            <div>
              <label className={labelClass} htmlFor="guests">Guests</label>
              <input id="guests" type="number" min="1" className={inputClass} value={form.guests} onChange={update("guests")} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="message">Message (optional)</label>
              <textarea
                id="message"
                rows={3}
                placeholder="Anything else the hosts should know"
                className={`${inputClass} resize-y min-h-[70px]`}
                value={form.message}
                onChange={update("message")}
              />
            </div>
            <div className="sm:col-span-2 flex items-center gap-4 flex-wrap mt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-3 bg-charcoal text-ivory text-[0.86rem] font-medium hover:opacity-90 transition-opacity"
              >
                Send via WhatsApp
              </button>
              <span className="text-[0.78rem] text-stone">Opens WhatsApp with your details pre-filled.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
