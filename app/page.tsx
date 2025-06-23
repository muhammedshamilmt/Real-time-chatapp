"use client"

import { useState } from 'react'
import { LandingPage } from '@/components/landing-page'
import { ChatInterface } from '@/components/chat-interface'
import { ThemeToggle } from '@/components/theme-toggle'
import OptionsPage from '@/components/options-page'
import ProfilePage from '@/components/profile-page'
import DemoPage from '@/components/demo-page'
import OnboardingPage from '@/components/onboarding-page'
import PrivacyPage from '@/components/privacy-page'
import TermsPage from '@/components/terms-page'
import SupportPage from '@/components/support-page'

export default function Home() {
  console.log("Home page rendered")
  
  const [currentView, setCurrentView] = useState<'landing' | 'chat' | 'options' | 'profile' | 'demo' | 'onboarding' | 'privacy' | 'terms' | 'support'>('landing')
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleEnterChat = () => {
    console.log("Entering chat view")
    setCurrentView('chat')
  }

  const handleBackToLanding = () => {
    console.log("Going back to landing page")
    setCurrentView('landing')
  }

  const handleShowOptions = () => {
    console.log("Showing options page")
    setCurrentView('options')
  }

  const handleShowProfile = () => {
    console.log("Showing profile page")
    setCurrentView('profile')
  }

  const handleShowDemo = () => {
    console.log("Showing demo page")
    setCurrentView('demo')
  }

  const handleShowOnboarding = () => {
    console.log("Showing onboarding page")
    setCurrentView('onboarding')
  }

  const handleShowPrivacy = () => {
    console.log("Showing privacy page")
    setCurrentView('privacy')
  }

  const handleShowTerms = () => {
    console.log("Showing terms page")
    setCurrentView('terms')
  }

  const handleShowSupport = () => {
    console.log("Showing support page")
    setCurrentView('support')
  }

  const handleToggleDarkMode = () => {
    console.log("Toggling dark mode")
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      
      {currentView === 'landing' && (
        <LandingPage 
          onEnterChat={handleShowOnboarding}
          onWatchDemo={handleShowDemo}
          onShowPrivacy={handleShowPrivacy}
          onShowTerms={handleShowTerms}
          onShowSupport={handleShowSupport}
        />
      )}
      
      {currentView === 'chat' && (
        <ChatInterface 
          onBack={handleBackToLanding}
          onShowOptions={handleShowOptions}
          onShowProfile={handleShowProfile}
        />
      )}
      
      {currentView === 'options' && (
        <OptionsPage 
          onBack={handleBackToLanding}
          isDarkMode={isDarkMode}
          onToggleDarkMode={handleToggleDarkMode}
        />
      )}
      
      {currentView === 'profile' && (
        <ProfilePage 
          onBack={handleBackToLanding}
          onSettings={handleShowOptions}
        />
      )}
      
      {currentView === 'demo' && (
        <DemoPage 
          onBack={handleBackToLanding}
          onStartChat={handleShowOnboarding}
        />
      )}
      
      {currentView === 'onboarding' && (
        <OnboardingPage 
          onComplete={handleEnterChat}
          onBack={handleBackToLanding}
        />
      )}
      
      {currentView === 'privacy' && (
        <PrivacyPage onBack={handleBackToLanding} />
      )}
      
      {currentView === 'terms' && (
        <TermsPage onBack={handleBackToLanding} />
      )}
      
      {currentView === 'support' && (
        <SupportPage onBack={handleBackToLanding} />
      )}
    </div>
  )
}
