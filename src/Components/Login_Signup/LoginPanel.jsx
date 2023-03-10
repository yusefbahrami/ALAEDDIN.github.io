import React, { createRef, useState } from "react";
import FormTitle from "./SubComponents/FormTitle";
import { NavLink } from "react-router-dom";
import SubmitButton from "./SubComponents/SubmitButton";
import validator from "validator";
import FormInput from "./SubComponents/FormInput";

const LoginPanel = () => {
  const EmailInputRef = createRef();
  const PasswordValueRef = createRef();
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
        <SubmitButton text={"Login"} />
      </form>
      <span className="link-to-signup">
        Not registered yet?
        <NavLink to="/signup"> Create an Account</NavLink>
      </span>
      <span className="link-to-reset-password">
        Have you forgotten your password?
        <NavLink to="/reset-password"> Reset Password</NavLink>
      </span>
    </div>
  );
};
export default LoginPanel;
