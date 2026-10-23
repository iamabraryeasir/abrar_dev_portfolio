import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Button, Footer, GithubIcon, TechTag } from "@/components/ui";
import { PROJECTS } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study by Abrar Yeasir`,
    description: project.shortDesc,
  };
}

function CaseStudySkeleton() {
  return (
    <div className="min-h-screen bg-alabaster animate-pulse flex flex-col">
      <div className="h-16 border-b border-[#E2E2DE] bg-white/60" />
      <div className="mx-auto max-w-6xl px-4 pt-12 w-full flex-1">
        <div className="h-8 w-1/2 bg-[#E2E2DE] rounded-full mb-6" />
        <div className="h-10 w-1/3 bg-[#E2E2DE] rounded-lg mb-8" />
        <div className="h-16 w-3/4 bg-[#E2E2DE] rounded-2xl mb-6" />
        <div className="h-24 w-1/2 bg-[#E2E2DE] rounded-xl mb-12" />
        <div className="aspect-1897/1087 w-full bg-[#E2E2DE] rounded-3xl mb-12" />
      </div>
    </div>
  );
}

async function CaseStudyContent({ params }: Props) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug);
  const displayUrl = project.liveUrl.replace(/^https?:\/\//, "");

  // Icons for architectural highlights
  const highlightIcons = [Brain, ShieldCheck, Zap, Layers, Cpu, Sparkles];

  return (
    <div className="min-h-screen bg-alabaster text-[#1A1C20] flex flex-col selection:bg-[#E04D2D] selection:text-white">
      {/* Top Floating Glass Navigation Bar */}
      <div className="sticky top-0 z-40 border-b border-[#E2E2DE] bg-alabaster/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Button
            href="/#projects"
            variant="outline"
            size="sm"
            icon={<ArrowLeft className="h-4 w-4" />}
            iconPosition="left"
            className="hover:border-[#E04D2D]"
          >
            Back to All Projects
          </Button>

          <span className="font-mono text-xs uppercase tracking-wider text-[#686A6C] hidden sm:inline">
            Case Study 0{projectIndex + 1}
          </span>
        </div>
      </div>

      {/* Main Container */}
      <main className="flex-1">
        <article className="mx-auto max-w-6xl px-4 pt-8 sm:pt-14 pb-20 sm:px-6">
          {/* 1. VERY TOP: All technology names with icons */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {project.techStack.map((tech) => (
                <TechTag key={tech} name={tech} size="md" />
              ))}
            </div>
          </div>

          {/* 2. DIRECT LINKS ROW (GitHub, Live Link, Telegram Bot) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-10 sm:mb-12 pb-8 border-b border-[#E2E2DE]">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="filled"
                size="md"
                icon={<ArrowUpRight className="h-4 w-4" />}
                iconPosition="right"
              >
                Live Application
              </Button>
            )}

            {project.telegramBotUrl && (
              <Button
                href={project.telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                aria-label="Telegram Bot (@cash_pilot_ai_bot)"
                icon={<ArrowUpRight className="h-4 w-4" />}
                iconPosition="right"
                className="whitespace-nowrap"
              >
                Telegram Bot
              </Button>
            )}

            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                aria-label={
                  project.backendGithubUrl
                    ? "Frontend Repository"
                    : "Source Code Repository"
                }
                icon={<GithubIcon className="h-4 w-4" />}
                iconPosition="left"
                className="whitespace-nowrap"
              >
                {project.backendGithubUrl
                  ? "Frontend Repository"
                  : "GitHub Repository"}
              </Button>
            )}

            {project.backendGithubUrl && (
              <Button
                href={project.backendGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                aria-label="Backend Repository"
                icon={<GithubIcon className="h-4 w-4" />}
                iconPosition="left"
                className="whitespace-nowrap"
              >
                Backend Repository
              </Button>
            )}
          </div>

          {/* 3. TITLE OF THE PROJECT */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#E04D2D]/10 text-[#E04D2D] border border-[#E04D2D]/20">
                0{projectIndex + 1} / Featured Project
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#686A6C]">
                {project.category || "Full-Stack System"}
              </span>
              <span className="text-[#A2A4A6] hidden sm:inline">&bull;</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#686A6C]">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{project.timeline || "Production System"}</span>
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight text-[#1A1C20] font-normal leading-[1.02] max-w-5xl">
              {project.title}
            </h1>
          </div>

          {/* 4. TWO-LINER DESCRIPTION */}
          <div className="border-l-2 border-[#E04D2D] pl-4 sm:pl-6 max-w-3xl mb-10 sm:mb-14">
            <p className="text-lg sm:text-xl text-[#4A4C50] leading-relaxed font-normal">
              {project.shortDesc}
            </p>
          </div>

          {/* 5. THE IMAGE (Framed in macOS Browser Chrome) */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E2E2DE] bg-white shadow-xl shadow-[#1A1C20]/5 mb-14 sm:mb-20 group">
            {/* macOS Browser Chrome */}
            <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-[#E2E2DE] bg-alabaster/90">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/20" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/20" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/20" />
              </div>
              <div className="ml-3 flex-1 max-w-md mx-auto rounded-lg bg-white border border-[#E2E2DE] px-3.5 py-1 text-xs font-mono text-[#686A6C] truncate flex items-center justify-between shadow-2xs">
                <span className="truncate flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {displayUrl}
                </span>
                <span className="text-[10px] text-[#A2A4A6] shrink-0 ml-2 uppercase">
                  HTTPS Verified
                </span>
              </div>
            </div>

            {/* High-Resolution Screenshot */}
            <div className="relative aspect-1897/1087 w-full bg-alabaster overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain object-top-left transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* 6. THE OTHER THINGS */}
          {/* Key Metrics Bento Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-12 sm:mb-16">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E04D2D]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#686A6C]">
                  Key Engineering Metrics & Impact
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-[#E2E2DE] bg-white p-5 sm:p-6 shadow-xs hover:border-[#E04D2D]/40 transition-colors"
                  >
                    <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1C20] font-normal tracking-tight">
                      {metric.value}
                    </div>
                    <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#E04D2D] mt-2">
                      {metric.label}
                    </div>
                    <p className="text-xs text-[#686A6C] mt-1.5 leading-relaxed">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Specifications Ribbon (Balanced full width - no empty left side!) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-7 rounded-3xl border border-[#E2E2DE] bg-white shadow-xs mb-8 sm:mb-10">
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#A2A4A6]">
                Role & Discipline
              </span>
              <p className="text-sm font-semibold text-[#1A1C20] mt-1">
                {project.roleTitle || "Full-Stack Architecture & Engineering"}
              </p>
            </div>

            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#A2A4A6]">
                Category & Domain
              </span>
              <p className="text-sm font-semibold text-[#1A1C20] mt-1">
                {project.category || "Full-Stack System"}
              </p>
            </div>

            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#A2A4A6]">
                Deployment Timeline
              </span>
              <p className="text-sm font-semibold text-[#1A1C20] mt-1">
                {project.timeline || "Production System"}
              </p>
            </div>

            <div>
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#A2A4A6]">
                Production Status
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full mt-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live in Production
              </span>
            </div>
          </div>

          {/* Full-Width Editorial Sections */}
          <div className="space-y-8 sm:space-y-10 mb-16 sm:mb-24">
            {/* Problem Statement */}
            {project.challenge && (
              <section className="rounded-3xl border border-[#E2E2DE] bg-white p-8 sm:p-10 shadow-xs">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E04D2D]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#686A6C]">
                    Problem Statement
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1C20] mb-4">
                  The Challenge & Operational Need
                </h2>
                <p className="text-base text-[#4A4C50] leading-relaxed max-w-4xl">
                  {project.challenge}
                </p>
              </section>
            )}

            {/* System Architecture Deep Dive */}
            <section className="rounded-3xl border border-[#E2E2DE] bg-white p-8 sm:p-10 shadow-xs">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E04D2D]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#686A6C]">
                  Engineering Architecture
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1C20] mb-4">
                System Architecture & Deep Dive
              </h2>
              <div className="text-base text-[#4A4C50] leading-relaxed space-y-4 whitespace-pre-line max-w-4xl">
                {project.fullDesc}
              </div>
            </section>

            {/* Core Architectural Innovations */}
            {project.highlights && project.highlights.length > 0 && (
              <section className="rounded-3xl border border-[#E2E2DE] bg-white p-8 sm:p-10 shadow-xs">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E04D2D]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#686A6C]">
                    Technical Capabilities
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1C20] mb-6">
                  Core Architectural Innovations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {project.highlights.map((highlight, idx) => {
                    const IconComponent =
                      highlightIcons[idx % highlightIcons.length];
                    return (
                      <div
                        key={highlight.title}
                        className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-[#E2E2DE] bg-alabaster/60 hover:bg-alabaster hover:border-[#1A1C20]/30 transition-all"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E2E2DE] text-[#E04D2D] shadow-2xs mt-0.5">
                          <IconComponent className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-base font-semibold text-[#1A1C20]">
                            {highlight.title}
                          </h3>
                          <p className="text-sm text-[#686A6C] mt-1.5 leading-relaxed">
                            {highlight.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* 7. VERY BOTTOM: Link to other projects with TITLE ONLY (NO image) */}
          <section className="pt-16 border-t border-[#E2E2DE]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E04D2D]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#686A6C]">
                    Portfolio Archive
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1C20] tracking-tight">
                  Explore More{" "}
                  <span className="italic font-normal">Projects.</span>
                </h2>
              </div>
              <Button
                href="/#projects"
                variant="outline"
                size="sm"
                icon={<ArrowRight className="h-4 w-4" />}
                iconPosition="right"
              >
                All Projects
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="group flex flex-col justify-between rounded-3xl border border-[#E2E2DE] bg-white p-7 sm:p-9 shadow-xs hover:border-[#1A1C20] hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E04D2D]/10 text-[#E04D2D] border border-[#E04D2D]/20">
                        {p.category || "Full-Stack System"}
                      </span>
                      <span className="text-xs font-mono text-[#A2A4A6] group-hover:text-[#E04D2D] transition-colors flex items-center gap-1 font-semibold">
                        <span>View Study</span>
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1C20] group-hover:text-[#E04D2D] transition-colors leading-tight mb-3">
                      {p.title}
                    </h3>

                    <p className="text-sm text-[#686A6C] line-clamp-3 leading-relaxed mb-6">
                      {p.shortDesc}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-[#E2E2DE] flex flex-wrap gap-1.5">
                    {p.techStack.slice(0, 4).map((tech) => (
                      <TechTag key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>

      {/* 8. GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}

export default function ProjectCaseStudyPage({ params }: Props) {
  return (
    <Suspense fallback={<CaseStudySkeleton />}>
      <CaseStudyContent params={params} />
    </Suspense>
  );
}
