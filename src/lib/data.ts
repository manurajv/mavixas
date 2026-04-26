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
    "Mavixas is a Sri Lanka-based software studio building mobile apps, web platforms, SaaS, and AI solutions for ambitious businesses worldwide.",
  url: "https://mavixas.com",
  email: "hello@mavixas.com",
  location: "Kirindiwela, Sri Lanka",
  /**
   * File in `public/`, e.g. "/logo.svg". `null` = letter mark + name in the UI.
   * **Icon + word** → set `logoIconOnly: true`. **Full horizontal** logo in one file → `false`.
   */
  logoPath: "/logo.svg" as const,
  logoIconOnly: true,
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

export const proofPoints = [
  {
    value: "Sri Lanka",
    label: "APAC base",
    description: "Cost-effective delivery with global communication standards.",
  },
  {
    value: "Flutter",
    label: "Mobile strength",
    description: "Cross-platform apps with polished, native-feeling UX.",
  },
  {
    value: "AI-ready",
    label: "Modern stack",
    description: "Practical automation and LLM features built into real workflows.",
  },
  {
    value: "Founder-first",
    label: "Engagement style",
    description: "Clear scope, weekly demos, and direct product thinking.",
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
    title: "Payment Operations Platform",
    category: "SaaS architecture",
    description:
      "A subscription-ready product blueprint covering merchant onboarding, billing flows, admin dashboards, and reporting.",
    tags: ["SaaS", "Payments", "Web"],
    accent: "blue",
  },
  {
    title: "Field Team Mobile App",
    category: "Flutter product",
    description:
      "An offline-capable Flutter app concept for field operations, task capture, location-aware workflows, and manager review.",
    tags: ["Flutter", "AI", "Edge"],
    accent: "violet",
  },
  {
    title: "Growth Analytics Workspace",
    category: "Data platform",
    description:
      "A modern analytics workspace pattern with event ingestion, metric definitions, team dashboards, and executive views.",
    tags: ["Data", "Web", "APIs"],
    accent: "cyan",
  },
  {
    title: "Secure Client Portal",
    category: "Custom software",
    description:
      "A secure portal pattern for role-based access, document exchange, audit trails, and guided client workflows.",
    tags: ["Compliance", "Web", "Security"],
    accent: "indigo",
  },
] as const

export const featuredHomeProjects = projects.slice(0, 3)

export const trustSignals = [
  {
    title: "No black-box outsourcing",
    body: "You work with a direct technical partner: clear scope, transparent progress, and decisions explained in plain English.",
  },
  {
    title: "Built for handoff",
    body: "Every build is structured for ownership: readable code, documented decisions, and practical deployment notes.",
  },
  {
    title: "Launch-minded from day one",
    body: "We think beyond screens: performance, SEO, form delivery, deployment, analytics, and long-term maintainability.",
  },
] as const
