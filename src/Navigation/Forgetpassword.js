import React from 'react';
import { useNavigate } from 'react-router-dom';
function ForgetPassword() {
  let navigate=useNavigate();
  let handleBack=()=>{
   
      navigate('/Login')
  }
  let handleOtp=()=>{
    
  }
  return (
   
    <div>
     <div className="Auth-form-container">
    <form className="Auth-form">

      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Enter Your Email</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
          /></div>
          </div>
          <div className="gap-2 "style={{marginLeft:'100px',}}>
          <button type="submit" className="btn btn-primary" 
       onClick={handleOtp} >
            Send otp
          </button>
          <button type="submit" className="btn btn-primary" onClick={handleBack}>
         go back
          </button>
        </div>
          </form>
          </div>
    </div>
  )
}

export default ForgetPassword;