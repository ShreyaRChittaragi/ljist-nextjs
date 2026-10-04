export default function Story() {
  return (
    <section id="story" className="relative max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-28 overflow-hidden">
      <span className="section-num" aria-hidden="true">01</span>
      <div className="relative z-[1] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[4.4rem] items-start">
        <div className="reveal">
          <div className="font-mono text-[0.7rem] sm:text-[0.72rem] tracking-[0.16em] uppercase text-terracotta mb-4 sm:mb-5">
            Journal — Entry One
          </div>
          <h2 className="font-serif text-[clamp(2rem,6.5vw,3.2rem)] leading-[1.08] max-w-[12ch]">
            The road up to Markasa
          </h2>
        </div>
        <div className="reveal dropcap font-serif text-[clamp(1rem,2.6vw,1.12rem)] text-charcoal2 leading-[1.7] sm:leading-[1.75]">
          <p className="mb-5">
            The drive in climbs slowly — pine forest giving way to open
            ridgeline, the air cooling a few degrees with every bend. By the
            time the cottage comes into view, the valley below has already
            started disappearing into haze.
          </p>
          <p>
            L-JIST Homestay sits on a quiet stretch of hillside outside the
            usual tourist circuit, run by a family who treat every arrival
            less like a booking and more like an old friend turning up
            unannounced. There&rsquo;s a fire pit for the evenings, home-cooked
            meals that don&rsquo;t pretend to be anything but home-cooked, and a
            porch with a view worth waking up early for.
          </p>
        </div>
      </div>
    </section>
  );
}
