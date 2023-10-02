import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../Redux/Product/action";
import styled from "styled-components";

export const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.productReducer.products.find((el) => el.id === +id));

  useEffect(() => {
    // Fetch the product by ID
    dispatch(getProduct(id));
  }, [id, dispatch]);

  return (
    <DIV>
      {product ? (
        <div className="product-details">
          <div className="left">
            <img src={product.avatar} alt={product.about} />
          </div>
          <div className="right">
            <h2>{product.about}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Aperiam tempore voluptatum perferendis non deleniti repellendus!
            </p>
            <div className="right-mid">
              <h4>{product.brand}</h4>
              <p>{product.category}</p>
              <p>{product.price}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </DIV>
  );
};

const DIV = styled.div`
  .product-details {
    width: 90%;
    margin: 70px auto;
    display: flex;
  }

  .left {
    width: 45%;
  }

  .left img {
    width: 100%;
  }
`;

