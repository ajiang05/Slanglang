import { SlangWord, User, QuizQuestion } from './types';

export const slangWords: SlangWord[] = [
  {
    word: "Cap",
    definition: "To lie or fake something",
    example: "That's cap! I don't believe you.",
    category: "Social Media"
  },
  {
    word: "Bussin",
    definition: "Really good, especially referring to food",
    example: "This pizza is bussin!",
    category: "Food"
  },
  {
    word: "No cap",
    definition: "No lie, for real",
    example: "No cap, that was the best movie I've ever seen.",
    category: "Social Media"
  },
  {
    word: "Slay",
    definition: "To do something exceptionally well",
    example: "You really slayed that presentation!",
    category: "Achievement"
  },
  {
    word: "Tea",
    definition: "Gossip or drama",
    example: "Spill the tea about what happened last night!",
    category: "Social"
  }
];

export const mockUsers: User[] = [
  { name: "SlangMaster", score: 1200, streak: 7, lastPlayed: new Date().toISOString() },
  { name: "WordWizard", score: 980, streak: 5, lastPlayed: new Date().toISOString() },
  { name: "LexiconPro", score: 850, streak: 3, lastPlayed: new Date().toISOString() }
];