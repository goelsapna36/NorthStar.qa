# Northstar QA & Development

A fast, dependency-free static marketing site for QA automation, software testing, API testing, and web development services.

## Render Free Static Site deployment

This project is intentionally a static site. It does not require a Node server, paid hosting, a database, or a private backend.

### 1. Prepare GitHub

1. Create a new GitHub repository, for example `northstar-qa-development`.
2. Upload the contents of this folder to the repository root.
3. Confirm that `index.html`, `styles.css`, `script.js`, `site-config.js`, `robots.txt`, and `sitemap.xml` are at the repository root.

### 2. Create the Render Static Site

1. Sign in to [Render](https://render.com) and choose **New → Static Site**.
2. Connect the GitHub repository.
3. Use these settings:

   - **Name:** `northstar-qa-development` (or another available name)
   - **Branch:** `main`
   - **Root Directory:** leave blank
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`

4. Click **Create Static Site**.

Render will build and serve the repository directly and provide a free HTTPS URL such as:

`https://northstar-qa-development.onrender.com`

The committed `render.yaml` contains the same static-site settings and enables automatic deploys for future pushes. The build has no third-party dependencies; it copies the static source files into `dist/` for Render to publish.

### 3. Configure the public contact details

Edit [site-config.js](./site-config.js) before deploying:

```js
window.SITE_CONFIG = {
  businessName: "Northstar QA & Development",
  whatsappNumber: "919999999999",
  publicEmail: "hello@example.com",
  siteUrl: "https://your-site.onrender.com"
};
```

Use the WhatsApp number with country code and digits only. These values are public because the browser needs them to create direct WhatsApp links. Do not put API keys, passwords, database credentials, or other private environment variables in this file.

### 4. Update SEO URLs

The initial SEO URLs are set to `https://northstar-qa-development.onrender.com`. When a custom domain is connected later, update the canonical URL, Open Graph URL, site config, robots file, and sitemap to the custom domain and redeploy.

### 5. Custom domain later

In the Render service, open **Settings → Custom Domains**, add the domain, and follow Render’s DNS instructions. Render provides HTTPS automatically for the Render subdomain and connected custom domains. No code rebuild is required beyond updating the canonical and sitemap URLs.

## How contact works

The contact form is intentionally serverless. Submission opens a pre-filled WhatsApp message in a new tab, and every major CTA uses the same public WhatsApp configuration. No paid form provider or backend is required for the initial version.

## Local preview

Any static server works. For example:

```powershell
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Project files

- `index.html` — main responsive marketing page
- `styles.css` — responsive visual system and layout
- `script.js` — navigation, form feedback, and WhatsApp links
- `site-config.js` — public contact and site configuration
- `privacy.html`, `terms.html` — launch placeholders to customize
- `robots.txt`, `sitemap.xml` — crawlability and SEO support
- `render.yaml` — Render Static Site configuration
- `package.json`, `build.mjs` — dependency-free production build into `dist/`
