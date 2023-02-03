import React, { useContext } from "react";
import { UserInfoContext } from "../../../contexts/UserInfoProvider";
import { CardCart } from "../../misc/CardCart";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart, cartTotal, userInfo } = useContext(UserInfoContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col-12">
            <h3 className="text-center">Your cart is empty</h3>
          </div>
        </div>
      </div>
    );
  }



  let list = cart.map((product, index) => {
    return (
      <div className="row mt-3" key={index}>
        <div className="col-3">
          <CardCart product={product} />
        </div>
      </div>
    );
  });

  const handleClick = () => {
    if (userInfo.loggedIn) {
        navigate("/checkout");
    } else {
      alert("Please login to check out");
    }
  };

  return (
    <div className="container">
      {list}
      <button onClick={handleClick} className="float-end btn btn-primary">
        Check out
      </button>
    </div>
  );
};
