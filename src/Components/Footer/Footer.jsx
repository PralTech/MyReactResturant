import React from 'react'
import './Footer.css'
import facebook0 from '../img/facebook0.png'
import insta from '../img/insta.png'
import twitter from '../img/twitter.png'
import youtube from '../img/youtube.png'




const Footer = () => {
  return (
    <div>
      <footer id="fooder">
        <h2>PralTech React-Restaurant Website &copy; all rights reserved. </h2>
        <div className="link-container">
          <div className="link"><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img src={facebook0} width="30px" height="30px" alt='' /></a></div>
          <div className="link"><a href="https://www.instagram.com" rel="noreferrer" target="_blank"><img src={insta} width="30px" height="30px" alt=''/></a></div>
          <div className="link"><a href="https://twitter.com/login" rel="noreferrer" target="_blank"><img src={twitter} width="30px" height="30px" alt=''/></a></div>
          <div className="link"><a href="https://www.youtube.com" rel="noreferrer" target="_blank"><img src={youtube} width="30px" height="30px" alt='' /></a></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer