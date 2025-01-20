import React from 'react'
import '../index.css';
import './content.css';


const Content = ({isDark}) => {
  return (
    <>
         <div className="content" data-theme={isDark? "dark":"light"}>
      <div className="about-me content_box">
        <h3 className='header'>About Me</h3>
        <p className='para'>With a strong foundation in software development, I specialize in creating scalable web applications and enhancing user experiences. I’m passionate about exploring new technologies, contributing to open-source projects, and constantly honing my coding skills.<br/> Beyond my technical pursuits, I enjoy exploring the outdoors, delving into emerging tech trends, and working on innovative projects. I’m driven by the belief that technology has the power to address real-world challenges and am eager to contribute to impactful advancements.</p>
      
      </div>
      <div className="experience content_box">
      <h3 className='header'>Experience</h3>
      <div className="experience_box">
        <div className="experience_item">
          <div className="header_container">
            <div>
            <h4 className='sub_header'>Javascript Developer</h4>
            <p className='company_name'>NepalITSolutions</p>
            </div>
            <p className='date'>2019-2021</p>
          </div>       
          <ul>
            <li>Developed and maintained web applications using React and Node.js</li>
            <li>Collaborated with cross-functional teams to define, design, and ship new features</li>
            <li>Implemented responsive design to enhance user experience across devices</li>
            <li>Participated in code reviews and provided constructive feedback to peers</li>
          </ul>
        </div>
        
      </div>
      <div className="experience_box">
        <div className="experience_item">
          <div className="header_container">
            <div>
            <h4 className='sub_header'>Javascript Developer</h4>
            <p className='company_name'>NepalITSolutions</p>
            </div>
            <p className='date'>2019-2021</p>
          </div>       
          <ul>
            <li>Developed and maintained web applications using React and Node.js</li>
            <li>Collaborated with cross-functional teams to define, design, and ship new features</li>
            <li>Implemented responsive design to enhance user experience across devices</li>
            <li>Participated in code reviews and provided constructive feedback to peers</li>
          </ul>
        </div>
        
      </div>
      
    </div>
    </div>
      
    </>
  )
}

export default Content
