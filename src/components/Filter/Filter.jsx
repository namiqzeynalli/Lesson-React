import React, { useEffect, useRef, useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [dataState, setDataState] = useState([
    {
      id: 1,
      name: "Frodo Baggins",
      department: "Management",
      role: "CEO",
    },
    {
      id: 2,
      name: "Samwise Gamgee",
      department: "Management",
      role: "CTO",
    },
    {
      id: 3,
      name: "Gandalf the Gray",
      department: "Recruitment",
      role: "Lead-recruiter",
    },
    {
      id: 4,
      name: "Aragorn",
      department: "Security",
      role: "Security officer",
    },
    {
      id: 5,
      name: "Legolas",
      department: "Management",
      role: "Office manager",
    },
  ]);
  const handleFilter = ()=>{
    const newState = dataState.filter((item)=>item.name===inputRef.current.value)
    setDataState(newState)
  }
  const inputRef = useRef();
  // const [state, setState] = useState([]);
  // useEffect(() => {
  //   fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setState(data);
  //     });
  // }, []);
  return (
    <>
      <div className="filterContainer">
        <input ref={inputRef} type="text" placeholder="ad daxil edin..." />
        <button onClick={handleFilter}>Axtar</button>
        <div className="filteringContent">
          {dataState.map((item) => {
            return <div key={item.id}>id - {item.id}, name - {item.name}, department - {item.department}, role - {item.role}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Filter;
