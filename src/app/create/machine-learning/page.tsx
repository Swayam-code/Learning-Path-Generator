'use client'

import { useState } from 'react'
import { UserGoal, Module } from '@/types'
import GoalForm from '@/components/GoalForm'
import { useRouter } from 'next/navigation'
import { mockApi } from '@/utils/mockData'
import toast from 'react-hot-toast'

export default function MachineLearningPath() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const modules: Module[] = [
    {
      id: 'ml-1',
      title: 'ML Foundations',
      description: 'Understanding machine learning basics and mathematics',
      duration: '3 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'ml-2',
      title: 'Supervised Learning',
      description: 'Learning classification and regression techniques',
      duration: '4 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'ml-3',
      title: 'Deep Learning',
      description: 'Neural networks and deep learning architectures',
      duration: '4 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'ml-4',
      title: 'Model Deployment',
      description: 'Deploying and monitoring ML models',
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
        category: 'Machine Learning',
        modules: modules
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
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Create Machine Learning Path
      </h1>
      <div className="max-w-2xl mx-auto">
        <GoalForm onSubmit={handleSubmit} category="Machine Learning" />
      </div>
    </div>
  )
}
