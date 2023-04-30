import React from "react";
import style from "./ResFooter.module.css";
import { AiTwotoneHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router";

function ResFooter() {
  const navigate = useNavigate();
  return (
    <div className={style.resFooter}>
      <div>
        <AiTwotoneHome fontSize={25} onClick={() => navigate("/")} />
      </div>
      <div>
        <FiSearch
          fontSize={25}
          onClick={() => alert("You Clicked on search section")}
        />
      </div>
      <div>
        <GrNotification
          fontSize={25}
          onClick={() => alert("You Clicked on notification section")}
        />
      </div>
      <div>
        <HiOutlineMail
          fontSize={25}
          onClick={() => alert("You Clicked on message section")}
        />
      </div>
    </div>
  );
}

export default ResFooter;
