# The Journey - Interactive Teaching Award Submission

An interactive, Duolingo-style gamified experience showcasing entrepreneurship teaching methodology through storytelling and choice-based navigation.

## Overview

Instead of a traditional teaching award submission, **The Journey** offers an engaging, interactive experience where evaluators can:

- Explore teaching philosophy through choice-based navigation
- Discover student success stories (like Elise and The Reading Room)
- Understand the six-principle teaching methodology
- Unlock badges and track progress
- Experience the teaching approach firsthand

## Features

### Interactive Journey
- **4 Main Paths**: Philosophy, Student Success, Methodology, Fast Track
- **15+ Scenes**: Rich storytelling with multiple navigation options
- **Choice-Based Navigation**: Explore at your own pace

### Gamification
- **7 Badges**: Unlock achievements as you explore
- **Progress Tracking**: See your journey completion in real-time
- **Persistent State**: Your progress is saved locally

### Duolingo-Inspired Design
- Colorful, engaging UI with playful animations
- Bold buttons with hover effects
- Spring-based motion for smooth interactions
- Achievement celebrations with animations

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Storage**: LocalStorage (client-side)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Project Structure

```
the-journey/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── ProgressBar.tsx
│   │   └── BadgeDisplay.tsx
│   ├── scenes/           # Scene components
│   │   ├── SceneWrapper.tsx
│   │   ├── SceneContent.tsx
│   │   └── ChoiceButton.tsx
│   └── achievements/     # Badge components
│       └── BadgeUnlock.tsx
├── data/                 # Data files
│   ├── scenes.ts        # All scenes and paths
│   └── badges.ts        # Badge definitions
├── lib/                 # Utility functions
│   └── progress.ts      # Progress management
└── types/               # TypeScript types
    ├── scene.ts
    ├── progress.ts
    └── badge.ts
```

## Scene Paths

### 1. Philosophy Path
Explore the core teaching philosophy: Connection First, Content Second
- Foundation principles
- Student potential discovery
- Six core teaching principles

### 2. Student Success Path
Experience Elise's journey building The Reading Room
- Meet Elise and her vision
- Overcoming challenges
- Product development journey
- Impact and transformation

### 3. Methodology Path
Understand the teaching framework
- Six interconnected principles
- Weekly session structure
- Hands-on learning approach

### 4. Fast Track Path
Quick 5-minute overview of everything
- Philosophy summary
- Methodology highlights
- Student success snapshot

## Badge System

| Badge | Requirement | Description |
|-------|-------------|-------------|
| 🧭 The Philosopher | Visit philosophy path | Explored teaching philosophy |
| 🌟 Student Champion | Visit student path | Witnessed transformation |
| ⚙️ Methodology Master | Visit methodology hub | Explored framework |
| ⚡ Speed Explorer | Complete fast track | Quick overview |
| 🗺️ Impact Explorer | Visit 3+ paths | Explored multiple paths |
| 💯 Completionist | Visit 15+ scenes | Experienced everything |
| 👑 Master Explorer | Unlock all badges | True master |

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Environment Variables

No environment variables required - all data is statically defined.

## Customization

### Adding New Scenes

1. Add scene to `data/scenes.ts`:

```typescript
'new-scene': {
  id: 'new-scene',
  title: 'Scene Title',
  content: 'Scene content...',
  path: 'philosophy',
  type: 'story',
  choices: [
    {
      id: 'choice1',
      text: 'Choice text',
      targetScene: 'target-scene-id',
      icon: '🎯',
      color: 'duolingo-green'
    }
  ],
  metadata: {
    estimatedTime: 60,
    difficulty: 'easy',
    keywords: ['keyword1', 'keyword2']
  }
}
```

### Adding New Badges

1. Add badge to `data/badges.ts`:

```typescript
'badge-id': {
  id: 'badge-id',
  name: 'Badge Name',
  description: 'Badge description',
  icon: '🏆',
  color: '#FFC800',
  tier: 1,
  unlockCondition: {
    type: 'visit_scene',
    value: 'scene-id'
  },
  celebrationMessage: 'Congratulations message!'
}
```

## Student Product: The Reading Room

This submission features **The Reading Room**, a real student venture by Elise Thompson:

- **Concept**: Gamified social reading platform (Duolingo meets Goodreads meets Discord)
- **Problem**: Social media destroying reading habits and attention spans
- **Solution**: Make reading engaging, social, and rewarding
- **Market**: $138B global book market, 150M Goodreads users
- **Traction**: Instagram @read.w.elise with 384+ followers

## Performance

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 95+
- **Bundle Size**: ~150KB gzipped

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for the Entrepreneurship Teacher Award submission.

## Contact

For questions about this submission or The Journey experience, please contact through the award submission portal.

---

**Built with ❤️ to showcase transformative entrepreneurship education**
