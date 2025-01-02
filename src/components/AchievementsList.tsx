'use client'

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  date: string;
  points: number;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Fast Learner',
    description: 'Completed first learning path in record time',
    icon: '🚀',
    date: '2024-12-28',
    points: 50
  },
  {
    id: 2,
    title: 'Consistent Learner',
    description: 'Maintained a learning streak for 7 days',
    icon: '🔥',
    date: '2024-12-25',
    points: 30
  },
  {
    id: 3,
    title: 'Knowledge Explorer',
    description: 'Started learning paths in 3 different domains',
    icon: '🗺️',
    date: '2024-12-20',
    points: 40
  }
]

export default function AchievementsList() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl">{achievement.icon}</div>
              <div>
                <h3 className="font-medium">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(achievement.date).toLocaleDateString()}
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    +{achievement.points} points
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
