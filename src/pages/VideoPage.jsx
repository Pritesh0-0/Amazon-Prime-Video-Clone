import React from 'react'
import video from "../video/rocket.mp4"
import "./DetailPage.modules.css"
const VideoPage = () => {
  return (
    <div>
    <video src={video} className="main_video" controls autoPlay loop></video>
    </div>
  )
}

export default VideoPage