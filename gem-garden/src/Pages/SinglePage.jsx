import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard } from "../ProductCard";
import { addToBag, addToCart } from "../Redux/action" // Assuming you have these action creators

export const SingleProduct = () => {

  
  const { id } = useParams();
  const [data, setData] = useState({});
  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = products.find((el) => el.id === +id);
    setData(product);
  }, [id, products]);

  const handleAddToBag = () => {
    dispatch(addToBag(data)); // Dispatch an action to add the product to the bag
  };

  const handleAddToCart = () => {
    dispatch(addToCart(data)); // Dispatch an action to add the product to the cart
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <h1>Product Details</h1>
      {data ? (
        <>
          <ProductCard {...data} />
          <button onClick={handleAddToBag}>Add to Bag</button>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};
