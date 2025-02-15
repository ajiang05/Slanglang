export interface SlangWord {
  word: string;
  definition: string;
  example: string;
  category: string;
}

export interface User {
  name: string;
  score: number;
  streak: number;
  lastPlayed: string;
}

export interface QuizQuestion {
  word: SlangWord;
  options: string[];
  correctAnswer: string;
}