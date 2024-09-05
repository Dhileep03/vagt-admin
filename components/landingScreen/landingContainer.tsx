
import React from 'react'
import HeroSection from './HeroComponent'
import Navbar from './NavbarComponent'
import Carousel from './heroFeatures'
import FeatureSection from './featurecomponent1'
import AppComponent from './AppComponent'
import Aboutus from './AboutusComponent'
import Footer from './FooterComponent'


const landingContainer = () => {
  return (
    <div className="bg-white">
      <Navbar/>
      <HeroSection/>
      <Carousel/>
      <Aboutus/>
      <FeatureSection/>
      <AppComponent/>
      <Footer/>
    </div>
  )
}

export default landingContainer
