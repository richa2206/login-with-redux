import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import "./Login.css";
import { login } from "../redux/actions/actions";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  console.log("inside login func");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inside handlesubmit");

    dispatch(login());
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="name"
          value={name}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit_btn" className="submit__btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
