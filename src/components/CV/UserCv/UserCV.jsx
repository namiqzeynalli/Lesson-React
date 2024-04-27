import React from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import Experience from "../Experience/Experience";
import Contacts from "../Contacts/Contacts";
import "./UserCV.css";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Languages from "../Languages/Languages";

const UserCv = () => {
  return (
    <>
      <div className="container">
        <div className="personal">
          <PersonalInfo />
        </div>
        <div className="otherProperties">
          <Education/>
          <Skills />
          <Languages />
          <Experience />
          <Contacts />
        </div>
      </div>
    </>
  );
};

export default UserCv;
