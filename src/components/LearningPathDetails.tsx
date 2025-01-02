'use client'

import { useState } from 'react'
import { LearningPath } from '@/types'

interface LearningPathDetailsProps {
  path: LearningPath;
}

export default function LearningPathDetails({ path }: LearningPathDetailsProps) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">{path.goal}</h1>
          <p className="text-gray-600">Total Time: {path.totalHours} hours</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          {isEditing ? 'Save Changes' : 'Edit Path'}
        </button>
      </div>

      <div className="space-y-6">
        {path.modules.map((module) => (
          <div 
            key={module.id}
            className={`p-4 border rounded-lg ${
              module.completed ? 'bg-green-50 border-green-200' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{module.title}</h3>
              <span className="text-sm text-gray-500">{module.estimatedHours} hours</span>
            </div>
            <p className="text-gray-600 mt-2">{module.description}</p>
            {isEditing ? (
              <div className="mt-2">
                <button
                  className="text-sm text-red-500 hover:text-red-600"
                  onClick={() => {
                    // Handle module deletion
                  }}
                >
                  Remove Module
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {isEditing && (
        <button
          className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          onClick={() => {
            // Handle adding new module
          }}
        >
          + Add New Module
        </button>
      )}
    </div>
  )
}
