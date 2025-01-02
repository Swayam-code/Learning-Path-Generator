'use client'

import { useState } from 'react'
import { UserGoal, Module } from '@/types'
import GoalForm from '@/components/GoalForm'
import { useRouter } from 'next/navigation'
import { mockApi } from '@/utils/mockData'
import toast from 'react-hot-toast'

export default function WebDevelopmentPath() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const modules: Module[] = [
    {
      id: 'web-1',
      title: 'Frontend Fundamentals',
      description: 'HTML, CSS, and JavaScript basics',
      duration: '3 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'web-2',
      title: 'React Development',
      description: 'Building modern web apps with React',
      duration: '4 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'web-3',
      title: 'Backend Development',
      description: 'Server-side programming and databases',
      duration: '4 weeks',
      status: 'not-started',
      resources: []
    },
    {
      id: 'web-4',
      title: 'Full Stack Integration',
      description: 'Connecting frontend and backend systems',
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
        category: 'Web Development',
        modules: modules
      }
      
      await mockApi.createLearningPath(pathData)
      toast.success('Web Development path created!')
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
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
        Create Web Development Path
      </h1>
      <div className="max-w-2xl mx-auto">
        <GoalForm onSubmit={handleSubmit} category="Web Development" />
      </div>
    </div>
  )
}
