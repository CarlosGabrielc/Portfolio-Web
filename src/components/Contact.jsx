import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <form className="contact-form red-border">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
      <div className="footer">
        <div className="container">
          <div className="social-icons">
            <a href="https://www.instagram.com/totocruzz/" className="social-icon-img">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/instagram.svg" alt="Instagram" width="24" />
            </a>
            <a href="https://www.linkedin.com/in/carlos-gabriel-cruz" className="social-link">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" alt="LinkedIn" className="social-icon-img" />
              </a>


              <a href="https://github.com/CarlosGabrielc" className="social-link">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg" alt="GitHub" className="social-icon-img" />
            </a>
          </div>
        </div>
      </div>



    </section>
  )
}

export default Contact