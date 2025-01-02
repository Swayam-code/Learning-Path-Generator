'use client'

import { useState } from 'react'

export default function PathDetails({ params }: { params: { id: string } }) {
  const [path] = useState({
    id: params.id,
    goal: 'Web Development',
    description: 'A comprehensive path to become a full-stack web developer',
    totalHours: 120,
    progress: 25,
    modules: [
      {
        id: 1,
        title: 'HTML & CSS Fundamentals',
        duration: '20 hours',
        status: 'completed'
      },
      {
        id: 2,
        title: 'JavaScript Basics',
        duration: '30 hours',
        status: 'in-progress'
      },
      {
        id: 3,
        title: 'React Framework',
        duration: '40 hours',
        status: 'not-started'
      },
      {
        id: 4,
        title: 'Backend Development',
        duration: '30 hours',
        status: 'not-started'
      }
    ]
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {path.goal}
        </h1>
        <p className="text-gray-400 text-lg">{path.description}</p>
      </div>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold mb-6 text-white">Learning Modules</h2>
            <div className="space-y-4">
              {path.modules.map((module) => (
                <div
                  key={module.id}
                  className="p-4 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-200"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-white mb-1">{module.title}</h3>
                      <p className="text-sm text-gray-400">{module.duration}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        module.status === 'completed'
                          ? 'bg-green-500/20 text-green-400'
                          : module.status === 'in-progress'
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {module.status.charAt(0).toUpperCase() + module.status.slice(1).replace('-', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold mb-6 text-white">Progress Overview</h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 mb-2">Overall Progress</p>
                <div className="w-full bg-gray-800 rounded-full h-2 mb-1">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full h-2"
                    style={{ width: `${path.progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-400">{path.progress}% Complete</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Time Investment</p>
                <p className="text-3xl font-bold text-white">{path.totalHours} hours</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Status Breakdown</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Completed</span>
                    <span className="text-green-400">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">In Progress</span>
                    <span className="text-blue-400">25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Not Started</span>
                    <span className="text-gray-400">50%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
