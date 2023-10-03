import React, { useEffect, useState } from "react";
import { ProductCart_Admin } from "./ProductCart_Admin";
import styled from "styled-components";
import { getProduct } from "../../Redux/Product/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../../Components/Sidebar";
import { useSearchParams } from "react-router-dom";
import Loading_Indicator from "../../Assets/Loading_Indicator.gif";
import HeroSection from "../../Components/HeroSection";
import { deleteProduct } from "../../Redux/Admin/action";

export const AdminList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(20);

  const { isError, isLoading, products, totalProductFetch } = useSelector(
    (store) => {
      return {
        products: store.productReducer.products,
        isError: store.productReducer.isError,
        isLoading: store.productReducer.isLoading,
        totalProductFetch: store.productReducer.totalProductFetch,
      };
    },
    shallowEqual
  );

  useEffect(() => {
    let params = {
      params: {
        _limit: limit,
        category: searchParams.getAll("category"),
        brand: searchParams.getAll("brand"),
        _sort: searchParams.get("price") && "price",
        _order: searchParams.get("price"),
      },
    };
    dispatch(getProduct(params));
  }, [searchParams, limit]);


  const handleButton = () => {
    setLimit(limit + 20);
  };

  if (isError) {
    return (
      <ERROR>
        <h1>Oops error 404❌❗❕</h1>
      </ERROR>
    );
  }

  return (
    <>
      {/* <HeroSection /> */}
      <Sidebar />
      <DIV>
        <div className="grid-card-parent">
          {products.map((el, i) => {
            return <ProductCart_Admin key={el.id} {...el}  />;
          })}
        </div>
      </DIV>

      <BUTTON>
        {/* <DIV> */}
          {products.length == totalProductFetch ? (
            ""
          ) : isLoading ? (
            <div className="loading-indicator">
              <img src={Loading_Indicator} />
            </div>
          ) : (
            <div className="Load-btn-div">
              <button onClick={handleButton} className="Load-Button">
                LOAD MORE
              </button>
            </div>
          )}
        {/* </DIV> */}
      </BUTTON>
    </>
  );
};





const ERROR = styled.div`
  width: 25%;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  margin: 0;
`;

const DIV = styled.div`

  .grid-card-parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 40px;
    padding: 50px;
  }


  @media screen and (max-width: 1200px) {
    .grid-card-parent {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (max-width: 900px) {
    .grid-card-parent {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 600px) {
    .grid-card-parent {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const BUTTON = styled.div`
  .Load-btn-div {
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
  }

  .loading-indicator {
    width: 25%;
    display: flex;
    margin: auto;
    justify-content: center;
    margin-bottom: 100px;
  }

  .Load-Button {
    width: 10%;
    height: 7vh;
    text-align: center;
    align-items: center;
    background-color: white;
    border: 1px solid #aeaeae;
    border-radius: 8px;
    letter-spacing: 1px;
    font-family: "Nunito Sans", sans-serif;
    font-size: 15px;
    transition: 0.5s;
  }

  .Load-Button:hover {
    background-color: #292525;
    color: white;
    transition: 0.1s;
  }

  .Load-Button:hover {
    border: 1px solid #292525;
  }


  @media screen and (max-width: 1200px) {
    .Load-Button {
      font-size: 13px;
      width: 13%;
      height: 6vh;
      padding: 5px;
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: 900px) {
    .Load-Button {
      font-size: 11px;
      width: 15%;
      height: 5vh;
      padding: 5px;
      letter-spacing: 1px;
    }
  }

  @media screen and (max-width: 600px) {
    .Load-Button {
      font-size: 9px;
      width: 18%;
      height: 4vh;
      padding: 5px;
      letter-spacing: 0.5px;
    }
  }
`;