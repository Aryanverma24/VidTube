import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import video1 from "../../assets/images/video.mp4";
import like from "../../assets/images/like.png";
import dislike from "../../assets/images/dislike.png";
import share from "../../assets/images/share.png";
import save from "../../assets/images/save.png";
import jack from "../../assets/images/jack.png";
import user_profile from "../../assets/images/user_profile.jpg";
import { Api_key } from "../../data";
import { valueConverter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";



const PlayVideo = ({videoId}) => {

  const {videoId2} = useParams

  const [apiData,setApiData] = useState(null);
  const [channelData,setChannelData] = useState(null);
  const [commData,setCommData] = useState([]);


  const fetchVideoData = async() =>{
      // fetching videos data

      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=${videoId}&key=${Api_key}`;
      await fetch(videoDetails_url).then(response=>response.json()).then(data=>setApiData(data.items[2]))
  }

  const fetchOtherData = async() =>{
    // fetch Channel data..
    const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${Api_key}`

    await fetch(channel_url).then(res=>res.json()).then(data=>setChannelData(data.items[2]))

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${Api_key}`;
    await fetch(comment_url).then(res=>res.json()).then(data=>setCommData(data.items))
  }

  useEffect(()=> {
    fetchVideoData();
  },[videoId2])

  useEffect(() =>{
    fetchOtherData();
  },[apiData])

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <h3>{apiData?apiData.snippet.title:"Title Here..."}</h3>
      <div className="play-video-info">
        <p>{apiData?valueConverter(apiData.statistics.viewCount):"16k"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span><img src={like} />{apiData?valueConverter(apiData.statistics.likeCount):155}</span>
          <span><img src={dislike} />2</span>
          <span><img src={share} /> Share</span>
          <span><img src={save} /> Save</span>
        </div>

      </div>

      <hr />

      <div className="publisher">
         <img src={channelData?channelData.snippet.thumbnails.default.url:jack} />
         <div>
          <p>{apiData?apiData.snippet.channelTitle :"9 tailed spirit"}</p>
          <span>{channelData?valueConverter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
         </div>
         <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here..."}</p>
        
        <hr />
        <h4>{apiData?valueConverter(apiData.statistics.commentCount):255} comments</h4> 

        {commData.map((item,index)=>{
            return(
              <div key={index} className="comments">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
    
                <div className="comment-action">
                  <img src={valueConverter(item.snippet.topLevelComment.snippet.likeCount)} alt="" />
                  <span>244</span>
                  <img src={dislike} alt="" />
                  <span>2</span>
                </div>
              </div>
            </div>
            )
        })}
       
      </div>
     </div>
  );
};

export default PlayVideo;
