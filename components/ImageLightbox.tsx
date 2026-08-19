"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function ImageLightbox({ images, alt }: { images: string[]; alt: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const showPrev = () => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const showNext = () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="relative aspect-[16/10] cursor-zoom-in overflow-hidden border border-border transition-colors hover:border-accent"
          >
            <Image src={src} alt={alt} fill className="object-cover" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            className="absolute right-5 top-5 text-white/80 transition-colors hover:text-white"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/80 transition-colors hover:text-white sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 transition-colors hover:text-white sm:right-6"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <div className="relative h-full max-h-[85vh] w-full max-w-4xl">
            <Image
              src={images[openIndex]}
              alt={alt}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {images.length > 1 && (
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[12px] text-white/70">
              {openIndex + 1} / {images.length}
            </span>
          )}
        </div>
      )}
    </>
  );
}

