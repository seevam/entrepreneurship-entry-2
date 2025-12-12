import { ReactNode } from 'react';

export interface Scene {
  id: string;
  title: string;
  content: string | ReactNode;
  path: 'philosophy' | 'student' | 'methodology' | 'fasttrack' | 'final' | 'bonus';
  type: 'story' | 'interactive' | 'hub' | 'summary';
  choices: Choice[];
  interactiveElement?: InteractiveElement;
  badge?: string;
  metadata: {
    estimatedTime: number; // seconds
    difficulty: 'easy' | 'medium' | 'hard';
    keywords: string[];
  };
}

export interface Choice {
  id: string;
  text: string;
  targetScene: string;
  icon?: string;
  color?: 'duolingo-blue' | 'duolingo-green' | 'duolingo-yellow' | 'duolingo-red' | 'duolingo-purple';
  description?: string;
  image?: string;
}

export interface InteractiveElement {
  type: 'stats' | 'timeline' | 'comparison' | 'quiz' | 'diagram' | 'links' | 'showcase';
  data: any;
  component: string;
}

export interface StatsGridData {
  stats: Array<{
    label: string;
    value: string;
    icon: string;
  }>;
}

export interface HexagonalHubData {
  principles: Array<{
    id: string;
    label: string;
    icon: string;
  }>;
}
