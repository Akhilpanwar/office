import React,{useContext,useState} from "react";

import Home from "./Navigation/Home";
import Header from "./Navigation/Header";
import Logout from "./Navigation/logout";
import About from "./Navigation/About";
import Login from "./Navigation/Login";
import Signup from "./Navigation/signup";
import AddProduct from "./Navigation/AddProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "./Navigation/Forgetpassword";
import Protected from "./Navigation/Protected";
import Context from './context/UserContext';

function Routing() {
  const[userName,setUserName]=useState();
  return (
    <div>
      <BrowserRouter>
      <Context.Provider value={{userName,setUserName}}>
        <Header />
      
        <Routes>
      
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="About" element={<Protected Component={About} />} />
        
          <Route
            path="AddProduct"
            element={<Protected Component={AddProduct} />}
          />

          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="logout" element={<Logout />} />}
      
          <Route path="ForgetPassword" element={<ForgetPassword />} />
        </Routes>
        </Context.Provider>

      </BrowserRouter>
    </div>
  );
}

export default Routing;
