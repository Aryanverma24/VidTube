import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/images/video.mp4";
import like from "../../assets/images/like.png";
import dislike from "../../assets/images/dislike.png";
import share from "../../assets/images/share.png";
import save from "../../assets/images/save.png";
import jack from "../../assets/images/jack.png";
import user_profile from "../../assets/images/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel To Learn Web Developement</h3>
      <div className="play-video-info">
        <p>1521 Views &bull; 2 days ago</p>
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
