import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { login } from "../Redux/AuthRedux/action";
import styled from "styled-components";

let loginUser = {
  email: "",
  password: "",
};

const Login = () => {
  const [state, setState] = useState(loginUser);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const comingFrom = location.state?.from?.pathname || "/";


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setState((prev) =>{
        return {
            ...prev,
            [name]:value,
        }
    })
  };
  const handleAuth = (e) => {
    e.preventDefault();
    dispatch(login(state)).then((res) => {
      navigate(comingFrom, { replace: true });
    });
  };

  return (
    <DIV>
      <div className="login">
      <form onSubmit={handleAuth}>
      <lable for="email" >Email</lable>
        <input
          type="email"
          name="email"
          placeholder="Username"
          value={state.email}
          onChange={handleChange}
        />
        <lable for="password" >Password</lable>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <p><Link to="/" >Forgot Password?</Link></p>
        <button type="submit"> Login</button>
        <p>
          Don't have an account?<Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
    </DIV>
  );
};

export default Login;
// font-family: 'Nunito Sans', sans-serif;
// font-family: 'Oswald', sans-serif;

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");

  .login {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(41,37,37,.05);
    margin: auto;
    padding: 100px;


  }
  .login > form {
    display:flex;
    flex-direction: column;
    background-color: rgba(255,255,255,.9);
    font-family: 'Nunito Sans';
    padding:100px 75px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .login > form > lable{

  }
  .login > form > input{
    padding:5px 10px;
    font-size:18px;
    margin-bottom:10px;
  }
  .login > form > button{
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