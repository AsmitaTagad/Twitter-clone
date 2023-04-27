import React, { useState } from "react";
import l from "./Login.module.css";
import { Button, TextField, Modal, Box, Typography,FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton } from "@mui/material";
import { SiTwitter } from "react-icons/si";
// import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import {AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai'


import {data} from './Login'

function Login2() {
  //   const [show, setShow] = useState(false);
  const [inputField, setInputField] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const nav = useNavigate();

  

  function handlePassChange(e) {
    setInputField(e.target.value);
    setInputField();
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let getData = JSON.parse(localStorage.getItem("userData"));
  console.log(getData);

  function handleSubmit(e) {
    e.preventDefault();
    const newData = getData.findIndex((i) => i.password === inputField);

    if (newData.length === 0) {
      alert("user not found");
    } else {
      alert("successfully login");
      nav("/");
    }
  }

  return (
    <div>
      <Modal
        open="true"
        // onClose={() => setShow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="model-model-description"
        
      >
        <Box
          width={780}
          height={620}
          position="absolute"
          top="5%"
          left="25%"
          backgroundColor="#fff"
          padding="2rem"
          marginLeft="3rem"
          className={l.box}
          sx={{
          border: "none",
        }}
        >
          {/* <Button onClick={() => setShow(true)}>{<RxCross2 size={30} sx={{color:"black"}}/>}</Button> */}
          <div
            style={{
              marginLeft: "2rem",
            }}
          >
            <div>
              {
                <SiTwitter
                  style={{
                    marginLeft: "20rem",
                  }}
                  size="45px"
                  color="blue"
                />
              }
            </div>

            <Typography sx={{ margin: "1.5rem", marginTop: "2rem" }}>
              <h1>Enter your password</h1>
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Phone, email or username"
                variant="outlined"
                margin="normal"
                readonly="readonly"
                value={data}
                disabled
                sx={{
                  width: "70%",
                  marginTop: "2rem",
                }}
              />

              {/* <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                margin="normal"
                padding="1rem"
                type={visible ?"text":"password"}
                required
                sx={{
                  width: "70%",
                  height: "6rem",
                  marginTop: "2rem",
                }}
                icon={ visible ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>} */}
             
                {/* onChange={handlePassChange}
              /> */}

              <FormControl sx={{ width: "70%",
                  height: "6rem",
                  marginTop: "2rem", }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
               onChange={handlePassChange}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
              
             
              <br />
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  justyfyContent: "space-between",
                  alignItems: "center",
                  width: "70%",
                  borderRadius: "35px",
                  height: "3.5rem",
                  color: "black",
                  marginTop: "4rem",
                }}
                type="onSubmit"
              >
                Login
              </Button>
              <a href="#forget"> Forget Password ? </a>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Login2;
