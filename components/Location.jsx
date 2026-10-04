import { site } from "@/lib/content";

export default function Location() {
  return (
    <section id="coords" className="relative max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-28 overflow-hidden">
      <span className="section-num" aria-hidden="true">06</span>
      <div className="relative z-[1] grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-16 items-center">
        <div className="reveal">
          <div className="aspect-[4/3] border border-line overflow-hidden grayscale-[15%] contrast-[1.02]">
            <iframe
              src={site.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing L-JIST Homestay in Markasa, Meghalaya"
            />
          </div>
          <div className="font-mono text-[0.64rem] sm:text-[0.68rem] text-stone tracking-wide mt-2.5">
            MARKASA · {site.coords.lat} {site.coords.lng}
          </div>
        </div>

        <div className="reveal">
          <div className="font-mono text-[0.7rem] sm:text-[0.72rem] tracking-[0.16em] uppercase text-terracotta mb-4 sm:mb-5">
            Coordinates
          </div>
          <div className="border border-line p-6 sm:p-8 md:p-11 bg-paper">
            <div className="font-mono text-[1.25rem] sm:text-[1.5rem] text-charcoal mb-2 break-words">
              {site.coords.lat}, {site.coords.lng}
            </div>
            <div className="text-stone text-[0.84rem] sm:text-[0.86rem]">{site.region}</div>

            <dl>
              <dt className="font-mono text-[0.68rem] sm:text-[0.7rem] uppercase tracking-wide text-stone mt-5">Address</dt>
              <dd className="text-charcoal2 mt-1 text-[0.95rem] sm:text-base">{site.address}</dd>

              <dt className="font-mono text-[0.68rem] sm:text-[0.7rem] uppercase tracking-wide text-stone mt-5">
                Phone / WhatsApp
              </dt>
              <dd className="mt-1">
                <a href={`tel:+${site.phoneE164}`} className="text-terracotta border-b border-terracotta pb-px">
                  {site.phoneDisplay}
                </a>
              </dd>

              <dt className="font-mono text-[0.68rem] sm:text-[0.7rem] uppercase tracking-wide text-stone mt-5">Rating</dt>
              <dd className="text-charcoal2 mt-1 text-[0.95rem] sm:text-base">
                {site.rating} / 5 — {site.reviewCount} reviews on Google
              </dd>
            </dl>

            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 text-center px-5 py-3.5 bg-terracotta text-white text-[0.84rem] sm:text-[0.86rem] font-medium hover:bg-[#9C4F32] transition-colors"
            >
              Open in Google Maps · Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
