'use client'

import { UserStats } from '@/types'

interface DashboardStatsProps {
  stats: UserStats
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl">
      <h2 className="text-xl font-semibold mb-6 text-white">Learning Stats</h2>
      <div className="space-y-6">
        <div>
          <p className="text-gray-400">Total Learning Paths</p>
          <p className="text-3xl font-bold text-white">{stats.totalPaths}</p>
        </div>
        <div>
          <p className="text-gray-400">Completed Paths</p>
          <p className="text-3xl font-bold text-white">{stats.completedPaths}</p>
        </div>
        <div>
          <p className="text-gray-400">Hours Invested</p>
          <p className="text-3xl font-bold text-white">{stats.hoursInvested}</p>
        </div>
        <div>
          <p className="text-gray-400">Achievement Points</p>
          <p className="text-3xl font-bold text-white">{stats.achievementPoints}</p>
        </div>
      </div>
    </div>
  )
}
