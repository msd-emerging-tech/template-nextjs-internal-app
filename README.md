# Next.js Internal App Template

Full-stack Next.js application template for internal tools and dashboards.

## What This Template Is For

- Internal dashboards
- Admin panels
- Data visualization tools
- Team collaboration tools
- Internal workflow applications

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Jotai for client state
- Zod for validation

## Local Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

App runs on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Environment Variables

Copy `.env.example` to `.env`:

```env
PORT=3000
NODE_ENV=development
APP_NAME=nextjs-internal-app
```

## Available Routes

- `GET /` - Home page
- `GET /dashboard` - Dashboard with metrics and activity
- `GET /health` - Health check (returns `{ "status": "ok" }`)
- `GET /api/health` - API health check with uptime

## Features

- **Dashboard Layout:** Pre-built navigation and layout components
- **Sample Metrics:** Example metric cards with trend indicators
- **Activity Feed:** Recent activity component
- **System Status:** Service status monitoring
- **Responsive Design:** Mobile-friendly with Tailwind
- **Health Checks:** Built-in endpoints for monitoring

## Customization

### Adding New Pages

Create new pages in the `app/` directory:

```typescript
// app/reports/page.tsx
export default function Reports() {
  return <div>Reports Page</div>
}
```

Access at `/reports`

### Adding API Routes

Create API routes in `app/api/`:

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ users: [] })
}
```

Access at `/api/users`

### Styling

Edit `app/globals.css` for global styles or use Tailwind classes directly in components.

## Docker

### Build Docker Image

```bash
docker build -t prototype-internal-app .
```

### Run Docker Container

```bash
docker run --rm -p 3000:3000 --env-file .env.example prototype-internal-app
```

Visit: `http://localhost:3000`

Test health check:
```bash
curl http://localhost:3000/health
```

## Deployment Configuration

- **Default Port:** 3000
- **Health Check Path:** `/health`
- **Health Check Response:** `{ "status": "ok" }`
- **Container Listens On:** `0.0.0.0:3000`

## Important Implementation Notes

- Uses Next.js standalone output for optimized Docker images
- Server binds to `0.0.0.0` (required for Docker)
- No database required by default
- Authentication disabled by default (add as needed)
- Metrics and data are mocked (connect to real APIs as needed)

## Adding Authentication (Optional)

This template does not include authentication by default. To add it:

1. Install NextAuth.js or your preferred auth library
2. Add authentication middleware
3. Protect routes as needed
4. Configure environment variables for auth providers

Example with NextAuth.js:
```bash
npm install next-auth
```

See Next.js authentication docs for implementation details.

## Adding Database (Optional)

To connect to a database:

1. Install Prisma or your preferred ORM
2. Add `DATABASE_URL` to `.env`
3. Create schema and migrations
4. Use in API routes

Example with Prisma:
```bash
npm install @prisma/client
npm install -D prisma
npx prisma init
```

## Deployment to Prototype VM

This template deploys as a Docker container:

1. Main website creates repo from template
2. GitHub Actions builds Next.js app
3. Docker image pushed to ACR
4. Container deployed on prototype VM
5. Caddy routes traffic
6. Health checks via `/health`

The deployment system expects:
- One Docker image
- One exposed port (3000)
- One health check endpoint (/health)
- No manual configuration
