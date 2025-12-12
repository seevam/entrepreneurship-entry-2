'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { badges } from '@/data/badges';

interface BadgeDisplayProps {
  unlockedBadges: string[];
}

export default function BadgeDisplay({ unlockedBadges }: BadgeDisplayProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Badge Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-duolingo-yellow hover:bg-yellow-400 text-white rounded-full p-4 shadow-lg border-b-4 border-yellow-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          <span className="font-bold">{unlockedBadges.length}</span>
        </div>
      </motion.button>

      {/* Badge Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Badges
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {Object.values(badges).map((badge) => {
                  const isUnlocked = unlockedBadges.includes(badge.id);

                  return (
                    <div
                      key={badge.id}
                      className={`p-6 rounded-2xl border-2 ${
                        isUnlocked
                          ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300'
                          : 'bg-gray-100 border-gray-300 opacity-50'
                      }`}
                    >
                      <div className="text-5xl mb-3">{badge.icon}</div>
                      <h3 className="font-bold text-lg text-gray-900">
                        {badge.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {badge.description}
                      </p>
                      {!isUnlocked && (
                        <div className="mt-2 text-xs text-gray-500">
                          🔒 Locked
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full py-3 bg-duolingo-green hover:bg-green-600 text-white font-bold rounded-xl"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
