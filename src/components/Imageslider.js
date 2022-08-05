import axios from 'axios';
import React, { useEffect, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "../style/Homepage2.css"
export default function Imageslider() {
  const [slider, setslider] = useState([]);
  const [page,setpage] = useState(1);

  const fetchData = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/Slider?_page=${page}&_limit=1`
    })
      .then(res => {
        setslider(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(()=>{
    fetchData();
  },[page])
  // console.log(slider)
  return (
    <div>

      <div className='slider_main'>
        <button className='button1' disabled = {page==1} onClick={()=>setpage(page-1)}><KeyboardArrowLeftIcon /></button>
        {
          slider.map((data)=>(
           
            
            <img src = {data.image}></img>
          
            
            ))
          }
          <button className='button2' disabled = {page==6}onClick={()=>setpage(page + 1)} ><ChevronRightIcon /></button>


      </div>

    </div>
  )
}
