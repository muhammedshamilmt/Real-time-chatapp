"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  UserIcon,
  AtSymbolIcon,
  PhoneIcon,
  KeyIcon,
  CheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { Checkbox } from './ui/checkbox'

interface OnboardingPageProps {
  onComplete: () => void
  onBack: () => void
}

export default function OnboardingPage({ onComplete, onBack }: OnboardingPageProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
    wantNotifications: true
  })

  console.log("Onboarding page loaded", { currentStep, formData })

  const steps = [
    {
      title: "Welcome! Let's Get Started",
      subtitle: "Create your account in just a few steps",
      icon: SparklesIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Personal Information",
      subtitle: "Tell us a bit about yourself",
      icon: UserIcon,
      color: "from-blue-500 to-teal-500"
    },
    {
      title: "Account Security",
      subtitle: "Secure your account with a strong password",
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "You're All Set!",
      subtitle: "Welcome to the future of communication",
      icon: ChatBubbleLeftRightIcon,
      color: "from-teal-500 to-green-500"
    }
  ]

  const handleNext = () => {
    console.log(`Moving to step ${currentStep + 1}`, formData)
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const handlePrevious = () => {
    console.log(`Moving back to step ${currentStep - 1}`)
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return true
      case 1:
        return formData.fullName.trim() !== '' && formData.username.trim() !== '' && formData.email.trim() !== ''
      case 2:
        return formData.password.length >= 6 && formData.password === formData.confirmPassword && formData.agreedToTerms
      case 3:
        return true
      default:
        return false
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-between mb-6">
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
            
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              Step {currentStep + 1} of {steps.length}
            </Badge>
          </div>

          <Progress value={progress} className="w-full h-2 mb-6" />

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${steps[currentStep].color} rounded-2xl mb-4 shadow-xl`}>
              {React.createElement(steps[currentStep].icon, { className: "h-8 w-8 text-white" })}
            </div>
            <h1 className="text-3xl font-bold hero-text-gradient mb-2">
              {steps[currentStep].title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {steps[currentStep].subtitle}
            </p>
          </motion.div>
        </motion.div>

        {/* Step Content */}
        <Card className="p-8 hover:shadow-2xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-neumorphic">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {currentStep === 0 && (
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-2xl">
                      <span>🚀</span>
                      <span>💬</span>
                      <span>✨</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Ready to Transform Your Communication?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                      Join millions of users who have already upgraded their messaging experience. 
                      Let's set up your account and get you connected!
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 py-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                        <ShieldCheckIcon className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Secure</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                        <SparklesIcon className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Fast</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-2 flex items-center justify-center">
                        <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Easy</p>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Enter your full name"
                        className="border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-gray-700 dark:text-gray-300">
                        Username *
                      </Label>
                      <div className="relative">
                        <AtSymbolIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="username"
                          value={formData.username}
                          onChange={(e) => setFormData({...formData, username: e.target.value})}
                          placeholder="Choose a username"
                          className="pl-10 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="border-gray-200 dark:border-gray-700"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                      Phone Number (Optional)
                    </Label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 (555) 123-4567"
                        className="pl-10 border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                        Password *
                      </Label>
                      <div className="relative">
                        <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="password"
                          type="password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          placeholder="Enter a strong password"
                          className="pl-10 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Minimum 6 characters
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">
                        Confirm Password *
                      </Label>
                      <div className="relative">
                        <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          placeholder="Confirm your password"
                          className="pl-10 border-gray-200 dark:border-gray-700"
                        />
                      </div>
                      {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                        <p className="text-xs text-red-500">Passwords don't match</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.agreedToTerms}
                        onCheckedChange={(checked) => setFormData({...formData, agreedToTerms: checked as boolean})}
                        className="mt-1"
                      />
                      <Label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        I agree to the <a href="#" className="text-teal-600 hover:underline">Terms of Service</a> and <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="notifications"
                        checked={formData.wantNotifications}
                        onCheckedChange={(checked) => setFormData({...formData, wantNotifications: checked as boolean})}
                        className="mt-1"
                      />
                      <Label htmlFor="notifications" className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        I want to receive notifications about new messages and updates
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="text-center space-y-6">
                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-green-500 rounded-full mx-auto flex items-center justify-center shadow-xl">
                      <CheckIcon className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Welcome Aboard, {formData.fullName}! 🎉
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                      Your account has been created successfully. You're now ready to start connecting 
                      with friends, family, and colleagues like never before.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      What's Next?
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-4 w-4 text-green-500" />
                        <span>Start your first conversation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-4 w-4 text-green-500" />
                        <span>Customize your profile</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckIcon className="h-4 w-4 text-green-500" />
                        <span>Invite friends to join</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 mt-8 border-t border-gray-200 dark:border-gray-700">
            <Button
              onClick={handlePrevious}
              variant="outline"
              disabled={currentStep === 0}
              className="flex items-center"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`bg-gradient-to-r ${steps[currentStep].color} hover:opacity-90 text-white border-0 px-8 py-2 font-semibold transition-all duration-300 transform hover:scale-105`}
            >
              {currentStep === steps.length - 1 ? 'Start Chatting' : 'Continue'}
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}