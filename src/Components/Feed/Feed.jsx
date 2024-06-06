import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { Api_key } from '../../data'
import {valueConverter} from '../../data'
import moment from 'moment'

const Feed = ({category}) => {

   const [data,setData] = useState([]);

   const fetchData = async() => {
      const video_list_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=${category}&key=${Api_key}`;

      await fetch(video_list_url).then(response=>response.json()).then(data=>setData(data.items))
   }

   useEffect( ()=>{
      fetchData();
   },[category])

  return (
    <div className='feed'>
         {data.map((item,index)=>{
            return (
           <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
            <img src={item.snippet.thumbnails.medium.url} />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{valueConverter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
         </Link>
            )
         })}

        
    </div>
  
  )
}

export default Feed
