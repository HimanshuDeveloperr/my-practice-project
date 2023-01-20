
import React, { useState } from 'react';

import Card from "../UI/Card";
import classes from "./AddUsers.module.css"
import Button from "../UI/Button";

const AddUsers=(props)=>{
    const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

    const ADDUSERhandler=(event)=>{
   event.preventDefault();
   console.log(enteredUsername, enteredAge);

    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
      };
    
      const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
      };
return(
    <Card className={classes.input}>

    <form onSubmit={ADDUSERhandler}>
        <label htmlFor="Username">Username</label>
        <input type="text" id="Username" onChange={usernameChangeHandler}/>
        <label htmlFor="Age">Age (Years)</label>
        <input type="number" id="Age" onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
)
}

export default AddUsers;