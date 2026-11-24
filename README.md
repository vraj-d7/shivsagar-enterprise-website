# Shiv Sagar Enterprise website

Website for Shiv Sagar Enterprise: plastic injection moulding and rubber moulded parts, GIDC V.U. Nagar, Anand, Gujarat. Built with [Astro](https://astro.build) and served from Cloudflare.

## Pages

| Page | File |
| --- | --- |
| Home | `src/pages/index.astro` |
| Services | `src/pages/services.astro` |
| Components & materials | `src/pages/components.astro` |
| About | `src/pages/about.astro` |
| Contact & quote form | `src/pages/contact.astro` |
| 404 | `src/pages/404.astro` |

All company details and copy (phone, email, address, services, industries, materials, stats) are kept in **`src/data/site.ts`**. Edit them there and every page updates.

## Commands

```sh
npm install      # first time only
npm run dev      # local preview at http://localhost:4321
npm run build    # build to dist/
npm run deploy   # build and publish to Cloudflare (needs `npx wrangler login` once)
```

## Quote form

There's no server. Pressing **Send enquiry** opens the visitor's email app with the enquiry ready to send to the address in `site.ts`. The page also offers call and WhatsApp links.

## To confirm with the owner before launch

Search the code for `CONFIRM`:

- Factory address (the old site lists two)
- Client count (100+)
- Opening hours
- About-page history (founder, early years)

The original single-page mockup is kept in `design/`.
