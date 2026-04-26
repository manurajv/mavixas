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
- [ ] Phase 6: Optional enhancements
  - Blog or insights
  - Case study detail pages
  - Dark/light preference toggle if needed

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
