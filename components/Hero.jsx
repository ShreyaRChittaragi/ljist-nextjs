import Image from "next/image";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] sm:min-h-[94vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-zoom absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="L-JIST Homestay cottage at sunset, Markasa"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-[#14110E]/15 to-[#14110E]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14110E]/50 via-transparent to-transparent" />
      </div>

      <div className="absolute top-0 left-0 right-0 pt-6 sm:pt-8" style={{ paddingTop: "max(1.5rem, calc(var(--safe-top) + 0.75rem))" }}>
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 flex justify-between items-start">
          <span className="font-mono text-[0.68rem] sm:text-[0.75rem] tracking-wide text-[#E7E0D2]">
            FIELD NOTES № 01
          </span>
          <span className="font-mono text-[0.68rem] sm:text-[0.75rem] tracking-wide text-[#E7E0D2] text-right">
            MARKASA, MEGHALAYA
          </span>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-5 sm:px-8 pb-12 sm:pb-20">
        <h1 className="font-serif text-[clamp(3rem,13vw,8rem)] leading-[0.92] text-[#FBF8F1] max-w-[18ch]">
          The <em className="italic text-[#E8A57C]">Meghalaya</em> Escape
        </h1>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8">
          <p className="font-serif italic text-[clamp(1rem,2.4vw,1.25rem)] text-[#E7E0D2] max-w-[40ch] leading-relaxed">
            Notes from a small homestay in the East Khasi Hills, where mornings
            arrive in mist and evenings end by the fire.
          </p>

          <div className="flex flex-col gap-4 shrink-0">
            <div className="flex gap-5 text-[0.76rem] sm:text-[0.8rem] text-[#C9BFAE] font-mono">
              <span><b className="text-[#FBF8F1]">{site.rating}</b>/5 · GOOGLE</span>
              <span><b className="text-[#FBF8F1]">{site.reviewCount}</b> REVIEWS</span>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#book"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[0.86rem] font-medium bg-terracotta text-white hover:bg-[#9C4F32] transition-colors"
              >
                Check availability
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[0.86rem] font-medium border border-[#E7E0D2]/50 text-[#FBF8F1] hover:bg-white/10 transition-colors"
              >
                Read the story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
