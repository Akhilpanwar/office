import React,{useEffect,useContext} from 'react'
import {useNavigate,Link} from 'react-router-dom';

import Context  from "../context/UserContext"
function Protected(props) {
  const {userName}=useContext(Context);
  const {Component}=props;
let navigate=useNavigate();
useEffect(()=>{
if(!userName){
  navigate('/login')
}
},[])

  return (
    <div>
  
    <Component />
  
    </div>
  )
}

export default Protected;
