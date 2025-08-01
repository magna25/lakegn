'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import FlagSwitcher from './FlagSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-white">
                {t.header.brandName}
              </span>
              <FlagSwitcher size="md" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white/90 hover:text-white transition duration-200">
              {t.header.home}
            </a>
            <a href="/#services" className="text-white/90 hover:text-white transition duration-200">
              {t.header.services}
            </a>
            <a href="/blog" className="text-white/90 hover:text-white transition duration-200">
              {t.header.blog}
            </a>
            <a href="/#apply" className="text-white/90 hover:text-white transition duration-200">
              {t.header.applyNow}
            </a>
            <LanguageSwitcher />
            <a
              href="#apply"
              className="bg-green-500 text-black px-6 py-2 rounded-full hover:bg-green-400 transition duration-200 font-semibold"
            >
              {t.header.getStarted}
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-50">
            <div className="flex justify-between items-center h-16 px-4">
              <a href="/" className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-white">
                  {t.header.brandName}
                </span>
                <FlagSwitcher size="sm" />
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="h-6 w-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-4 pt-8 pb-3 space-y-4">
              <a href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-xl text-white hover:text-green-400 transition duration-200">
                {t.header.home}
              </a>
              <a href="/#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-xl text-white hover:text-green-400 transition duration-200">
                {t.header.services}
              </a>
              <a href="/blog" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-xl text-white hover:text-green-400 transition duration-200">
                {t.header.blog}
              </a>
              <a href="/#apply" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-xl text-white hover:text-green-400 transition duration-200">
                {t.header.applyNow}
              </a>
              <div className="px-3 py-3">
                <LanguageSwitcher />
              </div>
              <a
                href="#apply"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 mt-4 bg-green-500 text-black rounded-full text-center hover:bg-green-400 transition duration-200 font-semibold text-xl"
              >
                {t.header.getStarted}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}