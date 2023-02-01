import { useState, createContext, useContext } from "react";
import { UserContext } from "./state/UserContext";
 
function ChildComponent() {
  const user = useContext(UserContext);

  return (
    <div className="App">
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}

export default ChildComponent;
