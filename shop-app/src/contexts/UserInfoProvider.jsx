import { useState, createContext } from "react";

export const UserInfoContext = createContext();

export const UserInfoProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    loggediN: false,
  });

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addCartItem = (item) => {
    setCart([...cart, item]);
  };

  const removeCartItem = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <UserInfoContext.Provider
      value={{ userInfo, cart, addCartItem, removeCartItem }}
    >
      {props.children}
    </UserInfoContext.Provider>
  );
};
