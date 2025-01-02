'use client'

import { useState } from 'react'
import { Module, Resource } from '@/types'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

interface LearningPathDetailsProps {
  modules: Module[];
  onModuleComplete: (moduleId: string) => void;
}

export default function LearningPathDetails({ modules, onModuleComplete }: LearningPathDetailsProps) {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set())

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules)
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId)
    } else {
      newExpanded.add(moduleId)
    }
    setExpandedModules(newExpanded)
  }

  return (
    <div className="space-y-4">
      {modules.map((module) => (
        <div
          key={module.id}
          className={`p-4 border rounded-lg ${
            module.status === 'completed' ? 'bg-green-50 border-green-200' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{module.title}</h3>
                <button
                  onClick={() => onModuleComplete(module.id)}
                  className={`px-3 py-1 rounded-md ${
                    module.status === 'completed'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {module.status === 'completed' ? 'Completed' : 'Mark Complete'}
                </button>
              </div>
              <p className="text-gray-600 mt-2">{module.description}</p>
              {module.duration && (
                <p className="text-gray-500 text-sm mt-1">Duration: {module.duration}</p>
              )}
            </div>
            <button
              onClick={() => toggleModule(module.id)}
              className="ml-4 p-1 hover:bg-gray-100 rounded-full"
            >
              {expandedModules.has(module.id) ? (
                <ChevronUpIcon className="h-5 w-5" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          
          {expandedModules.has(module.id) && module.resources.length > 0 && (
            <div className="mt-4 pl-4 border-l-2 border-gray-200">
              <h4 className="font-medium mb-2">Resources:</h4>
              <ul className="space-y-2">
                {module.resources.map((resource: Resource) => (
                  <li key={resource.id} className="text-gray-700">
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <span>{resource.title}</span>
                      <span className="text-gray-500 text-sm ml-2">
                        ({resource.type}{resource.duration ? ` - ${resource.duration}min` : ''})
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
