"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  UserCircleIcon,
  PencilIcon,
  CameraIcon,
  AtSymbolIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  LinkIcon,
  ArrowLeftIcon,
  CheckIcon,
  XMarkIcon,
  ShareIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Separator } from './ui/separator'

interface ProfilePageProps {
  onBack: () => void
  onSettings: () => void
}

export default function ProfilePage({ onBack, onSettings }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    username: "alexj",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Digital nomad 🌍 | Coffee enthusiast ☕ | Always up for a chat!",
    location: "San Francisco, CA",
    website: "alexjohnson.dev",
    joinDate: "March 2023"
  })

  const [editedProfile, setEditedProfile] = useState(profile)

  console.log("Profile page loaded", { isEditing, profile })

  const handleSave = () => {
    console.log("Saving profile changes", editedProfile)
    setProfile(editedProfile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    console.log("Canceling profile edit")
    setEditedProfile(profile)
    setIsEditing(false)
  }

  const stats = [
    { label: "Messages Sent", value: "12,458", icon: "💬" },
    { label: "Chats Active", value: "23", icon: "👥" },
    { label: "Files Shared", value: "1,247", icon: "📎" },
    { label: "Days Active", value: "294", icon: "📅" }
  ]

  const recentActivity = [
    { action: "Updated profile picture", time: "2 hours ago", icon: "📸" },
    { action: "Changed status message", time: "1 day ago", icon: "✍️" },
    { action: "Joined 3 new groups", time: "3 days ago", icon: "👥" },
    { action: "Shared 5 photos", time: "1 week ago", icon: "🖼️" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
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
                console.log("Back to main app clicked")
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
                <UserCircleIcon className="h-8 w-8 mr-3 text-blue-600" />
                My Profile
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Manage your personal information
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              onClick={() => {
                console.log("Settings clicked from profile")
                onSettings()
              }}
              variant="outline"
              size="sm"
            >
              <Cog6ToothIcon className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
              👤 Profile
            </Badge>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-neumorphic">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <Avatar className="w-32 h-32 mx-auto shadow-xl ring-4 ring-white dark:ring-gray-700">
                    <AvatarImage src="/api/placeholder/128/128" />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg"
                    onClick={() => console.log("Change profile picture clicked")}
                  >
                    <CameraIcon className="h-4 w-4 text-white" />
                  </Button>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {profile.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  @{profile.username}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {profile.bio}
                </p>

                <div className="flex justify-center space-x-3">
                  <Button
                    onClick={() => {
                      console.log("Edit profile clicked")
                      setIsEditing(true)
                    }}
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    <PencilIcon className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button
                    onClick={() => console.log("Share profile clicked")}
                    variant="outline"
                    size="sm"
                  >
                    <ShareIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="p-6 mt-6 hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-neumorphic">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Activity Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold hero-text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Personal Information */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-neumorphic">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Personal Information
                </h3>
                {!isEditing && (
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="ghost"
                    size="sm"
                  >
                    <PencilIcon className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                )}
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <Input
                        value={editedProfile.name}
                        onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Username
                      </label>
                      <Input
                        value={editedProfile.username}
                        onChange={(e) => setEditedProfile({...editedProfile, username: e.target.value})}
                        placeholder="Choose a username"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Bio
                    </label>
                    <Textarea
                      value={editedProfile.bio}
                      onChange={(e) => setEditedProfile({...editedProfile, bio: e.target.value})}
                      placeholder="Tell us about yourself"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        value={editedProfile.email}
                        onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone
                      </label>
                      <Input
                        value={editedProfile.phone}
                        onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                    >
                      <XMarkIcon className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSave}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    >
                      <CheckIcon className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center">
                    <AtSymbolIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-gray-900 dark:text-white">{profile.email}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-gray-900 dark:text-white">{profile.phone}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-gray-900 dark:text-white">{profile.location}</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Joined</p>
                      <p className="text-gray-900 dark:text-white">{profile.joinDate}</p>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-neumorphic">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-2xl">{activity.icon}</div>
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-white font-medium">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}