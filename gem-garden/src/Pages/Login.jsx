import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  getUserData,
  loginSuccess,
  loginFailure,
} from "../Redux/AuthRedux/action";
import styled from "styled-components";

let loginUser = {
  email: "",
  password: "",
};

const Login = () => {
  const [state, setState] = useState(loginUser);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const userData = useSelector((store) => store.AuthReducer.userData);
  const isLogin = useSelector((store) => store.AuthReducer.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    dispatch(getUserData());
  }, []);

  const handleAuth = (e) => {
    e.preventDefault();
    console.log(state);
    console.log(userData);

    let newUserData = userData.filter(
      (ele) => ele.email === state.email && ele.password === state.password
    );

    // console.log(newUserData);
    if (
      newUserData.length === 1 &&
      newUserData[0].email == state.email &&
      newUserData[0].password == state.password
    ) {
      localStorage.clear();
      localStorage.setItem("userId", newUserData[0].id);
      dispatch(loginSuccess());
      navigate(comingFrom, { replace: true });
    } else {
      dispatch(loginFailure());
    }
  };

  return (
    <DIV>
      <div className="login">
        <form onSubmit={handleAuth}>
          <h1>Log In</h1>
          {isLogin ? <h2>Invalid user/password</h2> : ""}
          <lable for="email">Email</lable>
          <input
            type="email"
            name="email"
            placeholder="Username"
            value={state.email}
            onChange={handleChange}
          />
          <lable for="password">Password</lable>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
          <p>
            <Link to="/">Forgot Password?</Link>
          </p>
          <button type="submit"> Login</button>
          <p>
            Don't have an account?<Link to="/signup">Sign Up</Link>
          </p>
          <p>
            Are you an Admin!  <Link to="/adminlogin">Login Here</Link>
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
    background-color: rgba(41, 37, 37, 0.05);
    margin: auto;
    padding: 100px;
  }
  .login > form {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.9);
    font-family: "Nunito Sans";
    padding: 50px 75px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .login > form > lable {
  }
  .login > form > input {
    padding: 5px 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .login > form > button {
    align-items: center;
    justify-content: center;
    background-color: black;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    margin: auto;
  }
  @media (max-width:400px) {
    .login {
      margin: auto;
      padding: 10px;
    }
    .login > form {
      width:90%;
      padding: 50px 10px;
      
    }
  }
`;
