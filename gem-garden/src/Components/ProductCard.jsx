import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'


export const ProductCard = ({ id, price, about, avatar, brand }) => {
  return (
    <DIV about={about}>
        <div className="card-div">
          <div className="card-image-div">
          <Link to={`/ProductList/${id}`}>
            <img className="card-image" src={avatar} alt="jwellery" />
          </Link>
          </div>

          <p className="card-about" id="card-about">
            {about}
            {/* .length <= 30 ? about : about.substring(0, 30 - 3) + "..." */}
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
        </div>
    </DIV>
  );
};

const DIV = styled.div`

  .card-div {
    transition: 0.1s;
    padding: 20px;
    border: 1px solid #c7c7c7;
    border-radius: 20%;
    position: relative;
    text-decoration: none;
  }

  .card-div:hover {
    border: 2px solid #292525;
  }

  .card-div:hover .card-button-div {
    display: flex;
    transform: translateY(0%);
  }

  .card-div:hover .card-about,
  .card-div:hover .card-brand {
    display: none;
  }

  .card-image-div {
    width: 80%;
    margin: auto;
    /* height: 43vh; */
  }

  .card-image {
    /* height: 30vh; */
    /* border: 1px solid red; */
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
    /* white-space: nowrap; */
    /* overflow: auto;
    text-overflow: ellipsis; */
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
    .card-div {
      padding-bottom: 25px;
      padding-left: 25px;
    }
    .card-about,
    .card-brand,
    .card-price {
      font-size: smaller;
    }
  }

  @media screen and (max-width: 600px) {
    .card-div {
      padding-bottom: 30px;
      padding-left: 30px;
    }

    .card-image-div {
      width: 80%;
    }
  }
`;
