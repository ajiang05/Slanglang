import React from "react";
import { SlangGame } from "./components/SlangGame";
import { ProgressGraph } from "./components/ProgressGraph";
import { BookOpen } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Bussin</h1>
          </div>
          <p className="text-gray-600">
            Learn modern slang and track your progress!
          </p>
        </header>

        <div className="grid gap-8">
          <SlangGame />
          <ProgressGraph />
        </div>
      </div>
    </div>
  );
}

export default App;
