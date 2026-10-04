import { guestNotes } from "@/lib/content";

export default function Notes() {
  const [featured, ...rest] = guestNotes;

  return (
    <section id="notes" className="relative bg-charcoal text-ivory overflow-hidden">
      <span
        className="section-num"
        aria-hidden="true"
        style={{ color: "#FBF8F1", opacity: 0.045 }}
      >
        05
      </span>
      <div className="relative z-[1] max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-28">
        <div className="font-mono text-[0.7rem] sm:text-[0.72rem] tracking-[0.16em] uppercase text-terracotta-soft mb-4 sm:mb-5 reveal">
          Guest Notes
        </div>
        <h2 className="reveal text-ivory font-serif text-[clamp(2rem,6.5vw,3.2rem)] leading-[1.08] max-w-[16ch] mb-10 sm:mb-16">
          What people write after leaving
        </h2>

        <div className="reveal border-l-2 border-terracotta pl-6 sm:pl-10 mb-14 sm:mb-16">
          <p className="font-serif italic text-[clamp(1.5rem,4.2vw,2.4rem)] leading-[1.3] text-[#FBF8F1] max-w-[22ch]">
            &ldquo;{featured.quote}&rdquo;
          </p>
          <div className="mt-5 font-mono text-[0.72rem] text-[#9A9284] tracking-wide">
            {featured.who}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 sm:gap-10">
          {rest.map((note) => (
            <div key={note.who + note.quote.slice(0, 10)} className="reveal">
              <p className="font-serif italic text-[1rem] sm:text-[1.1rem] leading-[1.55] text-[#D8D0C2]">
                &ldquo;{note.quote}&rdquo;
              </p>
              <div className="mt-4 font-mono text-[0.68rem] text-[#8A8276] tracking-wide">
                {note.who}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
