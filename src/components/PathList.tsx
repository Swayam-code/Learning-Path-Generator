'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LearningPath } from '@/types'

interface PathListProps {
  filter: string;
}

export default function PathList({ filter }: PathListProps) {
  const [paths, setPaths] = useState<LearningPath[]>([
    {
      id: '1',
      goal: 'Web Development',
      modules: [],
      totalHours: 40,
      progress: 25
    },
    {
      id: '2',
      goal: 'Machine Learning',
      modules: [],
      totalHours: 60,
      progress: 10
    },
    {
      id: '3',
      goal: 'Mobile Development',
      modules: [],
      totalHours: 45,
      progress: 100
    }
  ])

  const filteredPaths = paths.filter(path => {
    if (filter === 'completed') return path.progress === 100
    if (filter === 'in-progress') return path.progress > 0 && path.progress < 100
    if (filter === 'not-started') return path.progress === 0
    return true
  })

  return (
    <div className="space-y-4">
      {filteredPaths.map((path) => (
        <Link
          key={path.id}
          href={`/path/${path.id}`}
          className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">{path.goal}</h3>
              <p className="text-sm text-gray-500">{path.totalHours} hours total</p>
            </div>
            <div className="flex items-center">
              <div className="w-32 bg-gray-200 rounded-full h-2 mr-2">
                <div 
                  className="bg-blue-500 rounded-full h-2" 
                  style={{ width: `${path.progress}%` }}
                />
              </div>
              <span className="text-sm text-gray-600">{path.progress}%</span>
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
