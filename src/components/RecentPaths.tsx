'use client'

import { useState } from 'react'
import { LearningPath } from '@/types'
import Link from 'next/link'

export default function RecentPaths() {
  const [paths, setPaths] = useState<LearningPath[]>([
    {
      id: '1',
      goal: 'Web Development',
      description: 'Learn modern web development with React and Next.js',
      modules: [],
      totalHours: 40,
      progress: 0,
      difficulty: 'intermediate',
      category: 'Web Development',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      goal: 'Machine Learning',
      description: 'Master machine learning fundamentals and applications',
      modules: [],
      totalHours: 60,
      progress: 0,
      difficulty: 'advanced',
      category: 'Machine Learning',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Recent Learning Paths</h2>
      <div className="space-y-4">
        {paths.map((path) => (
          <Link 
            key={path.id}
            href={`/path/${path.id}`}
            className="block"
          >
            <div className="p-4 border rounded-lg hover:border-blue-500 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{path.goal}</h3>
                  <p className="text-sm text-gray-600">{path.description}</p>
                </div>
                <span className="text-sm px-2 py-1 rounded-full bg-gray-100 text-gray-700 capitalize">
                  {path.difficulty}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{path.totalHours} hours</span>
                <span>{new Date(path.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${path.progress}%` }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
