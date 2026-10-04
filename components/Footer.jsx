import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      className="pt-12 text-center"
      style={{ paddingBottom: "max(3rem, calc(var(--safe-bottom) + 2rem))" }}
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 flex flex-col gap-2 items-center">
        <div className="font-mono text-[0.7rem] sm:text-[0.72rem] text-stone tracking-wide">
          L—JIST HOMESTAY · THE MEGHALAYA ESCAPE
        </div>
        <div className="font-mono text-[0.7rem] sm:text-[0.72rem] text-stone tracking-wide">
          MARKASA, MEGHALAYA 793119 · {site.phoneDisplay}
        </div>
      </div>
    </footer>
  );
}
