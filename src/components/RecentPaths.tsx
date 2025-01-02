'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LearningPath } from '@/types'

export default function RecentPaths() {
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
    }
  ])

  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-semibold mb-6 text-white">Recent Learning Paths</h2>
      <div className="space-y-4">
        {paths.map((path) => (
          <Link 
            key={path.id}
            href={`/path/${path.id}`}
            className="block p-4 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-200"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-white">{path.goal}</h3>
                <p className="text-sm text-gray-400">{path.totalHours} hours total</p>
              </div>
              <div className="flex items-center">
                <div className="w-32 bg-gray-800 rounded-full h-2 mr-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full h-2" 
                    style={{ width: `${path.progress}%` }}
                  />
                </div>
                <span className="text-sm text-gray-400">{path.progress}%</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
