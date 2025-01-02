'use client'

import { useState } from 'react'
import { LearningPath } from '@/types'
import Link from 'next/link'

interface PathListProps {
  filter?: string;
}

export default function PathList({ filter }: PathListProps) {
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
    },
    {
      id: '3',
      goal: 'Mobile Development',
      description: 'Build mobile apps with React Native and Flutter',
      modules: [],
      totalHours: 45,
      progress: 0,
      difficulty: 'beginner',
      category: 'Mobile Development',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])

  const filteredPaths = filter
    ? paths.filter((path) => path.category.toLowerCase().includes(filter.toLowerCase()))
    : paths

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPaths.map((path) => (
        <Link 
          key={path.id}
          href={`/path/${path.id}`}
          className="block"
        >
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{path.goal}</h3>
            <p className="text-gray-600 mb-4">{path.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{path.totalHours} hours</span>
              <span className="capitalize">{path.difficulty}</span>
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${path.progress}%` }}
              />
            </div>
          </div>
        </Link>
      ))}
      {filteredPaths.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No learning paths found for the selected filter.
        </div>
      )}
    </div>
  )
}
