import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useStore } from '../store/useStore';

export const ProgressGraph: React.FC = () => {
  const { progress } = useStore();

  return (
    <div className="w-full h-64 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Daily Progress</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={progress.dailyProgress}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="words" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};