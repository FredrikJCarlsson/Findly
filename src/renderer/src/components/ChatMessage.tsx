import React from 'react'

interface ChatMessageProps {
  message: string
  isUser: boolean
  timestamp?: string
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <div className={`flex gap-4 p-4 ${isUser ? 'bg-gray-800' : 'bg-gray-700'}`}>
      {/* Avatar */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isUser ? 'bg-blue-600' : 'bg-green-600'
      }`}>
        {isUser ? (
          <span className="text-sm font-medium">U</span>
        ) : (
          <span className="text-sm font-medium">AI</span>
        )}
      </div>

      {/* Message Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium text-white">
            {isUser ? 'You' : 'AI Assistant'}
          </span>
          {timestamp && (
            <span className="text-xs text-gray-400">{timestamp}</span>
          )}
        </div>
        <div className="text-gray-100 whitespace-pre-wrap break-words">
          {message}
        </div>
      </div>
    </div>
  )
}

export default ChatMessage