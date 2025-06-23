// Mock data and utilities for the chat application

export interface Message {
  id: string
  text: string
  sender: 'user' | 'contact'
  timestamp: Date
  status: 'sent' | 'delivered' | 'read'
}

export interface Chat {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unreadCount: number
  isOnline: boolean
}

export const mockChats: Chat[] = [
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
  },
  {
    id: '6',
    name: 'Alice Cooper',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Let\'s schedule a meeting for next week',
    timestamp: '2d ago',
    unreadCount: 1,
    isOnline: false
  },
  {
    id: '7',
    name: 'Dev Team',
    avatar: '/api/placeholder/40/40',
    lastMessage: 'Code review completed successfully 👍',
    timestamp: '3d ago',
    unreadCount: 0,
    isOnline: true
  }
]

export const mockMessages: Message[] = [
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
]

export const getRandomResponse = (): string => {
  const responses = [
    "That's awesome! 🎉",
    "I completely agree with you!",
    "Thanks for sharing that 👍",
    "Interesting perspective!",
    "Let me think about that... 🤔",
    "Great point! I hadn't considered that.",
    "Absolutely! You're right on target 🎯",
    "Wow, that's really cool! ⭐",
    "I love your enthusiasm! 💪",
    "That makes perfect sense 💡",
    "You're totally right about that!",
    "Thanks for the insight! 🙏"
  ]
  return responses[Math.floor(Math.random() * responses.length)]
}

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })
}

export const formatTimestamp = (date: Date): string => {
  const now = new Date()
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
  
  if (diffInMinutes < 1) return 'now'
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`
  
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) return `${diffInHours}h ago`
  
  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays === 1) return 'Yesterday'
  if (diffInDays < 7) return `${diffInDays}d ago`
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}