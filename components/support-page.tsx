'use client'

import { motion } from 'framer-motion'
import { ArrowLeftIcon, QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, PhoneIcon, EnvelopeIcon, DocumentTextIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { useState } from 'react'
import { Badge } from './ui/badge'

interface SupportPageProps {
  onBack: () => void
}

export default function SupportPage({ onBack }: SupportPageProps) {
  console.log("Support page rendered")

  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const supportCategories = [
    {
      title: "Getting Started",
      icon: SparklesIcon,
      color: "from-blue-500 to-cyan-500",
      questions: [
        "How do I create an account?",
        "Setting up your profile",
        "Adding your first contacts",
        "Understanding the interface"
      ]
    },
    {
      title: "Messaging",
      icon: ChatBubbleLeftRightIcon,
      color: "from-green-500 to-emerald-500",
      questions: [
        "How to send messages and media",
        "Using voice messages",
        "Message reactions and replies",
        "Group chat features"
      ]
    },
    {
      title: "Privacy & Security",
      icon: DocumentTextIcon,
      color: "from-purple-500 to-indigo-500",
      questions: [
        "End-to-end encryption explained",
        "Privacy settings control",
        "Blocking and reporting users",
        "Data backup and recovery"
      ]
    },
    {
      title: "Technical Issues",
      icon: QuestionMarkCircleIcon,
      color: "from-orange-500 to-red-500",
      questions: [
        "App crashes or freezes",
        "Connection problems",
        "Notification issues",
        "Performance optimization"
      ]
    }
  ]

  const contactMethods = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: ChatBubbleLeftRightIcon,
      color: "bg-blue-500",
      action: "Start Chat",
      available: "24/7"
    },
    {
      title: "Phone Support",
      description: "Speak directly with a support specialist",
      icon: PhoneIcon,
      color: "bg-green-500",
      action: "Call Now",
      available: "Mon-Fri 9AM-6PM"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: EnvelopeIcon,
      color: "bg-purple-500",
      action: "Send Email",
      available: "Response within 24h"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg sticky top-0 z-50 border-b border-green-200 dark:border-gray-700"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="text-green-600 hover:text-green-800 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-900/20"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Support Center</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">We're here to help you succeed</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-6xl mx-auto px-6 py-12"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, rotate: 15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <QuestionMarkCircleIcon className="h-10 w-10 text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How Can We Help You?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Find answers to common questions, get in touch with our support team, 
            or explore our comprehensive help resources.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative"
          >
            <Input
              placeholder="Search for help articles, guides, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 pl-6 pr-14 text-lg border-green-200 focus:ring-green-500 focus:border-green-500 rounded-full"
            />
            <Button
              className="absolute right-2 top-2 h-10 w-10 rounded-full bg-green-500 hover:bg-green-600"
              onClick={() => console.log("Search:", searchQuery)}
            >
              🔍
            </Button>
          </motion.div>
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Get In Touch
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-6 text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {method.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {method.description}
                  </p>
                  <Badge variant="secondary" className="mb-4">
                    {method.available}
                  </Badge>
                  <Button
                    onClick={() => console.log(`${method.title} clicked`)}
                    className="w-full"
                    variant="outline"
                  >
                    {method.action}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <Card className="p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {category.title}
                      </h4>
                      <div className="space-y-2">
                        {category.questions.map((question, questionIndex) => (
                          <button
                            key={questionIndex}
                            onClick={() => {
                              console.log(`FAQ clicked: ${question}`)
                              setSelectedCategory(category.title)
                            }}
                            className="block w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                          >
                            • {question}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Status & Community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <Card className="p-8 bg-gradient-to-r from-green-500 to-teal-600 text-white border-0">
            <h4 className="text-2xl font-bold mb-4">System Status</h4>
            <p className="text-green-100 mb-4">
              All systems are operational. Check our status page for real-time updates.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse" />
              <span className="text-green-100 text-sm">All services running smoothly</span>
            </div>
            <Button
              onClick={() => console.log("Check status page")}
              className="bg-white text-green-600 hover:bg-green-50"
            >
              View Status Page
            </Button>
          </Card>

          <Card className="p-8 bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0">
            <h4 className="text-2xl font-bold mb-4">Community Help</h4>
            <p className="text-purple-100 mb-4">
              Join our community forum to connect with other users and share knowledge.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-purple-100 text-sm">🎉 15,000+ active members</span>
            </div>
            <Button
              onClick={() => console.log("Join community")}
              className="bg-white text-purple-600 hover:bg-purple-50"
            >
              Join Community
            </Button>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}