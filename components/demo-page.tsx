"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ArrowLeftIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'

interface DemoPageProps {
  onBack: () => void
  onStartChat: () => void
}

export default function DemoPage({ onBack, onStartChat }: DemoPageProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentDemo, setCurrentDemo] = useState(0)

  console.log("Demo page loaded", { isPlaying, currentDemo })

  // Simulate video progress
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 200)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  const demoFeatures = [
    {
      title: "Real-time Messaging",
      description: "See messages appear instantly as you type",
      icon: ChatBubbleLeftRightIcon,
      color: "from-blue-500 to-teal-500",
      duration: "2:30"
    },
    {
      title: "Mobile Experience",
      description: "Fully responsive design for all devices",
      icon: DevicePhoneMobileIcon,
      color: "from-purple-500 to-pink-500",
      duration: "1:45"
    },
    {
      title: "Desktop Features",
      description: "Advanced features for power users",
      icon: ComputerDesktopIcon,
      color: "from-green-500 to-emerald-500",
      duration: "3:15"
    }
  ]

  const highlights = [
    { time: "0:15", title: "User Interface Overview", description: "Clean, modern design" },
    { time: "0:45", title: "Message Sending", description: "Instant delivery with animations" },
    { time: "1:20", title: "File Sharing", description: "Drag & drop media sharing" },
    { time: "2:00", title: "Group Chats", description: "Multi-user conversations" },
    { time: "2:30", title: "Dark Mode", description: "Beautiful theme switching" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => {
                console.log("Back to landing page clicked")
                onBack()
              }}
              variant="ghost"
              size="sm"
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold hero-text-gradient flex items-center">
                <PlayIcon className="h-8 w-8 mr-3 text-purple-600" />
                Interactive Demo
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Experience our chat platform in action
              </p>
            </div>
          </div>
          
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            🎬 Live Demo
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-0 overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-neumorphic">
              {/* Video Container */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                {/* Simulated Video Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20" />
                
                {/* Play/Pause Overlay */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="relative z-10 text-center"
                >
                  <Button
                    onClick={() => {
                      console.log(`${isPlaying ? 'Pausing' : 'Playing'} demo video`)
                      setIsPlaying(!isPlaying)
                    }}
                    size="lg"
                    className="w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/30 mb-4"
                  >
                    {isPlaying ? (
                      <PauseIcon className="h-8 w-8" />
                    ) : (
                      <PlayIcon className="h-8 w-8 ml-1" />
                    )}
                  </Button>
                  
                  {!isPlaying && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-white"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {demoFeatures[currentDemo].title}
                      </h3>
                      <p className="text-white/80">
                        {demoFeatures[currentDemo].description}
                      </p>
                    </motion.div>
                  )}
                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center space-x-4 text-white">
                    <span className="text-sm font-mono">
                      {Math.floor((progress * 3.5) / 60)}:{String(Math.floor((progress * 3.5) % 60)).padStart(2, '0')}
                    </span>
                    <Progress value={progress} className="flex-1 h-2" />
                    <span className="text-sm font-mono">
                      {demoFeatures[currentDemo].duration}
                    </span>
                    <Button
                      onClick={() => {
                        console.log(`${isMuted ? 'Unmuting' : 'Muting'} demo audio`)
                        setIsMuted(!isMuted)
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                    >
                      {isMuted ? (
                        <SpeakerXMarkIcon className="h-5 w-5" />
                      ) : (
                        <SpeakerWaveIcon className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Demo Navigation */}
              <div className="p-6">
                <div className="flex space-x-2 mb-4">
                  {demoFeatures.map((demo, index) => (
                    <Button
                      key={demo.title}
                      onClick={() => {
                        console.log(`Switching to demo: ${demo.title}`)
                        setCurrentDemo(index)
                        setProgress(0)
                        setIsPlaying(false)
                      }}
                      variant={currentDemo === index ? "default" : "outline"}
                      size="sm"
                      className={currentDemo === index ? `bg-gradient-to-r ${demo.color} text-white border-0` : ''}
                    >
                      <demo.icon className="h-4 w-4 mr-2" />
                      {demo.title}
                    </Button>
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {demoFeatures[currentDemo].description}
                </p>
              </div>
            </Card>

            {/* CTA After Demo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6"
            >
              <Card className="p-6 bg-gradient-to-r from-teal-500 to-green-500 text-white border-0 shadow-xl">
                <div className="text-center">
                  <SparklesIcon className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Ready to Try It Yourself?
                  </h3>
                  <p className="text-white/90 mb-4">
                    Experience the full power of our chat platform
                  </p>
                  <Button
                    onClick={() => {
                      console.log("Starting chat from demo page")
                      onStartChat()
                    }}
                    size="lg"
                    className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Start Chatting Now
                    <ChatBubbleLeftRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Key Highlights */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-neumorphic">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Key Highlights
              </h3>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.time}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors"
                    onClick={() => {
                      console.log(`Jumping to timestamp: ${highlight.time}`)
                      setProgress((parseInt(highlight.time.split(':')[0]) * 60 + parseInt(highlight.time.split(':')[1])) / 3.5)
                    }}
                  >
                    <Badge variant="outline" className="text-xs font-mono">
                      {highlight.time}
                    </Badge>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white text-sm">
                        {highlight.title}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Demo Stats */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-neumorphic">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Demo Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Views Today</span>
                  <span className="font-semibold text-gray-900 dark:text-white">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Average Rating</span>
                  <span className="font-semibold text-gray-900 dark:text-white">4.9/5 ⭐</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Total Duration</span>
                  <span className="font-semibold text-gray-900 dark:text-white">7 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Features Shown</span>
                  <span className="font-semibold text-gray-900 dark:text-white">12+</span>
                </div>
              </div>
            </Card>

            {/* Share Demo */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 backdrop-blur-sm border-0 shadow-neumorphic">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Share This Demo
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Help others discover our platform
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  📱 Mobile
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  🔗 Link
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  📧 Email
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}