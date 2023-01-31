import { useState, useEffect, createContext } from "react";

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

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    setCartTotal(total);
  }, [cart]);

  const [products, setProducts] = useState([]);

  const searchProducts = (searchTerm) => {
    return products.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };



  return (
    <UserInfoContext.Provider
      value={{ userInfo, cart, addCartItem, removeCartItem }}
    >
      {props.children}
    </UserInfoContext.Provider>
  );
};
