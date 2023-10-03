import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteProduct, editProduct } from '../Redux/Admin/action'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


export const EditProduct = () => {

    const {id} = useParams()
    const [price, setPrice] = useState(0)
    const [about, setAbout] = useState('')
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const products = useSelector((store)=>store.productReducer.products)
    const dispatch = useDispatch()

    const navigate = useNavigate()

  
    useEffect(()=>{
      const {name, about, price, avatar} = products.find((el, i)=>el.id === +id)
      setPrice(price)
      setAbout(about)
      setName(name)
      setAvatar(avatar)
    },[])
  
    const handleEdit = ()=>{
      let obj = {
        name,
        about,
        price
      }
      dispatch(editProduct(id, obj)).then((res)=>[
        navigate(`/admin`)
      ]) 
    }

    const handleDelete = (id) =>{
        console.log(id);
        dispatch(deleteProduct(id))
        navigate(`/admin`)
    }
     
    return (
        <DIV>
            <div className='card'>
                <h1 className='cart-id' >Product Id: {id}</h1>
                <div><img src={avatar} alt="" /></div>
                <div className='card-title-div'><label className='card-title' >Name: </label><input className='card-title-input' type="text" value={name} onChange={(e)=>setName(e.target.value)} /></div>
                <div className='card-title-div'><label className='card-title' >Descriptioin: </label><input className='card-title-input' type="text" value={about} onChange={(e)=>setAbout(e.target.value)} /></div>
                <div className='card-title-div'><label className='card-title' >Price: </label><input className='card-title-input' type="number" value={price} onChange={(e)=>setPrice(+e.target.value)} /></div>
                <div className='card-btn-parent-div'>
                    <div className='card-btn-div'><button className='card-btn' onClick={handleEdit}>Update</button></div>
                    <div className='card-btn-div'><button className='card-btn' onClick={()=>handleDelete(id)} >Delete</button></div>
                </div>
            </div>
        </DIV>
    )
  }

  const DIV = styled.div`

  margin-block: 50px;


  .cart-id{
    font-family: Oswald;
    /* font-family: "Nunito Sans", sans-serif; */
    letter-spacing: 3px;
  }

  .card{
    width: 30%;
    margin: auto;
    /* margin-inline: 50px; */
    border: 1px solid #c7c7c7;
    padding: 30px 30px 50px 30px;
    border-radius: 10%;
    /* margin: 50px; */
  }

  .card:hover{
    border: 2px solid #292525;
  }


  .card h1{
    text-align: center;
    margin: 0;
  }

  .card-title-div{
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .card-title{
    font-size: 22px;
    font-weight: 700;
    font-family: "Nunito Sans", sans-serif;
    /* font-family: Oswald; */
    letter-spacing: 1px;

  }

  .card-title-input{
      width: 45%;
      border: none;
      border-radius: 10px;
      text-indent: 5px;
      border: 1px solid #c7c7c7;
      font-size: 22px;
      font-family: "Nunito Sans", sans-serif;
  }

  .card img{
    width: 60%;
    /* border: 1px solid black; */
    display: flex;
    margin: auto;
    margin-bottom: 30px;
    /* border: 1px solid #c7c7c7; */
    /* border-radius: 50%; */
  }

  .card-btn-div{
    margin: auto;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    width: 100%;
    /* border: 2px solid #292525; */
}

.card-btn-parent-div{
    display: flex;
    width: 100%;
    /* border: 2px solid #292525; */
}

.card-btn:hover{
    background-color: white;
    color: black;
    border: 2px solid #292525;
}

.card-btn{
    /* border-bottom-left-radius: 50%;
    border-top-right-radius: 50%; */
    border-radius: 50px;
    border: none;
    width: 75%;
    font-size: 22px;
    background-color: #292525;
    font-family: "Nunito Sans", sans-serif;
    /* font-family: Oswald; */
    color: white;
    padding-block: 12px;
  }

  `
  