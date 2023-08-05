import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import "./Login.css";
import { login } from "../redux/actions/actions";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUserPass] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const dispatch = useDispatch();
  console.log("inside login func");

  function userHandler(e) {
    let val = e.target.value;
    setName(val);
    if (val.length < 3) {
      setUserPass(true);
    } else {
      setUserPass(false);
    }
  }

  const passHandler = (e) => {
    let item = e.target.value;
    setPassword(item);
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  };
  const handleSubmit = (e) => {
    if (user.length || passErr.length < 3) {
      alert("please provide valid info");
    } else {
      dispatch(
        login({
          name,
          email: email,
          password: password,
          loggedIn: true,
        })
      );
    }
    e.preventDefault();
    console.log("inside handlesubmit");
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="name"
          value={name}
          placeholder="Username"
          onChange={userHandler}
        />{" "}
        <br />
        {user ? <span>username not valid</span> : ""} <br />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br /> <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={passHandler}
        />
        <br />
        {passErr ? <span>Password length not good</span> : ""} <br />
        <button type="submit_btn" className="submit__btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
