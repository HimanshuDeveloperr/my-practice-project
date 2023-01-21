import React, { useState,Fragment } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UserList from "./Components/Users/UserList";
function App() {
  const [userData, setUserData] = useState([]);
  const Addhandler = (uName, uAge,uCollege) => {
    setUserData((prevData) => {
      return [...prevData, { name: uName, age: uAge,id:Math.random().toString() ,College:uCollege}];
    });
  };
  return (
    <Fragment>
      <AddUsers onAdd={Addhandler} />
      <UserList users={userData} />
    </Fragment>
    // it will also work as a wrapper but it is a good practice.
  );
}

export default App;
