import "./Search.css";
import { useContext, useRef } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";

export const Search = () => {
  const { searchProducts } = useContext(ProductContext);

  const searchInput = useRef();

  const handleSearch = () => {
    const searchValue = searchInput.current.value;
    searchProducts(searchValue);
  };

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search products"
      ref={searchInput}
      onChange={handleSearch}
    />
  );
};
