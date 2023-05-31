import React from 'react'
import Slider from '../../compnents/Slider/Slider'
import FeaturedProducts from '../../compnents/FeaturedProducts/FeaturedProducts'
//import Categories from '../../compnents/Categories/Categories'
import Categories from '../../compnents/Categories/Categories'
import "./Home.scss"
import Contact from '../../compnents/Contact/Contact'

const Home = () => {
  return (
    <div className='home' >
      <Slider/>
      <FeaturedProducts type="featured" />
      <span> Popular categories</span>
      <Categories/>
      {/* <Categories/> */}
      <FeaturedProducts type="trending" />
      <Contact/>
    </div>
  )
}

export default Home