This repo is a small Next.js (app router) portfolio/site with a few serverless API routes and simple AWS integration. The goal of this file is to give an AI coding assistant just enough local, actionable context to be productive.

Core architecture (high level)
- Frontend: Next.js 14 (app router) under `src/app`. Page components are server or client components depending on `'use client'` usage. Root layout is `src/app/layout.tsx`.
- UI components: `src/components/*` (example: `ContactForm.tsx`, `ProjectPreview.tsx`). Client-side form uses fetch to call the email API.
- Server/API: serverless routes live in `src/app/api/*` (examples: `src/app/api/posts/route.ts`, `src/app/api/send-email/route.ts`). These are Next.js server route handlers (use `NextRequest`, `NextResponse`).
- Services: backend integrations are factored into `src/app/service/*` (example: `posts.ts` wraps DynamoDB operations and is used by the API route).

Important integration points
- DynamoDB: `src/app/service/posts.ts` uses `aws-sdk` DocumentClient. TABLE_NAME is read from `process.env.TABLE_NAME` (default: `Posts`).
- S3: `src/app/api/posts/route.ts` uploads post images to S3 using `process.env.BUCKET_NAME` (default: `post-images-jsconstruction`).
- Email: `src/app/api/send-email/route.ts` uses `nodemailer` with credentials from `.env.local` (EMAIL_USER, EMAIL_PASS) and COMPANY_EMAIL as recipient.
- Local env: the server route explicitly loads `.env.local` in the email route (`dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })`). Keep that in mind when running locally or when writing code that expects env vars.

Developer workflows & commands
- Typical dev run: `npm run dev` (see `package.json` in repo root). Build and start with `npm run build` and `npm run start`.
- Linting: `npm run lint` uses Next's lint config.
- Lambda helper: there is a small `lambda-function` folder with its own `package.json` using `aws-sdk` (no scripts). Treat this as a separate artifact if adding serverless helpers.

Project-specific conventions & patterns
- API design: API route files export `GET`/`POST` functions that use `NextRequest` and return `NextResponse.json(...)`.
- Service layer: data access code lives under `src/app/service` and is imported into API routes (example: `createPost`, `getPosts`, `getPostById`). Prefer updating/adding service functions there instead of embedding AWS calls directly in routes.
- Server vs Client components: any component using browser-only APIs or hooks includes `'use client'` at top (example: `src/app/page.tsx`, `src/components/ContactForm.tsx`). When adding components that will run on the server, omit `'use client'` and avoid browser-only APIs.
- Fetching from client: client components call internal routes (e.g., `fetch('/api/send-email')` from `ContactForm.tsx`) — keep these endpoint signatures stable when changing payloads.

What to look at for common tasks (examples)
- Add a new post: replicate `src/app/api/posts/route.ts` + `src/app/service/posts.ts`. Validate formData in route, upload image to S3, then call `createPost`.
- Change email behavior: edit `src/app/api/send-email/route.ts`. Note it expects `.env.local` and uses Gmail SMTP via `nodemailer`.
- Debugging env issues: confirm `.env.local` contains EMAIL_USER, EMAIL_PASS, COMPANY_EMAIL, AWS_REGION, TABLE_NAME, BUCKET_NAME. The repo currently defaults some names, but tests and local runs require real credentials.

Edge cases & constraints an agent should respect
- Do not assume a database or S3 exists in CI — any code that runs at build-time must be guarded. Use defensive checks around `process.env` and avoid making live AWS calls during static rendering.
- Keep server-only secrets in env files; the project expects `.env.local` and explicitly loads it in server code. Never hardcode secrets.

Files to reference when editing or adding features
- `src/app/layout.tsx` — app shell and global CSS import
- `src/app/page.tsx` — home page; example client component usage
- `src/components/ContactForm.tsx` — client form, shows fetch('/api/send-email') usage and expected JSON payload
- `src/app/api/send-email/route.ts` — nodemailer usage and `.env.local` loading
- `src/app/api/posts/route.ts` and `src/app/service/posts.ts` — S3 uploads and DynamoDB usage patterns
- `package.json` & `lambda-function/package.json` — scripts, dependencies

If unsure, ask the maintainers about:
- Required AWS resources (DynamoDB table name, S3 bucket name) and preferred test credentials. The code uses sensible defaults but deployment needs real resources.
- Whether `dotenv.config()` should be centralised (it's only used in `send-email` route currently).

If this file is out of date or you need more context, tell me which area you want expanded (env, deploy, adding features, or tests) and I will update the instructions.
