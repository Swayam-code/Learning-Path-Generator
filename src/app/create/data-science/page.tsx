'use client'

import { useState } from 'react'
import { UserGoal } from '@/types'
import GoalForm from '@/components/GoalForm'
import { useRouter } from 'next/navigation'
import { mockApi } from '@/utils/mockData'
import toast from 'react-hot-toast'

export default function DataSciencePath() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (goal: UserGoal) => {
    try {
      setLoading(true)
      const pathData = {
        ...goal,
        category: 'Data Science',
        modules: [
          {
            title: 'Data Analysis Fundamentals',
            description: 'Statistics and data analysis basics',
            duration: '3 weeks'
          },
          {
            title: 'Data Visualization',
            description: 'Creating effective visualizations with Python',
            duration: '3 weeks'
          },
          {
            title: 'Big Data Processing',
            description: 'Working with large datasets and data pipelines',
            duration: '4 weeks'
          },
          {
            title: 'Advanced Analytics',
            description: 'Predictive modeling and advanced analytics',
            duration: '4 weeks'
          }
        ]
      }
      
      await mockApi.createLearningPath(pathData)
      toast.success('Data Science path created!')
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
        Create Data Science Path
      </h1>
      <div className="max-w-2xl mx-auto">
        <GoalForm onSubmit={handleSubmit} category="Data Science" />
      </div>
    </div>
  )
}
