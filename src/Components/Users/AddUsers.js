import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const ADDUSERhandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
        return;
    }
    if(+enteredAge<1){
        return
    }
    props.onAdd(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <div>

    <ErrorModal title="An error occured" message="something went wrong!"/>
    <Card className={classes.input}>
      <form onSubmit={ADDUSERhandler}>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          id="Username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="Age">Age (Years)</label>
        <input
          type="number"
          id="Age"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUsers;
