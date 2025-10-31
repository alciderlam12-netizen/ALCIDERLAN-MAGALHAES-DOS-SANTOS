
import React from 'react';
import { ActiveTab } from '../types';
import { HomeIcon, CheckSquareIcon, LightbulbIcon, TrophyIcon, UserIcon } from './icons';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Início', icon: HomeIcon },
  { id: 'tasks', label: 'Tarefas', icon: CheckSquareIcon },
  { id: 'tips', label: 'Dicas', icon: LightbulbIcon },
  { id: 'ranking', label: 'Ranking', icon: TrophyIcon },
  { id: 'profile', label: 'Perfil', icon: UserIcon },
] as const;


const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-brand-gray-800 border-t border-brand-gray-700 shadow-lg">
      <div className="container mx-auto flex justify-around">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-full py-2 px-1 text-xs transition-colors duration-200 ${
                isActive ? 'text-brand-green' : 'text-brand-gray-600 hover:text-brand-gray-200'
              }`}
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
