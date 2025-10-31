
import React from 'react';
import { SparklesIcon } from './icons';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-brand-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-center w-full max-w-sm">
        <SparklesIcon className="mx-auto h-16 w-16 text-brand-green" />
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">Desbloqueia Grana</h1>
        <p className="mt-2 text-lg text-brand-gray-200">Sua jornada para a renda extra começa aqui.</p>
        
        <div className="mt-10 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-left text-gray-400">Email (simulado)</label>
            <input 
              type="email" 
              id="email" 
              defaultValue="alex.silva@email.com"
              className="mt-1 block w-full bg-brand-gray-800 border border-brand-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-brand-green focus:border-brand-green"
              readOnly
            />
          </div>
          <div>
            <label htmlFor="password"className="block text-sm font-medium text-left text-gray-400">Senha</label>
            <input 
              type="password" 
              id="password"
              defaultValue="********"
              className="mt-1 block w-full bg-brand-gray-800 border border-brand-gray-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-brand-green focus:border-brand-green"
              readOnly
            />
          </div>
          <button 
            onClick={onLogin}
            className="w-full bg-brand-green text-brand-gray-900 font-bold py-3 px-4 rounded-md hover:bg-brand-green-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-gray-900 focus:ring-brand-green"
          >
            Entrar
          </button>
        </div>
        <p className="mt-8 text-sm text-brand-gray-600">Este é um login simulado para fins de demonstração.</p>
      </div>
    </div>
  );
};

export default Login;
