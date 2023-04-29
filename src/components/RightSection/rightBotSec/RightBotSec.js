import React from "react";
import style from "./RightBotSec.module.css";

export default function RightBotSec() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="#t">Terms of Service</a>
        <a href="#t">Privacy Policy</a>
        <a href="#t">Cookies Policy</a>
      </div>
      <div>
        <a href="#t">Accessibility</a>
        <a href="#t">Ads info</a>
        <a href="#t">More..</a>
        <p>@2023 X corp.</p>
      </div>
    </div>
  );
}
