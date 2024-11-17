import React, { useState } from 'react'
import '../Style/home.css'
import Navbar from '../Components/Navbar'
import golden from '../Images/golden.png'
import arrow from '../Images/rightarrow.png'
import dog from '../Images/dog.png'
import cat from '../Images/cat.png'
import house from '../Images/house.png'
import huella from '../Images/huella.png'
import profile from '../Images/profile-woman.jpeg'
import profile2 from '../Images/profileman.jpg'
import profile3 from '../Images/profilew.jpg'
import salchicha from '../Images/salchi.png'
import kid from '../Images/kid.png'
import calendar from '../Images/calendar.png'
import littledog from '../Images/littledog.png'
import Footer from '../Components/Footer'


const Home = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const containers = [
    { id: 1, content: "Luisa Kent", text: "My dog Max is my best friend. I love how he always knows when I need a boost, and his positive energy inspires me in my creative work. Our walks together are my favorite moments of the day.", color: "#FF6752", myPic: `${profile}`},
    { id: 2, content: "Mary Glenn",text: "I adopted Luna two years ago, and she has completely changed my life. It’s amazing how this little being can fill you with unconditional love. I love how she’s always ready to play or just sit with me while I work.", color: "#4487FF", myPic: `${profile3}` },
    { id: 3, content: "Daniel Rojas", text: "My dog Rocky is like another member of my family. He makes me laugh with his antics and reminds me how important it is to enjoy the little things. Taking care of him has also taught me responsibility and empathy.", color: "#FF6752", myPic: `${profile2}` },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? containers.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === containers.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <div className='home-container'>
      <Navbar/>
      <section className='home-section-one'>
        <div className='home-section-one_welcome'>
            <h1>We Get Pet Care!</h1>
            <p>For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!</p>
            <div className='home-section-one_button'>
              <button>Schedule Service</button>
              <span>Or Call 866.338.2463</span>
            </div>
        </div>
        <div className='home-section-one_image'>
          <div className='home-section-one_image_content'>
            <img src={golden} alt=""/>
          </div>
        </div>
      </section>
      <section className='home-section-two'>
        <div className='home-section-two_services'>
          <h1>Our Services</h1>
          <p>National Brand With a Local Feel. Experience the Fetch! Difference</p>
          <div className='home-section-links'>
            <span>Enter Your Location and Fetch Our Services</span>
            <div className='home-section-links-button'>
              <p>Zip Code</p>
              <div className='home-section-links-img'>
                <img src={arrow} alt="arrow"/>
              </div>
            </div>
          </div>
        </div>
        <div className='home-section--two_boxes'>
          <div className='home-section-boxes'>
            <img src={dog} alt="dog"/>
            <p>Dog Walking</p>
          </div>
          <div className='home-section-boxes'>
            <img src={cat} alt="cat"/>
            <p>Pet Sitting</p>
          </div>
          <div className='home-section-boxes'>
            <img src={house} alt="house"/>
            <p>Overnight Care</p>
          </div>
          <div className='home-section-boxes'>
            <img src={huella} alt="huella"/>
            <p>Other Services</p>
          </div>
        </div>
      </section>
      <section className='home-section-three'>
        <h1>Here's what pet owners have to say about Fetch! Pet Care...</h1>
        <div className='home-section-three_carrousel'>
          <button className='left' onClick={handlePrev}>
            <img src={arrow} alt="arrowleft"/>
          </button>
          <div className='home-section-carrousel'>
            {containers.map((container, index) => (
              <div key={container.id} className={`home-carousel-item ${currentIndex === index ? "active" : "inactive"}`} style={{ backgroundColor: container.color }}>
                <img src={container.myPic} alt="profile"/>
                <h2>{container.content}</h2>
                <p>{container.text}</p>
              </div>
            ))}
          </div>
          <button className="right" onClick={handleNext}>
            <img src={arrow} alt="arrowright"/>
          </button>
        </div>
      </section>
      <section className='home-section-four'>
        <div className='home-section-four_images'>
          <div className='home-section-images1'>
            <img className='home-img-size' src={calendar} alt="items"/>
            <p className='home-p-size'>Reserve</p>
          </div>
          <div className='home-section-images2'>
            <img className='home-img-size' src={kid} alt="items"/>
            <p className='home-p-size'>Match</p>
          </div>
          <div className='home-section-images3'>
            <img className='home-img-size' src={salchicha} alt="items"/>
            <p className='home-p-size'>Relax</p>
          </div>
        </div>
        <div className='home-section-four_works'>
            <h2>How it Works</h2>
            <p>Because finding a good pet sitter shouldn’t be a hassle. With Fetch! It’s as easy as…</p>
            <div className='home-section-links'>
              <span>Enter Your Location and Fetch Our Services</span>
              <div className='home-section-links-button'>
                <p>Zip Code</p>
                <div className='home-section-links-img'>
                  <img src={arrow} alt="arrow"/>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className='home-section-five'>
        <div className='home-section-five_content'>
          <div className='home-section-images'>
            <div className='home-section-images_content'>
              <img src={littledog} alt="littledog"/>
            </div>
          </div>
          <div className='home-section-make'>
            <h2>Make Fetch! Happen</h2>
            <p>If you love pets and want exciting work, apply to be a Fetch! Pet Care Provider! We train every team member and provide ongoing support to help you get the most from your experience.</p>
            <button>Join Now</button>
          </div>
        </div>
      </section>
      <Footer/> 
    </div>
  )
}

export default Home