import React,{useEffect,useState} from "react";
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Datacard } from "./Datacard";

export const Corsecstore = (type) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
     slidesToSlide: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [moviedata, setMoviedata] = useState([]);

  const fetchData = () => {
        axios({
                method:"get",
               
                url:`https://primevideo2021.herokuapp.com/${type.type}`
               
        }).then((res)=>{
                setMoviedata(res.data);
        }).catch((err)=>{
                return <div>Error page not found.</div>
        })
        
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Carousel responsive={responsive}>
      {moviedata.map((ele) => {
        return (
        <Datacard {...ele} key={ele.id}/>
        )
         })
        }
      </Carousel>
    </>
  );
};
