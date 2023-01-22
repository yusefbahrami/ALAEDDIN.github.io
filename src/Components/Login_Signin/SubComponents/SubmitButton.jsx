import React from "react";

const SubmitButton = (props) => {
  return (
    <button type="submit" className="form-submit submit-button">
      {props.text}
    </button>
  );
};
export default SubmitButton;
