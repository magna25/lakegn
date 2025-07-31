'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, Language, TranslationKeys } from '@/lib/translations'
import LanguagePopup from '@/components/LanguagePopup'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationKeys
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [showLanguagePopup, setShowLanguagePopup] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    const hasVisited = localStorage.getItem('hasVisited')
    
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    } else if (!hasVisited) {
      // First time visitor - show language selection popup
      setShowLanguagePopup(true)
    }
    
    setIsInitialized(true)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
    localStorage.setItem('hasVisited', 'true')
  }

  const handleClosePopup = () => {
    setShowLanguagePopup(false)
    localStorage.setItem('hasVisited', 'true')
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language]
  }

  // Don't render anything until initialized to prevent hydration issues
  if (!isInitialized) {
    return null
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
      <LanguagePopup 
        isOpen={showLanguagePopup} 
        onClose={handleClosePopup}
      />
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}