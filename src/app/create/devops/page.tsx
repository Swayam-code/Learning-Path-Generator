'use client'

import { useState } from 'react'
import { UserGoal } from '@/types'
import GoalForm from '@/components/GoalForm'
import { useRouter } from 'next/navigation'
import { mockApi } from '@/utils/mockData'
import toast from 'react-hot-toast'

export default function DevOpsPath() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (goal: UserGoal) => {
    try {
      setLoading(true)
      const pathData = {
        ...goal,
        category: 'DevOps',
        modules: [
          {
            title: 'DevOps Fundamentals',
            description: 'Understanding DevOps principles and practices',
            duration: '2 weeks'
          },
          {
            title: 'CI/CD Pipelines',
            description: 'Building and managing continuous integration/deployment pipelines',
            duration: '3 weeks'
          },
          {
            title: 'Infrastructure as Code',
            description: 'Managing infrastructure using code with tools like Terraform',
            duration: '4 weeks'
          },
          {
            title: 'Monitoring and Observability',
            description: 'Implementing monitoring solutions and observability practices',
            duration: '3 weeks'
          }
        ]
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
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Create DevOps Path
      </h1>
      <div className="max-w-2xl mx-auto">
        <GoalForm onSubmit={handleSubmit} category="DevOps" />
      </div>
    </div>
  )
}
