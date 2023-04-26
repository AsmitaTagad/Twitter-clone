import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import style from "./Register.module.css";
function RegisterForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [allUserData, setAllUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
      ? JSON.parse(localStorage.getItem("userData"))
      : []
  );

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

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmitRegister = () => {
    const dob = day + "/" + month + "/" + year;
    const tempData = { id: new Date(), name: name, phone: phone, dob: dob };
    localStorage.setItem(
      "userData",
      JSON.stringify([...allUserData, tempData])
    );
    // console.log(name, phone, dob, new Date());

    setName("");
    setDay("");
    setMonth("");
    setPhone("");
    setYear("");
  };
  return (
    <div>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ mt: 2 }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              width: "30%",
              height: "80%",
              margin: "auto",
              marginTop: "20px",
              padding: "50px",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex" }}>
              <AiOutlineClose
                onClick={handleClose}
                style={{ marginTop: "6px" }}
                fontSize={20}
              />
              {/* <Typography
                sx={{ marginLeft: "10px" }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Step 1 of 5
              </Typography> */}
            </div>
            <Typography
              sx={{ fontWeight: "bold", margin: "10px" }}
              id="modal-modal-title"
              variant="h4"
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
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <TextField
              sx={{ width: "90%", margin: "10px" }}
              id="filled-basic"
              label="Phone"
              value={phone}
              variant="outlined"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Date of birth
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
                    <MenuItem value={10}>select</MenuItem>
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
                    <MenuItem value={0}>select</MenuItem>
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
                    <MenuItem value={0}>select</MenuItem>
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
                backgroundColor: "black",
                marginTop: "50px",
                padding: "10px 0",
                fontSize: "20px",
                fontWeight: "bold",
                width: "80%",
              }}
              variant="contained"
              onClick={handleSubmitRegister}
            >
              Next
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default RegisterForm;
