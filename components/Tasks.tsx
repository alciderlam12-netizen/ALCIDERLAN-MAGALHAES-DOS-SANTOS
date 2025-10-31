
import React from 'react';
import { mockTasks } from '../data/mock';
import { CheckSquareIcon } from './icons';

const TaskCard: React.FC<{ title: string, description: string, points: number }> = ({ title, description, points }) => (
  <div className="bg-brand-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between space-x-4">
    <div className="flex-1">
      <h3 className="font-bold text-white">{title}</h3>
      <p className="text-sm text-brand-gray-200 mt-1">{description}</p>
    </div>
    <button className="bg-brand-green text-brand-gray-900 font-bold py-2 px-4 rounded-md text-sm hover:bg-brand-green-light transition-colors">
      +{points} pts
    </button>
  </div>
);

const Tasks: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg text-center">
          <h3 className="font-bold text-yellow-300">Anúncio Recompensado (Simulado)</h3>
          <p className="text-sm text-yellow-400 mt-1">Assista a um anúncio para ganhar 15 pontos extras!</p>
          <button className="mt-2 bg-yellow-500 text-black font-semibold py-1 px-3 rounded text-sm">Assistir Agora</button>
      </div>

      {mockTasks.map(task => (
        <TaskCard key={task.id} title={task.title} description={task.description} points={task.points} />
      ))}
    </div>
  );
};

export default Tasks;
