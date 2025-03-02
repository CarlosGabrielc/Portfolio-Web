import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className='hero-tittle'>Hello, I'm Carlos Cruz</h1>
          <p>A software developer from Argentina</p>
          <button onClick={() => window.open("https://drive.google.com/file/d/1iWQdKs-xdTNhi8ULjaEPvazrveGQPeJ4/view?usp=sharing",)} >My resume</button>
        </div>
      </div>
    </section>
  )
}

export default Hero