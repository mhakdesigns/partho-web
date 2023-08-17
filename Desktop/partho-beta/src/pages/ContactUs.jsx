import React from 'react'

import TopNav from '../components/TopNav'
import Header from '../components/Header'
import FixedIcons from '../components/WtspInsta'
import Footer from '../components/Footer'
import Contacts from '../components/Contact'
import About from '../components/About'


const Contact = () => {
  return (
    <div>
          <TopNav/>
        <FixedIcons/>
        <Header/>
        <About/>
        <Contacts/>
        <Footer/>

    </div>
  )
}

export default Contact