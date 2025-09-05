import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-900 flex flex-col h-full">
      {/* New Chat Button */}
      <div className="p-4 border-b border-gray-700">
        <button className="w-full bg-transparent border border-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New chat
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          <div className="text-gray-400 text-sm font-medium mb-3">Recent</div>
          {/* Placeholder for chat history */}
          <div className="text-gray-500 text-sm p-2 rounded hover:bg-gray-800 cursor-pointer">
            Sample conversation 1
          </div>
          <div className="text-gray-500 text-sm p-2 rounded hover:bg-gray-800 cursor-pointer">
            Sample conversation 2
          </div>
          <div className="text-gray-500 text-sm p-2 rounded hover:bg-gray-800 cursor-pointer">
            Sample conversation 3
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">U</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-white">User</div>
            <div className="text-xs text-gray-400">user@example.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar