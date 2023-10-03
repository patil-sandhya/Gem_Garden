import axios from "axios";
import styled from "styled-components";
 import React, { useEffect, useState } from "react";
 import { useSelector, useDispatch } from "react-redux";
 import { useParams } from "react-router-dom";
 import { ProductCard } from "../Components/ProductCard";
import { Link } from "react-router-dom";
import { updateCart } from "../Redux/Cart/action";
import BestSellerCard from "../Components/BestSellerCard";
import best_seller_1 from "../Assets/bestSeller-1.jpg";
import best_seller_2 from "../Assets/bestSeller-2.jpg";
import best_seller_3 from "../Assets/bestSeller-3.jpg";
import best_seller_4 from "../Assets/bestSeller-4.jpg";


export const SingleProduct = () => {
  const userId = JSON.parse(localStorage.getItem("userId"));

  const { id } = useParams();
  const [data, setData] = useState({});
  const products = useSelector((store) => store.productReducer.products);
  const cart = useSelector((store) => store.CartReducer.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const product = products.find((el) => el.id === +id);
    setData(product);
  }, [id, products]);

  const AddtoCart = () => {
    let newCart = [...cart, { ...data, qty: 1 }];
    // let count = 0;
    let res = cart.filter((item) => item.id === +id);

    if (res.length > 0) {
      alert("already in cart");
    } else {
      dispatch(updateCart(userId, newCart));
    }
  };

  return (
    <DIV>
      {data ? (
        <div className="parent">
          <div className="parent-top">
            <div className="left">
              <div className="left-child-1">
                <img src={data.avatar} alt="img" />
              </div>
              <div className="left-child-2">
                <div>
                  {data.category == "Rings" ? (
                    <img
                      src={
                        "https://www.giva.co/cdn/shop/products/R049_1_1024x1024.jpg?v=1679392142"
                      }
                      alt="img"
                    />
                  ) : data.category == "Brecelets" ? (
                    <img
                      src={
                        "https://www.giva.co/cdn/shop/products/BR046_1_2_a91b3ca0-1829-4267-a462-48ac2187e87b_1024x1024.jpg?v=1652443622"
                      }
                      alt="img"
                    />
                  ) : data.category == "Earrning" ? (
                    <img
                      src={
                        "https://www.giva.co/cdn/shop/files/ER0150_1_1_1024x1024.jpg?v=1685947871"
                      }
                      alt="img"
                    />
                  ) : data.category == "Necklaces & Pendants" ? (
                    <img
                      src={
                        "https://www.giva.co/cdn/shop/products/PD0107_1_5739ed68-2c91-4221-bce2-baa79157f32f_1024x1024.jpg?v=1652444402"
                      }
                      alt="img"
                    />
                  ) : data.category == "Accessories" ? (
                    <img
                      src={
                        "https://www.giva.co/cdn/shop/products/ER0138_1_1024x1024.jpg?v=1626177224"
                      }
                      alt="img"
                    />
                  ) : (
                    <img
                      src={
                        "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/2/k/2/-original-imagpzzhgsdhvghg.jpeg?q=70"
                      }
                      alt="img"
                    />
                  )}
                </div>
                <div>
                  {data.category == "Rings" ? (
                    <img
                      src={
                        "https://www.giva.co/cdn/shop/files/R021_1_1024x1024.jpg?v=1694086085"
                      }
                      alt="img"
                    />
                  ) : data.category == "Brecelets" ? (
                    <img
                      src={
                        "https://www.giva.co/cdn/shop/products/BR0196_1_b82f394b-bdc9-4ae6-896b-2db5c77d3fdf_1024x1024.jpg?v=1631024312"
                      }
                      alt="img"
                    />
                  ) : data.category == "Earrning" ? (
                    <img
                      src={
                        "https://www.giva.co/cdn/shop/files/ER0621_1_1024x1024.jpg?v=1695303343"
                      }
                      alt="img"
                    />
                  ) : data.category == "Necklaces & Pendants" ? (
                    <img
                      src={
                        "https://www.giva.co/cdn/shop/products/PD074_1_5283add8-2489-4280-bb28-a2ba6d3a935f_1024x1024.jpg?v=1651510881"
                      }
                      alt="img"
                    />
                  ) : data.category == "Accessories" ? (
                    <img
                      src={
                        "https://www.giva.co/cdn/shop/products/A0028_1024x1024.jpg?v=1623130665"
                      }
                      alt="img"
                    />
                  ) : (
                    <img
                      src={
                        "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/r/a/h/-original-imagpzzjeymdfvye.jpeg?q=70"
                      }
                      alt="img"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="right">
              <h2>{data.about}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Aperiam tempore voluptatum perferendis non deleniti
                repellendus!
              </p>
              <div className="right-mid">
                <h3>{data.brand}</h3>
                <p>{data.category}</p>
                <p> ₹ {data.price}</p>
              </div>
              <div className="right-bottom">
                <button onClick={AddtoCart}>ADD TO BAG</button>
              </div>
            </div>
          </div>
          <div className="best_seller">
            <div className="best_seller-heading">
              <div>
                <h2>Bessellers</h2>
                <p>Check Out the New Collections of Famous Brands</p>
              </div>
              <div className="best_seller-heading-right">
                <p>
                  <Link to="/ProductList">VIEW ALL</Link>
                </p>
              </div>
            </div>
            <div className="best_seller-products">
              <BestSellerCard
                image={best_seller_1}
                title={"Messika"}
                desc={"White Gold Diamond Ring"}
                price={"1.390"}
              />
              <BestSellerCard
                image={best_seller_2}
                title={"Tiffani"}
                desc={"Silver Necklace"}
                price={"750"}
              />
              <BestSellerCard
                image={best_seller_3}
                title={"Bulgari"}
                desc={"White Gold Diamond Earrings"}
                price={"7.250"}
              />
              <BestSellerCard
                image={best_seller_4}
                title={"Cartier"}
                desc={"White Gold Ring"}
                price={"1.950"}
              />
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
    flex-direction: column;
  }
  .parent-top {
    display: flex;
    margin: auto;
    width: 100%;
    justify-content: space-between;
    /* height: 700px; */
  }
  .left {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .left-child-1,
  .left-child-1 img {
    width: 100%;
    /* height: 350px; */
  }
  .left-child-2 {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .left-child-2 div {
    width: 48%;
  }
  .left-child-2 div img {
    width: 100%;
  }
  .right {
    width: 50%;
    font-family: "Nunito Sans", sans-serif;
  }
  .right h2 {
    font-family: "Nunito Sans", sans-serif;
    font-size: 30px;
  }
  .right-mid {
    margin: 20px 0;
  }
  .right-mid h3 {
    font-size: 20px;
  }
  .right-bottom button {
    background-color: black;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
  }
  .best_seller {
    margin: 30px 0;
  }
  .best_seller-heading {
    display: flex;
    justify-content: space-between;
  }
  .best_seller-heading > div > h2 {
    font-family: "Nunito Sans", sans-serif;
    font-size: 30px;
  }
  .best_seller-heading-right {
    letter-spacing: 3px;
    font-family: "Nunito Sans", sans-serif;
  }
  .best_seller-heading-right p a {
    text-decoration: none;
    color: black;
  }
  .best_seller-products {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    cursor: pointer;
  }
  @media (max-width: 780px) {
    .best_seller-products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

