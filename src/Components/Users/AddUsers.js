import React, { useState , useRef} from "react";

import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) => {
  const nameInputRef=useRef()
  const ageInputRef=useRef()

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const[error,seterror]=useState()

  const ADDUSERhandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef)
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
      seterror(
        {
          title:'Invalid input',
          message:'Please enter a valid name and age (non-empty values).',
        }
      )
        return;
    }
    if(+enteredAge<1){
      seterror({
        title:'Invalid Age',
        message: 'Please enter a valid age (> 0).',
      })
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

  const errorHandler=()=>{
    seterror(null);
  }
  return <Wrapper>

   {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={ADDUSERhandler}>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          id="Username"
          value={enteredUsername}
          onChange={usernameChangeHandler}
          ref={nameInputRef}
        />
        <label htmlFor="Age">Age (Years)</label>
        <input
          type="number"
          id="Age"
          value={enteredAge}
          onChange={ageChangeHandler}
          ref={ageInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>

    
  
};

export default AddUsers;
