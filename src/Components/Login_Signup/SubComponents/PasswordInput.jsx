import React, { forwardRef } from "react";

const PasswordInput = (props, ref) => {
  return (
    <input
      ref={ref}
      type={"password"}
      placeholder={`${props.text}`}
      className="form-input password-input"
      required
    />
  );
};
export default forwardRef(PasswordInput);
