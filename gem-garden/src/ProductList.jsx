import React from 'react'
import {data} from './data'
import { ProductCard } from './ProductCard'
import styled from "styled-components";

export const ProductList = () => {
    
  return (
    <DIV>
        {data.jwellery.map((el, i)=>{
            return <ProductCard key={el.id} {...el} />
        })}
    </DIV>
  )
}


const DIV = styled.div`

display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 10px;
row-gap: 40px;

`
