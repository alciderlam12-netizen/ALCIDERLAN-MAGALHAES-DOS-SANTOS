
import React from 'react';
import { mockLeaderboard } from '../data/mock';
import { TrophyIcon } from './icons';

const Ranking: React.FC = () => {
  return (
    <div className="bg-brand-gray-800 rounded-xl shadow-lg overflow-hidden">
      <ul className="divide-y divide-brand-gray-700">
        {mockLeaderboard.map((entry, index) => (
          <li key={entry.rank} className="p-4 flex items-center space-x-4">
            <div className="text-lg font-bold w-8 text-center">
              {index === 0 ? <TrophyIcon className="w-6 h-6 text-yellow-400 mx-auto" /> :
               index === 1 ? <TrophyIcon className="w-6 h-6 text-gray-300 mx-auto" /> :
               index === 2 ? <TrophyIcon className="w-6 h-6 text-yellow-600 mx-auto" /> :
               <span className="text-brand-gray-600">{entry.rank}</span>}
            </div>
            <img src={entry.user.avatarUrl} alt={entry.user.name} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <p className="font-semibold text-white">{entry.user.name}</p>
              <p className="text-sm text-brand-gray-200">{entry.points.toLocaleString()} pontos</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
