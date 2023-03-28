import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const inputBlurHandler = () => {
    setEnteredNameTouched(true);
  };
  
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          onChange={nameInputChangeHandler}
          onBlur={inputBlurHandler}
          id="name"
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name should not be empty!</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
