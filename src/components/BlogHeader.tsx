'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import FlagSwitcher from './FlagSwitcher'

export default function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="relative bg-white shadow-sm border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-gray-900">
                {t.header.brandName}
              </span>
              <FlagSwitcher size="md" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900 transition duration-200">
              {t.header.home}
            </a>
            <a href="/#services" className="text-gray-700 hover:text-gray-900 transition duration-200">
              {t.header.services}
            </a>
            <a href="/blog" className="text-emerald-600 font-semibold transition duration-200">
              {t.header.blog}
            </a>
            <a href="/#apply" className="text-gray-700 hover:text-gray-900 transition duration-200">
              {t.header.applyNow}
            </a>
            <LanguageSwitcher />
            <a
              href="#apply"
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition duration-200 font-semibold"
            >
              {t.header.getStarted}
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50">
            <div className="flex justify-between items-center h-16 px-4 border-b border-gray-200">
              <a href="/" className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-gray-900">
                  {t.header.brandName}
                </span>
                <FlagSwitcher size="sm" />
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="h-6 w-6 text-gray-900" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-4 pt-8 pb-3 space-y-4">
              <a href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-xl text-gray-900 hover:text-emerald-600 transition duration-200">
                {t.header.home}
              </a>
              <a href="/#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-xl text-gray-900 hover:text-emerald-600 transition duration-200">
                {t.header.services}
              </a>
              <a href="/blog" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-xl text-emerald-600 font-semibold transition duration-200">
                {t.header.blog}
              </a>
              <a href="/#apply" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-xl text-gray-900 hover:text-emerald-600 transition duration-200">
                {t.header.applyNow}
              </a>
              <div className="px-3 py-3">
                <LanguageSwitcher />
              </div>
              <a
                href="#apply"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 mt-4 bg-emerald-600 text-white rounded-full text-center hover:bg-emerald-700 transition duration-200 font-semibold text-xl"
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