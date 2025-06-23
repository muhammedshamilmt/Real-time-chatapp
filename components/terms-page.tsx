'use client'

import { motion } from 'framer-motion'
import { ArrowLeftIcon, DocumentCheckIcon, ExclamationTriangleIcon, UserGroupIcon, CogIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'

interface TermsPageProps {
  onBack: () => void
}

export default function TermsPage({ onBack }: TermsPageProps) {
  console.log("Terms page rendered")

  const termsSections = [
    {
      title: "Service Usage",
      icon: UserGroupIcon,
      color: "from-green-500 to-emerald-600",
      terms: [
        "You must be at least 13 years old to use our service",
        "Provide accurate and up-to-date account information",
        "Use the service only for lawful purposes",
        "Respect other users and maintain appropriate conduct"
      ]
    },
    {
      title: "Account Responsibilities",
      icon: CogIcon,
      color: "from-blue-500 to-cyan-600",
      terms: [
        "Keep your account credentials secure and confidential",
        "Notify us immediately of any unauthorized access",
        "You're responsible for all activity on your account",
        "Regular password updates are recommended"
      ]
    },
    {
      title: "Content Guidelines",
      icon: DocumentCheckIcon,
      color: "from-purple-500 to-violet-600",
      terms: [
        "Don't share illegal, harmful, or offensive content",
        "Respect intellectual property rights",
        "Don't spam or send unsolicited messages",
        "Report inappropriate content to help keep the community safe"
      ]
    },
    {
      title: "Service Limitations",
      icon: ExclamationTriangleIcon,
      color: "from-orange-500 to-red-600",
      terms: [
        "Service availability may vary by location",
        "We reserve the right to modify or discontinue features",
        "Account suspension may occur for policy violations",
        "Data backup and recovery is your responsibility"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg sticky top-0 z-50 border-b border-purple-200 dark:border-gray-700"
      >
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="text-purple-600 hover:text-purple-800 hover:bg-purple-100 dark:text-purple-400 dark:hover:bg-purple-900/20"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">Last updated: June 2025</p>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                  v2.1
                </Badge>
              </div>
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
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={ {delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <DocumentCheckIcon className="h-10 w-10 text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            By using our service, you agree to these terms. We've made them clear and fair 
            to ensure a great experience for everyone in our community.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="grid gap-8 lg:grid-cols-2">
          {termsSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="p-6 h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {section.title}
                    </h3>
                    <div className="space-y-3">
                      {section.terms.map((term, termIndex) => (
                        <div key={termIndex} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                              {termIndex + 1}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {term}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Agreement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white border-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Agreement & Updates</h3>
              <p className="text-purple-100 mb-6 max-w-3xl mx-auto">
                By continuing to use our service, you acknowledge that you have read, understood, 
                and agree to be bound by these terms. We may update these terms occasionally, 
                and we'll notify you of any significant changes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  onClick={() => console.log("Terms accepted")}
                  className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 font-semibold"
                >
                  I Accept These Terms
                </Button>
                <Button
                  onClick={() => console.log("Download terms PDF")}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-3"
                >
                  Download PDF
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}