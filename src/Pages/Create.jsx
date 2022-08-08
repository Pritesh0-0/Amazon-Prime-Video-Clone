import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./Create.modules.css";
import { useRef } from "react";

function Create() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef1 = useRef(null);
  const passwordRef2 = useRef(null);
  // const navigate= useNavigate()
  const submitData = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value === "" ||
      emailRef.current.value === "" ||
      passwordRef1.current.value === "" ||
      passwordRef2.current.value === ""
    ) {
      alert("Please enter data to all feilds!!");
    } else if (passwordRef1.current.value !== passwordRef2.current.value) {
      alert("Password is not matching");
    }

    const details = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef2.current.value
    };
    localStorage.setItem("user-details", JSON.stringify(details));
    // if (details.name != "" && details.email != "" && details.password != "") {
    //   navigate({ pathname: "/login" })
    // }
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <img className="logoss"
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
          <TextField id="basic" variant="outlined" ref={nameRef} /> <br />
          <br />
          <span>Email</span>
          <br />
          <TextField id="basic" variant="outlined" ref={emailRef} />
          <br />
          <br />
          <span>Password</span>
          <TextField id="basic" variant="outlined" ref={passwordRef1} /> <br />
          <br />
          <span>Re-enter password</span>
          <TextField id="basic" variant="outlined" ref={passwordRef2} /> <br />
          <br />
          <Button onClick={submitData} id="btn" variant="contained">
            Create your Amazon account
          </Button>
          <br />
          <br />
        </form>
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

export default Create;
