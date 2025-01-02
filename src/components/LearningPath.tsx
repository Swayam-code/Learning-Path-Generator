'use client'

import { useState } from 'react'
import { LearningModule, Resource } from '@/types'

interface LearningPathProps {
  modules: LearningModule[];
  onModuleComplete: (moduleId: number) => void;
}

export default function LearningPath({ modules, onModuleComplete }: LearningPathProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Learning Path</h2>
      <div className="space-y-4">
        {modules.map((module) => (
          <div 
            key={module.id}
            className={`p-4 border rounded-lg ${
              module.completed ? 'bg-green-50 border-green-200' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{module.title}</h3>
              <button
                onClick={() => onModuleComplete(module.id)}
                className={`px-3 py-1 rounded-md ${
                  module.completed
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {module.completed ? 'Completed' : 'Mark Complete'}
              </button>
            </div>
            <p className="text-gray-600 mt-2">{module.description}</p>
            <div className="mt-3">
              <h4 className="font-medium">Resources:</h4>
              <ul className="list-disc list-inside space-y-1">
                {module.resources.map((resource: Resource) => (
                  <li key={resource.id} className="text-gray-700">
                    <a 
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {resource.title}
                    </a>
                    <span className="text-gray-500 text-sm ml-2">
                      ({resource.type} - {resource.duration})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
