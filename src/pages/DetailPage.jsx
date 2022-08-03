import React from 'react'
import videobg from "../video/rocket.mp4"
// import rocket from "../video/rocketimage.jpg"
import "./DetailPage.modules.css"
import play from "../img/play-64.png"
import { Link, useNavigate } from "react-router-dom";
const DetailPage = () => {
 var navigate = useNavigate();


//  const PlayVideo=()=>{
//   navigate("./VideoPage.jsx")
//  }

  return (
    <div>
        <video src={videobg} autoPlay loop controls className='main_back_image'/> 
        
        {/* <img src={rocket} alt="" className='main_back_image'/> */}
         <div className='over'>
         
         <h1>Rocketry - The Nambi Effect</h1>
         <div className='flex'>

            <div className='flex continue_button'>
              <img src={play} alt="" className='play_icon'/>
              <Link to="./VideoPage.jsx"><p>Continue watching</p></Link> 
            </div>
            
            <div className='purchase_button'>
                More purchase options
            </div>

         </div>

         <p className='description'>Rocketry – The Nambi Effect is a retelling of Nambi Narayananʼs life as it unravels in an interview by Superstar Suriya, on TV. Like many legends, Nambi is deeply flawed, his genius and obsession earning him enemies and detractors, making him a compelling modern protagonist. The film challenges the audience to take up the responsibility of recognizing & celebrating these special contributors.</p>
          
        
         </div>
    </div>
  )
}

export default DetailPage