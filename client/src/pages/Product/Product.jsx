import React, { useState } from 'react'
import "./Product.scss"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


const Product = () => {
  const [selectedImg, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const images = [
    "https://ae04.alicdn.com/kf/H81bda57e65934e95b32f41b565211af4s.jpg",
    "https://images.asos-media.com/groups/yarko-rozovyj-kostyum-asos-design-pop/24984-group-1?$n_480w$&wid=476&fit=constrain",
    "https://ae04.alicdn.com/kf/H03d8d9495a264b4a97166890211811cac.jpg"
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e=>setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={e=>setSelectedImage(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt=""/>
        </div>
      </div>
      <div className="right">
        <h1> Title of product</h1>
        <span> $199</span>
        <p>
        В интернет-магазине "Алиэкспресс" вы можете купить 
        Костюм женский двубортный с лацканами, строгий пиджак
         с длинным рукавом и брюки цвета фуксии, 
         костюм из 2 предметов недорого со скидкой 25% по 
        цене 61р.. Также ознакомьтесь с другими предложениям бренд
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev===1 ? 1 : prev-1)}>-</button>
            {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add'> 
        <ShoppingCartOutlinedIcon/> Add to CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderOutlinedIcon/> add to WISH
          </div>
          <div className="item">
            <ShoppingCartOutlinedIcon/> add to COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: women</span>
          <span>Type: custum</span>
          <span>Caterory: ofice</span>
        </div>
        <hr></hr>
        <div className="details">
          <span> DESCRIPTION</span>
          <hr/>
          <span> ADDITIONAL INFORMATION</span>
          <hr/>
        <span> FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product