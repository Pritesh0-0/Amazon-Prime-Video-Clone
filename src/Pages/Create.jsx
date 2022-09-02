import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./Create.modules.css";

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signupToDoError, signupToDoLoading, signupToDoSuccess } from '../Store/actions';
import { Navigate} from 'react-router-dom';

function Create() {
// const label = { inputProps: { "aria-label": "Checkbox demo" } };
const [email,setEmail]=React.useState('');
const [password, setPassword]=useState('');
const [name, setName]=useState('');
const [passwordcon, setPasswordcon]=useState('');
const dispatch=useDispatch();
let handleSignUp=()=>{
if(password===passwordcon){
        dispatch(signupToDoLoading());
axios({
      method: "post",
      url: "https://reqres.in/api/register",
      data: {
        email:email,
        password:password
      },
}).then((res) => {
        dispatch(signupToDoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(signupToDoError());
      });
  }
  else{
    alert("Passwords are not matching.")
  }
}
const { logdata } = useSelector((state) => state.login); 
  if(logdata.length>0){
    return <Navigate to="/" /> 
  }
//   const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <img className="logoss"
          alt = "fdf"
        id="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZUaYFUa_lu0hSWHouZfgID6xxHCcyDFZrWONAE-P9eFIEi1gOnv4Bmc9PROxgAO148g&usqp=CAU"
      />
      <Box
        sx={{
          marginTop: "0%",
          width: 300,
          height: 530,
          backgroundColor: "white",
          border: "1px solid lightgray",
          marginLeft: "39%",
          padding: "30px"
        }}
      >
        <span id="head">Create Account</span>
        <br />
        <br />
        <form>
          <span>Your name</span>
          <TextField id="basic" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/> <br />
          <br />
          <span>Email</span>
          <br />
          <TextField id="basic" variant="outlined" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <br />
          <br />
          <span>Password</span>
          <TextField id="basic" variant="outlined"  value={password}
          onChange={(e) => setPassword(e.target.value)}/> <br />
          <br />
          <span>Re-enter password</span>
          <TextField id="basic" variant="outlined" value={passwordcon} onChange={(e) => setPasswordcon(e.target.value)}/> <br />
          <br />
          <Button onClick={handleSignUp} id="btn" variant="contained">
            Create your Amazon account
          </Button>
          <br />
          <br />
        </form>
        <span id="condition">
          By continuing, you agree to the Amazon
          
            Conditions
            <br /> of Use and Privacy Notice.
         
        </span>
        <br />
        <br />
        <hr />
        <span id="new">Already have an account?</span>
        <br />
        <br />
        <Button id="btnTwo" variant="contained" >
          Sign-In
        </Button>
      </Box>
    </div>
  );
}

export default Create;
