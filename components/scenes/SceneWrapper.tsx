'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Scene } from '@/types/scene';
import SceneContent from './SceneContent';
import ChoiceButton from './ChoiceButton';

interface SceneWrapperProps {
  scene: Scene;
  onChoice: (choiceId: string, targetScene: string) => void;
}

export default function SceneWrapper({ scene, onChoice }: SceneWrapperProps) {
  const handleChoice = (choiceId: string, targetScene: string) => {
    onChoice(choiceId, targetScene);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={scene.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6 pb-24"
      >
        {/* Scene Header */}
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            {scene.title}
          </motion.h1>

          {/* Scene Content */}
          <SceneContent scene={scene} />

          {/* Choices */}
          <div className="mt-8 space-y-4">
            {scene.choices.map((choice, index) => (
              <motion.div
                key={choice.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ChoiceButton
                  choice={choice}
                  onClick={() => handleChoice(choice.id, choice.targetScene)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
