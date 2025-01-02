'use client'

import { useState, useEffect } from 'react'
import { LearningPath } from '@/types'
import { mockApi } from '@/utils/mockData'

export default function MyPaths() {
  const [paths, setPaths] = useState<LearningPath[]>([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPaths()
  }, [])

  const loadPaths = async () => {
    try {
      const data = await mockApi.getPaths()
      setPaths(data)
    } catch (error) {
      console.error('Error loading paths:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPaths = paths.filter(path => {
    if (filter === 'completed') return path.progress === 100
    if (filter === 'in-progress') return path.progress > 0 && path.progress < 100
    return true
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          My Learning Paths
        </h1>

        <div className="flex flex-wrap gap-2">
          {['all', 'in-progress', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === status
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {filteredPaths.map((path) => (
          <div
            key={path.id}
            onClick={() => window.location.href = `/path/${path.id}`}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/10 hover:border-blue-500/50 transition-all duration-200 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">{path.goal}</h3>
                <p className="text-gray-400 text-sm">{path.description}</p>
              </div>
              <span className="text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                {path.difficulty}
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-400">Progress</span>
                  <span className="text-sm text-gray-400">{path.progress}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full h-2"
                    style={{ width: `${path.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <div>
                  <span className="text-gray-400">Time Required:</span>
                  <span className="text-white ml-2">{path.totalHours} hours</span>
                </div>
                <div>
                  <span className="text-gray-400">Modules:</span>
                  <span className="text-white ml-2">{path.modules.length}</span>
                </div>
              </div>

              <div className="text-xs text-gray-500">
                Last updated: {new Date(path.updatedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPaths.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No learning paths found for the selected filter.</p>
        </div>
      )}
    </div>
  )
}
