
export type ActiveTab = 'dashboard' | 'tasks' | 'tips' | 'ranking' | 'profile';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  points: number;
  referralCode: string;
  isPremium: boolean;
  financials: {
    earned: number;
    saved: number;
    monthlyGoal: number;
  };
  interests: string[];
  completedTasks: string[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  points: number;
  type: 'video' | 'survey' | 'referral' | 'goal';
}

export interface Tip {
  id: string;
  title: string;
  category: string;
  content: string;
  isPremium: boolean;
  type: 'text' | 'video';
}

export interface LeaderboardEntry {
  rank: number;
  user: {
    name: string;
    avatarUrl: string;
  };
  points: number;
}

export interface PersonalizedTip {
    title: string;
    description: string;
}
