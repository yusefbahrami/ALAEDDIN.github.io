import React, { createRef, useState } from "react";
import FormTitle from "./SubComponents/FormTitle";
import SubmitButton from "./SubComponents/SubmitButton";
import { NavLink } from "react-router-dom";
import validator from "validator";
import FormInput from "./SubComponents/FormInput";

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
    <div className="login-signup-countainer">
      <FormTitle title={"Signup"} />
      <form onSubmit={validateEmail}>
        <FormInput
          type={"email"}
          placeholder={"example@email.com"}
          specialClassname={"Email-input"}
          ref={EmailInputRef}
        />
        <span className="error email-error-label">{emailError}</span>
        <FormInput
          type={"password"}
          placeholder={"password"}
          specialClassname={"password-input"}
          ref={PasswordValueRef}
        />
        <FormInput
          type={"password"}
          placeholder={"password"}
          specialClassname={"password-input"}
          ref={RepeatPasswordValueRef}
        />
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
