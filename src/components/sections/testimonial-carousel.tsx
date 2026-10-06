"use client";

import { useEffect, useRef, useState } from "react";
import { QuoteIcon } from "@/components/icons";
import type { Testimonial } from "@/content/site";
import { cn } from "@/lib/cn";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

/** Scroll-snap carousel: one card per view on mobile, two on tablet, three on desktop. */
export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const width = track.clientWidth;
      setPageCount(Math.max(1, Math.ceil(track.scrollWidth / width - 0.05)));
      setPage(Math.round(track.scrollLeft / width));
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (track) track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="mt-10">
      <ul
        ref={trackRef}
        className="no-scrollbar -mx-2 flex snap-x snap-mandatory overflow-x-auto py-2"
      >
        {items.map((t) => (
          <li
            key={t.name}
            className="w-full shrink-0 snap-start px-2 sm:w-1/2 lg:w-1/3"
          >
            <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
              <QuoteIcon className="size-6 text-success-500/70" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-sm font-semibold text-white">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-slate-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {pageCount > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={page === i}
              onClick={() => goTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                page === i ? "w-5 bg-brand-600" : "w-2 bg-slate-300 hover:bg-slate-400",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
