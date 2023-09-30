import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { login } from "../Redux/AuthRedux/action";

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
    <div className="login">
      <form onSubmit={handleAuth}>
        <input
          type="email"
          name="email"
          placeholder="Username"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          password="Password"
          value={state.password}
          onChange={handleChange}
        />
        <p>Forgot Password?</p>
        <button type="submit"> Login</button>
        <p>
          Don't have an account?<Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
