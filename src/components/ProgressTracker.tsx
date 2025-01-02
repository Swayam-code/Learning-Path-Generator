'use client'

type ProgressTrackerProps = {
  completed: number;
  total: number;
}

export default function ProgressTracker({ completed, total }: ProgressTrackerProps) {
  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium">Learning Progress</h3>
        <span className="text-primary font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-primary h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-2 text-sm text-gray-600">
        {completed} of {total} modules completed
      </div>
    </div>
  )
}
