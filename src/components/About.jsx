import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About me</h2>

        <div className="about-content">
          <div className="about-text red-border">
            <p>🚀 I am a software developer in training, with knowledge of C++ 🖥️, JavaScript ⚡, and web development with React.js ⚛️. I have learned about data structures 📊, arrays 🔢, and data management 💾 in C++.
              💡 I have also worked on practical projects, such as an e-commerce platform 🛒, applying my web development skills.
              📈 Currently, I continue expanding my experience with modern technologies while balancing my learning with personal and academic projects 🎓📚.</p>
          </div>
          <div className="about-image">
            <img src="https://i.imgur.com/Zvg67us_d.webp?maxwidth=760&fidelity=grand" alt="Carlos Cruz" className="profile-image" />
            <div className="social-links">
              <a href="https://www.linkedin.com/in/carlos-gabriel-cruz" className="social-link">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" alt="LinkedIn" className="social-icon-img" />
              </a>
              <a href="https://github.com/CarlosGabrielc" className="social-link">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg" alt="GitHub" className="social-icon-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About