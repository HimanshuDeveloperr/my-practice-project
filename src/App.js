import React, { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UserList from "./Components/Users/UserList";
function App() {
  const [userData, setUserData] = useState([]);
  const Addhandler = (uName, uAge) => {
    setUserData((prevData) => {
      return [...prevData, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <AddUsers onAdd={Addhandler} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
