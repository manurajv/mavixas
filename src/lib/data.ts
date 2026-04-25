import {
  Brain,
  type LucideIcon,
  Code2,
  Globe2,
  Layers,
  LineChart,
  Smartphone,
} from "lucide-react"

export const siteConfig = {
  name: "Mavixas",
  tagline: "Build Beyond Limits",
  description:
    "Mavixas is a Sri Lanka–based software studio building mobile apps, web platforms, SaaS, and AI solutions for teams worldwide.",
  url: "https://mavixas.com",
  email: "hello@mavixas.com",
  location: "Kirindiwela, Sri Lanka",
  /**
   * File in `public/`, e.g. "/logo.svg". `null` = letter mark + name in the UI.
   * If the file is **icon only**, set `logoIconOnly: true` so the company `name` shows beside it.
   * If the file is a **full horizontal** logo, keep `logoIconOnly: false` and only the image shows.
   */
  logoPath: null as string | null,
  logoIconOnly: false,
  sameAs: [
    { label: "LinkedIn", href: "https://linkedin.com/mavixas" },
    { label: "X", href: "https://x.com" },
  ],
} as const

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const

export type ServiceItem = {
  title: string
  description: string
  icon: LucideIcon
  highlights: string[]
}

export const services: ServiceItem[] = [
  {
    title: "Mobile (Flutter)",
    description:
      "Polished, performant apps for iOS and Android with shared codebases and product-grade UX.",
    icon: Smartphone,
    highlights: ["Offline-first", "App Store ready", "Custom animations"],
  },
  {
    title: "Web Applications",
    description:
      "Fast, secure web platforms—dashboards, marketplaces, and internal tools that scale with you.",
    icon: Globe2,
    highlights: ["Next.js & modern stacks", "Real-time", "A11y first"],
  },
  {
    title: "SaaS Products",
    description:
      "From billing to admin consoles—we ship subscription-ready products with your growth in mind.",
    icon: Layers,
    highlights: ["Multi-tenant", "Auth & roles", "Analytics hooks"],
  },
  {
    title: "AI Solutions",
    description:
      "Practical AI: assistants, RAG, automation, and evaluation pipelines you can run in production.",
    icon: Brain,
    highlights: ["LLM integration", "Embeddings", "Guardrails"],
  },
  {
    title: "Custom Software",
    description:
      "Bespoke systems that connect your tools, data, and teams with maintainable, documented code.",
    icon: Code2,
    highlights: ["APIs & integrations", "Data pipelines", "Long-term support"],
  },
  {
    title: "Product Strategy",
    description:
      "We partner early—shaping roadmaps, tech choices, and launch plans that de-risk delivery.",
    icon: LineChart,
    highlights: ["Discovery", "MVP to scale", "KPIs"],
  },
]

export const whyMavixas = [
  {
    title: "Engineering depth",
    body: "Senior-led squads with clear architecture reviews, testing, and observability baked in.",
  },
  {
    title: "Global delivery",
    body: "APAC roots with world-class comms, tools, and async collaboration across time zones.",
  },
  {
    title: "Product mindset",
    body: "We optimize for business outcomes, not just tickets closed—measured, iterative shipping.",
  },
  {
    title: "Long-term quality",
    body: "Readable codebases, documentation, and handoffs your team can grow with for years.",
  },
] as const

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "Align on goals, users, and constraints. We map scope, risks, and a pragmatic timeline.",
  },
  {
    step: "02",
    title: "Design & spec",
    body: "UX flows, system design, and a clear backlog—so delivery stays predictable and fast.",
  },
  {
    step: "03",
    title: "Build & iterate",
    body: "Weekly demos, continuous integration, and tight feedback loops until we hit the bar.",
  },
  {
    step: "04",
    title: "Launch & scale",
    body: "Hardening, performance, monitoring, and a smooth handoff with optional long-term support.",
  },
] as const

export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  accent: "blue" | "violet" | "cyan" | "indigo"
}

export const projects: Project[] = [
  {
    title: "LumenPay",
    category: "Fintech SaaS",
    description:
      "Subscription billing, merchant dashboard, and compliance-ready reporting for cross-border trade.",
    tags: ["SaaS", "Payments", "Web"],
    accent: "blue",
  },
  {
    title: "Northwind Field",
    category: "Mobile + AI",
    description:
      "Offline-capable field operations app with voice capture and on-device model routing for teams.",
    tags: ["Flutter", "AI", "Edge"],
    accent: "violet",
  },
  {
    title: "Atlas Analytics",
    category: "Data platform",
    description:
      "Real-time event ingestion, semantic layer, and executive dashboards for growth teams.",
    tags: ["Data", "Web", "APIs"],
    accent: "cyan",
  },
  {
    title: "Veridian Care",
    category: "Healthcare",
    description:
      "Secure patient portal and clinician workflows with audit trails and role-based access.",
    tags: ["Compliance", "Web", "Security"],
    accent: "indigo",
  },
] as const

export const featuredHomeProjects = projects.slice(0, 3)

export const testimonials = [
  {
    quote:
      "Mavixas shipped a production platform in weeks where others quoted quarters. The craft is obvious.",
    name: "Alex Rivera",
    role: "CTO, Series B startup",
  },
  {
    quote:
      "Clear communication, sharp architecture, and a team that actually cares about the business impact.",
    name: "Priya Menon",
    role: "Head of Product, B2B SaaS",
  },
  {
    quote:
      "Our Flutter app launched flawless on iOS and Android. Performance and design both exceeded the bar.",
    name: "James Okonkwo",
    role: "Founder, consumer mobile",
  },
] as const
