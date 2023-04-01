import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  //firstName Validation hook
  const {
    value: nameInputValue,
    isValid: textValidation,
    hasError: InputValidation,
    inputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  //lastName Validation hook
  const {
    value: lastNameInputValue,
    isValid: LastNameValidation,
    hasError: LastInputValidation,
    inputBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  //Email Validation hook
  const {
    value: emailInputValue,
    isValid: emailTextValidation,
    hasError: emailInputValidation,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;
  if (textValidation && LastNameValidation && emailTextValidation) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const nameIsValid = InputValidation ? "form-control invalid" : "form-control";
  const lastNameIsValid = LastInputValidation
    ? "form-control invalid"
    : "form-control";
  const emailIsValid = emailInputValidation
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameIsValid}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameInputValue}
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
          />
        </div>
        {InputValidation && (
          <p className="error-text">Name must not be empty.</p>
        )}
        <div className={lastNameIsValid}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameInputValue}
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
          />
        </div>
        {LastInputValidation && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailIsValid}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={emailInputValue}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
      </div>
      {emailInputValidation && <p className="error-text">Enter Valid Email!</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
