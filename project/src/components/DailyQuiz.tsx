import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
import { slangWords } from '../data';
import type { QuizQuestion } from '../types';

export default function DailyQuiz() {
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const randomWord = slangWords[Math.floor(Math.random() * slangWords.length)];
    const wrongAnswers = slangWords
      .filter(w => w.word !== randomWord.word)
      .map(w => w.definition)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    const options = [...wrongAnswers, randomWord.definition].sort(() => Math.random() - 0.5);
    
    setQuestion({
      word: randomWord,
      options,
      correctAnswer: randomWord.definition
    });
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswered(true);
  };

  if (!question) return null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Brain className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">Daily Slang Quiz</h2>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What does "{question.word.word}" mean?</h3>
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !answered && handleAnswer(option)}
              className={`p-4 rounded-lg text-left transition-colors ${
                answered
                  ? option === question.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : option === selectedAnswer
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-100'
                  : 'bg-gray-100 hover:bg-gray-200'
              } border-2 ${
                answered && option === selectedAnswer ? 'border-current' : 'border-transparent'
              }`}
              disabled={answered}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {answered && (
        <div className="mt-4">
          <p className="text-lg mb-2">
            <span className="font-bold">Example:</span> {question.word.example}
          </p>
          <button
            onClick={() => {
              setAnswered(false);
              setSelectedAnswer("");
              generateQuestion();
            }}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}