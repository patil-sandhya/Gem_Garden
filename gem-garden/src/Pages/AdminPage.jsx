import { useState } from "react";
import styled from "styled-components";
import { postProduct } from "../Redux/Product/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
//import { store } from "../redux/store";
const initalState = {
 
    name: "",
    price: "",
    about: "",
    category: "",
    brand: "",
    rating: "",
    image: "",
 
};
export const AdminPage = () => {
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
  }
  return (
    <DIV iserror={isError.toString()}>
      {/* <h1>AdminPage</h1> */}
      {error&&<h3>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <input
          type="text"
          placeholder="Name"
          value={productData.name}
          onChange={handleChange}
          name="name"
        />
       
        <input
          type="text"
          placeholder="Brand"
          value={productData.brand}
          onChange={handleChange}
          name="brand"
        />
        <input
          type="text"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
          name="price"
        />
       <input
          type="text"
          placeholder="Image"
          value={productData.image}
          onChange={handleChange}
          name="image"
        />
         <input
          type="text"
          placeholder="about"
          value={productData.about}
          onChange={handleChange}
          name="about"
        />
        <input
          type="text"
          placeholder="rating"
          value={productData.rating}
          onChange={handleChange}
          name="rating"
        />
        <select
          name="category"
          value={productData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Rings">Ring</option>
          <option value="Breceletes">Breceletes</option>
          <option value="Earings">Earings</option>
          <option value="Necklaces & Pendants">Necklaces & Pendants</option>
          <option value="Accessories">Accessories</option>
          <option value="Men's jewelry">Men's jewelry</option>
        </select>
        
        <button type="submit"> Add Products</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: auto;
  border: ${({iserror})=>(iserror==="true"?"1px solid red":"1px solid green")};
  padding: 20px 30px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  input,
  select {
    height: 40px;
    width: 100%;
    font-size: center;
  }
  button {
    width: 50%;
    height: 35px;
    border: none;
    cursor: pointer;
  }
`;
