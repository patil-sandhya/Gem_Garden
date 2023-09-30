import React from 'react'
import styled from "styled-components";


export const ProductCard = ({id, price, about, avatar, brand }) => {



  return (
    <DIV about={about}>
        <div className='card-div' >
            <div className='card-image-div'><img className='card-image' src={avatar}  alt="jwellery" /></div>
            {/* {about.length <= 35 ? about : about.substring(0, 35 - 3) + '...'} */}
            <p className='card-about' id='card-about'>{about}</p>

            <p className='card-brand'>{brand}</p>
            <div className='card-button-div'>
                <button className='card-btn' id='cart-btn'>Add to Cart</button>
                <button className='card-btn' id='buy-btn' >Buy Now</button>
            </div>
            <p className='card-price'>₹ {price}</p>
        </div>


    </DIV>
  )
}


const DIV = styled.div`
    
    /* about{
        {({about}) => ()}
    } */
        

    /* text-align: left; */
    /* padding: 0; */
    transition: 1s;

    .card-div{
        transition: .1s;
        padding-inline: 20px;
        padding-block: 20px;
        border: 1px solid #c7c7c7;
        border-radius: 20%;
        position: relative;
        /* z-index: 1; */
    }
    
    .card-div:hover{
        border: 2px solid #292525;

    }
    
    .card-div:hover .card-button-div{
        display: flex;
        transform: translateY(0%);
    }

    .card-div:hover .card-about, .card-div:hover .card-brand{
        display: none;
    }

    /* .card-div:hover .card-btn  */


    .card-image-div{
        width: 70%;
        margin: auto;
        /* border: 1px solid grey; */
    }
    
    .card-image{
        width: 100%;
        /* border: 1px solid grey; */
        margin: auto;
        transition: .3s;
        max-height: 300px;
        object-fit: cover;
    }

    .card-image:hover{
        /* transform: scale(1.1); */
        border-radius: 50%;
        transform: rotate(20deg) scale(1.1);
        /* transform: rotate(10deg) */
    }

    .card-about{
        font-weight: 500;
        margin: 0;
        margin-top: 8px;
        padding: 1px;
        font-family: "Nunito Sans", sans-serif;
        /* white-space: nowrap; */
        overflow: hidden;
        text-overflow: ellipsis;
        /* border: 1px solid blue; */
    }

    /* #card-about{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    } */
  
    .card-brand, .card-price{
        padding: 2px;
        color: #303030;
        font-family: Oswald;
        letter-spacing: 1px;
        margin: 0;
        /* margin-left: 10px; */
        /* border: 1px solid blue; */
    }

    .card-button-div{
        /* border: 1px solid red; */
        display: flex;
        justify-content: space-between;
        display: none;
    }

    

    .card-btn{
        width: 30%;
        padding: 5px;
        height: 5vh;
        border: none;
        font-family: "Nunito Sans", sans-serif;
        margin-block: 10px;
        background-color: white;
        border: 2px solid #292525;
        transition: transform .3s ease-in-out;
        transform: translateY(20%);
    /* text-align: center; */
    /* align-items: center; */
    /* background-color: white; */
    /* border: 1px solid #aeaeae; */
    border-radius: 8px;
    /* letter-spacing: 1px; */
    font-size: 14px;
    /* transition: .5s; */
    /* background-color: #292525; */
    /* color: whitesmoke */
    }

    #buy-btn{
        background-color: #292525;
        color: white;
    }

    #cart-btn:hover{
        background-color: #292525;
        color: white;
    }

    #buy-btn:hover{
        background-color: white;
        color: black;
        border: 2px solid #292525;
    }
    
`