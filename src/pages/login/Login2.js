import React, { useState } from "react";
import l from "./Login.module.css";
import {
  Button,
  TextField,
  Modal,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { SiTwitter } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { data } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { loginOrNotSlice } from "../../assets/redux/ReduxData";

function Login() {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const nav = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const isLogin = useSelector((state) => state.loginData.isLogin);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function handlePassChange(e) {
    setInput(e.target.value);
    // console.log(input);
  }

  let getData = JSON.parse(localStorage.getItem("userData"))
    ? JSON.parse(localStorage.getItem("userData"))
    : [];
  // console.log(getData);

  function handleSubmit(e) {
    e.preventDefault();
    const newData = getData.find((i) => i.pass == input);

    if (newData == undefined) {
      alert("user not found");
    } else {
      dispatch(loginOrNotSlice.actions.userLogin({ phone: data, pass: input }));
      alert("successfully login");
      // console.log(isLogin);
      nav("/");
    }

    setInput("");
  }

  return (
    <div>
      <Modal
        open="true"
        onClose={() => setShow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="model-model-description"
        sx={{
          border: "none",
        }}
      >
        <Box
          width={680}
          height={645}
          position="absolute"
          top="10%"
          left="30%"
          backgroundColor="#fff"
          padding="2rem"
          marginLeft="3rem"
          sx={{ border: "none" }}
          className={l.box}
        >
          <Button onClick={() => setShow(true)}>
            {<RxCross2 size={30} sx={{ color: "black" }} />}
          </Button>
          <div>
            <div>
              {
                <SiTwitter
                  style={{
                    marginLeft: "17rem",
                  }}
                  size="45px"
                  color="blue"
                />
              }
            </div>

            <Typography sx={{ margin: "1.5rem", marginLeft: "5rem" }}>
              <h1>Enter Your Password</h1>
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Phone, email or username"
                variant="outlined"
                margin="normal"
                disabled
                value={data}
                sx={{
                  width: "80%",
                  marginLeft: "10rem",
                  margin: "1rem",
                  marginTop: "2rem",
                }}
              />

              <FormControl
                sx={{
                  width: "80%",
                  marginLeft: "18rem",
                  margin: "1rem",
                  marginTop: "1rem",
                }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={handlePassChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <AiOutlineEye />
                        ) : (
                          <AiOutlineEyeInvisible />
                        )}
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
                  justyfyContent: "center",
                  alignItems: "center",
                  width: "80%",
                  borderRadius: "35px",
                  backgroundColor: "black",
                  borderColor: "gray",
                  margin: "0.8rem",
                  padding: "0.6rem",
                  marginTop: "4rem",
                }}
                type="onSubmit"
              >
                Login
              </Button>
              <a style={{ margin: "1rem" }} href="#forget">
                {" "}
                Forget Password ?{" "}
              </a>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Login;
