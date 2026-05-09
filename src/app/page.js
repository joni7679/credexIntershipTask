import React from 'react'
import Navbar from './components/common/Navbar'
import Hero from './components/landing/Hero'
import Features from './components/landing/Features'
import Footer from './components/common/Footer'
import Faqsection from './components/landing/Faqsection'
import EfficiencySteps from './components/landing/EfficiencySteps'

const page = () => {
  return (
    <>

      <Hero />
      <Features />
      <Faqsection />
      <EfficiencySteps />
    </>
  )
}

export default page