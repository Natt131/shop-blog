import React from 'react'
import "./Post.scss"
import {  useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import PostCard from '../../compnents/PostCard/PostCard';
import Card from '../../compnents/Card/Card';

const Post = () => {
    const catId = parseInt(useParams().id)//id post
    const [post] = useFetch(`posts/${catId}`)

    const item=[];
    item.push(post);

    console.log(item, "apost")
   if(post===[])console.log("null")
   return (
     <div > 
    {
    item?.map((item1)=>{
        if (item1?.id)
        return <PostCard item={item1} post={true} key={item1?.id}  />
    })
    }
    <h2> You can get it with thats products!</h2>
    {
         post?.products?.map((item)=>{
            console.log(item, "item")
            if (item?.id)
            return <Card item={item} key={item?.id} />
        })
    }
    </div> 
  )
}

export default Post