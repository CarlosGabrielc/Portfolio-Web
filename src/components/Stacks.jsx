import React from 'react'
import './Stacks.css'

function Stacks() {
  return (
    <section id="stacks" className="stacks">
      <div className="container">
        <h2 className="section-title">Stacks</h2>
        
        <h3 className="stack-subtitle">Languages</h3>
        <div className="icon-container">
          <img src="https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" alt="C" className="icon" />
          <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" alt="JavaScript" className="icon" />
          <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png" alt="HTML" className="icon" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" className="icon" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="React" className="icon" />
        </div>
        
        <h3 className="stack-subtitle">Other tools and technologies</h3>
        <div className="icon-container">
          <img src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png" alt="Linux" className="icon" />
          
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code" className="icon" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt="Git" className="icon" />
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="icon" />
        </div>
      </div>
    </section>
  )
}

export default Stacks