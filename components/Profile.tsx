
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

interface ProfileProps {
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onLogout }) => {
  const { user, setUser } = useContext(UserContext);

  if (!user) return null;

  const handlePremiumToggle = () => {
    setUser(prevUser => prevUser ? { ...prevUser, isPremium: !prevUser.isPremium } : null);
  };

  return (
    <div className="space-y-6 text-center">
      <div className="flex flex-col items-center">
        <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full border-4 border-brand-green shadow-lg" />
        <h2 className="mt-4 text-2xl font-bold text-white">{user.name}</h2>
        <p className="text-brand-gray-200">{user.email}</p>
      </div>

      <div className="bg-brand-gray-800 p-4 rounded-lg">
        <p className="text-sm text-brand-gray-600">Seu código de indicação</p>
        <p className="text-xl font-mono tracking-widest text-brand-green mt-1">{user.referralCode}</p>
      </div>

      {!user.isPremium && (
          <div className="bg-brand-green/10 border border-brand-green p-4 rounded-lg">
            <h3 className="font-bold text-brand-green-light">Desbloqueie o Premium!</h3>
            <p className="text-sm text-brand-gray-200 mt-1">Conteúdo exclusivo e sem anúncios por R$9,90/mês.</p>
            <button 
                onClick={handlePremiumToggle}
                className="mt-3 bg-brand-green text-brand-gray-900 font-bold py-2 px-5 rounded-md hover:bg-brand-green-light transition-colors">
                Virar Premium
            </button>
          </div>
      )}

      {user.isPremium && (
          <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg">
            <h3 className="font-bold text-green-300">Você é Premium! ✨</h3>
            <p className="text-sm text-green-400 mt-1">Aproveite todo o conteúdo exclusivo.</p>
             <button 
                onClick={handlePremiumToggle}
                className="mt-3 bg-red-500 text-white font-bold py-2 px-5 rounded-md hover:bg-red-600 transition-colors">
                Cancelar Assinatura
            </button>
          </div>
      )}

      <button
        onClick={onLogout}
        className="w-full bg-brand-gray-700 text-white font-bold py-3 rounded-md hover:bg-red-500 transition-colors"
      >
        Sair
      </button>
    </div>
  );
};

export default Profile;
