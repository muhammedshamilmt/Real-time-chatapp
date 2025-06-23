"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ShieldCheckIcon, 
  DevicePhoneMobileIcon, 
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  PlayIcon,
  PhoneIcon,
  BoltIcon,
  GlobeAltIcon,
  HeartIcon,
  StarIcon,
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'

interface LandingPageProps {
  onEnterChat: () => void
  onWatchDemo: () => void
  onShowPrivacy?: () => void
  onShowTerms?: () => void
  onShowSupport?: () => void
}

export function LandingPage({ onEnterChat, onWatchDemo, onShowPrivacy, onShowTerms, onShowSupport }: LandingPageProps) {
  console.log("LandingPage component rendered")
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: ShieldCheckIcon,
      title: "End-to-End Encryption",
      description: "Your messages are secured with military-grade encryption that only you and your contacts can read.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Multi-Device Support",
      description: "Seamlessly sync your conversations across all your devices with real-time synchronization.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: PhotoIcon,
      title: "Rich Media Sharing",
      description: "Share photos, videos, documents, and voice messages with lightning-fast delivery.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BoltIcon,
      title: "Lightning Fast",
      description: "Messages delivered instantly with optimized performance and minimal data usage.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: GlobeAltIcon,
      title: "Global Connectivity",
      description: "Connect with anyone, anywhere in the world with our robust global infrastructure.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: SparklesIcon,
      title: "Smart Features",
      description: "AI-powered smart replies, message scheduling, and intelligent conversation organization.",
      color: "from-cyan-500 to-blue-500"
    }
  ]

  const stats = [
    { number: "10M+", label: "Active Users", icon: "👥" },
    { number: "99.9%", label: "Uptime", icon: "⚡" },
    { number: "50M+", label: "Messages Daily", icon: "💬" },
    { number: "150+", label: "Countries", icon: "🌍" }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "SJ",
      text: "This chat app has revolutionized how our team communicates. The interface is intuitive and the features are exactly what we needed.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "MC",
      text: "Amazing user experience! The end-to-end encryption gives us peace of mind while the design keeps our team engaged.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "CreativeStudio",
      avatar: "ER",
      text: "Beautiful design meets powerful functionality. Our creative team loves the seamless file sharing and collaboration features.",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Personal",
      price: "Free",
      description: "Perfect for individuals and small groups",
      features: ["Up to 5 chat groups", "Basic file sharing", "Standard support", "1GB storage"],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$9/month",
      description: "Ideal for teams and professionals",
      features: ["Unlimited chat groups", "Advanced file sharing", "Priority support", "50GB storage", "Custom themes", "Advanced security"],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Everything in Pro", "Admin controls", "SSO integration", "Unlimited storage", "24/7 dedicated support", "Custom branding"],
      popular: false,
      cta: "Contact Sales"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-teal-200/20 rounded-full floating-element" />
          <div className="absolute top-96 -left-32 w-64 h-64 bg-green-200/20 rounded-full floating-element" style={{ animationDelay: '1s' }} />
          <div className="absolute -bottom-32 right-64 w-80 h-80 bg-blue-200/20 rounded-full floating-element" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                <span className="hero-text-gradient">Connect Instantly,</span>
                <br />
                <span className="text-gray-900 dark:text-white">Anywhere</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              >
                Experience the future of messaging with our secure, fast, and intuitive chat platform designed for modern communication.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-10"
              >
                <Button
                  onClick={() => {
                    console.log("Get Started button clicked")
                    onEnterChat()
                  }}
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ChatBubbleLeftRightIcon className="ml-2 h-6 w-6" />
                </Button>
              </motion.div>
            </div>

            {/* Chat Interface Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-20 relative"
            >
              <div className="flex justify-center items-center space-x-8">
                {/* Desktop Preview */}
                <div className="hidden lg:block">
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-4 border-8 border-gray-200 dark:border-gray-700">
                    <div className="w-96 h-64 bg-gradient-to-br from-teal-100 to-green-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-4">
                      <div className="flex space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-400 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <div className="w-3 h-3 bg-green-400 rounded-full" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <div className="bg-teal-500 text-white px-3 py-2 rounded-2xl rounded-br-md text-sm max-w-xs">
                            Hey! How are you doing? 👋
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 px-3 py-2 rounded-2xl rounded-bl-md text-sm max-w-xs border">
                            I'm great! Just testing this new chat app 🚀
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-teal-500 text-white px-3 py-2 rounded-2xl rounded-br-md text-sm max-w-xs">
                            It looks amazing! Love the design ✨
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Preview */}
                <div className="transform rotate-3">
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-2 border-4 border-gray-200 dark:border-gray-700">
                    <div className="w-48 h-80 bg-gradient-to-br from-teal-100 to-green-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-3">
                      <div className="flex justify-center mb-2">
                        <div className="w-12 h-1 bg-gray-400 rounded-full" />
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-end">
                          <div className="bg-teal-500 text-white px-2 py-1 rounded-xl rounded-br-sm max-w-32">
                            Mobile chat! 📱
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-white text-gray-800 px-2 py-1 rounded-xl rounded-bl-sm max-w-32 border text-xs">
                            Responsive design 💯
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold hero-text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div ref={ref} className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-teal-500 to-green-500 text-white border-0">
              ✨ Powerful Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Stay Connected
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for the modern world. Experience the future of communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-neumorphic relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                       style={{background: `linear-gradient(135deg, var(--tw-gradient-stops))`}} />
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-6 lg:px-8 bg-gradient-to-br from-teal-50/50 via-green-50/50 to-blue-50/50 dark:from-gray-800/50 dark:via-gray-700/50 dark:to-gray-800/50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
              💬 What People Say
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See why thousands of teams choose our platform for their communication needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
              💰 Simple Pricing
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-teal-500 to-green-500 text-white border-0 px-4 py-1">
                      🔥 Most Popular
                    </Badge>
                  </div>
                )}
                <Card className={`p-8 hover:shadow-2xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 h-full ${
                  plan.popular ? 'ring-2 ring-teal-500 shadow-xl scale-105' : ''
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-4xl font-bold hero-text-gradient mb-2">
                      {plan.price}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    onClick={() => {
                      console.log(`${plan.name} plan selected`)
                      if (plan.name === 'Personal') {
                        onEnterChat()
                      }
                    }}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600'
                        : 'bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                    } text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}
                  >
                    {plan.cta}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 lg:px-8 bg-gradient-to-r from-teal-600 via-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-white/10 rounded-full floating-element" />
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-white/10 rounded-full floating-element" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <RocketLaunchIcon className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join millions of users who have already upgraded their messaging experience. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  console.log("Get Started CTA clicked")
                  onEnterChat()
                }}
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Free
                <SparklesIcon className="ml-2 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  console.log("Watch Demo CTA clicked")
                  onWatchDemo()
                }}
                className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
              >
                Watch Demo
                <PlayIcon className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-teal-500" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">ChatApp</span>
            </div>
            
            <div className="flex space-x-6">
              <button 
                onClick={() => {
                  console.log("Privacy link clicked")
                  onShowPrivacy?.()
                }}
                className="text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors"
              >
                Privacy
              </button>
              <button 
                onClick={() => {
                  console.log("Terms link clicked")
                  onShowTerms?.()
                }}
                className="text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors"
              >
                Terms
              </button>
              <button 
                onClick={() => {
                  console.log("Support link clicked")
                  onShowSupport?.()
                }}
                className="text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors"
              >
                Support
              </button>
            </div>
            
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900 rounded-full flex items-center justify-center transition-colors">
                <span className="text-sm">📧</span>
              </button>
              <button className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900 rounded-full flex items-center justify-center transition-colors">
                <span className="text-sm">🐦</span>
              </button>
              <button className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900 rounded-full flex items-center justify-center transition-colors">
                <span className="text-sm">💼</span>
              </button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              © 2025 ChatApp. All rights reserved. Built with ❤️ for modern communication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}