# Personal Website

My personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Live at [alexwurm.com](https://alexwurm.com).

## Development Workflow

### Local Server Management

```bash
# Start development server
npm run dev

# Check for running Next.js processes
lsof -i :3000                    # Show process using port 3000
ps aux | grep "next dev"         # Show all Next.js processes

# Stop development server (several options)
kill -9 <PID>                    # Kill specific process by PID
npx kill-port 3000              # Kill anything on port 3000
killall node                    # Kill all Node processes (use with caution)

# Force kill all Next.js processes
ps aux | grep "next dev" | grep -v grep | awk '{print $2}' | xargs kill -9
```

### Pre-Commit Checks

```bash
# Build locally to catch errors
npm run build

# Run type checking
npx tsc --noEmit

# Run linting
npm run lint
```

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make commits
git add .
git commit -m "descriptive message"

# Push to GitHub
git push origin feature/your-feature-name
```

### Deployment Process

1. **Preview Deployments**:
   - Push to any branch triggers a Vercel preview deployment
   - Each PR gets a unique preview URL
   - Test changes on preview before merging

2. **Production Deployment**:
   - Merge feature branch to main
   - Vercel automatically deploys to production
   - Verify changes on production site

3. **Post-Deployment Checks**:
   - Test on multiple devices/browsers
   - Check Vercel Analytics for performance
   - Monitor for errors in Vercel dashboard

### DNS Configuration

The website uses multiple domains:
- `alexwurm.com` - Main site (Vercel)
- `www.alexwurm.com` - Main site alias (Vercel)
- `v1.alexwurm.com` - Original version (GitHub Pages)

Required DNS Records:
```
A     @     216.198.79.1
CNAME  www   [vercel-dns-value]
CNAME  v1    aewurm98.github.io
```

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS for contact form

## Project Structure

```
src/
├── app/             # Next.js App Router pages
├── components/      # React components
│   ├── ui/         # Reusable UI components
│   ├── sections/   # Page sections
│   └── layout/     # Navigation, footer
├── lib/            # Utilities, configurations
├── types/          # TypeScript definitions
└── data/          # Content data files
```

## Environment Variables

Required environment variables in `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Best Practices

1. Always test locally first
2. Use feature branches, never commit directly to main
3. Take advantage of preview deployments
4. Check build output before pushing
5. Monitor production analytics

## License

MIT © Alex Wurm