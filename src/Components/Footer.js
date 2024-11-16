import React from 'react'
import arrow from '../Images/rightarrow.png'
import '../Style/footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <span>About</span>
        <p>Location</p>
        <p>Franchise With Us</p>
        <p>Partners</p>
        <p>About Us</p>
        <p>Make Fetch Happen!</p>
      </div>
      <div className='footer-content'>
      <span>Resources</span>
        <p>Reviews</p>
        <p>Pet Resources Center</p>
        <p>Media Fact Sheet</p>
        <p>Blog</p>
        <p>News</p>
      </div>
      <div className='footer-content'>
        <span style={{visibility: "hidden"}}>1</span>
        <p>Gift Cards</p>
        <p>Services</p>
        <p>Franchise Login</p>
        <p>Terms of Use</p>
        <p>Privacy Policy</p>
      </div>
      <div className='footer-content'>
        <span>NewsLetter</span>
        <p className='footer-w-p'>Sign up to receive the Fetch! Family Newsletter</p>
        <div className='footer-links'>
              <div className='footer-links-button'>
                <p>Email Address</p>
                <div className='footer-links-img'>
                  <img src={arrow} alt="arrow"/>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer