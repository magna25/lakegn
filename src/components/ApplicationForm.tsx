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
    country: '',
    hasPassport: '',
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
          country: '',
          hasPassport: '',
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

            <div className="mb-8">
              <label htmlFor="country" className="block text-sm font-medium text-gray-800 mb-2">
                {t.applicationForm.country} *
              </label>
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 transition duration-200 text-gray-900 appearance-none bg-white"
                >
                  <option value="">Select country</option>
                  <option value="afghanistan">🇦🇫 Afghanistan</option>
                  <option value="albania">🇦🇱 Albania</option>
                  <option value="algeria">🇩🇿 Algeria</option>
                  <option value="andorra">🇦🇩 Andorra</option>
                  <option value="angola">🇦🇴 Angola</option>
                  <option value="antigua-and-barbuda">🇦🇬 Antigua and Barbuda</option>
                  <option value="argentina">🇦🇷 Argentina</option>
                  <option value="armenia">🇦🇲 Armenia</option>
                  <option value="australia">🇦🇺 Australia</option>
                  <option value="austria">🇦🇹 Austria</option>
                  <option value="azerbaijan">🇦🇿 Azerbaijan</option>
                  <option value="bahamas">🇧🇸 Bahamas</option>
                  <option value="bahrain">🇧🇭 Bahrain</option>
                  <option value="bangladesh">🇧🇩 Bangladesh</option>
                  <option value="barbados">🇧🇧 Barbados</option>
                  <option value="belarus">🇧🇾 Belarus</option>
                  <option value="belgium">🇧🇪 Belgium</option>
                  <option value="belize">🇧🇿 Belize</option>
                  <option value="benin">🇧🇯 Benin</option>
                  <option value="bhutan">🇧🇹 Bhutan</option>
                  <option value="bolivia">🇧🇴 Bolivia</option>
                  <option value="bosnia-and-herzegovina">🇧🇦 Bosnia and Herzegovina</option>
                  <option value="botswana">🇧🇼 Botswana</option>
                  <option value="brazil">🇧🇷 Brazil</option>
                  <option value="brunei">🇧🇳 Brunei</option>
                  <option value="bulgaria">🇧🇬 Bulgaria</option>
                  <option value="burkina-faso">🇧🇫 Burkina Faso</option>
                  <option value="burundi">🇧🇮 Burundi</option>
                  <option value="cambodia">🇰🇭 Cambodia</option>
                  <option value="cameroon">🇨🇲 Cameroon</option>
                  <option value="canada">🇨🇦 Canada</option>
                  <option value="cape-verde">🇨🇻 Cape Verde</option>
                  <option value="central-african-republic">🇨🇫 Central African Republic</option>
                  <option value="chad">🇹🇩 Chad</option>
                  <option value="chile">🇨🇱 Chile</option>
                  <option value="china">🇨🇳 China</option>
                  <option value="colombia">🇨🇴 Colombia</option>
                  <option value="comoros">🇰🇲 Comoros</option>
                  <option value="congo">🇨🇬 Congo</option>
                  <option value="congo-democratic-republic">🇨🇩 Congo (Democratic Republic)</option>
                  <option value="costa-rica">🇨🇷 Costa Rica</option>
                  <option value="croatia">🇭🇷 Croatia</option>
                  <option value="cuba">🇨🇺 Cuba</option>
                  <option value="cyprus">🇨🇾 Cyprus</option>
                  <option value="czech-republic">🇨🇿 Czech Republic</option>
                  <option value="denmark">🇩🇰 Denmark</option>
                  <option value="djibouti">🇩🇯 Djibouti</option>
                  <option value="dominica">🇩🇲 Dominica</option>
                  <option value="dominican-republic">🇩🇴 Dominican Republic</option>
                  <option value="east-timor">🇹🇱 East Timor</option>
                  <option value="ecuador">🇪🇨 Ecuador</option>
                  <option value="egypt">🇪🇬 Egypt</option>
                  <option value="el-salvador">🇸🇻 El Salvador</option>
                  <option value="equatorial-guinea">🇬🇶 Equatorial Guinea</option>
                  <option value="eritrea">🇪🇷 Eritrea</option>
                  <option value="estonia">🇪🇪 Estonia</option>
                  <option value="eswatini">🇸🇿 Eswatini</option>
                  <option value="ethiopia">🇪🇹 Ethiopia</option>
                  <option value="fiji">🇫🇯 Fiji</option>
                  <option value="finland">🇫🇮 Finland</option>
                  <option value="france">🇫🇷 France</option>
                  <option value="gabon">🇬🇦 Gabon</option>
                  <option value="gambia">🇬🇲 Gambia</option>
                  <option value="georgia">🇬🇪 Georgia</option>
                  <option value="germany">🇩🇪 Germany</option>
                  <option value="ghana">🇬🇭 Ghana</option>
                  <option value="greece">🇬🇷 Greece</option>
                  <option value="grenada">🇬🇩 Grenada</option>
                  <option value="guatemala">🇬🇹 Guatemala</option>
                  <option value="guinea">🇬🇳 Guinea</option>
                  <option value="guinea-bissau">🇬🇼 Guinea-Bissau</option>
                  <option value="guyana">🇬🇾 Guyana</option>
                  <option value="haiti">🇭🇹 Haiti</option>
                  <option value="honduras">🇭🇳 Honduras</option>
                  <option value="hungary">🇭🇺 Hungary</option>
                  <option value="iceland">🇮🇸 Iceland</option>
                  <option value="india">🇮🇳 India</option>
                  <option value="indonesia">🇮🇩 Indonesia</option>
                  <option value="iran">🇮🇷 Iran</option>
                  <option value="iraq">🇮🇶 Iraq</option>
                  <option value="ireland">🇮🇪 Ireland</option>
                  <option value="israel">🇮🇱 Israel</option>
                  <option value="italy">🇮🇹 Italy</option>
                  <option value="ivory-coast">🇨🇮 Ivory Coast</option>
                  <option value="jamaica">🇯🇲 Jamaica</option>
                  <option value="japan">🇯🇵 Japan</option>
                  <option value="jordan">🇯🇴 Jordan</option>
                  <option value="kazakhstan">🇰🇿 Kazakhstan</option>
                  <option value="kenya">🇰🇪 Kenya</option>
                  <option value="kiribati">🇰🇮 Kiribati</option>
                  <option value="kosovo">🇽🇰 Kosovo</option>
                  <option value="kuwait">🇰🇼 Kuwait</option>
                  <option value="kyrgyzstan">🇰🇬 Kyrgyzstan</option>
                  <option value="laos">🇱🇦 Laos</option>
                  <option value="latvia">🇱🇻 Latvia</option>
                  <option value="lebanon">🇱🇧 Lebanon</option>
                  <option value="lesotho">🇱🇸 Lesotho</option>
                  <option value="liberia">🇱🇷 Liberia</option>
                  <option value="libya">🇱🇾 Libya</option>
                  <option value="liechtenstein">🇱🇮 Liechtenstein</option>
                  <option value="lithuania">🇱🇹 Lithuania</option>
                  <option value="luxembourg">🇱🇺 Luxembourg</option>
                  <option value="madagascar">🇲🇬 Madagascar</option>
                  <option value="malawi">🇲🇼 Malawi</option>
                  <option value="malaysia">🇲🇾 Malaysia</option>
                  <option value="maldives">🇲🇻 Maldives</option>
                  <option value="mali">🇲🇱 Mali</option>
                  <option value="malta">🇲🇹 Malta</option>
                  <option value="marshall-islands">🇲🇭 Marshall Islands</option>
                  <option value="mauritania">🇲🇷 Mauritania</option>
                  <option value="mauritius">🇲🇺 Mauritius</option>
                  <option value="mexico">🇲🇽 Mexico</option>
                  <option value="micronesia">🇫🇲 Micronesia</option>
                  <option value="moldova">🇲🇩 Moldova</option>
                  <option value="monaco">🇲🇨 Monaco</option>
                  <option value="mongolia">🇲🇳 Mongolia</option>
                  <option value="montenegro">🇲🇪 Montenegro</option>
                  <option value="morocco">🇲🇦 Morocco</option>
                  <option value="mozambique">🇲🇿 Mozambique</option>
                  <option value="myanmar">🇲🇲 Myanmar</option>
                  <option value="namibia">🇳🇦 Namibia</option>
                  <option value="nauru">🇳🇷 Nauru</option>
                  <option value="nepal">🇳🇵 Nepal</option>
                  <option value="netherlands">🇳🇱 Netherlands</option>
                  <option value="new-zealand">🇳🇿 New Zealand</option>
                  <option value="nicaragua">🇳🇮 Nicaragua</option>
                  <option value="niger">🇳🇪 Niger</option>
                  <option value="nigeria">🇳🇬 Nigeria</option>
                  <option value="north-korea">🇰🇵 North Korea</option>
                  <option value="north-macedonia">🇲🇰 North Macedonia</option>
                  <option value="norway">🇳🇴 Norway</option>
                  <option value="oman">🇴🇲 Oman</option>
                  <option value="pakistan">🇵🇰 Pakistan</option>
                  <option value="palau">🇵🇼 Palau</option>
                  <option value="palestine">🇵🇸 Palestine</option>
                  <option value="panama">🇵🇦 Panama</option>
                  <option value="papua-new-guinea">🇵🇬 Papua New Guinea</option>
                  <option value="paraguay">🇵🇾 Paraguay</option>
                  <option value="peru">🇵🇪 Peru</option>
                  <option value="philippines">🇵🇭 Philippines</option>
                  <option value="poland">🇵🇱 Poland</option>
                  <option value="portugal">🇵🇹 Portugal</option>
                  <option value="qatar">🇶🇦 Qatar</option>
                  <option value="romania">🇷🇴 Romania</option>
                  <option value="russia">🇷🇺 Russia</option>
                  <option value="rwanda">🇷🇼 Rwanda</option>
                  <option value="saint-kitts-and-nevis">🇰🇳 Saint Kitts and Nevis</option>
                  <option value="saint-lucia">🇱🇨 Saint Lucia</option>
                  <option value="saint-vincent-and-the-grenadines">🇻🇨 Saint Vincent and the Grenadines</option>
                  <option value="samoa">🇼🇸 Samoa</option>
                  <option value="san-marino">🇸🇲 San Marino</option>
                  <option value="sao-tome-and-principe">🇸🇹 Sao Tome and Principe</option>
                  <option value="saudi-arabia">🇸🇦 Saudi Arabia</option>
                  <option value="senegal">🇸🇳 Senegal</option>
                  <option value="serbia">🇷🇸 Serbia</option>
                  <option value="seychelles">🇸🇨 Seychelles</option>
                  <option value="sierra-leone">🇸🇱 Sierra Leone</option>
                  <option value="singapore">🇸🇬 Singapore</option>
                  <option value="slovakia">🇸🇰 Slovakia</option>
                  <option value="slovenia">🇸🇮 Slovenia</option>
                  <option value="solomon-islands">🇸🇧 Solomon Islands</option>
                  <option value="somalia">🇸🇴 Somalia</option>
                  <option value="south-africa">🇿🇦 South Africa</option>
                  <option value="south-korea">🇰🇷 South Korea</option>
                  <option value="south-sudan">🇸🇸 South Sudan</option>
                  <option value="spain">🇪🇸 Spain</option>
                  <option value="sri-lanka">🇱🇰 Sri Lanka</option>
                  <option value="sudan">🇸🇩 Sudan</option>
                  <option value="suriname">🇸🇷 Suriname</option>
                  <option value="sweden">🇸🇪 Sweden</option>
                  <option value="switzerland">🇨🇭 Switzerland</option>
                  <option value="syria">🇸🇾 Syria</option>
                  <option value="taiwan">🇹🇼 Taiwan</option>
                  <option value="tajikistan">🇹🇯 Tajikistan</option>
                  <option value="tanzania">🇹🇿 Tanzania</option>
                  <option value="thailand">🇹🇭 Thailand</option>
                  <option value="togo">🇹🇬 Togo</option>
                  <option value="tonga">🇹🇴 Tonga</option>
                  <option value="trinidad-and-tobago">🇹🇹 Trinidad and Tobago</option>
                  <option value="tunisia">🇹🇳 Tunisia</option>
                  <option value="turkey">🇹🇷 Turkey</option>
                  <option value="turkmenistan">🇹🇲 Turkmenistan</option>
                  <option value="tuvalu">🇹🇻 Tuvalu</option>
                  <option value="uganda">🇺🇬 Uganda</option>
                  <option value="ukraine">🇺🇦 Ukraine</option>
                  <option value="united-arab-emirates">🇦🇪 United Arab Emirates</option>
                  <option value="united-kingdom">🇬🇧 United Kingdom</option>
                  <option value="united-states">🇺🇸 United States</option>
                  <option value="uruguay">🇺🇾 Uruguay</option>
                  <option value="uzbekistan">🇺🇿 Uzbekistan</option>
                  <option value="vanuatu">🇻🇺 Vanuatu</option>
                  <option value="vatican-city">🇻🇦 Vatican City</option>
                  <option value="venezuela">🇻🇪 Venezuela</option>
                  <option value="vietnam">🇻🇳 Vietnam</option>
                  <option value="yemen">🇾🇪 Yemen</option>
                  <option value="zambia">🇿🇲 Zambia</option>
                  <option value="zimbabwe">🇿🇼 Zimbabwe</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="hasPassport" className="block text-sm font-medium text-gray-800 mb-2">
                {t.applicationForm.hasPassport} *
              </label>
              <div className="relative">
                <select
                  id="hasPassport"
                  name="hasPassport"
                  required
                  value={formData.hasPassport}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-0 transition duration-200 text-gray-900 appearance-none bg-white"
                >
                  <option value="">Select an option</option>
                  <option value="yes">✅ {t.applicationForm.passportOptions.yes}</option>
                  <option value="no">❌ {t.applicationForm.passportOptions.no}</option>
                  <option value="expired">🗓️ {t.applicationForm.passportOptions.expired}</option>
                  <option value="applying">📋 {t.applicationForm.passportOptions.applying}</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
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