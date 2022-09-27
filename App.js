import React from 'react'
import Home from './Home'
import { Routes,Route,  } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfoolio from './pages/Portfoolio'
import Service from './pages/Service'
import Pricing from './pages/Pricing'
import Citationf from './pages/Citationf'
import Team from './pages/Team'
import ScrollToTop from './ScrollToTop'







const App = () => {
  return (
    <>
   <ScrollToTop/>
    <Routes>
    
    

      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/portfoolio' element={<Portfoolio/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/price' element={<Pricing/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/citationf' element={<Citationf/>}/>
    </Routes>
    
   
    
   
  </>
  )
}

export default App