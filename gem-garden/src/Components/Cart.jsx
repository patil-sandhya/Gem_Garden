import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"; // Import styled from Styled Components
import { store } from "../Redux/Store";
import { getUser } from "../Redux/Cart/action";
import CartCard from "./CartCard";
const Cart = () => {
  const { name, orders, cart, address } = useSelector((store) => {
    return {
      name: store.CartReducer.name,
      orders: store.CartReducer.orders,
      cart: store.CartReducer.cart,
      address: store.CartReducer.address,
    };
  });
  const cartItems =[
    {
      "id": 32,
      "name": "Jewelry",
      "price": 2099,
      "about": "1/2 ct. tw. Enchanted Diamond Pendant",
      "category": "Necklaces & Pendants",
      "brand": "John Hardy",
      "rating": 5.4,
      "avatar": "https://www.cleanorigin.com/media/catalog/product/cache/6053f97871d98e1641665999266ec4c4/3/0/30772.alt_1_1.jpg"
    },
    {
      "id": 33,
      "name": "Jewelry",
      "price": 5099,
      "about": "1/2 ct. tw. Enchanted Diamond Pendant",
      "category": "Necklaces & Pendants",
      "brand": "Graff",
      "rating": 4.4,
      "avatar": "https://www.cleanorigin.com/media/catalog/product/l/m/lmn1093_yg_3_1.jpg"
    },
    {
      "id": 34,
      "name": "Jewelry",
      "price": 3099,
      "about": "1/2 ct. tw. Trillion Etoile Necklaced",
      "category": "Necklaces & Pendants",
      "brand": "Reborto Coin",
      "rating": 1.4,
      "avatar": "https://www.cleanorigin.com/media/catalog/product/l/m/lmp1006.100-e-y_1.jpg"
    },
  ]
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(1));
  }, []);

  console.log(name);

  return (
    <Container>
      <MainSection>
        <LeftSection>
          {/* Content for the left section */}

          <div style={{ border: "1px solid red", padding: "15px" }}>
            Diliver To:<span> {name} </span>
            <br />
            <span>{address}</span>
          </div>
          <div>
          {
            cartItems.map((item)=>{
              return <CartCard key={item.id} {...item} />
            })
          }
          </div>
        </LeftSection>
        <RightSection>
          {/* Content for the right section */}
          <h2>Payment Details</h2>
          <p>Apply Cupon</p>
        </RightSection>
      </MainSection>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  margin: 60px;
`;

const MainSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 70%;
  padding: 20px;
  margin: 10px;
`;

const RightSection = styled.div`
  flex: 30%;
  background-color: #e0e0e0;
  padding: 20px;
  margin: 10px;

  @media (max-width: 768px) {
    flex: 100%;
    margin-top: 20px;
  }
`;
