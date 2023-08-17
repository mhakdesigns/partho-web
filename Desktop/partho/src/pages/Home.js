import React from 'react'
import TopNav from '../components/TopNav'
import Header from '../components/Header'
import About from '../components/About'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import ServicesSection from '../components/Service'
import DestinationSection from '../components/Destination'
import FixedIcons from '../components/WtspInsta'

const Home = () => {
  return (
    <div>
        <TopNav/>
        <FixedIcons/>
        <Header/>
        <About/>
        <Welcome/>
        <ServicesSection/>
        <DestinationSection/>
        <Footer/>
    </div>
  )
}

export default Home