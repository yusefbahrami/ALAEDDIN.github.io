import React from "react";

const SubmitButton = (props) => {
    const handleLogin=(e)=>{
        e.preventDefault();
    }
  return (
    <button type="submit" className="form-submit submit-button" onClick={handleLogin}>
      {props.text}
    </button>
  );
};
export default SubmitButton;
