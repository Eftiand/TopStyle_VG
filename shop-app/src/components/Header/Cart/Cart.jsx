import React from "react";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  let styleButton = {
    textSize: "1em",
  };

  return (
    <>
      <NavLink to='Cart' style={styleButton} className="btn text-center p-1  ">
        <i className="bi bi-cart me-1"></i>
      </NavLink>
    </>
  );
};
