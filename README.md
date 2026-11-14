# Instship Checker

A small Next.js App Router frontend designed for testing GitHub repository imports, builds, deployments, and custom domains on Instship.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

- Root page: `/`
- Health endpoint: `/health` (JSON status, HTTP 200)
- No database or environment variables required.
- Uses the standard Next.js build and start scripts.

Deployment success means the application serves correctly; it does **not** by itself verify GitHub webhooks, domain issuance, or deployment isolation.
