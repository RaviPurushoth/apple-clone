import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Section from './components/Section'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Header/>
      <Hero/>
      <Section/>
      <Footer/>
      
    </>
  )
}

export default App
