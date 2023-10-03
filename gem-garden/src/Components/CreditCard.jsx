import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Alert from "./Alert";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Redux/Store";
import { updateCart, updateOrder } from "../Redux/Cart/action";
import styled from "styled-components";

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
  const userId = localStorage.getItem("userId")
  
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
      dispatch(updateCart(userId,emptyCart))
     dispatch(updateOrder(userId,order))
  }


 
  return (
    <DIV>
    <div className="login">
    <Cards number={number}
    name={name}
    expiry={expiry}
    cvc={cvc}
    focused={focus}
    />
    <br />
      <form action="" onSubmit={handleSubmit}>
      <h3>Card Details</h3>
        <input
          
          onChange={(e) => setNumber(e.target.value)}
          value={number}
          name="number"
          type="number"
          disabled={(number.length === 16)}
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
          disabled={(expiry.length === 5)}
        />
        <input
          type="text"
          onChange={(e) => setcvc(e.target.value)}
          value={cvc}
          name="cvc"
          placeholder="CVV"
          onFocus={(e)=> setFocus(e.target.name)}
          disabled={(cvc.length === 3)}
        />
        <button type="submit" >Make Payment</button>
      </form>
      {showAlert && <Alert type={showAlert.type} message={showAlert.message} />}

    </div>
    </DIV>
  );
};

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");
  .login {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(41,37,37,.05);
    margin:  auto;
    padding: 50px;
  }
  .login > form {
    display:flex;
    flex-direction: column;
    background-color: rgba(255,255,255,.9);
    font-family: 'Nunito Sans';
    padding:30px 55px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    
  }
  .login > form > lable{
  }
  .login > form > input{
    border: 1px solid gray;
    padding:5px 10px;
    font-size:18px;
    margin-bottom:10px;
  }
  .login > form > button{
    align-items:center;
    justify-content:center;
    background-color: black;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    margin:auto;
  }
`;