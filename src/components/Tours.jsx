import React,{useState} from 'react'
import {tours} from '../assets/data'
import {motion} from 'framer-motion'
const Tours = () => {
  const [data, setdata] = useState(tours)
  const text = "Tours".split(" ");
  return (
    <div>
 

    <section class="section" id="tours">
      <div class="section-title">
        <h2>Taxi & Cab <span style={{ color: 'hsl(185, 62%, 45%' }}>Service</span></h2>
        <h4>Mahabaleshwar Sightseeing Cab & Taxi </h4>
        
        <p>Experience the convenience of exploring Mahabaleshwar at your own pace with our efficient taxi and cab service. <br></br>Our fleet of well-maintained vehicles and experienced drivers ensure a smooth and enjoyable ride for our customers. <br></br><b>SEDAN, HATCHBACK & SUVs</b></p>

        <h4><p style={{marginRight: '600px'}}> Price starts from Rs.650 </p></h4> 
      </div>
      
      <div class="section-center featured-center">

        {data.map((e)=>(

        <article class="tour-card">
          <div class="tour-img-container">
            <img src={e.image} class="tour-img" alt="" />
            
          </div>
          <div class="tour-info">
            <div class="tour-title">
              <h4>{e.title}</h4>
            </div>
            <p>
              {e.desc}
            </p>
            <div class="tour-footer">
              <p>
                <span><i class="fas fa-map"></i></span> {e.country}
              </p>
              <p>{e.days}</p>
              <p>{e.price}</p>
            </div>
            
          </div>
        </article>
        ))}
      
      </div>
    </section>
    <div class="whatsapp-button-container" style={{marginLeft: "500px"}} >
          <a href={`https://wa.me/${9462003366}`} class="whatsapp-button">
            <i class="fab fa-whatsapp"></i>
            <h3><span style={{ color: 'black' }} >Click Here to Book on </span><span style={{ color: 'hsl(185, 62%, 45%' }}>Whatsapp</span></h3>
          </a>
          </div>


<div
class="container"
style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
width: '850px',
height: '120px', 
backgroundColor: '#000040', 
border: '1px solid #ccc', 
borderRadius: '0px',
padding: '60px', 
margin: '0 auto' 
}}
>
<p style={{ color: '#f7f7f7' }}><h2>Book Your Cab/ Taxi Now!<br></br>Call Us At: +91 09422607694 </h2></p>
</div>

</div>
    
  )
}

export default Tours
