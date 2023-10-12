import React from "react";

const Alert = ({ successAlert, errorAlert }) => {
  return (
    <>
      {successAlert && !errorAlert && (
        <h5 className="alert alert-success align-items-center">
          {successAlert}
        </h5>
      )}
      {errorAlert && !successAlert && (
        <h5 className="alert alert-danger align-items-center">{errorAlert}</h5>
      )}
    </>
  );
};

export default Alert;
