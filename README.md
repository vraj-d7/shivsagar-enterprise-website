# Shiv Sagar Enterprise website

Redesign and rebuild of [shivsagarenterprise.com](https://shivsagarenterprise.com): plastic injection moulding and rubber moulded parts, Gujarat. Built with [Astro](https://astro.build) and served from Cloudflare. All the content of the old WordPress site has been carried over (Nov 2026).

## Pages

| Page | File | Old WordPress URL |
| --- | --- | --- |
| Home | `src/pages/index.astro` | `/` |
| About | `src/pages/about.astro` | `/about-us/` |
| Services | `src/pages/services/index.astro` | `/services/` |
| 7 service pages | `src/pages/services/[slug].astro` + `src/data/services.ts` | `/service/…/` |
| Products (29, filterable) | `src/pages/products.astro` + `src/data/products.ts` | `/shop/` |
| Industries | `src/pages/industries.astro` | (home page section) |
| Blog + 9 posts | `src/pages/blog/` + `src/content/blog/*.md` | `/blog/`, `/2025/06/…/` |
| Contact | `src/pages/contact.astro` | `/contact-us/` |
| Terms | `src/pages/terms.astro` + `src/content/terms.md` | `/terms-and-conditions/` |
| 404 | `src/pages/404.astro` | |

Every old URL redirects to its new page (`public/_redirects`), so existing Google results and bookmarks keep working.

## Where to edit content

- **Company details, stats, industries, materials, FAQ, testimonials:** `src/data/site.ts`
- **Services (all 7 pages):** `src/data/services.ts`
- **Products:** `src/data/products.ts`. Each product's "Ask for a quote" button opens the contact form with the product already filled in.
- **Blog posts:** one Markdown file each in `src/content/blog/`. To add a post, copy one, change the front matter, and put its image in `src/assets/blog/`.
- **Terms:** `src/content/terms.md`
- **Logo:** `src/assets/brand/logo.png` (full) and `logo-mark.png` (symbol), made transparent from the old site's logo. Favicons are in `public/`.

## Commands

```sh
npm install      # first time only
npm start        # run the site in the background at http://localhost:4330 (or double-click start-local-site.cmd)
npm run stop     # stop it
npm run status   # is it running?
npm run dev      # run in this terminal instead (stops when you close it)
npm run build    # build to dist/
npm run deploy   # build and publish to Cloudflare (needs `npx wrangler login` once)
```

## Quote form

There's no server. Pressing **Send enquiry** opens the visitor's email app with the enquiry ready to send to the address in `site.ts`. The page also offers call and WhatsApp links.

## Left out on purpose

- WordPress theme placeholder text that was still live on the old service pages (paragraphs about "Gazolin", predictive analytics, "beginner-friendly certification", etc.).
- The "Video Presentation" on each old service page, which was a stock Envato demo video, not a Shiv Sagar video.
- Copy-pasted citations of a competitor ("Dalal Plastics") in the old capacity section.
- The empty "Shop – coming soon" page (now redirects to the new Products page) and the "Our Brochure" button, which linked nowhere.

## To confirm with the owner before launch

Search the code for `CONFIRM`:

- **Factory location.** The old contact page says GIDC V.U. Nagar, Anand. The about page, injection moulding page, terms (court jurisdiction) and several blog posts say Ankleshwar, and one post also mentions Ahmedabad. The site currently shows the Anand address.
- **Client count.** The old site says 100+ on the home and about pages but 450+ on the services page. Using 100+.
- **Testimonials.** Three quotes (Rajesh Mehta, Sneha Kulkarni, Dinesh Iyer). Make sure these are real customers who agreed to be quoted.

The original single-page design mockup is in `design/`.
