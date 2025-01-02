'use client'

import { useState } from 'react'
import { UserGoal, Module } from '@/types'
import GoalForm from '@/components/GoalForm'
import { useRouter } from 'next/navigation'
import { mockApi } from '@/utils/mockData'
import toast from 'react-hot-toast'

export default function DataSciencePath() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const modules: Module[] = [
    {
      id: 'ds-1',
      title: 'Data Analysis Fundamentals',
      description: 'Learn basic data analysis techniques and tools',
      duration: '3 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'ds-2',
      title: 'Statistical Methods',
      description: 'Understanding statistical concepts and their applications',
      duration: '4 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'ds-3',
      title: 'Machine Learning Basics',
      description: 'Introduction to machine learning algorithms',
      duration: '4 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'ds-4',
      title: 'Data Visualization',
      description: 'Creating effective data visualizations',
      duration: '3 weeks',
      status: 'not-started',
      resources: []
    }
  ]

  const handleSubmit = async (goal: UserGoal) => {
    try {
      setLoading(true)
      const pathData = {
        ...goal,
        category: 'Data Science',
        modules: modules
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
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
        Create Data Science Path
      </h1>
      <div className="max-w-2xl mx-auto">
        <GoalForm onSubmit={handleSubmit} category="Data Science" />
      </div>
    </div>
  )
}
