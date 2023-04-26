import React, { useState } from "react";
import l from "./Login.module.css";
import { Button, TextField, Modal, Box, Typography } from "@mui/material";
import { SiTwitter } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const nav = useNavigate();

  // function handleNextClick() {
  //   nav("/loginto");
  // }

  function Google() {
    alert("Google login");
  }
  function Apple() {
    alert("Apple login");
  }

  function ForgetPass() {
    alert("Forget Pssword");
  }

  //handle input field
  function handleChange(e) {
    setInput(e.target.value);
    console.log(input);
  }
  let getData = JSON.parse(localStorage.getItem("userData"));
  console.log(getData);

  function handleNextClick(e) {
    e.preventDefault();
    const newData = getData.filter(
      (i) => i.userName === input || i.phone === input || i.email === input
    );

    if (newData.length === 0) {
      alert("invalid user data");
    } else {
      nav("/loginto");
    }
  }
  return (
    <div className={l.main}>
      <Button onClick={() => setOpen(true)}>
        {/* {<RxCross2 size={30} sx={{ color: "black" }} />} */}
        Login
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="model-model-description"
        sx={{
          border: "none",
        }}
      >
        <Box
          width={580}
          height={645}
          position="absolute"
          top="5%"
          left="30%"
          backgroundColor="#fff"
          padding="2rem"
          className={l.box}
        >
          <div className={l.container}>
            <div className={l.logo}>
              {
                <SiTwitter
                  style={{
                    marginLeft: "10rem",
                  }}
                  size="45px"
                  color="blue"
                />
              }
            </div>

            <Typography sx={{ margin: "1.5rem", marginLeft: "3rem" }}>
              <h1>Sign in to Twitter</h1>
            </Typography>

            <Button
              variant="outlined"
              sx={{
                display: "flex",
                justyfyContent: "center",
                alignItems: "center",
                width: "90%",
                borderRadius: "35px",
                borderColor: "gray",
                height: "3.5rem",
              }}
              onClick={Google}
            >
              <p> Sign in with Google</p> {<FcGoogle />}
            </Button>
            <br />
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                justyfyContent: "center",
                alignItems: "center",
                width: "90%",
                borderRadius: "35px",
                borderColor: "gray",
                height: "3.5rem",
                color: "black",
              }}
              onClick={Apple}
            >
              {<AiOutlineApple size={20} sx={{ color: "black" }} />}{" "}
              <p> Sign in with Apple</p>
            </Button>

            <div className={l.or}>
              <span>
                _________________<sub> or </sub>__________________
              </span>
            </div>

            <form>
              <TextField
                id="outlined-basic"
                label="Phone, email or username"
                variant="outlined"
                margin="normal"
                required
                sx={{
                  width: "90%",
                }}
                onChange={handleChange}
              />
              <br />
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  justyfyContent: "center",
                  alignItems: "center",
                  width: "90%",
                  borderRadius: "35px",
                  backgroundColor: "black",
                  borderColor: "gray",
                  margin: "0.5rem",
                  padding: "0.6rem",
                }}
                onClick={handleNextClick}
              >
                Next
              </Button>
              <br />
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  justyfyContent: "center",
                  alignItems: "center",
                  width: "90%",
                  borderRadius: "35px",
                  borderColor: "gray",
                  padding: "0.8rem",
                  color: "black",
                }}
                onClick={ForgetPass}
              >
                <strong>Forget Password?</strong>
              </Button>

              <p style={{ margin: "2rem" }}>
                Don't have an account? <Link to="/signup">Sign-Up</Link>
              </p>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Login;
