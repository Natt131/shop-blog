import React from 'react'
import "./PostList.scss"
import Card from "../Card/Card"
import useFetch from '../../hooks/useFetch'
import PostCard from '../PostCard/PostCard'

const PostList = ({subCats, maxPrice, sort, catId}) => {
    const [data] = useFetch(`posts`
    // `posts?=*&category_eq=${catId}
    // ${subCats?.map(
    //     (item) =>`&products.sub_categories_eq=${item}`
    //   )}`
  );
console.log(data)
return (
<div className='list'>
    {
        data?.map(item=>{
        return <PostCard  item={item} key={item.id}/>
        })
    }
</div>
)
}

export default PostList