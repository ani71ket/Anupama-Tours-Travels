import React from 'react'
import logo from '/logo.svg'
import { pagelinks } from '../assets/data'
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
       <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img width="200px" src={logo} class="nav-logo" alt="ATT" />
         
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        
        <ul class="nav-links" id="nav-links">
          {pagelinks.map((item,id)=>(
            <li key={id}>
            <a href={item.href} class={item.class}> {item.text} </a>
          </li>
          ))}
        </ul>

         <ul class="nav-icons">
          
           <a href="tel:+91 094226 07694" class="nav-call-button">
            
            <span style={{
                    border: '1px solid #007bff',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    backgroundColor: '#fff',
                    color: 'hsl(185, 62%, 45%)',}}> <FaPhoneAlt/>+91 094226 07694 </span>
          </a>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon"
              ><i class="fab fa-squarespace"></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar