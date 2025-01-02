'use client'

import { useRouter } from 'next/navigation'

const categories = [
  {
    title: 'Web Development',
    description: 'Learn to build modern web applications',
    path: '/create/web-development',
    icon: '🌐'
  },
  {
    title: 'Machine Learning',
    description: 'Master AI and machine learning concepts',
    path: '/create/machine-learning',
    icon: '🤖'
  },
  {
    title: 'Mobile Development',
    description: 'Create apps for iOS and Android',
    path: '/create/mobile-development',
    icon: '📱'
  },
  {
    title: 'Data Science',
    description: 'Analyze and visualize complex data',
    path: '/create/data-science',
    icon: '📊'
  },
  {
    title: 'Cloud Computing',
    description: 'Build and deploy cloud solutions',
    path: '/create/cloud-computing',
    icon: '☁️'
  },
  {
    title: 'DevOps',
    description: 'Automate and optimize development workflows',
    path: '/create/devops',
    icon: '🔄'
  }
]

export default function CreatePath() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Choose Your Learning Path
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <button
            key={category.title}
            onClick={() => router.push(category.path)}
            className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl hover:bg-white/20 transition-all duration-200 text-left group"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mt-1">{category.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
