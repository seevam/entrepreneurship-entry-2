export interface Progress {
  currentScene: string;
  visitedScenes: string[];
  unlockedBadges: string[];
  pathsExplored: string[];
  choices: ChoiceHistory[];
  stats: Stats;
  startTime: number;
  lastUpdated: number;
}

export interface ChoiceHistory {
  sceneId: string;
  choiceId: string;
  timestamp: number;
}

export interface Stats {
  totalScenes: number;
  visitedScenes: number;
  totalBadges: number;
  unlockedBadges: number;
  timeSpent: number;
  completionPercentage: number;
}
