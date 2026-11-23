# Vikas Kumar — Portfolio

A responsive, single-page portfolio for Vikas Kumar, Computer Engineering undergraduate at Army Institute of Technology, Pune. Built with React and Vite as a static site so it can be hosted on free static-site plans.

## Included

- Responsive desktop, tablet and mobile layouts
- Dark and light themes (preference saved in the browser)
- Animated section reveals, active navigation and scroll progress
- Filterable project showcase
- Research and accepted-paper highlights
- Technical skills, education, achievements and leadership
- Working GitHub, LinkedIn, LeetCode, email and phone links
- Supplied profile photograph and résumé PDF
- No API keys, server process, database or environment variables required

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm (the included `.nvmrc` selects Node 22.16.0).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The deployable static website is generated in `dist/`. `npm run preview` is for local previewing of that build, not a production server.

## Free static hosting

This project has no backend or secret environment variables. Push the folder to a GitHub repository, then connect that repository to one of these static hosting services. Availability and free-plan limits are controlled by each provider and may change.

### Cloudflare Pages

1. Push this project to GitHub.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select the repository and use:
   - Framework preset: **Vite** (or **None**)
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Future pushes to the production branch can trigger automatic builds.

Official guide: https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/

### Netlify

1. Import the GitHub repository in Netlify.
2. Set the build command to `npm run build` and publish directory to `dist`.
3. Deploy the site.

Official Vite guide: https://vite.dev/guide/static-deploy.html#netlify

### Vercel

1. Import the GitHub repository in Vercel.
2. Select the Vite framework preset (or let Vercel detect it).
3. Set build command to `npm run build` and output directory to `dist` if not auto-detected.
4. Deploy.

Official Vite guide: https://vite.dev/guide/static-deploy.html#vercel

## Personal details and content updates

- Main profile data, social links, projects and skill groups are in `src/App.jsx`.
- Visual styling, breakpoints and theme tokens are in `src/styles.css`.
- Replace `public/images/vikas-kumar.webp` to change the portrait. Keep the same path or update the image source in `src/App.jsx`.
- Replace `public/Vikas-Kumar-Resume.pdf` to update the résumé. Keep the same path or update the résumé link in `src/App.jsx`.

## Accuracy notes

Project metrics, education, paper status, achievements and role dates are presented from the supplied résumé. DocuMind did not have a repository URL in the supplied résumé, so the site does not invent one. The listed 9.44/10 CGPA follows the education entry in the résumé; its professional-summary sentence separately says 9.3/10, so please reconcile that inconsistency in the source résumé before using it in formal applications.

---

Made with love by Kumar Vikas ♥
