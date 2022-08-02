import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./styles.css";

function Login() {
    return(
        <div classname='login'>
        <img className='image' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZUaYFUa_lu0hSWHouZfgID6xxHCcyDFZrWONAE-P9eFIEi1gOnv4Bmc9PROxgAO148g&usqp=CAU" />
        <Box
      sx={{
        width: 350,
        height: 450,
        backgroundColor: 'white',
        border: '1px solid lightgray',
        marginLeft:'39%',
        padding: "10px"
      }}
    >
      <p>Sign In</p>
      <span>Email or mobile phone number</span>
<TextField id="basic" variant="outlined" /> <br /><br />
<span>Password</span><br />
<TextField id="basic" variant="outlined" />
<Button variant="contained">Sign-In</Button>
      </Box>
        </div>
    )
}

export default Login


    

