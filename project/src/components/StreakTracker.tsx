import React from 'react';
import { Flame } from 'lucide-react';
import { format } from 'date-fns';

export default function StreakTracker() {
  const streak = 5; // This would normally come from user data
  const today = new Date();
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Flame className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl font-bold text-gray-800">Your Streak</h2>
      </div>
      
      <div className="text-center">
        <div className="text-5xl font-bold text-orange-500 mb-2">{streak}</div>
        <p className="text-gray-600">days in a row</p>
        <p className="text-sm text-gray-500 mt-4">
          Last played: {format(today, 'MMMM do, yyyy')}
        </p>
      </div>
      
      <div className="mt-6 flex justify-center gap-2">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-full ${
              i < streak ? 'bg-orange-500' : 'bg-gray-200'
            } flex items-center justify-center text-white text-sm`}
          >
            {i < streak && '✓'}
          </div>
        ))}
      </div>
    </div>
  );
}