"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Cog6ToothIcon,
  BellIcon,
  ShieldCheckIcon,
  PaintBrushIcon,
  LanguageIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  EyeSlashIcon,
  SpeakerWaveIcon,
  ChatBubbleLeftRightIcon,
  ArrowLeftIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Switch } from './ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Slider } from './ui/slider'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'

interface OptionsPageProps {
  onBack: () => void
  isDarkMode: boolean
  onToggleDarkMode: () => void
}

export default function OptionsPage({ onBack, isDarkMode, onToggleDarkMode }: OptionsPageProps) {
  const [notifications, setNotifications] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [readReceipts, setReadReceipts] = useState(true)
  const [lastSeen, setLastSeen] = useState(true)
  const [autoDownload, setAutoDownload] = useState(false)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [soundVolume, setSoundVolume] = useState([75])
  const [fontSize, setFontSize] = useState([16])

  console.log("Options page loaded", { notifications, soundEnabled, isDarkMode })

  const settingsCategories = [
    {
      title: "Appearance",
      icon: PaintBrushIcon,
      color: "from-purple-500 to-pink-500",
      settings: [
        {
          title: "Dark Mode",
          description: "Toggle between light and dark themes",
          control: (
            <Switch 
              checked={isDarkMode} 
              onCheckedChange={onToggleDarkMode}
            />
          )
        },
        {
          title: "Font Size",
          description: "Adjust text size for better readability",
          control: (
            <div className="w-32">
              <Slider
                value={fontSize}
                onValueChange={setFontSize}
                max={24}
                min={12}
                step={1}
                className="w-full"
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">{fontSize[0]}px</span>
            </div>
          )
        },
        {
          title: "Language",
          description: "Choose your preferred language",
          control: (
            <Select defaultValue="en">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
              </SelectContent>
            </Select>
          )
        }
      ]
    },
    {
      title: "Notifications",
      icon: BellIcon,
      color: "from-blue-500 to-teal-500",
      settings: [
        {
          title: "Push Notifications",
          description: "Receive notifications for new messages",
          control: (
            <Switch 
              checked={notifications} 
              onCheckedChange={setNotifications}
            />
          )
        },
        {
          title: "Message Sounds",
          description: "Play sound when receiving messages",
          control: (
            <Switch 
              checked={soundEnabled} 
              onCheckedChange={setSoundEnabled}
            />
          )
        },
        {
          title: "Sound Volume",
          description: "Adjust notification sound volume",
          control: (
            <div className="w-32">
              <Slider
                value={soundVolume}
                onValueChange={setSoundVolume}
                max={100}
                min={0}
                step={5}
                className="w-full"
                disabled={!soundEnabled}
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">{soundVolume[0]}%</span>
            </div>
          )
        }
      ]
    },
    {
      title: "Privacy & Security",
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-500",
      settings: [
        {
          title: "Read Receipts",
          description: "Let others know when you've read their messages",
          control: (
            <Switch 
              checked={readReceipts} 
              onCheckedChange={setReadReceipts}
            />
          )
        },
        {
          title: "Last Seen",
          description: "Show when you were last active",
          control: (
            <Switch 
              checked={lastSeen} 
              onCheckedChange={setLastSeen}
            />
          )
        },
        {
          title: "Two-Factor Authentication",
          description: "Add an extra layer of security",
          control: (
            <Switch 
              checked={twoFactorAuth} 
              onCheckedChange={setTwoFactorAuth}
            />
          )
        },
        {
          title: "Auto-Download Media",
          description: "Automatically download photos and videos",
          control: (
            <Switch 
              checked={autoDownload} 
              onCheckedChange={setAutoDownload}
            />
          )
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
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
                <Cog6ToothIcon className="h-8 w-8 mr-3 text-teal-600" />
                Settings & Options
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Customize your chat experience
              </p>
            </div>
          </div>
          
          <Badge className="bg-gradient-to-r from-teal-500 to-green-500 text-white border-0">
            ⚙️ Preferences
          </Badge>
        </motion.div>

        {/* Settings Categories */}
        <div className="space-y-8">
          {settingsCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-neumorphic">
                <div className="flex items-center mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl mr-4 shadow-lg`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {category.settings.length} options available
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.settings.map((setting, settingIndex) => (
                    <div key={setting.title}>
                      <div className="flex items-center justify-between py-3">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {setting.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {setting.description}
                          </p>
                        </div>
                        <div className="ml-4">
                          {setting.control}
                        </div>
                      </div>
                      {settingIndex < category.settings.length - 1 && (
                        <Separator className="my-2" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="p-6 bg-gradient-to-r from-teal-500 to-green-500 text-white border-0 shadow-xl">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <ChatBubbleLeftRightIcon className="h-6 w-6 mr-2" />
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-0"
                onClick={() => console.log("Export chat history clicked")}
              >
                Export Chat History
              </Button>
              <Button 
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-0"
                onClick={() => console.log("Clear cache clicked")}
              >
                Clear Cache
              </Button>
              <Button 
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white border-0"
                onClick={() => console.log("Reset to defaults clicked")}
              >
                Reset to Defaults
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}