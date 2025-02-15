export interface SlangWord {
  id: number;
  word: string;
  definition: string;
  example: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

export interface UserProgress {
  points: number;
  streak: number;
  lastPlayed: string;
  wordsLearned: number[];
  dailyProgress: { date: string; words: number }[];
}