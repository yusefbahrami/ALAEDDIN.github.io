import React, { createRef, useState } from "react";
import FormTitle from "./SubComponents/FormTitle";
import EmailInput from "./SubComponents/EmailInput";
import PasswordInput from "./SubComponents/PasswordInput";
import SubmitButton from "./SubComponents/SubmitButton";
import { NavLink } from "react-router-dom";
import validator from "validator";

const SignupPanel = () => {
  const EmailInputRef = createRef();
  const PasswordValueRef = createRef();
  const RepeatPasswordValueRef = createRef();
  const [emailError, setEmailError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const validateEmail = (e) => {
    e.preventDefault();
    var email = EmailInputRef.current.value;
    if (validator.isEmail(email)) {
      setEmailError("OK!");
      cheackPassword();
    } else {
      setEmailError("The Email Invalid!");
    }
  };
  const cheackPassword = () => {
    if (
      PasswordValueRef.current.value === RepeatPasswordValueRef.current.value
    ) {
      setPasswordError("OK!");
    } else {
      setPasswordError("The Entered Passwords Are Not The Same!");
    }
  };
  return (
    <div className="login-countainer">
      <FormTitle title={"Signup"} />
      <form onSubmit={validateEmail}>
        <EmailInput ref={EmailInputRef} />
        <span className="error email-error-label">{emailError}</span>
        <PasswordInput ref={PasswordValueRef} text={"Password"} />
        <PasswordInput ref={RepeatPasswordValueRef} text={"repeat Password"} />
        <span className="error password-error-label">{PasswordError}</span>
        <SubmitButton text={"Signup"} />
      </form>
      <span className="link-to-signup">
        Already a User?
        <NavLink to="/login"> Login</NavLink>
      </span>
    </div>
  );
};
export default SignupPanel;
