import React, { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UserList from "./Components/Users/UserList";
function App() {
  const [userData, setUserData] = useState([]);
  const Addhandler = (uName, uAge) => {
    setUserData((prevData) => {
      return [...prevData, { name: uName, age: uAge,id:Math.random().toString() }];
    });
  };
  return (
    <>
      <AddUsers onAdd={Addhandler} />
      <UserList users={userData} />
    </>
    // it will also work as a wrapper but it is not a good practice to use it like this.
  );
}

export default App;
