import React, { useState } from 'react'
import "./List.scss"
import Card from "../Card/Card"
import useFetch from '../../hooks/useFetch'

const List = ({subCats, maxPrice, sort, catId}) => {
    let [data] = useFetch(//`products`
        `products?=*&categories_eq=${catId}
        ${subCats?.map(
            (item) =>`&sub_categories_eq=${item}`
          )}`
      );
    //console.log(data)
    return (
    <div className='list'>
        {
            data?.map(item=>{
            return <Card item={item} key={item.id} />
            })
        }
    </div>
    )
}

export default List