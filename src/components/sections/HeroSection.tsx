"use client";

import {
  ArrowDownRight,
  ArrowRight,
  Brain,
  Cpu,
  Database,
  FileText,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui";
import { PERSONAL_INFO } from "@/lib/data";

interface FloatingBadge {
  name: string;
  label: string;
  icon: LucideIcon;
  iconColor: string;
  initialPos: string;
  delay: number;
  duration: number;
  yOffset: number[];
}

const FLOATING_BADGES: FloatingBadge[] = [
  {
    name: "ai",
    label: "AI Engineering",
    icon: Brain,
    iconColor: "text-[#E04D2D]",
    initialPos: "top-4 -left-6 sm:-left-8",
    delay: 0,
    duration: 5,
    yOffset: [-6, 6, -6],
  },
  {
    name: "backend",
    label: "Backend Systems",
    icon: Database,
    iconColor: "text-[#2563EB]",
    initialPos: "top-1/3 -right-6 sm:-right-10",
    delay: 0.8,
    duration: 6,
    yOffset: [7, -7, 7],
  },
  {
    name: "devops",
    label: "DevOps & Cloud",
    icon: Cpu,
    iconColor: "text-[#059669]",
    initialPos: "bottom-16 -left-4 sm:-left-8",
    delay: 1.4,
    duration: 5.5,
    yOffset: [-8, 8, -8],
  },
  {
    name: "fullstack",
    label: "Full-Stack Systems",
    icon: Layers,
    iconColor: "text-[#D97706]",
    initialPos: "-bottom-4 right-4 sm:right-6",
    delay: 0.4,
    duration: 6.2,
    yOffset: [6, -6, 6],
  },
];

export function HeroSection() {
  const [isColorActive, setIsColorActive] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-8">
          {/* Left Column (60%) */}
          <div className="w-full lg:w-[58%] flex flex-col text-center lg:text-left">
            {/* Editorial Badge */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4"
            >
              <span className="h-2 w-2 rounded-full bg-[#E04D2D] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#686A6C]">
                {PERSONAL_INFO.role}
              </span>
            </motion.div>

            {/* Huge Headline */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="block text-sm sm:text-base font-medium tracking-wide uppercase text-[#686A6C] mb-1 sm:mb-2">
                Hello, I am
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] tracking-tight text-[#1A1C20] leading-[0.96]">
                Abrar <span className="italic font-normal">Yeasir</span>
              </h1>
            </motion.div>

            {/* 2-line Punchy Description */}
            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-6 text-lg sm:text-xl text-[#686A6C] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {PERSONAL_INFO.headline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full"
            >
              <Button
                href="#projects"
                variant="filled"
                size="lg"
                magnetic
                icon={<ArrowDownRight className="h-4 w-4" />}
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>

              <Button
                href="/abrar_yeasir_resume.pdf"
                variant="outline"
                size="lg"
                magnetic
                target="_blank"
                icon={<ArrowRight className="h-4 w-4" />}
                className="w-full sm:w-auto"
              >
                <span className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Download Resume</span>
                </span>
              </Button>
            </motion.div>

            {/* Available Tag */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-[#686A6C]"
            >
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{PERSONAL_INFO.availability}</span>
              </span>
            </motion.div>
          </div>

          {/* Right Column (40%): Profile Image inside Arch Frame */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <div className="relative">
              {/* Profile Arch Frame */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                role="button"
                tabIndex={0}
                aria-label="Toggle profile color filter"
                onClick={() => setIsColorActive(!isColorActive)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsColorActive(!isColorActive);
                  }
                }}
                className="group relative cursor-pointer select-none"
              >
                {/* Offset glow / shadow */}
                <div className="absolute -inset-1 rounded-t-[140px] sm:rounded-t-[180px] rounded-b-3xl bg-[#E04D2D]/10 blur-xl transition-all group-hover:bg-[#E04D2D]/20" />

                {/* Arch Container */}
                <div className="relative h-90 w-67.5 sm:h-110 sm:w-82.5 overflow-hidden rounded-t-[135px] sm:rounded-t-[165px] rounded-b-3xl border-2 border-[#E2E2DE] bg-white shadow-[0_20px_50px_rgba(224,77,45,0.15)] transition-all duration-500 group-hover:border-[#E04D2D]">
                  <Image
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 270px, 330px"
                    className={`object-cover object-top transition-all duration-700 ease-out ${
                      isColorActive
                        ? "grayscale-0 contrast-100 scale-102"
                        : "grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-102"
                    }`}
                  />
                  {/* Subtle vignette & editorial label */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* Floating Tech Badges */}
              {FLOATING_BADGES.map((badge) => {
                const MotionWrapper = shouldReduceMotion ? "div" : motion.div;
                const Icon = badge.icon;
                return (
                  <MotionWrapper
                    key={badge.name}
                    className={`absolute ${badge.initialPos} z-20 pointer-events-none select-none`}
                    {...(!shouldReduceMotion && {
                      animate: {
                        y: badge.yOffset,
                      },
                      transition: {
                        duration: badge.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: badge.delay,
                      },
                    })}
                  >
                    <div className="flex items-center gap-2 rounded-full border border-[#E2E2DE] bg-white/95 px-3.5 py-1.5 shadow-md shadow-[#1A1C20]/5 backdrop-blur-md">
                      <span
                        className={`flex h-4 w-4 items-center justify-center shrink-0 ${badge.iconColor}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-xs font-medium text-[#1A1C20] whitespace-nowrap">
                        {badge.label}
                      </span>
                    </div>
                  </MotionWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
