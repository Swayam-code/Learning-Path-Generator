'use client'

interface Stat {
  label: string;
  value: string | number;
  change: number;
}

const stats: Stat[] = [
  {
    label: 'Total Learning Hours',
    value: '45',
    change: 12
  },
  {
    label: 'Completed Paths',
    value: '3',
    change: 1
  },
  {
    label: 'Achievement Points',
    value: '280',
    change: 50
  },
  {
    label: 'Current Streak',
    value: '7 days',
    change: 2
  }
]

export default function LearningStats() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Learning Statistics</h2>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
            <div className={`flex items-center ${
              stat.change > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change > 0 ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              )}
              <span className="ml-1 text-sm font-medium">
                {Math.abs(stat.change)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
