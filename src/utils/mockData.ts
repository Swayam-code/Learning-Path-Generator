import { UserProfile, LearningPath } from '@/types'

export const subjects = [
  'Web Development',
  'Machine Learning',
  'Mobile Development',
  'Data Science',
  'Cloud Computing',
  'DevOps',
  'Cybersecurity',
  'UI/UX Design',
  'Blockchain',
  'Game Development',
  'Artificial Intelligence',
  'Database Management'
]

const profile: UserProfile = {
  id: 'user1',
  name: 'John Doe',
  email: 'john@example.com',
  bio: 'Passionate about learning and technology',
  interests: ['Web Development', 'Machine Learning', 'Mobile Development'],
  learningPreferences: {
    preferredSubjects: ['Web Development', 'Machine Learning', 'Mobile Development'],
    weeklyHours: 10,
    difficulty: 'intermediate'
  },
  stats: {
    totalPaths: 6,
    completedPaths: 2,
    hoursInvested: 120,
    currentStreak: 15,
    longestStreak: 20,
    achievementPoints: 450
  },
  achievements: [
    {
      id: '1',
      title: 'Fast Learner',
      description: 'Completed first learning path in record time',
      icon: '',
      unlockedAt: new Date('2024-12-15T10:30:00Z')
    },
    {
      id: '2',
      title: 'Dedication',
      description: 'Maintained a 15-day learning streak',
      icon: '',
      unlockedAt: new Date('2024-12-30T15:45:00Z')
    },
    {
      id: '3',
      title: 'Explorer',
      description: 'Started learning paths in 3 different domains',
      icon: '',
      unlockedAt: new Date('2025-01-01T08:20:00Z')
    }
  ]
}

const learningPaths: LearningPath[] = [
  {
    id: 'web-dev',
    goal: 'Web Development',
    description: 'Master modern web development with React, Node.js, and more',
    difficulty: 'intermediate',
    category: 'Web Development',
    modules: [
      {
        id: 'web1',
        title: 'HTML & CSS Fundamentals',
        description: 'Learn the basics of web structure and styling',
        duration: '2 weeks',
        status: 'completed'
      },
      {
        id: 'web2',
        title: 'JavaScript Essentials',
        description: 'Master core JavaScript concepts and DOM manipulation',
        duration: '3 weeks',
        status: 'in-progress'
      }
    ],
    totalHours: 40,
    progress: 65,
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date('2024-12-30')
  },
  {
    id: 'ml-path',
    goal: 'Machine Learning',
    description: 'Learn machine learning algorithms and applications',
    difficulty: 'intermediate',
    category: 'Machine Learning',
    modules: [
      {
        id: 'ml1',
        title: 'Mathematics for ML',
        description: 'Linear algebra, calculus, and statistics fundamentals',
        duration: '3 weeks',
        status: 'in-progress'
      },
      {
        id: 'ml2',
        title: 'Python for Data Science',
        description: 'Python programming with NumPy and Pandas',
        duration: '3 weeks',
        status: 'not-started'
      }
    ],
    totalHours: 50,
    progress: 30,
    createdAt: new Date('2024-12-15'),
    updatedAt: new Date('2024-12-30')
  },
  {
    id: 'mobile-dev',
    goal: 'Mobile Development',
    description: 'Build cross-platform mobile applications',
    difficulty: 'intermediate',
    category: 'Mobile Development',
    modules: [
      {
        id: 'mob1',
        title: 'React Native Basics',
        description: 'Learn the fundamentals of React Native',
        duration: '3 weeks',
        status: 'not-started'
      }
    ],
    totalHours: 35,
    progress: 0,
    createdAt: new Date('2024-12-20'),
    updatedAt: new Date('2024-12-20')
  }
]

let paths = [...learningPaths]

export const mockApi = {
  getProfile: () => Promise.resolve(profile),
  updateProfile: (updates: Partial<UserProfile>) => {
    Object.assign(profile, updates)
    return Promise.resolve(profile)
  },
  getPaths: () => Promise.resolve(paths),
  getPath: (id: string) => {
    const path = paths.find(p => p.id === id)
    return Promise.resolve(path || null)
  },
  createLearningPath: (pathData: Partial<LearningPath>) => {
    const newPath: LearningPath = {
      id: Math.random().toString(36).substr(2, 9),
      goal: pathData.goal || '',
      description: pathData.description || '',
      difficulty: pathData.difficulty || 'beginner',
      category: pathData.category || '',
      modules: pathData.modules || [],
      totalHours: pathData.totalHours || 0,
      progress: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    paths = [newPath, ...paths]
    return Promise.resolve(newPath)
  }
}
