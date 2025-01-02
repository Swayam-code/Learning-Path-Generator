'use client'

import { useState, useEffect } from 'react'
import { UserProfile, LearningPath } from '@/types'
import { mockApi } from '@/utils/mockData'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import DashboardStats from '@/components/DashboardStats'
import PopularTopics from '@/components/PopularTopics'

export default function Dashboard() {
  const router = useRouter()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [paths, setPaths] = useState<LearningPath[]>([])
  const [loading, setLoading] = useState(true)
  const [activityData, setActivityData] = useState<number[]>(Array.from({ length: 7 }, () => Math.random() * 100))
  const [period, setPeriod] = useState('week')

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      const [profileData, pathsData] = await Promise.all([
        mockApi.getProfile(),
        mockApi.getPaths()
      ])
      setProfile(profileData)
      setPaths(pathsData)
    } catch (error) {
      console.error('Error loading dashboard data:', error)
      toast.error('Failed to load dashboard data')
    } finally {
      setLoading(false)
    }
  }

  const handlePathClick = (path: LearningPath) => {
    router.push(`/path/${path.id}`)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!profile || !paths) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400">Error loading dashboard data</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Dashboard
          </h1>
          <p className="text-gray-400 mt-2">
            Welcome back, {profile.name}! Continue your learning journey.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="text-sm text-gray-400">Current Streak</p>
              <p className="text-lg font-bold text-white">{profile.stats.currentStreak} days</p>
            </div>
          </div>
          <div className="h-8 w-px bg-white/10"></div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <div>
              <p className="text-sm text-gray-400">Achievement Points</p>
              <p className="text-lg font-bold text-white">{profile.stats.achievementPoints}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {paths.map((path) => (
              <div
                key={path.id}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/10 hover:border-blue-500/50 transition-all duration-200 cursor-pointer"
                onClick={() => handlePathClick(path)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-medium text-white">{path.category}</h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">
                    {path.difficulty}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{path.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full h-2"
                        style={{ width: `${path.progress}%` }}
                      />
                    </div>
                    <span className="text-gray-400 text-sm">{path.progress}%</span>
                  </div>
                  <span className="text-gray-400 text-sm">{path.totalHours}h</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-white">Learning Activity</h2>
              <select
                className="p-2 rounded-lg bg-gray-800/50 border border-white/10 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                defaultValue="week"
                onChange={(e) => {
                  const value = e.target.value;
                  let data;
                  switch (value) {
                    case 'month':
                      data = Array.from({ length: 30 }, () => Math.random() * 100);
                      break;
                    case 'year':
                      data = Array.from({ length: 12 }, () => Math.random() * 100);
                      break;
                    default:
                      data = Array.from({ length: 7 }, () => Math.random() * 100);
                  }
                  setActivityData(data);
                  setPeriod(value);
                }}
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <div className="h-64 flex items-end justify-between gap-2">
              {activityData.map((height, i) => (
                <div
                  key={i}
                  className="w-full bg-blue-500/20 rounded-t-lg"
                  style={{
                    height: `${height}%`,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
              {period === 'year' ? (
                <>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </>
              ) : period === 'month' ? (
                Array.from({ length: 30 }, (_, i) => (
                  <span key={i}>{i + 1}</span>
                ))
              ) : (
                <>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </>
              )}
            </div>
          </div>

          <PopularTopics />
        </div>

        <div className="space-y-8">
          <DashboardStats stats={profile.stats} />
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <button
                onClick={() => router.push('/create')}
                className="w-full p-4 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium group-hover:text-white transition-colors">Start New Path</span>
                  <span>→</span>
                </div>
              </button>
              <button
                onClick={() => router.push('/my-paths')}
                className="w-full p-4 rounded-xl bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium group-hover:text-white transition-colors">View All Paths</span>
                  <span>→</span>
                </div>
              </button>
              <button
                onClick={() => router.push('/profile')}
                className="w-full p-4 rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium group-hover:text-white transition-colors">Edit Profile</span>
                  <span>→</span>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Achievements</h2>
            <div className="space-y-4">
              {profile.achievements.slice(0, 3).map((achievement) => (
                <div
                  key={achievement.id}
                  className="p-4 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h3 className="font-medium text-white">{achievement.title}</h3>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
