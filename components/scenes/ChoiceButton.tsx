'use client';

import { motion } from 'framer-motion';
import { Choice } from '@/types/scene';

interface ChoiceButtonProps {
  choice: Choice;
  onClick: () => void;
}

export default function ChoiceButton({ choice, onClick }: ChoiceButtonProps) {
  const colorClasses = {
    'duolingo-blue': 'bg-[#1CB0F6] hover:bg-[#14A1E7] border-[#0D8ECE]',
    'duolingo-green': 'bg-[#58CC02] hover:bg-[#4FB801] border-[#46A302]',
    'duolingo-yellow': 'bg-[#FFC800] hover:bg-[#F0B900] border-[#E0A900]',
    'duolingo-red': 'bg-[#FF4B4B] hover:bg-[#F03C3C] border-[#E02C2C]',
    'duolingo-purple': 'bg-[#CE82FF] hover:bg-[#BF73F0] border-[#B064E0]'
  };

  const colorClass = choice.color
    ? colorClasses[choice.color]
    : colorClasses['duolingo-green'];

  return (
    <motion.button
      onClick={onClick}
      className={`w-full p-6 rounded-2xl ${colorClass} border-b-4 text-white font-bold text-lg transition-all duration-200 hover:translate-y-[-4px] active:translate-y-0 active:border-b-2 shadow-lg hover:shadow-xl`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {choice.icon && (
            <span className="text-3xl">{choice.icon}</span>
          )}
          <div className="text-left">
            <div className="text-xl font-bold">{choice.text}</div>
            {choice.description && (
              <div className="text-sm opacity-90 mt-1">{choice.description}</div>
            )}
          </div>
        </div>
        <svg
          className="w-6 h-6 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </motion.button>
  );
}
