import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./Create.modules.css";

function Login() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div classname="create">
      <img
        className="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZUaYFUa_lu0hSWHouZfgID6xxHCcyDFZrWONAE-P9eFIEi1gOnv4Bmc9PROxgAO148g&usqp=CAU"
      />
      <Box
        sx={{
          marginTop: "0%",
          width: 300,
          height: 550,
          backgroundColor: "white",
          border: "1px solid lightgray",
          marginLeft: "39%",
          padding: "30px"
        }}
      >
        <span id="head">Create Account</span>
        <br />
        <br />
        <span>Your name</span>
        <TextField id="basic" variant="outlined" /> <br />
        <br />
        <span>Email</span>
        <br />
        <TextField id="basic" variant="outlined" />
        <br />
        <br />
        <span>Password</span>
        <TextField id="basic" variant="outlined" /> <br />
        <br />
        <span>Re-enter password</span>
        <TextField id="basic" variant="outlined" /> <br />
        <br />
        <Button id="btn" variant="contained">
          Create your Amazon account
        </Button>
        <br />
        <br />
        <span id="condition">
          By continuing, you agree to the Amazon{" "}
          <a href="" target="_blank">
            Conditions
            <br /> of Use and Privacy Notice.
          </a>
        </span>
        <br />
        <br />
        <hr />
        <span id="new">Already have an account?</span>
        <br />
        <br />
        <Button id="btnTwo" variant="contained">
          Sign-In
        </Button>
      </Box>
    </div>
  );
}

export default Login;
