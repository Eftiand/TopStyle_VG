import {createContext,useState,useEffect } from 'react'
import { getProducts } from "../api/products";

export const ProductContext = createContext();

export const ProductProvider = (props) => {

    const [allProducts, setAllProducts] = useState([]);
    const [productsDisplay, setProductsDisplay] = useState([]);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getProducts().then((products) => {
        setAllProducts(products);
        setProductsDisplay(products);
      });
    }, []);
    
    useEffect(() => {
      setProductsDisplay(allProducts);
    }, [allProducts]);
      

    const searchProducts = (searchTerm) => {
      setProductsDisplay(
        allProducts.filter((product) => {
          return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    };

  return (
    <ProductContext.Provider
      value={{ allProducts, productsDisplay, searchProducts }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
