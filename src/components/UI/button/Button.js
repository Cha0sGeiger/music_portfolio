import React from "react";
import classes from "./Button.module.scss";

export const Button = ({ children, btnType, clicked }) => {
  return (
    <button className={[classes[btnType]]} onClick={clicked}>
      {children}
    </button>
  );
};
