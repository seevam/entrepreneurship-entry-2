# Setup and Deployment Guide

Complete guide to get **The Journey** running locally and deployed to production.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** 18 or higher ([Download](https://nodejs.org/))
- **npm**, **yarn**, or **pnpm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- A **Vercel** account ([Sign up free](https://vercel.com/signup))

## Local Development

### Step 1: Install Dependencies

```bash
cd the-journey
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

### Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Test the Experience

Navigate through different paths:
- Click on different choices
- Watch badges unlock
- Check progress tracking
- Verify animations work

## Production Build

### Test Production Locally

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Check Build Output

The build should complete successfully with:
- ✓ All pages compiled
- ✓ Static generation complete
- ✓ No build errors

## Deployment to Vercel

### Method 1: Deploy via GitHub (Recommended)

#### Step 1: Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: The Journey interactive experience"

# Create repository on GitHub
# Then push
git remote add origin https://github.com/YOUR_USERNAME/the-journey.git
git branch -M main
git push -u origin main
```

#### Step 2: Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Select **"Import Git Repository"**
4. Choose your `the-journey` repository
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. Click **"Deploy"**

#### Step 3: Wait for Deployment

Vercel will:
- Install dependencies
- Build your application
- Deploy to global CDN
- Provide a production URL

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? [your account]
# - Link to existing project? N
# - Project name? the-journey
# - Directory? ./
# - Override settings? N

# Deploy to production
vercel --prod
```

### Method 3: One-Click Deploy

Click this button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/the-journey)

## Post-Deployment

### Verify Deployment

1. **Check URL**: Visit your production URL
2. **Test Navigation**: Try all paths
3. **Test Badges**: Verify badge unlocking
4. **Test Progress**: Refresh page and check persistence
5. **Test Mobile**: View on mobile devices

### Custom Domain (Optional)

1. Go to Vercel project settings
2. Navigate to **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions

### Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic SSL
- ✅ Edge caching
- ✅ Image optimization
- ✅ Compression

## Troubleshooting

### Build Fails

**Error**: `Module not found`

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Error**: `TypeScript errors`

```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Deployment Issues

**Issue**: Vercel deployment stuck

1. Check build logs in Vercel dashboard
2. Verify all dependencies are in `package.json`
3. Ensure `next.config.js` is correct

**Issue**: Page not loading

1. Check browser console for errors
2. Verify all imports are correct
3. Clear browser cache

### Local Development Issues

**Issue**: Port 3000 already in use

```bash
# Use different port
npm run dev -- -p 3001
```

**Issue**: Changes not reflecting

```bash
# Restart development server
# Press Ctrl+C, then npm run dev
```

## Environment Variables

This project doesn't require environment variables. All configuration is in code.

If you want to add analytics:

```bash
# Create .env.local
echo "NEXT_PUBLIC_GA_ID=your_ga_id" > .env.local
```

## Updating Content

### Add New Scenes

Edit `data/scenes.ts`:

```typescript
'new-scene-id': {
  id: 'new-scene-id',
  title: 'New Scene Title',
  content: 'Scene content here...',
  // ... rest of scene config
}
```

### Add New Badges

Edit `data/badges.ts`:

```typescript
'new-badge-id': {
  id: 'new-badge-id',
  name: 'Badge Name',
  // ... rest of badge config
}
```

### Update Styles

Edit `tailwind.config.ts` for theme changes:

```typescript
colors: {
  'custom-color': '#HEXCODE',
}
```

## Git Workflow

```bash
# Make changes
git add .
git commit -m "Description of changes"
git push

# Vercel will auto-deploy from main branch
```

## Rollback Deployment

In Vercel dashboard:
1. Go to **"Deployments"**
2. Find previous successful deployment
3. Click **"..."** → **"Promote to Production"**

## Analytics (Optional)

### Add Vercel Analytics

```bash
npm install @vercel/analytics
```

In `app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Support

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

### Common Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Deploy to Vercel
vercel --prod
```

## Performance Checklist

- [ ] Build completes without errors
- [ ] All pages load in < 2 seconds
- [ ] Animations are smooth (60fps)
- [ ] Mobile responsive
- [ ] Progress saves correctly
- [ ] Badges unlock properly
- [ ] All navigation works

## Security

- ✅ No sensitive data in code
- ✅ No API keys required
- ✅ Client-side only (no backend)
- ✅ LocalStorage for persistence
- ✅ No user authentication needed

## Backup

To backup user progress (optional):

User data is stored in browser LocalStorage under key: `teaching-journey-progress`

Users can export their progress by opening browser console:

```javascript
// Export progress
const progress = localStorage.getItem('teaching-journey-progress');
console.log(progress);

// Import progress
localStorage.setItem('teaching-journey-progress', 'PASTE_PROGRESS_HERE');
```

---

**You're ready to deploy! 🚀**

Run `npm install && npm run dev` to start your journey.
