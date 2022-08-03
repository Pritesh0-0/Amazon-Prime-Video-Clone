import React, { useEffect } from 'react'
import axios from "axios"

export default function Fetchdata() {


    useEffect(() => {
      axios({
method : "get",
url : ` http://www.omdbapi.com/?apikey=53c800d&`
      })
    .then(res =>{
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })
     
    }, [])
    
  return (
    <div>

       
       </div>
  )
}
