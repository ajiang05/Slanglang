import React from 'react';
import { Trophy } from 'lucide-react';
import { mockUsers } from '../data';

export default function Leaderboard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h2 className="text-2xl font-bold text-gray-800">Leaderboard</h2>
      </div>
      
      <div className="space-y-4">
        {mockUsers.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-gray-500">#{index + 1}</span>
              <div>
                <h3 className="font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-600">🔥 {user.streak} day streak</p>
              </div>
            </div>
            <span className="text-xl font-bold text-purple-600">{user.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}