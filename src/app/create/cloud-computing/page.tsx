'use client'

import { useState } from 'react'
import { UserGoal, Module } from '@/types'
import GoalForm from '@/components/GoalForm'
import { useRouter } from 'next/navigation'
import { mockApi } from '@/utils/mockData'
import toast from 'react-hot-toast'

export default function CloudComputingPath() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const modules: Module[] = [
    {
      id: 'cloud-1',
      title: 'Cloud Fundamentals',
      description: 'Understanding cloud concepts and services',
      duration: '2 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'cloud-2',
      title: 'AWS Services',
      description: 'Working with core AWS services',
      duration: '4 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'cloud-3',
      title: 'Cloud Architecture',
      description: 'Designing scalable cloud solutions',
      duration: '3 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'cloud-4',
      title: 'Cloud Security',
      description: 'Implementing cloud security best practices',
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
        category: 'Cloud Computing',
        modules: modules
      }
      
      await mockApi.createLearningPath(pathData)
      toast.success('Cloud Computing path created!')
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
        Create Cloud Computing Path
      </h1>
      <div className="max-w-2xl mx-auto">
        <GoalForm onSubmit={handleSubmit} category="Cloud Computing" />
      </div>
    </div>
  )
}
