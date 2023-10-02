import React, { useEffect, useState } from "react";
import { ProductCard } from "../Components/ProductCard";
import styled from "styled-components";
import { getProduct } from "../Redux/Product/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../Components/Sidebar";
import { useSearchParams } from "react-router-dom";
import Loading_Indicator from '../Assets/Loading_Indicator.gif'
import HeroSection from "../Components/HeroSection";


export const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(20);

  const { isError, isLoading, products, totalProductFetch } = useSelector((store) => {
    return {
      products: store.productReducer.products,
      isError: store.productReducer.isError,
      isLoading: store.productReducer.isLoading,
      totalProductFetch: store.productReducer.totalProductFetch
    };
  },shallowEqual);

  
// console.log(totalProductFetch);

  useEffect(() => {
    let params = {
      params: {
        // ?_page=1&_limit=20
        // _page: 1,
        _limit: limit,
        category: searchParams.getAll("category"),
        brand: searchParams.getAll("brand"),
        _sort: searchParams.get("price") && "price",
        _order: searchParams.get("price"),
      },

      // _sort=votes&_order=asc
    };
    dispatch(getProduct(params));
  }, [searchParams, limit]);

  const handleButton = () => {
    setLimit(limit + 20);
    // console.log('button click');
  };

  // if(isLoading){
  //   return <LOADING><div className="loading-indicator"><img src={Loading_Indicator} /></div></LOADING>
  // }

  return (
    <>
      <HeroSection />
      <Sidebar />
      <DIV>

            <div className="grid-card-parent" >
            {products.map((el, i) => {
              return <ProductCard key={el.id} {...el} />
            })}
          </div>
          {(isLoading) && <div className="loading-indicator"><img style={{backgroundColor: 'green'}} src={Loading_Indicator} /></div>}
      </DIV>

      {/* {isLoading ? <div className="loading-indicator"><img src={Loading_Indicator} /></div> : ( */}
        <BUTTON>
          {products.length == totalProductFetch ? "" : <div className="Load-div">
            <button onClick={handleButton} className="Load-Button">
              LOAD MORE
            </button>
          </div>}
        </BUTTON>
      {/* )} */}
    </>
  );
};

const LOADING = styled.div`
`

const DIV = styled.div`

  .grid-card-parent{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 40px;
    padding: 50px;
  }
  
  .loading-indicator{
    background-color: red;
    width: 25%;
    display: flex;
    margin: auto;

  }

  @media screen and (min-width: 1000px) and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }


  `;
  
const BUTTON = styled.div`
  .Load-div {
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
  }

  .Load-Button {
    width: 10%;
    height: 7vh;
    text-align: center;
    align-items: center;
    background-color: white;
    border: 1px solid #aeaeae;
    border-radius: 8px;
    letter-spacing: 2px;
    font-size: 15px;
    transition: .5s;
  }

  .Load-Button:hover{
    /* border: 1px solid #292525; */
    background-color: #292525;
    color: white;
    transition: 0.1s;
  }

  .Load-Button:hover {
    border: 1px solid #292525;
  }
`
