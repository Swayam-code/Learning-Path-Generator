'use client'

import { useState } from 'react'
import { UserGoal } from '@/types'
import GoalForm from '@/components/GoalForm'
import { useRouter } from 'next/navigation'
import { mockApi } from '@/utils/mockData'
import toast from 'react-hot-toast'

export default function MobileDevelopmentPath() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (goal: UserGoal) => {
    try {
      setLoading(true)
      const pathData = {
        ...goal,
        category: 'Mobile Development',
        modules: [
          {
            title: 'Mobile Development Fundamentals',
            description: 'Understanding mobile platforms and architectures',
            duration: '2 weeks'
          },
          {
            title: 'React Native Basics',
            description: 'Building cross-platform mobile apps with React Native',
            duration: '3 weeks'
          },
          {
            title: 'State Management & APIs',
            description: 'Managing app state and integrating APIs',
            duration: '3 weeks'
          },
          {
            title: 'Native Features',
            description: 'Working with device features and app deployment',
            duration: '4 weeks'
          }
        ]
      }
      
      await mockApi.createLearningPath(pathData)
      toast.success('Mobile Development path created!')
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
        Create Mobile Development Path
      </h1>
      <div className="max-w-2xl mx-auto">
        <GoalForm onSubmit={handleSubmit} category="Mobile Development" />
      </div>
    </div>
  )
}
