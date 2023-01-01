import React from "react";

const Error404 = () => {
  return (
    <div className="error-countainer">
      <span>?</span>
      <div className="error-desciption-countainer">
        <p className="error-title">Somthing's wrong here...</p>
        <p className="error-description">
          We can't find the page you're looking for.
        </p>
      </div>
    </div>
  );
};
export default Error404;
