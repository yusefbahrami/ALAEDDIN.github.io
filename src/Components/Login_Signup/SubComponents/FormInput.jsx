import React, { forwardRef } from "react";
const FormInput = (props, ref) => {
  return (
    <input
      type={`${props.type}`}
      placeholder={`${props.placeholder}`}
      className={`form-input ${props.specialClassname}`}
      ref={ref}
      required
    />
  );
};
export default forwardRef(FormInput);
