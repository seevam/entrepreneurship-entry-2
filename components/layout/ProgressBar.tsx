'use client';

import { motion } from 'framer-motion';
import { Stats } from '@/types/progress';
import { badges } from '@/data/badges';

interface ProgressBarProps {
  stats: Stats;
  unlockedBadges: string[];
  onHomeClick: () => void;
}

export default function ProgressBar({ stats, unlockedBadges, onHomeClick }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between gap-4 mb-2">
          {/* Home Button */}
          <button
            onClick={onHomeClick}
            className="flex items-center gap-2 px-4 py-2 bg-duolingo-blue hover:bg-[#14A1E7] text-white font-bold rounded-xl transition-colors"
          >
            <span className="text-lg">🏠</span>
            <span className="hidden sm:inline">Home</span>
          </button>

          {/* Progress Info */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-gray-700">
                Your Journey Progress
              </span>
              <span className="text-sm font-bold text-duolingo-green">
                {stats.completionPercentage}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-duolingo-green to-duolingo-blue rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${stats.completionPercentage}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>

            {/* Stats */}
            <div className="flex justify-between mt-1 text-xs text-gray-600">
              <span>{stats.visitedScenes}/{stats.totalScenes} scenes</span>
              <span>{stats.unlockedBadges}/{stats.totalBadges} badges</span>
            </div>
          </div>

          {/* Badges Display */}
          <div className="hidden md:flex gap-2">
            {Object.values(badges).map((badge) => {
              const isUnlocked = unlockedBadges.includes(badge.id);
              return (
                <div
                  key={badge.id}
                  className={`text-2xl transition-all duration-300 ${
                    isUnlocked ? 'opacity-100 scale-100' : 'opacity-30 grayscale'
                  }`}
                  title={isUnlocked ? badge.name : `🔒 ${badge.name}`}
                >
                  {badge.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
