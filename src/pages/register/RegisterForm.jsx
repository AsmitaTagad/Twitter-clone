import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import style from "./Register.module.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [isEmailOrPhone, setIsEmailOrPhone] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [isdisabled, setISDisabled] = useState(true);
  const navigate = useNavigate();

  const colorbtn = !isdisabled ? "black" : "rgb(62, 62, 62);";

  const allUserData = JSON.parse(localStorage.getItem("userData"))
    ? JSON.parse(localStorage.getItem("userData"))
    : [];
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const phoneRegex =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

  const passRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Year = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
  ];

  const Day = [];
  for (let i = 1; i <= 31; i++) {
    Day.push(i);
  }

  let tempName = "";

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/signin");
  };

  const handleName = (e) => {
    tempName = e.target.value;
    if (tempName.length < 3) {
      setNameError(true);
      setISDisabled(true);
    } else {
      setNameError(false);
      setISDisabled(false);
    }
    setName(tempName);
  };

  const handleEmail = (e) => {
    const tempEmail = e.target.value;
    if (!tempEmail.match(emailRegex)) {
      setEmailError(true);
      setISDisabled(true);
    } else {
      setEmailError(false);
      setISDisabled(false);
    }
    setPhone(tempEmail);
  };

  const handlePhone = (e) => {
    const tempPhone = e.target.value;
    if (!tempPhone.match(phoneRegex)) {
      setPhoneError(true);
      setISDisabled(true);
    } else {
      setPhoneError(false);
      setISDisabled(false);
    }
    setPhone(tempPhone);
  };

  const handlePassword = (e) => {
    const tempPass = e.target.value;
    if (!tempPass.match(passRegex)) {
      setPassError(true);
      setISDisabled(true);
    } else {
      setPassError(false);
      setISDisabled(false);
    }
    setPassword(tempPass);
  };

  const handleSubmitRegister = () => {
    if (name.length < 3) {
      setNameError(true);
    } else if (!phone.match(phoneRegex) && !phone.match(emailRegex)) {
      setPhoneError(true);
      setEmailError(true);
    } else if (!password.match(passRegex)) {
      setPassError(true);
    } else if (day == "") {
    } else if (month == "") {
    } else if (year == "") {
    } else {
      setNameError(false);
      setEmailError(false);
      setPhoneError(false);
      setPassError(false);

      const dob = day + "/" + month + "/" + year;
      const tempData = {
        id: new Date(),
        name: name,
        phone: phone,
        pass: password,
        dob: dob,
      };
      localStorage.setItem(
        "userData",
        JSON.stringify([...allUserData, tempData])
      );
      //   console.log(name, phone, dob, new Date());

      setName("");
      setDay("");
      setMonth("");
      setPhone("");
      setYear("");
      setPassword("");
      alert("Register Successfull");
      navigate("/signin");
    }
  };
  return (
    <div>
      <div>
        {/* <Button onClick={handleOpen}>Sign up</Button> */}
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"

          // sx={{ mt: 2 }}
        >
          <Box
            className={style.boxcontainer}
            sx={{
              backgroundColor: "white",
              width: "30rem",
              height: "42rem",
              margin: "auto",
              marginTop: "20px",
              padding: "50px",
              borderRadius: "15px",
              overflow: "scroll",
            }}
          >
            <div style={{ display: "flex" }}>
              <AiOutlineClose
                onClick={handleClose}
                style={{ marginTop: "6px" }}
                fontSize={20}
              />
            </div>
            <Typography
              sx={{ fontWeight: "bold", margin: "10px" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Create your account
            </Typography>
            <TextField
              sx={{ width: "90%", margin: "10px" }}
              id="filled-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleName}
            />
            {nameError ? (
              <span style={{ color: "red", marginLeft: "10px" }}>
                What's your name?
              </span>
            ) : (
              ""
            )}
            <br />
            {!isEmailOrPhone ? (
              <TextField
                sx={{ width: "90%", margin: "10px" }}
                id="filled-basic"
                label="Phone"
                value={phone}
                variant="outlined"
                onChange={handlePhone}
              />
            ) : (
              <TextField
                sx={{ width: "90%", margin: "10px" }}
                id="filled-basic"
                label="Email"
                value={phone}
                variant="outlined"
                onChange={handleEmail}
              />
            )}
            {!isEmailOrPhone ? (
              phoneError ? (
                <span style={{ color: "red", marginLeft: "10px" }}>
                  Please enter a valid phone number.
                </span>
              ) : (
                ""
              )
            ) : emailError ? (
              <span style={{ color: "red", marginLeft: "10px" }}>
                Email is Invalid
              </span>
            ) : (
              ""
            )}
            <Link
              style={{
                float: "right",
                marginRight: "45px",
                color: "#2AA1F1",
                textDecoration: "none",
              }}
              onClick={() => setIsEmailOrPhone(!isEmailOrPhone)}
            >
              use {isEmailOrPhone ? "phone" : "email"} instead
            </Link>
            {/* // Password textbox */}
            <FormControl sx={{ m: 1, width: "90%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                onChange={handlePassword}
                value={password}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {passError ? (
              <span style={{ color: "red", marginLeft: "10px" }}>
                Minimum eight characters, at least one uppercase letter, one
                lowercase letter and one number and a special character{" "}
              </span>
            ) : (
              ""
            )}
            <Typography
              id="modal-modal-title"
              sx={{ marginTop: "30px", fontSize: "15px" }}
              variant="h6"
              component="h2"
            >
              Date of birth
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, fontSize: "12px" }}
            >
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.{" "}
            </Typography>
            <div
              style={{
                display: "flex",
                width: "100%",
                marginLeft: "10px",
                marginTop: "20px",
              }}
              className={style.dropdowns}
            >
              <div style={{ flexGrow: "3" }}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    label="Month"
                    onChange={(e) => setMonth(e.target.value)}
                    sx={{ width: "100px" }}
                  >
                    {Month.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div style={{ flexGrow: "3" }}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label2">Day</InputLabel>
                  <Select
                    labelId="demo-simple-select-label2"
                    id="demo-simple-select"
                    value={day}
                    label="Day"
                    onChange={(e) => setDay(e.target.value)}
                    sx={{ width: "100px" }}
                  >
                    {Day.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div style={{ flexGrow: "3" }}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label3">Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label3"
                    id="demo-simple-select"
                    value={year}
                    label="Year"
                    onChange={(e) => setYear(e.target.value)}
                    sx={{ width: "100px" }}
                  >
                    {Year.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <Button
              style={{
                borderRadius: "50px",
                backgroundColor: `${colorbtn}`,
                marginTop: "20px",
                padding: "8px 0",
                fontSize: "15px",
                fontWeight: "bold",
                width: "80%",
                marginLeft: "50px",
              }}
              disabled={isdisabled}
              variant="contained"
              onClick={handleSubmitRegister}
            >
              Register
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default RegisterForm;
