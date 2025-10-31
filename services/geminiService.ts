
import { GoogleGenAI, Type } from "@google/genai";
import { User, PersonalizedTip } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. AI features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getPersonalizedSuggestions = async (user: User): Promise<PersonalizedTip[]> => {
  if (!API_KEY) {
    // Return mock data if API key is not available
    return [
      { title: "Dica Mock 1: Venda Fotos Online", description: "Se você gosta de fotografia, venda suas fotos em sites como Adobe Stock ou Shutterstock." },
      { title: "Dica Mock 2: Crie Conteúdo", description: "Use seu interesse em tecnologia para criar um blog ou canal no YouTube e monetize com anúncios." },
      { title: "Dica Mock 3: Teste de Usabilidade", description: "Participe de testes de usabilidade de sites e aplicativos para ganhar uma renda extra." },
    ];
  }
  
  const prompt = `Você é a 'IA Desbloqueia Grana', uma especialista em finanças pessoais e renda extra no Brasil. Baseado no perfil do usuário, forneça 3 dicas personalizadas, práticas e realistas para ele ganhar ou economizar dinheiro. O perfil do usuário é: {interesses: ['${user.interests.join("', '")}'], tarefas_completadas: ['${user.completedTasks.join("', '")}']}. Fale em português do Brasil.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    title: {
                        type: Type.STRING,
                        description: "O título da dica."
                    },
                    description: {
                        type: Type.STRING,
                        description: "A descrição curta e prática da dica."
                    }
                },
                 required: ["title", "description"]
            }
        },
        temperature: 0.8,
      }
    });
    
    const jsonText = response.text.trim();
    const suggestions: PersonalizedTip[] = JSON.parse(jsonText);
    return suggestions;

  } catch (error) {
    console.error("Error fetching personalized suggestions from Gemini API:", error);
    // Fallback to generic suggestions in case of an API error
    return [
      { title: "Erro na API: Explore Microtarefas", description: "Plataformas como Amazon Mechanical Turk oferecem pequenas tarefas remuneradas." },
      { title: "Erro na API: Responda Pesquisas Online", description: "Sites como Toluna e LifePoints pagam por sua opinião." },
      { title: "Erro na API: Revise seu Orçamento", description: "Use um app de orçamento para identificar onde você pode economizar dinheiro." },
    ];
  }
};
