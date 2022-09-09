import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/UserContext";


function Logout() {
  const { setUserName } = useContext(Context);
  let navigate = useNavigate();



    setUserName(null);
    navigate("/login");
 
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default Logout;
