import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="#" className="social-icon">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/instagram.svg" alt="Instagram" width="24" />
          </a>
          <a href="#" className="social-icon">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" alt="LinkedIn" width="24" />
          </a>
          <a href="#" className="social-icon">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg" alt="GitHub" width="24" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer