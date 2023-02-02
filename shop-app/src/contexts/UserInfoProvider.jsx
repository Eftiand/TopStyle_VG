import { useState, useEffect, createContext } from "react";
import { login } from "../api/auth";

export const UserInfoContext = createContext();

export const UserInfoProvider = (props) => {
  const [userInfo, setUserInfo] = useState({
    id: 0,
    userName: "",
    password: "",
    loggedIn: false,
  });

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const checkLogin = ({ userName, password }) => {
    //Logic to check if user is in database

    let user = login(userName, password).then((user) => {
      if (user.id === 0) return;

      setUserInfo({
        id: user.id,
        userName: user.userName,
        password: user.password,
        loggedIn: true,
      });
    });

    return user;
  };

  const logout = () => {
    setUserInfo({
      id: 0,
      userName: "",
      loggedIn: false,
    });
  };

  const addCartItem = (item) => {
    setCart([...cart, item]);
    console.log(cart);
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
      value={{
        userInfo,
        cart,
        addCartItem,
        removeCartItem,
        checkLogin,
        logout,
        cartTotal,
        searchProducts,
      }}
    >
      {props.children}
    </UserInfoContext.Provider>
  );
};
