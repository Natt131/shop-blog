import React from 'react'
import {Link} from 'react-router-dom'
import "./Card.scss"

const Card = ({item, posting}) => {
    //console.log(item.title)
   // console.log(posting)
    if (posting) {
      return (
        //<div>card</div>
       
        
           <Link className='link' to={`/product/${item.id}`} >
              <div className="image">
                {item.isNewCol&&<span>New Season</span>}
                <img src={'http://localhost:1337'+item.img.url} alt="" className='mainImg'/>
                <img src={'http://localhost:1337'+item.img.url2} alt="" className='secondImg'/>
              </div>
          </Link>
       
      )
    }
    else {
      return (
        
        //<div>card</div>
        <Link className='link' to={`/product/${item.id}`} >
        <div className='card'>
          <div className="image">
            {item.isNewCol&&<span>New Season</span>}
            <img src={'http://localhost:1337'+item.img.url} alt="" className='mainImg'/>
            <img src={'http://localhost:1337'+item.img.url2} alt="" className='secondImg'/>
          </div>
          <h2> {item.title}</h2>
          <div className="prices">
            <h3>{item.oldprice}</h3>
            <h3>{item.price}</h3>
          </div>
          
        </div>
        </Link>
      )
    }
}

export default Card