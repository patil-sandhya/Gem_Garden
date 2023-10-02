import axios from "axios";
import styled from "styled-components";
 import React, { useEffect, useState } from "react";
 import { useSelector, useDispatch } from "react-redux";
 import { useParams } from "react-router-dom";
 import { ProductCard } from "../Components/ProductCard";
 import { addToBag, addToCart } from "../Redux/action" // Assuming you have these action creators


export const SingleProduct = () => {
  const userId = JSON.parse(localStorage.getItem("userId")) || 1;

  const { id } = useParams();
  const [data, setData] = useState({});
  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = products.find((el) => el.id === +id);
    setData(product);
  }, [id, products]);

  const AddtoCart = () => {
    axios.patch(`https://gem-gardern-mock-api.onrender.com/users/${userId}`, {
      cart: [...this.cart, data],
    });
  };

  return (
    <DIV>
      {data ? (
        <div className="parent">
          <div className="left">
            <img src={data.avatar} />
          </div>
          <div className="right">
            <h2>{data.about}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Aperiam tempore voluptatum perferendis non deleniti
              repellendus!
            </p>
            <div className="right-mid">
              <h4>{data.brand}</h4>
              <p>{data.category}</p>
              <p>{data.price}</p>
            </div>
            <div className="right-bottom">
              <button onClick={AddtoCart}>ADD TO BAG</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Your Cart is Empty</p>
      )}
    </DIV>
  );
};

const DIV = styled.div`
  .parent {
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
