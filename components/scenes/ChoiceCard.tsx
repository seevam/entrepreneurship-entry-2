'use client';

import { motion } from 'framer-motion';
import { Choice } from '@/types/scene';
import Image from 'next/image';

interface ChoiceCardProps {
  choice: Choice;
  onClick: () => void;
}

export default function ChoiceCard({ choice, onClick }: ChoiceCardProps) {
  const colorClasses = {
    'duolingo-blue': 'border-[#1CB0F6] hover:border-[#14A1E7] bg-gradient-to-br from-[#1CB0F6]/10 to-[#1CB0F6]/5',
    'duolingo-green': 'border-[#58CC02] hover:border-[#4FB801] bg-gradient-to-br from-[#58CC02]/10 to-[#58CC02]/5',
    'duolingo-yellow': 'border-[#FFC800] hover:border-[#F0B900] bg-gradient-to-br from-[#FFC800]/10 to-[#FFC800]/5',
    'duolingo-red': 'border-[#FF4B4B] hover:border-[#F03C3C] bg-gradient-to-br from-[#FF4B4B]/10 to-[#FF4B4B]/5',
    'duolingo-purple': 'border-[#CE82FF] hover:border-[#BF73F0] bg-gradient-to-br from-[#CE82FF]/10 to-[#CE82FF]/5'
  };

  const iconColorClasses = {
    'duolingo-blue': 'text-[#1CB0F6]',
    'duolingo-green': 'text-[#58CC02]',
    'duolingo-yellow': 'text-[#FFC800]',
    'duolingo-red': 'text-[#FF4B4B]',
    'duolingo-purple': 'text-[#CE82FF]'
  };

  const colorClass = choice.color
    ? colorClasses[choice.color]
    : colorClasses['duolingo-green'];

  const iconColorClass = choice.color
    ? iconColorClasses[choice.color]
    : iconColorClasses['duolingo-green'];

  const arrowBgClasses = {
    'duolingo-blue': 'bg-[#1CB0F6]',
    'duolingo-green': 'bg-[#58CC02]',
    'duolingo-yellow': 'bg-[#FFC800]',
    'duolingo-red': 'bg-[#FF4B4B]',
    'duolingo-purple': 'bg-[#CE82FF]'
  };

  const arrowBgClass = choice.color
    ? arrowBgClasses[choice.color]
    : arrowBgClasses['duolingo-green'];

  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl border-4 ${colorClass} transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-100 group w-full`}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Section */}
      {choice.image && (
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <Image
            src={choice.image}
            alt={choice.text}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 bg-white">
        <div className="flex items-center gap-3 mb-3">
          {choice.icon && (
            <span className={`text-4xl ${iconColorClass}`}>{choice.icon}</span>
          )}
          <h3 className="text-xl font-bold text-gray-900 text-left flex-1">
            {choice.text}
          </h3>
        </div>

        {choice.description && (
          <p className="text-sm text-gray-600 text-left leading-relaxed">
            {choice.description}
          </p>
        )}
      </div>

      {/* Hover Arrow Indicator */}
      <div className={`absolute bottom-4 right-4 w-10 h-10 rounded-full ${arrowBgClass} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        <svg
          className="w-5 h-5 text-white"
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
