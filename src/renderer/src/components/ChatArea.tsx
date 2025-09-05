import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import MessageInput from './MessageInput'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: string
}

const ChatArea: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. How can I help you today?',
      isUser: false,
      timestamp: new Date().toLocaleTimeString()
    }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = (messageText: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date().toLocaleTimeString()
    }

    setMessages(prev => [...prev, newMessage])
    setIsLoading(true)

    // Simulate AI response (placeholder for actual AI integration)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'I received your message: "' + messageText + '". This is a placeholder response. You can integrate with your preferred AI service here.',
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-4">
        <h1 className="text-xl font-semibold text-white">AI Chat</h1>
        <p className="text-sm text-gray-400">Chat with your AI assistant</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-gray-400 text-lg mb-2">Start a conversation</div>
              <div className="text-gray-500 text-sm">Send a message to begin chatting with AI</div>
            </div>
          </div>
        ) : (
          <div className="space-y-0">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            ))}
            {isLoading && (
              <div className="flex gap-4 p-4 bg-gray-700">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium">AI</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white mb-1">AI Assistant</div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input */}
      <MessageInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  )
}

export default ChatArea