

import React from 'react'
import { useLocation } from "react-router-dom";
import { UserInfoContext } from "../../../contexts/UserInfoProvider";
import { useContext } from 'react'

export const Product = () => {
  const location = useLocation();

  const { addCartItem } = useContext(UserInfoContext);

  const product = location.state;

  let styleImg = {
    width: "100%",
    height: "50vh",
  };

  const handleClick = () => {
    addCartItem(product);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src={product.image} style={styleImg}alt="" />
        </div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>{product.price}kr</h3>
        <button className='btn btn-primary' onClick={handleClick}>Köp</button>
      </div>
    </div>
  );
}
