import React from 'react';
import { BookOpen } from 'lucide-react';
import DailyQuiz from './components/DailyQuiz';
import Leaderboard from './components/Leaderboard';
import RandomSlang from './components/RandomSlang';
import StreakTracker from './components/StreakTracker';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-purple-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <BookOpen className="w-8 h-8" />
          <h1 className="text-3xl font-bold">SlangMaster</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <DailyQuiz />
            <RandomSlang />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <StreakTracker />
            <Leaderboard />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 SlangMaster. Learn slang, stay current.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;