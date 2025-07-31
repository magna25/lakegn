'use client'

import Image from 'next/image'
import studentImage from '@/assets/images/student-x.png'
import { useLanguage } from '@/contexts/LanguageContext'
import HeroTitleSwitcher from './HeroTitleSwitcher'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section id="home" className="relative min-h-[650px] pt-32 md:pt-16 bg-gradient-to-br from-green-950 via-green-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="150" r="300" fill="url(#gradient1)" opacity="0.1"/>
          <circle cx="1300" cy="400" r="350" fill="url(#gradient2)" opacity="0.1"/>
          <path d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z" fill="url(#gradient3)" opacity="0.05"/>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 min-h-[calc(650px-8rem)] md:min-h-[calc(650px-4rem)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(650px-8rem)] md:min-h-[calc(650px-4rem)] grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="flex flex-col justify-center">
            <div className="w-full">
              <div className="mb-6">
                <HeroTitleSwitcher />
              </div>
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition duration-300 text-base text-center"
                >
                  {t.hero.exploreServices}
                </a>
                <a
                  href="#apply"
                  className="border-2 border-green-500 text-green-400 px-6 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-black transition duration-300 text-base text-center"
                >
                  {t.hero.startApplication}
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex items-end justify-center h-full lg:pb-8 pb-6">
            <div className="relative lg:h-auto h-64 overflow-hidden">
              <Image
                src={studentImage}
                alt={t.hero.imageAlt}
                className="rounded-t-2xl shadow-2xl object-cover object-top max-w-full h-auto"
                width={420}
                height={425}
                style={{ marginBottom: '0px' }}
                priority
              />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-green-500/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-green-600/20 rounded-full blur-xl"></div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-8 md:h-12" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,8 C360,32 720,28 1080,16 C1260,8 1350,8 1440,24 L1440,48 L0,48 Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  )
}