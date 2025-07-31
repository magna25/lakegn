'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Language } from '@/lib/translations'

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-full p-1 border border-white/20">
      <button
        onClick={() => setLanguage('en' as Language)}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        {t.language.english}
      </button>
      <button
        onClick={() => setLanguage('am' as Language)}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
          language === 'am'
            ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        {t.language.amharic}
      </button>
    </div>
  )
}