import React, { useEffect, useState } from "react";
import "./Employees.css";
const Employees = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((res) => res.json())
      .then((data) => {
        setState(data);
      });
  }, []);
  return (
    <>
      <div className="employee">
        {state.map((emp) => {
          return (
            <div key={emp.id}>
              {emp.id} - {emp.name} - {emp.department} - {emp.role}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Employees;
