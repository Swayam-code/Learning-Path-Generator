'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Your Learning Journey Starts Here
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Create a personalized learning path tailored to your goals and schedule
        </p>
      </div>
      <div className="max-w-2xl w-full flex justify-center">
        <button
          onClick={() => router.push('/create')}
          className="px-8 py-4 text-lg font-semibold rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Start Your Learning Path
        </button>
      </div>
    </main>
  )
}
