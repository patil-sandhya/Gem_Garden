import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, price, about, avatar, brand }) => {
  return (
    <CardLink to={`/product/${id}`}>
      <Card>
        <div className="card-image-div">
          <img className="card-image" src={avatar} alt="jewelry" />
        </div>
        <p className="card-about" id="card-about">
          {about}
        </p>
        <p className="card-brand">{brand}</p>
        <div className="card-button-div">
          <button className="card-btn" id="cart-btn">
            Add to Cart
          </button>
          <button className="card-btn" id="buy-btn">
            Buy Now
          </button>
        </div>
        <p className="card-price">₹ {price}</p>
      </Card>
    </CardLink>
  );
};

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  transition: 0.1s;
  padding: 20px;
  border: 1px solid #c7c7c7;
  border-radius: 20%;
  position: relative;

  &:hover {
    border: 2px solid #292525;
  }

  &:hover .card-button-div {
    display: flex;
    transform: translateY(0%);
  }

  &:hover .card-about,
  &:hover .card-brand {
    display: none;
  }

  .card-image-div {
    width: 80%;
    margin: auto;
  }

  .card-image {
    width: 100%;
    margin: auto;
    transition: 0.3s;
    max-height: 300px;
    object-fit: cover;
  }

  .card-image:hover {
    border-radius: 50%;
    transform: rotate(20deg) scale(1.1);
  }

  .card-about {
    font-weight: 500;
    margin: 0;
    margin-top: 8px;
    padding: 1px;
    font-family: "Nunito Sans", sans-serif;
    --max-lines: 1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--max-lines);
  }

  .card-brand,
  .card-price {
    padding: 2px;
    color: #303030;
    font-family: Oswald;
    letter-spacing: 1px;
    margin: 0;
  }

  .card-button-div {
    display: flex;
    justify-content: space-between;
    display: none;
  }

  .card-btn {
    width: 30wh;
    padding: 5px;
    height: 5vh;
    border: none;
    font-family: "Nunito Sans", sans-serif;
    margin-block: 10px;
    background-color: white;
    border: 2px solid #292525;
    transition: transform 0.3s ease-in-out;
    transform: translateY(20%);
    border-radius: 8px;
    font-size: 13px;
  }

  #buy-btn {
    background-color: #292525;
    color: white;
  }

  #cart-btn:hover {
    background-color: #292525;
    color: white;
  }

  #buy-btn:hover {
    background-color: white;
    color: black;
    border: 2px solid #292525;
  }

  @media screen and (max-width: 900px) {
    padding-bottom: 25px;
    padding-left: 25px;
    .card-about,
    .card-brand,
    .card-price {
      font-size: smaller;
    }
  }

  @media screen and (max-width: 600px) {
    padding-bottom: 30px;
    padding-left: 30px;
    .card-image-div {
      width: 80%;
    }
  }
`;
