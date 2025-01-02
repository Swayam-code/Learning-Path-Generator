'use client'

import { useState } from 'react'
import { UserGoal, Module } from '@/types'
import GoalForm from '@/components/GoalForm'
import { useRouter } from 'next/navigation'
import { mockApi } from '@/utils/mockData'
import toast from 'react-hot-toast'

export default function DevOpsPath() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const modules: Module[] = [
    {
      id: 'devops-1',
      title: 'CI/CD Fundamentals',
      description: 'Understanding continuous integration and deployment',
      duration: '3 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'devops-2',
      title: 'Infrastructure as Code',
      description: 'Learning infrastructure automation and management',
      duration: '4 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'devops-3',
      title: 'Container Orchestration',
      description: 'Working with Docker and Kubernetes',
      duration: '4 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'devops-4',
      title: 'Monitoring and Logging',
      description: 'Implementing monitoring and logging solutions',
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
        category: 'DevOps',
        modules: modules
      }
      
      await mockApi.createLearningPath(pathData)
      toast.success('DevOps path created!')
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
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
        Create DevOps Path
      </h1>
      <div className="max-w-2xl mx-auto">
        <GoalForm onSubmit={handleSubmit} category="DevOps" />
      </div>
    </div>
  )
}
