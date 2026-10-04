import { site } from "@/lib/content";

const stats = [
  { big: `${site.rating}★`, label: "GOOGLE RATING" },
  { big: `${site.reviewCount}`, label: "GUEST REVIEWS" },
  { big: "01", label: "PRIVATE COTTAGE" },
  { big: "06", label: "AMENITIES INCLUDED" },
];

export default function StatBand() {
  return (
    <section className="bg-terracotta">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-white/20">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-5 md:py-0 ${i !== stats.length - 1 ? "md:border-r" : ""} ${
                i < 2 ? "border-b md:border-b-0" : ""
              } md:border-white/20 px-0 md:px-6 text-center`}
            >
              <div className="font-serif text-[clamp(1.8rem,5vw,2.6rem)] text-white leading-none">
                {s.big}
              </div>
              <div className="font-mono text-[0.62rem] sm:text-[0.68rem] tracking-[0.1em] text-white/80 mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
