"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PaperAirplaneIcon,
  FaceSmileIcon,
  PaperClipIcon,
  PhoneIcon,
  VideoCameraIcon,
  EllipsisVerticalIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  UserIcon,
  PhotoIcon,
  DocumentIcon,
  MicrophoneIcon,
  MapPinIcon,
  CameraIcon,
  GifIcon,
  PlusIcon,
  XMarkIcon,
  UserPlusIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import EmojiPicker from 'emoji-picker-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'contact'
  timestamp: Date
  status: 'sent' | 'delivered' | 'read'
}

interface Chat {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unreadCount: number
  isOnline: boolean
}

interface ChatInterfaceProps {
  onBack: () => void
  onShowOptions?: () => void
  onShowProfile?: () => void
}

export function ChatInterface({ onBack, onShowOptions, onShowProfile }: ChatInterfaceProps) {
  console.log("ChatInterface component rendered")
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey there! Welcome to our chat app! 👋',
      sender: 'contact',
      timestamp: new Date(Date.now() - 300000),
      status: 'read'
    },
    {
      id: '2',
      text: 'This is amazing! I love the design and smooth animations ✨',
      sender: 'user',
      timestamp: new Date(Date.now() - 240000),
      status: 'read'
    },
    {
      id: '3',
      text: 'Thank you! We built it with modern web technologies like Next.js, Tailwind CSS, and Framer Motion 🚀',
      sender: 'contact',
      timestamp: new Date(Date.now() - 180000),
      status: 'read'
    },
    {
      id: '4',
      text: 'The responsive design works perfectly on all devices! 📱💻',
      sender: 'user',
      timestamp: new Date(Date.now() - 120000),
      status: 'delivered'
    },
    {
      id: '5',
      text: 'Would you like to see more features? We have dark mode, real-time updates, and much more!',
      sender: 'contact',
      timestamp: new Date(Date.now() - 60000),
      status: 'sent'
    }
  ])

  const [chats] = useState<Chat[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Hey! How are you doing today?',
      timestamp: '2m ago',
      unreadCount: 2,
      isOnline: true
    },
    {
      id: '2',
      name: 'Mike Chen',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'The project looks great! 🎉',
      timestamp: '5m ago',
      unreadCount: 0,
      isOnline: true
    },
    {
      id: '3',
      name: 'Design Team',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'New mockups are ready for review',
      timestamp: '1h ago',
      unreadCount: 5,
      isOnline: false
    },
    {
      id: '4',
      name: 'Emma Wilson',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Thanks for the quick response!',
      timestamp: '3h ago',
      unreadCount: 0,
      isOnline: false
    },
    {
      id: '5',
      name: 'Tech Support',
      avatar: '/api/placeholder/40/40',
      lastMessage: 'Your issue has been resolved ✅',
      timestamp: 'Yesterday',
      unreadCount: 0,
      isOnline: true
    }
  ])

  const [newMessage, setNewMessage] = useState('')
  const [selectedChat, setSelectedChat] = useState<Chat>(chats[0])
  const [isMobileView, setIsMobileView] = useState(false)
  const [showChatList, setShowChatList] = useState(true)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingTime, setRecordingTime] = useState(0)
  const [showQuickReplies, setShowQuickReplies] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [showAddContact, setShowAddContact] = useState(false)
  const [newContactName, setNewContactName] = useState('')
  const [newContactPhone, setNewContactPhone] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setShowChatList(true)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage)
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'user',
        timestamp: new Date(),
        status: 'sent'
      }
      setMessages(prev => [...prev, message])
      setNewMessage('')

      // Show typing indicator, then simulate response
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        const responses = [
          "That's awesome! 🎉",
          "I completely agree with you!",
          "Thanks for sharing that 👍",
          "Interesting perspective!",
          "Let me think about that... 🤔",
          "Great point! I hadn't considered that.",
          "Absolutely! You're right on target 🎯"
        ]
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        
        const responseMessage: Message = {
          id: Date.now().toString(),
          text: randomResponse,
          sender: 'contact',
          timestamp: new Date(),
          status: 'sent'
        }
        setMessages(prev => [...prev, responseMessage])
      }, 1500)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
  }

  const handleChatSelect = (chat: Chat) => {
    console.log("Selected chat:", chat.name)
    setSelectedChat(chat)
    if (isMobileView) {
      setShowChatList(false)
    }
  }

  const handleBackToChats = () => {
    console.log("Going back to chat list")
    setShowChatList(true)
  }

  const handleEmojiSelect = (emojiObject: any) => {
    console.log("Emoji selected:", emojiObject.emoji)
    setNewMessage(prev => prev + emojiObject.emoji)
    setShowEmojiPicker(false)
  }

  const handleFileUpload = (type: string) => {
    console.log(`File upload type: ${type}`)
    setShowAttachmentMenu(false)
    // Trigger file input
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      console.log("File selected:", file.name)
      // Simulate file message
      const fileMessage: Message = {
        id: Date.now().toString(),
        text: `📎 ${file.name}`,
        sender: 'user',
        timestamp: new Date(),
        status: 'sent'
      }
      setMessages(prev => [...prev, fileMessage])
    }
  }

  const handleVoiceRecord = () => {
    if (!isRecording) {
      console.log("Starting voice recording")
      setIsRecording(true)
      setRecordingTime(0)
      // Simulate recording timer
      const timer = setInterval(() => {
        setRecordingTime(prev => prev + 1)
      }, 1000)
      
      // Auto-stop after 60 seconds
      setTimeout(() => {
        clearInterval(timer)
        setIsRecording(false)
        setRecordingTime(0)
      }, 60000)
    } else {
      console.log("Stopping voice recording")
      setIsRecording(false)
      setRecordingTime(0)
      // Simulate voice message
      const voiceMessage: Message = {
        id: Date.now().toString(),
        text: `🎵 Voice message (${recordingTime}s)`,
        sender: 'user',
        timestamp: new Date(),
        status: 'sent'
      }
      setMessages(prev => [...prev, voiceMessage])
    }
  }

  const handleLocationShare = () => {
    console.log("Sharing location")
    setShowAttachmentMenu(false)
    const locationMessage: Message = {
      id: Date.now().toString(),
      text: `📍 Current Location - San Francisco, CA`,
      sender: 'user',
      timestamp: new Date(),
      status: 'sent'
    }
    setMessages(prev => [...prev, locationMessage])
  }

  const handleQuickReply = (reply: string) => {
    console.log("Quick reply selected:", reply)
    setNewMessage(reply)
    setShowQuickReplies(false)
  }

  const quickReplies = [
    "👍 Sounds good!",
    "❤️ Love it!",
    "😂 Haha!",
    "🤔 Let me think...",
    "👌 Perfect!",
    "🙏 Thank you!",
    "⚡ Amazing!",
    "🔥 Awesome!"
  ]

  const handleAddContact = () => {
    if (newContactName.trim() && newContactPhone.trim()) {
      console.log(`Adding new contact: ${newContactName} - ${newContactPhone}`)
      // Simulate adding contact to chat list
      const newChat: Chat = {
        id: Date.now().toString(),
        name: newContactName,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(newContactName)}&background=0ea5e9&color=fff`,
        lastMessage: 'Contact added!',
        timestamp: 'now',
        unreadCount: 0,
        isOnline: Math.random() > 0.5
      }
      
      // Add to chats (in real app, this would update global state)
      setNewContactName('')
      setNewContactPhone('')
      setShowAddContact(false)
      
      // Show success message
      console.log("Contact added successfully!")
    }
  }

  const attachmentOptions = [
    { 
      icon: PhotoIcon, 
      label: 'Photo', 
      color: 'text-blue-600', 
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      action: () => handleFileUpload('image')
    },
    { 
      icon: CameraIcon, 
      label: 'Camera', 
      color: 'text-green-600', 
      bg: 'bg-green-100 dark:bg-green-900/30',
      action: () => handleFileUpload('camera')
    },
    { 
      icon: DocumentIcon, 
      label: 'Document', 
      color: 'text-purple-600', 
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      action: () => handleFileUpload('document')
    },
    { 
      icon: MapPinIcon, 
      label: 'Location', 
      color: 'text-red-600', 
      bg: 'bg-red-100 dark:bg-red-900/30',
      action: handleLocationShare
    },
    { 
      icon: GifIcon, 
      label: 'GIF', 
      color: 'text-pink-600', 
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      action: () => handleFileUpload('gif')
    }
  ]

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Chat List Sidebar */}
      <AnimatePresence>
        {(showChatList || !isMobileView) && (
          <motion.div
            initial={isMobileView ? { x: -300 } : false}
            animate={{ x: 0 }}
            exit={isMobileView ? { x: -300 } : {}}
            transition={{ duration: 0.3 }}
            className={`${
              isMobileView ? 'fixed inset-y-0 left-0 z-50' : 'relative'
            } w-full md:w-96 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col`}
          >
            {/* Chat List Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Chats</h1>
                <div className="flex items-center space-x-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          onClick={() => setShowAddContact(true)}
                          variant="ghost" 
                          size="sm"
                          className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-teal-900/20"
                        >
                          <UserPlusIcon className="h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add new contact</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Button
                    onClick={() => {
                      console.log("Back to landing page")
                      onBack()
                    }}
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Add Contact Modal */}
              {showAddContact && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-200 dark:border-teal-800"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <UsersIcon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      <h3 className="font-medium text-teal-900 dark:text-teal-100">Add New Contact</h3>
                    </div>
                    <Button
                      onClick={() => setShowAddContact(false)}
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 text-teal-600 hover:text-teal-800"
                    >
                      <XMarkIcon className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <Input
                      placeholder="Contact name"
                      value={newContactName}
                      onChange={(e) => setNewContactName(e.target.value)}
                      className="bg-white dark:bg-gray-800 border-teal-200 dark:border-teal-700 focus:ring-teal-500"
                    />
                    <Input
                      placeholder="Phone number or username"
                      value={newContactPhone}
                      onChange={(e) => setNewContactPhone(e.target.value)}
                      className="bg-white dark:bg-gray-800 border-teal-200 dark:border-teal-700 focus:ring-teal-500"
                    />
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={handleAddContact}
                        disabled={!newContactName.trim() || !newContactPhone.trim()}
                        className="flex-1 bg-teal-600 hover:bg-teal-700 text-white disabled:opacity-50"
                      >
                        <UserPlusIcon className="h-4 w-4 mr-2" />
                        Add Contact
                      </Button>
                      <Button
                        onClick={() => setShowAddContact(false)}
                        variant="outline"
                        className="border-teal-200 text-teal-700 hover:bg-teal-50"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10 bg-gray-100 dark:bg-gray-700 border-0"
                />
              </div>
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto">
              {chats.map((chat) => (
                <motion.div
                  key={chat.id}
                  whileHover={{ backgroundColor: 'rgba(20, 184, 166, 0.05)' }}
                  onClick={() => handleChatSelect(chat)}
                  className={`p-4 cursor-pointer border-b border-gray-100 dark:border-gray-700 transition-colors ${
                    selectedChat.id === chat.id ? 'bg-teal-50 dark:bg-teal-900/20' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={chat.avatar} alt={chat.name} />
                        <AvatarFallback className="bg-gradient-to-br from-teal-500 to-green-500 text-white">
                          {chat.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      {chat.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                          {chat.name}
                        </p>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {chat.timestamp}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {chat.lastMessage}
                        </p>
                        {chat.unreadCount > 0 && (
                          <Badge className="bg-teal-500 hover:bg-teal-600 text-xs">
                            {chat.unreadCount}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Messages Area */}
      {(!showChatList || !isMobileView) && (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {isMobileView && (
                <Button
                  onClick={handleBackToChats}
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                </Button>
              )}
              
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedChat.avatar} alt={selectedChat.name} />
                  <AvatarFallback className="bg-gradient-to-br from-teal-500 to-green-500 text-white">
                    {selectedChat.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                {selectedChat.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                )}
              </div>
              
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-white">
                  {selectedChat.name}
                </h2>
                <p className="text-sm text-green-500">
                  {selectedChat.isOnline ? 'Online' : 'Last seen recently'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <PhoneIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <VideoCameraIcon className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  console.log("Settings clicked")
                  onShowOptions?.()
                }}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <Cog6ToothIcon className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  console.log("Profile clicked")
                  onShowProfile?.()
                }}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <UserIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`group max-w-xs lg:max-w-md ${
                    message.sender === 'user'
                      ? 'chat-bubble-sent'
                      : 'chat-bubble-received'
                  } relative`}>
                    <p className="text-sm">{message.text}</p>
                    <div className={`flex items-center justify-end mt-1 space-x-1 ${
                      message.sender === 'user' ? 'text-teal-100' : 'text-gray-500'
                    }`}>
                      <span className="text-xs">{formatTime(message.timestamp)}</span>
                      {message.sender === 'user' && (
                        <div className="flex">
                          <div className={`w-1 h-1 rounded-full ${
                            message.status === 'sent' ? 'bg-gray-300' :
                            message.status === 'delivered' ? 'bg-gray-200' : 'bg-blue-400'
                          }`} />
                          <div className={`w-1 h-1 rounded-full ml-0.5 ${
                            message.status === 'delivered' ? 'bg-gray-200' :
                            message.status === 'read' ? 'bg-blue-400' : 'bg-gray-400'
                          }`} />
                        </div>
                      )}
                    </div>

                    {/* Quick Reaction Menu */}
                    <div className={`absolute ${
                      message.sender === 'user' ? '-left-16' : '-right-16'
                    } top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                      <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 px-2 py-1">
                        {['❤️', '😂', '👍', '😮', '😢', '😡'].map((emoji) => (
                          <button
                            key={emoji}
                            onClick={() => {
                              console.log(`Reaction added: ${emoji} to message ${message.id}`)
                            }}
                            className="text-sm hover:scale-125 transition-transform duration-150 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-start"
                >
                  <div className="chat-bubble-received">
                    <div className="flex items-center space-x-1">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                      <span className="text-xs text-gray-500 ml-2">typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {showQuickReplies && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Quick Replies</span>
                <Button
                  onClick={() => setShowQuickReplies(false)}
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                >
                  <XMarkIcon className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <motion.button
                    key={reply}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:border-teal-300 dark:hover:border-teal-700 transition-colors"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Message Input */}
          <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            {/* Voice Recording Bar */}
            {isRecording && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-red-600 dark:text-red-400 font-medium">Recording...</span>
                  </div>
                  <span className="text-red-600 dark:text-red-400 font-mono text-sm">
                    {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, '0')}
                  </span>
                </div>
                <Button
                  onClick={handleVoiceRecord}
                  size="sm"
                  variant="outline"
                  className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-700 dark:text-red-400"
                >
                  Stop & Send
                </Button>
              </motion.div>
            )}

            <div className="flex items-end space-x-3">
              {/* Attachment Menu */}
              <TooltipProvider>
                <Popover open={showAttachmentMenu} onOpenChange={setShowAttachmentMenu}>
                  <PopoverTrigger asChild>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                        >
                          <PlusIcon className="h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Attach file</p>
                      </TooltipContent>
                    </Tooltip>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-4" side="top">
                    <div className="grid grid-cols-3 gap-3">
                      {attachmentOptions.map((option, index) => (
                        <motion.button
                          key={option.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          onClick={option.action}
                          className={`flex flex-col items-center p-3 rounded-xl ${option.bg} hover:scale-105 transition-all duration-200 group`}
                        >
                          <option.icon className={`h-6 w-6 ${option.color} mb-2 group-hover:scale-110 transition-transform`} />
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            {option.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </TooltipProvider>
              
              {/* Message Input Container */}
              <div className="flex-1 relative">
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2 space-x-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => {
                      console.log("Message input changed:", e.target.value)
                      setNewMessage(e.target.value)
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                  
                  {/* Emoji Picker */}
                  <Popover open={showEmojiPicker} onOpenChange={setShowEmojiPicker}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        <FaceSmileIcon className="h-5 w-5" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" side="top">
                      <EmojiPicker
                        onEmojiClick={handleEmojiSelect}
                        width={350}
                        height={400}
                      />
                    </PopoverContent>
                  </Popover>

                  {/* Quick Replies Toggle */}
                  <Button
                    onClick={() => setShowQuickReplies(!showQuickReplies)}
                    variant="ghost"
                    size="sm"
                    className={`text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 ${
                      showQuickReplies ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-600' : ''
                    }`}
                  >
                    ⚡
                  </Button>
                </div>
              </div>

              {/* Voice Recording / Send Button */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    {newMessage.trim() ? (
                      <Button
                        onClick={handleSendMessage}
                        className="bg-teal-500 hover:bg-teal-600 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                      >
                        <PaperAirplaneIcon className="h-5 w-5" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleVoiceRecord}
                        className={`${
                          isRecording 
                            ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                            : 'bg-teal-500 hover:bg-teal-600'
                        } text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105`}
                      >
                        <MicrophoneIcon className="h-5 w-5" />
                      </Button>
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{newMessage.trim() ? 'Send message' : isRecording ? 'Stop recording' : 'Hold to record'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,video/*,.pdf,.doc,.docx,.txt"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>
      )}
    </div>
  )
}