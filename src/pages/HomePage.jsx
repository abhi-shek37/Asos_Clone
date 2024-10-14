import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Navbar3 from '../components/Navbar3'
import Footer from '../components/Footer'
import WomenHome from './WomenHome'

const HomePage = () => {
  return (
    <div>
      <Navbar1/>
      <Navbar2/>
      <Navbar3/>
      <WomenHome/>
      <Footer/>
    </div>
  )
}

export default HomePage
