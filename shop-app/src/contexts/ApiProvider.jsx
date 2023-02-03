import { createContext } from "react";
import { addOrder } from "../api/orders";
import { register } from "../api/auth";

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

    return addOrder(order).then(id => id);
  };

    const addNewUser = (user) => {
        return register(user).then(id => id);
    };

  return (
    <ApiContext.Provider value={{ checkOut, addNewUser }}>
      {props.children}
    </ApiContext.Provider>
  );
};
