"use client";

import {
  type MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const ABOUT_PARAGRAPHS = [
  "I am a full-stack software engineer who loves turning real business ideas into working digital solutions. My main strength is understanding what a business needs and building the exact software to make it happen.",
  "I don't just build standard websites. I really enjoy taking a normal, everyday web application and upgrading it into a smart, AI-powered system that is scalable and ready for production. I spend most of my time working with tools like React and Next.js to make sure everything I build is fast, reliable, and easy to use. Ultimately, I just like making complex things simple and bringing good ideas to life on the screen.",
];

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}

function Word({ children, range, progress }: WordProps) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(progress, range, ["#B5B7B9", "#1A1C20"]);

  return (
    <span className="relative inline-block mr-[0.28em] my-[0.1em]">
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  );
}

// Pre-calculate word ranges across both paragraphs for smooth continuous scroll reveal
const TOTAL_WORDS = ABOUT_PARAGRAPHS.reduce(
  (acc, para) => acc + para.split(" ").length,
  0,
);

// Reveal window configuration: All words complete by 75% of the scroll range
const REVEAL_MAX = 0.75;
const WORD_WINDOW = 0.04;

const PARAGRAPHS_DATA = (() => {
  let runningIndex = 0;
  return ABOUT_PARAGRAPHS.map((para, paraIndex) => {
    const words = para.split(" ");
    const list = words.map((text, wordIndex) => {
      const currentIndex = runningIndex;
      runningIndex += 1;
      const step = (REVEAL_MAX - WORD_WINDOW) / TOTAL_WORDS;
      const start = currentIndex * step;
      const end = start + WORD_WINDOW;
      return {
        id: `p${paraIndex}-w${wordIndex}-${text.slice(0, 3)}`,
        text,
        range: [start, end] as [number, number],
      };
    });
    return {
      id: `about-para-${paraIndex}`,
      words: list,
    };
  });
})();

export function AboutSection() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start 0.9", "end 0.55"],
  });

  return (
    <section
      id="about"
      className="relative scroll-mt-20 py-20 sm:py-32 lg:py-40 border-t border-[#E2E2DE] bg-[#F4F4F0]"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Tag */}
        <div className="mb-8 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E04D2D]" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#686A6C]">
            01 / Philosophy & Background
          </span>
        </div>

        {/* Section Header */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1C20] mb-8 tracking-tight">
          Engineering scalable{" "}
          <span className="italic font-normal">backend & AI solutions.</span>
        </h2>

        {/* Large Typographic Paragraphs with Scroll Reveal */}
        <div
          ref={textContainerRef}
          className="text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-normal leading-[1.6] sm:leading-[1.55] tracking-tight space-y-8"
        >
          {shouldReduceMotion
            ? ABOUT_PARAGRAPHS.map((para) => (
                <p key={para.slice(0, 20)} className="text-[#1A1C20]">
                  {para}
                </p>
              ))
            : PARAGRAPHS_DATA.map((paragraph) => (
                <p key={paragraph.id} className="flex flex-wrap">
                  {paragraph.words.map((item) => (
                    <Word
                      key={item.id}
                      range={item.range}
                      progress={scrollYProgress}
                    >
                      {item.text}
                    </Word>
                  ))}
                </p>
              ))}
        </div>
      </div>
    </section>
  );
}
