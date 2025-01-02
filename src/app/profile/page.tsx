'use client'

import { useState, useEffect } from 'react'
import { UserProfile } from '@/types'
import { mockApi } from '@/utils/mockData'
import { Toaster, toast } from 'react-hot-toast'

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [newSubject, setNewSubject] = useState('')
  const [editedProfile, setEditedProfile] = useState<UserProfile | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadProfile()
  }, [])

  const loadProfile = async () => {
    try {
      setError(null)
      const data = await mockApi.getProfile()
      setProfile(data)
      setEditedProfile(JSON.parse(JSON.stringify(data)))
    } catch (err) {
      setError('Failed to load profile')
      console.error('Error loading profile:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = () => {
    if (!profile) return
    setEditMode(true)
    setEditedProfile(JSON.parse(JSON.stringify(profile)))
  }

  const handleSave = async () => {
    if (!editedProfile) return

    try {
      setSaving(true)
      setError(null)
      const updated = await mockApi.updateProfile(editedProfile)
      setProfile(updated)
      setEditMode(false)
      toast.success('Profile updated successfully')
    } catch (err) {
      setError('Failed to save profile')
      console.error('Error saving profile:', err)
      toast.error('Failed to save profile')
    } finally {
      setSaving(false)
    }
  }

  const handleCancel = () => {
    if (!profile) return
    setEditMode(false)
    setEditedProfile(JSON.parse(JSON.stringify(profile)))
    setNewSubject('')
  }

  const handleChange = (field: keyof UserProfile, value: any) => {
    if (!editedProfile) return
    setEditedProfile({
      ...editedProfile,
      [field]: value
    })
  }

  const handleAddSubject = () => {
    if (!editedProfile || !newSubject.trim()) return
    
    const subject = newSubject.trim()
    const currentSubjects = editedProfile.learningPreferences.preferredSubjects
    
    if (currentSubjects.includes(subject)) {
      toast.error('Subject already exists')
      return
    }

    setEditedProfile({
      ...editedProfile,
      learningPreferences: {
        ...editedProfile.learningPreferences,
        preferredSubjects: [...currentSubjects, subject]
      }
    })
    setNewSubject('')
    toast.success('Subject added')
  }

  const handleRemoveSubject = (subject: string) => {
    if (!editedProfile) return
    
    setEditedProfile({
      ...editedProfile,
      learningPreferences: {
        ...editedProfile.learningPreferences,
        preferredSubjects: editedProfile.learningPreferences.preferredSubjects.filter(s => s !== subject)
      }
    })
    toast.success('Subject removed')
  }

  const getSubjects = (prof: UserProfile) => {
    return prof.learningPreferences.preferredSubjects
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-red-400">{error}</p>
        <button
          onClick={loadProfile}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </div>
    )
  }

  if (!profile || !editedProfile) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">Error loading profile</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Toaster position="top-right" />
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Profile
        </h1>
        {!editMode ? (
          <button
            onClick={handleEdit}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
          >
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={handleCancel}
              className="px-4 py-2 rounded-lg bg-gray-500 text-white font-medium hover:bg-gray-600 transition-colors"
              disabled={saving}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-white">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              {editMode ? (
                <input
                  type="text"
                  value={editedProfile.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your name"
                  disabled={saving}
                />
              ) : (
                <p className="text-white">{profile.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              {editMode ? (
                <input
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email"
                  disabled={saving}
                />
              ) : (
                <p className="text-white">{profile.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Bio</label>
              {editMode ? (
                <textarea
                  value={editedProfile.bio}
                  onChange={(e) => handleChange('bio', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Tell us about yourself"
                  disabled={saving}
                />
              ) : (
                <p className="text-white whitespace-pre-wrap">{profile.bio}</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-white">Preferred Subjects</h2>
          <div className="space-y-4">
            {editMode && (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSubject()}
                  placeholder="Add a subject"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800/50 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  disabled={saving}
                />
                <button
                  onClick={handleAddSubject}
                  className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors disabled:opacity-50"
                  disabled={!newSubject.trim() || saving}
                >
                  Add
                </button>
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {getSubjects(editMode ? editedProfile : profile).map((subject) => (
                <div
                  key={subject}
                  className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 flex items-center gap-2"
                >
                  {subject}
                  {editMode && (
                    <button
                      onClick={() => handleRemoveSubject(subject)}
                      className="text-blue-400 hover:text-blue-300"
                      disabled={saving}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              {getSubjects(editMode ? editedProfile : profile).length === 0 && (
                <p className="text-gray-400 text-sm">No subjects added yet</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-white">Learning Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400">Total Learning Paths</p>
              <p className="text-3xl font-bold text-white">{profile.stats.totalPaths}</p>
            </div>
            <div>
              <p className="text-gray-400">Completed Paths</p>
              <p className="text-3xl font-bold text-white">{profile.stats.completedPaths}</p>
            </div>
            <div>
              <p className="text-gray-400">Hours Invested</p>
              <p className="text-3xl font-bold text-white">{profile.stats.hoursInvested}</p>
            </div>
            <div>
              <p className="text-gray-400">Current Streak</p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-white">{profile.stats.currentStreak}</p>
                <p className="text-gray-400">days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-white">Achievements</h2>
          <div className="space-y-4">
            {profile.achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="p-4 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <h3 className="font-medium text-white">{achievement.title}</h3>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {achievement.unlockedAt ? (
                        `Earned ${achievement.unlockedAt.toLocaleDateString()}`
                      ) : (
                        'Not yet earned'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
