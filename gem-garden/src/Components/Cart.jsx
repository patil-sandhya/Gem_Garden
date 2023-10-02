import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components"; // Import styled from Styled Components
import { store } from "../Redux/Store";
import { getUser, upuser } from "../Redux/Cart/action";
import CartCard from "./CartCard";
import { updateCart } from "../Redux/Cart/action";

const Cart = () => {
  const userId = localStorage.getItem("userId")
  const [discount, setDiscount]= useState(0)
  const [amt, setAmt] = useState(0)
  const { name, orders, cart, address } = useSelector((store) => {
    return {
      name: store.CartReducer.name,
      orders: store.CartReducer.orders,
      cart: store.CartReducer.cart,
      address: store.CartReducer.address,
    };
  }, shallowEqual);
  //console.log(userId)
  const dispatch = useDispatch();
  const item = [
    {
      id: 32,
      name: "Jewelry",
      price: 2099,
      about: "1/2 ct. tw. Enchanted Diamond Pendant",
      category: "Necklaces & Pendants",
      brand: "John Hardy",
      qty: 1,
      rating: 5.4,
      avatar:
        "https://www.cleanorigin.com/media/catalog/product/cache/6053f97871d98e1641665999266ec4c4/3/0/30772.alt_1_1.jpg",
    },
    {
      id: 33,
      name: "Jewelry",
      price: 5099,
      about: "1/2 ct. tw. Enchanted Diamond Pendant",
      category: "Necklaces & Pendants",
      brand: "Graff",
      qty: 1,
      rating: 4.4,
      avatar:
        "https://www.cleanorigin.com/media/catalog/product/l/m/lmn1093_yg_3_1.jpg",
    },
    {
      id: 34,
      name: "Jewelry",
      price: 3099,
      about: "1/2 ct. tw. Trillion Etoile Necklaced",
      category: "Necklaces & Pendants",
      brand: "Reborto Coin",
      qty: 1,
      rating: 1.4,
      avatar:
        "https://www.cleanorigin.com/media/catalog/product/l/m/lmp1006.100-e-y_1.jpg",
    },
  ];
  useEffect(() => {
    dispatch(getUser(userId));
    //dispatch(upuser(item))
  }, []);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price * cart[i].qty;
    }
     if(sum > 10000 && sum < 20000){
      setDiscount(0.5)
     }else{
      setDiscount(0.7) 
     }
     if(sum )
    setAmt(sum)
  }, [cart]);
  const handleQty = (id, val) => {
    console.log(id, val);
    let res = cart.map((item) => {
      //console.log(typeof item.id, typeof id)
      return item.id == id ? { ...item, qty: item.qty + val } : { ...item };
    });
   // console.log("res", res);
    dispatch(updateCart(1, res));
  };

  const handleDelete = (id) => {
   // console.log("dlt")
    let res = cart.filter((item) => item.id != id);
    dispatch(updateCart(1, res))
  };
  let totalItems = cart.length
  
  return (
    <Container>
      <MainSection>
        <LeftSection>
          {/* Content for the left section */}

          <User>
            Diliver To:<span className="userName"> {name} </span>
            <br />
            <span>{address}</span>
          </User>
          <div>
            {cart.map((item) => {
              return (
                <CartCard
                  key={item.id}
                  handleQty={handleQty}
                  handleDelete={handleDelete}
                  {...item}
                />
              );
            })}
          </div>
        </LeftSection>
        <RightSection>
          {/* Content for the right section */}
          <div>
          <h3>Gifting & Personalisation</h3>
          <Gift>
            <img src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="" />
            <div>
            <h4>Is this a gift for someone special?</h4>
            <div>Add gift wrapping and include a personalized message on the card, only for ₹50</div>
            <WrapBtn>WRAP IT</WrapBtn>
            </div>
            </Gift>
          </div>
          <h3>Price Details ({totalItems} items)</h3>
          <div className="details">
          <div>Subtotal</div>
          <div>₹{amt}</div>
          </div>
          <div className="details">
          <div>Tax Rate</div>
          <div>1%</div>
          </div>
          <div className="details">
          <div>Tax</div>
          <div>₹{(amt*1/100).toFixed(2)}</div>
          </div>
          <div className="details">
          <div>Discount on Subtotal</div>
          <div>₹{(amt*(discount)/100).toFixed(2)}</div>
          </div>
          <div className="details">
          <div>Convinience Fee</div>
          <div>₹99</div>
          </div>
          <hr />
          <div className="details">
          <div>Total Amount</div>
          <div>₹{(amt+(amt*1/100)+99 - (amt*(discount)/100)).toFixed(2)}</div>
          </div>
          <div className="orderBtn">
          <OrderBtn>PLACE ORDER</OrderBtn>
          </div>
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");
font-family: 'Nunito Sans', sans-serif;
  margin: 60px;
  .orderBtn{
    display: flex;
    justify-content: center;
    margin: 5px;
  }
  @media (max-width: 768px) {
    margin: 0%;
  }
`;
const Gift = styled.div`
  display: flex;
  background: linear-gradient(to bottom, #ebebf0 0%, #c0c0c4 34.48%, #a7a7a8 100%);
  
  img{
    height: 180px;
  }
`;

const MainSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const User = styled.div`
  border: 1px solid #A9A9A9;
padding: 15px;

.userName{
  font-size: 16px;
  font-weight: bold;
}
`;
const LeftSection = styled.div`
  flex: 70%;
  padding: 20px;
  margin: 10px;
`;

const RightSection = styled.div`
  flex: 30%;
  padding: 20px;  
  margin: 10px;

  @media (max-width: 768px) {
    flex: 100%;
    margin-top: 20px;
  }
  .details{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 30px;
  }
`;

 const OrderBtn= styled.button`
   background-color: black;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 5px;
  cursor: pointer;
  width: 200px;
 `;

 const WrapBtn = styled.button`
 margin-top: 10px;
 border: none;
 text-align: center;
 border-radius: 3px;
 padding: 5px;
 `;
