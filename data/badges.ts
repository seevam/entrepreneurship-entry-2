import { Badge } from '@/types/badge';

export const badges: Record<string, Badge> = {
  'philosopher': {
    id: 'philosopher',
    name: 'The Philosopher',
    description: 'Explored the teaching philosophy',
    icon: '🧭',
    color: '#1CB0F6',
    tier: 1,
    unlockCondition: {
      type: 'visit_scene',
      value: 'p1-foundation'
    },
    celebrationMessage: 'You\'ve discovered the foundation of connection-first teaching!'
  },
  'student-champion': {
    id: 'student-champion',
    name: 'Student Champion',
    description: 'Witnessed student transformation',
    icon: '🌟',
    color: '#FFC800',
    tier: 1,
    unlockCondition: {
      type: 'visit_scene',
      value: 's1-meet-elise'
    },
    celebrationMessage: 'You\'ve seen how students transform through entrepreneurship!'
  },
  'methodology-master': {
    id: 'methodology-master',
    name: 'Methodology Master',
    description: 'Explored the teaching methodology',
    icon: '⚙️',
    color: '#58CC02',
    tier: 1,
    unlockCondition: {
      type: 'visit_scene',
      value: 'm1-hub'
    },
    celebrationMessage: 'You understand the framework behind the transformation!'
  },
  'speed-explorer': {
    id: 'speed-explorer',
    name: 'Speed Explorer',
    description: 'Completed the fast track',
    icon: '⚡',
    color: '#FF4B4B',
    tier: 1,
    unlockCondition: {
      type: 'visit_scene',
      value: 'ft1-express'
    },
    celebrationMessage: 'You got the full picture in record time!'
  },
  'impact-explorer': {
    id: 'impact-explorer',
    name: 'Impact Explorer',
    description: 'Discovered all three main paths',
    icon: '🗺️',
    color: '#CE82FF',
    tier: 2,
    unlockCondition: {
      type: 'visit_count',
      value: 3,
      operator: 'greater_than'
    },
    celebrationMessage: 'You\'ve explored philosophy, students, and methodology!'
  },
  'completionist': {
    id: 'completionist',
    name: 'The Completionist',
    description: 'Visited every scene',
    icon: '💯',
    color: '#FFD700',
    tier: 3,
    unlockCondition: {
      type: 'visit_count',
      value: 15,
      operator: 'greater_than'
    },
    celebrationMessage: 'You\'ve experienced the complete journey!'
  },
  'master-explorer': {
    id: 'master-explorer',
    name: 'Master Explorer',
    description: 'Unlocked all badges',
    icon: '👑',
    color: '#FFD700',
    tier: 3,
    unlockCondition: {
      type: 'unlock_badges',
      value: 5,
      operator: 'greater_than'
    },
    celebrationMessage: 'You are a true master of this teaching journey!'
  }
};
