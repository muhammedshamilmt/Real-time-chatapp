'use client'

import { motion } from 'framer-motion'
import { ArrowLeftIcon, ShieldCheckIcon, EyeIcon, LockClosedIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Card } from './ui/card'

interface PrivacyPageProps {
  onBack: () => void
}

export default function PrivacyPage({ onBack }: PrivacyPageProps) {
  console.log("Privacy page rendered")

  const privacySections = [
    {
      title: "Data We Collect",
      icon: DocumentTextIcon,
      content: [
        "Profile information (name, phone number, profile picture)",
        "Messages and media you send and receive",
        "Usage data and analytics for service improvement",
        "Device information and connection data"
      ]
    },
    {
      title: "How We Use Your Data",
      icon: EyeIcon,
      content: [
        "Deliver and improve our messaging services",
        "Provide customer support and assistance",
        "Ensure security and prevent fraud",
        "Comply with legal obligations"
      ]
    },
    {
      title: "Data Security",
      icon: LockClosedIcon,
      content: [
        "End-to-end encryption for all messages",
        "Secure data storage with industry standards",
        "Regular security audits and updates",
        "Limited access to personal data by employees"
      ]
    },
    {
      title: "Your Rights",
      icon: ShieldCheckIcon,
      content: [
        "Access and download your data",
        "Correct inaccurate information",
        "Delete your account and data",
        "Control privacy settings and permissions"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg sticky top-0 z-50 border-b border-blue-200 dark:border-gray-700"
      >
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/20"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: June 2025</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <ShieldCheckIcon className="h-10 w-10 text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Privacy is Our Priority
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We believe in transparency and your right to control your personal information. 
            This policy explains how we handle your data with the utmost care and security.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="grid gap-8 md:grid-cols-2">
          {privacySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="p-6 h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0">
            <h3 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're here to help you understand how we protect your data. 
              Contact our privacy team for any questions or concerns.
            </p>
            <Button
              onClick={() => console.log("Contact privacy team")}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold"
            >
              Contact Privacy Team
            </Button>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}