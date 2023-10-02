import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Redux/Store";
import { updateCart, updateOrder } from "../Redux/Cart/action";

export const CreditCard = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setcvc] = useState("");
  const [focus, setFocus] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showAlert, setShowAlert] = useState(false);

  const cart = useSelector((store)=> store.CartReducer.cart)
  
  const showSuccessAlert = () => {
    setShowAlert({ type: 'success', message: 'Your Order Placed Thank you for shopping with us' });
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    showSuccessAlert()
      setTimeout(()=>{
        navigate("/")
      },2000)
      let order = [...cart]
      //console.log("order", order)
      let emptyCart =[]
      dispatch(updateCart(1,emptyCart))
     dispatch(updateOrder(order))
  }

  return (
    <div>
    <Cards number={number}
    name={name}
    expiry={expiry}
    cvc={cvc}
    focused={focus}
    />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="tel"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          name="number"
          onFocus={(e)=> setFocus(e.target.name)}
          placeholder="Card Number"
        />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          onFocus={(e)=> setFocus(e.target.name)}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(e) => setExpiry(e.target.value)}
          value={expiry}
          name="expiry"
          onFocus={(e)=> setFocus(e.target.name)}
          placeholder="MM/YY Expiry"
        />
        <input
          type="text"
          onChange={(e) => setcvc(e.target.value)}
          value={cvc}
          name="cvc"
          placeholder="CVC"
          onFocus={(e)=> setFocus(e.target.name)}
        />
        <input type="submit" value="Submit" />
      </form>
      {showAlert && <Alert type={showAlert.type} message={showAlert.message} />}

    </div>
  );
};
