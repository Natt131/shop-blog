import React, { useState } from 'react'
import List from '../../compnents/List/List'
import { useFetcher, useParams } from 'react-router-dom'

import "./Posts.scss"
import useFetch from '../../hooks/useFetch';
import PostList from '../../compnents/PostList/PostList';
"../../hooks/useFetch"


const Posts = () => {
    const catId = parseInt(useParams().id)
    // console.log(catId, "catId")
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState('1')
    const [wish, setWish] = useState(false)
    const [data] = useFetch(`posts`)
    const [categories] = useFetch(`categories`)
    const [subcategories] = useFetch(`sub-categories`)

    const [[...selectedSubCats], setSelectedSubCats] = useState([])
    const [selectedCat, setSelectedCat] = useState()


    

    const handleChangeWish = ()=> {
        wish ? setWish(false) :
        setWish (true);       
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        setSelectedSubCats(
        
        isChecked
            ? [...selectedSubCats, value]
            : [...selectedSubCats.filter((item) => item !== value)]
        );
    };

    return (
        <div className='products'>
        <div className="left">
        <div className="filterItem">
            <h3>Posts with products by Sub-Categories</h3>
        {subcategories?.map((item)=>
            {
            return ( <div cssName="inputItem" key={item?.id}>
                <input type="checkbox" id={item?.id} value={item?.id} onChange={handleChange}/>
                <label htmlFor={item?.id}>{item?.title}</label>
                </div>
        )
            })}
        </div>
        <div className="filterItem">
            <h2> With products from wish-list</h2> <input type="checkbox" onChange={() => handleChangeWish()}/>
          
          
         
        </div>
            <div className="filterItem">
            <h2> Posts by category </h2>
            <div className="inputItem">
                <input type="radio"  value="1" name="women" onChange={() => setSort(1)}/>
                <label htmlFor='asc' >Women</label>
            </div>
            <div className="inputItem">
                <input type="radio" value="2" name="men" onChange={() => setSort(2)}/>
                <label htmlFor='desc' >Men</label>
            </div>
            </div>
        </div>
        <div className="right">
            <img className='catImg' src="https://fikiwiki.com/uploads/posts/2022-02/1644713962_31-fikiwiki-com-p-prikolnie-kartinki-pro-shoping-37.jpg" alt=""/>
            {/* <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/> */}
            <PostList/>
        </div>
        </div>
    )
}

export default Posts