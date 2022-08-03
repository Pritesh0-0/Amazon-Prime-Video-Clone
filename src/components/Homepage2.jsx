import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import "../style/Homepage2.css"
import { Curosal } from './Curosal';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReportOffIcon from '@mui/icons-material/ReportOff';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
export default function Homepage2() {
    const [data, setdata] = useState([]);

    const fetchData = () => {
        axios({
            method: "get",
            url: "  http://localhost:3000/movies"
        })
            .then(res => {
                setdata(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])
    console.log(data)
    return (

        <>
        <div style={{display : "flex" , flexDirection : "column"}}>
        <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_LoveInTheJungle_DP/3da27a36-0982-4631-99bc-2da592241688._UR3000,600_SX1500_FMwebp_.jpeg"
                        alt="Image One"
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_LegendOfRamayana_DP/111a0e5b-f082-4bb4-bdf4-9f4e8f45f6cd._UR3000,600_SX1500_FMwebp_.jpeg"
                        alt="Image Two"
                        />
                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_Anni_DP/e9cb5fb8-c1c3-4b26-a6fe-9789e39e2870._UR3000,600_SX1500_FMwebp_.jpeg"
                        alt="Image Two"
                    />
                </Carousel.Item>

                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_JohnWick3_LP/b535f621-1c6a-4729-97e5-9f6f52bb13c0._UR3000,600_SX1500_FMwebp_.jpeg"
                        
                        alt="Image Two"
                        />
                </Carousel.Item>


                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_MydaughterJoinedaCult_DP/cd92b954-8a6e-4e9c-8d58-0c74b79e11f2._UR3000,600_SX1500_FMwebp_.jpeg"
                        
                        
                        alt="Image Two"
                        />
                </Carousel.Item>

            </Carousel>
        
            
        
<h1>Action Movies</h1>
            <div className = "movies_data1">
                {
                    data.map((movies) =>(

                        <div className='images_img'>
                            <img src= {movies.poster_path}></img>
                            <div>
                            <PlayArrowIcon />
                            <ControlPointIcon />
                            <ReportOffIcon />
                            </div>
                            <h3>{movies.title}</h3>
                            <p>{movies.original_title}</p>
                            </div>
                    ))
                }

            </div>
<h1>For Kids</h1>


            <div className='movies_data1'>
                {
                    data.map((movies) =>(

                        <div className='images_img'>
                            <img src= {movies.poster_path}></img>
                            <div>
                            <PlayArrowIcon />
                            <ControlPointIcon />
                            <ReportOffIcon />
                            </div>
                            <h3>{movies.title}</h3>
                            <p>{movies.original_title}</p>
                            </div>
                    ))
                }

            </div>


<h1>jijookko</h1>
<div className='movies_data1'>
                {
                    data.map((movies) =>(

                        <div className='images_img'>
                            <img src= {movies.poster_path}></img>
                            <div>
                            <PlayArrowIcon />
                            <ControlPointIcon />
                            <ReportOffIcon />
                            </div>
                            <h3>{movies.title}</h3>
                            <p>{movies.original_title}</p>
                            </div>
                    ))
                }

            </div>

            
            </div>

        </>
    )
}
