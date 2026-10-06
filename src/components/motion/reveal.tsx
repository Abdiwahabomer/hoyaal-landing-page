"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "li" | "h2" | "p";
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
  id?: string;
};

const hidden = { opacity: 0, y: 40 };
const shown = { opacity: 1, y: 0 };

const tags = {
  div: motion.div,
  li: motion.li,
  h2: motion.h2,
  p: motion.p,
};

/**
 * The first time its content scrolls into view, it rises from below and fades in.
 *
 * Content is visible in the server HTML. Only after hydration, and only if the
 * element is still below the viewport, is it hidden ("armed") to animate in
 * later. So slow or failed JS never leaves content invisible, and nothing the
 * visitor is already looking at flashes.
 */
export function Reveal({ children, as = "div", delay = 0, className, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  // Trigger once the element is ~15% up from the bottom edge, where the eye actually is.
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (reduceMotion || !ref.current) return;
    // Arm only elements below the trigger line (the visitor hasn't really seen
    // them yet). This must run after hydration so the server HTML stays visible.
    if (ref.current.getBoundingClientRect().top > window.innerHeight * 0.85) setArmed(true);
  }, [reduceMotion]);

  const Tag = tags[as];
  const visible = !armed || inView;

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={className}
      data-reveal=""
      initial={false}
      animate={visible ? shown : hidden}
      transition={
        armed && visible
          ? { duration: 0.8, delay: delay / 1000, ease: [0.33, 1, 0.68, 1] } // easeOutCubic
          : { duration: 0 }
      }
    >
      {children}
    </Tag>
  );
}
