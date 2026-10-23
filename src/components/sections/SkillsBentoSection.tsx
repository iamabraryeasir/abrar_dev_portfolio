"use client";

import { motion } from "motion/react";
import { TechTag } from "@/components/ui/TechTag";
import { SKILL_CATEGORIES } from "@/lib/data";

export function SkillsBentoSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 py-20 sm:py-28 bg-alabaster border-t border-[#E2E2DE]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header - Minimal */}
        <div className="mb-12 sm:mb-16">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E04D2D]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#686A6C]">
              03 / Skills & Stack
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1A1C20] tracking-tight">
            Technical Stack & Competencies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#686A6C] max-w-xl">
            A curated overview of the languages, frameworks, AI architectures,
            and infrastructure tools I build production systems with.
          </p>
        </div>

        {/* 4 Clean Minimal Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl border border-[#E2E2DE] bg-white p-6 sm:p-8 transition-colors duration-200 hover:border-[#1A1C20]"
            >
              {/* Category Title - Minimal */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E2E2DE]/70">
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A1C20]">
                  {category.name}
                </h3>
                <span className="text-xs font-mono text-[#8C8E90]">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills with Icons */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <TechTag
                    key={skill.name}
                    name={skill.name}
                    size="md"
                    className="bg-[#F9F9F7] text-xs sm:text-sm py-1.5 px-3.5 hover:bg-white"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
