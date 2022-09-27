import React from 'react'
import Navbar from './Navbar'
import Header from  './Header'
import Services from './Services'
import Price from './Price'
import About_us from './About_us'
import Contact_Us from './Contact_Us'
import Footer from './Footer'
import Our_team from './Our_team'
import Pheader from './Pheader'
import Portfolioo from './Portfolioo'
import Citation from './Citation'

const Home = () => {
  return (
    <>
    
    <Navbar/>
    <Header/>
    <Services/>
    <About_us/>
    <Price/>
    <Portfolioo/>
    
    <Contact_Us/>
    <Our_team/>
    
    <Footer/>
    
    </>
  )
}

export default Home