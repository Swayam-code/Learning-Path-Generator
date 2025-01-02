'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import type { FC } from 'react'
import { UserGoal } from '@/types'

interface GoalFormProps {
  onSubmit: (goal: UserGoal) => void;
  category: string;
}

const GoalForm: FC<GoalFormProps> = ({ onSubmit, category }) => {
  const [formData, setFormData] = useState<UserGoal>({
    goal: category,
    currentLevel: 'beginner',
    timeCommitment: ''
  })

  const [errors, setErrors] = useState({
    timeCommitment: ''
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      timeCommitment: ''
    }

    const hours = parseInt(formData.timeCommitment)
    if (isNaN(hours) || hours < 1 || hours > 168) {
      newErrors.timeCommitment = 'Please enter a valid number between 1 and 168'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-semibold mb-6 text-center text-white">Set Your Learning Goals</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-200">
            Learning Path Category
          </label>
          <div className="mt-1 p-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white">
            {category}
          </div>
        </div>

        <div>
          <label htmlFor="currentLevel" className="block text-sm font-medium text-gray-200">
            Current Knowledge Level
          </label>
          <select
            id="currentLevel"
            className="mt-1 block w-full p-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={formData.currentLevel}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setFormData({ 
              ...formData, 
              currentLevel: e.target.value as UserGoal['currentLevel']
            })}
            required
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeCommitment" className="block text-sm font-medium text-gray-200">
            Weekly Time Commitment (hours)
          </label>
          <input
            type="number"
            id="timeCommitment"
            min="1"
            max="168"
            className={`mt-1 block w-full p-3 rounded-xl bg-gray-800/50 border ${
              errors.timeCommitment ? 'border-red-500' : 'border-gray-600'
            } text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
            value={formData.timeCommitment}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormData({ ...formData, timeCommitment: e.target.value })
              if (errors.timeCommitment) setErrors({ ...errors, timeCommitment: '' })
            }}
            placeholder="e.g., 10"
            required
          />
          {errors.timeCommitment && (
            <p className="mt-1 text-sm text-red-400">{errors.timeCommitment}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Create Learning Path
        </button>
      </form>
    </div>
  )
}

export default GoalForm
