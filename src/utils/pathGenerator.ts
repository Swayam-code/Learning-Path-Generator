import { LearningPath, UserGoal, LearningModule } from '@/types'

type PathDatabase = {
  [key: string]: {
    [level in UserGoal['currentLevel']]: LearningModule[]
  }
}

const webDevPath: PathDatabase = {
  'web-development': {
    beginner: [
      {
        id: 1,
        title: 'HTML & CSS Fundamentals',
        description: 'Learn the basics of web structure and styling',
        resources: [
          {
            id: 1,
            title: 'HTML5 Basics',
            type: 'course',
            url: 'https://example.com/html5',
            duration: '2 hours'
          },
          {
            id: 2,
            title: 'CSS Fundamentals',
            type: 'video',
            url: 'https://example.com/css',
            duration: '1.5 hours'
          }
        ],
        completed: false,
        estimatedHours: 10
      },
      {
        id: 2,
        title: 'JavaScript Basics',
        description: 'Introduction to programming with JavaScript',
        resources: [
          {
            id: 3,
            title: 'JavaScript for Beginners',
            type: 'course',
            url: 'https://example.com/js',
            duration: '3 hours'
          }
        ],
        completed: false,
        estimatedHours: 15
      }
    ],
    intermediate: [
      {
        id: 1,
        title: 'Advanced JavaScript',
        description: 'Deep dive into JavaScript concepts',
        resources: [
          {
            id: 1,
            title: 'ES6+ Features',
            type: 'article',
            url: 'https://example.com/es6',
            duration: '30 mins'
          }
        ],
        completed: false,
        estimatedHours: 20
      }
    ],
    advanced: [
      {
        id: 1,
        title: 'Advanced Web Development',
        description: 'Advanced concepts in web development',
        resources: [
          {
            id: 1,
            title: 'Advanced Web Development',
            type: 'course',
            url: 'https://example.com/advanced',
            duration: '5 hours'
          }
        ],
        completed: false,
        estimatedHours: 25
      }
    ]
  }
}

export function generateLearningPath(goal: UserGoal): LearningPath {
  // This is a simple implementation - in a real app, you'd use AI or a more sophisticated algorithm
  const modules = webDevPath['web-development'][goal.currentLevel] || []
  const totalHours = modules.reduce((acc, module) => acc + module.estimatedHours, 0)

  return {
    id: Math.random().toString(36).substr(2, 9),
    goal: goal.goal,
    modules,
    totalHours,
    progress: 0
  }
}
