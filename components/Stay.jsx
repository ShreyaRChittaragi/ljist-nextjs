import Image from "next/image";
import { stayFeatures } from "@/lib/content";

export default function Stay() {
  return (
    <section id="stay" className="relative bg-paper border-t border-b border-line overflow-hidden">
      <span className="section-num" aria-hidden="true">02</span>
      <div className="relative z-[1] max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-28 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-[4.4rem] items-center">
        <div className="reveal">
          <div className="font-mono text-[0.7rem] sm:text-[0.72rem] tracking-[0.16em] uppercase text-terracotta mb-4 sm:mb-5">
            The Stay
          </div>
          <h2 className="font-serif text-[clamp(2rem,6.5vw,3.2rem)] leading-[1.08]">
            A cottage of your own
          </h2>
          <p className="mt-4 text-charcoal2 max-w-[44ch] text-[0.95rem] sm:text-[0.98rem] leading-relaxed">
            No shared corridors, no shared walls — each cottage is handed
            over to one group at a time, with everything you need already
            inside it.
          </p>
          <ul className="mt-6 sm:mt-7 grid gap-3.5 sm:gap-4">
            {stayFeatures.map((f) => (
              <li key={f.n} className="grid grid-cols-[26px_1fr] sm:grid-cols-[28px_1fr] gap-3 sm:gap-3.5 text-[0.92rem] sm:text-[0.96rem] text-charcoal2 items-baseline">
                <b className="font-mono text-[0.76rem] sm:text-[0.78rem] text-terracotta">{f.n}</b>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal relative order-first md:order-last">
          <div className="relative aspect-[4/3] md:aspect-[5/6] overflow-hidden -mx-5 sm:mx-0">
            <Image
              src="/images/bedroom.jpg"
              alt="Cottage bedroom, L-JIST Homestay"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="hidden sm:block absolute -left-8 -bottom-6 bg-charcoal text-ivory px-6 py-5 shadow-[0_16px_40px_rgba(42,38,34,0.3)]">
            <div className="font-serif text-[1.6rem] text-[#E8A57C] leading-none">Since day one</div>
            <div className="font-mono text-[0.68rem] text-[#B5AA97] mt-1.5">HOSTED PERSONALLY BY THE FAMILY</div>
          </div>
        </div>
      </div>
    </section>
  );
}
