import React from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css"
import Button from "../UI/Button";

const AddUsers=(props)=>{

    const ADDUSERhandler=(event)=>{
   event.preventDefault();
    }
return(
    <Card className={classes.input}>

    <form onSubmit={ADDUSERhandler}>
        <label htmlFor="Username">Username</label>
        <input type="text" id="Username"/>
        <label htmlFor="Age">Age (Years)</label>
        <input type="number" id="Age"/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
)
}

export default AddUsers;