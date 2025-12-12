'use client';

import { motion } from 'framer-motion';
import { Stats } from '@/types/progress';

interface ProgressBarProps {
  stats: Stats;
}

export default function ProgressBar({ stats }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-gray-700">
            Your Journey Progress
          </span>
          <span className="text-sm font-bold text-duolingo-green">
            {stats.completionPercentage}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-duolingo-green to-duolingo-blue rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${stats.completionPercentage}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>

        {/* Stats */}
        <div className="flex justify-between mt-2 text-xs text-gray-600">
          <span>{stats.visitedScenes}/{stats.totalScenes} scenes</span>
          <span>{stats.unlockedBadges}/{stats.totalBadges} badges</span>
        </div>
      </div>
    </div>
  );
}
