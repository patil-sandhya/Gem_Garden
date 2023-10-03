import { useState } from "react";
import styled from "styled-components";
import { postProduct } from "../../Redux/Admin/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { store } from "../redux/store";


const initalState = {
 
    name: "",
    price: "",
    about: "",
    category: "",
    brand: "",
    rating: "",
    image: "",
 
};
export const AddProduct = () => {

  const navigate = useNavigate()
  const [productData, setproductData] = useState(initalState);
  const {error,isError}=useSelector((store)=>{
    return{
        error:store.productReducer.error,
        isError:store.productReducer.isError,
    };
 },shallowEqual);
// const error=useSelector(store=>store.productReducer.error)
// const isError=useSelector(store=>store.productReducer.isError)
  const dispatch=useDispatch()


  const handleChange = (e) => {
    const {value,name}=e.target;
    setproductData((prev)=>{
        return {
            ...prev,
            [name]: name === "price" || name === "rating" ? +value : value,
          };
        });
  };




  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(productData)
    dispatch(postProduct(productData))
    setproductData(initalState)
    navigate('/admin')
  }


  return (
    <DIV iserror={isError.toString()}>

      {/* <h1>AdminPage</h1> */}


      {error&&<h3>{error}</h3>}


      <form onSubmit={handleSubmit}>

      <div className='card'>
      <h1 className='cart-id' >Add New Product</h1>

        <div className='card-title-div'><label className='card-title' >Name: </label>
        <input
          className='card-title-input'
          type="text"
          placeholder="Name"
          value={productData.name}
          onChange={handleChange}
          name="name"
        />
        </div>


       <div className='card-title-div'><label className='card-title' >Brand: </label>
        <input
          className='card-title-input'
          type="text"
          placeholder="Brand"
          value={productData.brand}
          onChange={handleChange}
          name="brand"
        />
        </div>

        <div className='card-title-div'><label className='card-title' >Price: </label>
        <input
          className='card-title-input'
          type="text"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
          name="price"
        />
        </div>

        <div className='card-title-div'><label className='card-title' >Image: </label>
       <input
        className='card-title-input'
          type="text"
          placeholder="Image"
          value={productData.image}
          onChange={handleChange}
          name="image"
        />
        </div>

        <div className='card-title-div'><label className='card-title' >About: </label>
         <input
          className='card-title-input'
          type="text"
          placeholder="About"
          value={productData.about}
          onChange={handleChange}
          name="about"
        />
        </div>

        <div className='card-title-div'><label className='card-title' >Rating: </label>
        <input
          className='card-title-input'
          type="text"
          placeholder="Rating"
          value={productData.rating}
          onChange={handleChange}
          name="rating"
        />
        </div>

        <div className='card-title-div'><label className='card-title' >Category: </label>
        <select
          name="category"
          value={productData.category}
          onChange={handleChange}
          className='card-title-input'
        >
          <option value="">Select Category</option>
          <option value="Rings">Ring</option>
          <option value="Breceletes">Breceletes</option>
          <option value="Earings">Earings</option>
          <option value="Necklaces & Pendants">Necklaces & Pendants</option>
          <option value="Accessories">Accessories</option>
          <option value="Men's jewelry">Men's jewelry</option>
        </select>
        </div>
        
        <div className='card-btn-div'><button className='card-btn' type="submit"> Add Products</button></div>
      </div>

      </form>
    </DIV>
  );
};


const DIV = styled.div`

  margin-block: 50px;

  .select-tag{
    /* width: 100%; */
    font-family: "Nunito Sans", sans-serif;
  }


  .cart-id{
    font-family: Oswald;
    /* font-family: "Nunito Sans", sans-serif; */
    letter-spacing: 3px;
    padding-bottom: 40px;
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
    margin-bottom: 20px;
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
  