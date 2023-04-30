import { Avatar, Button, Typography } from "@mui/material";
import React from "react";
import style from "./Navbar.module.css";
import { red } from "@mui/material/colors";
import { userName } from "../../atoms/profilebutton/ProfileButton";
import { AiOutlineTwitter } from "react-icons/ai";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div
      className={style.navbar}
      style={{ borderBottom: "1px solid #DDDDDD", backgroundColor: "white" }}
    >
      <div className={style.navHeading}>
        <Typography
          sx={{
            fontWeight: "bold",
            padding: "10px 0",
            textAlign: "start",
            marginLeft: "20px",
          }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Home
        </Typography>
      </div>

      <div className={style.leftpanel}>
        <div>
          <Avatar
            className={style.avtaricon}
            sx={{ bgcolor: red[500] }}
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          >
            {userName[0]}
          </Avatar>
        </div>
        <div>
          {" "}
          <AiOutlineTwitter
            className={style.Icon}
            onClick={() => navigate("/")}
          />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <Button
          sx={{
            flexGrow: "1",
            padding: "18px 0",
            color: "black",
            fontWeight: "bold",
          }}
          variant="text"
        >
          For you
        </Button>
        <Button
          sx={{
            flexGrow: "1",
            padding: "18px 0",
            color: "black",
            fontWeight: "bold",
          }}
          variant="text"
        >
          Following
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
