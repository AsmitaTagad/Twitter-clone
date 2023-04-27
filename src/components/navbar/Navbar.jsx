import { Button, Typography } from "@mui/material";
import React from "react";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div
      className={style.navbar}
      style={{ borderBottom: "1px solid #DDDDDD", backgroundColor: "white" }}
    >
      <div>
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
      <div style={{ display: "flex" }}>
        <Button
          sx={{
            flexGrow: "1",
            padding: "10px 0",
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
            padding: "10px 0",
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
