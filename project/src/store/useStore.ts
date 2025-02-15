import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserProgress } from '../types';

interface Store {
  progress: UserProgress;
  addPoints: (points: number) => void;
  updateStreak: () => void;
  addLearnedWord: (wordId: number) => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      progress: {
        points: 0,
        streak: 0,
        lastPlayed: '',
        wordsLearned: [],
        dailyProgress: []
      },
      addPoints: (points) =>
        set((state) => ({
          progress: {
            ...state.progress,
            points: state.progress.points + points
          }
        })),
      updateStreak: () =>
        set((state) => {
          const today = new Date().toISOString().split('T')[0];
          const lastPlayed = state.progress.lastPlayed;
          const isConsecutiveDay =
            new Date(today).getTime() - new Date(lastPlayed).getTime() ===
            86400000;

          return {
            progress: {
              ...state.progress,
              streak: isConsecutiveDay ? state.progress.streak + 1 : 1,
              lastPlayed: today,
              dailyProgress: [
                ...state.progress.dailyProgress,
                { date: today, words: 1 }
              ]
            }
          };
        }),
      addLearnedWord: (wordId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            wordsLearned: [...state.progress.wordsLearned, wordId]
          }
        }))
    }),
    {
      name: 'slang-progress'
    }
  )
);