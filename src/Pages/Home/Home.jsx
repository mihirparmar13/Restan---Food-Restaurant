import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import AboutUs from '../../Components/AboutUs'
import FoodMenu from '../../Components/FoodMenu'
import Reservation from '../../Components/Reservation'
import Contact from '../../Components/Contact'
import Testimonials from '../../Components/Testimonials'
import GalleryBlog from '../../Components/GalleryBlog'



const Home = () => {
  return (
    <div>
      <Header/>
      {/* <HeroSection/> */}
      <AboutUs/>
      <FoodMenu/>
      <Reservation/> 
      <Contact/>                    
      <Testimonials/>
      <GalleryBlog/>
      <Footer/>
      
    </div>
  )
}

export default Home
