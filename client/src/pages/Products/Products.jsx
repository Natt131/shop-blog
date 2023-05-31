import React from 'react'
import List from '../../compnents/List/List'
import { useFetcher, useParams } from 'react-router-dom'
import { useState } from "react";
import "./Products.scss"
import useFetch from '../../hooks/useFetch';"../../hooks/useFetch"


  const Products =  () => {
    const catId = parseInt(useParams().id)
   console.log(catId, "catId")
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState("asc")
    const [[...selectedSubCats], setSelectedSubCats] = useState([])

    const [data] = useFetch(`sub-categories?categories_eq=1`);//?categories_eq=2
    
    const handleChange = (e) => {
      const value = e.target.value;
      const isChecked = e.target.checked;

      setSelectedSubCats(
        
        isChecked
          ? [...selectedSubCats, value]
          : [...selectedSubCats.filter((item) => item !== value)]
      );

    // console.log(selectedSubCats, "from products")
    // window.location.reload();
    };
    
  //  console.log(selectedSubCats,"two");
    // var data=[];
    // data.push(data1);

    return (
      <div className='products'>
        <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
        {data?.map((item)=>
          {
          return ( <div cssName="inputItem" key={item?.id}>
                <input type="checkbox" id={item?.id} value={item?.id} onChange={handleChange}/>
              <label htmlFor={item?.id}>{item?.title}</label>
              </div>
        )
          })}
        </div>
        <div className="filterItem">
          <h2> Filter by price</h2>
          <div className="inputItem">
            <span>0 </span>
            <input type="range" min={0} max={10000} onChange={(maxPrice) => (setMaxPrice())}/>
            <span>{maxPrice} </span>
          </div>
        </div>
          <div className="filterItem">
            <h2> Sort by </h2>
            <div className="inputItem">
              <input type="radio" id="asc" value="asc" name="price" onChange={() => setSort("asc")}/>
              <label htmlFor='asc' >Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input type="radio" id="dexc" value="asc" name="price" onChange={() => setSort("desc")}/>
              <label htmlFor='desc' >Price (Higher first)</label>
            </div>
          </div>
        </div>
        <div className="right">
          <img className='catImg' src="https://w-dog.ru/wallpapers/15/5/325231977271183/stil-ukrashenie-aksessuary-tufli-tufelki-busy-braslet-veer-zhenskoe-fon-oboi-shirokoformatnye-polnoekrannye-shirokoekrannye-shirokoformatnyj.jpg" alt=""/>
          <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
        </div>
      </div>
    )
}

export default Products