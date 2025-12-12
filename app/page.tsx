'use client';

import { useState } from 'react';
import { scenes } from '@/data/scenes';
import { useProgress } from '@/lib/progress';
import SceneWrapper from '@/components/scenes/SceneWrapper';
import ProgressBar from '@/components/layout/ProgressBar';

export default function Home() {
  const [currentSceneId, setCurrentSceneId] = useState('start');
  const { progress, stats, updateProgress, checkBadgeUnlock } = useProgress();

  const handleChoice = (choiceId: string, targetScene: string) => {
    // Update progress
    updateProgress(currentSceneId, choiceId);

    // Check for badge unlock
    const currentScene = scenes[currentSceneId];
    if (currentScene.badge) {
      checkBadgeUnlock(currentScene.badge);
    }

    // Navigate to next scene
    setCurrentSceneId(targetScene);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    setCurrentSceneId('start');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentScene = scenes[currentSceneId];

  if (!currentScene) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Scene not found</h1>
          <button
            onClick={handleHomeClick}
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
      <ProgressBar
        stats={stats}
        unlockedBadges={progress.unlockedBadges}
        onHomeClick={handleHomeClick}
      />

      {/* Scene Content */}
      <div className="pt-24">
        <SceneWrapper scene={currentScene} onChoice={handleChoice} />
      </div>
    </main>
  );
}
