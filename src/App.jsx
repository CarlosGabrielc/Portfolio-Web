import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stacks from './components/Stacks'
import Contact from './components/Contact'


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Stacks />
        <Contact />
     
      </main>
      
    </div>
  )
}

export default App