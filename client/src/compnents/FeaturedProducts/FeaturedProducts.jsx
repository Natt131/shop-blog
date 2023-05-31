import React, { useEffect, useState } from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card";
import Product from '../../pages/Product/Product';
//import "../../.env"
//import { useState } from 'react';
import axios from "axios"
import useFetch from '../../hooks/useFetch';



const FeaturedProducts = ({type, item}) => {

    const [data1, loading, error] = useFetch(`products?type_eq=${type}`)
    //const {data1, loading, error} = useFetch("products?type_eq='+type")
     //console.log("data1", data1)
  
//      const [data,setData] = useState([]);

//        useEffect(()=>{
//         const fetchData = async()=>{
//             try{
//                 const res = await axios.get('http://localhost:1337/products?type_eq='+type)//process.env.REACT_APP_API_URL+'products'
//                 //console.log(data)
//                 setData(res.data)
//             }catch(err){
//                 console.log(err)
//             }
//         }
//         fetchData();
//     },[])
// console.log(data, "dat");
//data1 = [...data1];

//console.log(a, "aaaaaaaaaa")
  return (
    <div className='FeaturedProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Напоминание: образ может задать настроение целому дню, и наоборот. Поэтому берем пример 
                с наших #lrgirls и наряжаемся, пока по1года наконец позволяет 😉
            </p>
        </div>
        <div className="bottom">
            { error
                ? "Something went wrong!"
                : loading
                ? "loading"
                : data1?.map((item)=>{
                        //data.map(item=>{
                  //  console.log(item?.id)//item={item} key={item.id}
                    if (item?.id)
                    return <Card item={item} key={item?.id} />                  
                    })}
        </div>
    </div>
  )
}

export default FeaturedProducts