
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import AIPersonalizedSuggestions from './AIPersonalizedSuggestions';

const Dashboard: React.FC = () => {
  const { user } = useContext(UserContext);

  if (!user) return null;

  const { earned, saved, monthlyGoal } = user.financials;
  const totalProgress = earned + saved;
  const goalPercentage = monthlyGoal > 0 ? (totalProgress / monthlyGoal) * 100 : 0;

  return (
    <div className="space-y-8">
      <div className="bg-brand-gray-800 p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold text-brand-gray-200 mb-1">Progresso Mensal</h2>
        <p className="text-3xl font-bold text-white">R$ {totalProgress.toFixed(2)}</p>
        <p className="text-sm text-brand-gray-600">Meta: R$ {monthlyGoal.toFixed(2)}</p>

        <div className="w-full bg-brand-gray-700 rounded-full h-2.5 my-4">
          <div 
            className="bg-brand-green h-2.5 rounded-full" 
            style={{ width: `${Math.min(goalPercentage, 100)}%` }}>
          </div>
        </div>
        
        <div className="flex justify-between text-sm">
            <div className="text-center">
                <p className="text-brand-gray-600">Ganhos</p>
                <p className="font-semibold text-green-400">R$ {earned.toFixed(2)}</p>
            </div>
            <div className="text-center">
                <p className="text-brand-gray-600">Economias</p>
                <p className="font-semibold text-blue-400">R$ {saved.toFixed(2)}</p>
            </div>
        </div>
      </div>
      
      <AIPersonalizedSuggestions />

    </div>
  );
};

export default Dashboard;
