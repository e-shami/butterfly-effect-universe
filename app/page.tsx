import AboutUs from '@components/about'
import Hero from '@components/hero'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col'>
        <Hero />
        <AboutUs />
    </div>
  )
}
