import React from 'react'
import './About.css'
import  about from '../img/about.jpg'

const About = () => {
  return (
    <div>
           <section id="about">
        <div className="about-wrapper container">
            <div className="about-text ">
                <p className="small">About</p>
                <h2>we've been making healthy food for last 10 years</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse fugit laudantium, iste officiis nobis quo quidem labore exercitationem nam!</p>
            </div>
            <div className="about-img">
               <img src={about} alt=""/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About