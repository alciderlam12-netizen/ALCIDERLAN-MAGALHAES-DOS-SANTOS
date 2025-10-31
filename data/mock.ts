
import { User, Task, Tip, LeaderboardEntry } from '../types';

export const mockUser: User = {
  id: 'usr_1',
  name: 'Alex Silva',
  email: 'alex.silva@email.com',
  avatarUrl: 'https://picsum.photos/seed/alex/200',
  points: 1250,
  referralCode: 'ALEX2024',
  isPremium: false,
  financials: {
    earned: 75.50,
    saved: 120.00,
    monthlyGoal: 500,
  },
  interests: ['investimentos', 'tecnologia', 'marketing digital'],
  completedTasks: ['Respondeu pesquisa sobre apps financeiros', 'Assistiu vídeo sobre afiliados'],
};

export const mockTasks: Task[] = [
  { id: 'task_1', title: 'Assista a um vídeo', description: 'Assista a um vídeo de 1 minuto sobre educação financeira.', points: 20, type: 'video' },
  { id: 'task_2', title: 'Pesquisa Rápida', description: 'Responda 5 perguntas sobre seus hábitos de compra.', points: 50, type: 'survey' },
  { id: 'task_3', title: 'Indique um amigo', description: 'Ganhe pontos extras quando seu amigo se cadastrar com seu código.', points: 100, type: 'referral' },
  { id: 'task_4', title: 'Meta Pessoal: Economizar', description: 'Registre uma economia de R$10 hoje.', points: 30, type: 'goal' },
];

export const mockTips: Tip[] = [
  { id: 'tip_1', title: 'Introdução ao Marketing de Afiliados', category: 'Afiliados', content: 'Descubra como ganhar comissões promovendo produtos de outras pessoas.', isPremium: false, type: 'text' },
  { id: 'tip_2', title: '5 Passos para Iniciar no Dropshipping', category: 'Dropshipping', content: 'Um guia rápido em vídeo para começar sua loja online sem estoque.', isPremium: false, type: 'video' },
  { id: 'tip_3', title: 'Estratégias Avançadas de Revenda', category: 'Revenda', content: 'Aprenda a encontrar produtos com alta margem de lucro para revender.', isPremium: true, type: 'text' },
  { id: 'tip_4', title: 'Plataformas de Microtarefas que Pagam', category: 'Microtarefas', content: 'Conheça sites onde você pode ganhar dinheiro fazendo pequenas tarefas online.', isPremium: false, type: 'text' },
];

export const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, user: { name: 'Julia P.', avatarUrl: 'https://picsum.photos/seed/julia/100' }, points: 2540 },
  { rank: 2, user: { name: 'Marcos R.', avatarUrl: 'https://picsum.photos/seed/marcos/100' }, points: 2310 },
  { rank: 3, user: { name: 'Alex Silva', avatarUrl: 'https://picsum.photos/seed/alex/100' }, points: 1250 },
  { rank: 4, user: { name: 'Carla V.', avatarUrl: 'https://picsum.photos/seed/carla/100' }, points: 1190 },
  { rank: 5, user: { name: 'Bruno G.', avatarUrl: 'https://picsum.photos/seed/bruno/100' }, points: 980 },
];
