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
    console.log(EmailInputRef.current.value);
    if (validator.isEmail(email)) {
      setEmailError("OK!");
    } else {
      setEmailError("The Email Invalid!");
    }
  };
  return (
    <div className="login-countainer">
      <FormTitle title={"Login"} />
      <form onSubmit={validateEmail}>
        <EmailInput ref={EmailInputRef} />
        <span className="email-error-label">{emailError}</span>
        <PasswordInput />
        <SubmitButton text={"Login"} />
      </form>
      <span className="link-to-signup">
        Not registered yet?
        <NavLink to="/signin"> Create an Account</NavLink>
      </span>
    </div>
  );
};
export default LoginPanel;
