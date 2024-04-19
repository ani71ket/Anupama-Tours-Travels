import React,{useState} from 'react'
import services  from '../assets/data'
import { color, motion } from 'framer-motion';

const Services = () => {
  const [names, setnames] = useState(services);
  return (
    <div>
     
       <motion.section
       class="section services" id="services">
      <div class="section-title" >
        <h2 > Bus Ticket<span> Booking </span></h2>
        <p>Experience hassle-free Mahabaleshwar bus booking with Anupama Tours & Travels. <br></br> Our luxurious sleeper and push back seat buses offer comfort and style for your journey from Mahabaleshwar to Mumbai, Pune, Surat, and Goa. <br></br> With our commitment to reliability, safety, and customer satisfaction, booking your Mahabaleshwar bus ride with us ensures a seamless travel experience.</p>
      </div>
      <div class="section-center services-center">

      {names.map((e)=>(
        <article class="service">
          <span class="service-icon"><i class="fas fa-wallet fa-fw"></i></span>
          <div class="service-info">
            <h4 class="service-title">{e.title}</h4>
            <p class="service-text">
              {e.desc}
            </p>
          </div>
        </article>
      ))}
        </div>
        <br></br>
      <div class="whatsapp-button-container" style={{marginLeft: "500px"}} >
          <a href={`https://wa.me/${9462003366}`} class="whatsapp-button">
            <i class="fab fa-whatsapp"></i>
            <h3><span style={{ color: 'black' }} >Click Here to Book on </span><span style={{ color: 'hsl(185, 62%, 45%' }}>Whatsapp</span></h3>
          </a>
          </div>
    </motion.section>
    <div
class="container"
style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
width: '850px',
height: '120px', 
backgroundColor: '#000080', 
border: '1px solid #ccc', 
borderRadius: '0px',
padding: '60px', 
margin: '0 auto' 
}}
>
<p style={{ color: '#f7f7f7' }}><h2>Book Your Bus Journey Now!<br></br>Call Us At: +91 09422607694 </h2></p>
</div>
    
0    </div>
  )
}


export default Services