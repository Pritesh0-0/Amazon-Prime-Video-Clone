import React from 'react'
import videobg from "../video/rocket.mp4"
import download from "../img/download.png"
import party from "../img/party.png"
// import rocket from "../video/rocketimage.jpg"
import "./DetailPage.modules.css"
import play from "../img/play-64.png"
import { Link } from "react-router-dom";
const DetailPage = () => {
 //var navigate = useNavigate();


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
              <Link to="/videoPage" className='page_link'><p>Continue watching</p></Link> 
            </div>
            
            <div className='purchase_button'>
                More purchase options
            </div>

            <div className='circle'>
              <img src={play} alt="" className='feature_images' />
            </div>

            <div className='circle'>
              <img src={download} alt="" className='feature_images'/>
            </div>

            <div className='circle'>
              <img src={party} alt="" className='feature_images'/>
            </div>

         </div>

         <p className='description'>Rocketry – The Nambi Effect is a retelling of Nambi Narayananʼs life as it unravels in an interview by Superstar Suriya, on TV. Like many legends, Nambi is deeply flawed, his genius and obsession earning him enemies and detractors, making him a compelling modern protagonist. The film challenges the audience to take up the responsibility of recognizing & celebrating these special contributors.</p>
          
        
         </div>
    </div>
  )
}

export default DetailPage