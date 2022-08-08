import React, { useState } from "react";
import "../styles/datacard.css";

import Storemodal from "./Storemodal";


export const Datacard = ({
  id,
  backdrop_path,
  adult,
  title,
  overview,
  original_title,
  poster_path,
  release_date,
  popularity,
  vote_average,
  vote_count
}) => {
  
  function link() {
    return `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  }
  const [modalShow, setModalShow] = React.useState(false);
  const [itemdata,setItemdata]=useState([]);
  const getModal=(id, backdrop_path, adult, title, overview, original_title, poster_path, release_date,vote_average,vote_count,popularity)=>{
    setItemdata([id, backdrop_path, adult, title, overview, original_title, poster_path, release_date,vote_average,vote_count,popularity]);
    return setModalShow(true)
  }
  return (
    <>
      <div className="maincard">
        <img
          onClick={()=>getModal(id, backdrop_path, adult, title, overview, original_title, poster_path, release_date,vote_average,vote_count,popularity)}
          className="datacardimg"
          src={link()}
          alt=""
          style={{
            width: "98%",
            padding: "0",
            margin: "2.5px",
          }}
        ></img>

        <div className="storedatacard">
          
          <p className="title">{original_title}</p>
          <span className="textview">{overview}</span>
        </div>
      </div>
      < Storemodal
        show={modalShow}
        key={itemdata[0]}
        onHide={() => setModalShow(false)}
        poster={itemdata[6]}
        title={itemdata[3]}
        summary={itemdata[4]}
        orgTitle={itemdata[5]}
        released={itemdata[7]}
        avgvote={itemdata[8]}
        votecount={itemdata[9]}
        popularity={itemdata[10]}
      />
    
    </>
  );
};
