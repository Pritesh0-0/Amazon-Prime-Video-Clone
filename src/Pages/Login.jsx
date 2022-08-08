import Checkbox from "@mui/material/Checkbox";
import "./Login.modules.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { loginToDoError, loginToDoLoading, loginToDoSuccess } from '../Store/actions';
import { Navigate, NavLink } from 'react-router-dom';


function Login() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [email,setEmail]=useState('');
  const [password, setPassword]=useState('');
  const dispatch=useDispatch();
  let handleLogin=()=>{
    dispatch(loginToDoLoading());
    axios({
          method: "post",
          url: 'https://reqres.in/api/login',
          data:{
            email:email,
            password:password
          }
    }).then((res) => {
      if (res.data.length===0){
        alert("Invalid Creditionals");
        return;
      }
            dispatch(loginToDoSuccess(res.data));
            
          })
          .catch((err) => {
            dispatch(loginToDoError());
          });
  }
  const { logdata } = useSelector((state) => state.login);

  if(logdata.length>0){
    return <Navigate to="/HomePage2" /> 
  }
  return (
    <div classname="login">
      <img
        id="logoss"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZUaYFUa_lu0hSWHouZfgID6xxHCcyDFZrWONAE-P9eFIEi1gOnv4Bmc9PROxgAO148g&usqp=CAU"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          textAlign: "center",
          marginTop: "0%",
          marginBottom: "2vw",
          width: "400px",
          backgroundColor: "white",
          border: "1px solid lightgray",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "30px",
        }}
      >
        <span id="head">Sign-In</span>
        <span>Email or mobile phone number</span>
        <TextField id="outlined-basic" variant="outlined" value={email}
          onChange={(e) => setEmail(e.target.value)}/> <br />
        <span>Password</span>
        <TextField id="outlined-basic" variant="outlined" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        {/* <Link to="/HomePage2" className="login_page"> */}

          <Button id="btn" className="login_page" variant="contained" sx={{marginLeft:'auto',marginRight:'auto'}} onClick={handleLogin}>
            Sign-In
          </Button>
        {/* </Link> */}
        <span id="condition">
          By continuing, you agree to the Amazon{" "}
          <a href="" target="_blank">
            {" "}
            Conditions of Use and Privacy Notice.
          </a>
        </span>
        <div style={{ display: "flex", overflow: "auto" }}>
          <Checkbox {...label} /> <span id="keep">Keep me signed in.</span>
        </div>
        <span id="news">New to Amazon?</span>
        
        <Button id="btnTwo"  variant="contained">
          Create your Amazon account
        </Button>
        
      </div>
    </div>
  );
}

export default Login;
