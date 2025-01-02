'use client'

import { useState, useEffect } from 'react'
import { Resource } from '@/types'

interface ResourceListProps {
  pathId: string;
}

export default function ResourceList({ pathId }: ResourceListProps) {
  const [resources, setResources] = useState<Resource[]>([
    {
      id: 1,
      title: 'Introduction to Web Development',
      type: 'course',
      url: 'https://example.com/web-dev',
      duration: '2 hours'
    },
    {
      id: 2,
      title: 'HTML & CSS Basics',
      type: 'video',
      url: 'https://example.com/html-css',
      duration: '1.5 hours'
    },
    {
      id: 3,
      title: 'JavaScript Fundamentals',
      type: 'article',
      url: 'https://example.com/js',
      duration: '30 minutes'
    }
  ])

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Learning Resources</h2>
      <div className="space-y-4">
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{resource.title}</h3>
                <p className="text-sm text-gray-500">
                  {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)} • {resource.duration}
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
