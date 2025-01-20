import React from 'react'
import '../index.css';
import './profile.css';
import ReactSwitch from 'react-switch';

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {Link } from 'react-router-dom';

const Profile = ({isDark, setDarkTheme}) => {
    const toggleDarkMode = () => {
        setDarkTheme(!isDark);
    };
  return (
    <div class="main_container">
    <div class="profile" data-theme={isDark? "dark" : "light"}>
       
        
        <div class="section__text ">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Biraj Raya</h1>
        <p class="section__text__p2">A software developer, transforming concepts into reality with code.<br/> Explore my resume or reach out to me. </p>
        <div class="btn-container">
            <Link to="#" target="_blank" rel="noopener">
                <button class="btn btn-color-2">
                    See Resume

                </button>
            </Link>
            <button class="btn btn-color-1">
                Contact Info
            </button>
        </div>
        <div id="socials-container">
        <a href="https://github.com" ><FaGithub class='icon'/></a>
        <a href="https://linkedin.com"><FaLinkedinIn class='icon'/></a>
         <a href="https://instagram.com"><FaInstagram class='icon'/></a>
        </div>
      
    </div>
    <div className='switch'>
            <label>{isDark === true ? "DarkMode" : "LightMode"}</label>
        <ReactSwitch 
                onChange={toggleDarkMode} 
                checked={isDark === true}
            />
        </div>
    </div>
    
    </div>
  )
}

export default Profile
