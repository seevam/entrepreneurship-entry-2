'use client';

import { Scene } from '@/types/scene';

interface SceneContentProps {
  scene: Scene;
}

// Simple markdown bold parser
function parseMarkdown(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Remove the ** markers and make it bold
      const boldText = part.slice(2, -2);
      return <strong key={index} className="font-bold text-gray-900">{boldText}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
}

export default function SceneContent({ scene }: SceneContentProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-100">
      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        {typeof scene.content === 'string' ? (
          <div className="whitespace-pre-line text-gray-800 leading-relaxed">
            {scene.content.split('\n').map((line, lineIndex) => (
              <div key={lineIndex}>
                {parseMarkdown(line)}
              </div>
            ))}
          </div>
        ) : (
          scene.content
        )}
      </div>

      {/* Interactive Element */}
      {scene.interactiveElement && scene.interactiveElement.type === 'stats' && (
        <div className="mt-8 grid grid-cols-2 gap-4">
          {scene.interactiveElement.data.stats.map((stat: any, index: number) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</div>
            </div>
          ))}
        </div>
      )}

      {/* Badge Indicator */}
      {scene.badge && (
        <div className="mt-6 inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Badge Available!
        </div>
      )}
    </div>
  );
}
