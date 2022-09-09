import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.css";
import { Link ,useNavigate} from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();


  const [firstName, setFirstname] = useState();
  const [lastName, setLastname] = useState();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  let navigate=useNavigate();
async function registerUser(){

const response= await fetch('http://localhost:1300/api/register',{
  method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify({
      firstName,lastName,email,password,phone
    })
  })
  const data =await response.json();
console.log(data)




  if(data){
    alert('successfully registered' )
    navigate('/')
  }else{
  alert('error')
}
}
  return (
    <>
      <div className="Auth-form-container" style={{ backgroundColor: "grey" }}>
        <form className="Auth-form" onSubmit={handleSubmit(registerUser)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign up</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control mt-1 st-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>FirstName</label>
              <input
                {...register("firstName", { required: true, maxLength: 10 })}
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                className="form-control mt-1 st-1"
                placeholder="Enter firstName"
              />
              {errors.firstName && <p>Please check the First Name</p>}
            </div>
            <div className="form-group mt-3">
              <label>LastName</label>
              <input
                {...register("lastName", { required: true, maxLength: 10 })}
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                className="form-control mt-1 st-1"
                placeholder="Enter lastName"
              />
              {errors.lastName && <p>Please check the Last Name</p>}
            </div>
            <div className="form-group mt-3">
              <label>Phone</label>
              <input
                {...register("phone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="Phone"
                className="form-control mt-1 st-1"
                placeholder="Enter phone"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
              {errors.password && (
                <p>use symbols,letter,alphabet in password</p>
              )}
            </div>
             <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-secondary .Submit"
              
              
              >
                Submit
              </button>

              <Link to="/Login" style={{ textDecoration: "none" }}>
                Already existing user ?
              </Link>
            </div>
          </div>
        </form>
      </div>
</>



  )
}


export default Signup;
