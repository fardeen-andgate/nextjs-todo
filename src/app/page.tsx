import Image from 'next/image'
import Header from './components/header'
import HeroSection from './components/heroSection'
import Footer from './components/footer'
import '../app/globals.css'

export default function Home() {
  return (
   <main className='full-screen-background flex min-h-screen flex-col'>
    <div className='max-w-4xl mx-auto p-5'>
    <Header />
    </div>
    <HeroSection/>
   </main>
  )
}
