import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductProvider";
import { Card } from "../../misc/Card";

export const Home = () => {
  const { productsDisplay } = useContext(ProductContext);

  let list = productsDisplay.map((product) => {
    return (
      <div className="col-2" key={product.id}>
        <Card key={product.id} product={product} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row mt-3 ms-3">{list}</div>
    </div>
  );
};
