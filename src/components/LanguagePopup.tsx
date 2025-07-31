'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/lib/translations'

interface LanguagePopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function LanguagePopup({ isOpen, onClose }: LanguagePopupProps) {
  const { setLanguage } = useLanguage()

  if (!isOpen) return null

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.47-6.87l-.17-.25c-.41-.53-.94-.87-1.47-.87s-1.06.34-1.47.87l-.17.25c-1.54 2.22-1.27 4.93.47 6.87l.03.03-2.54 2.51c-.42.42-.42 1.1 0 1.52.42.42 1.1.42 1.52 0l2.54-2.51 2.54 2.51c.42.42 1.1.42 1.52 0 .42-.42.42-1.1 0-1.52zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Lakegn</h2>
          <p className="text-gray-600">Please choose your preferred language</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleLanguageSelect('en')}
            className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold text-sm">EN</span>
              </div>
              <span className="font-semibold text-gray-900 group-hover:text-blue-700">English</span>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            onClick={() => handleLanguageSelect('am')}
            className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 group"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold text-sm">አም</span>
              </div>
              <span className="font-semibold text-gray-900 group-hover:text-orange-700">አማርኛ (Amharic)</span>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            You can change this later from the language switcher
          </p>
        </div>
      </div>
    </div>
  )
}