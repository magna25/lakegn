'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FAQ() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "How does the consultation process work?",
      answer: "Our consultation process begins when you contact us through our website or phone. We schedule an initial consultation to understand your goals - whether for study abroad, events/conference visas, or travel. Our experts then assess your eligibility, guide you through document preparation, and support you throughout the entire application process until successful completion."
    },
    {
      question: "What documents do I need to provide?",
      answer: "Required documents vary by service type but typically include: valid passport, bank statements (3-6 months), educational certificates, employment verification, and specific documents based on your application purpose. We provide a comprehensive checklist after your initial consultation and guide you through preparing each document to meet embassy standards."
    },
    {
      question: "How long does the application process take?",
      answer: "Processing times vary by destination and visa type. Tourist visas typically take 2-4 weeks, student visas 2-4 months, and events/conference visas 3-8 months. We provide realistic timelines during consultation and keep you updated throughout the process. We recommend starting applications well in advance of your intended travel dates."
    },
    {
      question: "Do I need to show proof of sufficient funds?",
      answer: "Yes, financial documentation is crucial for all applications. You'll need bank statements showing stable income and sufficient funds to cover your expenses. Specific amounts vary by destination and purpose - study abroad typically requires proof of tuition plus living expenses, while tourist visas require demonstration of trip funding capability."
    },
    {
      question: "What if my application gets rejected?",
      answer: "While we maintain high success rates, if an application is rejected, we analyze the reasons and develop a strategy for reapplication. We provide guidance on addressing rejection reasons, improving documentation, and resubmitting when appropriate. Our expertise helps minimize rejection risks from the start."
    },
    {
      question: "Do you help with visa appointments and interviews?",
      answer: "Absolutely! We handle visa appointment booking, prepare you for interviews with mock sessions, and provide coaching on commonly asked questions. Our team stays updated on embassy procedures and requirements, ensuring you're fully prepared for a successful visa interview."
    },
    {
      question: "Can you help with applications to multiple countries?",
      answer: "Yes, we assist with applications to Europe, United States, Canada, Australia, and other destinations. Whether you're applying to multiple universities, exploring different work opportunities, or planning multi-destination travel, we can coordinate applications and advise on the best strategies for your goals."
    },
    {
      question: "What are your consultation fees?",
      answer: "Our fees vary based on service complexity and destination requirements. We provide transparent pricing during initial consultation with no hidden costs. Payment is typically structured in phases - initial consultation fee, documentation preparation fee, and application processing fee. Contact us for detailed pricing based on your specific needs."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-wider" style={{ fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans-serif' }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our consultation services and application processes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? Our consultants are here to help.
          </p>
          <a 
            href="#apply" 
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
          >
            Contact Us Today
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}