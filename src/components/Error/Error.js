import React from "react";
import PropTypes from "prop-types";
import Monster from "../Monster/Monster";

const Error = ({ text }) => {
  const errorStyle = {
    color: "white",
    fontSize: "20px",
  };

  const errorContainer = {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    width: "80%",
  };

  return (
    <section style={errorContainer}>
      <p className="error-text" style={errorStyle}>
        <Monster />
        Looks like we're having trouble loading this. ({text})
        <Monster />
      </p>
    </section>
  );
};

export default Error;

Error.propTypes = {
  text: PropTypes.string.isRequired,
};
