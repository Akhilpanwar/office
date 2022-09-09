import React, { useEffect, useState } from "react";

function Effect(props) {
  const [username, setUserName] = useState(false);
  
  //component didmount
  useEffect(() => {
    console.log("appears on every time");
  },[]);
  //component did update
  useEffect(() => {
    setUserName(props.name);
  },[{props}])
  let handleClick = () => {
    console.log(props.name);
  };
  return (
    <div>
      <h1>hello</h1>
      <h1>{username}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default Effect;
