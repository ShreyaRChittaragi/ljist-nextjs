import { site } from "@/lib/content";

export default function Dateline() {
  return (
    <div className="border-t border-b border-line py-4 sm:py-5 mt-14 sm:mt-20">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 flex flex-wrap gap-x-6 gap-y-1.5 sm:gap-x-8 justify-center sm:justify-between text-[0.68rem] sm:text-[0.76rem] text-stone font-mono text-center">
        <span>
          <b className="text-charcoal">MARKASA</b>, EAST KHASI HILLS, MEGHALAYA
        </span>
        <span>
          {site.coords.lat}, {site.coords.lng}
        </span>
        <span>
          <b className="text-charcoal">PIN</b> 793119, INDIA
        </span>
      </div>
    </div>
  );
}
