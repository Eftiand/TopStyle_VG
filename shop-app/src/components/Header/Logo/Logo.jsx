import logoImage from '../../../assets/img/Logo.png'

import React from 'react'
import { NavLink } from 'react-router-dom';

export const Logo = (props) => {

    let styleObj = {
        width: props.width || "5em",
        height: props.height || "5em",
    };

return (
  <>
    <NavLink to="/">
      <img src={logoImage} alt="Logo" style={styleObj} />
    </NavLink>
  </>
);
}
