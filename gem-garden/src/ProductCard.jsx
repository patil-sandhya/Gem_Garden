import React from 'react'
import styled from "styled-components";


export const ProductCard = ({id, author, book_name, cover_photo, release_year }) => {
  return (
    <DIV>
        <img className='card-image' src={cover_photo}  alt="jwellery" />
        <p className='card-name'>{author}</p>
        <p className='card-brand'>{book_name}</p>
        <p className='card-brand'>{release_year}</p>
    </DIV>
  )
}


const DIV = styled.div`
    
    border: 1px solid grey;
    text-align: left;
    /* padding: 0; */
    

    .card-image{
        width: 100%;
        border: 1px solid grey;
        margin: auto;
    }
    .card-name{
        font-weight: 500;
        /* margin: -10; */
    }
    .card-brand{
        color: #303030;
        /* margin: -10; */
    }
`