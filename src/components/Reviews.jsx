import React,{useState} from 'react'
import { reviews } from '../assets/data'
import { BiAlignLeft, BiAlignRight } from 'react-icons/bi';

const Reviews = () => {
  const [data, setdata] = useState(reviews)
  const text = "Reviews".split(" ");
  return (
    <div>
      <section className="section" id="reviews">
        <div className="section-title">
          <h2>Customer Reviews<span style={{ color: 'hsl(185, 62%, 45%' }}> & Testimonials</span> </h2>
          <h4><b>Some 5 Star Customer Reviews</b></h4>
          
        </div>
      

        <div class="section-center featured-center">

        {data.map((e)=>(

        <article class="tour-card">
          <div class="tour-img-container">
            <img src={e.image} class="tour-img" alt="" style={{ border: '1px solid black' }} />
           
            
            
          </div>
        </article>
        ))}
      
     
       </div>
      </section>

      <div
  class="container"
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1150px',
    height: '180px', 
    backgroundColor: '#FFA500', 
    border: '1px solid #ccc', 
    borderRadius: '0px',
    padding: '40px', 
    margin: '0 auto' 
  }}
>
  <p style={{ color: '#f7f7f7' }}><h2>Plan your Mahabaleshwar Tour with Anupama Tours & Travels.<br></br>Call : +91 09422607694 </h2></p>
</div>
     <br></br>
      
    </div>
  )
}

export default Reviews