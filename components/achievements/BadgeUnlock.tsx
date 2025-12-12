'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Badge } from '@/types/badge';

interface BadgeUnlockProps {
  badge: Badge;
  onClose: () => void;
}

export default function BadgeUnlock({ badge, onClose }: BadgeUnlockProps) {
  useEffect(() => {
    // Confetti effect simulation (without canvas-confetti dependency)
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center"
          initial={{ scale: 0.5, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0.5, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Badge Icon */}
          <motion.div
            className="text-8xl mb-4"
            animate={{
              rotate: [0, -10, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ duration: 0.5 }}
          >
            {badge.icon}
          </motion.div>

          {/* Achievement Text */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Achievement Unlocked!
          </h2>

          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: badge.color }}
          >
            {badge.name}
          </h3>

          <p className="text-gray-600 mb-6">
            {badge.celebrationMessage}
          </p>

          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="px-8 py-4 bg-duolingo-green hover:bg-green-600 text-white font-bold rounded-xl border-b-4 border-green-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue Journey
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
