import React, { useState } from "react";
import "./Userlogin.css";

const Userlogin = () => {

  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  
  const handleEmailFocus = () => {
    setEmail(true, console.log("Yalnız .ru domenlərinə icazə verilir."))
  }

  const handlePasswordFocus = () => {
    setPassword(true, console.log("Ən azı 8 simvol."))
  }


  return (
    <>
      <div className="heading">UserLogin</div>
      <form>
        <div className="email">
          <label htmlFor="email">E-mail daxil edin:</label>
          <input type="e-mail" id="email" placeholder="e-mail" onFocus={handleEmailFocus}/>
        </div>
        <div className="password">
          <label htmlFor="password">Parol daxil edin:</label>
          <input type="password" id="password" placeholder="parol" onFocus={handlePasswordFocus}/>
        </div>
        <input type="submit" value={"Login"} />
      </form>
    </>
  );
};

export default Userlogin;
