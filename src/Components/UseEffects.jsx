import React from "react";
import { useState, useEffect } from "react";

// PROGRESSION 5 | useEffect

function UseEffect() {
  const [currAge, setAge] = useState(19);
  const [currSib, setSib] = useState(3);


  useEffect(() => {
    alert(`my age is ${currAge}`);
  }, [currAge]);

  return (
    <div>
      <h3>My Current Age is {currAge}</h3>
      <h4>My siblings {currSib}</h4>

      
      <button onClick={() => setAge((currAge) => currAge + 1)}>age</button>
      <button onClick={() => setSib((currSib) => currSib + 1)}>sib</button>
    </div>
  );
}

export default UseEffect;