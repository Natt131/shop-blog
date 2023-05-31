import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import { useSelector } from "react-redux";
// import { removeItem, resetCart } from "../../redux/cartReducer";
// import { useDispatch } from "react-redux";
// import { makeRequest } from "../../makeRequest";
// import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const data = [
        {
            id:1,
            img: "https://mykaleidoscope.ru/uploads/posts/2022-01/1643242146_24-mykaleidoscope-ru-p-devushka-v-shlyape-moda-25.jpg",
            title: "Hat",
            oldprice:"20",
            price:"12",
            desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
            id:2,
            img: "https://mykaleidoscope.ru/uploads/posts/2022-01/1643242146_24-mykaleidoscope-ru-p-devushka-v-shlyape-moda-25.jpg",
            title: "Hat",
            oldprice:"20",
            price:"12",
            desc: "ffffffffffffffffffffffffffffff"

        }
    ]

  return (
    <div className="cart">
        <h1>Products of your Cart</h1>
   {data?.map(item=>{
    return (
        <div className="item" key={item.id}>
            <img src={item.img}/>
            <div className="details">
                <h1> {item.title}</h1>
                <p>{item.desc.substring(0,100)}</p>
                <div className="price">1x{item.price}</div>

            </div>
        </div>
    )
   })}
   <DeleteOutlinedIcon className="delete"/>
   <div className="total">
    <span>SUBTOTAL</span>
    <span>$123</span>
   </div>
   <button> PROCEED TO CHECKOUT</button>
   <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart