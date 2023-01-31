import logoImage from '../../../assets/img/Logo.png'

import React from 'react'

export const Logo = (props) => {

    let styleObj = {
        width: props.width || "5em",
        height: props.height || "5em",
    };

  return (
    <>
      <img src={logoImage} alt="Logo" style={styleObj}/>
    </>
  );
}
