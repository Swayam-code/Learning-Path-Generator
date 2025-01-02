'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'bg-white/10' : ''
  }

  return (
    <nav className="backdrop-blur-md bg-black/20 sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            >
              Learning Path Generator
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 ${isActive('/dashboard')}`}
                >
                  Dashboard
                </Link>
                <Link
                  href="/my-paths"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 ${isActive('/my-paths')}`}
                >
                  My Paths
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href="/profile"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/10 ${isActive('/profile')}`}
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden border-t border-white/10">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/dashboard"
            className={`block px-3 py-2 rounded-lg text-base font-medium ${isActive('/dashboard')}`}
          >
            Dashboard
          </Link>
          <Link
            href="/my-paths"
            className={`block px-3 py-2 rounded-lg text-base font-medium ${isActive('/my-paths')}`}
          >
            My Paths
          </Link>
        </div>
      </div>
    </nav>
  )
}
