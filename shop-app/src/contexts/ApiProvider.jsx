import { createContext, useState, useEffect } from "react";
import { addOrder } from "../api/orders";

export const ApiContext = createContext();

export const ApiProvider = (props) => {


  const checkOut = (userInfo, cart, cartTotal) => {

    let user = {
        id: userInfo.id,
        userName: userInfo.userName,
        password: userInfo.password,
    }

    let order = {
      User: user,
      OrderItems: cart,
      TotalPrice: cartTotal,
    };



    console.log(JSON.stringify(order));

    return addOrder(order).then(id => id);
  };

  return (
    <ApiContext.Provider value={{ checkOut }}>
      {props.children}
    </ApiContext.Provider>
  );
};
