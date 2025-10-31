
import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { getPersonalizedSuggestions } from '../services/geminiService';
import { PersonalizedTip } from '../types';
import { SparklesIcon } from './icons';

const AIPersonalizedSuggestions: React.FC = () => {
  const { user } = useContext(UserContext);
  const [suggestions, setSuggestions] = useState<PersonalizedTip[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchSuggestions = async () => {
    if (!user) return;
    setIsLoading(true);
    setError(null);
    try {
      const result = await getPersonalizedSuggestions(user);
      setSuggestions(result);
    } catch (err) {
      setError('Não foi possível buscar as sugestões. Tente novamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-brand-gray-800 p-6 rounded-xl shadow-lg">
      <div className="flex items-center">
        <SparklesIcon className="w-6 h-6 text-brand-green mr-3" />
        <h2 className="text-lg font-semibold text-white">Dicas da IA para Você</h2>
      </div>
      
      {suggestions.length === 0 && !isLoading && (
         <div className="text-center py-4">
            <p className="text-brand-gray-200 mb-4">Receba dicas personalizadas com base no seu perfil para acelerar seus ganhos.</p>
            <button
                onClick={handleFetchSuggestions}
                disabled={isLoading}
                className="bg-brand-green text-brand-gray-900 font-bold py-2 px-5 rounded-md hover:bg-brand-green-light transition-colors disabled:opacity-50"
            >
                Gerar Minhas Dicas
            </button>
         </div>
      )}

      {isLoading && <p className="text-center py-4 text-brand-gray-200 animate-pulse">Analisando seu perfil...</p>}
      
      {error && <p className="text-center py-4 text-red-400">{error}</p>}

      {suggestions.length > 0 && (
        <div className="mt-4 space-y-3">
          {suggestions.map((tip, index) => (
            <div key={index} className="bg-brand-gray-900/50 p-3 rounded-lg">
              <h3 className="font-bold text-brand-green-light">{tip.title}</h3>
              <p className="text-sm text-brand-gray-200">{tip.description}</p>
            </div>
          ))}
          <button 
             onClick={handleFetchSuggestions}
             disabled={isLoading}
             className="w-full text-sm mt-4 text-brand-green hover:underline">
                Gerar novas dicas
          </button>
        </div>
      )}
    </div>
  );
};

export default AIPersonalizedSuggestions;
