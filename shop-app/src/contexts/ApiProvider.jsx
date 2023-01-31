import { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = (props) => {

  const [products, setProducts] = useState([]);


  return (
    <ApiContext.Provider value={{products}}>
      {props.children}
    </ApiContext.Provider>);
};
