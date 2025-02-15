import React, { useState } from "react";
import { useStore } from "../store/useStore";
import { slangWords } from "../data/slangWords";
import { Trophy, Zap } from "lucide-react";

export const SlangGame: React.FC = () => {
  const { progress, addPoints, updateStreak, addLearnedWord } = useStore();
  const [currentWord, setCurrentWord] = useState(
    () => slangWords[Math.floor(Math.random() * slangWords.length)]
  );
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextWord = () => {
    if (!showAnswer) {
      setShowAnswer(true);
      addPoints(currentWord.points);
      updateStreak();
      addLearnedWord(currentWord.id);
    } else {
      setCurrentWord(slangWords[Math.floor(Math.random() * slangWords.length)]);
      setShowAnswer(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="text-yellow-500" />
          <span className="font-bold">{progress.points} Aura points</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="text-orange-500" />
          <span className="font-bold">{progress.streak} day streak</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{currentWord.word}</h2>
        {showAnswer ? (
          <>
            <p className="text-gray-700 mb-2">{currentWord.definition}</p>
            <p className="text-gray-600 italic">"{currentWord.example}"</p>
          </>
        ) : (
          <p className="text-gray-600">Click to reveal the meaning!</p>
        )}
      </div>

      <button
        onClick={handleNextWord}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        {showAnswer ? "Next Word" : "Reveal"}
      </button>
    </div>
  );
};
