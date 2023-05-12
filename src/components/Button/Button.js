import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";


const Button = ({ name, color }) => {
  return (
    // href={{ pathname: '/search', query: { keyword: 'this way' } }}
    <Link href={{pathname: `/feeling/${name}`, query: name}} style={{ textDecoration: "none" }}>
      <div
        style={{
          color: color,
          textShadow: `0 0 4px ${color}`,
          "--pulseColor": color,
        }}
        className={`${name} feelingButton`}
      >
        <p>{name}</p>
      </div>
    </Link>
  );
};

export default Button;

Button.propType = {
  name: PropTypes.string.isRequired,
};
