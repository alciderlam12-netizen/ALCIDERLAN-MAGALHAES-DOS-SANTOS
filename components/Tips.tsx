
import React, { useContext } from 'react';
import { mockTips } from '../data/mock';
import { Tip } from '../types';
import { UserContext } from '../contexts/UserContext';
import { LockIcon } from './icons';

const TipCard: React.FC<{ tip: Tip; isLocked: boolean }> = ({ tip, isLocked }) => (
  <div className={`bg-brand-gray-800 p-4 rounded-lg shadow-md relative overflow-hidden ${isLocked ? 'opacity-60' : ''}`}>
    {isLocked && (
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-10">
           <LockIcon className="w-8 h-8 text-brand-green mb-2" />
           <span className="text-sm font-semibold text-white">Conteúdo Premium</span>
        </div>
    )}
    <span className="text-xs font-semibold bg-brand-green/20 text-brand-green px-2 py-1 rounded-full">{tip.category}</span>
    <h3 className="font-bold text-white mt-2">{tip.title}</h3>
    <p className="text-sm text-brand-gray-200 mt-1">{tip.content}</p>
  </div>
);

const Tips: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="space-y-4">
      {mockTips.map(tip => (
        <TipCard key={tip.id} tip={tip} isLocked={tip.isPremium && !user?.isPremium} />
      ))}
    </div>
  );
};

export default Tips;
