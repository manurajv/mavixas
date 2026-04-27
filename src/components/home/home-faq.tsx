import { SectionHeader } from "@/components/home/section-header"
import { faqs } from "@/lib/data"

export function HomeFaq() {
  return (
    <section className="border-t border-border/50 py-24 sm:py-28" id="faq">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions before we start"
          description="A few practical answers for founders, operators, and teams considering Mavixas as a software partner."
          align="center"
          className="mx-auto"
        />
        <div className="mx-auto grid max-w-4xl gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-border/50 bg-zinc-950/40 p-5 transition hover:border-border open:border-border"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-foreground marker:hidden">
                {faq.question}
                <span
                  className="bg-brand/10 text-brand flex size-7 shrink-0 items-center justify-center rounded-full border border-white/5 text-lg leading-none transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="text-muted-foreground mt-4 max-w-3xl text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
