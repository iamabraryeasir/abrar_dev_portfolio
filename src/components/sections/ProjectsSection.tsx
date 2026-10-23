"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button, TechTag } from "@/components/ui";
import { PROJECTS, type Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  // Curate primary tags for clean 2-row display on the home card
  const primaryTags = project.techStack.slice(0, 8);
  const displayUrl = project.liveUrl.replace(/^https?:\/\//, "");

  return (
    <div
      className="sticky top-24 sm:top-28 w-full rounded-3xl border border-[#E2E2DE] bg-white p-6 sm:p-8 md:p-10 shadow-lg shadow-[#1A1C20]/5 transition-all mb-8"
      style={{
        zIndex: index + 10,
        top: `calc(5.5rem + ${index * 1.25}rem)`,
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column (Mockup Frame: 7 cols / 58% width) */}
        <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-[#E2E2DE] bg-white shadow-md shadow-[#1A1C20]/5 group">
          {/* macOS Browser Chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#E2E2DE] bg-alabaster/90">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="ml-2 flex-1 rounded-md bg-white border border-[#E2E2DE] px-3 py-0.5 text-[11px] font-mono text-[#686A6C] truncate flex items-center justify-between">
              <span className="truncate">{displayUrl}</span>
              <span className="text-[10px] text-[#A2A4A6] shrink-0 ml-2">
                HTTPS
              </span>
            </div>
          </div>

          {/* Screenshot in exact native aspect ratio: 1897 / 1087 */}
          <div className="relative aspect-1897/1087 w-full bg-alabaster overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-contain object-top-left transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              priority={index === 0}
            />
          </div>
        </div>

        {/* Right Column (Details: 5 cols / 42% width) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* Index Badge & Domain */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E04D2D]/10 text-[#E04D2D] border border-[#E04D2D]/20">
                0{index + 1} / Featured Project
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#686A6C]">
                {project.category || "Full-Stack System"}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-[#1A1C20] font-normal tracking-tight leading-[1.15] mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm text-[#4A4C50] leading-relaxed mb-5"
              style={{ color: "#4A4C50" }}
            >
              {project.shortDesc}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
              {primaryTags.map((tech) => (
                <TechTag key={tech} name={tech} size="sm" />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-5 border-t border-[#E2E2DE] grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button
              href={`/projects/${project.slug}`}
              variant="filled"
              size="md"
              icon={<ArrowRight className="h-4 w-4" />}
              iconPosition="right"
              className="w-full justify-center"
            >
              View Case Study
            </Button>

            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                icon={<ArrowUpRight className="h-4 w-4" />}
                iconPosition="right"
                className="w-full justify-center"
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-32 bg-alabaster">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E04D2D]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#686A6C]">
                02 / Selected Works
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1A1C20] tracking-tight">
              Featured <span className="italic font-normal">Projects.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#686A6C] max-w-md">
            Architected for production: end-to-end applications demonstrating
            full-stack engineering, performance optimizations, and tactile
            editorial aesthetics.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative pb-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
