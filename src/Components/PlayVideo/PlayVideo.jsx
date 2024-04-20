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


const PlayVideo = ({videoId}) => {

  const [apiData,setApiData] = useState(null);

  const fetchVideoData = async() =>{
      // fetching video data

      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%Cstatistics&id=${videoId}&key=${Api_key}`;

      await fetch(videoDetails_url).then(res=>res.json()).then(data => setApiData(data.item[0]));
  }

  useEffect(() => {
    fetchVideoData;
  })

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
        <p>{apiData?valueConverter(apiData.statistics.viewCount):"16k"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span><img src={like} /> 125</span>
          <span><img src={dislike} />2</span>
          <span><img src={share} /> Share</span>
          <span><img src={save} /> Save</span>
        </div>

      </div>

      <hr />

      <div className="publisher">
         <img src={jack} />
         <div>
          <p>9 tailed spirit</p>
          <span>1M Subscribers</span>
         </div>
         <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>Naruto Uzamaki</p>
        <p>Subscribe 9 tailed spirit to get the notification of new videos</p>
        <hr />
        <h4>130 comments</h4> 

        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>Uday Verma <span>1 day ago</span></h3>
            <p>Best Video of the day..</p>

            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>

        
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>Shivam Dube <span>17 hrs ago</span></h3>
            <p>Love from Delhi</p>

            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>

        
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>Aryan Verma <span>1 day ago</span></h3>
            <p>Best Video of the day..</p>

            <div className="comment-action">
              <img src={like} alt="" />
              <span>444</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>Anjali Malhotra <span>2 day ago</span></h3>
            <p>Naruto</p>

            <div className="comment-action">
              <img src={like} alt="" />
              <span>545</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>Akhil Soni<span>1 day ago</span></h3>
            <p>Best Video of the day..</p>

            <div className="comment-action">
              <img src={like} alt="" />
              <span>314</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        
        <div className="comments">
          <img src={user_profile} alt="" />
          <div>
            <h3>Nandini Verma <span>15 hrs ago</span></h3>
            <p>I got it..</p>

            <div className="comment-action">
              <img src={like} alt="" />
              <span>134</span>
              <img src={dislike} alt="" />
              <span>2</span>
            </div>
          </div>
        </div>

      </div>
     </div>
  );
};

export default PlayVideo;
