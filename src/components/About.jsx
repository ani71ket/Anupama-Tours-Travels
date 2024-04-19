import React from 'react'
import { motion} from 'framer-motion';
import about from '/about.jpg'

const About = () => {
const text1 = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernaturquisquam harum nam cumque temporibus explicabo dolorum sapiente odiounde dolor".split(" ");

  return (
    <div>
          <section class="section" id="about">
      <div class="section-title">
        <h2>about <span>us</span></h2>
      </div>

      <div class="section-center about-center">
        <div class="about-img">
          <img
            src={about}
            class="about-photo"
            alt="awesome beach"
            style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}
          />
        </div>
        <article >
          <h5>YOUR GATEWAY TO MAHABALESHWAR'S CHARM</h5>
          <h3>Anupama Tours & Travels</h3>


          <p>
          Welcome to Anupama Tours & Travels, your trusted partner in exploring the picturesque landscapes and cultural richness of Mahabaleshwar. At Anupama, we prioritize values of punctuality, safety, and customer satisfaction, ensuring that every journey with us is not just a ride but an unforgettable adventure.
          </p>
       
          <p>
          Whether you’re seeking a scenic tour of Mahabaleshwar, reliable transportation to Mumbai or Pune, or simply a convenient taxi service around town, we’re here to make your travel dreams a reality.
          </p>
          
        </article>
      </div>
    </section>
    </div>
  )
}

export default About