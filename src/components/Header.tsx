'use client'

import { UserCircleIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Learning Path Generator</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-primary">My Paths</a>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-primary">
              <UserCircleIcon className="h-6 w-6" />
              <span>Profile</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
