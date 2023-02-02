import React from "react";

export const CardCart = (props) => {
  const { price, name, description, image } = props.product;

  return (
    <>
      <div className="col-2">
        <img src={image} alt="" />
      </div>
      <div className="col-6 float-start">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
        <div className="col-2">
            <h3>{price}kr</h3>
        </div>
    </>
  );
};
