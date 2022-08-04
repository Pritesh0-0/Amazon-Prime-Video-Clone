import Checkbox from "@mui/material/Checkbox";
import "./Login.modules.css";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useDispatch, useSelector }  from 'react-redux';
import { loginError, loginLoading, loginSuccess } from "./store/auth/action";
import { Navigate } from 'react-router-dom';

function Login() {
    const token = useSelector(state => state.auth.token);

    const dispatch = useDispatch()
    const [loginData, setLoginData] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) => {
const {name, value} = e.target;

setLoginData(prev => ({
    ...prev,
    [name]: value
}))
    }

    const handleLogin = () => {
        dispatch(loginLoading())
        axios({
            method: "post",
            url: "https://reqres.in/api/login",
            data: loginData
        }).then(res => {
            dispatch(loginSuccess(res.data.token))
        }).catch(err => {
            dispatch(loginError())
        })
    }
    if(token){
        return <Navigate to = "/" />
    }

    const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div classname="login">
      <img
        className="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZUaYFUa_lu0hSWHouZfgID6xxHCcyDFZrWONAE-P9eFIEi1gOnv4Bmc9PROxgAO148g&usqp=CAU"
      />
      <Box
        sx={{
          marginTop: "0%",
          width: 300,
          height: 450,
          backgroundColor: "white",
          border: "1px solid lightgray",
          marginLeft: "39%",
          padding: "30px"
        }}
      >
        <span id="head">Sign-In</span>
        <br />
        <br />
        <span>Email or mobile phone number</span>
        <TextField id="basic" variant="outlined" value = {loginData["email"]}  onChange={handleChange}  /> <br />
        <br />
        <span>Password</span>
        <br />
        <TextField id="basic" variant="outlined" value = {loginData["password"]}  onChange={handleChange}   />
        <br />
        <br />
        <Button onClick={handleLogin} id="btn" variant="contained">
          Sign-In
        </Button>
        <br />
        <br />
        <span id="condition">
          By continuing, you agree to the Amazon{" "}
          <a href="" target="_blank">
            {" "}
            Conditions of Use and Privacy Notice.
          </a>
        </span>
        <br />
        <br />
        <Checkbox {...label} /> <span id="keep">Keep me signed in.</span>
        <hr />
        <span id="news">New to Amazon?</span>
        <br />
        <br />
        <Button id="btnTwo" variant="contained">
          Create your Amazon account
        </Button>
      </Box>
    </div>
  );
}

export default Login;
