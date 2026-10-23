"use client";

import { ArrowUp } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { Button } from "./Button";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, 0]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={containerRef}
      className="relative overflow-hidden bg-alabaster border-t border-[#E2E2DE] pt-16 pb-6 select-none"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Minimalist Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-[#E2E2DE]">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="font-serif text-xl font-bold tracking-tight text-[#1A1C20]">
              Abrar Yeasir
            </span>
            <span className="hidden sm:inline text-[#A2A4A6]">&bull;</span>
            <span className="text-xs text-[#686A6C]">
              &copy; 2026 All rights reserved. Designed & Engineered with
              Next.js.
            </span>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <Button
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              variant="outline"
              size="icon"
              className="h-10 w-10 border-[#E2E2DE]"
              icon={<GithubIcon className="h-4 w-4" />}
            />
            <Button
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              variant="outline"
              size="icon"
              className="h-10 w-10 border-[#E2E2DE]"
              icon={<LinkedinIcon className="h-4 w-4" />}
            />

            <Button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              variant="filled"
              size="icon"
              className="h-10 w-10 ml-2"
              icon={<ArrowUp className="h-4 w-4" />}
            />
          </div>
        </div>
      </div>

      {/* Massive Typographic Watermark Dominating Bottom of Screen */}
      <div className="w-full overflow-hidden pt-8 pointer-events-none">
        <motion.div
          style={{ y: shouldReduceMotion ? 0 : parallaxY }}
          className="w-full text-center tracking-tighter font-serif font-black uppercase text-[#E2E2DE] leading-[0.78] text-[15vw] whitespace-nowrap"
        >
          ABRARYEASIR
        </motion.div>
      </div>
    </footer>
  );
}
