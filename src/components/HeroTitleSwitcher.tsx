'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HeroTitleSwitcher() {
  const { t } = useLanguage()
  const [currentTitle, setCurrentTitle] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'fadeOut' | 'fadeIn'>('idle')

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase('fadeOut')
      setIsAnimating(true)
      
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % t.hero.titles.length)
        setAnimationPhase('fadeIn')
      }, 400) // Fade out duration
      
      setTimeout(() => {
        setAnimationPhase('idle')
        setIsAnimating(false)
      }, 800) // Total animation duration
      
    }, 4000) // Switch every 4 seconds

    return () => clearInterval(interval)
  }, [t.hero.titles.length])

  const currentTitleData = t.hero.titles[currentTitle]

  const getTransformClasses = () => {
    switch (animationPhase) {
      case 'fadeOut':
        return 'opacity-0 transform translate-y-6 scale-95 blur-sm'
      case 'fadeIn':
        return 'opacity-0 transform -translate-y-6 scale-105'
      default:
        return 'opacity-100 transform translate-y-0 scale-100 blur-0'
    }
  }

  return (
    <div className="min-h-[120px] md:min-h-[140px] lg:min-h-[160px] flex items-center">
      <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-500 ease-in-out ${getTransformClasses()}`}>
        <span className="block">
          {currentTitleData.title}
        </span>
        <span className="text-green-400 block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          {currentTitleData.titleHighlight}
        </span>
      </h1>
    </div>
  )
}