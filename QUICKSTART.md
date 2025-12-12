# Quick Start Guide

Get **The Journey** running in 5 minutes!

## 🚀 Fast Track Setup

### 1. Install Node.js (if not installed)

Download and install from: https://nodejs.org/
- Choose **LTS version** (18.x or higher)
- Follow installer instructions
- Verify installation:

```bash
node --version
npm --version
```

### 2. Install Dependencies

```bash
cd /Users/shivamsahu/Desktop/untitled\ folder/the-journey
npm install
```

Wait for installation to complete (~2-3 minutes).

### 3. Run Development Server

```bash
npm run dev
```

### 4. Open in Browser

Visit: **http://localhost:3000**

You should see "Every Journey Begins with a Choice"

## ✅ Quick Test

1. **Click** "Show me your teaching philosophy"
2. **Watch** progress bar update at top
3. **Click** badge icon (🏆) in bottom-right
4. **Verify** "The Philosopher" badge unlocked

## 🌐 Deploy to Vercel (5 minutes)

### Option A: GitHub + Vercel (Recommended)

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `the-journey`
   - Click "Create repository"

2. **Push Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/the-journey.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your `the-journey` repository
   - Click "Deploy"
   - Wait ~2 minutes
   - Get your live URL!

### Option B: Vercel CLI (Fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# When prompted:
# - Set up and deploy? Y
# - Project name? the-journey
# - Directory? ./ (just press Enter)
# - Override settings? N (just press Enter)

# You'll get a deployment URL instantly!
```

## 📱 Share Your Link

After deployment, share your Vercel URL:
- Example: `https://the-journey-xyz.vercel.app`
- Automatically has SSL (HTTPS)
- Global CDN
- Auto-updates when you push to GitHub

## 🔧 Need Help?

### Node.js Not Found?

1. Download from https://nodejs.org/
2. Install LTS version
3. Restart terminal
4. Try again

### Port 3000 Already in Use?

```bash
npm run dev -- -p 3001
```

Then visit: http://localhost:3001

### Build Errors?

```bash
rm -rf node_modules .next
npm install
npm run dev
```

## 📝 Next Steps

1. ✅ Test all paths in the journey
2. ✅ Unlock all badges
3. ✅ Deploy to Vercel
4. ✅ Share the URL in your award submission
5. ✅ (Optional) Add custom domain

## 🎯 Production Checklist

Before submitting:

- [ ] All scenes load correctly
- [ ] All badges unlock properly
- [ ] Progress saves when refreshing
- [ ] Works on mobile
- [ ] Animations are smooth
- [ ] No console errors

## 💡 Pro Tips

1. **Test on Mobile**: Open on your phone
2. **Share with Friends**: Get feedback
3. **Check Performance**: Should load in < 2 seconds
4. **Backup**: Push to GitHub regularly

## 🚨 Emergency Fixes

### Everything Broken?

```bash
# Nuclear option - start fresh
rm -rf node_modules .next
npm install
npm run dev
```

### Deployment Failed?

Check Vercel dashboard → Deployment → Logs
Most common issue: Missing dependencies

Fix:
```bash
# Make sure all deps are in package.json
npm install --save missing-package-name
git add package.json package-lock.json
git commit -m "Fix dependencies"
git push
```

## 📞 Still Stuck?

Check these files in order:
1. `README.md` - Full documentation
2. `SETUP.md` - Detailed setup guide
3. `package.json` - Verify dependencies

---

**You're all set! Start your journey now. 🎉**

Command to run right now:
```bash
npm install && npm run dev
```
