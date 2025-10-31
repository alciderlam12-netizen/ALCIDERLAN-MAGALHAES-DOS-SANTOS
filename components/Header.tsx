
import React, { useContext } from 'react';
import { ActiveTab } from '../types';
import { UserContext } from '../contexts/UserContext';

interface HeaderProps {
    activeTab: ActiveTab;
}

const tabTitles: Record<ActiveTab, string> = {
    dashboard: "Painel Financeiro",
    tasks: "Tarefas Diárias",
    tips: "Dicas de Renda",
    ranking: "Ranking Semanal",
    profile: "Meu Perfil"
};

export const Header: React.FC<HeaderProps> = ({ activeTab }) => {
    const { user } = useContext(UserContext);

    return (
        <header className="bg-brand-gray-900/80 backdrop-blur-sm sticky top-0 z-10 border-b border-brand-gray-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">{tabTitles[activeTab]}</h1>
                 {user && (
                    <div className="flex items-center space-x-3">
                        <span className="text-brand-green font-semibold">{user.points} pts</span>
                        <img src={user.avatarUrl} alt={user.name} className="w-9 h-9 rounded-full border-2 border-brand-green" />
                    </div>
                )}
            </div>
        </header>
    );
};
