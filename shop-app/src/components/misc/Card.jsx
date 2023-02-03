
import {useContext} from 'react'
import { UserInfoContext } from "../../contexts/UserInfoProvider";
import { useNavigate } from "react-router-dom";


export const Card = ({product}) => {

    const navigate = useNavigate();

    const { addCartItem } = useContext(UserInfoContext);

    const {price, name, image} = product;

    let styleObj = {
      backgroundColor: "#ECE8DD",
    };

    let styleButton = {
      backgroundColor: "#579BB1",
        color: "white",
    };

    let styleText = {
        textDecoration: "underline",
    };


    const handleClick = () => {
        addCartItem(product);
    }

    const handleCardClick = (product) => {
        navigate(`/Product/`, {state: product});
    }
  return (
    <>
      <div className="card" style={styleObj}>
        <img src={image} className="card-img-top" alt="card" />
        <div className="card-body">
          <h5
            className="card-title "
            style={styleText}
            onClick={()=>handleCardClick(product)}
          >
            {name}
          </h5>
          <button
            onClick={handleClick}
            className="btn w-100"
            style={styleButton}
          >
            {price}kr <i className="bi bi-basket float-end"></i>
          </button>
        </div>
      </div>
    </>
  );
}
