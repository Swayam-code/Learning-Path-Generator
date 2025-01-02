'use client'

import Link from 'next/link'

const topics = [
  { id: 1, name: 'Web Development', count: 1250 },
  { id: 2, name: 'Machine Learning', count: 850 },
  { id: 3, name: 'Mobile Development', count: 720 },
  { id: 4, name: 'Data Science', count: 680 },
  { id: 5, name: 'Cloud Computing', count: 450 },
  { id: 6, name: 'DevOps', count: 380 }
]

export default function PopularTopics() {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-semibold mb-6 text-white">Popular Topics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="p-4 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-200 cursor-pointer group"
            onClick={() => {
              window.location.href = `/?topic=${encodeURIComponent(topic.name)}`
            }}
          >
            <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">{topic.name}</h3>
            <p className="text-sm text-gray-400">{topic.count.toLocaleString()} learners</p>
          </div>
        ))}
      </div>
    </div>
  )
}
