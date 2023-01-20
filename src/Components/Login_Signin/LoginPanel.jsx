import React from "react";
import EmailInput from "./SubComponents/EmailInput";
import PasswordInput from "./SubComponents/PasswordInput";
import FormTitle from "./SubComponents/FormTitle";
import { NavLink } from "react-router-dom";
import SubmitButton from "./SubComponents/SubmitButton";

const LoginPanel = () => {
  return (
    <div className="login-countainer">
      <FormTitle title={'Login'}/>
      <form>
        <EmailInput />
        <PasswordInput/>
        <SubmitButton text={'Login'}/>
      </form>
      <NavLink to='/signin' className='link-to-signin'>
        Signin
      </NavLink>
    </div>
  );
};
export default LoginPanel;
