import React, { createRef, useState } from "react";
import FormTitle from "./SubComponents/FormTitle";
import EmailInput from "./SubComponents/EmailInput";
import PasswordInput from "./SubComponents/PasswordInput";
import SubmitButton from "./SubComponents/SubmitButton";
import { NavLink } from "react-router-dom";
import validator from "validator";

const SignupPanel = () => {
  const EmailInputRef = createRef();
  const PasswordValue = createRef();
  const RepeatPasswordValue = createRef();
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
      <FormTitle title={"Signup"} />
      <form onSubmit={validateEmail}>
        <EmailInput ref={EmailInputRef} />
        <span className="email-error-label">{emailError}</span>
        <PasswordInput text={"Password"}/>
        <PasswordInput text={"repeat Password"}/>
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
