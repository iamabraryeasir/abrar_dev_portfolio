export interface ProjectHighlight {
  title: string;
  desc: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category?: string;
  roleTitle?: string;
  timeline?: string;
  shortDesc: string;
  fullDesc: string;
  challenge?: string;
  solution?: string;
  metrics?: ProjectMetric[];
  imageUrl: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  backendGithubUrl?: string;
  telegramBotUrl?: string;
  highlights?: ProjectHighlight[];
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: { name: string; iconUrl?: string }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Abrar Yeasir",
  role: "Full-Stack AI & Software Engineer",
  headline:
    "Full-Stack Software Developer specializing in backend infrastructure and AI-driven applications.",
  summary:
    "I am a full-stack software engineer who loves turning real business ideas into working digital solutions. My main strength is understanding what a business needs and building the exact software to make it happen.\n\nI don't just build standard websites. I really enjoy taking a normal, everyday web application and upgrading it into a smart, AI-powered system that is scalable and ready for production. I spend most of my time working with tools like React and Next.js to make sure everything I build is fast, reliable, and easy to use. Ultimately, I just like making complex things simple and bringing good ideas to life on the screen.",
  email: "iamabraryeasir@gmail.com",
  whatsapp: "+8801860700650",
  whatsappUrl:
    "https://wa.me/8801860700650?text=Hi%20Abrar,%20I%20would%20like%20to%20discuss%20a%20project",
  github: "https://github.com/iamabraryeasir",
  linkedin: "https://linkedin.com/in/iamabraryeasir",
  twitter: "https://twitter.com/abraryeasir",
  location: "Chattagram, Bangladesh",
  availability: "Available for high-impact contracts & full-time roles",
  profileImage: "/abrar_profile.jpeg",
};

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    slug: "coaching-center-management-system",
    title: "Full Stack Coaching Center Management System",
    category: "Full-Stack System",
    roleTitle: "Full-Stack Architecture & System Engineering",
    timeline: "Production System • 2026",
    shortDesc:
      "Enterprise-grade academy operations platform with multi-persona RBAC, conflict-free timetable scheduling, automated fee invoicing via Stripe & mobile wallets, and zero-cloud in-memory PDF generation.",
    fullDesc:
      "An enterprise-grade, full-stack educational operations engine architected for coaching centers, tutoring academies, and academic institutions. Engineered with Next.js 16 (App Router), React 19, TypeScript, Express.js v5, and Prisma ORM v7 with native PostgreSQL connection pooling.\n\nThe system unifies administrative operations across three distinct personas (Admin, Teacher, and Student) with 93 verified REST endpoints. Key architectural breakthroughs include a 7-day multi-dimensional timetable routine engine with collision detection (preventing teacher and room double-booking), dual admission & enrollment workflows, multi-channel fee billing featuring real Stripe checkout sessions and local MFS (bKash/Nagad/Cash), an in-memory PDFKit document generation subsystem (~15ms per document for invoices, routines, and grade sheets without external cloud storage dependencies), and secure HttpOnly cookie session management with silent token refresh.",
    challenge:
      "Coaching institutes and private academies often juggle administrative chaos across fragmented tools: teachers get double-booked in classrooms, fee collections rely on manual paper ledgers prone to discrepancy, and generating customized invoices or grade sheets incurs significant cloud storage costs and latency.",
    solution:
      "Engineered an all-in-one operations engine with multi-persona RBAC, an automated 7-day collision detection timetable matrix, and a dual payment pipeline uniting Stripe Checkout with local automated mobile wallets. To eliminate external SaaS costs, an in-memory streaming PDF engine generates official invoices, student routines, and transcripts in under 15 milliseconds without external cloud bucket dependencies.",
    metrics: [
      {
        value: "93",
        label: "REST Endpoints",
        detail: "Express v5 with connection pooling & strict request schemas",
      },
      {
        value: "3",
        label: "Role Domains",
        detail: "Dedicated portals & RBAC guards for Admin, Teacher & Student",
      },
      {
        value: "~15ms",
        label: "In-Memory PDF",
        detail: "Zero-cloud PDFKit pipeline generating invoices & grade cards",
      },
      {
        value: "100%",
        label: "Conflict-Free",
        detail:
          "Multi-dimensional timetable scheduling matrix preventing collisions",
      },
    ],
    imageUrl: "/projects/coaching-project-ui.png",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "TanStack Query",
      "Stripe",
      "Docker",
    ],
    liveUrl: "https://coaching-system-frontend.vercel.app",
    githubUrl:
      "https://github.com/iamabraryeasir/coaching-center-management-system-frontend",
    backendGithubUrl:
      "https://github.com/iamabraryeasir/coaching-center-management-system-backend",
    highlights: [
      {
        title: "Multi-Persona RBAC & Timetable Matrix",
        desc: "7-day routine engine with collision detection preventing teacher and room double-booking across 93 REST endpoints.",
      },
      {
        title: "In-Memory Document Synthesis",
        desc: "Zero-cloud PDFKit document generation streaming invoices, class routines, and grade sheets in ~15ms.",
      },
      {
        title: "Dual-Channel Financial Processing",
        desc: "Unified billing infrastructure combining Stripe Checkout sessions with local automated mobile financial services (bKash/Nagad).",
      },
    ],
    featured: true,
  },
  {
    id: "proj-2",
    slug: "sme-finance-copilot",
    title: "CashPilot AI — Autonomous SME Financial Intelligence",
    category: "Autonomous AI Agent & Fintech",
    roleTitle: "Agentic AI Architecture & Full-Stack Engineering",
    timeline: "Production Application • 2026",
    shortDesc:
      "Deterministic 30-day cash runway forecasting, zero-LLM arithmetic safety, LangGraph.js multi-tool agent routing, and an omni-channel Telegram receipt OCR pipeline for SMEs.",
    fullDesc:
      "CashPilot AI is an enterprise-grade agentic financial intelligence copilot engineered specifically for Small and Medium Enterprises (SMEs). Traditional accounting platforms operate reactively on month-old historical reports, while generic generative AI models notoriously hallucinate arithmetic when asked to compute balances.\n\nCashPilot AI solves this fundamental dilemma through deterministic mathematical safety: all runway projections, ledger aggregations, and balances execute exclusively through hardcoded TypeScript algorithms and verified PostgreSQL queries. Google Gemini 3.5 Flash and LangGraph.js act purely as intent compilers, orchestrating user requests and routing to 8 deterministic tools with automated failover to Groq Llama 3.3.\n\nThe system integrates an omni-channel Telegram bot (@cash_pilot_ai_bot) allowing field operators to capture receipts or forward supplier PDFs with sub-3-second OCR extraction that syncs instantly to the Next.js 16 management console. Built with Next.js 16 (App Router), Bun, Prisma 7 with @prisma/adapter-pg on Supabase, Upstash Redis sliding-window rate limiting, and Inngest durable async background workers.",
    challenge:
      "Small and medium businesses frequently fail due to sudden liquidity deficits. Existing accounting software offers only backward-looking monthly reports, while off-the-shelf generative AI models notoriously hallucinate arithmetic when computing financial balances, making them dangerous for critical cash management.",
    solution:
      "Architected CashPilot AI around a strict deterministic financial safety mandate: all balances, runway calculations, and overdue metrics run in hardcoded TypeScript algorithms and PostgreSQL queries. Google Gemini 3.5 Flash and LangGraph.js act purely as natural language intent compilers bound to 8 deterministic backend tools. An omni-channel Telegram bot enables field operators to snap receipt photos with instant OCR, syncing seamlessly to the Next.js 16 management console.",
    metrics: [
      {
        value: "100%",
        label: "Math Safety",
        detail:
          "Zero LLM arithmetic hallucination via deterministic TypeScript logic",
      },
      {
        value: "8",
        label: "Agent Tools",
        detail:
          "LangGraph.js state graph routing intent to PostgreSQL-backed tools",
      },
      {
        value: "< 3s",
        label: "Receipt OCR",
        detail:
          "Omni-channel Telegram bot pipeline parsing photos & PDFs to web",
      },
      {
        value: "30-Day",
        label: "Runway Forecast",
        detail:
          "Rolling predictive cash balance engine modeling AR, AP, and overhead",
      },
    ],
    imageUrl: "/projects/sme-finance-copilot.png",
    techStack: [
      "Next.js",
      "LangGraph.js",
      "Google Gemini",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Inngest",
      "Better Auth",
      "Tailwind CSS",
      "Bun",
    ],
    liveUrl: "https://sme-finance-copilot-ultron.vercel.app",
    githubUrl: "https://github.com/iamabraryeasir/SME-Finance-Copilot",
    telegramBotUrl: "https://t.me/cash_pilot_ai_bot",
    highlights: [
      {
        title: "Deterministic Financial Safety",
        desc: "Zero-LLM arithmetic guarantee: 30-day rolling cash runway forecasting and ledger aggregations execute entirely in hardcoded TypeScript.",
      },
      {
        title: "LangGraph.js Multi-Tool Agent Engine",
        desc: "Cyclical agent state machine orchestrating Google Gemini 3.5 Flash and Groq Llama 3.3 across 8 verified deterministic financial tools.",
      },
      {
        title: "Omni-Channel Telegram Receipt Pipeline",
        desc: "Field receipt capture and sub-3-second PDF/image OCR ingestion via @cash_pilot_ai_bot synced directly with the web management console.",
      },
      {
        title: "Edge Rate-Limiting & Durable Workers",
        desc: "Upstash Redis sliding-window throttling in proxy.ts combined with Inngest durable background workers for automated batch reconciliation.",
      },
    ],
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Bun" },
      { name: "Express.js" },
      { name: "PostgreSQL" },
      { name: "Prisma ORM" },
      { name: "Redis" },
      { name: "Inngest" },
      { name: "Stripe" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React 19" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Motion" },
      { name: "TanStack Query" },
    ],
  },
  {
    id: "ai",
    name: "AI Engineering",
    skills: [
      { name: "Google Gemini" },
      { name: "LangGraph.js" },
      { name: "Gemini API" },
      { name: "Autonomous Agents" },
      { name: "RAG Pipelines" },
      { name: "Vector Databases" },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    skills: [
      { name: "Docker" },
      { name: "GitHub Actions" },
      { name: "Linux" },
      { name: "Nginx" },
      { name: "Cloudflare" },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    company: "Apex Digital Labs",
    role: "Lead Full-Stack Architect",
    startDate: "2023",
    endDate: "Present",
    description:
      "Leading architecture and delivery of Next.js enterprise web applications, mentoring engineering teams, and optimizing core web vitals across client portfolios.",
  },
  {
    id: "exp-2",
    company: "Hyperion Interactive",
    role: "Senior Frontend Engineer",
    startDate: "2021",
    endDate: "2023",
    description:
      "Engineered bespoke editorial interfaces, complex interactive data visualizations, and high-performance design systems using React, TypeScript, and Motion.",
  },
  {
    id: "exp-3",
    company: "Craft Software",
    role: "Full-Stack Developer",
    startDate: "2019",
    endDate: "2021",
    description:
      "Built scalable microservices in Node.js and PostgreSQL with responsive client dashboards in React.",
  },
];
