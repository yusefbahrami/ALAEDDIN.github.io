import React, { forwardRef } from "react";
const EmailInput = (props, ref) => {
  return (
    <input
      type={"email"}
      placeholder="example@email.com"
      className="form-input Email-input"
      ref={ref}
      required
    />
  );
};
export default forwardRef(EmailInput);
