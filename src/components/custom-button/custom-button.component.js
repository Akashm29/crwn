import React from "react";
import "./custom-button.style.scss";

const customButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default customButton;
