import { useState, createContext, useContext } from "react";
import ChildComponent from "./ChildComponent";
import { UserContext } from "./state/UserContext";

function UserContextEx() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <div style={{ background: "yellow" }}>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <ChildComponent />
      </UserContext.Provider>
    </div>

  );
}

export default UserContextEx;
