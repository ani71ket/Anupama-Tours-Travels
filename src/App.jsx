import { useState } from 'react'

import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Tours from './components/Tours'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Tours/>
      <Reviews/>
      <Footer/>
     
    </>
  )
}

export default App
