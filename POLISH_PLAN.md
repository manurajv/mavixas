# Mavixas Website Polish Plan

## Phase Progress

- [x] Phase 1: Foundation
  - Custom 404 page
  - Reduced motion support
  - Scroll offset for sticky header anchors
  - Favicon metadata
  - Contact form status accessibility
- [x] Phase 2: Visual rhythm
  - Stronger section spacing system
  - More consistent section/page headings
  - Better card/grid breathing room
  - More premium hero stats treatment
- [x] Phase 3: Components
  - Navbar active/hover refinement
  - Button and link micro-interactions
  - Card hover/focus polish
  - Footer surface and CTA refinement
- [x] Phase 4: Content and trust
  - Representative portfolio content without fake client claims
  - Honest proof-point strip and trust signals
  - Founder/company story refinement
- [x] Phase 5: Performance and SEO
  - Open Graph image
  - Web app manifest
  - Metadata, robots, and sitemap polish
  - Search Console checklist
- [x] Phase 6: Optional enhancements
  - Representative build detail pages
  - Portfolio card deep links
  - Portfolio detail URLs in sitemap

## Notes

- Keep each phase small and deployable.
- Prefer shared style improvements first, then page-specific polish.
- Avoid adding fake claims; replace placeholders with real client work as soon as available.

## Launch Checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel to the final canonical domain.
- [ ] Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Vercel and test `/contact`.
- [ ] Confirm `https://www.mavixas.com/sitemap.xml` loads.
- [ ] Confirm `https://www.mavixas.com/robots.txt` loads.
- [ ] Confirm social preview image at `/opengraph-image`.
- [ ] Add the domain to Google Search Console.
- [ ] Submit sitemap in Search Console.
- [ ] Run Lighthouse on Home, Contact, and Services after production deploy.

## Post-Polish Additions

- [x] Founder-led delivery section on About page
  - Added founder name, role, location, bio, and education.
  - Supports optional founder image via `founder.imagePath` in `src/lib/data.ts`.
- [x] Replace initials avatar with a professional founder photo when available.
- [x] FAQ section for conversion support
  - Added Home FAQ section.
  - Added short FAQ prompt on Contact page.
- [x] Engagement model section
  - Added Discovery sprint, MVP build, and Growth retainer paths.
  - Added central `bookingHref` / `bookingUrl` config for future calendar link.
- [x] Fit and pricing expectations section
  - Added "Good fit" and "Probably not a fit" signals.
  - Added pricing/scoping expectation note.
- [x] Calendly / booking link wiring
  - `BookingLink` for external HTTPS booking URLs (new tab, `rel="noopener noreferrer"`).
  - Hero, header, final CTA, engagements, and About "Talk to the team" use the shared `bookingHref`.
  - Contact page shows a "Schedule a call" card when a calendar URL is configured.
