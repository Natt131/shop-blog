import React, { useState } from 'react'
import "./Slider.scss"
import { useActionData } from 'react-router-dom';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://mobimg.b-cdn.net/v3/fetch/83/833f10e43a941dca1cbf0b62ba50aed6.jpeg",
        "https://uhd.name/uploads/posts/2022-03/1648506161_41-uhd-name-p-devushki-moda-london-devushka-krasivo-foto-43.jpg",
        "https://img5.goodfon.ru/wallpaper/original/3/b9/victor-sidorenko-krasivaia-model-shatenka-sidit-na-polu-poza.jpg",
      ];
    
    const prevSlide = () =>{
        setCurrentSlide(currentSlide===0 ? 2 : (prev)=>prev-1)
    }
    const nextSlide = () =>{
        setCurrentSlide(currentSlide===2 ? 0 : (prev)=>prev+1)
    }

  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100 }vw)` }}>
            <img src={data[0]} alt=""/>
            <img src={data[1]} alt=""/>
            <img src={data[2]} alt=""/>
        
        </div>
        <div className="icons">
           
                <div className="icon" onClick={prevSlide}>
                    left
                </div>
                <div className="icon" onClick={nextSlide}>
                    right
                </div>
           
        </div>
    </div>
  )
}

export default Slider