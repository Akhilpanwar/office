import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/UserContext";

function Login() {
  const { setUserName } = useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();
   
  async function handleClick(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:1900/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.user != false) {
      const request = window.indexedDB.open("MyDatabase", 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        const objectStore = db.createObjectStore("users", {
          keyPath: "email",
        });
        objectStore.createIndex("email", "email", { unique: true });
        objectStore.createIndex("firstName", "firstName", { unique: false });
        objectStore.createIndex("lastName", "lastName", { unique: false });
        objectStore.transaction.oncomplete = (event) => {
          const objectStore = db
            .transaction("users", "readwrite")
            .objectStore("users");

          objectStore.add({
            email: data.user.email,
            firstName: data.user.firstName,
            lastName: data.user.lastName,
          });
          const objectStoreRequest = objectStore.get("email");
          objectStoreRequest.onsuccess = () => {
            if (objectStoreRequest.source.indexNames) {
              navigate("/");
              setUserName(objectStoreRequest.source.indexNames);
            }
          };
        };
      };
    }
  }


  return (
    <>
      <div className="Auth-form-container" style={{ backgroundColor: "grey" }}>
        <form className="Auth-form" style={{ border: "2px solid " }}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                value={email}
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                value={password}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Link
              to="/ForgetPassword"
              className="forget mt-1"
              style={{
                paddingLeft: "180px",
                fontFamily: "Arial",
                color: "blue",
              }}
            >
              Forget Password ?
            </Link>
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Submit
              </button>
            </div>
            <span>Don't have Account ?</span>
            <Link to="/Signup" className="mylink">
              Click here
            </Link>
            <br />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
