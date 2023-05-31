import React, { useState } from 'react'
import './PostCard.scss'
import { Link } from 'react-router-dom'
import { API } from "../../constant";
import { getToken, getDataUser } from "../../helpers"

const PostCard = ({item, post}) => {
  console.log(item, "postcard");
    const [like, setLike]=useState('♡')
    const uploadLike = async () =>{
    const data={}
    data.likes=parseInt(item.likes)+1;
      try {
        const response = await fetch(`${API}posts/${item.id}`, { //user.id
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            // set the auth token to the user's jwt
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
  
        //setUser(responseData);
        console.log("Data saved successfully!");
        setLike('♥');
      } catch (error) {
        console.error(error);
        //message.error("Error! Somthenig went wrong");
      } 
    }

    if (!post) {
    return (
      <div className="post-card">
           <Link className='link' to={`/post/${item.id}`} >
          <div className="post-img">
          <div className="image">
              <img src={'http://localhost:1337'+item.img[0].url} alt="" className='mainImg'/>
              {/* <img src={'http://localhost:1337'+item.img.url2} alt="" className='secondImg'/> */}
            </div>
          </div>
          <div className="post-title"> <h2> {item.title} {item.category.title} {item.text}</h2></div>
          <div className="post-author"><h3> {item.users_permissions_user.username} </h3></div>
          </Link>
          <div className="post-likes">
              <button onClick={()=>uploadLike()}>{like}</button>
              {/* onClick={()=>setLike('♥')} */}
              <h4>{item.likes}</h4>
          </div>
      </div>
      
  )
 }
 else {
  return (
    <div className="product">  
      <div className="left">
        <div className="mainnImg">
          <img src={'http://localhost:1337'+item?.img[0].url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1> {item?.title}</h1>
        <div className="info">
        <span>Created by: {item?.users_permissions_user.username}</span>
        
        <span>Created at: {item?.published_at}</span>
        <hr></hr>
        </div>
        <div className="details">
           <span> CATEGORY</span>
           <hr/>
          {item?.category.title}
          <br/>
          <br /> 
          <span> INFORMATION</span>
           <hr/>
          {item?.text}
        </div>       
      </div>            
    </div> 
)
 }
}

export default PostCard