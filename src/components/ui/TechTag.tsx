"use client";

import Image from "next/image";
import { useState } from "react";

const ICON_MAP: Record<string, string> = {
  "next.js": "/icons/nextjs.svg",
  nextjs: "/icons/nextjs.svg",
  react: "/icons/react.svg",
  "react 19": "/icons/react.svg",
  typescript: "/icons/typescript.svg",
  "tailwind css": "/icons/tailwind.svg",
  tailwind: "/icons/tailwind.svg",
  "tailwind css v4": "/icons/tailwind.svg",
  prisma: "/icons/prisma.svg",
  "prisma orm": "/icons/prisma.svg",
  postgresql: "/icons/postgresql.svg",
  sql: "/icons/postgresql.svg",
  "gemini api": "/icons/gemini.svg",
  "google gemini": "/icons/gemini.svg",
  "google gemini api & sdk": "/icons/gemini.svg",
  "node.js": "/icons/nodejs.svg",
  nodejs: "/icons/nodejs.svg",
  docker: "/icons/docker.svg",
  "docker containers": "/icons/docker.svg",
  bun: "/icons/bun.svg",
  redis: "/icons/redis.svg",
  "upstash redis": "/icons/redis.svg",
  langgraph: "/icons/langgraph-logo.svg",
  "langgraph.js": "/icons/langgraph-logo.svg",
  inngest: "/icons/inngest.svg",
  motion: "/icons/motion.svg",
  "framer motion": "/icons/motion.svg",
  express: "/icons/express.svg",
  "express.js": "/icons/express.svg",
  stripe: "/icons/stripe.svg",
  "tanstack query": "/icons/tanstack.svg",
  tanstack: "/icons/tanstack.svg",
  "github actions": "/icons/githubactions.svg",
  github: "/icons/githubactions.svg",
  linux: "/icons/linux.svg",
  nginx: "/icons/nginx.svg",
  cloudflare: "/icons/cloudflare.svg",
  "autonomous agents": "/icons/autonomousagents.svg",
  "rag pipelines": "/icons/rag.svg",
  rag: "/icons/rag.svg",
  "vector databases": "/icons/vectordb.svg",
  vectordb: "/icons/vectordb.svg",
};

export interface TechTagProps {
  name: string;
  icon?: string;
  size?: "sm" | "md";
  className?: string;
}

export function TechTag({
  name,
  icon,
  size = "sm",
  className = "",
}: TechTagProps) {
  const [imgError, setImgError] = useState(false);

  // Determine icon source: custom prop > mapped slug > default slug in /icons/
  const normalizedKey = name.toLowerCase().trim();
  const resolvedIcon =
    icon ??
    ICON_MAP[normalizedKey] ??
    `/icons/${normalizedKey.replace(/[^a-z0-9]/g, "")}.svg`;

  const sizeStyles =
    size === "md"
      ? "px-3.5 py-1.5 text-xs sm:text-sm gap-2"
      : "px-3 py-1 text-xs gap-1.5";
  const iconPx = size === "md" ? 16 : 14;
  const iconClass = size === "md" ? "h-4 w-4" : "h-3.5 w-3.5";

  return (
    <span
      className={`inline-flex items-center rounded-full border border-[#E2E2DE] bg-alabaster font-medium text-[#1A1C20] transition-all duration-200 hover:border-[#1A1C20] hover:bg-white select-none ${sizeStyles} ${className}`}
    >
      {/* Icon Slot */}
      {!imgError ? (
        <span
          className={`relative flex ${iconClass} shrink-0 items-center justify-center`}
        >
          <Image
            src={resolvedIcon}
            alt={`${name} icon`}
            width={iconPx}
            height={iconPx}
            className={`${iconClass} object-contain`}
            onError={() => setImgError(true)}
            unoptimized
          />
        </span>
      ) : (
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E04D2D]"
          aria-hidden="true"
        />
      )}
      <span className="truncate">{name}</span>
    </span>
  );
}
