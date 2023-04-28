import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import s from "./Searchbar.module.css";

const Searchbar = () => {
  const [search, setSearch] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    // fetch data from an API
    fetch("/userData.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSearch(data);
        setFilterData(data);
      });
  }, []);

  function handleFilter(value) {
    const result = filterData.filter((f) =>
      f.name.toLowerCase().includes(value)
    );
    setSearch(result);
  }

  return (
    <>
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
            return <div key={i}>{d.name}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Searchbar;
