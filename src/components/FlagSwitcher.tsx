'use client'

import { useState, useEffect } from 'react'

const flags = [
  {
    name: 'United States',
    component: (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect width="60" height="40" fill="#B22234"/>
        <rect width="60" height="3.08" y="3.08" fill="white"/>
        <rect width="60" height="3.08" y="9.23" fill="white"/>
        <rect width="60" height="3.08" y="15.38" fill="white"/>
        <rect width="60" height="3.08" y="21.54" fill="white"/>
        <rect width="60" height="3.08" y="27.69" fill="white"/>
        <rect width="60" height="3.08" y="33.85" fill="white"/>
        <rect width="24" height="21.54" fill="#3C3B6E"/>
      </svg>
    )
  },
  {
    name: 'Canada',
    component: (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect width="60" height="40" fill="white"/>
        <rect width="15" height="40" fill="#FF0000"/>
        <rect width="15" height="40" x="45" fill="#FF0000"/>
        <path d="M30 8l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#FF0000"/>
      </svg>
    )
  },
  {
    name: 'United Kingdom',
    component: (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect width="60" height="40" fill="#012169"/>
        <path d="M0 0l60 40M60 0L0 40" stroke="white" strokeWidth="4"/>
        <path d="M30 0v40M0 20h60" stroke="white" strokeWidth="6"/>
        <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="4"/>
        <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="2"/>
      </svg>
    )
  },
  {
    name: 'Australia',
    component: (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect width="60" height="40" fill="#012169"/>
        <rect width="30" height="20" fill="#012169"/>
        <path d="M0 0l30 20M30 0L0 20" stroke="white" strokeWidth="2"/>
        <path d="M15 0v20M0 10h30" stroke="white" strokeWidth="3"/>
        <path d="M15 0v20M0 10h30" stroke="#C8102E" strokeWidth="2"/>
        <path d="M0 0l30 20M30 0L0 20" stroke="#C8102E" strokeWidth="1"/>
        <circle cx="45" cy="15" r="1.5" fill="white"/>
        <circle cx="50" cy="10" r="1" fill="white"/>
        <circle cx="50" cy="25" r="1" fill="white"/>
        <circle cx="40" cy="30" r="1" fill="white"/>
        <circle cx="48" cy="32" r="1" fill="white"/>
      </svg>
    )
  },
  {
    name: 'Germany',
    component: (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect width="60" height="13.33" fill="#000000"/>
        <rect width="60" height="13.33" y="13.33" fill="#DD0000"/>
        <rect width="60" height="13.33" y="26.66" fill="#FFCE00"/>
      </svg>
    )
  },
  {
    name: 'France',
    component: (
      <svg viewBox="0 0 60 40" className="w-full h-full">
        <rect width="20" height="40" fill="#002395"/>
        <rect width="20" height="40" x="20" fill="white"/>
        <rect width="20" height="40" x="40" fill="#ED2939"/>
      </svg>
    )
  }
]

interface FlagSwitcherProps {
  size?: 'sm' | 'md'
}

export default function FlagSwitcher({ size = 'md' }: FlagSwitcherProps) {
  const [currentFlag, setCurrentFlag] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      
      setTimeout(() => {
        setCurrentFlag((prev) => (prev + 1) % flags.length)
        setIsAnimating(false)
      }, 200) // Half of the animation duration
      
    }, 2500) // Switch every 2.5 seconds

    return () => clearInterval(interval)
  }, [])

  const sizeClasses = size === 'sm' ? 'w-5 h-3' : 'w-6 h-4'

  return (
    <div 
      className={`${sizeClasses} rounded-sm overflow-hidden shadow-sm cursor-pointer transition-all duration-400 ${
        isAnimating ? 'scale-110 opacity-70' : 'hover:scale-110'
      }`}
      title={flags[currentFlag].name}
    >
      <div className={`transition-all duration-400 ${isAnimating ? 'scale-125 rotate-3' : ''}`}>
        {flags[currentFlag].component}
      </div>
    </div>
  )
}