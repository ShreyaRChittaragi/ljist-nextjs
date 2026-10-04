import { amenities } from "@/lib/content";

export default function Amenities() {
  return (
    <section id="amenities" className="relative max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-28 overflow-hidden">
      <span className="section-num" aria-hidden="true">03</span>
      <div className="relative z-[1]">
        <div className="font-mono text-[0.7rem] sm:text-[0.72rem] tracking-[0.16em] uppercase text-terracotta mb-4 sm:mb-5 reveal">
          Amenities
        </div>
        <h2 className="reveal font-serif text-[clamp(2rem,6.5vw,3.2rem)] leading-[1.08] max-w-[16ch] mb-10 sm:mb-14">
          Everything the stay includes
        </h2>

        <div>
          {amenities.map((a, i) => (
            <div
              key={a.n}
              className="reveal group grid grid-cols-[3.5rem_1fr] sm:grid-cols-[5rem_14rem_1fr] gap-x-4 sm:gap-x-8 items-baseline py-6 sm:py-7 border-b border-line first:border-t"
            >
              <span className="font-mono text-[0.78rem] sm:text-[0.82rem] text-terracotta">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-[1.3rem] sm:text-[1.6rem] font-medium leading-tight transition-transform duration-300 group-hover:translate-x-1.5">
                {a.title}
              </h3>
              <p className="hidden sm:block text-[0.92rem] text-charcoal2 self-center">{a.text}</p>
              <p className="sm:hidden col-span-2 text-[0.88rem] text-charcoal2 mt-1">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
