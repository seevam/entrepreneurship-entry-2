'use client';

import { useState, useEffect } from 'react';
import { Progress, Stats } from '@/types/progress';
import { UnlockCondition } from '@/types/badge';
import { scenes } from '@/data/scenes';
import { badges } from '@/data/badges';

const STORAGE_KEY = 'teaching-journey-progress';

export class ProgressManager {
  private progress: Progress;

  constructor() {
    this.progress = this.getDefaultProgress();
  }

  loadProgress(): Progress {
    if (typeof window === 'undefined') {
      return this.getDefaultProgress();
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
    return this.getDefaultProgress();
  }

  private getDefaultProgress(): Progress {
    return {
      currentScene: 'start',
      visitedScenes: ['start'],
      unlockedBadges: [],
      pathsExplored: [],
      choices: [],
      stats: this.calculateStats(['start'], []),
      startTime: Date.now(),
      lastUpdated: Date.now()
    };
  }

  updateProgress(sceneId: string, choiceId: string) {
    // Add to visited scenes
    if (!this.progress.visitedScenes.includes(sceneId)) {
      this.progress.visitedScenes.push(sceneId);
    }

    // Add to choices
    this.progress.choices.push({
      sceneId,
      choiceId,
      timestamp: Date.now()
    });

    // Update current scene
    this.progress.currentScene = sceneId;

    // Check path exploration
    const scene = scenes[sceneId];
    if (scene && !this.progress.pathsExplored.includes(scene.path)) {
      this.progress.pathsExplored.push(scene.path);
    }

    // Update stats
    this.progress.stats = this.calculateStats(
      this.progress.visitedScenes,
      this.progress.unlockedBadges
    );

    this.progress.lastUpdated = Date.now();
    this.saveProgress();
  }

  checkBadgeUnlock(badgeId?: string): string | null {
    if (!badgeId) return null;
    if (this.progress.unlockedBadges.includes(badgeId)) return null;

    const badge = badges[badgeId];
    if (!badge) return null;

    const shouldUnlock = this.checkUnlockCondition(badge.unlockCondition);

    if (shouldUnlock) {
      this.progress.unlockedBadges.push(badgeId);
      this.progress.stats = this.calculateStats(
        this.progress.visitedScenes,
        this.progress.unlockedBadges
      );
      this.saveProgress();
      return badgeId;
    }

    return null;
  }

  private checkUnlockCondition(condition: UnlockCondition): boolean {
    switch (condition.type) {
      case 'visit_scene':
        return this.progress.visitedScenes.includes(condition.value as string);

      case 'visit_path':
        return this.progress.pathsExplored.includes(condition.value as string);

      case 'unlock_badges':
        return this.progress.unlockedBadges.length >= (condition.value as number);

      case 'visit_count':
        return this.progress.visitedScenes.length >= (condition.value as number);

      case 'time_spent':
        const timeSpent = Date.now() - this.progress.startTime;
        return timeSpent >= (condition.value as number);

      default:
        return false;
    }
  }

  private calculateStats(visitedScenes: string[], unlockedBadges: string[]): Stats {
    const totalScenes = Object.keys(scenes).length;
    const totalBadges = Object.keys(badges).length;
    const timeSpent = Math.floor((Date.now() - this.progress.startTime) / 1000);

    return {
      totalScenes,
      visitedScenes: visitedScenes.length,
      totalBadges,
      unlockedBadges: unlockedBadges.length,
      timeSpent,
      completionPercentage: Math.round((visitedScenes.length / totalScenes) * 100)
    };
  }

  private saveProgress() {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress));
      } catch (error) {
        console.error('Error saving progress:', error);
      }
    }
  }

  getProgress(): Progress {
    return { ...this.progress };
  }

  resetProgress() {
    this.progress = this.getDefaultProgress();
    this.saveProgress();
  }
}

// React Hook
export function useProgress() {
  const [manager] = useState(() => new ProgressManager());
  const [progress, setProgress] = useState<Progress>(manager.getProgress());

  useEffect(() => {
    setProgress(manager.loadProgress());
  }, [manager]);

  const updateProgress = (sceneId: string, choiceId: string) => {
    manager.updateProgress(sceneId, choiceId);
    setProgress(manager.getProgress());
  };

  const checkBadgeUnlock = (badgeId?: string) => {
    const unlockedBadge = manager.checkBadgeUnlock(badgeId);
    if (unlockedBadge) {
      setProgress(manager.getProgress());
    }
    return unlockedBadge;
  };

  return {
    progress,
    stats: progress.stats,
    updateProgress,
    checkBadgeUnlock,
    resetProgress: () => {
      manager.resetProgress();
      setProgress(manager.getProgress());
    }
  };
}
