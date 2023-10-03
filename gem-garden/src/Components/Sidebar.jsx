import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const [brandDiv, setBrandDiv] = useState(false)
  const [categoryDiv, setCategoryDiv] = useState(false)
  const [priceDiv, setPriceDiv] = useState(false)
  const [category, setcategory] = useState(searchParams.getAll("category") || []);
  const [brand, setbrand] = useState(searchParams.getAll("brand") || []);
  const [price, setPrice] = useState(searchParams.get("price") || "");


  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el, i) => el !== value);
    } else {
      newCategory.push(value);
    }
    setcategory(newCategory);
  };

   const handleBrand = (e)=>{
        const {value} = e.target
        let newBrand = [...brand]
        if(newBrand.includes(value)){
            newBrand = newBrand.filter((el, i)=>el !== value)
        } else {
            newBrand.push(value)
        }
        setbrand(newBrand)
    }

    const handlePrice = (e)=>{
        const {value} = e.target
        setPrice(value)
    }

  useEffect(() => {
    if (price === "All") {
      setPrice("");
    }

    let params = {
      category,
      brand,
    };
    price && (params.price = price);
    setSearchParams(params);
  }, [category, brand, price]);
  
  
  return (<>
    <DIV>
        <div className='parent-div' > 

            <p className='filter'>⇅ Filter by</p>

            <div className='filter-title-div'>
                <p className='filter-title' onClick={(e)=>(setBrandDiv(!brandDiv))}>Brand</p>
                {brandDiv && <div className='filter-options'>
                    <input type="checkbox" value='Cartier' onChange={handleBrand} checked={brand.includes('Cartier')} /><label>Cartier</label><br />
                    <input type="checkbox" value='Grrard' onChange={handleBrand} checked={brand.includes('Grrard')} /><label>Grrard</label><br />
                    <input type="checkbox" value='David Yurman' onChange={handleBrand} checked={brand.includes('David Yurman')} /><label>David Yurman</label><br />
                    <input type="checkbox" value='Rolex' onChange={handleBrand} checked={brand.includes('Rolex')} /><label>Rolex</label><br />
                    <input type="checkbox" value='John Hardy' onChange={handleBrand} checked={brand.includes('John Hardy')} /><label>John Hardy</label><br />
                    <input type="checkbox" value='Mikimoto' onChange={handleBrand} checked={brand.includes('Mikimoto')} /><label>Mikimoto</label><br />
                    <input type="checkbox" value='Tiffani' onChange={handleBrand} checked={brand.includes('Tiffani')} /><label>Tiffani</label><br />
                    <input type="checkbox" value='Graff' onChange={handleBrand} checked={brand.includes('Graff')} /><label>Graff</label><br />
                    <input type="checkbox" value='Reborto Coin' onChange={handleBrand} checked={brand.includes('Reborto Coin')} /><label>Reborto Coin</label><br />
                    <input type="checkbox" value='Messica' onChange={handleBrand} checked={brand.includes('Messica')} /><label>Messica</label><br />
                    <input type="checkbox" value='OMEGA' onChange={handleBrand} checked={brand.includes('OMEGA')} /><label>OMEGA</label><br />
                    <input type="checkbox" value='MEISTERSINGER' onChange={handleBrand} checked={brand.includes('MEISTERSINGER')} /><label>MEISTERSINGER</label><br />
                    <input type="checkbox" value='LOUIS MOINET' onChange={handleBrand} checked={brand.includes('LOUIS MOINET')} /><label>LOUIS MOINET</label><br />
                    <input type="checkbox" value='GRAND SEIKO' onChange={handleBrand} checked={brand.includes('GRAND SEIKO')} /><label>GRAND SEIKO</label><br />
                    <input type="checkbox" value='FREDERIQUE CONSTANT' onChange={handleBrand} checked={brand.includes('FREDERIQUE CONSTANT')} /><label>FREDERIQUE CONSTANT</label><br />
                    <input type="checkbox" value='BOVET' onChange={handleBrand} checked={brand.includes('BOVET')} /><label>BOVET</label><br />
                    <input type="checkbox" value='ALPINA' onChange={handleBrand} checked={brand.includes('ALPINA')} /><label>ALPINA</label><br />
                </div>}
            </div>

            <div className='filter-title-div'>
                <p className='filter-title' onClick={(e)=>(setCategoryDiv(!categoryDiv))} >Category</p>
            {categoryDiv && <div className='filter-options' >
                    <input type="checkbox" value='Rings' onChange={handleCategory} checked={category.includes('Rings')} /><label>Rings</label><br />
                    <input type="checkbox" value='Brecelets' onChange={handleCategory} checked={category.includes('Brecelets')} /><label>Brecelets</label><br />
                    <input type="checkbox" value='Earrning' onChange={handleCategory} checked={category.includes('Earrning')} /><label>Earrning</label><br />
                    <input type="checkbox" value='Necklaces & Pendants' onChange={handleCategory} checked={category.includes('Necklaces & Pendants')} /><label>Necklaces & Pendants</label><br />
                    <input type="checkbox" value='Accessories' onChange={handleCategory} checked={category.includes('Accessories')} /><label>Accessories</label><br />
                    <input type="checkbox" value="Men's jewelry" onChange={handleCategory} checked={category.includes("Men's jewelry")} /><label>Men's jewelry</label><br />
                </div>}
            </div>

            <div className='filter-title-div'>
                <p className='filter-title' onClick={(e)=>(setPriceDiv(!priceDiv))} >⇅ Sort by</p>
            {priceDiv && <div className='filter-options' >
                    <input type="radio" value='asc' onChange={handlePrice} checked={price === 'asc'} /><label>Low to High</label><br />
                    <input type="radio" value='desc' onChange={handlePrice} checked={price === 'desc'} /><label>High to Low</label><br />
                    <input type="radio" value='All' onChange={handlePrice} checked={price === 'All'} /><label>All</label><br />
                </div>}
            </div>
        </div>
    </DIV>
    
    </>)
}


const DIV = styled.div`

padding: -10;
  .parent-div {
    /* padding: 10px; */
    /* border: 5px solid grey; */
    transform: 1s;
    color: white;
    background-color: #292525;
    display: flex;
    justify-content: space-around;
    position: relative;
    cursor: pointer;
  }
  
  .filter{
    letter-spacing: 1px;
    width: 25%;
    display: flex;
    justify-content: center
  }

    .filter-options{
        position: absolute;
        top:100%;
        z-index: 1;
        padding: 15px;
        background-color: white;
        border: 1px solid grey;
        color: black;
        font-family: "Nunito Sans", sans-serif;
        
    }

    .filter-title{
      /* border: 1px solid yellow; */
        padding-inline: 10px;
        transition: .1s;
        letter-spacing: 1px;
        font-family: "Nunito Sans", sans-serif;
      }
      
    .filter-title-div{
      /* border: 3px solid red; */
      display: flex;
      justify-content: center;
      width: 25%;
      margin: auto;
    }

    .filter-title:hover{
        scale: 1.2;
    }
    .child-brand {
      position: absolute;
      background-color: #292525;
      z-index: 10;
  }


  @media screen and (max-width: 900px){
    .filter{
      display: none;
    }
    .filter-title-div{
      width: 33.33%;
      border: 1px solid #aeaeae;
    }
    .filter-title{
      font-size: smaller;
    }

  }

  @media screen and (max-width: 600px){

    .filter{
      display: none;
    }

    .filter-title-div{
      border: 1px solid #aeaeae;
    }
    
    .filter-options{
      font-size: 10px;
    }
    .filter-title{
      font-size: smaller;
    }

  }

`
