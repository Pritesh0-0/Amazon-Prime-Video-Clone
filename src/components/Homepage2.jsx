import React, { useState } from 'react'
import { useEffect } from 'react';
import "../style/Homepage2.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import axios from "axios";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Imageslider from "../components/Imageslider"
import Footer from "../components/Footer"
import { useNavigate} from "react-router-dom";

export default function Homepage2() {
    let navigate = useNavigate();
    const [actionmovies, setactionmovies] = useState([]);
    const [popularmovies, setpopularmovies] = useState([]);
    const [kidsmovies, setkidsmovies] = useState([]);
    const [oldmovie, setoldmovie] = useState([])

    const [actionpage1, setpage1] = useState(1);
    const [popularpage1, setpag2] = useState(1);
    const [kidspage, setkidpage] = useState(1);
    const [oldpage, setoldpage] = useState(1);

    const fetchData = () => {
        fetch(`https://primevideo2021.herokuapp.com/Toprateds?_page=${actionpage1}&_limit=4`)
            .then((res) => res.json())
            .then((res) => setactionmovies(res))
            .catch((err) => console.log(err))



        fetch(`https://primevideo2021.herokuapp.com/Populars?_page=${popularpage1}&_limit=4`)
            .then((res) => res.json())
            .then((res) => setpopularmovies(res))
            .catch((err) => console.log(err))


        fetch(`https://primevideo2021.herokuapp.com/Toprateds?_page=${actionpage1}&_limit=4`)
            .then((res) => res.json())
            .then((res) => setoldmovie(res))
            .catch((err) => console.log(err))



        fetch(`https://primevideo2021.herokuapp.com/Populars?_page=${kidspage}&_limit=4`)
            .then((res) => res.json())
            .then((res) => setkidsmovies(res))
            .catch((err) => console.log(err))


    }

    useEffect(() => {
        fetchData()
    }, [actionpage1, popularpage1, kidspage])



    const addToWatchList = (body) => {
        // alert("add to watchlist")
        axios({
            method: "post",
            url: "  https://primevideo2021.herokuapp.com/Watchlists",
            data: body
        })

            .then(res => {
                console.log(res)
            })

    }

    const dontShow = (item)=>{
        axios({
            method : "delete",
            url : `https://primevideo2021.herokuapp.com/Toprateds?${item}`,
            // data : body
        })
        .then(res =>{
            console.log(res.data)
        })
        .catch(err =>{
            console.log(err);
        })

    }


    const HandleDetails=()=>{
        navigate("/DetailsPage");
    }

    return (
        <div>

            <Imageslider />

            {/*  Action Movies*/}
            <div className='typeof_movies'>
                <h3> <span>Store</span> Action movies</h3><p>see more</p>

            </div>

            <div className='actionmovies_main_div'>
                <div className='leftarrow1'>
                    <button disabled={actionpage1 == 1} onClick={() => setpage1(actionpage1 - 1)}><KeyboardArrowLeftIcon /></button>

                </div>
                {
                    actionmovies.map((item) => (
                        <div className='action_inside_item' >
                            <img src={item.poster_path} onClick={()=>HandleDetails(item.id)}></img>

                            <div className='hidden-part'>
                                <h3>{item.title}</h3>
                                <div style={{ display: "flex", marginTop: "-20px", justifyContent: "space-around" }}>
                                    <p>{item.original_title}</p>
                                    <p>{item.release_date}</p></div>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <PlayArrowIcon />
                                    <NotInterestedIcon onClick = {()=>dontShow(item)} ></NotInterestedIcon>
                                    <AddIcon onClick={() => addToWatchList(item)}></AddIcon>
                                </div>
                            </div>

                        </div>
                    ))
                }
                <button disabled={actionpage1 == 3} onClick={() => setpage1(actionpage1 + 1)}><ChevronRightIcon /></button>
            </div>

            {/* FOR THE POPULAR MOVIES */}
            <div className='typeof_movies'>
                <h3><span>Store</span>Popular movies</h3><p>see more</p>

            </div>


            <div className='actionmovies_main_div'>
                <div className='leftarrow1'>
                    <button disabled={popularpage1 == 1} onClick={() => setpag2(popularpage1 - 1)}><KeyboardArrowLeftIcon /></button>

                </div>
                {
                    popularmovies.map((item) => (
                        <div className='action_inside_item' >
                            <img src={item.poster_path}></img>

                            <div className='hidden-part'>
                                <h3>{item.title}</h3>
                                <div style={{ display: "flex", marginTop: "-20px", justifyContent: "space-around" }}>
                                    <p>{item.original_title}</p>
                                    <p>{item.release_date}</p></div>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <PlayArrowIcon />
                                    <NotInterestedIcon />
                                    <AddIcon onClick={() => addToWatchList(item)}></AddIcon>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <button disabled={popularpage1 == 3} onClick={() => setpag2(popularpage1 + 1)}><ChevronRightIcon /></button>
            </div>

            {/* For the old Movies */}


            <div className="typeof_movies">
                <h3> <span>Store</span> Old movies</h3><p>see more</p>
            </div>


            <div className='actionmovies_main_div'>
                <div className='leftarrow1'>
                    <button disabled={oldpage == 1} onClick={() => setoldpage(oldpage - 1)}><KeyboardArrowLeftIcon /></button>

                </div>
                {
                    oldmovie.map((item) => (
                        <div className='action_inside_item' >
                            <img src={item.poster_path}></img>

                            <div className='hidden-part'>
                                <h3>{item.title}</h3>
                                <div style={{ display: "flex", marginTop: "-20px", justifyContent: "space-around" }}>
                                    <p>{item.original_title}</p>
                                    <p>{item.release_date}</p></div>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <PlayArrowIcon />
                                    <NotInterestedIcon />
                                    <AddIcon onClick={() => addToWatchList(item)}></AddIcon>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <button disabled={oldpage == 3} onClick={() => setoldpage(oldpage + 1)}><ChevronRightIcon /></button>
            </div>


            {/* Kids movies */}
            <div className='typeof_movies'>
                <h3> <span>Store</span> Kids movies</h3><p>see more</p>
            </div>

            <div className='actionmovies_main_div'>
                <div className='leftarrow1'>
                    <button disabled={kidspage == 1} onClick={() => setkidpage(kidspage - 1)}><KeyboardArrowLeftIcon /></button>

                </div>
                {
                    kidsmovies.map((item) => (
                        <div className='action_inside_item' >
                            <img src={item.poster_path}></img>

                            <div className='hidden-part'>
                                <h3>{item.title}</h3>
                                <div style={{ display: "flex", marginTop: "-20px", justifyContent: "space-around" }}>
                                    <p>{item.original_title}</p>
                                    <p>{item.release_date}</p></div>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <PlayArrowIcon />
                                    <NotInterestedIcon />
                                    <AddIcon onClick={() => addToWatchList(item)}></AddIcon>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <button disabled={popularpage1 == 3} onClick={() => setkidpage(kidspage + 1)}><ChevronRightIcon /></button>
            </div>

            <Footer />
        </div>
    )
}
