import React from 'react'
import styled from "styled-components";


export const ProductCard = ({id, price, about, avatar, brand }) => {
  return (
    <DIV>
        <div className='card-div' >
            <img className='card-image' src={avatar}  alt="jwellery" />
            <p className='card-about'>{about}</p>
            <p className='card-details'>{brand}</p>
            <p className='card-details'>₹ {price}</p>
        </div>
    </DIV>
  )
}


const DIV = styled.div`
    
    border: 1px solid #c7c7c7;
    text-align: left;
    /* padding: 0; */
    transition: 1s;
    
    .card-div{
        transition: .1s;
        padding: 10px;
    }
    
    .card-div:hover{
        /* border: .5px solid #292525; */

    }
    
    .card-image{
        width: 100%;
        /* border: 1px solid grey; */
        margin: auto;
        transition: .5s;
    }

    .card-image:hover{
        scale: 1.1;
    }

    .card-about{
        font-weight: 500;
        /* margin: -10; */
    }
    .card-details{
        color: #303030;
        margin: 5;
        font-family: "Nunito Sans", sans-serif;
    }

    
`