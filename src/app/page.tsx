import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ApplicationForm from '@/components/ApplicationForm'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <ApplicationForm />
        <FAQ />
        <Contact />
      </main>
    </>
  )
}