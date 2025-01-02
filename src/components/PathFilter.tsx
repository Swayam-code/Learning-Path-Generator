'use client'

interface PathFilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function PathFilter({ currentFilter, onFilterChange }: PathFilterProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          currentFilter === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('in-progress')}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          currentFilter === 'in-progress'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        In Progress
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          currentFilter === 'completed'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => onFilterChange('not-started')}
        className={`px-4 py-2 rounded-md text-sm font-medium ${
          currentFilter === 'not-started'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Not Started
      </button>
    </div>
  )
}
