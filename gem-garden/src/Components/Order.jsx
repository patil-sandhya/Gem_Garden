import Reac, { useEffect } from "react";
import styled from "styled-components";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import { getUser } from "../Redux/Cart/action";

export const Order = () => {
  const userId = localStorage.getItem("userId")

  const dispatch = useDispatch();
  const { name, orders, address } = useSelector((store) => {
    return {
      name: store.CartReducer.name,
      orders: store.CartReducer.orders,
      address: store.CartReducer.address,
    };
  }, shallowEqual);

  useEffect(() => {
    dispatch(getUser(userId));
  }, []);
  console.log(name, orders, address, "**");
  let formattedDate;
const generateDate = ()=>{
    const randomNumber = Math.random();
    const min = 3;
    const max = 8;
    const randomDigit = Math.floor(randomNumber * (max - min + 1)) + min;
    const currentDate = new Date();
  
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + randomDigit);
    const options = { day: "numeric", month: "long", year: "numeric" };
     formattedDate = futureDate.toLocaleDateString(undefined, options); 
}
  
  return (
    <Container>
      <User>
        Diliver To:<span className="userName"> {name} </span>
        <br />
        <span>{address}</span>
        <br />
      </User>
      <div>
        {orders.map((item) => {
        generateDate()
          return <OrderCard key={item.id} {...item} deliverDate={formattedDate} />;
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");
  font-family: "Nunito Sans", sans-serif;
  margin: 60px 200px;
  .orderBtn {
    display: flex;
    justify-content: center;
    margin: 5px;
  }
  @media (max-width: 768px) {
    margin: 0%;
  }
`;

const User = styled.div`
  border: 1px solid #a9a9a9;
  padding: 15px;

  .userName {
    font-size: 16px;
    font-weight: bold;
  }
`;
