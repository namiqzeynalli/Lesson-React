import React, { useState } from "react";
import "./NewEmployees.css";

const NewEmployees = () => {
  const [newEmployeesState, setNewEmployeesState] = useState([
    {
      id: 1,
      name: "Frodo Baggins",
      department: "Management",
      role: "CEO",
      alive: true,
    },
    {
      id: 2,
      name: "Samwise Gamgee",
      department: "Management",
      role: "CTO",
      alive: false,
    },
    {
      id: 3,
      name: "Gandalf the Gray",
      department: "Recruitment",
      role: "Lead-recruiter",
      alive: true,
    },
    {
      id: 4,
      name: "Aragorn",
      department: "Security",
      role: "Security officer",
      alive: true,
    },
    {
      id: 5,
      name: "Legolas",
      department: "Management",
      role: "Office manager",
      alive: false,
    },
  ]);
  return (
    <div>
      All data
      <br />
      {newEmployeesState.map((emp) => {
        return (
          <div key={emp.id}>
            {emp.name} - {emp.department} - {emp.role}
          </div>
        );
      })}
      <br />
      <hr />
      Alive characters
      {newEmployeesState
        .filter((emp) => {
          return emp.alive === true;
        })
        .map((emp) => {
          return (
            <div key={emp.id}>
              {emp.name} - {emp.department} - {emp.role}
            </div>
          );
        })}
      <br />
      <hr />
      Don't alive characters
      {newEmployeesState
        .filter((emp) => {
          return emp.alive === false;
        })
        .map((emp) => {
          return (
            <div key={emp.id}>
              {emp.name} - {emp.department} - {emp.role}
            </div>
          );
        })}
    </div>
  );
};

export default NewEmployees;
