import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import { signup } from "../Redux/SignUpRedux/action";


const signUpUser = {
  firstName: "",
  lastName:"",
  email:"",
  password:"",
  dateOfBirth:"",
  mobileNumber:"",
};

const SignUp = () => {
  const [state, setState] = useState(signUpUser);
  const [comp,setComp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.vaalue;
    setState((prev) =>{
        return {
            ...prev,
            [name]:value,
        }
    })

  };
  const comparePass = (e) => {
    if(state.password !== e.target.value){
        setComp(true)
    }
    setComp(false);
  };
  const handleSignUp = (e) => {
    e.preventDefault();

  };

  return (
<DIV>
<div className="signup">
      <form className="sign-up-form" onSubmit={handleSignUp}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="mobileNumber"
          placeholder="Mobile Number"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="Re-Confirm Password"
          onChange={comparePass}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
</DIV>
  );
};

export default SignUp;

// font-family: 'Nunito Sans', sans-serif;
// font-family: 'Oswald', sans-serif;

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");

  .signup {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(41,37,37,.05);
    margin: auto;
    padding: 100px;


  }
  .signup > form {
    display:flex;
    flex-direction: column;
    font-family: 'Nunito Sans';
    background-color: rgba(255,255,255,.9);
    padding:100px 75px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .signup > form > lable{

  }
  .signup > form > input{
    padding:5px 10px;
    font-size:18px;
    margin-bottom:10px;
  }
  .signup > form > button{
    align-items:center;
    justify-content:center;
    background-color: black;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    margin:auto;
  }

`;