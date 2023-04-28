import React from "react";
import r from "./RightSide.module.css";
import RightMiddleSec from "../../components/RightSection/rightMiddleSec/RightMiddleSec";
import Searchbar from "../../components/RightSection/searchbar/Searchbar";
import RightTopSec from "../../components/RightSection/rightTopSec/RightTopSec";
import RightBotSec from "../../components/RightSection/rightBotSec/RightBotSec";

export default function RightSide() {
  return (
    <div className={r.container}>
    <div>
      <Searchbar/>
    </div>
  
   <div>
    <RightTopSec/>
   </div>
       <div>
      <section className={r.middle}>
        <RightMiddleSec />
      </section>
      </div>
      <div>
        <RightBotSec/>
      </div>
    </div>
  );
}
