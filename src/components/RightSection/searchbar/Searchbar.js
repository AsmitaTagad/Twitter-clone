import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import s from "./Searchbar.module.css";
import { Popover, Typography } from "@mui/material";

const Searchbar = () => {
  const [search, setSearch] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // fetch data from an API
    fetch("/userData.json")
      .then((response) => response.json())
      .then((data) => {
        // console.log(search);

        setFilterData(data);
      });
  }, []);

  function handleFilter(value) {
    // console.log(filterData);
    if (value == "") {
      setSearch([]);
    }
    const result = filterData.filter((f) =>
      f.first_name.toLowerCase().includes(value)
    );
    // console.log(result);
    if (value != "") {
      setSearch(result);
      // setOpen(true);
    }
  }

  return (
    <div className={s.icon}>
      <div>
        <input
          className={s.searchInput}
          type="text"
          placeholder=" Search Twitter"
          onChange={(e) => handleFilter(e.target.value)}
        />
        <BsSearch className={s.icon2} />
      </div>

      <div className={s.result}>
        {search.map((d, i) => {
          return <div key={i}>{d.first_name}</div>;
        })}
      </div>
    </div>
  );
};

export default Searchbar;
