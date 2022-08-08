import Checkbox from "@mui/material/Checkbox";
import "./Login.modules.css";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom"
function Login() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div classname="login">
      <img className="logoss"
        id="image" href="/#"
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
         <br />
        <TextField id="basic" variant="outlined" /> <br />
        <br />
        <span>Password</span>
        <br />
        <TextField id="basic" variant="outlined" />
        <br />
        <br />
       <Link to="/HomePage2" className="login_page"><Button id="btn" className="login_page" variant="contained">
          Sign-In
        </Button></Link> 
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
