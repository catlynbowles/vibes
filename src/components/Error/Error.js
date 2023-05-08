import React from "react";
import PropTypes from "prop-types";

const Error = ({ text }) => {
  console.log(text);
  const errorStyle = {
    color: "white",
    fontSize: "20px",
  };

  const errorContainer = {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  };

  return (
    <section style={errorContainer}>
      <p className="error-text" style={errorStyle}>
        <img src="http://i.stack.imgur.com/SBv4T.gif" height="30" alt=""/>
        Looks like we're having trouble loading this. ({text})
        <img src="http://i.stack.imgur.com/SBv4T.gif" height="30" alt=""/>
      </p>
    </section>
  );
};

export default Error;

Error.propTypes = {
  text: PropTypes.string.isRequired,
};
