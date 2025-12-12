'use client';

import { Scene } from '@/types/scene';
import Image from 'next/image';
import { useState } from 'react';

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

      {/* Interactive Element - Stats */}
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

      {/* Interactive Element - External Links */}
      {scene.interactiveElement && scene.interactiveElement.type === 'links' && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {scene.interactiveElement.data.links.map((link: any, index: number) => {
            const colorClasses = {
              'duolingo-blue': 'bg-gradient-to-br from-[#1CB0F6] to-[#14A1E7] hover:from-[#14A1E7] hover:to-[#0D8ECE] border-[#0D8ECE]',
              'duolingo-green': 'bg-gradient-to-br from-[#58CC02] to-[#4FB801] hover:from-[#4FB801] hover:to-[#46A302] border-[#46A302]',
              'duolingo-yellow': 'bg-gradient-to-br from-[#FFC800] to-[#F0B900] hover:from-[#F0B900] hover:to-[#E0A900] border-[#E0A900]',
              'duolingo-red': 'bg-gradient-to-br from-[#FF4B4B] to-[#F03C3C] hover:from-[#F03C3C] hover:to-[#E02C2C] border-[#E02C2C]',
              'duolingo-purple': 'bg-gradient-to-br from-[#CE82FF] to-[#BF73F0] hover:from-[#BF73F0] hover:to-[#B064E0] border-[#B064E0]'
            };

            const colorClass = link.color && colorClasses[link.color as keyof typeof colorClasses]
              ? colorClasses[link.color as keyof typeof colorClasses]
              : colorClasses['duolingo-blue'];

            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${colorClass} border-b-4 text-white rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-100 group flex items-center justify-between`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{link.icon}</span>
                  <div>
                    <div className="text-xl font-bold">{link.label}</div>
                    <div className="text-sm opacity-90 mt-1">{link.description}</div>
                  </div>
                </div>
                <svg
                  className="w-6 h-6 flex-shrink-0 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            );
          })}
        </div>
      )}

      {/* Interactive Element - Product Showcase */}
      {scene.interactiveElement && scene.interactiveElement.type === 'showcase' && (
        <div className="mt-8 space-y-8">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scene.interactiveElement.data.images.map((imageUrl: string, index: number) => (
              <div
                key={index}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group cursor-pointer bg-gray-100"
              >
                <Image
                  src={imageUrl}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* External Links */}
          {scene.interactiveElement.data.links && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scene.interactiveElement.data.links.map((link: any, index: number) => {
                const colorClasses = {
                  'duolingo-blue': 'bg-gradient-to-br from-[#1CB0F6] to-[#14A1E7] hover:from-[#14A1E7] hover:to-[#0D8ECE] border-[#0D8ECE]',
                  'duolingo-green': 'bg-gradient-to-br from-[#58CC02] to-[#4FB801] hover:from-[#4FB801] hover:to-[#46A302] border-[#46A302]',
                  'duolingo-yellow': 'bg-gradient-to-br from-[#FFC800] to-[#F0B900] hover:from-[#F0B900] hover:to-[#E0A900] border-[#E0A900]',
                  'duolingo-red': 'bg-gradient-to-br from-[#FF4B4B] to-[#F03C3C] hover:from-[#F03C3C] hover:to-[#E02C2C] border-[#E02C2C]',
                  'duolingo-purple': 'bg-gradient-to-br from-[#CE82FF] to-[#BF73F0] hover:from-[#BF73F0] hover:to-[#B064E0] border-[#B064E0]'
                };

                const colorClass = link.color && colorClasses[link.color as keyof typeof colorClasses]
                  ? colorClasses[link.color as keyof typeof colorClasses]
                  : colorClasses['duolingo-blue'];

                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${colorClass} border-b-4 text-white rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-100 group flex items-center justify-between`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{link.icon}</span>
                      <div>
                        <div className="text-xl font-bold">{link.label}</div>
                        <div className="text-sm opacity-90 mt-1">{link.description}</div>
                      </div>
                    </div>
                    <svg
                      className="w-6 h-6 flex-shrink-0 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                );
              })}
            </div>
          )}
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
