'use client';

import { useState, useEffect } from 'react';
import { scenes } from '@/data/scenes';
import { badges } from '@/data/badges';
import { useProgress } from '@/lib/progress';
import SceneWrapper from '@/components/scenes/SceneWrapper';
import ProgressBar from '@/components/layout/ProgressBar';
import BadgeDisplay from '@/components/layout/BadgeDisplay';
import BadgeUnlock from '@/components/achievements/BadgeUnlock';

export default function Home() {
  const [currentSceneId, setCurrentSceneId] = useState('start');
  const [unlockedBadge, setUnlockedBadge] = useState<string | null>(null);
  const { progress, stats, updateProgress, checkBadgeUnlock } = useProgress();

  useEffect(() => {
    // Load current scene from progress
    if (progress.currentScene) {
      setCurrentSceneId(progress.currentScene);
    }
  }, [progress.currentScene]);

  const handleChoice = (choiceId: string, targetScene: string) => {
    // Update progress
    updateProgress(currentSceneId, choiceId);

    // Check for badge unlock
    const currentScene = scenes[currentSceneId];
    if (currentScene.badge) {
      const badge = checkBadgeUnlock(currentScene.badge);
      if (badge) {
        setUnlockedBadge(badge);
      }
    }

    // Navigate to next scene
    setCurrentSceneId(targetScene);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentScene = scenes[currentSceneId];

  if (!currentScene) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Scene not found</h1>
          <button
            onClick={() => setCurrentSceneId('start')}
            className="mt-4 px-6 py-3 bg-duolingo-green text-white rounded-xl font-bold"
          >
            Return to Start
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Progress Bar */}
      <ProgressBar stats={stats} />

      {/* Scene Content */}
      <div className="pt-24">
        <SceneWrapper scene={currentScene} onChoice={handleChoice} />
      </div>

      {/* Badge Display */}
      <BadgeDisplay unlockedBadges={progress.unlockedBadges} />

      {/* Badge Unlock Modal */}
      {unlockedBadge && (
        <BadgeUnlock
          badge={badges[unlockedBadge]}
          onClose={() => setUnlockedBadge(null)}
        />
      )}
    </main>
  );
}
