"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { galleryFeatured, galleryItems } from "@/lib/content";

const allItems = [galleryFeatured, ...galleryItems];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % allItems.length)),
    []
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + allItems.length) % allItems.length)),
    []
  );

  useEffect(() => {
    function onKey(e) {
      if (openIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIndex, close, next, prev]);

  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section id="gallery" className="relative max-w-[1180px] mx-auto px-5 sm:px-8 pt-8 pb-16 sm:pt-12 sm:pb-28 overflow-hidden">
      <span className="section-num" aria-hidden="true">04</span>
      <div className="font-mono text-[0.7rem] sm:text-[0.72rem] tracking-[0.16em] uppercase text-terracotta mb-4 sm:mb-5 reveal relative z-[1]">
        Photo Essay
      </div>
      <h2 className="reveal relative z-[1] font-serif text-[clamp(2rem,6.5vw,3.2rem)] leading-[1.08] max-w-[16ch] mb-8 sm:mb-11">
        A visual field guide to L-JIST
      </h2>

      <button
        type="button"
        onClick={() => setOpenIndex(0)}
        className="reveal relative block w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-3 sm:mb-3.5 cursor-zoom-in group"
      >
        <Image
          src={galleryFeatured.src}
          alt={galleryFeatured.alt}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-0 right-0 bottom-0 p-3 sm:p-3.5 font-mono text-[0.64rem] sm:text-[0.68rem] text-white bg-gradient-to-t from-black/65 to-transparent">
          {galleryFeatured.cap}
        </div>
      </button>

      <div className="relative z-[1] grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3.5">
        {galleryItems.map((item, i) => {
          const isWide = i === 0 || i === 5;
          return (
            <button
              type="button"
              key={item.src}
              onClick={() => setOpenIndex(i + 1)}
              className={`relative overflow-hidden cursor-zoom-in group bg-black aspect-[4/5] ${
                isWide ? "col-span-2 md:aspect-[8/5]" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 820px) 100vw, 66vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute left-0 right-0 bottom-0 p-2.5 sm:p-3.5 font-mono text-[0.6rem] sm:text-[0.68rem] text-white bg-gradient-to-t from-black/65 to-transparent">
                {item.cap}
              </div>
            </button>
          );
        })}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[#14110E]/95 flex items-center justify-center p-4 sm:p-6 md:p-10"
          style={{
            paddingTop: "max(1rem, var(--safe-top))",
            paddingBottom: "max(1rem, var(--safe-bottom))",
          }}
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <button
            className="absolute top-4 right-4 sm:top-7 sm:right-8 text-white text-3xl leading-none w-10 h-10 flex items-center justify-center"
            onClick={close}
            aria-label="Close"
          >
            &times;
          </button>
          <span className="absolute top-5 left-4 sm:top-7 sm:left-8 text-[#B5AA97] font-mono text-[0.72rem] sm:text-[0.76rem]">
            {openIndex + 1} / {allItems.length}
          </span>
          <button
            className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-2 text-white text-2xl sm:text-3xl px-3 sm:px-4 py-2 opacity-80 hover:opacity-100"
            onClick={prev}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <div className="max-w-[92vw] max-h-[78vh] flex flex-col items-center">
            <div className="relative max-w-[900px] max-h-[70vh] w-[86vw] sm:w-[88vw] aspect-[4/3]">
              <Image
                src={allItems[openIndex].src}
                alt={allItems[openIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="text-[#EDE7DA] font-mono text-[0.72rem] sm:text-[0.78rem] mt-4 text-center px-6">
              {allItems[openIndex].fullCap}
            </div>
          </div>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-2 text-white text-2xl sm:text-3xl px-3 sm:px-4 py-2 opacity-80 hover:opacity-100"
            onClick={next}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
