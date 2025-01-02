'use client'

import { useState } from 'react'
import { UserGoal } from '@/types'
import GoalForm from '@/components/GoalForm'
import { useRouter } from 'next/navigation'
import { mockApi } from '@/utils/mockData'
import toast from 'react-hot-toast'

export default function MachineLearningPath() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (goal: UserGoal) => {
    try {
      setLoading(true)
      const pathData = {
        ...goal,
        category: 'Machine Learning',
        modules: [
          {
            title: 'Mathematics for ML',
            description: 'Linear algebra, calculus, and statistics fundamentals',
            duration: '3 weeks'
          },
          {
            title: 'Python for Data Science',
            description: 'Python programming with NumPy, Pandas, and Matplotlib',
            duration: '3 weeks'
          },
          {
            title: 'ML Algorithms',
            description: 'Understanding and implementing core ML algorithms',
            duration: '4 weeks'
          },
          {
            title: 'Deep Learning',
            description: 'Neural networks and deep learning frameworks',
            duration: '4 weeks'
          }
        ]
      }
      
      await mockApi.createLearningPath(pathData)
      toast.success('Machine Learning path created!')
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
        Create Machine Learning Path
      </h1>
      <div className="max-w-2xl mx-auto">
        <GoalForm onSubmit={handleSubmit} category="Machine Learning" />
      </div>
    </div>
  )
}
