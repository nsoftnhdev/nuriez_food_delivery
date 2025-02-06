import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.nlogo} alt="" />
          <p>A fusion of flavors inspired by the Malaysian archipelago.</p>
          <div className="footer-social-icons">
            <Link to="https://www.facebook.com/nurieicloud">
              <img src={assets.facebook_icon} alt="" />
            </Link>
            <Link to="https://x.com/?lang=en&mx=2">
              <img src={assets.twitter_icon} alt="" />
            </Link>
            <Link to="https://www.linkedin.com/in/nurillahi-roxas-899675346/">
              <img src={assets.linkedin_icon} alt="" />
            </Link>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+60 012345678</li>
            <li>contact@nuriezfood.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ Nuriezfood.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
