import React,{useState} from "react";
//  import l2 from "./Loginto.module.css";
import { Button, TextField, Modal, Box, Typography } from "@mui/material";
import { SiTwitter } from "react-icons/si";
// import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Login() {
//   const [show, setShow] = useState(false);
const [input, setInput]=useState('');

  const nav = useNavigate();

//   function handleLoginClick() {
//     nav("/");
//   }

function handlePassChange(e){
    setInput(e.target.value);
    console.log(input)
    setInput()
  }

  let getData=JSON.parse(localStorage.getItem('userData'));
  console.log(getData);

  function handleSubmit(e){
    e.preventDefault();
    const newData=getData.findIndex(
        (i)=>i.password === input
    );

    if(newData.length===0){
        alert('user not found');
    }
    else{
        alert('successfully login')
        nav('/')
    }

  }

  

  return (
    <div>
     
      <Modal
        open='true'
        // onClose={() => setShow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="model-model-description"
        sx={{
          border: "none",
        }}
      >
        <Box
          width={580}
          height={445}
          position="absolute"
          top="15%"
          left="30%"
          backgroundColor="#fff"
          padding="2rem"
          sx={{border:'none'}}
        >
         {/* <Button onClick={() => setShow(true)}>{<RxCross2 size={30} sx={{color:"black"}}/>}</Button> */}
          <div >
            <div>
              {
                <SiTwitter
                  style={{
                    marginLeft: "16rem",
                  }}
                  size="45px"
                  color="blue"
                />
              }
            </div>

            <Typography sx={{ margin: "1.5rem", marginLeft: "7rem" }}>
              <h1>Enter Your Password</h1>
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="Phone, email or username"
                variant="outlined"
                margin="normal"
                disabled
                sx={{
                  width: "90%",
                }}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                margin="normal"
                required
                sx={{
                  width: "90%",
                }}
                onChange={handlePassChange}
              />
              <br />
              <Button
                href="#text-buttons"
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

export default Login;
