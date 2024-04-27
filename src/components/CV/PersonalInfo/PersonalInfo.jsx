import React from "react";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <>
      <div className="personalinfo">
        <div className="head">
          <h2>Namiq Zeynalli</h2>
          <h2>Front-End Developer</h2>
        </div>
        <div className="about">
          <p>
            Third year Information Security Student, who is always open to new
            knowledge and skills and strives to better learn her field.
            Participation in seminars, both online and offline, to develop both
            professional and personal qualities.
          </p>
        </div>
        {/* <div className="perinfo">
          <p>Age: 20</p>
          <p>Location: Baku, 28 May</p>
        </div> */}
      </div>
    </>
  );
};

export default PersonalInfo;
