import { Avatar, Button, IconButton, Popover, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginOrNotSlice } from "../../assets/redux/ReduxData";
import { Navigate, useNavigate } from "react-router";
import style from "./ProfileButton.module.css";

export let userName = "";

function ProfileButton() {
  //   const [open, setOpen] = useState(false);
  //   const isLogin = useSelector((state) => state.loginData.isLogin);
  const localloginData = JSON.parse(localStorage.getItem("isLoginUser")) || {};
  const localUserData = JSON.parse(localStorage.getItem("userData")) || [];
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  userName = name;
  useEffect(() => {
    const tempData = localUserData.find(
      (item) =>
        item.phone == localloginData.phone && item.pass == localloginData.pass
    );
    if (tempData != undefined) {
      setName(tempData.name);
      setPhone(tempData.phone);
    } else {
      setName("Guest");
      setPhone("");
    }
    console.log(name, phone);
  }, []);

  const handleLogOut = () => {
    dispatch(loginOrNotSlice.actions.userLogout());
    alert("Successfully Logout");
    navigate("/signin");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div style={{ width: "100%", textAlign: "end", marginTop: "35px" }}>
      <Button
        aria-describedby={id}
        variant="outline"
        onClick={handleClick}
        sx={{ borderRadius: "50px", width: "100%" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {name[0]}
            </Avatar>{" "}
          </div>
          &nbsp;
          <div>
            <span className={style.profileBtnText}>
              <div>{name}</div>
              <div>{phone}</div>
            </span>
          </div>
          <div>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        // anchorReference="anchorPosition"
        // anchorPosition={{ top: 540, left: 100 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ marginBottom: "300px" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button
            // aria-describedby={id}
            variant="outline"
            onClick={() => navigate("/signin")}
          >
            {" "}
            Add an existing account
          </Button>
          <Button
            // aria-describedby={id}
            variant="outline"
            onClick={() => handleLogOut()}
          >
            {" "}
            Log Out
          </Button>
        </div>
      </Popover>
    </div>
  );
}

export default ProfileButton;

// import * as React from "react";
// import Popover from "@mui/material/Popover";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

// export default function BasicPopover() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <div>
//       <Button aria-describedby={id} variant="contained" onClick={handleClick}>
//         Open Popover
//       </Button>
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "left",
//         }}
//       >
//         <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
//       </Popover>
//     </div>
//   );
// }
