import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <Features />
      <Roadmap />
      <Footer />
    </div>
  )
}
