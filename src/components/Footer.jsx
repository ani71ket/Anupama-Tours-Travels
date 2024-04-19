import React from 'react'
import logo from '/logo.svg'
import { pagelinks } from '../assets/data'

const Footer = () => {
  return (

    <div>
      
         <footer className="section footer">
      <ul className="footer-links">
        
        {pagelinks.map((item,id)=>(
          <li key={id}>
          <a href={item.href} className="footer-link">{item.text}</a>
          
        </li> 
        ))}


      </ul>
     
      <div className="logo-container">
          <img src={logo} alt="Anupama Tours & Travels" className="logo" style={{ marginRight: '200px' }} /> <br></br>
          <p><b>Discover the breathtaking beauty of Mahabaleshwar with our premier taxi and cab services.</b></p>
          <p><b>We’re here to help you make the most of your trip to Mahabaleshwar.</b></p>
        
        </div>
      <p>CONTACT US AT:</p>
      <p><b>094226 07694 &nbsp; hello@anupamatours.com</b></p>
     <p>Dr Ambedkar Chowk, Near Anupama Hotel, Mahabaleshwar,Maharashtra 412806
        </p>
        <br></br>
      <p className="copyright">
        copyright &copy; 2024 | Anupama Tours & Travels |
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </div>
  )
}

export default Footer