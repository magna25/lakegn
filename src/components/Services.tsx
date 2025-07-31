'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Services() {
  const { t } = useLanguage()
  
  const services = [
    {
      title: t.services.studyAbroad.title,
      description: t.services.studyAbroad.description,
      features: t.services.studyAbroad.features,
      accentColor: 'emerald',
      icon: (
        <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"/>
        </svg>
      )
    },
    {
      title: t.services.workVisas.title,
      description: t.services.workVisas.description,
      features: t.services.workVisas.features,
      accentColor: 'blue',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"/>
        </svg>
      )
    },
    {
      title: t.services.visitTourism.title,
      description: t.services.visitTourism.description,
      features: t.services.visitTourism.features,
      accentColor: 'purple',
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z"/>
        </svg>
      )
    },
    {
      title: t.services.visaAppointments.title,
      description: t.services.visaAppointments.description,
      features: t.services.visaAppointments.features,
      accentColor: 'orange',
      icon: (
        <svg className="w-12 h-12 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"/>
        </svg>
      )
    }
  ]
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Transition area decorative elements */}
        <svg className="absolute -top-32 left-1/4 w-56 h-56 text-emerald-200 opacity-15" viewBox="0 0 200 200">
          <path d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z M100,60 C80,60 60,80 60,100 C60,120 80,140 100,140 C120,140 140,120 140,100 C140,80 120,60 100,60 Z" fill="currentColor" />
        </svg>
        <svg className="absolute -top-24 right-1/3 w-40 h-40 text-blue-200 opacity-20" viewBox="0 0 200 200">
          <polygon points="100,30 170,70 170,130 100,170 30,130 30,70" fill="currentColor" />
        </svg>
        <svg className="absolute -top-16 left-1/2 w-28 h-28 text-purple-200 opacity-25" viewBox="0 0 200 200">
          <path d="M100,40 L160,100 L100,160 L40,100 Z M100,80 L120,100 L100,120 L80,100 Z" fill="currentColor" />
        </svg>
        
        {/* Top decorative elements */}
        <svg className="absolute -top-20 -left-32 w-64 h-64 text-orange-100 opacity-20" viewBox="0 0 200 200">
          <polygon points="100,10 40,180 190,60 10,60 160,180" fill="currentColor" />
        </svg>
        <svg className="absolute -top-40 -right-40 w-96 h-96 text-emerald-100 opacity-30" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="currentColor" />
        </svg>
        <svg className="absolute top-32 left-10 w-32 h-32 text-blue-200 opacity-25" viewBox="0 0 200 200">
          <path d="M100,20 L180,100 L100,180 L20,100 Z" fill="currentColor" />
        </svg>
        <svg className="absolute top-16 right-1/4 w-36 h-36 text-purple-100 opacity-20" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="30" fill="currentColor" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        
        {/* Floating elements around transition */}
        <svg className="absolute top-8 left-20 w-20 h-20 text-green-200 opacity-30" viewBox="0 0 200 200">
          <rect x="50" y="50" width="100" height="100" rx="20" fill="currentColor" transform="rotate(30 100 100)" />
        </svg>
        <svg className="absolute top-12 right-32 w-16 h-16 text-gray-200 opacity-35" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="50" fill="currentColor" />
        </svg>
        <svg className="absolute top-24 left-3/4 w-24 h-24 text-green-100 opacity-25" viewBox="0 0 200 200">
          <path d="M100,50 L130,80 L150,50 L180,80 L150,110 L180,140 L150,170 L120,140 L90,170 L60,140 L90,110 L60,80 Z" fill="currentColor" />
        </svg>
        
        {/* Middle decorative elements */}
        <svg className="absolute top-1/2 -right-16 w-48 h-48 text-green-50 opacity-40" viewBox="0 0 200 200">
          <rect x="40" y="40" width="120" height="120" rx="60" fill="currentColor" />
        </svg>
        <svg className="absolute top-1/3 -left-8 w-24 h-24 text-gray-100 opacity-30" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="50" fill="currentColor" />
        </svg>
        
        {/* Bottom decorative elements */}
        <svg className="absolute -bottom-20 -left-20 w-72 h-72 text-gray-200 opacity-40" viewBox="0 0 200 200">
          <rect x="20" y="20" width="160" height="160" rx="20" fill="currentColor" transform="rotate(45 100 100)" />
        </svg>
        <svg className="absolute -bottom-16 right-20 w-40 h-40 text-green-100 opacity-25" viewBox="0 0 200 200">
          <path d="M100,50 L150,100 L100,150 L50,100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-wider" style={{ fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans-serif' }}>
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden p-8 border border-gray-100">
                
                {/* Subtle background accent */}
                <div className="absolute inset-0 overflow-hidden">
                  {service.accentColor === 'emerald' && (
                    <>
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-50 rounded-full" />
                      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-emerald-100/50 rounded-full" />
                    </>
                  )}
                  {service.accentColor === 'blue' && (
                    <>
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-50 rounded-full" />
                      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-100/50 rounded-full" />
                    </>
                  )}
                  {service.accentColor === 'purple' && (
                    <>
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-50 rounded-full" />
                      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-100/50 rounded-full" />
                    </>
                  )}
                  {service.accentColor === 'orange' && (
                    <>
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-50 rounded-full" />
                      <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-orange-100/50 rounded-full" />
                    </>
                  )}
                </div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-[280px]">
                  {/* Left Column - Icon and Title */}
                  <div className="flex flex-col justify-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      service.accentColor === 'emerald' ? 'bg-emerald-50' : 
                      service.accentColor === 'blue' ? 'bg-blue-50' :
                      service.accentColor === 'purple' ? 'bg-purple-50' :
                      service.accentColor === 'orange' ? 'bg-orange-50' :
                      'bg-gray-50'
                    }`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-4 tracking-wide uppercase" style={{ fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans-serif' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Right Column - Features and CTA */}
                  <div className="flex flex-col justify-center">
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 ${
                            service.accentColor === 'emerald' ? 'bg-emerald-500' :
                            service.accentColor === 'blue' ? 'bg-blue-500' :
                            service.accentColor === 'purple' ? 'bg-purple-500' :
                            service.accentColor === 'orange' ? 'bg-orange-500' :
                            'bg-gray-600'
                          }`}>
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a href="#apply" className={`inline-flex items-center text-base font-semibold transition-colors group-hover:translate-x-1 transition-transform ${
                      service.accentColor === 'emerald' ? 'text-emerald-600 hover:text-emerald-700' :
                      service.accentColor === 'blue' ? 'text-blue-600 hover:text-blue-700' :
                      service.accentColor === 'purple' ? 'text-purple-600 hover:text-purple-700' :
                      service.accentColor === 'orange' ? 'text-orange-600 hover:text-orange-700' :
                      'text-gray-600 hover:text-gray-700'
                    }`}>
                      {t.services.learnMore}
                      <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}