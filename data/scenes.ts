import { Scene } from '@/types/scene';

export const scenes: Record<string, Scene> = {
  // ==================== START SCENE ====================
  'start': {
    id: 'start',
    title: 'Every Journey Begins with a Choice',
    content: `Welcome! You're about to experience entrepreneurship education differently.

Instead of reading a traditional submission, you'll explore my teaching methodology through an interactive journey. Make choices, discover stories, and unlock insights as you go.

Where would you like to begin?`,
    path: 'philosophy',
    type: 'hub',
    choices: [
      {
        id: 'philosophy',
        text: 'Show me your teaching philosophy',
        targetScene: 'p1-foundation',
        icon: '🧭',
        color: 'duolingo-blue',
        description: 'Discover the core principles',
        image: 'https://i.postimg.cc/pXXXGXhP/Screenshot-2025-12-13-at-01-37-56.png'
      },
      {
        id: 'student',
        text: 'I want to see student success',
        targetScene: 's1-meet-elise',
        icon: '🌟',
        color: 'duolingo-yellow',
        description: 'Experience real transformation',
        image: 'https://i.postimg.cc/nhBK3k9w/Screenshot-2025-12-13-at-01-29-24.png'
      },
      {
        id: 'methodology',
        text: 'Explore the methodology',
        targetScene: 'm1-hub',
        icon: '⚙️',
        color: 'duolingo-green',
        description: 'See how it works',
        image: 'https://i.postimg.cc/MGX9dRxj/Screenshot-2025-12-13-at-01-44-10.png'
      },
      {
        id: 'fasttrack',
        text: 'Give me the quick overview',
        targetScene: 'ft1-express',
        icon: '⚡',
        color: 'duolingo-red',
        description: 'Speed run (5 minutes)',
        image: 'https://i.postimg.cc/pXgYQ7rh/Screenshot-2025-12-13-at-01-30-27.png'
      }
    ],
    metadata: {
      estimatedTime: 30,
      difficulty: 'easy',
      keywords: ['start', 'introduction', 'welcome']
    }
  },

  // ==================== PHILOSOPHY PATH ====================
  'p1-foundation': {
    id: 'p1-foundation',
    title: 'Where It All Begins',
    content: `The journey of an entrepreneurship program doesn't start from the problem or idea. It starts from the first meeting between student and teacher.

I believe every student is a flower ready to bloom. My role isn't to tell them what to become, but to create the conditions where they can discover themselves.

The foundation of everything I do rests on one principle: **Connection First, Content Second**.`,
    path: 'philosophy',
    type: 'story',
    badge: 'philosopher',
    choices: [
      {
        id: 'discovery',
        text: 'How do you identify student potential?',
        targetScene: 'p2-discovery',
        icon: '🔍',
        color: 'duolingo-blue'
      },
      {
        id: 'methodology',
        text: 'What\'s your teaching methodology?',
        targetScene: 'm1-hub',
        icon: '⚙️',
        color: 'duolingo-green'
      },
      {
        id: 'action',
        text: 'Show me this in action',
        targetScene: 's1-meet-elise',
        icon: '🎬',
        color: 'duolingo-yellow'
      }
    ],
    metadata: {
      estimatedTime: 90,
      difficulty: 'easy',
      keywords: ['philosophy', 'foundation', 'connection']
    }
  },

  'p2-discovery': {
    id: 'p2-discovery',
    title: 'The Art of Discovery',
    content: `I don't look for students with perfect GPAs or polished business plans. I look for curiosity, empathy, and a willingness to try.

The best entrepreneurs I've taught weren't the ones who knew all the answers. They were the ones who asked the best questions and cared deeply about solving real problems.

My job is to create a safe space where students can explore, fail, learn, and grow.`,
    path: 'philosophy',
    type: 'story',
    choices: [
      {
        id: 'principles',
        text: 'What are your core principles?',
        targetScene: 'p3-principles',
        icon: '💎',
        color: 'duolingo-blue'
      },
      {
        id: 'student-story',
        text: 'Show me a student example',
        targetScene: 's1-meet-elise',
        icon: '🌟',
        color: 'duolingo-yellow'
      },
      {
        id: 'back-hub',
        text: 'Back to main menu',
        targetScene: 'start',
        icon: '🏠',
        color: 'duolingo-green'
      }
    ],
    metadata: {
      estimatedTime: 60,
      difficulty: 'easy',
      keywords: ['discovery', 'potential', 'curiosity']
    }
  },

  'p3-principles': {
    id: 'p3-principles',
    title: 'Six Core Principles',
    content: `My teaching is built on six interconnected principles:

1. **Connection First** - Build trust before teaching
2. **Personal Experience** - Start from their world
3. **Learning by Doing** - Action over theory
4. **Embrace Challenge** - Growth through struggle
5. **Sustainable Thinking** - Long-term impact matters
6. **Iterative Mindset** - Fail fast, learn faster

Each principle reinforces the others, creating a framework that adapts to every student.`,
    path: 'philosophy',
    type: 'story',
    choices: [
      {
        id: 'methodology',
        text: 'How do you apply these?',
        targetScene: 'm1-hub',
        icon: '⚙️',
        color: 'duolingo-green'
      },
      {
        id: 'student',
        text: 'Show me student success',
        targetScene: 's1-meet-elise',
        icon: '🌟',
        color: 'duolingo-yellow'
      },
      {
        id: 'back',
        text: 'Back to start',
        targetScene: 'start',
        icon: '🏠',
        color: 'duolingo-blue'
      }
    ],
    metadata: {
      estimatedTime: 90,
      difficulty: 'medium',
      keywords: ['principles', 'framework', 'methodology']
    }
  },

  // ==================== STUDENT SUCCESS PATH ====================
  's1-meet-elise': {
    id: 's1-meet-elise',
    title: 'Meet Elise',
    content: `Elise Thompson - 16 years old, passionate about reading, concerned about her generation.

She observed something troubling: Her peers spent 5 hours daily scrolling social media while attention spans dropped to 47 seconds. Reading felt boring compared to TikTok.

But Elise had a vision: What if reading could be as engaging as social media, without the mental health costs?`,
    path: 'student',
    type: 'story',
    badge: 'student-champion',
    interactiveElement: {
      type: 'stats',
      data: {
        stats: [
          { label: 'Daily Social Media', value: '5 hours', icon: '📱' },
          { label: 'Attention Span', value: '47 seconds', icon: '⏱️' },
          { label: 'Mental Health Crisis', value: 'Rising', icon: '😔' },
          { label: 'Reading Engagement', value: 'Declining', icon: '📚' }
        ]
      },
      component: 'StatsGrid'
    },
    choices: [
      {
        id: 'challenge',
        text: 'What was the first challenge?',
        targetScene: 's2-challenge',
        icon: '🎯',
        color: 'duolingo-yellow'
      },
      {
        id: 'philosophy',
        text: 'How did you guide her?',
        targetScene: 'p1-foundation',
        icon: '🧭',
        color: 'duolingo-blue'
      },
      {
        id: 'outcome',
        text: 'Show me the outcome',
        targetScene: 's5-reading-room',
        icon: '🚀',
        color: 'duolingo-green'
      }
    ],
    metadata: {
      estimatedTime: 120,
      difficulty: 'easy',
      keywords: ['elise', 'student', 'reading room']
    }
  },

  's2-challenge': {
    id: 's2-challenge',
    title: 'The First Challenge',
    content: `Elise's first challenge wasn't technical - it was belief.

"Who am I to solve this?" she asked. "I'm just 16. No one will take me seriously."

This is where the real teaching begins. Not with business models or marketing plans, but with helping students see their own potential.

I asked her: "Who better to solve this than someone who lives it every day?"`,
    path: 'student',
    type: 'story',
    choices: [
      {
        id: 'journey',
        text: 'How did she develop the idea?',
        targetScene: 's3-development',
        icon: '🛠️',
        color: 'duolingo-yellow'
      },
      {
        id: 'methodology',
        text: 'What was your approach?',
        targetScene: 'm1-hub',
        icon: '⚙️',
        color: 'duolingo-green'
      },
      {
        id: 'skip',
        text: 'Skip to final product',
        targetScene: 's5-reading-room',
        icon: '⏭️',
        color: 'duolingo-blue'
      }
    ],
    metadata: {
      estimatedTime: 90,
      difficulty: 'easy',
      keywords: ['challenge', 'belief', 'potential']
    }
  },

  's3-development': {
    id: 's3-development',
    title: 'Building The Reading Room',
    content: `The journey from idea to product took 6 months of iterative development:

**Month 1-2:** Market research and validation
- Surveyed 200+ students about reading habits
- Analyzed competitors (Goodreads, StoryGraph)
- Identified unique value proposition

**Month 3-4:** Product design and planning
- Designed gamification mechanics
- Created user journey maps
- Developed brand identity

**Month 5-6:** MVP development and testing
- Built Instagram presence (@read.w.elise)
- Grew to 384+ followers organically
- Validated product-market fit`,
    path: 'student',
    type: 'story',
    choices: [
      {
        id: 'impact',
        text: 'What was the impact?',
        targetScene: 's4-impact',
        icon: '💫',
        color: 'duolingo-yellow'
      },
      {
        id: 'product',
        text: 'Show me the product',
        targetScene: 's5-reading-room',
        icon: '🚀',
        color: 'duolingo-green'
      },
      {
        id: 'methodology',
        text: 'How did you teach this?',
        targetScene: 'm1-hub',
        icon: '⚙️',
        color: 'duolingo-blue'
      }
    ],
    metadata: {
      estimatedTime: 120,
      difficulty: 'medium',
      keywords: ['development', 'mvp', 'iteration']
    }
  },

  's4-impact': {
    id: 's4-impact',
    title: 'The Impact',
    content: `Elise's transformation wasn't just about building a product. It was about discovering herself.

**Before:**
- Doubted her abilities
- Unsure of her future
- Consumed by social media

**After:**
- Confident entrepreneur
- Clear vision and purpose
- Building solutions for her generation
- Leading with empathy

She didn't just learn entrepreneurship. She became an entrepreneur.`,
    path: 'student',
    type: 'story',
    choices: [
      {
        id: 'product',
        text: 'See the final product',
        targetScene: 's5-reading-room',
        icon: '🚀',
        color: 'duolingo-green'
      },
      {
        id: 'philosophy',
        text: 'What made this possible?',
        targetScene: 'p1-foundation',
        icon: '🧭',
        color: 'duolingo-blue'
      },
      {
        id: 'back',
        text: 'Back to start',
        targetScene: 'start',
        icon: '🏠',
        color: 'duolingo-yellow'
      }
    ],
    metadata: {
      estimatedTime: 90,
      difficulty: 'easy',
      keywords: ['impact', 'transformation', 'growth']
    }
  },

  's5-reading-room': {
    id: 's5-reading-room',
    title: 'The Reading Room',
    content: `**The Reading Room** - Duolingo meets Goodreads meets Discord

A gamified social reading platform that transforms reading from a solitary activity into an engaging, rewarding community experience.

**Key Features:**
- AI-powered book recommendations
- Reading challenges and streaks
- Community discussions (Discord-style)
- Gamification (points, badges, achievements)
- Monetization for readers

**Target Market:** $138B global book market, 150M Goodreads users

**Revenue Model:** Freemium subscriptions ($4.99/mo) + affiliate marketing

**Current Traction:** Instagram @read.w.elise with 384+ engaged followers`,
    path: 'student',
    type: 'interactive',
    interactiveElement: {
      type: 'showcase',
      data: {
        images: [
          'https://i.postimg.cc/nhSyFnh5/Screenshot-2025-12-13-at-01-51-03.png',
          'https://i.postimg.cc/Mp3C6zpD/Screenshot-2025-12-13-at-01-52-21.png',
          'https://i.postimg.cc/T3NzdT3W/Screenshot-2025-12-13-at-01-52-33.png'
        ],
        links: [
          {
            label: 'Visit Website',
            url: 'https://read-w-elise.my.canva.site/',
            icon: '🌐',
            color: 'duolingo-blue',
            description: 'Explore The Reading Room'
          },
          {
            label: 'Instagram',
            url: 'https://www.instagram.com/read.w.elise/',
            icon: '📸',
            color: 'duolingo-purple',
            description: '@read.w.elise - 384+ followers'
          }
        ]
      },
      component: 'ProductShowcase'
    },
    choices: [
      {
        id: 'methodology',
        text: 'How did you teach this?',
        targetScene: 'm1-hub',
        icon: '⚙️',
        color: 'duolingo-green'
      },
      {
        id: 'final',
        text: 'See my complete submission',
        targetScene: 'final-summary',
        icon: '📄',
        color: 'duolingo-blue'
      },
      {
        id: 'back',
        text: 'Explore more',
        targetScene: 'start',
        icon: '🏠',
        color: 'duolingo-yellow'
      }
    ],
    metadata: {
      estimatedTime: 120,
      difficulty: 'medium',
      keywords: ['reading room', 'product', 'startup']
    }
  },

  // ==================== METHODOLOGY PATH ====================
  'm1-hub': {
    id: 'm1-hub',
    title: 'How Transformation Happens',
    content: `My methodology is built on six interconnected principles. Each one reinforces the others, creating a framework that adapts to every student while maintaining consistency.

**The Six Principles:**
1. 🤝 Connection First
2. 👤 Personal Experience
3. 🛠️ Learning by Doing
4. 💪 Embrace Challenge
5. ♻️ Sustainable Thinking
6. 🔄 Iterative Mindset

Explore each aspect to understand how they work together.`,
    path: 'methodology',
    type: 'hub',
    badge: 'methodology-master',
    choices: [
      {
        id: 'sessions',
        text: 'Show me weekly session structure',
        targetScene: 'm2-sessions',
        icon: '📅',
        color: 'duolingo-green'
      },
      {
        id: 'practical',
        text: 'How do you teach practical skills?',
        targetScene: 'm3-hands-on',
        icon: '🛠️',
        color: 'duolingo-blue'
      },
      {
        id: 'student',
        text: 'See this applied to a student',
        targetScene: 's1-meet-elise',
        icon: '🌟',
        color: 'duolingo-yellow'
      },
      {
        id: 'back',
        text: 'Back to start',
        targetScene: 'start',
        icon: '🏠',
        color: 'duolingo-purple'
      }
    ],
    metadata: {
      estimatedTime: 120,
      difficulty: 'medium',
      keywords: ['methodology', 'framework', 'principles']
    }
  },

  'm2-sessions': {
    id: 'm2-sessions',
    title: 'Weekly Session Structure',
    content: `Each week follows a proven structure:

**Week 1-2: Connection & Discovery**
- Get to know the student
- Understand their passions and concerns
- Identify problems they care about

**Week 3-4: Ideation & Validation**
- Brainstorm solutions
- Market research
- Customer interviews

**Week 5-6: Planning & Design**
- Business model development
- Product/service design
- Brand identity

**Week 7-10: Building & Testing**
- MVP development
- User testing
- Iteration based on feedback

**Week 11-12: Launch & Reflect**
- Go-to-market strategy
- Launch execution
- Reflection and growth`,
    path: 'methodology',
    type: 'story',
    choices: [
      {
        id: 'practical',
        text: 'What skills do they learn?',
        targetScene: 'm3-hands-on',
        icon: '🛠️',
        color: 'duolingo-green'
      },
      {
        id: 'student',
        text: 'Show me student example',
        targetScene: 's1-meet-elise',
        icon: '🌟',
        color: 'duolingo-yellow'
      },
      {
        id: 'back',
        text: 'Back to methodology',
        targetScene: 'm1-hub',
        icon: '↩️',
        color: 'duolingo-blue'
      }
    ],
    metadata: {
      estimatedTime: 120,
      difficulty: 'medium',
      keywords: ['sessions', 'structure', 'curriculum']
    }
  },

  'm3-hands-on': {
    id: 'm3-hands-on',
    title: 'Learning by Doing',
    content: `Students don't just learn about entrepreneurship - they do it.

**Practical Skills Developed:**

**Market Research**
- Customer interviews
- Competitive analysis
- Market sizing

**Product Development**
- User journey mapping
- MVP design
- Prototyping

**Business Planning**
- Business model canvas
- Financial projections
- Go-to-market strategy

**Digital Marketing**
- Social media strategy
- Content creation
- Community building

Every skill is learned through real application to their own venture.`,
    path: 'methodology',
    type: 'story',
    choices: [
      {
        id: 'student',
        text: 'See this in action',
        targetScene: 's1-meet-elise',
        icon: '🎬',
        color: 'duolingo-yellow'
      },
      {
        id: 'philosophy',
        text: 'Why does this work?',
        targetScene: 'p1-foundation',
        icon: '🧭',
        color: 'duolingo-blue'
      },
      {
        id: 'back',
        text: 'Back to methodology',
        targetScene: 'm1-hub',
        icon: '↩️',
        color: 'duolingo-green'
      }
    ],
    metadata: {
      estimatedTime: 90,
      difficulty: 'medium',
      keywords: ['skills', 'practical', 'hands-on']
    }
  },

  // ==================== FAST TRACK PATH ====================
  'ft1-express': {
    id: 'ft1-express',
    title: 'The Express Journey',
    content: `**My Teaching in 5 Minutes**

**Philosophy:** Connection First, Content Second
Every student is a flower ready to bloom.

**Methodology:** Six interconnected principles
1. Build trust before teaching
2. Start from their experience
3. Learn through doing
4. Grow through challenge
5. Think long-term impact
6. Iterate constantly

**Student Success: Elise & The Reading Room**
- 16-year-old concerned about social media's impact
- Built gamified reading platform
- 384+ Instagram followers, growing organically
- Addressing $138B book market

**Impact:** Students don't just learn entrepreneurship - they become entrepreneurs.`,
    path: 'fasttrack',
    type: 'summary',
    badge: 'speed-explorer',
    choices: [
      {
        id: 'deep-dive',
        text: 'I want to explore deeper',
        targetScene: 'start',
        icon: '🔍',
        color: 'duolingo-blue'
      },
      {
        id: 'final',
        text: 'See complete submission',
        targetScene: 'final-summary',
        icon: '📄',
        color: 'duolingo-green'
      }
    ],
    metadata: {
      estimatedTime: 300,
      difficulty: 'easy',
      keywords: ['summary', 'overview', 'fast track']
    }
  },

  // ==================== FINAL SUMMARY ====================
  'final-summary': {
    id: 'final-summary',
    title: 'Your Journey Complete',
    content: `Thank you for experiencing my teaching methodology through this interactive journey.

**What You've Discovered:**
- A teaching philosophy built on connection and trust
- A methodology that transforms students into entrepreneurs
- Real student success stories (like Elise and The Reading Room)
- A framework that adapts to every student

**The Impact:**
This isn't just about teaching entrepreneurship. It's about empowering students to see themselves as changemakers, to trust their instincts, and to build solutions for problems they care about.

Every student is a flower ready to bloom. My role is to create the conditions for that growth.`,
    path: 'final',
    type: 'summary',
    choices: [
      {
        id: 'restart',
        text: 'Explore different paths',
        targetScene: 'start',
        icon: '🔄',
        color: 'duolingo-blue'
      }
    ],
    metadata: {
      estimatedTime: 120,
      difficulty: 'easy',
      keywords: ['final', 'summary', 'complete']
    }
  }
};
