# APSCC Website

Redesigned website for the **Association for Promoting Sustainability in Campuses & Communities (APSCC)** — [apsccglobal.org](https://apsccglobal.org).

A static, self-contained website. Every image, video and asset is stored locally under `assets/` — no build step required. Open any page directly in a browser.

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `apscc-about.html` |
| Our Work | `apscc-our-work.html` |
| Research & Publications | `apscc-research-publications.html` |
| News & Media | `apscc-news-media.html` |
| Partnerships | `apscc-partnerships.html` |
| Contact | `apscc-contact.html` |
| Privacy Policy | `apscc-privacy-policy.html` |
| **Global Engagement** | |
| Green Campuses for Green Cities | `apscc-gcgc.html` |
| ICCARP | `apscc-iccarp.html` |
| Young Soil Scientist | `apscc-yss.html` |
| Biodiversity Management Committee (BMC) | `apscc-bmc.html` |
| UN Decade on Ecosystem Restoration Challenge | `apscc-under.html` |
| Restore Life | `apscc-restore-life.html` |
| Environmental Stewardship & Sustainability Workshop | `apscc-essw.html` |
| Game ON — Sustainable Campus Challenge | `apscc-scc.html` |

## Assets

```
assets/
├── shared/        Logo, SDG graphics, shared imagery
├── home/          Homepage hero & imagery
├── activities/    Our Work images & video
├── news/ → cards/ News & Media card images
├── research/      Research imagery
├── under/ → official/  UN Decade programme & official UN imagery
├── bmc/ gcgc/ iccarp/ yss/   Per-programme images
└── partner-logos/ Partner & collaborator logos
```

## Design system

- **Fonts:** Playfair Display (headings), DM Sans (body), DM Mono (labels) — loaded from Google Fonts
- **Palette:** ink `#11271f`, paper `#f5f3ed`, moss `#315c45`, lime `#c9dc67`, clay `#bd6846`
- **Max content width:** 1250px

## Notes

- The site is fully static — host it on GitHub Pages, Netlify, or any static host.
- External links (news PDFs, research publishers, forms, social) point to live third-party sources by design.
