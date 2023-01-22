import React, { createRef, useState } from "react";
import EmailInput from "./SubComponents/EmailInput";
import PasswordInput from "./SubComponents/PasswordInput";
import FormTitle from "./SubComponents/FormTitle";
import { NavLink } from "react-router-dom";
import SubmitButton from "./SubComponents/SubmitButton";
import validator from "validator";

const LoginPanel = () => {
  const EmailInputRef = createRef();
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    e.preventDefault();
    var email = EmailInputRef.current.value;
    if (validator.isEmail(email)) {
      setEmailError("OK!");
    } else {
      setEmailError("The Email Invalid!");
    }
  };
  return (
    <div className="login-signup-countainer">
      <FormTitle title={"Login"} />
      <form onSubmit={validateEmail}>
        <EmailInput ref={EmailInputRef} />
        <span className="error email-error-label">{emailError}</span>
        <PasswordInput text={"Password"} />
        <SubmitButton text={"Login"} />
      </form>
      <span className="link-to-signup">
        Not registered yet?
        <NavLink to="/signup"> Create an Account</NavLink>
      </span>
    </div>
  );
};
export default LoginPanel;
