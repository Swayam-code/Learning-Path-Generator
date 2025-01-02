'use client'

import { useState } from 'react'
import { UserGoal } from '@/types'
import GoalForm from '@/components/GoalForm'
import { useRouter } from 'next/navigation'
import { mockApi } from '@/utils/mockData'
import toast from 'react-hot-toast'

export default function WebDevelopmentPath() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (goal: UserGoal) => {
    try {
      setLoading(true)
      // Add web development specific path generation
      const pathData = {
        ...goal,
        category: 'Web Development',
        modules: [
          {
            title: 'HTML & CSS Fundamentals',
            description: 'Learn the basics of web structure and styling',
            duration: '2 weeks'
          },
          {
            title: 'JavaScript Essentials',
            description: 'Master core JavaScript concepts and DOM manipulation',
            duration: '3 weeks'
          },
          {
            title: 'Frontend Frameworks',
            description: 'Learn popular frameworks like React or Vue',
            duration: '4 weeks'
          },
          {
            title: 'Backend Development',
            description: 'Build server-side applications with Node.js',
            duration: '4 weeks'
          }
        ]
      }
      
      await mockApi.createLearningPath(pathData)
      toast.success('Web Development learning path created!')
      router.push('/my-paths')
    } catch (error) {
      console.error('Error creating path:', error)
      toast.error('Failed to create learning path')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Create Web Development Path
      </h1>
      <div className="max-w-2xl mx-auto">
        <GoalForm onSubmit={handleSubmit} category="Web Development" />
      </div>
    </div>
  )
}
