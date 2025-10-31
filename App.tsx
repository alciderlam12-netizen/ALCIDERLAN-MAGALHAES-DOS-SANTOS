
import React, { useState, useMemo } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Tips from './components/Tips';
import Ranking from './components/Ranking';
import Profile from './components/Profile';
import BottomNav from './components/BottomNav';
import { User, ActiveTab } from './types';
import { mockUser } from './data/mock';
import { UserContext } from './contexts/UserContext';
import { Header } from './components/Header';


const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');

  const userContextValue = useMemo(() => ({ user, setUser }), [user]);

  const handleLogin = () => {
    setUser(mockUser);
  };
  
  const handleLogout = () => {
    setUser(null);
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'tasks':
        return <Tasks />;
      case 'tips':
        return <Tips />;
      case 'ranking':
        return <Ranking />;
      case 'profile':
        return <Profile onLogout={handleLogout} />;
      default:
        return <Dashboard />;
    }
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <UserContext.Provider value={userContextValue}>
      <div className="min-h-screen bg-brand-gray-900 text-brand-gray-100 font-sans flex flex-col">
        <Header activeTab={activeTab} />
        <main className="flex-grow container mx-auto px-4 py-6 pb-24">
          {renderContent()}
        </main>
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </UserContext.Provider>
  );
};

export default App;
