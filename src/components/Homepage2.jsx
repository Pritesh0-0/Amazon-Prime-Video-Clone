import React, { useState } from 'react'
import { useEffect } from 'react';
import "../style/Homepage2.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ImageSlider from './Imageslider';
// import {SliderData} from "./Sliderimages"
import { SliderData } from './Sliderimages';

export default function Homepage2() {
    const [actionmovies, setactionmovies] = useState([]);
    const [popularmovies , setpopularmovies] =  useState([])

    const fetchData = () => {
        fetch(`http://localhost:3000/Toprated`)
            .then((res) => res.json())
            .then((res) => setactionmovies(res))
            .catch((err) => console.log(err))


            fetch(`http://localhost:3000/Popular`)
            .then((res) => res.json())
            .then((res) => setpopularmovies(res))
            .catch((err) => console.log(err))
            

    }

    useEffect(() => {
        fetchData()
    }, [])

    


    return (
        <div>

<ImageSlider slides={SliderData} />
            {/* FOR THE ACTION MOVIES */}

            <div className='typeof_movies'>
                <h1>Action movies</h1>

            </div>

            <div className='actionmovies_main_div'>  
                {
                    actionmovies.map((item)=>(
                        <div className='action_inside_item' > 
                            <img src= {item.poster_path}></img>
                            <h3>{item.title}</h3>
                            <div style={{display : "flex",justifyContent : "space-around"}}>
                            <p>{item.release_date}</p>
                            <PlayArrowIcon />
                            <NotInterestedIcon />
                            <AddIcon />
                            </div>
                        </div>
                    ))
                }

            </div>

{/* FOR THE POPULAR MOVIES */}
            <div className='typeof_movies'>
                <h1>Popular movies</h1>

            </div>

            <div className='actionmovies_main_div'>  
                {
                    popularmovies.map((item)=>(
                        <div className='action_inside_item' > 
                            <img src= {item.poster_path}></img>
                            <p>{item.title}</p>
                            <div style={{display : "flex",justifyContent : "space-around"}}>
                            <p>{item.release_date}</p>
                            <PlayArrowIcon />
                            <NotInterestedIcon />
                            <AddIcon />
                            </div>
                            
                        </div>
                    ))
                }

            </div>



        </div>
    )
}
