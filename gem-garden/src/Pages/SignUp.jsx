import { useState } from "react";

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
    <div className="sign-up">
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
  );
};

export default SignUp;
