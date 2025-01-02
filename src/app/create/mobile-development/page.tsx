'use client'

import { useState } from 'react'
import { UserGoal, Module } from '@/types'
import GoalForm from '@/components/GoalForm'
import { useRouter } from 'next/navigation'
import { mockApi } from '@/utils/mockData'
import toast from 'react-hot-toast'

export default function MobileDevelopmentPath() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const modules: Module[] = [
    {
      id: 'mobile-1',
      title: 'Mobile Development Fundamentals',
      description: 'Understanding mobile app architecture and design patterns',
      duration: '3 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'mobile-2',
      title: 'React Native Development',
      description: 'Building cross-platform mobile apps with React Native',
      duration: '4 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'mobile-3',
      title: 'Native APIs and Features',
      description: 'Working with device features and native APIs',
      duration: '3 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'mobile-4',
      title: 'App Deployment',
      description: 'Publishing apps to App Store and Play Store',
      duration: '2 weeks',
      status: 'not-started',
      resources: []
    }
  ]

  const handleSubmit = async (goal: UserGoal) => {
    try {
      setLoading(true)
      const pathData = {
        ...goal,
        category: 'Mobile Development',
        modules: modules
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
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
        Create Mobile Development Path
      </h1>
      <div className="max-w-2xl mx-auto">
        <GoalForm onSubmit={handleSubmit} category="Mobile Development" />
      </div>
    </div>
  )
}
