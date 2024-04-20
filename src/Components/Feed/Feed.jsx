import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/images/thumbnail1.png'
import thumbnail2 from '../../assets/images/thumbnail2.png'
import thumbnail3 from '../../assets/images/thumbnail3.png'
import thumbnail4 from '../../assets/images/thumbnail4.png'
import thumbnail5 from '../../assets/images/thumbnail5.png'
import thumbnail6 from '../../assets/images/thumbnail6.png'
import thumbnail7 from '../../assets/images/thumbnail7.png'
import thumbnail8 from '../../assets/images/thumbnail8.png'
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
