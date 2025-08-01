'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ApplicationForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    purpose: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error' | null, message: string}>({
    type: null,
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    try {
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: t.applicationForm.submitSuccess
        })
        setFormData({
          fullName: '',
          dateOfBirth: '',
          phoneNumber: '',
          email: '',
          purpose: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your application. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="apply" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-wider" style={{ fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans-serif' }}>
            {t.applicationForm.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.applicationForm.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Background decoration */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-100 rounded-full opacity-50"></div>
          
          {/* Gradient border */}
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-green-200 via-gray-200 to-green-200">
            {submitStatus.type === 'success' ? (
              <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
                <div className="mb-6">
                  <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
                <p className="text-lg text-gray-600">{submitStatus.message}</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-800">
                  {t.applicationForm.fullName} *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 transition duration-200 text-gray-900 placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-800">
                  {t.applicationForm.dateOfBirth} *
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 transition duration-200 text-gray-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-800">
                  {t.applicationForm.phoneNumber} *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 transition duration-200 text-gray-900 placeholder-gray-400"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 transition duration-200 text-gray-900 placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="mb-10">
              <label htmlFor="purpose" className="block text-sm font-medium text-gray-800 mb-2">
                {t.applicationForm.purpose} *
              </label>
              <div className="relative">
                <select
                  id="purpose"
                  name="purpose"
                  required
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 transition duration-200 text-gray-900 appearance-none bg-white"
                >
                  <option value="">Choose your purpose</option>
                  <option value="school">🎓 {t.applicationForm.purposeOptions.school}</option>
                  <option value="work">💼 {t.applicationForm.purposeOptions.work}</option>
                  <option value="visit">✈️ {t.applicationForm.purposeOptions.visit}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transition duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Submitting...' : `${t.applicationForm.submit} →`}
            </button>

            {submitStatus.type === 'error' && (
              <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
                <p className="text-center font-medium">
                  {submitStatus.message}
                </p>
              </div>
            )}
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}