export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio: string;
  interests: string[];
  learningPreferences: {
    preferredSubjects: string[];
    weeklyHours: number;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
  };
  achievements: Achievement[];
  stats: UserStats;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface UserStats {
  totalPaths: number;
  completedPaths: number;
  hoursInvested: number;
  achievementPoints: number;
  currentStreak: number;
  longestStreak: number;
}

export interface LearningPath {
  id: string;
  goal: string;
  description?: string;
  modules: Module[];
  totalHours: number;
  progress: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: 'not-started' | 'in-progress' | 'completed';
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'exercise' | 'quiz';
  url: string;
  duration?: number;
}

export interface UserGoal {
  goal: string;
  currentLevel: 'beginner' | 'intermediate' | 'advanced';
  timeCommitment: string;
}
