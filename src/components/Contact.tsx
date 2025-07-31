'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t.header.brandName} Consultancy</h3>
            <p className="text-gray-400">
              Your trusted partner for international opportunities
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-green-400 transition duration-200">
                  {t.header.services}
                </a>
              </li>
              <li>
                <a href="#apply" className="text-gray-400 hover:text-green-400 transition duration-200">
                  {t.header.applyNow}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contact.title}</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@lakegn.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Mon-Fri 9AM-6PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Lakegn Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}