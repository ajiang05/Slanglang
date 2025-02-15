import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';
import { slangWords } from '../data';

export default function RandomSlang() {
  const [currentWord, setCurrentWord] = useState(slangWords[0]);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * slangWords.length);
    setCurrentWord(slangWords[randomIndex]);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Shuffle className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-800">Random Slang</h2>
        </div>
        <button
          onClick={getRandomWord}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          New Word
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{currentWord.word}</h3>
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
            {currentWord.category}
          </span>
        </div>
        <p className="text-gray-700">{currentWord.definition}</p>
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Example:</h4>
          <p className="text-gray-600 italic">"{currentWord.example}"</p>
        </div>
      </div>
    </div>
  );
}