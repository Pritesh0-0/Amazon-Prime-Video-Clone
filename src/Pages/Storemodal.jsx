import React from "react";
import {Button} from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { FaPlay} from 'react-icons/fa';

export default function Storemodal(props) {
 let ratestyle={
    fontFamily: "Arial, sans-serif",
    fontSize: "1.4vw",
    fontWeight: "500",
    width: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor:'green',
    border:'none',
    color:'white'
  }
  if(props.avgvote<7){
    ratestyle={
      fontFamily: "Arial, sans-serif",
      fontSize: "1.4vw",
      fontWeight: "500",
      width: "20%",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor:'orange',
      border:'none',
      color:'white'
    }
  }
  if(props.avgvote<5){
    ratestyle={
      fontFamily: "Arial, sans-serif",
      fontSize: "1.4vw",
      fontWeight: "500",
      width: "20%",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor:'red',
      border:'none',
      color:'white'
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"

      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "2vw",
            fontWeight: "600",
          }}
        >
          {props.title}
        </p>

        {/* <ReactPlayer key={YouTubePlayer} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}

        <img
          alt="ffff"
          src={props.poster}
          style={{
            height: "320px",
            aspectRatio: "16/9",
          }}
        ></img>
        <p>{props.summary}</p>
        <div
          style={{ display: "flex", overflow: "auto", flexDirection: "column" }}
        >
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "1.4vw",
              fontWeight: "500",
            }}
          >
            Released on: {props.released}
          </p>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "1.4vw",
              fontWeight: "500",
            }}
          >
            Total Votes: {props.votecount}
          </p>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "1.4vw",
              fontWeight: "500",
            }}
          >
            Popularity: {props.popularity}
          </p>
          <Button
            style={ratestyle}
            disabled
          >
            {props.avgvote} 
          </Button>
        </div>
        <p className="heads" style={{color:'purple',fontSize:'1.5vw',marginLeft:'3vw',marginBottom:'0px',marginTop:'.8vw'}}>
          Watch with prime{" "}
          <div style={{ marginLeft: "auto", marginRight: "5px", width: "20%" }}>
            <FaPlay />
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "white",
              marginTop: "0px",
              marginBottom: "auto",
              padding: "0px",
            }}
          >
            +
          </div>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{marginLeft:'auto',marginRight:'auto',backgroundColor:'purple',border:'none',color:'white'}} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
