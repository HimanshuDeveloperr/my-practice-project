import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;

// here we are creating  a portal which will help the modal to not be nested with our other rendered elements instead it will put the modal outside our app.js component.

// first import react from react-dom then simply created a function and return the elements we want to return in our parent component then in the root jsx we simply create a portal that takes two args 1:-the element we want to be rendered 2:-where we want it to be rendered.
